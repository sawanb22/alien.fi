import type { CaseStudyTemplateData } from "./types";

export const nimbusCommerceStudy = {
  file: "Nimbus Commerce",
  short: "Ecommerce",
  client: "Nimbus Commerce",
  industry: "Ecommerce",
  duration: "9 months",
  blurb: "Digitally native retailer with 220M annual sessions, $380M GMV, and 12 localized storefronts.",
  title: "AI FOR ECOMMERCE:|PERSONALIZATION|LIFTED CONVERSION 19%.",
  lead: "A real-time AI for ecommerce personalization engine across web, email, app, and on-site search. Built as a thin intelligence layer on top of Nimbus's CDP and ESP, the system uses product recommendation AI and AI agents for ecommerce merchandising to move from static segments to 1:1 journeys.",
  facts: [
    ["Industry", "Ecommerce"],
    ["Engagement", "Custom · Managed"],
    ["Duration", "9 months"],
    ["Team", "7 alien.fi · 5 client"],
    ["Stack", "Real-time CDP · Feature store · LLM agents · ESP"],
  ],
  metrics: [
    { v: "19%", l: "Conversion lift", sub: "Sessions that saw recommendations" },
    { v: "+27%", l: "Basket size", sub: "Orders with personalized bundles" },
    { v: "-18%", l: "Cart abandonment", sub: "Versus legacy journeys" },
    { v: "3.0x", l: "First-year ROI", sub: "Payback in 5 months" },
  ],
  challenge: {
    heading: "ONE-SIZE HOMEPAGE.",
    paragraphs: [
      "Nimbus's growth team had already exhausted basic \"customers also bought\" widgets and rule-based campaigns. Every loyalty member saw roughly the same homepage, the same email cadence, and the same discount ladders. Conversion had been flat for four quarters and nearly 70 percent of carts were abandoned, in line with broader ecommerce benchmarks.",
      "The CMO wanted AI for ecommerce that respected brand guardrails, gave merchandisers control, and proved that AI personalization software for ecommerce could drive profitable lift, not just more discounting.",
    ],
    stats: [
      ["220M", "Annual sessions"],
      ["4", "Quarters of flat conversion"],
      ["69%", "Cart abandonment baseline"],
    ],
  },
  approachIntro:
    "We implemented AI solutions for ecommerce in four phases so each release sharpened targeting, protected margin, and made the product recommendation AI explainable to both merchandisers and finance.",
  phases: [
    {
      p: "Phase 1",
      w: "Wks 1–6",
      n: "Behavioral Foundation",
      d: "The first phase unified behavioral data and business guardrails before activating any personalization logic in production.",
      deliv: [
        "Cleaned and unified clickstream, search, cart, and order data in a real-time feature store",
        "Defined 16 lifecycle stages and 40 intent signals based on behavior, not just demographics",
        "Audited existing \"personalization\" rules to quantify their true impact and cannibalization",
        "Established guardrails for brand, pricing, and inventory before any AI for ecommerce went live",
      ],
    },
    {
      p: "Phase 2",
      w: "Wks 7–14",
      n: "Recommendation Engine",
      d: "We built product recommendation AI tuned for both commercial lift and margin integrity with explainable decisions for merch teams.",
      deliv: [
        "Trained product recommendation AI combining collaborative filtering and content signals from product attributes, reviews, and on-site behavior",
        "Built separate models for browse, PDP, cart, and post-purchase placements to reflect different intents",
        "Tuned for revenue and margin together, so AI personalization software for ecommerce did not over-optimize to clearance stock",
        "Delivered human-readable rationales in the merch console so buyers could see why each product appeared",
      ],
    },
    {
      p: "Phase 3",
      w: "Wks 15–24",
      n: "Channel Activation",
      d: "Activation connected personalized decisioning across key channels and lifecycle flows with controlled experiment design.",
      deliv: [
        "Activated AI for ecommerce journeys across homepage tiles, PDP carousels, cart bundles, email, and app push",
        "Deployed AI agents for retail-style campaigns that automatically selected the next best message and channel based on context",
        "Integrated with ESP to generate product recommendation AI sections in triggered flows such as browse abandonment, cart recovery, and replenishment",
        "Ran controlled experiments that compared full-journey personalization against legacy campaigns to isolate uplift",
      ],
    },
    {
      p: "Phase 4",
      w: "Wks 25–36",
      n: "Optimization Loop",
      d: "Post-launch operations focused on drift-aware optimization and continuous rollout of high-value ecommerce agent use cases.",
      deliv: [
        "Weekly model retraining with drift checks on category mix, discount depth, and emerging products",
        "Merchandising review rhythm where category managers could pin, block, or boost items without breaking the models",
        "C-suite dashboard tying AI solutions for ecommerce to incremental revenue, AOV, and contribution margin",
        "Continuous rollout of AI agents for ecommerce use cases like onsite search re-ranking and size-fit suggestions, based on the same feature foundation",
      ],
    },
  ],
  quote: {
    text:
      "alien.fi understood that AI for retail and ecommerce is not about flooding the page with widgets. It is about using AI personalization software for ecommerce in a way our merchandisers trust and our finance team can audit. Once those two groups were on board, the lifts took care of themselves.",
    initials: "ER",
    name: "Elena Ruiz",
    role: "Chief Digital Officer, Nimbus Commerce",
  },
  related: [
    {
      n: "Kestrel Bank",
      i: "Financial",
      v: "$47M",
      l: "Fraud recovered",
      h: "AI solutions for ecommerce risk teams, adapted to banking, recovered $47M in fraud with real-time scoring.",
    },
    {
      n: "NorthBay Health",
      i: "Healthcare",
      v: "41%",
      l: "Less charting",
      h: "Clinical copilot that uses the same experimentation discipline as AI personalization software for ecommerce to cut charting 41 percent.",
    },
    {
      n: "Redline Logistics",
      i: "Logistics",
      v: "21%",
      l: "Fuel savings",
      h: "Route AI and agents that share orchestration patterns with AI agents for retail fulfillment and delivery.",
    },
  ],
  relatedCtaLabel: "See all →",
  cta: {
    title: "WRITE YOUR STORY",
    sub: "Tell us your boldest ecommerce metric. We will show you how AI for ecommerce, powered by product recommendation AI, AI personalization software for ecommerce, and agent-driven journeys, can turn it into a case study your team is proud of.",
    button: "Start a project ↗",
  },
} satisfies CaseStudyTemplateData;
