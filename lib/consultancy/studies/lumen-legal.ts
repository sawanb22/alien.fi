import type { CaseStudyTemplateData } from "./types";

export const lumenLegalStudy = {
  file: "Lumen Legal",
  short: "Lumen",
  client: "Lumen Legal",
  industry: "Legal",
  duration: "12 months",
  blurb: "AmLaw 100 firm with 1,200 attorneys and 14 offices.",
  title: "AI FOR LEGAL:|CONTRACT AI CUT|82% OF REDLINE TIME.",
  lead: "A privilege-respecting contract review copilot rolled out across the M&A practice, delivering AI for legal that associates actually trust. The system combines AI for legal research and legal automation software patterns to eliminate 82 percent of routine redlines and give partners clean, defensible drafts in minutes.",
  facts: [
    ["Industry", "Legal & Compliance"],
    ["Engagement", "Custom · Governance"],
    ["Duration", "12 months"],
    ["Team", "7 alien.fi · 8 client"],
    ["Stack", "GPT-4 · Anthropic · Vector DB · RAG"],
  ],
  metrics: [
    { v: "82%", l: "Faster review", sub: "Routine redlines" },
    { v: "14 hr", l: "Saved per associate", sub: "Per week" },
    { v: "2,400", l: "Contracts per month", sub: "Through copilot" },
    { v: "4.1x", l: "First-year ROI", sub: "Payback in 6 months" },
  ],
  challenge: {
    heading: "AI WITH PRIVILEGE.",
    paragraphs: [
      "Lumen's M&A practice was drowning in NDAs and standard purchase agreements while associates burned out on routine redlines that should take 20 minutes but never did. Every prior AI for legal tool had been rejected by the firm's privilege committee because no vendor could guarantee that client text never left the firm's tenant.",
      "The bar for any AI for legal research or legal automation software was simple but unforgiving: no client language leaves, every suggestion must be explainable, and no model can create privilege risk.",
    ],
    stats: [
      ["2,400", "Contracts per month"],
      ["54%", "Associate burnout intent"],
      ["Rejected", "3 prior vendors"],
    ],
  },
  approachIntro:
    "We designed the program as four phases so each release delivered measurable value, satisfied the privilege committee, and showed that AI for legal can be both conservative and fast.",
  phases: [
    {
      p: "Phase 1",
      w: "Wks 1–10",
      n: "Privilege Architecture",
      d: "We established a privilege-safe architecture first so legal teams could trust the system before broad rollout.",
      deliv: [
        "Tenant-isolated deployment in firm Azure with private networking",
        "On-prem vector store for clause retrieval and AI for legal research prompts",
        "Air-gapped tuning data for supervised improvements",
        "Immutable audit logs for every suggestion the copilot makes",
        "Committee playbook that documents how legal automation software is governed",
      ],
    },
    {
      p: "Phase 2",
      w: "Wks 11–20",
      n: "Playbook Library",
      d: "The second phase encoded legal judgment directly into retrieval and guidance so suggestions were explainable and firm-specific.",
      deliv: [
        "Encoded firm-standard playbooks for NDAs, MSAs, SPA, and RFP responses",
        "14 playbooks authored by practice group leaders and knowledge lawyers",
        "RAG prompts tied to clause-level guidance instead of generic LLM behavior",
        "Citation engine that highlights the exact playbook line behind each suggestion",
        "Conflict checks that flag out-of-bounds edits before they reach a client",
      ],
    },
    {
      p: "Phase 3",
      w: "Wks 21–34",
      n: "Practice Rollout",
      d: "We rolled out in controlled waves so each practice could adopt safely without introducing process risk.",
      deliv: [
        "Phased rollout to M&A, then commercial, then privacy as each group signed off",
        "In-matter copilot panel inside the firm's document system rather than another tool",
        "Adoption playbook that paired each associate with a copilot champion",
        "Training library with five-minute flows for the most common AI for legal tasks",
        "Office hours with alien.fi and KM to review edge cases and refine prompts",
      ],
    },
    {
      p: "Phase 4",
      w: "Wks 35–52",
      n: "Continuous Governance",
      d: "Continuous governance kept quality, privilege, and legal standards current after launch.",
      deliv: [
        "Monthly bias and quality review with the privilege committee",
        "Quarterly privilege and regulation review for new case law",
        "AI for legal research usage dashboards for KM and practice leads",
        "Knowledge base updates that push new rules into the copilot in days, not quarters",
        "24/7 on-call support for critical closings and live deal rooms",
      ],
    },
  ],
  quote: {
    text:
      "They earned the privilege committee's trust before they earned their fee. By the time we rolled the copilot out to associates, every objection had already been adjudicated and the tool behaved like conservative legal automation software that understood how we actually practice.",
    initials: "TN",
    name: "Theresa Nakamura",
    role: "Chief Knowledge Officer, Lumen Legal",
  },
  related: [
    {
      n: "NorthBay Health",
      i: "Healthcare",
      v: "41%",
      l: "Less charting",
      h: "EHR copilot rolled out to 1,800 clinicians as AI for healthcare documentation, cutting charting time 41 percent.",
    },
    {
      n: "Civica State Agency",
      i: "Government",
      v: "$28M",
      l: "Recovered",
      h: "Benefits fraud ML recovered $28M in one year using the same governance patterns as AI for legal.",
    },
    {
      n: "Kestrel Bank",
      i: "Financial",
      v: "$47M",
      l: "Fraud recovered",
      h: "Real-time fraud model built as a finance-grade legal automation software pattern for risk and compliance teams.",
    },
  ],
  relatedCtaLabel: "See all →",
  cta: {
    title: "WRITE YOUR STORY",
    sub: "Tell us your boldest metric in legal operations. We will show you how AI for legal deployments like Lumen's contract copilot, anchored in AI for legal research and tightly governed legal automation software, turned similar baselines into audited outcomes.",
    button: "Start a project",
  },
} satisfies CaseStudyTemplateData;
