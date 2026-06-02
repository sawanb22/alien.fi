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
  FAQ_SECTION_TITLE_SX,
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
  { v: "60%", l: "Avg reduction in manual task volume", s: "Post ai agents for business deployment" },
  { v: "3x", l: "Faster workflow completion", s: "Vs. human-only execution" },
  { v: "3 to 16 weeks", l: "Build to production timeline", s: "Pre-built to fully custom" },
  { v: "$30K", l: "Starting engagement cost", s: "Fixed-fee, defined scope" },
];

const PHASES = [
  {
    p: "Phase 01 · 1 to 2 WEEKS",
    t: "Use Case Discovery and Agent Design",
    d: "We audit your workflows, identify the highest-value tasks for ai agents for business, map the tools and data sources the agent must connect to, and design the agent architecture including reasoning strategy, tool-calling configuration, memory systems, and human-in-the-loop checkpoints.",
    b: ["Workflow and task audit", "Agent architecture design", "Tool and API mapping", "Human oversight checkpoints defined"],
  },
  {
    p: "Phase 02 · 2 to 6 WEEKS",
    t: "Agent Build and Tool Integration",
    d: "We build the core agent logic including LLM backbone integration, tool-calling via function calling or Model Context Protocol, memory systems, and the full set of business process automations scoped in phase one. Pre-built ai agents skip directly to integration and configuration at this phase.",
    b: ["LLM backbone and reasoning layer", "Tool-calling and API connections", "Memory and context systems", "Business process automation build"],
  },
  {
    p: "Phase 03 · 1 to 4 WEEKS",
    t: "Testing, Safety, and Pilot",
    d: "We run the ai agents for business processes through accuracy testing, edge case evaluation, failure mode analysis, and a controlled pilot with a real user group before full production rollout. Every agent ships with documented safety guardrails and human escalation triggers.",
    b: ["Accuracy and reasoning benchmarks", "Failure mode and edge case testing", "Safety guardrail configuration", "Controlled pilot group rollout"],
  },
  {
    p: "Phase 04 · 1 to 2 WEEKS",
    t: "Production Deployment and Handover",
    d: "We deploy to production, configure access controls, connect monitoring and alerting infrastructure, and train your team on how to manage, extend, and add new capabilities to the ai agents for business over time.",
    b: ["Production deployment and permissions", "Monitoring and alerting setup", "Capability extension documentation", "Team training and handover"],
  },
];

const DELIVERABLES = [
  ["Production AI Agents for Business", "Fully deployed, production-grade ai agents for business processes running live in your environment and connected to your real tools, data sources, and workflows. Not a demo. Not a prototype. A system handling real task volume from day one of handover."],
  ["Agent Skills and Actions Library", "A complete documented library of every skill, action, tool-call, and decision logic built into your ai agent development services engagement. Version-controlled and structured so your team can audit, extend, or modify agent behavior without starting from scratch."],
  ["Tool Integration Documentation", "Full technical documentation of every API connection, function call, and platform integration wired into your agents. Covers authentication flows, rate limits, error handling, rollback procedures, and data flow maps for every connected business system."],
  ["Safety and Guardrails Report", "A documented safety evaluation covering reasoning accuracy benchmarks, failure modes identified during testing, human escalation trigger configurations, and output validation layers applied to every ai agent for business in production. Delivered before go-live and updated after each major version release."],
  ["Monitoring Dashboard", "A live dashboard tracking agent task completion rates, action accuracy, escalation frequency, tool-call latency, error rates, and cost per task. Accessible to both technical and non-technical stakeholders without requiring SQL or engineering access."],
  ["Handover Training and Runbooks", "A live training session plus written operational runbooks covering how to manage, troubleshoot, extend, and scale your ai agents for business processes after alien.fi hands over ownership. Includes guidance on adding new agent skills and onboarding new business process automations."],
] as const;

