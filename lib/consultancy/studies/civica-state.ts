import type { CaseStudyTemplateData } from "./types";

export const civicaStateStudy = {
  file: "Civica State Agency",
  short: "CIVICA",
  client: "Civica State Agency",
  industry: "Government",
  duration: "15 months",
  blurb: "State benefits dept · 3M residents · 1,400 staff",
  title: "BENEFITS AI|RECOVERED|$28M.",
  lead: "A benefits-fraud ML system deployed under public-sector oversight — with full bias auditing and FOIA-defensible audit trails.",
  facts: [
    ["Industry", "Government"],
    ["Engagement", "Custom + Governance + Managed"],
    ["Duration", "15 months"],
    ["Team", "9 alien.fi · 11 client"],
    ["Stack", "XGBoost · SHAP · Snowflake · GovCloud"],
  ],
  metrics: [
    { v: "$28M", l: "Recovered", sub: "In year one" },
    { v: "-38%", l: "False positives", sub: "Vs prior system" },
    { v: "94%", l: "Disposition agree", sub: "Investigator audit" },
    { v: "2.4×", l: "First-year ROI", sub: "Payback in 9 months" },
  ],
  challenge: {
    heading: "PUBLIC TRUST FIRST.",
    paragraphs: [
      "Civica's investigators chased an estimated $80M in annual benefits fraud — but their existing rules-based screen flagged 14% of legitimate claimants, drawing legislative criticism. A poorly-implemented AI deployment had been pulled by the state ombudsman in 2021.",
      "The bar was steep: defensible accuracy, demographically audited fairness, and full transparency for civil-society oversight groups.",
    ],
    stats: [
      ["$80M", "Estimated annual fraud"],
      ["14%", "False-positive rate"],
      ["Pulled", "2021 prior tool"],
    ],
  },
  phases: [
    {
      p: "Phase 1",
      w: "Wks 1–10",
      n: "Stakeholder Alignment",
      d: "Worked with the ombudsman, ACLU advisory, and a community panel before any model work. Defined fairness constraints up front.",
      deliv: ["Fairness charter", "Community advisory", "Ombudsman MOU", "Bias dashboard"],
    },
    {
      p: "Phase 2",
      w: "Wks 11–28",
      n: "Model Development",
      d: "Constrained model trained with demographic-parity and equalized-odds objectives. Continual SHAP-based explanations.",
      deliv: ["Constrained model", "SHAP layer", "Bias audit", "Disparity report"],
    },
    {
      p: "Phase 3",
      w: "Wks 29–48",
      n: "Investigator Rollout",
      d: "Triage cockpit for 220 investigators. Mandatory human-in-the-loop on every adverse action. Public-facing transparency portal.",
      deliv: ["Triage cockpit", "Human-in-loop", "Transparency portal", "Training program"],
    },
    {
      p: "Phase 4",
      w: "Wks 49–60",
      n: "Public Operations",
      d: "Quarterly bias re-audit. FOIA-ready audit log. Annual stakeholder report. Drift monitoring with auto-pause guardrails.",
      deliv: ["Quarterly audit", "FOIA log", "Stakeholder report", "Auto-pause guards"],
    },
  ],
  quote: {
    text:
      "They knew, before we did, that the politics of public-sector AI matter as much as the math. That's why this stuck — we built consent before we built code.",
    initials: "AM",
    name: "Anita Morales",
    role: "Deputy Commissioner · Civica State Agency",
  },
  related: [
    {
      n: "Kestrel Bank",
      i: "Financial",
      v: "$47M",
      l: "Fraud recovered",
      h: "Real-time fraud model recovered $47M in year one.",
    },
    {
      n: "Lumen Legal",
      i: "Legal",
      v: "82%",
      l: "Faster review",
      h: "Contract review AI eliminated 82% of routine redline time.",
    },
    {
      n: "NorthBay Health",
      i: "Healthcare",
      v: "41%",
      l: "Less charting",
      h: "EHR copilot rolled out to 1,800 clinicians cut documentation 41%.",
    },
  ],
} satisfies CaseStudyTemplateData;
