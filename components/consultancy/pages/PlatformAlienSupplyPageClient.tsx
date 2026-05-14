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
  consultancyPrimaryBlackCtaEnter,
  consultancyPrimaryBlackCtaLeave,
  consultancyOutlineLightPillEnter,
  consultancyOutlineLightPillLeave,
} from "@/components/consultancy/consultancy-ui";
import {
  gridCols,
  sectionGutter,
  sectionVPad,
  useLandingLayout,
} from "@/lib/landing-layout-context";
import { MN, SN } from "@/lib/consultancy/tokens";
import { BG, BG2, DK, L, L2, PL } from "@/lib/consultancy/theme";
import {
  platformSplitHeaderBlurbCol,
  platformSplitHeaderRow,
  platformSplitHeaderTitleCol,
} from "@/lib/consultancy/platform-split-header";

const MODULES = [
  {
    ic: "⌬",
    t: "Predictive Maintenance AI",
    d: "Detect equipment failure risks early using machine data, maintenance history, and anomaly detection models. A core capability for teams buying predictive maintenance AI to reduce stoppages and protect throughput.",
    m: "Outcome: -37% unplanned downtime",
  },
  {
    ic: "✚",
    t: "Production Optimization AI",
    d: "Improve line balancing, scheduling, throughput, and changeover decisions with live operational recommendations. Built for AI for manufacturing teams focused on output and efficiency.",
    m: "Outcome: +18% line throughput",
  },
  {
    ic: "◭",
    t: "Quality Inspection AI",
    d: "Flag defects, drift, and process anomalies using vision models and production signals before they become scrap or rework.",
    m: "Outcome: -29% defect escape rate",
  },
  {
    ic: "◯",
    t: "Supply Chain Forecasting",
    d: "Predict demand swings, supplier risk, and inventory pressure across plants and regional distribution nodes.",
    m: "Outcome: +24% forecast accuracy",
  },
  {
    ic: "⊞",
    t: "OEE Copilot",
    d: "Explain changes in availability, performance, and quality in plain language so operators and leaders can diagnose loss drivers faster.",
    m: "Outcome: +32% root-cause speed",
  },
  {
    ic: "◐",
    t: "Operations Copilot",
    d: "Support supervisors, planners, and plant managers with search, summaries, SOP access, and workflow automation.",
    m: "Outcome: +21% decision speed",
  },
];

const COMPLIANCE = [
  {
    n: "ISO 9001",
    d: "Quality process alignment for manufacturing workflows.",
  },
  {
    n: "SOC 2 Type II",
    d: "Third-party control readiness for secure industrial deployments.",
  },
  {
    n: "OT Security Controls",
    d: "Network and environment protections aligned to plant operations.",
  },
  {
    n: "ISA/IEC 62443",
    d: "Industrial automation security alignment for connected systems.",
  },
  {
    n: "NIST AI RMF",
    d: "Risk management mapping for every manufacturing AI model and workflow.",
  },
  {
    n: "Audit Logs",
    d: "Traceable actions, recommendations, and approvals across plants and lines.",
  },
];

