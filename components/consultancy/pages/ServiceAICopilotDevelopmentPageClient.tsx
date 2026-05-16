"use client";

import Link from "next/link";
import { ConsultancyLoadedShell } from "@/components/consultancy/ConsultancyLoadedShell";
import {
  Arr,
  ConsultancyFaqAccordion,
  ConsultancyCardGrid,
  ConsultancyInteractiveSurface,
  CTAStrip,
  Footer,
  Lbl,
  Nav,
  Ttl,
  consultancyGhostOnDarkEnter,
  consultancyGhostOnDarkLeave,
  consultancyLimeCtaEnter,
  consultancyLimeCtaLeave,
} from "@/components/consultancy/consultancy-ui";
import { gridCols, sectionGutter, sectionVPad, useLandingLayout } from "@/lib/landing-layout-context";
import { MN, SN } from "@/lib/consultancy/tokens";
import { BG, BG2, DK, L, L2, L_TEXT_ON_LIGHT, PL } from "@/lib/consultancy/theme";
import { MagneticWrap, ScrollGridItem, ScrollSection } from "@/components/motion/scroll-primitives";

const METRICS = [
  { v: "40%", l: "Avg productivity gain", s: "Post enterprise ai copilot deployment" },
  { v: "60%", l: "Reduction in support ticket volume", s: "Via AI assistant automation" },
  { v: "2 to 6 mo", l: "Build timeline", s: "Design to production deployment" },
  { v: "$50K", l: "Starting engagement cost", s: "Fixed-fee, defined scope" },
];

const PHASES = [
  {
    p: "Phase 01 · 2 WEEKS",
    t: "Discovery and Architecture",
    d: "We map your workflows, identify the highest-value tasks for copilot augmentation, audit your existing data sources and knowledge base, and design the enterprise ai copilot architecture including LLM backbone selection, memory systems, integration points, and safety guardrails.",
    b: [
      "Workflow and use case mapping",
      "Data and knowledge base audit",
      "LLM backbone selection",
      "Architecture blueprint",
    ],
  },
  {
    p: "Phase 02 · 3 to 6 WEEKS",
    t: "Core Copilot Build",
    d: "We build the core custom ai copilot development services layer including the LLM integration, retrieval pipeline, tool-calling configuration, memory systems, and the initial set of copilot skills and actions tied to your specific business workflows.",
    b: [
      "LLM and retrieval integration",
      "Tool-calling and API connections",
      "Short-term and long-term memory",
      "Initial copilot skills build",
    ],
  },
  {
    p: "Phase 03 · 2 to 4 WEEKS",
    t: "Platform Integration and Testing",
    d: "We embed the enterprise ai copilot into your chosen platform, whether Microsoft Teams, Slack, Notion, Confluence, or a custom interface. We run accuracy testing, hallucination benchmarking, edge case evaluation, and user acceptance testing with a pilot group before full rollout.",
    b: [
      "Platform embedding and UI",
      "Accuracy and hallucination testing",
      "Edge case and safety review",
      "Pilot group user testing",
    ],
  },
  {
    p: "Phase 04 · 1 to 2 WEEKS",
    t: "Deployment and Handover",
    d: "We deploy to production, configure access controls and permissions, set up the monitoring and feedback pipeline, and train your team on how to manage, extend, and expand the copilot over time.",
    b: [
      "Production deployment",
      "Access controls and permissions",
      "Monitoring and feedback setup",
      "Team training and documentation",
    ],
  },
];

