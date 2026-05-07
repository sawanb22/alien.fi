import type { CaseStudyTemplateData } from "./types";

export const northbayHealthStudy = {
  file: "NorthBay Health",
  short: "NorthBay",
  client: "NorthBay Health",
  industry: "Healthcare",
  duration: "14 months",
  blurb: "Regional health system with 12 hospitals and 1,800 clinicians.",
  title: "AI FOR HEALTHCARE:|EHR COPILOT CUT|CHARTING 41%.",
  lead:
    "A 14-month rollout of a HIPAA-compliant documentation copilot delivered real AI for healthcare in production. The system combined ambient listening, specialty-aware prompts, and healthcare automation inside Epic to cut charting time 41 percent and save each clinician about 52 minutes per shift.",
  facts: [
    ["Industry", ":- Healthcare"],
    ["Engagement", ":- Custom · Managed"],
    ["Duration", ":- 14 months"],
    ["Team", ":- 9 alien.fi · 6 client"],
    ["Stack", ":- Med-PLM · RAG · HL7 · Epic API"],
  ],
  metrics: [
    { v: "41%", l: "Less charting", sub: "52 minutes saved per shift" },
    { v: "1,800", l: "Clinicians live", sub: "Across 12 hospitals" },
    { v: "+38", l: "Provider NPS", sub: "Burnout score down" },
    { v: "4.2x", l: "First-year ROI", sub: "Payback in 6 months" },
  ],
  challenge: {
    heading: "BURNOUT EPIDEMIC.",
    paragraphs: [
      "NorthBay’s clinicians spent 38 percent of every shift on charting instead of patient care. Documentation backlog had become the top driver of physician burnout and the second driver of regrettable attrition.",
      "Two prior AI scribes had stalled, one on Epic integration and one on accuracy. The CMO needed AI for healthcare that was Epic-native, HIPAA-defensible, conservative by design, and trusted enough to roll out to 1,800 physicians without disruption.",
    ],
    stats: [
      ["38%", "Shift spent on charting"],
      ["#1", "Driver of burnout"],
      ["$14M", "Annual attrition cost"],
    ],
  },
  phases: [
    {
      p: "Phase 1",
      w: "Weeks 1–10",
      n: "Clinical pilot",
      d: "Hand built ambient-listening copilot piloted with 20 EPs at a flagship hospital.",
      deliv: [
        "Specialty templates tuned for emergency, internal medicine, and pediatrics",
        "Trust dashboard so clinicians could see and correct AI notes in seconds",
        "Clinician feedback loop that shipped weekly updates to the model and prompts",
      ],
    },
    {
      p: "Phase 2",
      w: "Weeks 11–24",
      n: "Epic integration",
      d: "Native HL7 FHIR integration into Epic Hyperspace for real AI for healthcare workflows.",
      deliv: [
        "Auto population of structured fields from accepted copilot notes",
        "Audit trail, access controls, and re-auth flow aligned with Epic security",
        "Robust error handling to keep documentation safe if the copilot went offline",
      ],
    },
    {
      p: "Phase 3",
      w: "Weeks 25–34",
      n: "System wide rollout",
      d: "Hospital by hospital deployment with specialty playbooks for each clinical unit.",
      deliv: [
        "Coaching network of clinician champions to support colleagues on day one",
        "Adoption KPIs and quality circles to monitor healthcare automation impact",
        "User research sessions that shaped copy and UX inside the note editor",
      ],
    },
    {
      p: "Phase 4",
      w: "Weeks 35–60",
      n: "Managed operations",
      d: "Weekly accuracy review on de-identified shadow charts.",
      deliv: [
        "Retraining pipeline and drift monitoring on new note types",
        "Compliance unit review and quarterly audit pack for regulators",
        "24/7 SRE coverage to keep the copilot available during peak shifts",
      ],
    },
  ],
  approachIntro:
    "The program was sequenced as four phases so each release delivered tangible healthcare automation, measurable relief for clinicians, and clear proof that the AI solutions for healthcare would hold up in a real hospital environment.",
  quote: {
    text:
      "This is the only AI deployment I have signed off on that clinicians actively ask for in new clinics. The copilot earned its place by being conservative, predictable, and supportive of real-world workflows. Our team felt heard at every step.",
    initials: "DP",
    name: "Dr. Priya Desai",
    role: "Chief Medical Information Officer, NorthBay Health",
  },
  related: [
    {
      n: "Meridian Insurance",
      i: "Insurance",
      v: "62%",
      l: "Faster claims",
      h: "Claims and fraud program delivered AI for healthcare’s sister pattern in insurance, cutting claims time 62 percent and saving $3.2M annually.",
    },
    {
      n: "Lumen Legal",
      i: "Legal",
      v: "82%",
      l: "Faster review",
      h: "Contract review AI cut 82 percent of routine redline time and showed how AI solutions for healthcare can translate to other document heavy fields.",
    },
    {
      n: "Civica State Agency",
      i: "Government",
      v: "$28M",
      l: "Recovered",
      h: "Benefits fraud ML recovered $28M in one year and reused the same healthcare automation playbook for regulated environments.",
    },
  ],
  relatedCtaLabel: "See all →",
  cta: {
    title: "WRITE YOUR STORY",
    sub: "Tell us your most painful clinical or operational metric. We will show you how AI for healthcare deployments like NorthBay’s documentation copilot turned similar baselines into audited outcomes and outline three AI solutions for healthcare and healthcare automation that could work in your environment.",
    button: "Start a project",
  },
} satisfies CaseStudyTemplateData;
