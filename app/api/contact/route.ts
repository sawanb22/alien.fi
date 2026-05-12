import { upsertBrevoContact } from "@/lib/brevo/upsert-contact";
import { CONTACT_BUDGETS, CONTACT_SERVICES, CONTACT_TIMELINES } from "@/lib/lead-form-allowlists";
import { verifyRecaptchaV2 } from "@/lib/recaptcha/verify-token";
import { z } from "zod";

export const runtime = "nodejs";

const isAllowed = (value: string, allowed: readonly string[]) =>
  allowed.includes(value);

const homePayload = z.object({
  source: z.literal("home"),
  token: z.string().min(10).max(4000),
  name: z
    .string()
    .trim()
    .min(2)
    .max(120)
    .regex(/^[A-Za-z][A-Za-z\s'.-]*$/),
  company: z.string().trim().min(2).max(200),
  email: z.string().trim().email().max(254),
  budget: z.string().trim().min(1).max(200).refine((s) => /[0-9]/.test(s), "budget_numeric"),
  project: z.string().trim().min(20).max(8000),
});

const contactPayload = z.object({
  source: z.literal("contact"),
  token: z.string().min(10).max(4000),
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  co: z.string().max(200).optional(),
  role: z.string().trim().min(1).max(200),
  service: z.string().max(100).refine((s) => isAllowed(s, CONTACT_SERVICES), "service"),
  budget: z.string().max(100).refine((s) => isAllowed(s, CONTACT_BUDGETS), "budget"),
  timeline: z.string().max(100).refine((s) => isAllowed(s, CONTACT_TIMELINES), "timeline"),
  problem: z.string().max(8000).optional(),
});

const bodySchema = z.discriminatedUnion("source", [homePayload, contactPayload]);

function parseListId(raw: string | undefined, label: string): number | null {
  if (raw === undefined || raw === "") return null;
  const n = Number.parseInt(raw, 10);
  if (!Number.isFinite(n) || n < 1) {
    console.error(`[contact-api] invalid ${label}`);
    return null;
  }
  return n;
}

function json(data: unknown, status: number) {
  return Response.json(data, { status });
}

/** Safe machine-readable category for clients and logs (no secrets). */
function categorizeBrevoFailure(result: { status: number; brevoMessage: string }): string {
  const m = result.brevoMessage;
  if (m === "network") return "BREVO_NETWORK";
  if (/unrecognised ip|unrecognized ip|authorised_ips|authorized_ips/i.test(m)) return "BREVO_IP_NOT_ALLOWED";
  if (result.status === 401) return "BREVO_UNAUTHORIZED";
  if (result.status === 400) return "BREVO_BAD_REQUEST";
  if (result.status === 403) return "BREVO_FORBIDDEN";
  return "BREVO_UPSTREAM";
}

/** Dev-only hints for common Brevo failures (never echo raw Brevo bodies to clients in production). */
function brevoFailureUserMessage(
  isDev: boolean,
  result: { status: number; brevoMessage: string },
  generic: string,
): string {
  if (!isDev) return generic;
  const m = result.brevoMessage;
  if (/unrecognised ip|unrecognized ip|authorised_ips|authorized_ips/i.test(m)) {
    return (
      "Brevo blocked this request: your network IP is not on Brevo's authorised IP list for API calls. " +
      "Add it at https://app.brevo.com/security/authorised_ips (or turn off IP restriction), then try again."
    );
  }
  if (result.status === 401 && /key not found|unauthorized/i.test(m)) {
    return (
      "Brevo returned 401 (invalid API key). Regenerate in Brevo → SMTP & API → API keys, copy the full v3 key into BREVO_API_KEY (no spaces or quotes), restart npm run dev."
    );
  }
  return generic;
}

function brevoFailurePayload(
  isDev: boolean,
  source: "home" | "contact",
  result: { status: number; brevoMessage: string },
): { error: string; code: string } {
  const code = categorizeBrevoFailure(result);
  const fallbackHome = "Could not save your message. Please try again or email info@alien.fi.";
  const fallbackContact = "Could not save your message. Please try again or email hello@alien.fi.";
  const fallback = source === "home" ? fallbackHome : fallbackContact;

  if (isDev) {
    return { error: brevoFailureUserMessage(isDev, result, fallback), code };
  }

  if (code === "BREVO_IP_NOT_ALLOWED") {
    const mail = source === "home" ? "info@alien.fi" : "hello@alien.fi";
    return {
      error:
        "Could not save your message: Brevo blocked the server IP (API IP restriction). In Brevo open Security → Authorised IPs and turn off API IP restriction, or use a setup compatible with serverless hosting. You can email " +
        mail +
        " directly.",
      code,
    };
  }
  if (code === "BREVO_UNAUTHORIZED") {
    const mail = source === "home" ? "info@alien.fi" : "hello@alien.fi";
    return {
      error: `Could not save your message (CRM API rejected the key). Check BREVO_API_KEY on the host, or email ${mail}.`,
      code,
    };
  }
  if (code === "BREVO_NETWORK") {
    const mail = source === "home" ? "info@alien.fi" : "hello@alien.fi";
    return { error: `Network error while saving. Try again or email ${mail}.`, code };
  }

  return { error: fallback, code };
}

/** Strip BOM / wrapping quotes from .env paste mistakes (never log this value). */
function normalizeApiKey(raw: string | undefined): string {
  if (!raw) return "";
  let s = raw.trim().replace(/^\ufeff/, "");
  if (
    (s.startsWith('"') && s.endsWith('"')) ||
    (s.startsWith("'") && s.endsWith("'"))
  ) {
    s = s.slice(1, -1).trim();
  }
  return s;
}

export async function POST(req: Request) {
  const apiKey = normalizeApiKey(process.env.BREVO_API_KEY);
  const listWebsite = parseListId(process.env.BREVO_LIST_ID_WEBSITE, "BREVO_LIST_ID_WEBSITE");
  const listContact = parseListId(process.env.BREVO_LIST_ID_CONTACT, "BREVO_LIST_ID_CONTACT");
  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY?.trim();

  const isDev = process.env.NODE_ENV === "development";

  if (!apiKey || !listWebsite || !listContact) {
    return json(
      {
        ok: false,
        error: isDev
          ? "Missing BREVO_API_KEY or list id env (BREVO_LIST_ID_WEBSITE / BREVO_LIST_ID_CONTACT)."
          : "Form service is unavailable. Please try again later.",
      },
      503,
    );
  }

  if (!recaptchaSecret) {
    return json(
      {
        ok: false,
        error: isDev
          ? "Missing RECAPTCHA_SECRET_KEY (server). Pair it with NEXT_PUBLIC_RECAPTCHA_SITE_KEY in Google reCAPTCHA admin."
          : "Form service is unavailable. Please try again later.",
      },
      503,
    );
  }

  let jsonBody: unknown;
  try {
    jsonBody = await req.json();
  } catch {
    return json({ ok: false, error: "Invalid request." }, 400);
  }

  const parsed = bodySchema.safeParse(jsonBody);
  if (!parsed.success) {
    if (isDev) {
      console.error("[contact-api] validation", parsed.error.flatten());
    }
    return json({ ok: false, error: "Please check your entries and try again." }, 400);
  }

  const body = parsed.data;
  const captcha = await verifyRecaptchaV2(recaptchaSecret, body.token);
  if (!captcha.ok) {
    if (isDev && captcha.errorCodes?.length) {
      console.error("[contact-api] recaptcha error-codes:", captcha.errorCodes.join(", "));
    }
    return json({ ok: false, error: "Captcha verification failed. Please try again." }, 400);
  }

  if (body.source === "home") {
    const listIds = [listWebsite];
    const result = await upsertBrevoContact({
      apiKey,
      email: body.email,
      listIds,
      attributes: {
        FULL_NAME: body.name,
        COMPANY: body.company,
        BUDGET: body.budget,
        LEAD_SOURCE: "home",
        PROJECT_SUMMARY: body.project,
      },
    });
    if (!result.ok) {
      console.error("[contact-api] brevo home", {
        upstreamStatus: result.status,
        code: categorizeBrevoFailure(result),
        brevoMessage: result.brevoMessage.slice(0, 280),
      });
      const payload = brevoFailurePayload(isDev, "home", result);
      return json({ ok: false, error: payload.error, code: payload.code }, 502);
    }
    return json({ ok: true }, 200);
  }

  const listIds = [listContact];
  const co = body.co?.trim() ?? "";
  const problem = body.problem?.trim() ?? "";

  const result = await upsertBrevoContact({
    apiKey,
    email: body.email,
    listIds,
    attributes: {
      FULL_NAME: body.name,
      ...(co ? { COMPANY: co } : {}),
      ROLE: body.role,
      SERVICE: body.service,
      BUDGET: body.budget,
      TIMELINE: body.timeline,
      LEAD_SOURCE: "contact",
      ...(problem ? { PROBLEM_STATEMENT: problem } : {}),
    },
  });

  if (!result.ok) {
    console.error("[contact-api] brevo contact", {
      upstreamStatus: result.status,
      code: categorizeBrevoFailure(result),
      brevoMessage: result.brevoMessage.slice(0, 280),
    });
    const payload = brevoFailurePayload(isDev, "contact", result);
    return json({ ok: false, error: payload.error, code: payload.code }, 502);
  }

  return json({ ok: true }, 200);
}