const DELIVERABLES = [
  {
    h: "Production Enterprise AI Copilot",
    d: "A fully deployed, production-grade enterprise ai copilot embedded into your chosen platform and integrated with your internal data sources, knowledge bases, and business tools. Not a sandbox demo. A live system your team uses from day one of handover with real query volume and real business tasks.",
  },
  {
    h: "Copilot Skills Library",
    d: "A documented library of all copilot skills, actions, and workflows built into your custom ai copilot development services engagement. Each skill is version-controlled, documented, and structured so your team can extend or modify the copilot without starting from scratch.",
  },
  {
    h: "Knowledge Base and Retrieval Configuration",
    d: "Full documentation of the knowledge base architecture, ingestion pipelines, chunking strategy, retrieval configuration, and reranking settings that power your enterprise ai copilot. Includes an automated refresh pipeline so the copilot stays current as your internal documentation evolves.",
  },
  {
    h: "Integration Documentation",
    d: "Complete technical documentation of every API connection, tool-calling configuration, and platform integration built into your copilot. Covers authentication, data flows, rate limits, error handling, and rollback procedures for every connected system.",
  },
  {
    h: "Safety and Guardrails Report",
    d: "A documented safety evaluation covering output validation layers, hallucination rates on benchmark queries, human escalation triggers, and the guardrail configuration applied to your enterprise ai copilot. Delivered before go-live and updated after each major version change.",
  },
  {
    h: "Monitoring Dashboard and Handover Training",
    d: "A live monitoring dashboard tracking copilot usage, query volume, task completion rates, escalation frequency, and user feedback scores. Plus a live training session covering how to manage, extend, and troubleshoot your custom ai copilot development services deployment after alien.fi hands over ownership.",
  },
];

const BUILD_TYPES = [
  {
    h: "Enterprise Knowledge Copilot",
    d: "An enterprise ai copilot embedded into Teams, Slack, or Confluence that answers employee questions, surfaces relevant documents, drafts communications, and coordinates tasks using your company's own knowledge base. Eliminates internal search friction and reduces repetitive support requests across HR, IT, legal, and operations.",
  },
  {
    h: "Workflow Automation Copilot",
    d: "A custom ai copilot that monitors triggers such as a new support ticket, a contract uploaded, or a data threshold crossed and executes multi-step actions without human initiation. Connects your tools and automates the handoffs between them so your team focuses on decisions, not data entry.",
  },
  {
    h: "Domain-Specific Expert Copilot",
    d: "A specialized enterprise ai copilot fine-tuned or retrieval-augmented for a specific professional domain. Legal contract review. Medical documentation. Financial analysis. Code generation. Built on proprietary data and domain knowledge for accuracy that generic AI tools cannot match.",
  },
  {
    h: "Multi-Agent Copilot System",
    d: "An orchestrated network of specialized ai copilot agents that collaborate on complex tasks. A research agent feeds insights to a drafting agent, which feeds a presentation-building agent. The result is an enterprise ai copilot that handles multi-step, multi-source business problems autonomously from start to finish.",
  },
];

const PLATFORMS = [
  ["Microsoft Teams", "Native bot with adaptive cards", "HR helpdesk, IT support, sales assist"],
  ["Slack", "App with slash commands and actions", "Operations, engineering, customer success"],
  ["Notion / Confluence", "Embedded knowledge assistant", "Documentation search, content drafting"],
  ["Salesforce", "CRM-native copilot actions", "Lead research, deal summaries, follow-ups"],
  ["Custom Web or Mobile", "Headless API or embedded UI", "Any proprietary internal platform"],
] as const;

const TECHNICAL_APPROACH = [
  "LLM backbone selection from GPT-4o, Claude, Mistral, Llama 3, or fine-tuned open-source models based on your data residency and cost requirements",
  "Tool integration via function calling and Model Context Protocol for reliable, auditable action execution",
  "Memory systems covering short-term conversation context, long-term vector memory, and episodic memory for personalized, context-aware responses",
  "Safety guardrails including output validation layers, content filtering, hallucination detection, and human escalation protocols built into every enterprise ai copilot",
  "Full MLOps pipeline for monitoring, retraining, version control, and continuous improvement after deployment",
];

const QUOTES = [
  {
    q: "We deployed alien.fi's enterprise ai copilot inside Microsoft Teams for our legal and compliance team. Contract review time dropped by 50% in the first 30 days. The copilot knows our specific clause library and flags issues the same way our senior attorneys do.",
    by: "Head of Legal Operations, Financial Services Company",
  },
  {
    q: "We had tried three off-the-shelf AI tools before engaging alien.fi for custom ai copilot development services. None of them knew our product deeply enough to be useful. alien.fi built a copilot on our own documentation and it handles 60% of our tier-1 support queries autonomously.",
    by: "VP of Customer Success, B2B SaaS Company",
  },
  {
    q: "The enterprise ai copilot alien.fi built for our operations team connects to six different internal tools. It handles multi-step tasks that used to take our team 45 minutes and completes them in under two minutes. The ROI was visible in the first week.",
    by: "Chief Operating Officer, Mid-Market Healthcare Provider",
  },
];

