const BREVO_CONTACTS_URL = "https://api.brevo.com/v3/contacts";
const MAX_ATTR = 4000;

function clip(s: string, max: number): string {
  const t = s.trim();
  return t.length <= max ? t : t.slice(0, max);
}

export type BrevoLeadAttributes = {
  FULL_NAME: string;
  COMPANY?: string;
  BUDGET?: string;
  LEAD_SOURCE: string;
  PROJECT_SUMMARY?: string;
  ROLE?: string;
  SERVICE?: string;
  TIMELINE?: string;
  PROBLEM_STATEMENT?: string;
};

export async function upsertBrevoContact(params: {
  apiKey: string;
  email: string;
  attributes: BrevoLeadAttributes;
  listIds: number[];
}): Promise<{ ok: true } | { ok: false; status: number; brevoMessage: string }> {
  const attrs: Record<string, string> = {};
  for (const [k, v] of Object.entries(params.attributes)) {
    if (v === undefined || v === "") continue;
    attrs[k] = clip(String(v), MAX_ATTR);
  }

  let res: Response;
  try {
    res = await fetch(BREVO_CONTACTS_URL, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": params.apiKey,
      },
      body: JSON.stringify({
        email: clip(params.email, 254),
        attributes: attrs,
        listIds: params.listIds,
        updateEnabled: true,
      }),
      cache: "no-store",
    });
  } catch {
    return { ok: false, status: 502, brevoMessage: "network" };
  }

  if (res.ok) return { ok: true };

  let brevoMessage = "unknown";
  try {
    const j = (await res.json()) as { message?: string };
    if (typeof j.message === "string") brevoMessage = j.message;
  } catch {
    try {
      brevoMessage = (await res.text()).slice(0, 500);
    } catch {
      /* ignore */
    }
  }
  return { ok: false, status: res.status || 502, brevoMessage };
}
