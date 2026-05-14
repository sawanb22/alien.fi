"use client";

import Link from "next/link";
import { ConsultancyLoadedShell } from "@/components/consultancy/ConsultancyLoadedShell";
import {
  Arr,
  Chip,
  ConsultancyInteractiveSurface,
  CTAStrip,
  Footer,
  Lbl,
  Nav,
  Tilt,
  Ttl,
  consultancyGhostOnDarkEnter,
  consultancyGhostOnDarkLeave,
  consultancyLimeCtaEnter,
  consultancyLimeCtaLeave,
} from "@/components/consultancy/consultancy-ui";
import {
  gridCols,
  sectionGutter,
  sectionVPad,
  useLandingLayout,
} from "@/lib/landing-layout-context";
import { MN, SN } from "@/lib/consultancy/tokens";
import { BG, BG2, DK, L, L2, L_TEXT_ON_LIGHT, PL } from "@/lib/consultancy/theme";

const PHASES = [
  {
    n: "01",
    t: "Discovery Sprint",
    w: "2 weeks",
    d: "On-site interviews with 12-18 leaders. Data audit. Org-readiness scorecard. Risk register.",
    deliv: [
      "Leadership interview readout",
      "Data maturity heatmap",
      "Org readiness scorecard",
      "Risk register",
    ],
  },
  {
    n: "02",
    t: "Opportunity Mapping",
    w: "2 weeks",
    d: "We score 30-60 candidate use cases on impact x feasibility x strategic fit. Workshop with execs to land on the shortlist.",
    deliv: [
      "Use-case backlog",
      "Scoring framework",
      "Heatmap",
      "Shortlist (top 8)",
    ],
  },
  {
    n: "03",
    t: "Business Cases",
    w: "1-2 weeks",
    d: "For each shortlisted opportunity: ROI model, build-vs-buy analysis, MVP scope, and 12-month forecast.",
    deliv: [
      "ROI models",
      "Build-vs-buy matrix",
      "MVP scopes",
      "12-mo P&L impact",
    ],
  },
  {
    n: "04",
    t: "Roadmap & Org Plan",
    w: "1 week",
    d: "18-month sequenced roadmap. Hiring plan, governance model, vendor strategy, change-management plan.",
    deliv: [
      "18-month roadmap",
      "Hiring plan",
      "Governance charter",
      "Board pack",
    ],
  },
];

const DELIVERABLES = [
  {
    h: "Executive readout",
    d: "Board-grade slide deck. Two pages of recommendations the CEO can sign and the CFO can model.",
  },
  {
    h: "Opportunity backlog",
    d: "30-60 scored AI use cases. Live in Notion or Confluence. Reusable for Year 2 and beyond.",
  },
  {
    h: "18-month roadmap",
    d: "Sequenced quarterly milestones tied to P&L outcomes. Color-coded by risk and dependency.",
  },
  {
    h: "Org & governance plan",
    d: "AI Council charter, hiring sequence, vendor matrix, and change-management playbook.",
  },
  {
    h: "Build-vs-buy matrix",
    d: "For every opportunity: build internally, buy off-shelf, or hybrid. Scored on TCO, time-to-value, defensibility.",
  },
  {
    h: "Risk register",
    d: "Regulatory, ethical, brand, and execution risks per opportunity. Mitigations attached.",
  },
];

const OUTCOMES = [
  { v: "$24M", l: "Avg identified upside", sub: "Across 90-day engagements" },
  { v: "4.6x", l: "Year-1 ROI", sub: "On shortlisted use cases" },
  { v: "8.2 weeks", l: "Avg engagement", sub: "Discovery -> board pack" },
  { v: "94%", l: "Roadmap adoption", sub: "After 6 months" },
];