const FAQS = [
  {
    q: "What are ai copilot development services and what do they deliver?",
    a: "AI copilot development services design, build, and deploy custom AI assistant systems embedded directly into your enterprise tools and workflows. alien.fi's ai copilot development services deliver a production-grade enterprise ai copilot including LLM integration, knowledge base retrieval, tool-calling automation, platform embedding, safety guardrails, a monitoring dashboard, and team training within 2 to 6 months.",
  },
  {
    q: "How is a custom ai copilot different from Microsoft Copilot or ChatGPT?",
    a: "Off-the-shelf tools like Microsoft Copilot operate on general knowledge and have limited access to your proprietary data and specific workflows. Custom ai copilot development services build an enterprise ai copilot trained on your internal documents, connected to your specific tools, and configured to execute your exact business processes. The result is dramatically higher accuracy and relevance for your team's real daily tasks.",
  },
  {
    q: "What platforms can an enterprise ai copilot be embedded into?",
    a: "alien.fi's ai copilot development services support deployment into Microsoft Teams, Slack, Notion, Confluence, Salesforce, ServiceNow, and any platform with an API. We also build custom web or mobile interfaces for organizations that need a proprietary front-end for their enterprise ai copilot.",
  },
  {
    q: "What data sources does a custom ai copilot connect to?",
    a: "Our custom ai copilot development services connect to internal wikis, SharePoint, Confluence, Notion, Google Drive, Salesforce, SQL databases, REST APIs, and any data source accessible via API or file export. If your knowledge lives somewhere, we build a pipeline to make it accessible to your copilot.",
  },
  {
    q: "How long does an ai copilot development services engagement take?",
    a: "Standard ai copilot development services engagements take 2 to 6 months from discovery to production deployment. The timeline depends on the number of integrated platforms, the complexity of the workflow automations, and whether the enterprise ai copilot includes multi-agent orchestration or domain-specific fine-tuning.",
  },
  {
    q: "What is the budget range for ai copilot development services at alien.fi?",
    a: "AI copilot development services engagements start at $50,000 for a single-platform, knowledge-retrieval copilot and scale to $500,000 for multi-platform, multi-agent enterprise ai copilot builds with deep workflow automation and custom LLM fine-tuning. All engagements are fixed-fee with a defined scope agreed before work begins.",
  },
] as const;

const FAQ_ITEMS: ReadonlyArray<readonly [string, string]> = FAQS.map((f) => [f.q, f.a]);

