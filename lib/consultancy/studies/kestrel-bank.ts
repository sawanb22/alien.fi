import type { CaseStudyTemplateData } from "./types";

export const kestrelBankStudy = {
  file: "Kestrel Bank",
  short: "KESTREL",
  client: "Kestrel Bank",
  industry: "Financial Services",
  duration: "11 months",
  blurb: "Top-50 US bank · $48B AUM · 4,200 employees",
  title: "REAL-TIME FRAUD|MODEL RECOVERED|$47M.",
  lead: "A real-time fraud scoring engine deployed to every transaction at <50ms latency, with explainable outputs for regulators.",
  facts: [
    ["Industry", "Financial Services"],
    ["Engagement", "Strategy + Custom + Managed"],
    ["Duration", "11 months"],
    ["Team", "7 alien.fi · 5 client"],
    ["Stack", "PyTorch · SHAP · Kafka · Feast"],
  ],
  metrics: [
    { v: "$47M", l: "Fraud recovered", sub: "In year one" },
    { v: "<50ms", l: "Scoring latency", sub: "P99" },
    { v: "-38%", l: "False positives", sub: "Vs prior rules engine" },
    { v: "5.6×", l: "First-year ROI", sub: "Payback in 4 months" },
  ],
  challenge: {
    heading: "RULES HIT THE WALL.",
    paragraphs: [
      "Kestrel's legacy fraud rules engine had drifted past 14,000 rules — every false positive cost the bank a customer relationship. Real card fraud was outpacing the rules team by 18 months. The board wanted answers before the next audit.",
      "Regulators required every flagged transaction to come with a defensible, human-readable explanation.",
    ],
    stats: [
      ["14,000", "Stale rules"],
      ["72%", "False-positive rate"],
      ["18 mo", "Rules lag"],
    ],
  },
  phases: [
    {
      p: "Phase 1",
      w: "Wks 1–8",
      n: "Data Foundation",
      d: "Built a real-time feature store on Snowflake + Feast. Ingested 4 years of transaction history. Defined 220 features.",
      deliv: ["Snowflake feature store", "220 features", "Streaming CDC", "Data contracts"],
    },
    {
      p: "Phase 2",
      w: "Wks 9–18",
      n: "Model Development",
      d: "Gradient-boosted ensemble plus deep model for sequence patterns. Champion/challenger framework. SHAP for explainability.",
      deliv: ["Ensemble model", "SHAP layer", "Champion/challenger", "Bias audit"],
    },
    {
      p: "Phase 3",
      w: "Wks 19–32",
      n: "Production Deploy",
      d: "Kafka-driven scoring at <50ms p99. Shadow mode for 4 weeks. Phased rollout by card portfolio.",
      deliv: ["Kafka scoring", "Shadow mode", "Phased rollout", "Runbook"],
    },
    {
      p: "Phase 4",
      w: "Wks 33–44",
      n: "Operate & Audit",
      d: "Weekly retraining. Monthly bias review. Quarterly regulator-ready audit pack. 24/7 on-call rotation.",
      deliv: ["Retraining pipeline", "Bias review", "Audit pack", "24/7 on-call"],
    },
  ],
  quote: {
    text:
      "The honest version: alien.fi was the third firm we tried. They were the first to actually ship a model we could explain to regulators. The recovered fraud paid for the engagement four times over.",
    initials: "MN",
    name: "Mark Novak",
    role: "EVP of Risk · Kestrel Bank",
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
      n: "Civica State Agency",
      i: "Government",
      v: "$28M",
      l: "Recovered",
      h: "Benefits fraud ML recovered $28M in year one.",
    },
    {
      n: "Aurora Retail Group",
      i: "Retail",
      v: "18%",
      l: "Conv. lift",
      h: "Personalization engine drove 18% conversion lift.",
    },
  ],
} satisfies CaseStudyTemplateData;
