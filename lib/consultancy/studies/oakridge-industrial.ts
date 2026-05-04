import type { CaseStudyTemplateData } from "./types";

export const oakridgeIndustrialStudy = {
  file: "Oakridge Industrial",
  short: "OAKRIDGE",
  client: "Oakridge Industrial",
  industry: "Manufacturing",
  duration: "10 months",
  blurb: "Tier-1 auto supplier · 4 plants · 2,400 employees",
  title: "PREDICTIVE MAINT|CUT DOWNTIME|34%.",
  lead: "A vibration-and-vision predictive maintenance program plus CV-based quality control across four high-mix manufacturing plants.",
  facts: [
    ["Industry", "Manufacturing"],
    ["Engagement", "Custom + Managed"],
    ["Duration", "10 months"],
    ["Team", "8 alien.fi · 6 client"],
    ["Stack", "PyTorch · OPC-UA · Edge GPU · Snowflake"],
  ],
  metrics: [
    { v: "34%", l: "Less downtime", sub: "Unplanned only" },
    { v: "+18%", l: "Throughput", sub: "Across 4 plants" },
    { v: "-67%", l: "Defect escapes", sub: "Customer claims" },
    { v: "3.2×", l: "First-year ROI", sub: "Payback in 6 months" },
  ],
  challenge: {
    heading: "BREAK-FIX TREADMILL.",
    paragraphs: [
      "Oakridge ran a break-fix maintenance shop. A single CNC failure could halt a production line for 14 hours. Their largest OEM customer threatened to dual-source after three quality escapes in one year.",
      "An attempted IIoT rollout from a big-box vendor had stalled at proof-of-concept for 18 months.",
    ],
    stats: [
      ["14 hr", "Avg unplanned down"],
      ["3", "Quality escapes/yr"],
      ["$8.4M", "Lost throughput cost"],
    ],
  },
  phases: [
    {
      p: "Phase 1",
      w: "Wks 1–8",
      n: "Data + Sensors",
      d: "Audit of 240 critical machines. Retrofit vibration + temperature sensors. Standardized OPC-UA streaming to edge boxes.",
      deliv: ["Sensor retrofit", "OPC-UA streams", "Edge gateways", "Data lake"],
    },
    {
      p: "Phase 2",
      w: "Wks 9–22",
      n: "Predictive Maint",
      d: "Per-asset failure models. Maintenance scheduler integration. CMMS work-order auto-creation.",
      deliv: ["Failure models", "Scheduler", "CMMS hooks", "Reliability KPIs"],
    },
    {
      p: "Phase 3",
      w: "Wks 23–34",
      n: "CV Quality Control",
      d: "Edge GPU camera systems on 8 critical inspection points. Defect classifier with active-learning loop.",
      deliv: ["Camera rigs", "Defect classifier", "Active learning", "SPC dashboard"],
    },
    {
      p: "Phase 4",
      w: "Wks 35–40",
      n: "Plant-by-plant Rollout",
      d: "Standardized playbook deployed across remaining three plants in 6 weeks. Internal AI guild seeded.",
      deliv: ["Rollout playbook", "AI guild", "Training library", "Reliability QBRs"],
    },
  ],
  quote: {
    text:
      "We've worked with three IIoT vendors over a decade. alien.fi was the first to actually shut up and listen on the plant floor. The maintenance team trusts the alerts — that's everything.",
    initials: "JT",
    name: "Janet Tobin",
    role: "VP of Operations · Oakridge Industrial",
  },
  related: [
    {
      n: "Redline Logistics",
      i: "Logistics",
      v: "21%",
      l: "Fuel savings",
      h: "Route optimization + ETA prediction cut fuel costs 21%.",
    },
    {
      n: "Meridian Insurance",
      i: "Insurance",
      v: "62%",
      l: "Faster claims",
      h: "9-month transformation cut claims time 62%.",
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