const PREBUILT = [
  ["HR Agent", "Automates end-to-end hiring workflows including job posting generation, resume screening, interview scheduling, candidate communication, onboarding checklist management, and HR policy FAQ handling. Integrates natively with Workday, BambooHR, Greenhouse, and Slack.", "$30K to $80K"],
  ["Sales Automation Agent", "Handles outbound prospecting, lead enrichment, follow-up sequences, meeting booking, CRM data entry, and deal status updates autonomously. Integrates with Salesforce, HubSpot, Apollo.io, and LinkedIn. Built for sales teams that need ai agents for business development without adding headcount.", "$35K to $90K"],
  ["Customer Success Agent", "Monitors customer health scores, triggers proactive outreach for at-risk accounts, resolves tier-1 support tickets, and escalates complex issues with full conversation context to human agents. Reduces churn and support overhead simultaneously.", "$30K to $85K"],
  ["Finance and Procurement Agent", "Automates invoice matching, purchase order creation, vendor communication, expense categorization, and budget variance alerts. Purpose-built ai agents for business finance operations teams managing high transaction volumes with limited headcount.", "$40K to $100K"],
  ["Compliance Monitoring Agent", "Continuously reviews internal documents, communications, and transactions against regulatory rules. Flags anomalies and generates compliance reports with cited evidence. Built for ai agents for business processes in regulated industries including finance, healthcare, insurance, and legal.", "$50K to $150K"],
] as const;

const FUNCTION_MATRIX = [
  ["Sales", "Sales Automation Agent", "Prospecting, follow-ups, CRM updates"],
  ["HR", "HR Agent", "Screening, scheduling, onboarding"],
  ["Finance", "Finance and Procurement Agent", "Invoices, POs, expense routing"],
  ["Customer Support", "Customer Success Agent", "Ticket resolution, health scoring"],
  ["Legal and Compliance", "Compliance Monitoring Agent", "Document review, regulatory flagging"],
  ["Operations", "Custom Workflow Agent", "Any multi-step internal process"],
] as const;

const QUOTES = [
  ["We deployed alien.fi's sales automation pre-built ai agents into HubSpot and Salesforce in under two weeks. Our sales team reclaimed 12 hours per rep per week that was previously spent on manual prospecting and CRM data entry. Pipeline coverage improved by 35% in the first quarter.", "VP of Sales, B2B Technology Company"],
  ["We needed ai agents for business processes that could handle our compliance review workflow across three regulatory frameworks simultaneously. alien.fi's custom ai agent development services delivered an agent that handles 80% of our document review load with full audit trail output.", "Chief Compliance Officer, Regional Financial Services Firm"],
  ["The HR agent from alien.fi's pre-built ai agents catalog cut our time-to-hire by 40% in the first two months. Interview scheduling, candidate communications, and onboarding checklists run autonomously. Our HR team now focuses entirely on the human decisions.", "Head of People Operations, Mid-Market SaaS Company"],
] as const;

const FAQS = [
  ["What are ai agent development services and what do they deliver?", "AI agent development services design, build, and deploy autonomous AI systems that execute multi-step business tasks without human initiation. Unlike chatbots that respond to questions, ai agents for business reason across tools, make decisions, call APIs, and complete entire workflows end-to-end. alien.fi's ai agent development services deliver production-grade agents including tool integrations, safety guardrails, monitoring infrastructure, and team training."],
  ["What is the difference between pre-built ai agents and custom ai agent development?", "Pre-built ai agents are production-ready agents configured for standard business functions such as HR, sales, finance, and compliance. They integrate into your existing tools within days and require minimal configuration. Custom ai agent development builds an agent from the ground up on your specific workflow logic, proprietary data, and unique tool stack when pre-built options do not precisely match your process requirements."],
  ["What tools can ai agents for business processes connect to?", "Our ai agent development services support integrations with Salesforce, HubSpot, Workday, BambooHR, Slack, Microsoft Teams, Notion, Confluence, Jira, ServiceNow, SQL databases, REST APIs, and any platform accessible via API or webhook. For legacy systems without APIs, we build custom connectors as part of the engagement scope."],
  ["How do you ensure ai agents for business are safe and accurate?", "Every ai agent development services engagement includes accuracy benchmarking, failure mode analysis, edge case testing, and documented safety guardrails before production deployment. All agents include human-in-the-loop override points for high-stakes decisions, output validation layers, and complete audit trails for every action taken."],
  ["How long does ai agent development take?", "Pre-built ai agents can be configured and deployed within 3 to 5 weeks. Custom ai agent development services typically take 8 to 16 weeks depending on the complexity of the workflow, the number of integrated tools, and whether multi-agent orchestration is included."],
  ["What is the budget range for ai agent development services at alien.fi?", "Pre-built ai agents start at $30,000 for a single-function deployment. Custom ai agent development services range from $80,000 to $500,000 depending on workflow complexity, integration depth, and whether multi-agent systems are required. All engagements are fixed-fee with a defined scope agreed before work begins."],
] as const;