function Hero() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const stacked = layout !== "desktop";
  return (
    <ScrollSection as="section" index={0} style={{ paddingTop: 60, background: DK, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ padding: `0 ${gv}px` }}>
        <div style={{ display: "grid", gridTemplateColumns: stacked ? "1fr" : "320px 1fr", minHeight: stacked ? undefined : 500 }}>
          <div style={{ padding: stacked ? "36px 0 28px" : "60px 36px", borderRight: stacked ? "none" : "1px solid rgba(255,255,255,0.06)", borderBottom: stacked ? "1px solid rgba(255,255,255,0.06)" : "none", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 24 }}>
            <div>
              <div style={{ display: "flex", gap: 8, marginBottom: 32, fontFamily: MN, fontSize: 9, letterSpacing: "normal", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
                <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</Link><span>/</span>
                <Link href="/services" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Services</Link><span>/</span>
                <span style={{ color: L2 }}>AI Copilot Development</span>
              </div>
              <Lbl ch="Service · Custom Build" lt />
              <div style={{ fontFamily: MN, color: "#fff", fontSize: 18, lineHeight: 1.5, marginBottom: 12 }}>
                AI copilot development services purpose-engineered for your workflows.
              </div>
              <div style={{ fontFamily: SN, color: "rgba(255,255,255,0.58)", fontSize: 13, lineHeight: 1.68 }}>
                For enterprise teams that need an intelligent AI assistant embedded directly inside the tools they already use. Not a generic chatbot. A custom ai copilot built on your data, trained on your processes, and deployed inside your stack.
              </div>
            </div>
            <div style={{ fontFamily: MN, fontSize: 11, color: "rgba(255,255,255,0.82)", lineHeight: 1.9 }}>
              <div>Engagement: $50K to $500K</div>
              <div>Duration: 2 to 6 months</div>
              <div>Team: 1 AI architect + 2 LLM engineers + 1 solutions integrator</div>
              <div>Output: Production-grade enterprise ai copilot</div>
            </div>
          </div>
          <div style={{ padding: stacked ? "34px 0 44px" : "72px 60px" }}>
            <Lbl ch="Enterprise AI Copilot and Custom AI Copilot Development" lt />
            <div style={{ fontFamily: MN, fontSize: "clamp(34px,5vw,72px)", lineHeight: 1, letterSpacing: "normal", color: "#fff", marginBottom: 24 }}>
              <div style={{ fontWeight: 300 }}>YOUR TEAM.</div>
              <div style={{ fontWeight: 500 }}>YOUR TOOLS.</div>
              <div style={{ fontWeight: 700, color: L }}>YOUR COPILOT.</div>
            </div>
            <div style={{ fontFamily: SN, fontSize: 15, lineHeight: 1.72, color: "rgba(255,255,255,0.62)", maxWidth: 760, marginBottom: 26 }}>
              Generic AI tools do not know your processes, your data, or your business. Our ai copilot development services build context-aware, enterprise ai copilot systems embedded directly into Teams, Slack, Notion, or your own platform. Every response grounded in your knowledge base. Every action tied to your workflows.
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <MagneticWrap strength={0.35} style={{ display: "inline-flex" }}>
                <Link
                  href="/contact"
                  className="hv"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: L,
                    color: "#000",
                    textDecoration: "none",
                    borderRadius: 999,
                    padding: "12px 18px",
                    fontFamily: MN,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "normal",
                    textTransform: "uppercase",
                    transition: "background .2s,color .2s,box-shadow .2s",
                  }}
                  onMouseEnter={consultancyLimeCtaEnter}
                  onMouseLeave={consultancyLimeCtaLeave}
                >
                  Start your copilot project <Arr sz={10} cl="currentColor" />
                </Link>
              </MagneticWrap>
              <MagneticWrap strength={0.35} style={{ display: "inline-flex" }}>
                <Link
                  href="/case-studies"
                  className="hv"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    border: "1px solid rgba(255,255,255,0.28)",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: 999,
                    padding: "12px 18px",
                    fontFamily: MN,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "normal",
                    textTransform: "uppercase",
                    transition: "background .2s,box-shadow .2s",
                  }}
                  onMouseEnter={consultancyGhostOnDarkEnter}
                  onMouseLeave={consultancyGhostOnDarkLeave}
                >
                  See past builds
                </Link>
              </MagneticWrap>
            </div>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
}

function Metrics() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  return (
    <ScrollSection as="section" index={1} style={{ padding: `${layout === "mobile" ? 40 : 60}px ${gv}px`, background: DK }}>
      <ConsultancyCardGrid desktopCols={4} tabletCols={2} tone="dark" borderRadius={18}>
        {METRICS.map((m, i) => (
          <ScrollGridItem key={m.l} sectionIndex={1} cardIndex={i}>
            <ConsultancyInteractiveSurface variant="dk" style={{ padding: "24px 20px" }}>
              <div style={{ fontFamily: MN, fontSize: 42, fontWeight: 700, color: L, lineHeight: 1, marginBottom: 10 }}>{m.v}</div>
              <div style={{ fontFamily: MN, fontSize: 11.5, fontWeight: 600, color: "rgba(255,255,255,0.82)", marginBottom: 4 }}>{m.l}</div>
              <div style={{ fontFamily: SN, fontSize: 11, color: "rgba(255,255,255,0.5)" }}>{m.s}</div>
            </ConsultancyInteractiveSurface>
          </ScrollGridItem>
        ))}
      </ConsultancyCardGrid>
    </ScrollSection>
  );
}

