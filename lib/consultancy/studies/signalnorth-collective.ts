import type { CaseStudyTemplateData } from "./types";

export const signalnorthCollectiveStudy = {
  file: "SignalNorth Collective",
  short: "Marketing Agencies",
  client: "SignalNorth Collective",
  industry: "Agencies",
  duration: "10 months",
  blurb: "Performance marketing network running 120+ active campaigns across B2B and ecommerce clients.",
  title: "AI FOR MARKETING:|PERSONALIZATION AND|BIDDING LIFTED ROI 29%.",
  lead: "A multi-tenant AI for marketing layer that sits across paid media, email, and landing pages for a portfolio of agency clients. AI marketing automation now handles targeting, creative testing, and send-time optimization, while AI campaign optimization agents tune bids and budgets in real time to hit client-level goals.",
  facts: [
    ["Industry", "Marketing & Advertising"],
    ["Engagement", "Custom · Managed"],
    ["Duration", "10 months"],
    ["Team", "6 alien.fi · 7 client"],
    ["Stack", "Data warehouse · LLM agents · Ad platforms · ESP"],
  ],
  metrics: [
    { v: "19%", l: "Conversion rate lift", sub: "Across optimized funnels" },
    { v: "+32%", l: "More leads", sub: "From the same media spend" },
    { v: "-29%", l: "Customer acquisition cost", sub: "Average across tested accounts" },
    { v: "2.9x", l: "Blended ROI", sub: "After 6 months on AI program" },
  ],
  challenge: {
    heading: "CAMPAIGNS HIT A CEILING.",
    paragraphs: [
      "SignalNorth's teams were already strong on channel best practices, but growth had flattened. Media buyers were buried in manual bid changes, creative tests took weeks to reach significance, and each strategist maintained their own spreadsheets to track performance.",
      "The agency knew that AI for marketing could help, but off-the-shelf tools were either channel-specific or too opaque for client reporting. They needed AI marketing automation that respected each brand's constraints and AI campaign optimization that a skeptical CMO could understand.",
    ],
    stats: [
      ["120+", "Active campaigns"],
      ["5", "Separate tools per account"],
      ["0", "Shared AI layer across channels"],
    ],
  },
  approachIntro:
    "We implemented AI for marketing as a reusable agency platform in four phases so every new account could benefit from the same AI solutions for marketing performance without losing their unique strategy.",
  phases: [
    {
      p: "Phase 1",
      w: "Wks 1–6",
      n: "Data and guardrails",
      d: "We created a unified measurement and governance layer so every AI action could be trusted across client accounts before activation.",
      deliv: [
        "Unified spend, revenue, and event data from ad platforms, web analytics, and CRM into one warehouse",
        "Standardized funnel definitions so CAC, ROAS, and LTV meant the same thing for every client",
        "Collected brand and compliance guardrails that AI marketing automation could not cross (banned phrases, max discount, channel restrictions)",
        "Built a governance layer so strategists could approve or override AI recommendations before they hit live campaigns",
      ],
    },
    {
      p: "Phase 2",
      w: "Wks 7–14",
      n: "AI marketing automation foundation",
      d: "This phase deployed cross-channel marketing automation and agent workflows while preserving client-specific strategy constraints.",
      deliv: [
        "Deployed AI for marketing email and SMS: subject-line and content generation with auto A/B testing and send-time optimization",
        "Set up AI agents for marketing workflows like audience refresh, suppression list updates, and lifecycle campaign triggers",
        "Integrated product recommendation logic for ecommerce clients and content-based suggestions for B2B, using the same orchestration engine",
        "Rolled out a single \"what changed\" feed that explained which AI marketing automation actions ran each day",
      ],
    },
    {
      p: "Phase 3",
      w: "Wks 15–24",
      n: "AI campaign optimization",
      d: "We added real-time optimization agents and explainable decisioning so teams could scale performance while maintaining reporting clarity.",
      deliv: [
        "Trained cross-channel bidding models that allocate budget based on predicted marginal ROI, not last-click attribution",
        "Used reinforcement learning style testing to choose the best creative and offer for each audience segment instead of static A/B tests",
        "Introduced AI campaign optimization agents that adjust bids, audiences, and placements within agreed guardrails every hour",
        "Surfaced human-readable rationales for each change so strategists could explain AI for marketing decisions in client reviews",
      ],
    },
    {
      p: "Phase 4",
      w: "Wks 25–40",
      n: "Agency playbook and scale",
      d: "Post-launch scaling focused on reusable onboarding playbooks, transparent impact reporting, and progressive expansion of AI modules.",
      deliv: [
        "Created reusable playbooks for onboarding new accounts into the AI marketing automation layer in under two weeks",
        "Built dashboards that report AI impact separately from baseline channel performance, so clients see the lift clearly",
        "Trained strategists to work alongside AI campaign optimization agents, focusing human time on narrative, testing ideas, and client education",
        "Added opt-in modules for creative generation, budget forecasting, and churn prediction, expanding the catalog of AI solutions for marketing as clients gained trust",
      ],
    },
  ],
  quote: {
    text:
      "alien.fi did not hand us another 'black box.' They built AI for marketing that our strategists can interrogate and our clients can understand. AI marketing automation now handles the grunt work, and AI campaign optimization makes our best plays scale across accounts instead of living in one strategist's notebook.",
    initials: "JR",
    name: "Jonah Reeves",
    role: "Managing Partner, SignalNorth Collective",
  },
  related: [
    {
      n: "Kestrel Bank",
      i: "Financial",
      v: "5.6x",
      l: "Media ROI",
      h: "AI-driven fraud and offer targeting created patterns we reuse in AI solutions for marketing financial products.",
    },
    {
      n: "Aurora Retail Group",
      i: "Retail",
      v: "18%",
      l: "Conversion lift",
      h: "Personalization engine that uses similar AI campaign optimization logic across email, app, and web.",
    },
    {
      n: "Nimbus Commerce",
      i: "Ecommerce",
      v: "19%",
      l: "Conversion lift",
      h: "AI for ecommerce journeys powered by the same decision engine used in AI marketing automation for agencies.",
    },
  ],
  relatedCtaLabel: "See all →",
  cta: {
    title: "WRITE YOUR STORY",
    sub: "Tell us your hardest-to-move marketing metric. We will show you how AI for marketing, powered by AI marketing automation and AI campaign optimization, can turn it into an agency case study clients renew around.",
    button: "Start a project",
  },
} satisfies CaseStudyTemplateData;