export default function ServiceAIAgentsPageClient() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  const stacked = layout !== "desktop";
  return (
    <ConsultancyLoadedShell label="AI AGENTS">
      <Nav current="Services" />
      <ScrollSection as="section" index={0} style={{ paddingTop: 60, background: DK, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ padding: `0 ${gv}px` }}>
          <div style={{ display: "grid", gridTemplateColumns: stacked ? "1fr" : "minmax(340px, 380px) 1fr", minHeight: stacked ? undefined : 500 }}>
            <div style={{ padding: stacked ? "36px 0 28px" : "60px 36px", borderRight: stacked ? "none" : "1px solid rgba(255,255,255,0.06)", borderBottom: stacked ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: MN, fontSize: 9, letterSpacing: "normal", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 24 }}>
                <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</Link>
                <span style={{ opacity: 0.4 }}>/</span>
                <Link href="/services" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Services</Link>
                <span style={{ opacity: 0.4 }}>/</span>
                <span style={{ color: L2 }}>AI Agents</span>
              </div>
              <Lbl ch="Service · Build or Deploy" lt />
              <div style={{ fontFamily: MN, fontSize: 18, color: "#fff", lineHeight: 1.5, marginBottom: 10 }}>AI agent development services that execute work, not just answer questions.</div>
              <div style={{ fontFamily: SN, fontSize: 13, color: "rgba(255,255,255,0.72)", lineHeight: 1.7, marginBottom: 14 }}>For enterprise teams ready to move beyond chatbots. We build and deploy ai agents for business that reason, plan, and take multi-step actions autonomously inside your existing workflows and tools.</div>
              <div style={{ fontFamily: MN, fontSize: 11, color: "rgba(255,255,255,0.9)", lineHeight: 1.9, marginBottom: 20 }}>
                <div>Engagement: $30K to $500K</div>
                <div>Duration: 3 to 16 weeks</div>
                <div>Team: 1 AI architect + 2 agent engineers + 1 integrations lead</div>
                <div>Output: Production-grade ai agents for business processes</div>
              </div>
              <div
                style={{
                  marginTop: 4,
                  paddingTop: 20,
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  fontFamily: SN,
                  fontSize: 12,
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.62)",
                }}
              >
                Most teams start with a two-week discovery to lock scope, integrations, and success metrics before engineering hours ramp. You leave that phase with a written agent design, tool map, and fixed-fee proposal—so the left column is not just pricing notes, but the shape of the delivery.
              </div>
            </div>
            <div style={{ padding: stacked ? "32px 0 44px" : "72px 60px" }}>
              <Lbl ch="AI Agent Development and Pre-Built AI Agents for Business" lt />
              <div style={{ fontFamily: MN, fontSize: "clamp(36px,5vw,72px)", color: "#fff", lineHeight: 1, letterSpacing: "normal", marginBottom: 24 }}>
                <div style={{ fontWeight: 300 }}>AI THAT</div>
                <div style={{ fontWeight: 500 }}>ACTS. NOT</div>
                <div style={{ fontWeight: 700, color: L }}>JUST ANSWERS.</div>
              </div>
              <div style={{ fontFamily: SN, fontSize: 15, lineHeight: 1.72, color: "rgba(255,255,255,0.62)", maxWidth: 760, marginBottom: 24 }}>
                Chatbots answer questions. AI agents get work done. Our ai agent development services build autonomous systems that reason across tools, execute multi-step business processes, and complete entire workflows without human initiation. From pre-built ai agents you can deploy in days to fully custom ai agent development for your most complex operations.
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
                    Start your agent project <Arr sz={10} cl="currentColor" />
                  </Link>
                </MagneticWrap>
                <MagneticWrap strength={0.35} style={{ display: "inline-flex" }}>
                  <a
                    href="#prebuilt-agents"
                    className="hv"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      border: "1px solid rgba(255,255,255,0.26)",
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
                    See pre-built agents
                  </a>
                </MagneticWrap>
              </div>
            </div>
          </div>
        </div>
      </ScrollSection>

      <ScrollSection as="section" index={1} style={{ padding: `${layout === "mobile" ? 40 : 60}px ${gv}px`, background: DK }}>
        <ConsultancyCardGrid desktopCols={4} tabletCols={2} tone="dark" borderRadius={18}>
          {METRICS.map((m, i) => (
            <ScrollGridItem key={m.l} sectionIndex={1} cardIndex={i}>
            <ConsultancyInteractiveSurface variant="dk" style={{ padding: "22px 18px" }}>
              <div style={{ fontFamily: MN, fontSize: 40, fontWeight: 700, color: L }}>{m.v}</div>
              <div style={{ fontFamily: MN, fontSize: 11, color: "rgba(255,255,255,0.8)" }}>{m.l}</div>
              <div style={{ fontFamily: SN, fontSize: 11, color: "rgba(255,255,255,0.5)" }}>{m.s}</div>
            </ConsultancyInteractiveSurface>
            </ScrollGridItem>
          ))}
        </ConsultancyCardGrid>
      </ScrollSection>

      <ScrollSection as="section" index={2} style={{ padding: `${pv}px ${gv}px`, background: BG, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
        <div style={{ marginBottom: 32 }}><Lbl ch="Three to sixteen weeks · Four phases" /><Ttl ch="THE METHOD." /></div>
        <p style={{ fontFamily: SN, color: "rgba(0,0,0,0.78)", maxWidth: 840, lineHeight: 1.7, marginBottom: 12 }}>
          Our ai agent development services follow four sequential phases whether you are deploying pre-built ai agents or commissioning a fully custom build. Each phase produces a tangible output. Each output earns the next.
        </p>
        <p style={{ fontFamily: SN, color: "rgba(0,0,0,0.72)", maxWidth: 840, lineHeight: 1.7, marginBottom: 24, fontSize: 13 }}>
          You always get written artifacts between phases—architecture decisions, integration contracts, test results, and pilot readouts—so procurement and engineering leads can review progress without sitting in every working session.
        </p>
        <ConsultancyCardGrid desktopCols={4} tabletCols={2} tone="light" borderRadius={18}>
          {PHASES.map((p, i) => (
            <ScrollGridItem key={p.p} sectionIndex={2} cardIndex={i}>
            <ConsultancyInteractiveSurface variant="muted" style={{ padding: 20 }}>
              <div style={{ fontFamily: MN, fontSize: 11, letterSpacing: "normal", color: L_TEXT_ON_LIGHT, fontWeight: 700 }}>{p.p}</div>
              <div style={{ fontFamily: MN, fontSize: 15, margin: "8px 0", fontWeight: 600, color: "#0f1118" }}>{p.t}</div>
              <div style={{ fontFamily: SN, fontSize: 12.5, color: "rgba(15,17,24,0.82)", lineHeight: 1.65, marginBottom: 12, flex: 1 }}>{p.d}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {p.b.map((x) => (
                  <div
                    key={x}
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "flex-start",
                      fontFamily: MN,
                      fontSize: 10.5,
                      color: "rgba(15,17,24,0.88)",
                      lineHeight: 1.45,
                    }}
                  >
                    <span
                      aria-hidden
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: L_TEXT_ON_LIGHT,
                        flexShrink: 0,
                        marginTop: 4,
                        opacity: 0.95,
                      }}
                    />
                    <span>{x}</span>
                  </div>
                ))}
              </div>
            </ConsultancyInteractiveSurface>
            </ScrollGridItem>
          ))}
        </ConsultancyCardGrid>
      </ScrollSection>

      <ScrollSection as="section" index={3} style={{ padding: `${pv}px ${gv}px`, background: DK, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
        <div style={{ marginBottom: 28 }}><Lbl ch="Six deliverables" lt /><Ttl ch="WHAT YOU TAKE HOME." lt /></div>
        <ConsultancyCardGrid desktopCols={3} tabletCols={2} tone="dark" borderRadius={18}>
          {DELIVERABLES.map(([h, d], i) => (
            <ScrollGridItem key={h} sectionIndex={3} cardIndex={i}>
            <ConsultancyInteractiveSurface variant="dk" style={{ padding: 20 }}>
              <div style={{ fontFamily: MN, fontSize: 11, color: L, letterSpacing: "normal", fontWeight: 700, marginBottom: 8 }}>{String(i + 1).padStart(2, "0")} —</div>
              <div style={{ fontFamily: MN, fontSize: 15, color: "#fff", marginBottom: 8 }}>{h}</div>
              <div style={{ fontFamily: SN, fontSize: 12.5, color: "rgba(255,255,255,0.58)", lineHeight: 1.66, flex: 1 }}>{d}</div>
            </ConsultancyInteractiveSurface>
            </ScrollGridItem>
          ))}
        </ConsultancyCardGrid>
      </ScrollSection>

      <ScrollSection as="section" index={4} id="prebuilt-agents" style={{ padding: `${pv}px ${gv}px`, background: BG2, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
        <div style={{ marginBottom: 28 }}><Lbl ch="Deploy in days" /><Ttl ch="PRE-BUILT AGENTS READY TO GO." /></div>
        <div style={{ fontFamily: SN, fontSize: 13, color: "rgba(15,17,24,0.78)", maxWidth: 920, marginBottom: 16, lineHeight: 1.65 }}>Our pre-built ai agents are production-ready, domain-tuned agents that integrate into your existing tools within days rather than months. All pre-built ai agents include human-in-the-loop override, full audit trails, and optional managed retainer support.</div>
        <ConsultancyCardGrid desktopCols={2} tabletCols={1} tone="light" borderRadius={18}>
          {PREBUILT.map(([name, desc, budget], i) => {
            const spanFullRow =
              layout === "desktop" && PREBUILT.length % 2 === 1 && i === PREBUILT.length - 1;
            return (
            <ScrollGridItem key={name} sectionIndex={4} cardIndex={i} gridSpanFull={spanFullRow}>
            <ConsultancyInteractiveSurface variant="light" style={{ padding: 20, boxSizing: "border-box" }}>
              <div style={{ fontFamily: MN, fontSize: 15, marginBottom: 8, fontWeight: 600, color: "#0f1118" }}>{name}</div>
              <div style={{ fontFamily: SN, fontSize: 12.5, lineHeight: 1.65, color: "rgba(15,17,24,0.78)", marginBottom: 10, flex: 1 }}>{desc}</div>
              <div style={{ fontFamily: MN, fontSize: 11, letterSpacing: "normal", textTransform: "uppercase", color: "rgba(15,17,24,0.82)" }}>Budget: {budget}</div>
            </ConsultancyInteractiveSurface>
            </ScrollGridItem>
            );
          })}
        </ConsultancyCardGrid>
      </ScrollSection>

      <ScrollSection as="section" index={5} style={{ padding: `${pv}px ${gv}px`, background: DK, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
        <div style={{ marginBottom: 28 }}><Lbl ch="Built for your exact process" lt /><Ttl ch="FULLY CUSTOM AI AGENT DEVELOPMENT." lt /></div>
        <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.72, color: "rgba(255,255,255,0.6)", maxWidth: 980, marginBottom: 14 }}>When pre-built ai agents do not map precisely to your workflows, our custom ai agent development services design and build agents from the ground up on your data, your tools, and your specific business process logic.</div>
        <div style={{ display: "grid", gap: 8, marginBottom: 12 }}>
          {[
            "Proprietary workflow logic built to your exact process specifications",
            "Fine-tuned or retrieval-augmented LLM backbones trained on your internal data",
            "Multi-agent orchestration for complex tasks requiring multiple specialized agents working in coordination",
            "Deep integrations with legacy systems, proprietary databases, and custom-built internal platforms",
            "Domain-specific reasoning capabilities for legal, medical, financial, and technical workflows",
          ].map((x) => (
            <div key={x} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontFamily: SN, fontSize: 12.5, color: "rgba(255,255,255,0.72)", lineHeight: 1.55 }}>
              <span aria-hidden style={{ width: 5, height: 5, borderRadius: "50%", background: L, flexShrink: 0, marginTop: 6, opacity: 0.9 }} />
              <span>{x}</span>
            </div>
          ))}
        </div>
        <div style={{ fontFamily: MN, fontSize: 11, color: L, letterSpacing: "normal", textTransform: "uppercase" }}>Budget range: $80K to $500K depending on complexity, number of integrated systems, and whether multi-agent orchestration is required.</div>
      </ScrollSection>

      <ScrollSection as="section" index={6} style={{ padding: `${pv}px ${gv}px`, background: BG, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
        <div style={{ marginBottom: 24 }}><Lbl ch="Built across every department" /><Ttl ch="WHERE AI AGENTS WORK." /></div>
        <ConsultancyCardGrid desktopCols={1} tabletCols={1} tone="light" borderRadius={14}>
          {FUNCTION_MATRIX.map(([fn, type, key]) => (
            <ConsultancyInteractiveSurface
              key={fn}
              variant="muted"
              magnetic={false}
              style={{
                padding: "14px 16px",
                display: "grid",
                gridTemplateColumns: layout === "mobile" ? "1fr" : "1fr 1fr 1.2fr",
                gap: 8,
                alignItems: layout === "mobile" ? "start" : "center",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <div style={{ fontFamily: MN, fontSize: 12, fontWeight: 600, color: "#0f1118" }}>{fn}</div>
              <div style={{ fontFamily: MN, fontSize: 11, color: "rgba(15,17,24,0.82)" }}>{type}</div>
              <div style={{ fontFamily: SN, fontSize: 12, color: "rgba(15,17,24,0.78)", lineHeight: 1.45 }}>{key}</div>
            </ConsultancyInteractiveSurface>
          ))}
        </ConsultancyCardGrid>
      </ScrollSection>

      <ScrollSection as="section" index={7} style={{ padding: `${pv}px ${gv}px`, background: DK, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
        <div style={{ marginBottom: 28 }}><Lbl ch="What clients say" lt /><Ttl ch="TRUSTED BY TEAMS THAT SHIP." lt /></div>
        <ConsultancyCardGrid desktopCols={3} tabletCols={2} tone="dark" borderRadius={18}>
          {QUOTES.map(([q, by], i) => (
            <ScrollGridItem key={by} sectionIndex={7} cardIndex={i}>
            <ConsultancyInteractiveSurface variant="dk" style={{ padding: 20 }}>
              <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.62)", marginBottom: 10, flex: 1 }}>&ldquo;{q}&rdquo;</div>
              <div style={{ fontFamily: MN, fontSize: 10.5, letterSpacing: "normal", color: L }}>{by}</div>
            </ConsultancyInteractiveSurface>
            </ScrollGridItem>
          ))}
        </ConsultancyCardGrid>
      </ScrollSection>

      <ScrollSection as="section" index={8} style={{ padding: `${pv}px ${gv}px`, background: BG2, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
        <div style={{ marginBottom: 24 }}><Lbl ch="Got questions" /><Ttl ch="FAQs." sx={FAQ_SECTION_TITLE_SX} /></div>
        <ConsultancyFaqAccordion items={FAQS} tone="light" />
      </ScrollSection>

      <CTAStrip title="YOUR PROCESS.|ONE AGENT.|FIXED FEE." sub="Tell us which business process consumes the most manual effort in your team. We will identify the right ai agents for business approach, whether a pre-built deployment or custom ai agent development, send three peer references from your industry, and deliver a fixed-fee statement of work within 48 hours." cta="Start a project" />
      <Footer />
    </ConsultancyLoadedShell>
  );
}