function Method() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  return (
    <ScrollSection as="section" index={2} style={{ padding: `${pv}px ${gv}px`, background: BG, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
      <div style={{ marginBottom: 40, display: "grid", gridTemplateColumns: layout === "desktop" ? "320px 1fr" : "1fr", gap: 40, alignItems: "end" }}>
        <div><Lbl ch="Two to six months · Four phases" /><Ttl ch="THE METHOD." /></div>
        <div style={{ fontFamily: SN, fontSize: 14, color: "rgba(0,0,0,0.58)", maxWidth: 760, lineHeight: 1.7 }}>
          Our custom ai copilot development services follow four sequential phases. Each phase produces a tangible output. Each output earns the next. No surprises at month six.
        </div>
      </div>
      <ConsultancyCardGrid desktopCols={4} tabletCols={2} tone="light" borderRadius={18}>
        {PHASES.map((p, i) => (
          <ScrollGridItem key={p.p} sectionIndex={2} cardIndex={i}>
            <ConsultancyInteractiveSurface variant="gradient" style={{ padding: "24px 20px" }}>
              <div style={{ fontFamily: MN, fontSize: 11, letterSpacing: "normal", fontWeight: 700, color: L_TEXT_ON_LIGHT, marginBottom: 8 }}>{p.p}</div>
              <div style={{ fontFamily: MN, fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{p.t}</div>
              <div style={{ fontFamily: SN, fontSize: 12.5, lineHeight: 1.65, color: "rgba(0,0,0,0.58)", marginBottom: 10 }}>{p.d}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {p.b.map((x) => (
                  <div key={x} style={{ display: "flex", gap: 8, fontFamily: MN, fontSize: 10.5, color: "rgba(0,0,0,0.56)" }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: L_TEXT_ON_LIGHT, marginTop: 6, flexShrink: 0 }} />
                    {x}
                  </div>
                ))}
              </div>
            </ConsultancyInteractiveSurface>
          </ScrollGridItem>
        ))}
      </ConsultancyCardGrid>
    </ScrollSection>
  );
}

function Deliverables() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  return (
    <ScrollSection as="section" index={3} style={{ padding: `${pv}px ${gv}px`, background: DK, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
      <div style={{ marginBottom: 34 }}><Lbl ch="Six deliverables" lt /><Ttl ch="WHAT YOU TAKE HOME." lt /></div>
      <ConsultancyCardGrid desktopCols={3} tabletCols={2} tone="dark" borderRadius={18}>
        {DELIVERABLES.map((d, i) => (
          <ScrollGridItem key={d.h} sectionIndex={3} cardIndex={i}>
            <ConsultancyInteractiveSurface variant="dk" style={{ padding: "24px 20px" }}>
              <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 11, color: L, letterSpacing: "normal", marginBottom: 8 }}>
                {String(i + 1).padStart(2, "0")} —
              </div>
              <div style={{ fontFamily: MN, fontSize: 15, fontWeight: 600, color: "#fff", marginBottom: 8 }}>{d.h}</div>
              <div style={{ fontFamily: SN, fontSize: 12.5, lineHeight: 1.65, color: "rgba(255,255,255,0.58)" }}>{d.d}</div>
            </ConsultancyInteractiveSurface>
          </ScrollGridItem>
        ))}
      </ConsultancyCardGrid>
    </ScrollSection>
  );
}

function BuildTypes() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  return (
    <ScrollSection as="section" index={4} style={{ padding: `${pv}px ${gv}px`, background: BG2, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
      <div style={{ marginBottom: 32 }}><Lbl ch="Copilot types" /><Ttl ch="FOUR TYPES WE BUILD." /></div>
      <ConsultancyCardGrid desktopCols={2} tabletCols={1} tone="light" borderRadius={18}>
        {BUILD_TYPES.map((x, i) => (
          <ScrollGridItem key={x.h} sectionIndex={4} cardIndex={i}>
            <ConsultancyInteractiveSurface variant="light" style={{ padding: "24px 20px" }}>
              <div style={{ fontFamily: MN, fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{x.h}</div>
              <div style={{ fontFamily: SN, fontSize: 12.5, lineHeight: 1.68, color: "rgba(0,0,0,0.58)" }}>{x.d}</div>
            </ConsultancyInteractiveSurface>
          </ScrollGridItem>
        ))}
      </ConsultancyCardGrid>
    </ScrollSection>
  );
}

function Platforms() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  return (
    <ScrollSection as="section" index={5} style={{ padding: `${pv}px ${gv}px`, background: DK, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
      <div style={{ marginBottom: 28 }}><Lbl ch="Integration-ready" lt /><Ttl ch="WHERE YOUR COPILOT LIVES." lt /></div>
      <ConsultancyCardGrid desktopCols={1} tabletCols={1} tone="dark" borderRadius={14}>
        {PLATFORMS.map(([platform, integration, useCases], i) => (
          <ScrollGridItem key={platform} sectionIndex={5} cardIndex={i}>
            <ConsultancyInteractiveSurface
              variant="dk"
              style={{ padding: "16px 18px", display: "grid", gridTemplateColumns: layout === "mobile" ? "1fr" : "1fr 1fr 1.2fr", gap: 10 }}
            >
              <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 12, color: "#fff" }}>{platform}</div>
              <div style={{ fontFamily: MN, fontSize: 11, color: "rgba(255,255,255,0.7)" }}>{integration}</div>
              <div style={{ fontFamily: SN, fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{useCases}</div>
            </ConsultancyInteractiveSurface>
          </ScrollGridItem>
        ))}
      </ConsultancyCardGrid>
    </ScrollSection>
  );
}

function TechnicalApproach() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  return (
    <ScrollSection as="section" index={6} style={{ padding: `${pv}px ${gv}px`, background: BG, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
      <div style={{ marginBottom: 22 }}><Lbl ch="Under the hood" /><Ttl ch="HOW WE BUILD IT." /></div>
      <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.7, color: "rgba(0,0,0,0.6)", marginBottom: 16 }}>
        Our ai copilot development services use a production-grade technical stack selected for your specific infrastructure, compliance requirements, and scale needs.
      </div>
      <div style={{ display: "grid", gap: 8 }}>
        {TECHNICAL_APPROACH.map((item, i) => (
          <ScrollGridItem key={item} sectionIndex={6} cardIndex={i}>
            <ConsultancyInteractiveSurface variant="light" style={{ padding: "12px 14px", borderRadius: 12 }}>
              <div style={{ display: "flex", gap: 10, fontFamily: SN, fontSize: 12.5, lineHeight: 1.66, color: "rgba(0,0,0,0.62)" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: L_TEXT_ON_LIGHT, marginTop: 7, flexShrink: 0 }} />
                {item}
              </div>
            </ConsultancyInteractiveSurface>
          </ScrollGridItem>
        ))}
      </div>
    </ScrollSection>
  );
}

function SocialProof() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  return (
    <ScrollSection as="section" index={7} style={{ padding: `${pv}px ${gv}px`, background: DK, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
      <div style={{ marginBottom: 30 }}><Lbl ch="What clients say" lt /><Ttl ch="TRUSTED BY TEAMS THAT SHIP." lt /></div>
      <ConsultancyCardGrid desktopCols={3} tabletCols={2} tone="dark" borderRadius={18}>
        {QUOTES.map((q, i) => (
          <ScrollGridItem key={q.by} sectionIndex={7} cardIndex={i}>
            <ConsultancyInteractiveSurface variant="dk" style={{ padding: "24px 20px" }}>
              <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.63)", marginBottom: 10 }}>&ldquo;{q.q}&rdquo;</div>
              <div style={{ fontFamily: MN, fontSize: 10.5, letterSpacing: "normal", color: L }}>-- {q.by}</div>
            </ConsultancyInteractiveSurface>
          </ScrollGridItem>
        ))}
      </ConsultancyCardGrid>
    </ScrollSection>
  );
}

function FAQ() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  return (
    <ScrollSection as="section" index={8} style={{ padding: `${pv}px ${gv}px`, background: BG2, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
      <div style={{ marginBottom: 28 }}><Lbl ch="Got questions" /><Ttl ch="FAQS." /></div>
      <ConsultancyFaqAccordion items={FAQ_ITEMS} tone="paper" />
    </ScrollSection>
  );
}

export default function ServiceAICopilotDevelopmentPageClient() {
  return (
    <ConsultancyLoadedShell label="AI COPILOT">
      <Nav current="Services" />
      <Hero />
      <Metrics />
      <Method />
      <Deliverables />
      <BuildTypes />
      <Platforms />
      <TechnicalApproach />
      <SocialProof />
      <FAQ />
      <CTAStrip
        title="YOUR WORKFLOW.|ONE COPILOT.|FIXED FEE."
        sub="Tell us which tools your team lives in and what tasks slow them down most. We will map the highest-value use cases for your enterprise ai copilot, send three peer references from your industry, and deliver a fixed-fee statement of work within 48 hours."
        cta="Start a project"
      />
      <Footer />
    </ConsultancyLoadedShell>
  );
}
