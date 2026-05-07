import type { CaseStudyTemplateData } from "./types";

export const civicaStateStudy = {
  file: "Civica State Agency",
  short: "Civica",
  client: "Civica State Agency",
  industry: "Government",
  duration: "15 months",
  blurb: "State benefits department serving 3M residents with 1,400 staff.",
  title: "AI FOR GOVERNMENT AGENCIES:|BENEFITS AI|RECOVERED $28M.",
  lead: "An AI for government agencies program that replaced a brittle rules tool with a benefits-fraud ML system deployed under public-sector oversight. The solution delivered consulting-firm grade AI driven public sector solutions, full bias auditing, and FOIA-defensible audit trails while recovering $28M in one year.",
  facts: [
    ["Industry", "Government"],
    ["Engagement", "Custom · Governance · Managed"],
    ["Duration", "15 months"],
    ["Team", "8 alien.fi · 11 client"],
    ["Stack", "XGBoost · SHAP · Snowflake · GovCloud"],
  ],
  metrics: [
    { v: "$28M", l: "Recovered", sub: "In year one" },
    { v: "-38%", l: "False positives", sub: "Versus prior system" },
    { v: "94%", l: "Disposition agreement", sub: "Investigator audit" },
    { v: "2.4x", l: "First-year ROI", sub: "Payback in 9 months" },
  ],
  challenge: {
    heading: "PUBLIC TRUST FIRST.",
    paragraphs: [
      "Civica's investigators were chasing an estimated $80M in annual benefits fraud, but their existing rules screen was flagging 14 percent of legitimate claimants and drawing legislative criticism. A poorly implemented AI pilot had already been pulled by the state ombudsman in 2021, so any new AI for government agencies had to prove it was safer than the status quo.",
      "The bar was clear: defensible accuracy, demographically audited fairness, and full transparency for civil-society oversight groups.",
    ],
    stats: [
      ["$80M", "Estimated annual fraud"],
      ["14%", "False-positive rate"],
      ["Pulled", "2021 vendor tool"],
    ],
  },
  approachIntro:
    "We structured the work as four phases so each release delivered visible savings and rebuilt trust in AI consulting for government agencies across elected officials, civil servants, and community advocates.",
  phases: [
    {
      p: "Phase 1",
      w: "Wks 1–10",
      n: "Stakeholder Alignment",
      d: "Before any model development, we aligned policy, advocacy, and operations stakeholders around clear guardrails for deployment.",
      deliv: [
        "Worked with ombudsman, ACLU advisory council, and community panel before any model work",
        "Captured fairness constraints and veto conditions that would govern AI for government agencies",
        "Drafted a public fairness charter and investigator bill of rights",
        "Built a bias dashboard prototype to show what would be monitored",
      ],
    },
    {
      p: "Phase 2",
      w: "Wks 11–24",
      n: "Model Development",
      d: "The model phase prioritized both fraud performance and fairness under public-sector constraints and review standards.",
      deliv: [
        "Trained constrained gradient-boosted models with monotonicity and equal-odds constraints",
        "Tuned for case-handler productivity, not just fraud catch, to reflect real workloads",
        "Integrated SHAP-based explanations suitable for AI driven public sector solutions under FOIA",
        "Produced disparity reports by demographic segment for independent review",
      ],
    },
    {
      p: "Phase 3",
      w: "Wks 25–34",
      n: "Investigator Rollout",
      d: "Rollout focused on investigator usability, explainability, and strict human oversight for every action.",
      deliv: [
        "Triage cockpit for 220 investigators that ranked cases by impact and evidence strength",
        "Human-in-the-loop review so no action occurred without staff approval",
        "Public-facing transparency portal that described how the AI ranked cases in plain language",
        "Training program that paired new tools with scenario-based practice sessions",
      ],
    },
    {
      p: "Phase 4",
      w: "Wks 35–60",
      n: "Public Operations",
      d: "Post-launch operations centered on transparent reporting, independent re-audits, and safety controls.",
      deliv: [
        "Quarterly bias re-audit with external observers and the ombudsman's office",
        "FOIA log and documentation pack generated automatically for every model release",
        "Stakeholder report for legislators and civil-society partners on savings and fairness",
        "Auto-pause guardians that halted scoring if drift or bias thresholds were crossed",
      ],
    },
  ],
  quote: {
    text:
      "They knew, before we did, that the politics of public-sector AI matter as much as the math. That is why this stuck. We built consent first, then code. The result is AI for government agencies that our investigators trust and our oversight bodies can defend.",
    initials: "AM",
    name: "Anita Morales",
    role: "Deputy Commissioner, Civica State Agency",
  },
  related: [
    {
      n: "Kestrel Bank",
      i: "Financial",
      v: "$47M",
      l: "Fraud recovered",
      h: "Real-time fraud model built as an AI for government agencies-ready pattern for risk and compliance.",
    },
    {
      n: "Lumen Legal",
      i: "Legal",
      v: "82%",
      l: "Faster review",
      h: "Contract AI reduced 82 percent of routine redline time using the same consulting firms AI driven public sector solutions governance approach.",
    },
    {
      n: "NorthBay Health",
      i: "Healthcare",
      v: "41%",
      l: "Less charting",
      h: "EHR copilot rolled out to 1,800 clinicians, showing how AI consulting for government agencies can share patterns with regulated healthcare.",
    },
  ],
  relatedCtaLabel: "See all →",
  cta: {
    title: "WRITE YOUR STORY",
    sub: "Tell us your boldest public-sector metric. We will show you how AI for government agencies deployments like Civica's benefits program, guided by AI consulting for government agencies and consulting firms AI driven public sector solutions, turned similar baselines into audited outcomes.",
    button: "Start a project ↗",
  },
} satisfies CaseStudyTemplateData;
