/** Client display name → URL slug (`/case-studies/[slug]`). */
export const CASE_STUDY_SLUG_BY_CLIENT: Record<string, string> = {
  "Meridian Insurance": "meridian-insurance",
  "NorthBay Health": "northbay-health",
  "Kestrel Bank": "kestrel-bank",
  "Redline Logistics": "redline-logistics",
  "Oakridge Industrial": "oakridge-industrial",
  "Aurora Retail Group": "aurora-retail",
  "Nimbus Commerce": "nimbus-commerce",
  "SignalNorth Collective": "signalnorth-collective",
  "Lumen Legal": "lumen-legal",
  "Civica State Agency": "civica-state",
};

export function caseStudyPathByClient(client: string): string {
  const slug = CASE_STUDY_SLUG_BY_CLIENT[client];
  return slug ? `/case-studies/${slug}` : "/case-studies";
}
