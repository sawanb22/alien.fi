"use client";

import Link from "next/link";

// Reuse the exact visual shell/pattern while mapping AI Implementation copy.
// Keeping this page isolated and maintainable by composing a dedicated structure.
import { ConsultancyLoadedShell } from "@/components/consultancy/ConsultancyLoadedShell";
import {
  Arr,
  ConsultancyFaqAccordion,
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
import { BG, BG2, DK, L, L2, PL } from "@/lib/consultancy/theme";

const METRICS = [
  { v: "4 wks", l: "Avg to first integration", s: "Scoping to live API" },
  { v: "99.7%", l: "Avg system uptime", s: "Across managed deployments" },
  { v: "62%", l: "Avg process time reduction", s: "Post AI integration services" },
  { v: "100%", l: "Client IP ownership", s: "All code and configs" },
];
const PHASES = [
  ["Phase 01 · 1 to 2 WEEKS", "Technical Discovery", "We audit your current stack, data flows, integration points, and compliance requirements.", ["Current stack audit", "Integration point map", "Compliance and security review", "Technical scoping document"]],
  ["Phase 02 · 1 to 2 WEEKS", "Architecture Design", "We design the deployment architecture, API layer, data pipelines, and legacy system ai integration plan before writing a single line of code.", ["Deployment architecture", "API design specification", "Data pipeline blueprint", "Legacy integration plan"]],
  ["Phase 03 · 2 to 8 WEEKS", "Build and Integration", "We deploy AI with APIs, connect models to your existing systems, and build the middleware, webhooks, and connectors your stack requires.", ["Live API deployment", "System integrations complete", "QA and load test results", "Security audit"]],
  ["Phase 04 · 1 to 2 WEEKS", "Go-Live and Handover", "Staged rollout, monitoring setup, team training, and full documentation handover.", ["Production deployment", "Monitoring dashboard", "Team training session", "Full runbook documentation"]],
] as const;
const DELIVER = [
  ["API Deployment", "We deploy AI with APIs built for reliability, scale, and security."],
  ["AI System Integration", "We connect AI models to your CRM, ERP, data warehouse, or internal tools."],
  ["Legacy System AI Integration", "We integrate AI into legacy infrastructure without requiring full replacement."],
  ["Cloud Infrastructure Setup", "Full cloud environment setup on AWS, Azure, or GCP."],
  ["Data Pipeline Development", "ETL, streaming pipelines, and data warehouse connections for production AI."],
  ["MLOps and Monitoring", "CI/CD pipelines, retraining triggers, drift detection, and performance dashboards."],
] as const;
const PERSONAS = [
  ["CTO / Head of Engineering", "You have a model or vendor solution ready to deploy and need clean integration + handover documentation."],
  ["Operations or IT Director", "Your workflows are approved for AI but your internal team lacks MLOps and integration depth."],
  ["Product or Transformation Lead", "You are rolling out an AI product and need systems connected end to end."],
] as const;
const QUOTES = [
  "\"alien.fi's custom ai development team built our fraud detection model from scratch. It went live in 11 weeks and cut our fraud losses by 47% in the first year.\" -- Chief Technology Officer, Regional Financial Services Company",
  "\"We had a 15-year-old claims system that no vendor wanted to touch. alien.fi's legacy system ai integration approach had us live in 11 weeks.\" -- VP of Technology, Insurance Group",
  "\"Their ai system integration work connected five separate platforms into a single data flow.\" -- Head of Operations, Healthcare Provider Network",
];
const FAQS = [
  ["What is included in AI implementation services from alien.fi?", "Technical discovery, deployment architecture, API development, ai system integration, data pipelines, legacy integration, cloud setup, QA, go-live support, and documentation handover."],
  ["Can you integrate AI into our existing legacy systems?", "Yes. We use middleware, API abstraction layers, and event-driven connectors to integrate modern AI without requiring full platform replacement."],
  ["How long do AI implementation services engagements take?", "Most engagements run 4 to 16 weeks depending on complexity and integration count."],
  ["Do you deploy AI with APIs or only embed it into existing software?", "Both. We can deploy standalone APIs and/or embed capabilities into existing applications and enterprise platforms."],
  ["Who owns the code, configurations, and documentation after the engagement?", "You do. Full IP transfer is standard in every AI implementation services SOW."],
] as const;

function splitClientQuote(raw: string): { body: string; attribution: string } {
  const parts = raw.split(" -- ");
  if (parts.length < 2) return { body: raw, attribution: "" };
  const attribution = parts.pop()!.trim();
  const body = parts.join(" -- ").trim();
  return { body, attribution };
}

export default function ServiceAIImplementationPageClient() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  return (
    <ConsultancyLoadedShell label="AI IMPLEMENTATION">
      <Nav current="Services" />
      <section style={{ paddingTop: 60, background: DK }}>
        <div style={{ padding: `0 ${gv}px` }}>
          <div style={{ display: "grid", gridTemplateColumns: layout === "desktop" ? "320px 1fr" : "1fr" }}>
            <div style={{ padding: 28, borderRight: layout === "desktop" ? "1px solid rgba(255,255,255,0.08)" : "none", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: MN, fontSize: 9, color: "rgba(255,255,255,0.5)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>
                <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</Link>
                <span style={{ opacity: 0.4 }}>/</span>
                <Link href="/services" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Services</Link>
                <span style={{ opacity: 0.4 }}>/</span>
                <span style={{ color: L2 }}>AI Implementation</span>
              </div>
              <Lbl ch="Service · Deploy to Production" lt />
              <div style={{ fontFamily: MN, color: "#fff", fontSize: 18, marginBottom: 10 }}>AI implementation services that go live, not live in a deck.</div>
              <div style={{ fontFamily: SN, color: "rgba(255,255,255,0.6)", fontSize: 13, lineHeight: 1.65, marginBottom: 18 }}>For teams that have an AI strategy or model and need a technical partner to deploy it, integrate it, and make it stick in production.</div>
              <div style={{ fontFamily: MN, fontSize: 11, color: "rgba(255,255,255,0.8)", lineHeight: 1.9 }}>
                <div>Engagement: $35K to $300K</div><div>Duration: 4 to 16 weeks</div><div>Team: 1 architect + 2 to 3 engineers</div><div>Output: Live production system</div>
              </div>
            </div>
            <div style={{ padding: "52px 36px" }}>
              <Lbl ch="AI Integration Services" lt />
              <div style={{ fontFamily: MN, fontSize: "clamp(34px,5vw,68px)", lineHeight: 1, color: "#fff", marginBottom: 20 }}>
                <div>FROM</div><div style={{ fontWeight: 600 }}>APPROVED.</div><div style={{ fontWeight: 700, color: L }}>TO RUNNING.</div>
              </div>
              <div style={{ fontFamily: SN, fontSize: 15, color: "rgba(255,255,255,0.63)", lineHeight: 1.7, maxWidth: 720, marginBottom: 24 }}>
                Most AI projects stall between strategy and production. Our AI implementation services bridge that gap, deploying models via APIs, integrating AI into your existing stack, and connecting new systems to legacy infrastructure without tearing it apart.
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link
                  href="/contact"
                  className="hv"
                  style={{
                    background: L,
                    color: "#000",
                    textDecoration: "none",
                    padding: "12px 18px",
                    borderRadius: 999,
                    fontFamily: MN,
                    fontSize: 11,
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    transition: "background .2s,color .2s,box-shadow .2s",
                  }}
                  onMouseEnter={consultancyLimeCtaEnter}
                  onMouseLeave={consultancyLimeCtaLeave}
                >
                  Start a project <Arr sz={10} cl="currentColor" />
                </Link>
                <Link
                  href="/case-studies"
                  className="hv"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    padding: "12px 18px",
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,0.28)",
                    fontFamily: MN,
                    fontSize: 11,
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    transition: "background .2s,box-shadow .2s",
                  }}
                  onMouseEnter={consultancyGhostOnDarkEnter}
                  onMouseLeave={consultancyGhostOnDarkLeave}
                >
                  See case studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: `42px ${gv}px`, background: DK }}>
        <div style={{ display: "grid", gridTemplateColumns: gridCols(layout, 4, 2), gap: 1, background: "rgba(255,255,255,0.06)", borderRadius: 18, overflow: "hidden" }}>
          {METRICS.map((m) => (
            <ConsultancyInteractiveSurface key={m.l} variant="dk" style={{ padding: 22 }}>
              <div style={{ fontFamily: MN, fontSize: 42, color: L, fontWeight: 700 }}>{m.v}</div>
              <div style={{ fontFamily: MN, fontSize: 11, color: "rgba(255,255,255,0.8)" }}>{m.l}</div>
              <div style={{ fontFamily: SN, fontSize: 11, color: "rgba(255,255,255,0.5)" }}>{m.s}</div>
            </ConsultancyInteractiveSurface>
          ))}
        </div>
      </section>

      <section style={{ padding: `${pv}px ${gv}px`, background: BG, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
        <Lbl ch="Four to sixteen weeks · Four phases" /><Ttl ch="THE METHOD." />
        <p style={{ fontFamily: SN, color: "rgba(0,0,0,0.58)", maxWidth: 760 }}>Every AI implementation services engagement follows four phases. Each phase has a fixed output and a sign-off gate before the next begins.</p>
        <div style={{ display: "grid", gridTemplateColumns: gridCols(layout, 4, 2), gap: 1, background: PL, borderRadius: 18, overflow: "hidden", border: `1px solid ${PL}` }}>
          {PHASES.map(([p, t, d, b]) => (
            <ConsultancyInteractiveSurface key={p} variant="muted" style={{ padding: 20 }}>
              <div style={{ fontFamily: MN, fontSize: 10, color: L2 }}>{p}</div>
              <div style={{ fontFamily: MN, fontSize: 15, margin: "8px 0" }}>{t}</div>
              <div style={{ fontFamily: SN, fontSize: 12.5, color: "rgba(0,0,0,0.56)", marginBottom: 8 }}>{d}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {b.map((x) => (
                  <div key={x} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontFamily: MN, fontSize: 10.5, color: "rgba(0,0,0,0.72)" }}>
                    <span aria-hidden style={{ width: 4, height: 4, borderRadius: "50%", background: L2, flexShrink: 0, marginTop: 5 }} />
                    <span>{x}</span>
                  </div>
                ))}
              </div>
            </ConsultancyInteractiveSurface>
          ))}
        </div>
      </section>

      <section style={{ padding: `${pv}px ${gv}px`, background: BG2, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
        <Lbl ch="Six capabilities" /><Ttl ch="WHAT WE DELIVER." />
        <div style={{ display: "grid", gridTemplateColumns: gridCols(layout, 3, 2), gap: 1, background: PL, borderRadius: 18, overflow: "hidden", border: `1px solid ${PL}` }}>
          {DELIVER.map(([t, d], i) => (
            <ConsultancyInteractiveSurface key={t} variant="light" style={{ padding: 22 }}>
              <div style={{ fontFamily: MN, fontSize: 10, color: L2 }}>{String(i + 1).padStart(2, "0")} -</div>
              <div style={{ fontFamily: MN, fontSize: 15, margin: "6px 0" }}>{t}</div>
              <div style={{ fontFamily: SN, fontSize: 12.5, color: "rgba(0,0,0,0.57)" }}>{d}</div>
            </ConsultancyInteractiveSurface>
          ))}
        </div>
      </section>

      <section style={{ padding: `${pv}px ${gv}px`, background: DK, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
        <Lbl ch="Built for these teams" lt /><Ttl ch="WHO THIS IS FOR." lt />
        <div style={{ display: "grid", gridTemplateColumns: gridCols(layout, 3, 2), gap: 1, background: "rgba(255,255,255,0.06)", borderRadius: 18, overflow: "hidden" }}>
          {PERSONAS.map(([t, d]) => (
            <ConsultancyInteractiveSurface key={t} variant="dk" style={{ padding: 22 }}>
              <div style={{ fontFamily: MN, color: "#fff", marginBottom: 6 }}>{t}</div>
              <div style={{ fontFamily: SN, color: "rgba(255,255,255,0.62)", fontSize: 13 }}>{d}</div>
            </ConsultancyInteractiveSurface>
          ))}
        </div>
      </section>

      <section style={{ padding: `${pv}px ${gv}px`, background: DK, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
        <Lbl ch="What clients say" lt /><Ttl ch="TRUSTED BY TEAMS THAT SHIP." lt />
        <div style={{ display: "grid", gridTemplateColumns: gridCols(layout, 3, 2), gap: 1, background: "rgba(255,255,255,0.06)", borderRadius: 18, overflow: "hidden" }}>
          {QUOTES.map((q) => {
            const { body, attribution } = splitClientQuote(q);
            return (
              <ConsultancyInteractiveSurface key={q} variant="dk" style={{ padding: 22 }}>
                <div style={{ fontFamily: SN, fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>{body}</div>
                {attribution ? (
                  <div
                    style={{
                      fontFamily: MN,
                      fontSize: 10.5,
                      letterSpacing: "0.06em",
                      color: L,
                      lineHeight: 1.5,
                      marginTop: 12,
                    }}
                  >
                    {attribution}
                  </div>
                ) : null}
              </ConsultancyInteractiveSurface>
            );
          })}
        </div>
      </section>

      <section style={{ padding: `${pv}px ${gv}px`, background: BG, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
        <Lbl ch="Got questions" /><Ttl ch="COMMON QUESTIONS." />
        <ConsultancyFaqAccordion items={FAQS} tone="paper" />
      </section>

      <CTAStrip
        title="INTEGRATED.|TESTED.|LIVE."
        sub="Tell us what you are deploying and what it needs to connect to. We will send a technical scoping brief, a fixed-fee estimate, and references from comparable AI implementation services engagements in your industry."
        cta="Start a project"
      />
      <Footer />
    </ConsultancyLoadedShell>
  );
}
