import type { CaseStudyTemplateData } from "./types";

export const redlineLogisticsStudy = {
  file: "Redline Logistics",
  short: "Logistics",
  client: "Redline Logistics",
  industry: "Logistics",
  duration: "7 months",
  blurb: "Regional 3PL with 200 trucks and 18 distribution hubs.",
  title: "LOGISTICS SOFTWARE DEVELOPMENT SERVICES:|ROUTE AI CUT|FLEET FUEL 21%.",
  lead: "A live route-optimization and ETA-prediction stack built as logistics software development services for an existing TMS. AI agents for logistics now generate and update routes on the fly without ripping out core systems, delivering AI solutions for logistics that dispatchers actually use.",
  facts: [
    ["Industry", "Logistics"],
    ["Engagement", "Custom · Managed"],
    ["Duration", "7 months"],
    ["Team", "5 alien.fi · 3 client"],
    ["Stack", "OR-Tools · LLM agents · Mapbox · AWS"],
  ],
  metrics: [
    { v: "21%", l: "Fuel savings", sub: "Across 200 trucks" },
    { v: "94%", l: "On-time delivery", sub: "Up from 81%" },
    { v: "-32%", l: "Empty miles", sub: "Year over year" },
    { v: "2.1x", l: "First-year ROI", sub: "Payback in 7 months" },
  ],
  challenge: {
    heading: "TRUCKS RAN HALF EMPTY.",
    paragraphs: [
      "Redline's planners optimized routes manually every morning in spreadsheets. Empty miles kept creeping up, fuel costs were eating margin, and dispatchers were stretched thin. Their legacy TMS could not be replaced without a multi-year project the CFO would not fund.",
      "The company needed logistics software development services that would layer AI for logistics on top of what they already had and pay for itself inside 12 months.",
    ],
    stats: [
      ["32%", "Empty-mile rate"],
      ["81%", "On-time delivery"],
      ["$4.8M", "Annual fuel spend"],
    ],
  },
  approachIntro:
    "We sequenced the work into four phases so each release added AI agents for logistics in a way that was cash-flow positive and easy to adopt for planners and drivers.",
  phases: [
    {
      p: "Phase 1",
      w: "Wks 1–6",
      n: "Discovery and pilot",
      d: "We established baseline operations and validated value early by wrapping the existing TMS with logistics AI rather than replacing it.",
      deliv: [
        "Two-week site visit and dispatch sprint with planners and drivers",
        "Dispatch audit across three hubs to baseline KPIs and cost per mile",
        "Route optimizer prototype that wrapped the existing TMS instead of replacing it",
        "12-truck shadow pilot to validate AI solutions for logistics against real routes",
      ],
    },
    {
      p: "Phase 2",
      w: "Wks 7–16",
      n: "ETA Prediction",
      d: "This phase delivered live ETA intelligence and agent-driven recommendations directly into dispatcher workflows and customer visibility surfaces.",
      deliv: [
        "Gradient-boosted ETA model trained on 18 months of GPS and delivery history",
        "AI agents for logistics that monitor traffic, weather, and dock hours in real time",
        "Dispatcher UI that shows suggested changes with cost and SLA impact",
        "Customer portal for live ETAs and proactive delay notifications",
        "Accuracy reporting that risk and operations teams could audit",
      ],
    },
    {
      p: "Phase 3",
      w: "Wks 17–24",
      n: "Fleet Rollout",
      d: "We prioritized adoption and operational continuity so dispatchers and drivers could use AI recommendations without losing control.",
      deliv: [
        "Driver app with turn-by-turn updates integrated into existing tablets",
        "Tablet refresh and training program for all routes and shifts",
        "Change management sessions for dispatchers focused on \"copilot, not autopilot\"",
        "Daily stand-ups to review AI for logistics recommendations and override patterns",
      ],
    },
    {
      p: "Phase 4",
      w: "Wks 25–52",
      n: "Managed Ops",
      d: "Post-launch operations tied model performance directly to business outcomes through managed support and cost governance.",
      deliv: [
        "Weekly model retraining from fresh GPS and delivery data",
        "On-call dispatch support and incident response for peak seasons",
        "QBRs on cost per mile, empty miles, and on-time performance",
        "Cost tracker that ties logistics software development services directly to P&L",
      ],
    },
  ],
  quote: {
    text:
      "They did not try to replace our TMS. They sat next to it, made it smarter, and got out of the way. Our dispatchers still run the show. They just have a better copilot now, powered by AI agents for logistics instead of more spreadsheets.",
    initials: "RC",
    name: "Ramon Castillo",
    role: "COO, Redline Logistics",
  },
  related: [
    {
      n: "Oakridge Industrial",
      i: "Manufacturing",
      v: "34%",
      l: "Less downtime",
      h: "Predictive maintenance program built on the same logistics software development services stack cut downtime 34% in 9 months.",
    },
    {
      n: "Aurora Retail Group",
      i: "Retail",
      v: "18%",
      l: "Conv. lift",
      h: "Personalization engine used AI solutions for logistics-grade data pipelines to drive 18% conversion lift.",
    },
    {
      n: "Meridian Insurance",
      i: "Insurance",
      v: "62%",
      l: "Faster claims",
      h: "Claims and fraud deployment used AI for logistics style orchestration to coordinate adjusters and automation.",
    },
  ],
  relatedCtaLabel: "See all →",
  cta: {
    title: "WRITE YOUR STORY",
    sub: "Tell us your boldest operations metric. We will show you how logistics software development services and AI for logistics, including agent-based routing and ETA prediction, could turn it into a case study your team is proud of.",
    button: "Start a project ↗",
  },
} satisfies CaseStudyTemplateData;
