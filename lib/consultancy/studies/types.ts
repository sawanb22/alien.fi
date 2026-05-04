export type CaseStudyTemplateData = {
  file: string;
  short: string;
  client: string;
  industry: string;
  duration: string;
  blurb: string;
  title: string;
  lead: string;
  facts: [string, string][];
  metrics: { v: string; l: string; sub: string }[];
  challenge: {
    heading: string;
    paragraphs: string[];
    stats: [string, string][];
  };
  phases: { p: string; w: string; n: string; d: string; deliv: string[] }[];
  quote: { text: string; initials: string; name: string; role: string };
  /** Linked case studies by client name (resolved via `CASE_STUDY_SLUG_BY_CLIENT`). */
  related: { n: string; i: string; v: string; l: string; h: string }[];
};
