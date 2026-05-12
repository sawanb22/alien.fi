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
  consultancyPrimaryCtaHoverRing,
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
    t: "Legal Research Copilot",
    d: "Search case law, statutes, briefs, memos, and internal work product with grounded retrieval and source-linked outputs. Built for legal AI teams that need speed with traceability.",
    m: "Outcome: +58% research speed",
  },
  {
    ic: "✚",
    t: "Contract Review AI",
    d: "Review redlines, compare clauses, flag risk language, and surface deviations from firm-approved standards. A core ai for legal workflow for high-volume review teams.",
    m: "Outcome: 2.1x contract throughput",
  },
  {
    ic: "◭",
    t: "Drafting Copilot",
    d: "Generate first drafts for memos, client responses, clauses, and internal summaries using approved templates and prior work product. Keeps legal AI outputs closer to firm style.",
    m: "Outcome: +43% drafting speed",
  },
  {
    ic: "◯",
    t: "Matter Intake Copilot",
    d: "Turn emails, intake forms, and uploaded documents into structured records, then route them to the right team or practice area. Especially useful for AI for law firms focused on reducing admin drag.",
    m: "Outcome: +36% intake efficiency",
  },
  {
    ic: "⊞",
    t: "Knowledge Search",
    d: "Ask questions across internal precedents, clause libraries, research notes, and prior matters with matter-aware permissions. Reduces duplicate work and makes institutional knowledge reusable.",
    m: "Outcome: +31% knowledge reuse",
  },
  {
    ic: "◐",
    t: "Compliance Review Layer",
    d: "Check outputs for privilege, confidentiality, policy, and release risks before documents leave the workflow. Gives ai for legal deployments stronger control at the final step.",
    m: "Outcome: +29% review consistency",
  },
];

const COMPLIANCE = [
  {
    n: "Privilege Controls",
    d: "Matter-aware access, routing boundaries, and controlled retrieval for sensitive work.",
  },
  {
    n: "SOC 2 Type II",
    d: "Annual third-party audit alignment and operational control maturity.",
  },
  {
    n: "Tenant Isolation",
    d: "Separate environments and matter-level boundaries for client confidentiality.",
  },
  {
    n: "Audit Logs",
    d: "Tracked actions, retrieval history, and review visibility for regulated workflows.",
  },
  {
    n: "Private Deployment",
    d: "Private cloud or controlled deployment options for firms with stricter security needs.",
  },
  {
    n: "Policy Mapping",
    d: "Aligned for internal legal policy, confidentiality, and review governance requirements.",
  },
];

function CounselHero() {
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
                  letterSpacing: "0.14em",
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
                <span style={{ color: "#000" }}>AlienCounsel</span>
              </div>
              <Lbl ch="Platform · Legal · Privilege-aware" />
              <div
                style={{
                  fontFamily: MN,
                  fontWeight: 600,
                  fontSize: 24,
                  color: "#000",
                  lineHeight: 1.2,
                  marginBottom: 14,
                  letterSpacing: "0.02em",
                }}
              >
                AlienCounsel™
              </div>
              <div
                style={{
                  fontFamily: SN,
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: "rgba(0,0,0,0.55)",
                }}
              >
                A vertical AI platform for law firms and in-house legal teams.
                Six legal AI modules. One secure tenant. Live in weeks for
                research, drafting, review, and intake workflows.
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                ["Modules", "6 · 4 in beta"],
                ["Avg deploy", "3 weeks"],
                ["Legal teams live", "1,500+"],
                ["Tenant model", "Single + multi matter"],
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
                      letterSpacing: "0.1em",
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
              <Chip ch="Legal" bg={DK} cl={L} />
              <Chip ch="SOC 2 + Privilege Controls" />
            </div>
            <div
              className="rv"
              style={{
                fontFamily: MN,
                fontWeight: 300,
                fontSize: "clamp(38px,5vw,80px)",
                lineHeight: 0.98,
                color: "#000",
                letterSpacing: "0.03em",
                marginBottom: 28,
              }}
            >
              <div style={{ fontWeight: 300 }}>LEGAL AI</div>
              <div style={{ fontWeight: 500 }}>BUILT FOR</div>
              <div style={{ fontWeight: 700, color: DK }}>REAL MATTERS.</div>
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
              AlienCounsel is a vertical AI platform for law firms. Six modules
              deployed in one secure tenant so legal teams can move faster on
              research, drafting, review, and knowledge workflows without
              exposing confidential material to generic tools.
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
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "background .2s,color .2s,box-shadow .2s,transform .15s",
                }}
                onMouseEnter={consultancyPrimaryBlackCtaEnter}
                onMouseLeave={consultancyPrimaryBlackCtaLeave}
              >
                Book a legal demo <Arr sz={10} cl="currentColor" sw={2.4} />
              </Link>
              <Link
                href="/case-studies/lumen-legal"
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
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "background .2s,color .2s,border-color .2s,box-shadow .2s,transform .15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0,0,0,0.06)";
                  e.currentTarget.style.borderColor = "rgba(0,0,0,0.35)";
                  e.currentTarget.style.boxShadow = consultancyPrimaryCtaHoverRing;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#000";
                  e.currentTarget.style.borderColor = PL;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Lumen case study <Arr sz={10} cl="currentColor" sw={2.4} />
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
    <section style={{ padding: `${pv}px ${gv}px`, background: `linear-gradient(180deg,${BG2},${BG})`, position: "relative" }}>
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
                    <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 9, letterSpacing: "0.14em", color: L2 }}>{`0${i + 1}`}</div>
                  </div>
                  <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 15, color: "#000", letterSpacing: "0.02em", lineHeight: 1.3 }}>
                    <a href={`#${m.t.toLowerCase().replace(/\s/g, "-")}`} style={{ color: "inherit", textDecoration: "none" }}>{m.t}</a>
                  </div>
                  <div style={{ fontFamily: SN, fontSize: 12.5, lineHeight: 1.65, color: "rgba(0,0,0,0.5)", flex: 1 }}>{m.d}</div>
                  <div style={{ padding: "10px 12px", background: "#000", borderRadius: 8, fontFamily: MN, fontSize: 11, fontWeight: 700, color: L, letterSpacing: "0.04em" }}>{m.m}</div>
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
          AlienCounsel ships with the controls legal teams need from day one. The
          platform is designed for confidential legal workflows where access,
          traceability, and defensibility matter as much as productivity.
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
            <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 18, color: L, letterSpacing: "0.04em", marginBottom: 12 }}>{c.n}</div>
            <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.55)" }}>{c.d}</div>
          </ConsultancyInteractiveSurface>
        ))}
      </div>
    </section>
  );
}

export default function PlatformAlienCounselPageClient() {
  return (
    <ConsultancyLoadedShell label="ALIENCOUNSEL">
      <Nav current="Platform" />
      <CounselHero />
      <ModulesSection />
      <ComplianceSection />
      <CTAStrip
        title="BRING IT TO YOUR ATTORNEYS."
        sub="A 30-min discovery call. We will send sample control packs, three peer references, and a fixed-fee deployment quote for your legal AI rollout."
      />
      <Footer />
    </ConsultancyLoadedShell>
  );
}