function StrategyHero() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const stacked = layout !== "desktop";
  return (
    <section
      style={{
        paddingTop: 60,
        background: DK,
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "45%",
          top: 80,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle,${L}22,transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      <div style={{ paddingLeft: gv, paddingRight: gv }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: stacked ? "1fr" : "320px 1fr",
            minHeight: stacked ? undefined : 480,
          }}
        >
          <div
            className="rvl"
            style={{
              padding: stacked ? "36px 0 28px" : "60px 36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 24,
              borderRight: stacked ? "none" : "1px solid rgba(255,255,255,0.06)",
              borderBottom: stacked ? "1px solid rgba(255,255,255,0.06)" : "none",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: MN,
                  fontSize: 9,
                  fontWeight: 600,
                  letterSpacing: "normal",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: 32,
                }}
              >
                <Link href="/" className="hv" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
                  Home
                </Link>
                <span style={{ opacity: 0.4 }}>/</span>
                <Link href="/services" className="hv" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
                  Services
                </Link>
                <span style={{ opacity: 0.4 }}>/</span>
                <span style={{ color: L2 }}>AI Strategy</span>
              </div>
              <Lbl ch="Service · Discovery -> Roadmap" lt />
              <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 18, color: "#fff", lineHeight: 1.5, marginBottom: 14 }}>
                The 90-day strategy engagement.
              </div>
              <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.5)" }}>
                For executive teams that need a defensible AI bet - not a vendor pitch deck.
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                ["Engagement", "$45-85K"],
                ["Duration", "8 weeks"],
                ["Team", "2 partners + 2 analysts"],
                ["Output", "Board-ready deck"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <span style={{ fontFamily: MN, fontSize: 10, fontWeight: 600, letterSpacing: "normal", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>{k}</span>
                  <span style={{ fontFamily: MN, fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding: stacked ? "32px 0 44px" : "72px 60px", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative" }}>
            <Chip ch="AI Strategy & Roadmap" bg={L} cl="#000" sx={{ marginBottom: 24 }} />
            <div className="rv" style={{ fontFamily: MN, fontWeight: 300, fontSize: "clamp(36px,4.8vw,72px)", lineHeight: 1, color: "#fff", letterSpacing: "normal", marginBottom: 32 }}>
              <div style={{ fontWeight: 300 }}>STRATEGY</div>
              <div style={{ fontWeight: 500 }}>BEFORE THE</div>
              <div
                style={{
                  fontWeight: 700,
                  background: `linear-gradient(90deg,#fff 40%,${L} 60%,#fff 80%)`,
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "consultancy-shimmer 4s linear infinite",
                }}
              >
                STACK.
              </div>
            </div>
            <div className="rv d3" style={{ fontFamily: SN, fontSize: stacked ? 15 : 16, lineHeight: 1.7, color: "rgba(255,255,255,0.55)", maxWidth: 620, marginBottom: 32 }}>
              Eight focused weeks. We sit with your leadership, audit your data, score your opportunities, and hand you an 18-month roadmap your CFO will sign.
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link
                href="/contact"
                className="hv"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: L,
                  color: "#000",
                  borderRadius: 999,
                  padding: "12px 18px",
                  fontFamily: MN,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "normal",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "background .2s,color .2s,box-shadow .2s",
                }}
                onMouseEnter={consultancyLimeCtaEnter}
                onMouseLeave={consultancyLimeCtaLeave}
              >
                Book a strategy call <Arr sz={10} cl="currentColor" sw={2.4} />
              </Link>
              <Link
                href="/case-studies"
                className="hv"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "transparent",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.28)",
                  borderRadius: 999,
                  padding: "12px 18px",
                  fontFamily: MN,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "normal",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "background .2s,box-shadow .2s",
                }}
                onMouseEnter={consultancyGhostOnDarkEnter}
                onMouseLeave={consultancyGhostOnDarkLeave}
              >
                See past roadmaps
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OutcomesSection() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  return (
    <section style={{ padding: `${layout === "mobile" ? 40 : 60}px ${gv}px`, background: DK, position: "relative", zIndex: 2, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ display: "grid", gridTemplateColumns: gridCols(layout, OUTCOMES.length, 2), gap: 1, background: "rgba(255,255,255,0.05)", borderRadius: 20, overflow: "hidden" }}>
        {OUTCOMES.map((x) => (
          <ConsultancyInteractiveSurface key={x.l} variant="dk" style={{ padding: layout === "mobile" ? "26px 22px" : "36px 30px" }}>
            <div style={{ fontFamily: MN, fontWeight: 700, fontSize: layout === "mobile" ? "clamp(28px,7vw,40px)" : 48, color: L, lineHeight: 1, marginBottom: 14 }}>{x.v}</div>
            <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 12, letterSpacing: "normal", color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>{x.l}</div>
            <div style={{ fontFamily: SN, fontSize: 11, color: "rgba(255,255,255,0.4)" }}>{x.sub}</div>
          </ConsultancyInteractiveSurface>
        ))}
      </div>
    </section>
  );
}