function SupplyHero() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const stacked = layout !== "desktop";
  return (
    <section
      style={{
        paddingTop: 60,
        background: "#fff",
        position: "relative",
        overflow: "hidden",
        borderBottom: `1px solid ${PL}`,
      }}
    >
      <div
        style={{
          position: "absolute",
          right: -150,
          top: 60,
          width: 560,
          height: 560,
          borderRadius: "50%",
          background: `radial-gradient(circle,${L}33,transparent 70%)`,
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
            style={{
              padding: stacked ? "36px 0 28px" : "60px 36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 24,
              borderRight: stacked ? "none" : `1px solid ${PL}`,
              borderBottom: stacked ? `1px solid ${PL}` : "none",
              background: "rgb(250,251,255)",
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
                  color: "rgba(0,0,0,0.4)",
                  marginBottom: 32,
                }}
              >
                <Link
                  href="/"
                  style={{ color: "rgba(0,0,0,0.5)", textDecoration: "none" }}
                >
                  Home
                </Link>
                <span style={{ opacity: 0.4 }}>/</span>
                <span style={{ color: "rgba(0,0,0,0.5)" }}>Platforms</span>
                <span style={{ opacity: 0.4 }}>/</span>
                <span style={{ color: "#000" }}>AlienSupply</span>
              </div>
              <Lbl ch="Platform · Manufacturing · Industrial" />
              <div
                style={{
                  fontFamily: MN,
                  fontWeight: 600,
                  fontSize: 24,
                  color: "#000",
                  lineHeight: 1.2,
                  marginBottom: 14,
                  letterSpacing: "normal",
                }}
              >
                AlienSupply™
              </div>
              <div
                style={{
                  fontFamily: SN,
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: "rgba(0,0,0,0.55)",
                }}
              >
                A vertical AI platform for manufacturing teams. Six industrial
                modules. One secure tenant. Live in weeks across plants, lines,
                and operations workflows.
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                ["Modules", "6 · 4 in beta"],
                ["Avg deploy", "3 weeks"],
                ["Plants live", "12,400+"],
                ["Tenant model", "Single + multi plant"],
                ["Pricing", "From $180K/yr"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(112px, auto) minmax(0, 1fr)",
                    alignItems: "start",
                    gap: 12,
                    padding: "8px 0",
                    borderBottom: `1px solid ${PL}`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: MN,
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "normal",
                      textTransform: "uppercase",
                      color: "rgba(0,0,0,0.35)",
                      whiteSpace: "normal",
                      lineHeight: 1.2,
                    }}
                  >
                    {k}
                  </span>
                  <span
                    style={{
                      fontFamily: MN,
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#000",
                      textAlign: "right",
                      lineHeight: 1.25,
                    }}
                  >
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              padding: stacked ? "32px 0 44px" : "72px 60px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 24,
                alignSelf: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <Chip ch="Platform" />
              <Chip ch="Manufacturing" bg={DK} cl={L} />
              <Chip ch="Secure by design" />
            </div>
            <div
              className="rv"
              style={{
                fontFamily: MN,
                fontWeight: 300,
                fontSize: "clamp(38px,5vw,80px)",
                lineHeight: 0.98,
                color: "#000",
                letterSpacing: "normal",
                marginBottom: 28,
              }}
            >
              <div style={{ fontWeight: 300 }}>MANUFACTURING AI</div>
              <div style={{ fontWeight: 500 }}>BUILT FOR THE</div>
              <div style={{ fontWeight: 700, color: DK }}>PLANT FLOOR.</div>
            </div>
            <div
              className="rv d3"
              style={{
                fontFamily: SN,
                fontSize: 16,
                lineHeight: 1.7,
                color: "rgba(0,0,0,0.6)",
                maxWidth: 640,
                marginBottom: 32,
              }}
            >
              AlienSupply is a manufacturing AI platform for industrial teams
              that need better uptime, stronger quality control, and faster
              planning decisions. Six modules deploy in one secure tenant without
              a multi-year transformation program.
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link
                href="/contact"
                className="hv"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: DK,
                  color: "#fff",
                  borderRadius: 999,
                  padding: "12px 18px",
                  fontFamily: MN,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "normal",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "background .2s,color .2s,box-shadow .2s,transform .15s",
                }}
                onMouseEnter={consultancyPrimaryBlackCtaEnter}
                onMouseLeave={consultancyPrimaryBlackCtaLeave}
              >
                Book a manufacturing demo <Arr sz={10} cl="currentColor" sw={2.4} />
              </Link>
              <Link
                href="/case-studies/redline-logistics"
                className="hv"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "transparent",
                  color: "#000",
                  border: `1px solid ${PL}`,
                  borderRadius: 999,
                  padding: "12px 18px",
                  fontFamily: MN,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "normal",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "background .2s,color .2s,border-color .2s,box-shadow .2s,transform .15s",
                }}
                onMouseEnter={consultancyOutlineLightPillEnter}
                onMouseLeave={consultancyOutlineLightPillLeave}
              >
                Redline case study <Arr sz={10} cl="currentColor" sw={2.4} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ModulesSection() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  return (
    <section
      style={{
        padding: `${pv}px ${gv}px`,
        background: `linear-gradient(180deg,${BG2},${BG})`,
        position: "relative",
      }}
    >
      <div
        style={{
          marginBottom: 36,
          display: "flex",
          alignItems: layout === "mobile" ? "flex-start" : "flex-end",
          justifyContent: "space-between",
          flexDirection: layout === "mobile" ? "column" : "row",
          gap: layout === "mobile" ? 12 : 0,
        }}
      >
        <div>
          <Lbl ch="Six modules · All interoperable" />
          <Ttl ch="WHAT'S INSIDE." />
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: gridCols(layout, 3, 2),
          gap: 1,
          background: PL,
          borderRadius: 20,
          overflow: "hidden",
          border: `1px solid ${PL}`,
        }}
      >
        {MODULES.map((m, i) => (
          <Tilt
            key={m.t}
            int={4}
            ch={
              <div id={`${m.t.toLowerCase().replace(/\s/g, "-")}`} style={{ height: "100%", scrollMarginTop: 88 }}>
                <ConsultancyInteractiveSurface variant="gradient" style={{ padding: "30px 28px", height: "100%", display: "flex", flexDirection: "column", gap: 14 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgb(229,231,245)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: MN, fontSize: 24, fontWeight: 700, color: "rgba(0,0,0,0.55)" }}>{m.ic}</div>
                    <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 9, letterSpacing: "normal", color: L2 }}>{`0${i + 1}`}</div>
                  </div>
                  <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 15, color: "#000", letterSpacing: "normal", lineHeight: 1.3 }}>{m.t}</div>
                  <div style={{ fontFamily: SN, fontSize: 12.5, lineHeight: 1.65, color: "rgba(0,0,0,0.5)", flex: 1 }}>{m.d}</div>
                  <div style={{ padding: "10px 12px", background: "#000", borderRadius: 8, fontFamily: MN, fontSize: 11, fontWeight: 700, color: L, letterSpacing: "normal" }}>{m.m}</div>
                </ConsultancyInteractiveSurface>
              </div>
            }
          />
        ))}
      </div>
    </section>
  );
}

