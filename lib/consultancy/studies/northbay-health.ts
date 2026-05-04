import type { CaseStudyTemplateData } from "./types";

export const northbayHealthStudy = {
  file: "NorthBay Health",
  short: "NORTHBAY",
  client: "NorthBay Health",
  industry: "Healthcare",
  duration: "14 months",
  blurb: "Regional health system · 12 hospitals · 1,800 clinicians",
  title: "EHR COPILOT|CUT CHARTING|41%.",
  lead: "A 14-month rollout to 1,800 clinicians of a HIPAA-compliant documentation copilot — saving each one ~52 minutes per shift.",
  facts: [
    ["Industry", "Healthcare"],
    ["Engagement", "Custom + Managed"],
    ["Duration", "14 months"],
    ["Team", "9 alien.fi · 6 client"],
    ["Stack", "Med-PaLM · FHIR · Epic API"],
  ],
  metrics: [
    { v: "41%", l: "Less charting", sub: "52 min/shift saved" },
    { v: "1,800", l: "Clinicians live", sub: "Across 12 hospitals" },
    { v: "+38", l: "Provider NPS", sub: "Burnout score down" },
    { v: "4.2×", l: "First-year ROI", sub: "Payback in 4 months" },
  ],
  challenge: {
    heading: "BURNOUT EPIDEMIC.",
    paragraphs: [
      "NorthBay's clinicians spent 38% of every shift on charting. Documentation backlog was the #1 driver of physician burnout and the #2 driver of regrettable attrition. Two prior 'AI scribe' pilots had stalled — one on integration, one on accuracy.",
      "The CMIO needed an answer that was Epic-native, HIPAA-defensible, and trusted enough to clear 1,800-physician adoption.",
    ],
    stats: [
      ["38%", "Shift on charting"],
      ["#1", "Driver of burnout"],
      ["$14M", "Annual attrition cost"],
    ],
  },
  phases: [
    {
      p: "Phase 1",
      w: "Wks 1–10",
      n: "Clinical Pilot",
      d: "Hand-built ambient-listening copilot piloted with 60 ED physicians at flagship hospital. Iterated weekly on accuracy and trust.",
      deliv: ["Ambient ASR", "Specialty templates", "Trust dashboard", "Clinician feedback loop"],
    },
    {
      p: "Phase 2",
      w: "Wks 11–24",
      n: "Epic Integration",
      d: "Native HL7-FHIR integration into Epic Hyperspace. Auto-population of structured fields. Deep audit logging.",
      deliv: ["FHIR connector", "Epic SmartForms", "Audit trail", "Re-auth flow"],
    },
    {
      p: "Phase 3",
      w: "Wks 25–44",
      n: "System-wide Rollout",
      d: "Hospital-by-hospital deployment. Specialty playbooks for each rollout cohort. Live coaching from on-site clinical informatics team.",
      deliv: ["12-hospital plan", "Coaching network", "Adoption KPIs", "Quality circles"],
    },
    {
      p: "Phase 4",
      w: "Wks 45–60",
      n: "Managed Operations",
      d: "Weekly accuracy retraining on de-identified shadow charts. Drift alerts. Quarterly compliance audit support.",
      deliv: ["Retraining pipeline", "Drift monitoring", "Compliance audit", "24/7 SRE"],
    },
  ],
  quote: {
    text:
      "This is the only AI deployment I've signed off on that clinicians actively want more of. The copilot earned its trust by being conservative — and our team felt heard at every step.",
    initials: "DP",
    name: "Dr. Priya Desai",
    role: "Chief Medical Information Officer · NorthBay Health",
  },
  related: [
    {
      n: "Meridian Insurance",
      i: "Insurance",
      v: "62%",
      l: "Faster claims",
      h: "9-month transformation cut claims time 62% and saved $3.2M in fraud.",
    },
    {
      n: "Lumen Legal",
      i: "Legal",
      v: "82%",
      l: "Faster review",
      h: "Contract review AI eliminated 82% of routine redline time across M&A practice.",
    },
    {
      n: "Civica State Agency",
      i: "Government",
      v: "$28M",
      l: "Recovered",
      h: "Benefits fraud ML recovered $28M in year one.",
    },
  ],
} satisfies CaseStudyTemplateData;
