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
  ["99.7%", "Avg system uptime", "Across managed deployments"],
  ["30 day", "Notice to scale up or down", "No lock-in contracts"],
  ["48 hr", "Avg incident response time", "For standard tier clients"],
  ["80%", "Client inquiries resolved by AI", "Post managed ai services deployment"],
] as const;

const PILLARS = [
  ["Pillar 01 · CONTINUOUS", "AI Model Monitoring", "Real-time ai model monitoring across accuracy, latency, data drift, and output quality.", ["Accuracy and drift monitoring", "Latency and throughput tracking", "Anomaly alerts with root cause", "Weekly performance reports"]],
  ["Pillar 02 · SCHEDULED", "AI Maintenance and Updates", "Scheduled ai maintenance covering patches, dependency updates, compliance reviews, and version control.", ["Security and dependency patches", "Model version control", "Compliance review cadence", "Change log and audit trail"]],
  ["Pillar 03 · TRIGGERED", "Model Retraining", "When ai model monitoring detects drift or degradation, we trigger retraining and benchmark validation.", ["Drift-triggered retraining", "Champion-challenger pipeline", "Benchmark validation", "Staged rollout to production"]],
  ["Pillar 04 · ON-DEMAND", "Support and Optimization", "On-call technical support for incidents, integrations, and feature enhancements.", ["Named customer success manager", "On-call incident support", "Feature enhancement requests", "Monthly executive review"]],
] as const;

const DELIVERABLES = [
  ["AI Model Monitoring Dashboard", "Live visibility into model accuracy, prediction confidence, input data quality, latency, and cost per inference."],
  ["Weekly Performance Report", "Concise weekly summary of model health, incident log, retraining activity, and emerging drift signals."],
  ["Monthly Executive Summary", "One-page monthly summary tied to business KPIs, including cost-vs-value analysis."],
  ["AI Maintenance Log", "Audit trail of every patch, update, config change, and model version update applied during the month."],
  ["Retraining Reports", "Full report whenever retraining is triggered: trigger signal, data used, improvements, and champion-challenger result."],
  ["SLA and Incident Reports", "Documented response times, resolution logs, and SLA performance for every incident during the month."],
] as const;

const QUOTES = [
  "\"We went live with our fraud detection model and handed it to alien.fi for managed ai services. Six months later, accuracy had improved by 12% through three retraining cycles we did not have to manage ourselves.\" -- Chief Technology Officer, Regional Insurance Company",
  "\"Their ai model monitoring caught a data drift issue two weeks before it would have caused a significant accuracy drop.\" -- VP of Data Science, Mid-Market Financial Services Firm",
  "\"We do not have an internal MLOps team. alien.fi's managed ai services are our MLOps team.\" -- Head of Technology, Healthcare Provider Group",
];

const FAQS = [
  ["What is included in managed ai services from alien.fi?", "24/7 ai model monitoring, scheduled ai maintenance, patching, model retraining, incident support, CSM coverage, weekly reports, and monthly executive summaries under SLA."],
  ["How does ai model monitoring work?", "We track accuracy, confidence, data distributions, output quality, latency, and cost per inference in real time and alert before business impact."],
  ["When does ai maintenance include model retraining?", "Retraining triggers when drift is statistically significant, thresholds are breached, or a scheduled interval is reached."],
  ["What are the managed ai services retainer tiers?", "Basic ($3K-$8K), Standard ($8K-$20K), and Enterprise ($20K-$50K) with increasing monitoring, retraining, support, and optimization depth."],
  ["Do managed ai services require a long-term contract?", "No. Month-to-month is available with 30 days notice. Annual options are also available for budget certainty."],
] as const;

