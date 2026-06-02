import type { CaseStudyTemplateData } from "./types";

export const kestrelBankStudy = {
  file: "Kestrel Bank",
  short: "Kestrel",
  client: "Kestrel Bank",
  industry: "Financial Services",
  duration: "11 months",
  blurb: "Top-50 US bank · $48B AUM · 4,200 employees",
  title: "AI FOR BANKING:|REAL-TIME FRAUD MODEL|RECOVERED $47M.",
  lead: "This engagement shows what AI for banking looks like in production. Kestrel deployed a finance AI platform that scores every transaction in real time at <50ms latency, combines generative AI for banking to explain decisions to risk teams, and delivers AI fraud detection banking capabilities that cut losses while reducing false positives by 38%.",
  facts: [
    ["Industry", "Financial Services"],
    ["Engagement", "Strategy · Custom · Managed"],
    ["Duration", "11 months"],
    ["Team", "7 alien.fi · 5 client"],
    ["Stack", "Python · SHAP · Kafka · React"],
  ],
  metrics: [
    { v: "$47M", l: "Fraud recovered", sub: "In year one" },
    { v: "<50ms", l: "Scoring latency", sub: "P99" },
    { v: "-38%", l: "False positives", sub: "Vs prior rules engine" },
    { v: "5.6x", l: "First-year ROI", sub: "Payback in 4 months" },
  ],
  challenge: {
    heading: "RULES HIT THE WALL.",
    paragraphs: [
      "Kestrel's legacy rules engine had drifted past 14,000 conditions; every extra false positive cost the bank a customer relationship. Card fraud patterns were evolving faster than static logic, leaving an 18-month gap between new attacks and rule updates.",
      "The board wanted an AI for banking approach that could adapt continuously, support AI fraud detection banking at scale, and still produce audit-ready reasoning for regulators. Most off-the-shelf finance AI platforms could not meet that bar.",
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
      w: "Wks 1–6",
      n: "Data Foundation",
      d: "We laid the enterprise data foundation for AI integration in banking by unifying channels, defining stable contracts, and engineering model-ready fraud behavior features.",
      deliv: [
        "Built a real-time feature store on Snowflake with 4 years of transaction history",
        "Ingested cards, ACH, wires, and digital channels into one AI for banking data layer",
        "Engineered 220 fraud and behavior features for downstream models",
        "Streaming CDC pipelines with data contracts to keep the platform regulator-safe",
      ],
    },
    {
      p: "Phase 2",
      w: "Wks 6–12",
      n: "Model Development",
      d: "The modeling phase combined strong fraud detection performance with explainability, stability testing, and controlled challenger rollout discipline.",
      deliv: [
        "Gradient-boosted ensemble plus deep sequence model for spending patterns",
        "Champion/challenger setup with holdout segments across products and regions",
        "SHAP-based explainability wired into dashboards for risk and compliance",
        "Bias and stability audits across portfolios before full AI fraud detection banking rollout",
      ],
    },
    {
      p: "Phase 3",
      w: "Wks 12–20",
      n: "Production Deploy",
      d: "We moved from validation to live serving with latency SLOs, staged exposure controls, and operational readiness across both teams.",
      deliv: [
        "Kafka-driven model serving at <50ms P99 latency for every transaction",
        "Shadow mode against rules engine for 4 weeks to validate AI for banking performance",
        "Phased cutover by card portfolio and geography to manage exposure",
        "Runbook, SLOs, and on-call for joint alien.fi + bank operations teams",
      ],
    },
    {
      p: "Phase 4",
      w: "Wks 20–44",
      n: "Operate & Audit",
      d: "After go-live, Kestrel ran fraud AI as a governed system with continuous retraining, compliance checkpoints, and managed support.",
      deliv: [
        "Weekly retraining pipeline with automated drift and data-quality checks",
        "Monthly AI integration for banks review with risk, fraud, and compliance stakeholders",
        "Quarterly regulator-ready audit pack generated from model and feature history",
        "24/7 managed support from alien.fi to keep the finance AI platform healthy",
      ],
    },
  ],
  approachIntro:
    "We rebuilt fraud as an enterprise-grade AI integration for banks: laying a data foundation, training and validating models, executing a phased production rollout, then operating and auditing the system as a living finance AI platform. Each phase delivered usable AI solutions for finance while de-risking the next.",
  quote: {
    text:
      "The honest version: alien.fi was the third firm we tried. They were the first to actually ship an AI for banking model we could explain to regulators. The recovered fraud paid for the engagement four times over.",
    initials: "MN",
    name: "Mark Novak",
    role: "EVP of Risk, Kestrel Bank",
  },
  related: [
    {
      n: "Meridian Insurance",
      i: "Insurance",
      v: "62%",
      l: "Faster claims",
      h: "A nine-month AI fraud detection insurance and claims program cut claims time 62% and saved $3.2M annually for a regional P&C carrier.",
    },
    {
      n: "Civica State Agency",
      i: "Government",
      v: "$28M",
      l: "Recovered",
      h: "Benefits-fraud ML recovered $28M in one year, reusing core AI integration for banks patterns in a public-sector setting.",
    },
    {
      n: "Aurora Retail Group",
      i: "Retail",
      v: "18%",
      l: "Conv. lift",
      h: "Personalization built on the same finance AI platform architecture delivered 18% conversion lift and 24% larger baskets in retail.",
    },
  ],
  relatedCtaLabel: "See all →",
  cta: {
    title: "WRITE YOUR STORY",
    sub: "Tell us your boldest banking metric: fraud, loss, or growth. We'll show you how AI for banking deployments like Kestrel's used a finance AI platform, generative AI for banking explainability, and AI integration for banks to turn similar baselines into audited outcomes in under 6 months.",
    button: "Start a Project",
  },
} satisfies CaseStudyTemplateData;
