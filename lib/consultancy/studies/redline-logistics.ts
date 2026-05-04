import type { CaseStudyTemplateData } from "./types";

export const redlineLogisticsStudy = {
  file: "Redline Logistics",
  short: "REDLINE",
  client: "Redline Logistics",
  industry: "Logistics",
  duration: "7 months",
  blurb: "Regional 3PL · 200 trucks · 18 distribution hubs",
  title: "ROUTE AI CUT|FLEET FUEL|21%.",
  lead: "A live route-optimization and ETA-prediction stack rolled out across 200 trucks — without ripping out the existing TMS.",
  facts: [
    ["Industry", "Logistics"],
    ["Engagement", "Custom + Managed"],
    ["Duration", "7 months"],
    ["Team", "5 alien.fi · 3 client"],
    ["Stack", "OR-Tools · LightGBM · Mapbox · AWS"],
  ],
  metrics: [
    { v: "21%", l: "Fuel savings", sub: "Across 200 trucks" },
    { v: "94%", l: "On-time delivery", sub: "Up from 81%" },
    { v: "-32%", l: "Empty miles", sub: "Year-over-year" },
    { v: "2.1×", l: "First-year ROI", sub: "Payback in 7 months" },
  ],
  challenge: {
    heading: "TRUCKS RAN HALF EMPTY.",
    paragraphs: [
      "Redline's planners optimized routes manually every morning. Empty miles were creeping up, fuel costs were eating margin, and the dispatch team was overworked. Their existing TMS couldn't be replaced without a 2-year project nobody had budget for.",
      "The CFO needed a 12-month payback or a hard 'no.'",
    ],
    stats: [
      ["32%", "Empty-mile rate"],
      ["81%", "On-time delivery"],
      ["$4.8M", "Annual fuel spend"],
    ],
  },
  phases: [
    {
      p: "Phase 1",
      w: "Wks 1–6",
      n: "Discovery & Pilot",
      d: "Two-week sit-with-dispatch sprint. Built a Mapbox-based route optimizer; piloted on 12 trucks for 4 weeks.",
      deliv: ["Dispatch audit", "Optimizer prototype", "12-truck pilot", "Baseline KPIs"],
    },
    {
      p: "Phase 2",
      w: "Wks 7–16",
      n: "ETA Prediction",
      d: "LightGBM ETA model trained on 18 months of GPS + traffic. Surfaced live in dispatcher cockpit and customer portal.",
      deliv: ["ETA model", "Dispatcher UI", "Customer portal", "Accuracy reporting"],
    },
    {
      p: "Phase 3",
      w: "Wks 17–24",
      n: "Fleet Rollout",
      d: "Driver app, tablet hardware refresh, change management training. Rollout in 4 cohorts of 50 trucks.",
      deliv: ["Driver app", "Tablet refresh", "Training program", "Daily standups"],
    },
    {
      p: "Phase 4",
      w: "Wks 25–28",
      n: "Managed Ops",
      d: "Weekly model retraining on fresh GPS data. On-call dispatch support. Quarterly business reviews.",
      deliv: ["Retraining pipeline", "Dispatch on-call", "QBRs", "Cost tracker"],
    },
  ],
  quote: {
    text:
      "They didn't try to replace our TMS. They sat next to it, made it smarter, and got out of the way. Our dispatchers still run the show — they just have a better copilot now.",
    initials: "RC",
    name: "Ramon Castillo",
    role: "COO · Redline Logistics",
  },
  related: [
    {
      n: "Oakridge Industrial",
      i: "Manufacturing",
      v: "34%",
      l: "Less downtime",
      h: "Predictive maintenance cut downtime 34% in 9 months.",
    },
    {
      n: "Aurora Retail Group",
      i: "Retail",
      v: "18%",
      l: "Conv. lift",
      h: "Personalization engine drove 18% conversion lift.",
    },
    {
      n: "Meridian Insurance",
      i: "Insurance",
      v: "62%",
      l: "Faster claims",
      h: "9-month transformation cut claims time 62%.",
    },
  ],
} satisfies CaseStudyTemplateData;
