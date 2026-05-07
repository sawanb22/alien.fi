import type { CaseStudyTemplateData } from "./types";

export const auroraRetailStudy = {
  file: "Aurora Retail Group",
  short: "Retail",
  client: "Aurora Retail Group",
  industry: "Retail",
  duration: "8 months",
  blurb: "$2B specialty retailer with 340 stores and 18M loyalty members.",
  title: "AI FOR RETAIL:|PERSONALIZATION|LIFTED CONVERSION 18%.",
  lead: "A real-time AI for retail personalization engine across email, web, mobile app, and in-store kiosks. The solution runs on top of the existing Segment and Braze stack, using AI agents for retail to tailor journeys without breaking brand control.",
  facts: [
    ["Industry", "Retail & Commerce"],
    ["Engagement", "Custom · Managed"],
    ["Duration", "8 months"],
    ["Team", "6 alien.fi · 4 client"],
    ["Stack", "LLM engine · Vector DB · Segment · Braze"],
  ],
  metrics: [
    { v: "18%", l: "Conversion lift", sub: "Web and app combined" },
    { v: "+24%", l: "Basket size", sub: "Personalized cohort" },
    { v: "+38%", l: "Email CTR", sub: "Versus control" },
    { v: "2.8x", l: "First-year ROI", sub: "Payback in 6 months" },
  ],
  challenge: {
    heading: "ONE-SIZE EMAILS.",
    paragraphs: [
      "Aurora's CRM stack was mature but generic. Every loyalty member received nearly the same cadence, offer mix, and homepage layout. Conversion had plateaued for six quarters, open rates drifted down to 7 percent, and store teams saw little impact on foot traffic from campaigns.",
      "The CMO wanted AI for retail that protected the brand and store experience, not a black box that sprayed offers without context.",
    ],
    stats: [
      ["18M", "Loyalty members"],
      ["Plateau", "6 quarters"],
      ["7%", "Email open rate"],
    ],
  },
  approachIntro:
    "We delivered AI for retail stores in four phases so each release drove clear lift, kept merchandisers in control, and made AI agents for retail feel like a copilot rather than a replacement.",
  phases: [
    {
      p: "Phase 1",
      w: "Wks 1–6",
      n: "Behavioral Foundation",
      d: "We established the behavioral data foundation needed for robust AI for retail personalization across channels and stores.",
      deliv: [
        "Cleaned and unified Segment events across ecommerce, app, and stores",
        "Defined 14 lifecycle segments tied to real retail behaviors",
        "Built feature store for on-site, in-app, and in-store recommendations",
        "Ran a segmentation audit to show where AI for retail could move the needle fastest",
      ],
    },
    {
      p: "Phase 2",
      w: "Wks 7–14",
      n: "Recommendation Engine",
      d: "This phase delivered recommendation quality with guardrails so merchandising teams retained full control over brand and inventory rules.",
      deliv: [
        "Two-tower recommendation model for product affinity and cold-start shoppers",
        "Guardrails for brand, pricing, and inventory so AI solutions for retail never break merchandising rules",
        "Merch review loop where buyers could approve, block, or boost patterns",
        "A/B testing harness to compare AI journeys to legacy campaigns",
      ],
    },
    {
      p: "Phase 3",
      w: "Wks 15–22",
      n: "Channel Activation",
      d: "We activated personalized journeys across every major customer touchpoint and orchestrated actions with retail AI agents.",
      deliv: [
        "Live recs in email, SMS, web homepage, app, and in-store kiosks",
        "AI agents for retail that select the right channel and next best action per customer",
        "Braze integration for triggered campaigns based on behavioral signals",
        "Web and app components for personalized rows, banners, and search results",
      ],
    },
    {
      p: "Phase 4",
      w: "Wks 23–36",
      n: "Optimization Loop",
      d: "Post-launch optimization tied personalization performance directly to revenue, margin, and long-term customer value.",
      deliv: [
        "Weekly model refresh and creative review with merchandising and brand",
        "Safety checks for discount depth, category mix, and compliance requirements",
        "CMO dashboard tying AI for retail stores impact to revenue, margin, and LTV",
        "Attribution model that credits AI-driven journeys across online and store visits",
      ],
    },
  ],
  quote: {
    text:
      "alien.fi understood that personalization in retail is about brand as much as clicks. Their AI for retail approach gave us guardrails our merchants actually trusted, and AI agents for retail that our teams could reason about. The lift followed.",
    initials: "EH",
    name: "Elaine Hwang",
    role: "Chief Marketing Officer, Aurora Retail Group",
  },
  related: [
    {
      n: "Kestrel Bank",
      i: "Financial",
      v: "$47M",
      l: "Fraud recovered",
      h: "Real-time fraud model built on the same data and experimentation patterns used in AI solutions for retail.",
    },
    {
      n: "NorthBay Health",
      i: "Healthcare",
      v: "41%",
      l: "Less charting",
      h: "EHR copilot that cut charting 41 percent, showing how disciplined AI for retail style experimentation can work in clinical settings.",
    },
    {
      n: "Redline Logistics",
      i: "Logistics",
      v: "21%",
      l: "Fuel savings",
      h: "Route optimization and ETA stack that uses AI agents for logistics, sharing core orchestration patterns with AI agents for retail.",
    },
  ],
  relatedCtaLabel: "See all →",
  cta: {
    title: "WRITE YOUR STORY",
    sub: "Tell us your boldest retail metric. We will show you how AI for retail, from AI for retail stores to AI agents for retail campaigns, can turn it into a case study your team is proud of.",
    button: "Start a project ↗",
  },
} satisfies CaseStudyTemplateData;
