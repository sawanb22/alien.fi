import type { CaseStudyTemplateData } from "./types";

export const lumenLegalStudy = {
  file: "Lumen Legal",
  short: "LUMEN",
  client: "Lumen Legal",
  industry: "Legal",
  duration: "12 months",
  blurb: "AmLaw 100 firm · 1,200 attorneys · 14 offices",
  title: "CONTRACT AI ATE|82% OF REDLINE|TIME.",
  lead: "A privilege-respecting contract review copilot rolled out across the M&A practice — saving each associate ~14 hours a week.",
  facts: [
    ["Industry", "Legal & Compliance"],
    ["Engagement", "Custom + Governance"],
    ["Duration", "12 months"],
    ["Team", "7 alien.fi · 8 client"],
    ["Stack", "GPT-4 · Anthropic · Vector DB · iManage"],
  ],
  metrics: [
    { v: "82%", l: "Faster review", sub: "Routine redlines" },
    { v: "14 hr", l: "Saved/associate/wk", sub: "On in-scope work" },
    { v: "2,400", l: "Contracts/mo", sub: "Through copilot" },
    { v: "4.1×", l: "First-year ROI", sub: "Payback in 5 months" },
  ],
  challenge: {
    heading: "AI WITH PRIVILEGE.",
    paragraphs: [
      "Lumen's M&A practice was drowning in NDAs and standard purchase agreements. Associates burned out on routine redlines that should take 20 minutes — but never did. Every prior 'AI contract review' tool had been rejected by the firm's privilege committee.",
      "The bar was uncompromising: no client text leaves the firm's tenant, ever.",
    ],
    stats: [
      ["2,400", "Contracts/mo"],
      ["54%", "Associate burnout"],
      ["Rejected", "3 prior vendors"],
    ],
  },
  phases: [
    {
      p: "Phase 1",
      w: "Wks 1–10",
      n: "Privilege Architecture",
      d: "Tenant-isolated deployment in firm Azure. Air-gapped fine-tuning pipeline. Privilege committee weekly reviews.",
      deliv: ["Tenant isolation", "Air-gapped tuning", "Audit logs", "Committee playbook"],
    },
    {
      p: "Phase 2",
      w: "Wks 11–28",
      n: "Playbook Library",
      d: "Encoded 14 firm-standard playbooks (NDA, SaaS, MSA, SPA, etc). RAG retrieval over precedent library on iManage.",
      deliv: ["14 playbooks", "iManage RAG", "Citation engine", "Conflict checks"],
    },
    {
      p: "Phase 3",
      w: "Wks 29–40",
      n: "Practice Rollout",
      d: "Phased rollout to M&A, then commercial, then privacy. Each practice got dedicated training and adoption support.",
      deliv: ["Practice rollouts", "Adoption KPIs", "Training library", "Office hours"],
    },
    {
      p: "Phase 4",
      w: "Wks 41–52",
      n: "Continuous Governance",
      d: "Monthly bias and accuracy audit. Quarterly privilege committee review. Annual regulator-ready report.",
      deliv: ["Audit cadence", "Privilege review", "Regulator pack", "Knowledge base"],
    },
  ],
  quote: {
    text:
      "They earned the privilege committee's trust before they earned their fee. By the time we rolled it to associates, every objection had already been adjudicated.",
    initials: "TN",
    name: "Theresa Nakamura",
    role: "Chief Knowledge Officer · Lumen Legal",
  },
  related: [
    {
      n: "NorthBay Health",
      i: "Healthcare",
      v: "41%",
      l: "Less charting",
      h: "EHR copilot rolled out to 1,800 clinicians cut documentation 41%.",
    },
    {
      n: "Civica State Agency",
      i: "Government",
      v: "$28M",
      l: "Recovered",
      h: "Benefits fraud ML recovered $28M in year one.",
    },
    {
      n: "Kestrel Bank",
      i: "Financial",
      v: "$47M",
      l: "Fraud recovered",
      h: "Real-time fraud model recovered $47M in year one.",
    },
  ],
} satisfies CaseStudyTemplateData;