function ComplianceSection() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  return (
    <section
      style={{
        padding: `${pv}px ${gv}px`,
        background: DK,
        position: "relative",
      }}
    >
      <div style={platformSplitHeaderRow(layout, 40)}>
        <div style={platformSplitHeaderTitleCol(layout)}>
          <Lbl ch="Trust isn't optional" lt />
          <Ttl ch="COMPLIANCE." lt />
        </div>
        <div style={platformSplitHeaderBlurbCol(layout, "onDark", { maxWidthPx: 440 })}>
          AlienSupply ships with the controls manufacturing teams need from day
          one. The platform is designed for industrial environments where uptime,
          traceability, and disciplined deployment matter as much as model
          performance.
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: gridCols(layout, 3, 2),
          gap: 1,
          background: "rgba(255,255,255,0.06)",
          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        {COMPLIANCE.map((c) => (
          <ConsultancyInteractiveSurface key={c.n} variant="dk" style={{ padding: "30px 28px" }}>
            <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 18, color: L, letterSpacing: "normal", marginBottom: 12 }}>{c.n}</div>
            <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.55)" }}>{c.d}</div>
          </ConsultancyInteractiveSurface>
        ))}
      </div>
    </section>
  );
}

export default function PlatformAlienSupplyPageClient() {
  return (
    <ConsultancyLoadedShell label="ALIENSUPPLY">
      <Nav current="Platform" />
      <SupplyHero />
      <ModulesSection />
      <ComplianceSection />
      <CTAStrip
        title="BRING IT TO YOUR OPERATIONS TEAM."
        sub="A 30-min discovery call. We will send sample control packs, three peer references, and a fixed-fee deployment quote for your AI for manufacturing rollout."
      />
      <Footer />
    </ConsultancyLoadedShell>
  );
}
