import type { CaseStudyTemplateData } from "./types";

export const auroraRetailStudy = {
  file: "Aurora Retail Group",
  short: "AURORA",
  client: "Aurora Retail Group",
  industry: "Retail",
  duration: "8 months",
  blurb: "$2B specialty retailer · 340 stores · 18M loyalty members",
  title: "PERSONALIZATION|LIFTED CONVERSION|18%.",
  lead: "A real-time personalization engine across email, web, and the mobile app — built on top of an existing Segment + Braze stack.",
  facts: [
    ["Industry", "Retail & Commerce"],
    ["Engagement", "Custom + Managed"],
    ["Duration", "8 months"],
    ["Team", "6 alien.fi · 4 client"],
    ["Stack", "LightGBM · Vector DB · Segment · Braze"],
  ],
  metrics: [
    { v: "18%", l: "Conversion lift", sub: "Web + app blended" },
    { v: "+24%", l: "Basket size", sub: "Personalized cohort" },
    { v: "+38%", l: "Email CTR", sub: "Vs control" },
    { v: "2.8×", l: "First-year ROI", sub: "Payback in 8 months" },
  ],
  challenge: {
    heading: "ONE-SIZE EMAILS.",
    paragraphs: [
      "Aurora's CRM had matured but felt generic — every loyalty member got broadly the same email cadence and homepage. Conversion rates had plateaued for six quarters.",
      "The CMO wanted personalization that the brand team trusted, not a black box that emailed weird things on Sunday morning.",
    ],
    stats: [
      ["18M", "Loyalty members"],
      ["Plateau", "6 quarters"],
      ["7%", "Open rate"],
    ],
  },
  phases: [
    {
      p: "Phase 1",
      w: "Wks 1–8",
      n: "Behavioral Foundation",
      d: "Cleaned and unified Segment events across 11 properties. Built feature store. Defined 14 lifecycle states.",
      deliv: ["Unified events", "Feature store", "Lifecycle map", "Segmentation audit"],
    },
    {
      p: "Phase 2",
      w: "Wks 9–18",
      n: "Recommendation Engine",
      d: "Two-tower model for product affinity. Cold-start fallbacks. Brand-safety guardrails reviewed by merch team.",
      deliv: ["Two-tower model", "Cold-start logic", "Brand guardrails", "Merch review loop"],
    },
    {
      p: "Phase 3",
      w: "Wks 19–28",
      n: "Channel Activation",
      d: "Live recs in Braze email/SMS, web homepage, and the mobile app. A/B harness with significance reporting.",
      deliv: ["Braze integration", "Web recs", "App recs", "A/B harness"],
    },
    {
      p: "Phase 4",
      w: "Wks 29–32",
      n: "Optimization Loop",
      d: "Bi-weekly model refresh. Brand-safety review on new product categories. CMO dashboard with full attribution.",
      deliv: ["Model refresh", "Brand safety", "CMO dashboard", "Attribution model"],
    },
  ],
  quote: {
    text:
      "alien.fi understood that personalization in retail isn't just about clicks — it's about brand. They built guardrails our merchandisers actually trusted, and the numbers followed.",
    initials: "EH",
    name: "Elaine Hwang",
    role: "Chief Marketing Officer · Aurora Retail Group",
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
      n: "NorthBay Health",
      i: "Healthcare",
      v: "41%",
      l: "Less charting",
      h: "EHR copilot rolled out to 1,800 clinicians cut documentation 41%.",
    },
    {
      n: "Redline Logistics",
      i: "Logistics",
      v: "21%",
      l: "Fuel savings",
      h: "Route optimization cut fuel costs 21%.",
    },
  ],
} satisfies CaseStudyTemplateData;
