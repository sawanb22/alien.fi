/**
 * Verifies Google reCAPTCHA v2 checkbox token (server-side).
 * We intentionally do not send `remoteip`: some proxies / IPv6 values cause
 * siteverify to fail on localhost or edge networks.
 * @see https://developers.google.com/recaptcha/docs/verify
 */
export async function verifyRecaptchaV2(
  secret: string,
  token: string,
): Promise<{ ok: true } | { ok: false; errorCodes?: string[] }> {
  const trimmed = token.trim();
  if (!secret || !trimmed) return { ok: false };

  const body = new URLSearchParams();
  body.set("secret", secret);
  body.set("response", trimmed);

  let res: Response;
  try {
    res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
      cache: "no-store",
    });
  } catch {
    return { ok: false };
  }

  if (!res.ok) return { ok: false };

  const data = (await res.json()) as {
    success?: boolean;
    "error-codes"?: string[];
  };
  if (data.success === true) return { ok: true };
  const codes = Array.isArray(data["error-codes"]) ? data["error-codes"] : undefined;
  return { ok: false, errorCodes: codes };
}