function PhasesSection() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  return (
    <section style={{ padding: `${pv}px ${gv}px`, background: `linear-gradient(180deg,${BG2},${BG})`, position: "relative", zIndex: 3, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
      <div style={{ marginBottom: layout === "mobile" ? 32 : 48, display: "grid", gridTemplateColumns: layout === "desktop" ? "320px 1fr" : "1fr", gap: layout === "mobile" ? 20 : 60, alignItems: layout === "mobile" ? "start" : "flex-end" }}>
        <div>
          <Lbl ch="Eight weeks · Four phases" />
          <Ttl ch="THE METHOD." />
        </div>
        <div style={{ fontFamily: SN, fontSize: 14, color: "rgba(0,0,0,0.55)", maxWidth: 540, lineHeight: 1.7 }}>
          Each phase produces tangible output. Each output earns the next. No surprises in week 8.
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: gridCols(layout, 4, 2), gap: 1, background: PL, borderRadius: layout === "mobile" ? 16 : 20, overflow: "hidden", border: `1px solid ${PL}` }}>
        {PHASES.map((p) => (
          <ConsultancyInteractiveSurface key={p.n} variant="gradient" style={{ padding: "30px 28px", display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 12, letterSpacing: "normal", color: L_TEXT_ON_LIGHT }}>{p.n}</div>
              <Chip ch={p.w} />
            </div>
            <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 18, color: "#000", letterSpacing: "normal", lineHeight: 1.3 }}>{p.t}</div>
            <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.7, color: "rgba(0,0,0,0.55)", flex: 1 }}>{p.d}</div>
            <div style={{ height: 1, background: PL, marginTop: 6 }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {p.deliv.map((x) => (
                <div key={x} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontFamily: MN, fontSize: 10.5, fontWeight: 500, color: "rgba(0,0,0,0.55)", lineHeight: 1.5 }}>
                  <div style={{ width: 4, height: 4, borderRadius: "50%", background: L_TEXT_ON_LIGHT, flexShrink: 0, marginTop: 6 }} />
                  {x}
                </div>
              ))}
            </div>
          </ConsultancyInteractiveSurface>
        ))}
      </div>
    </section>
  );
}

function DeliverablesGrid() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  return (
    <section style={{ padding: `${pv}px ${gv}px`, background: DK, position: "relative", zIndex: 4, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
      <div style={{ marginBottom: 40 }}>
        <Lbl ch="Six artifacts" lt />
        <Ttl ch="WHAT YOU TAKE HOME." lt />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: gridCols(layout, 3, 2), gap: 1, background: "rgba(255,255,255,0.06)", borderRadius: 20, overflow: "hidden" }}>
        {DELIVERABLES.map((d, i) => (
          <Tilt
            key={d.h}
            int={5}
            ch={
              <ConsultancyInteractiveSurface variant="dk" style={{ padding: "34px 32px", height: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
                  <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 12, letterSpacing: "normal", color: L }}>{String(i + 1).padStart(2, "0")}</div>
                  <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
                </div>
                <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 17, color: "#fff", letterSpacing: "normal", marginBottom: 14 }}>{d.h}</div>
                <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.5)" }}>{d.d}</div>
              </ConsultancyInteractiveSurface>
            }
          />
        ))}
      </div>
    </section>
  );
}

export default function ServiceAIStrategyPageClient() {
  return (
    <ConsultancyLoadedShell label="STRATEGY">
      <Nav current="Services" />
      <StrategyHero />
      <OutcomesSection />
      <PhasesSection />
      <DeliverablesGrid />
      <CTAStrip
        title="EIGHT WEEKS, ONE BOARD PACK."
        sub="Tell us your bet. We'll send three peer references, a sample roadmap, and a fixed-fee SOW."
      />
      <Footer />
    </ConsultancyLoadedShell>
  );
}