export default function ServiceManagedAIPageClient() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  return (
    <ConsultancyLoadedShell label="MANAGED AI">
      <Nav current="Services" />
      <ScrollSection as="section" index={0} style={{ paddingTop: 60, background: DK }}>
        <div style={{ padding: `0 ${gv}px` }}>
          <div style={{ display: "grid", gridTemplateColumns: layout === "desktop" ? "320px 1fr" : "1fr" }}>
            <div style={{ padding: 28, borderRight: layout === "desktop" ? "1px solid rgba(255,255,255,0.08)" : "none", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: MN, fontSize: 9, color: "rgba(255,255,255,0.5)", letterSpacing: "normal", textTransform: "uppercase", marginBottom: 20 }}>
                <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</Link>
                <span style={{ opacity: 0.4 }}>/</span>
                <Link href="/services" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Services</Link>
                <span style={{ opacity: 0.4 }}>/</span>
                <span style={{ color: L2 }}>Managed AI</span>
              </div>
              <Lbl ch="Service · Ongoing Operations" lt />
              <div style={{ fontFamily: MN, color: "#fff", fontSize: 18, marginBottom: 10 }}>Managed ai services that keep your models performing after go-live.</div>
              <div style={{ fontFamily: SN, color: "rgba(255,255,255,0.6)", fontSize: 13, lineHeight: 1.65, marginBottom: 16 }}>For teams that have AI in production and need a dedicated partner to monitor it, maintain it, and continuously improve it without building an internal MLOps team.</div>
              <div style={{ fontFamily: MN, fontSize: 11, color: "rgba(255,255,255,0.8)", lineHeight: 1.9 }}>
                <div>Engagement: $3K to $50K per month</div><div>Commitment: Month to month or annual</div><div>Team: 1 customer success manager + on-call engineers</div><div>Output: SLA-backed AI operations</div>
              </div>
            </div>
            <div style={{ padding: "52px 36px" }}>
              <Lbl ch="AI Model Monitoring and Maintenance" lt />
              <div style={{ fontFamily: MN, fontSize: "clamp(34px,5vw,68px)", lineHeight: 1, color: "#fff", marginBottom: 20 }}>
                <div>AI THAT</div><div style={{ fontWeight: 600 }}>WORKS NEXT</div><div style={{ fontWeight: 700, color: L }}>MONTH TOO.</div>
              </div>
              <div style={{ fontFamily: SN, fontSize: 15, color: "rgba(255,255,255,0.63)", lineHeight: 1.7, maxWidth: 720, marginBottom: 24 }}>
                AI models degrade silently. Data shifts, edge cases multiply, and accuracy drops before anyone notices. Our managed ai services keep your models monitored, maintained, and continuously optimized so your AI investment performs in month 18 the same way it performed in month one.
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <MagneticWrap strength={0.35} style={{ display: "inline-flex" }}>
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
                    Talk to our team <Arr sz={10} cl="currentColor" />
                  </Link>
                </MagneticWrap>
                <MagneticWrap strength={0.35} style={{ display: "inline-flex" }}>
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
                </MagneticWrap>
              </div>
            </div>
          </div>
        </div>
      </ScrollSection>

      <ScrollSection as="section" index={1} style={{ padding: `42px ${gv}px`, background: DK }}>
        <ConsultancyCardGrid desktopCols={4} tabletCols={2} tone="dark" borderRadius={18}>
          {METRICS.map(([v, l, s], i) => (
            <ScrollGridItem key={l} sectionIndex={1} cardIndex={i}>
              <ConsultancyInteractiveSurface variant="dk" style={{ padding: 22 }}>
                <div style={{ fontFamily: MN, fontSize: 42, color: L, fontWeight: 700 }}>{v}</div>
                <div style={{ fontFamily: MN, fontSize: 11, color: "rgba(255,255,255,0.8)" }}>{l}</div>
                <div style={{ fontFamily: SN, fontSize: 11, color: "rgba(255,255,255,0.5)" }}>{s}</div>
              </ConsultancyInteractiveSurface>
            </ScrollGridItem>
          ))}
        </ConsultancyCardGrid>
      </ScrollSection>

      <ScrollSection as="section" index={2} style={{ padding: `${pv}px ${gv}px`, background: BG, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
        <Lbl ch="Ongoing operations · Four pillars" /><Ttl ch="THE METHOD." />
        <p style={{ fontFamily: SN, color: "rgba(0,0,0,0.58)", maxWidth: 760 }}>Our managed ai services operate across four continuous pillars. Each one runs in parallel from the first day of your retainer.</p>
        <ConsultancyCardGrid desktopCols={4} tabletCols={2} tone="light" borderRadius={18}>
          {PILLARS.map(([p, t, d, b], i) => (
            <ScrollGridItem key={p} sectionIndex={2} cardIndex={i}>
              <ConsultancyInteractiveSurface variant="muted" style={{ padding: 20 }}>
                <div style={{ fontFamily: MN, fontSize: 11, fontWeight: 700, letterSpacing: "normal", color: L_TEXT_ON_LIGHT }}>{p}</div>
                <div style={{ fontFamily: MN, fontSize: 15, margin: "8px 0" }}>{t}</div>
                <div style={{ fontFamily: SN, fontSize: 12.5, color: "rgba(0,0,0,0.56)", marginBottom: 8 }}>{d}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {b.map((x) => (
                    <div key={x} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontFamily: MN, fontSize: 10.5, color: "rgba(0,0,0,0.72)" }}>
                      <span aria-hidden style={{ width: 4, height: 4, borderRadius: "50%", background: L_TEXT_ON_LIGHT, flexShrink: 0, marginTop: 5 }} />
                      <span>{x}</span>
                    </div>
                  ))}
                </div>
              </ConsultancyInteractiveSurface>
            </ScrollGridItem>
          ))}
        </ConsultancyCardGrid>
      </ScrollSection>

      <ScrollSection as="section" index={3} style={{ padding: `${pv}px ${gv}px`, background: BG2, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
        <Lbl ch="Six deliverables" /><Ttl ch="WHAT YOU GET EVERY MONTH." />
        <ConsultancyCardGrid desktopCols={3} tabletCols={2} tone="light" borderRadius={18}>
          {DELIVERABLES.map(([t, d], i) => (
            <ScrollGridItem key={t} sectionIndex={3} cardIndex={i}>
              <ConsultancyInteractiveSurface variant="light" style={{ padding: 22 }}>
                <div style={{ fontFamily: MN, fontSize: 11, fontWeight: 700, letterSpacing: "normal", color: L_TEXT_ON_LIGHT }}>{String(i + 1).padStart(2, "0")} -</div>
                <div style={{ fontFamily: MN, fontSize: 15, margin: "6px 0" }}>{t}</div>
                <div style={{ fontFamily: SN, fontSize: 12.5, color: "rgba(0,0,0,0.57)" }}>{d}</div>
              </ConsultancyInteractiveSurface>
            </ScrollGridItem>
          ))}
        </ConsultancyCardGrid>
      </ScrollSection>

      <ScrollSection as="section" index={4} style={{ padding: `${pv}px ${gv}px`, background: DK, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
        <Lbl ch="What clients say" lt /><Ttl ch="TRUSTED BY TEAMS THAT SHIP." lt />
        <ConsultancyCardGrid desktopCols={3} tabletCols={2} tone="dark" borderRadius={18}>
          {QUOTES.map((q, i) => (
            <ScrollGridItem key={q} sectionIndex={4} cardIndex={i}>
              <ConsultancyInteractiveSurface variant="dk" style={{ padding: 22, fontFamily: SN, fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
                {q}
              </ConsultancyInteractiveSurface>
            </ScrollGridItem>
          ))}
        </ConsultancyCardGrid>
      </ScrollSection>

      <ScrollSection as="section" index={5} style={{ padding: `${pv}px ${gv}px`, background: BG, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
        <Lbl ch="Got questions" /><Ttl ch="FAQS." />
        <ConsultancyFaqAccordion items={FAQS} tone="paper" />
      </ScrollSection>

      <CTAStrip
        title="YOUR MODEL.|OUR WATCH."
        sub="Tell us what you have in production. We will review your current setup, send a managed ai services proposal with three retainer tier options, and reference clients from your industry who run similar AI systems."
        cta="Start a project"
      />
      <Footer />
    </ConsultancyLoadedShell>
  );
}
