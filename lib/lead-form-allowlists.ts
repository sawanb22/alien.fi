/** Allowed chip values for `/contact` — keep in sync with Brevo + API validation. */
export const CONTACT_SERVICES = [
  "Strategy & Roadmap",
  "Custom AI Development",
  "Pre-built Solution",
  "Data Engineering",
  "Managed Operations",
  "Training & Enablement",
  "Not sure yet",
] as const;

export const CONTACT_BUDGETS = ["<$50K", "$50–150K", "$150–500K", "$500K–1M", "$1M+"] as const;

export const CONTACT_TIMELINES = ["ASAP", "1–3 months", "3–6 months", "6+ months", "Exploratory"] as const;
