"use client";

import Link from "next/link";
import { ConsultancyLoadedShell } from "@/components/consultancy/ConsultancyLoadedShell";
import {
  Arr,
  Chip,
  ConsultancyCardGrid,
  ConsultancyInteractiveSurface,
  consultancyCardGridCellLift,
  CTAStrip,
  Footer,
  Lbl,
  Nav,
  PageHero,
  Ticker,
  Ttl,
  consultancyLimeCtaEnter,
  consultancyLimeCtaLeave,
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
import { BG, BG2, CD, DK, L, L2, L_TEXT_ON_LIGHT, PL } from "@/lib/consultancy/theme";
import { MagneticWrap, ScrollGridItem, ScrollSection } from "@/components/motion/scroll-primitives";
import { useHoverSectionOpen } from "@/lib/use-hover-section-open";
import { useEffect, useState } from "react";

const SERVICES = [
  {
    n: "01",
    anchor: "strategy-consulting",
    cat: "STRATEGY",
    t: "AI Strategy & Roadmap",
    d:
      "Business case workshops, opportunity scoring, and 18-month execution roadmaps. We start with outcomes, not technology.",
    price: "$45–85K",
    duration: "4–8 weeks",
    deliverables: [
      "Opportunity heatmap",
      "ROI models",
      "Build-vs-buy matrix",
      "18-month roadmap",
      "Org-readiness audit",
    ],
    ic: "◇",
  },
  {
    n: "02",
    anchor: "custom-ai-development",
    cat: "BUILD",
    t: "Custom AI Development",
    d:
      "End-to-end model development for high-stakes use cases — bespoke ML, custom fine-tuned LLMs, multi-modal systems.",
    price: "$120–500K",
    duration: "12–28 weeks",
    deliverables: ["Production model", "Eval & monitoring", "API + SDK", "Documentation", "Knowledge transfer"],
    ic: "⌬",
  },
  {
    n: "03",
    anchor: "implementation-integration",
    cat: "DEPLOY",
    t: "Implementation & Integration",
    d:
      "Bring third-party AI or our pre-built solutions into your existing stack. Security review, legacy adapters, change management.",
    price: "$60–180K",
    duration: "6–12 weeks",
    deliverables: ["Integration code", "Security review", "Runbook", "User training", "30-day handover"],
    ic: "⏣",
  },
  {
    n: "04",
    anchor: "managed-ai-services",
    cat: "OPERATE",
    t: "Managed AI Operations",
    d:
      "24/7 monitoring, retraining, drift detection, on-call. SLA-backed. We sit on top of your stack so you don't have to staff up.",
    price: "$8–25K/mo",
    duration: "Ongoing",
    deliverables: ["99.95% SLA", "24/7 on-call", "Weekly retraining", "Drift alerts", "Monthly review"],
    ic: "◯",
  },
  {
    n: "05",
    anchor: "training-enablement",
    cat: "ENABLE",
    t: "Training & Enablement",
    d:
      "Engineering bootcamps, executive workshops, internal AI guild setup. Build the in-house muscle to maintain what we ship.",
    price: "$15–45K",
    duration: "2–6 weeks",
    deliverables: ["Custom curriculum", "Live workshops", "Recorded library", "Certifications", "Mentor network"],
    ic: "◭",
  },
  {
    n: "06",
    anchor: "responsible-ai-governance",
    cat: "GOVERN",
    t: "Responsible AI & Governance",
    d:
      "Bias audits, model cards, EU AI Act compliance, risk frameworks. For regulated industries that need defensible AI.",
    price: "$35–95K",
    duration: "4–10 weeks",
    deliverables: ["Risk framework", "Bias audit", "Model cards", "Compliance docs", "Board briefing"],
    ic: "⊞",
  },
];

const PROCESS = [
  {
    p: "01",
    t: "Discovery",
    d: "2-week paid sprint. We sit with your team, audit your data, and write a sharp problem brief.",
    time: "2 weeks",
  },
  {
    p: "02",
    t: "Design",
    d: "Solution architecture, success metrics, build-vs-buy decisions, fixed-quote SOW.",
    time: "1–2 weeks",
  },
  {
    p: "03",
    t: "Build",
    d: "Daily standups, weekly demos, fortnightly steering committee. No surprises.",
    time: "8–24 weeks",
  },
  {
    p: "04",
    t: "Ship",
    d: "Phased rollout with feature flags. Monitoring, alerting, and runbooks before any prod traffic.",
    time: "2–4 weeks",
  },
  {
    p: "05",
    t: "Operate",
    d: "Optional managed services. Or full handover with documentation and 30-day on-call.",
    time: "Ongoing",
  },
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return reduced;
}

function ServiceRow({
  s,
  open,
  onToggle,
}: {
  s: (typeof SERVICES)[0];
  open: boolean;
  onToggle: () => void;
}) {
  const layout = useLandingLayout();
  const narrow = layout !== "desktop";
  const isOpen = open;
  const [rowHover, setRowHover] = useState(false);
  const rowBg = isOpen ? `linear-gradient(160deg,rgb(220,244,200),${BG2})` : rowHover ? "rgba(21,24,43,0.055)" : "transparent";
  return (
    <div
      id={s.anchor}
      onMouseEnter={() => setRowHover(true)}
      onMouseLeave={() => setRowHover(false)}
      style={{
        position: "relative",
        zIndex: isOpen || rowHover ? 3 : 0,
        borderBottom: `1px solid ${PL}`,
        background: rowBg,
        transition: "background .22s ease, box-shadow .22s ease",
        boxShadow: !isOpen && rowHover ? `inset 0 0 0 1.5px rgba(150,238,82,0.42)` : "none",
      }}
    >
      <button
        type="button"
        className="hv"
        onClick={onToggle}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          padding: narrow ? "20px 18px" : "30px 32px",
          display: narrow ? "flex" : "grid",
          flexDirection: narrow ? "column" : undefined,
          gap: narrow ? 14 : 24,
          gridTemplateColumns: narrow ? undefined : "80px 1fr 200px 100px 40px",
          alignItems: narrow ? "stretch" : "center",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        {narrow ? (
          <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
              <div
                style={{
                  fontFamily: MN,
                  fontWeight: 700,
                  fontSize: 28,
                  color: isOpen ? "#000" : "rgba(0,0,0,0.25)",
                  letterSpacing: "normal",
                  lineHeight: 1,
                }}
              >
                {s.n}
              </div>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  border: `1.5px solid ${isOpen ? "#000" : PL}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: MN,
                  fontSize: 16,
                  fontWeight: 300,
                  color: isOpen ? "#000" : "rgba(0,0,0,0.4)",
                  transform: isOpen ? "rotate(45deg)" : "none",
                  flexShrink: 0,
                }}
              >
                +
              </div>
            </div>
            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  fontFamily: MN,
                  fontWeight: 700,
                  fontSize: 10,
                  letterSpacing: "normal",
                  color: isOpen ? "rgba(21,24,43,0.78)" : L_TEXT_ON_LIGHT,
                  marginBottom: 6,
                  transition: "color .22s ease",
                }}
              >
                {s.cat}
              </div>
              <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 18, color: "#000", letterSpacing: "normal" }}>{s.t}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: isOpen ? "#000" : CD,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: MN,
                  fontSize: 18,
                  fontWeight: 300,
                  color: isOpen ? L : "rgba(0,0,0,0.5)",
                  flexShrink: 0,
                }}
              >
                {s.ic}
              </div>
              <div style={{ fontFamily: MN, fontSize: 12, letterSpacing: "normal", color: "rgba(0,0,0,0.58)" }}>
                <div style={{ fontWeight: 700, color: "#000", fontSize: 14 }}>{s.price}</div>
                <div style={{ marginTop: 4, fontSize: 11, color: "rgba(0,0,0,0.5)" }}>{s.duration}</div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                fontFamily: MN,
                fontWeight: 700,
                fontSize: 36,
                color: isOpen ? "#000" : "rgba(0,0,0,0.25)",
                letterSpacing: "normal",
                lineHeight: 1,
                transition: "color .25s",
              }}
            >
              {s.n}
            </div>
            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  fontFamily: MN,
                  fontWeight: 700,
                  fontSize: 10,
                  letterSpacing: "normal",
                  color: isOpen ? "rgba(21,24,43,0.78)" : L_TEXT_ON_LIGHT,
                  marginBottom: 6,
                  transition: "color .22s ease",
                }}
              >
                {s.cat}
              </div>
              <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 23, color: "#000", letterSpacing: "normal" }}>{s.t}</div>
            </div>
            <div style={{ fontFamily: MN, fontSize: 12, letterSpacing: "normal", color: "rgba(0,0,0,0.58)" }}>
              <div style={{ fontWeight: 700, color: "#000", fontSize: 14 }}>{s.price}</div>
              <div style={{ marginTop: 4, fontSize: 11, color: "rgba(0,0,0,0.5)" }}>{s.duration}</div>
            </div>
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 10,
                background: isOpen ? "#000" : CD,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: MN,
                fontSize: 22,
                fontWeight: 300,
                color: isOpen ? L : "rgba(0,0,0,0.5)",
                transition: "all .25s",
              }}
            >
              {s.ic}
            </div>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                border: `1.5px solid ${isOpen ? "#000" : PL}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: MN,
                fontSize: 18,
                fontWeight: 300,
                color: isOpen ? "#000" : "rgba(0,0,0,0.4)",
                transition: "all .25s",
                transform: isOpen ? "rotate(45deg)" : "none",
              }}
            >
              +
            </div>
          </>
        )}
      </button>
      {isOpen ? (
        <div
          style={{
            padding: narrow ? "0 18px 24px" : "0 32px 32px 144px",
            display: "grid",
            gridTemplateColumns: narrow ? "1fr" : "2fr 1fr",
            gap: narrow ? 28 : 40,
          }}
        >
          <div>
            <div style={{ fontFamily: SN, fontSize: 15, lineHeight: 1.7, color: "rgba(0,0,0,0.68)", marginBottom: 20 }}>
              {s.d}
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
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
                    border: "none",
                    borderRadius: 999,
                    padding: "10px 18px",
                    fontFamily: MN,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "normal",
                    textTransform: "uppercase",
                    cursor: "none",
                    textDecoration: "none",
                    transition: "background .2s,color .2s,box-shadow .2s,transform .15s",
                  }}
                  onMouseEnter={consultancyLimeCtaEnter}
                  onMouseLeave={consultancyLimeCtaLeave}
                >
                  Discuss this engagement <Arr sz={10} cl="currentColor" sw={2.2} />
                </Link>
              </MagneticWrap>
              <MagneticWrap strength={0.35} style={{ display: "inline-flex" }}>
                <Link
                  href={`/case-studies?service=${s.anchor}`}
                  className="hv"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "transparent",
                    color: "#000",
                    border: `1px solid ${PL}`,
                    borderRadius: 999,
                    padding: "10px 18px",
                    fontFamily: MN,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "normal",
                    textTransform: "uppercase",
                    cursor: "none",
                    textDecoration: "none",
                    transition: "background .2s,color .2s,border-color .2s,box-shadow .2s,transform .15s",
                  }}
                  onMouseEnter={consultancyOutlineLightPillEnter}
                  onMouseLeave={consultancyOutlineLightPillLeave}
                >
                  Related case studies <Arr sz={10} cl="currentColor" sw={2.2} />
                </Link>
              </MagneticWrap>
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: MN,
                fontWeight: 700,
                fontSize: 9,
                letterSpacing: "normal",
                color: "rgba(0,0,0,0.4)",
                marginBottom: 12,
              }}
            >
              WHAT YOU GET
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {s.deliverables.map((del) => (
                <div
                  key={del}
                  role="presentation"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(21,24,43,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 10px",
                    margin: "0 -10px",
                    borderRadius: 8,
                    borderBottom: `1px solid ${PL}`,
                    fontFamily: MN,
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#000",
                    letterSpacing: "normal",
                    transition: "background .18s ease",
                  }}
                >
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: L_TEXT_ON_LIGHT, flexShrink: 0 }} />
                  {del}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function ServicesAccordion() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ScrollSection as="section" index={0} style={{ padding: `${pv}px ${gv}px`, background: `linear-gradient(180deg,${BG2},${BG})`, position: "relative", zIndex: 2 }}>
      <div
        style={{
          marginBottom: layout === "mobile" ? 28 : 36,
          display: "flex",
          flexDirection: layout === "mobile" ? "column" : "row",
          alignItems: layout === "mobile" ? "flex-start" : "flex-end",
          justifyContent: "space-between",
          gap: layout === "mobile" ? 12 : 0,
        }}
      >
        <div>
          <Lbl ch="Six engagement modes" sx={{ letterSpacing: "normal" }} />
          <Ttl ch="HOW WE WORK" sx={{ letterSpacing: "normal" }} />
        </div>
        <div
          style={{
            fontFamily: SN,
            fontSize: 14,
            color: "rgba(0,0,0,0.48)",
            maxWidth: 340,
            textAlign: layout === "mobile" ? "left" : "right",
            lineHeight: 1.6,
          }}
        >
          Click any service to see deliverables, pricing, and timeline.
        </div>
      </div>
      <div>
        <div style={{ background: BG, borderRadius: layout === "mobile" ? 16 : 20, overflow: "hidden", border: `1px solid ${PL}`, isolation: "isolate" }}>
          {SERVICES.map((s, i) => (
            <ScrollGridItem key={s.n} sectionIndex={0} cardIndex={i}>
              <ServiceRow s={s} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
            </ScrollGridItem>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
}

function ProcessTimeline() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  const showHr = layout === "desktop";
  const reduceMotion = usePrefersReducedMotion();
  const pulseAnimation = reduceMotion ? "none" : "consultancy-pulseRing 3.8s ease-out infinite";
  return (
    <ScrollSection as="section" index={1} style={{ padding: `${pv}px ${gv}px`, background: DK, position: "relative", zIndex: 3, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
      <div style={{ marginBottom: layout === "mobile" ? 32 : 48 }}>
        <Lbl ch="Boring is good" lt sx={{ letterSpacing: "normal" }} />
        <Ttl ch="THE PROCESS" lt sx={{ letterSpacing: "normal" }} />
      </div>
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            left: 32,
            right: 32,
            top: 46,
            height: 1,
            background: `linear-gradient(90deg,transparent,${L}66 10%,${L}66 90%,transparent)`,
            zIndex: 0,
            opacity: showHr ? 1 : 0,
            pointerEvents: "none",
          }}
        />
        <div style={{ display: "grid", gridTemplateColumns: gridCols(layout, 5, 2), gap: layout === "mobile" ? 16 : 20, position: "relative", zIndex: 1 }}>
          {PROCESS.map((p, i) => (
            <ScrollGridItem key={p.p} sectionIndex={1} cardIndex={i}>
            <ConsultancyInteractiveSurface variant="dk" style={{ borderRadius: 14, padding: "12px 14px 18px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: L,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: MN,
                    fontWeight: 700,
                    fontSize: 11,
                    color: "#000",
                    marginBottom: 18,
                    position: "relative",
                    boxShadow: `0 0 0 6px ${DK}, 0 0 18px ${L}99`,
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: -1,
                      left: -1,
                      right: -1,
                      bottom: -1,
                      borderRadius: "50%",
                      border: `1px solid ${L}`,
                      animation: pulseAnimation,
                    }}
                  />
                  {p.p}
                </div>
                <Chip ch={p.time} bg="rgba(255,255,255,0.08)" cl="rgba(255,255,255,0.7)" sx={{ marginBottom: 12 }} />
                <div
                  style={{
                    fontFamily: MN,
                    fontWeight: 600,
                    fontSize: 19,
                    color: "#fff",
                    letterSpacing: "normal",
                    marginBottom: 10,
                  }}
                >
                  {p.t}
                </div>
                <div style={{ fontFamily: SN, fontSize: 13.5, lineHeight: 1.65, color: "rgba(255,255,255,0.58)" }}>{p.d}</div>
              </div>
            </ConsultancyInteractiveSurface>
            </ScrollGridItem>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
}

function Principles() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  const { open: principlesOpen, sectionHoverHandlers: principlesHover } = useHoverSectionOpen();
  const [hov, setHov] = useState<number | null>(null);
  const ps = [
    {
      n: "01",
      t: "Start with business value",
      d:
        "We scope around measurable business outcomes, because the strongest AI development services start with clear value, defined priorities, and realistic ROI targets.",
    },
    {
      n: "02",
      t: "Build for production",
      d:
        "We prioritize integration, security, monitoring, and adoption from the start so AI systems can operate in live environments instead of staying trapped in prototype mode.",
    },
    {
      n: "03",
      t: "Keep governance visible",
      d:
        "Governance, explainability, risk controls, and compliance planning are built into delivery so responsible AI remains part of the system, not an afterthought.",
    },
    {
      n: "04",
      t: "Stay accountable",
      d:
        "We believe strong AI services providers should offer clear scope, transparent pricing, milestone-based delivery, and reporting tied to business outcomes.",
    },
  ];
  return (
    <ScrollSection
      as="section"
      index={2}
      id="principles"
      data-expanded={principlesOpen ? "true" : "false"}
      style={{
        padding: `${pv}px ${gv}px`,
        background: `linear-gradient(180deg,${BG},${BG2})`,
        position: "relative",
        zIndex: principlesOpen ? 6 : 4,
        borderRadius: "24px 24px 0 0",
        marginTop: -24,
      }}
    >
      <div style={{ padding: "0" }} {...principlesHover}>
        <div className="hv" style={{ display: "block", width: "100%", boxSizing: "border-box" }}>
          <div
            style={{
              display: "flex",
              flexDirection: layout === "mobile" ? "column" : "row",
              alignItems: layout === "mobile" ? "flex-start" : "flex-end",
              justifyContent: "space-between",
              marginBottom: layout === "mobile" ? 36 : 48,
              gap: layout === "mobile" ? 12 : 0,
            }}
          >
            <div className="rv" style={{ maxWidth: layout === "mobile" ? "100%" : 520, flex: layout === "mobile" ? "none" : "0 1 auto" }}>
              <Lbl ch="What you can count on" sx={{ letterSpacing: "normal" }} />
              <Ttl ch="PRINCIPLES." sx={{ whiteSpace: layout === "mobile" ? "normal" : "nowrap", letterSpacing: "normal" }} />
            </div>
            <div
              className="rv d2"
              style={{
                minWidth: 0,
                fontFamily: SN,
                fontSize: 13,
                lineHeight: 1.6,
                color: "rgba(0,0,0,0.38)",
                maxWidth: layout === "mobile" ? 360 : 280,
                textAlign: layout === "mobile" ? "left" : "right",
              }}
            >
              These principles shape every engagement, from early AI consulting service work to large-scale AI development services and long-term support.
            </div>
          </div>
        </div>
        {!principlesOpen ? (
          <div
            aria-hidden
            className="rv d1 in"
            style={{
              display: "grid",
              gridTemplateColumns: gridCols(layout, 4, 2),
              gap: 1,
              height: 3,
              boxSizing: "border-box",
              background: PL,
              borderRadius: layout === "mobile" ? 16 : 20,
              overflow: "hidden",
              border: `1px solid ${PL}`,
            }}
          />
        ) : null}
        {principlesOpen ? (
          <div id="principles-blocks" role="region" aria-label="Principles" style={{ position: "relative", zIndex: 1 }}>
            <ConsultancyCardGrid className="rv d1 in" desktopCols={4} tabletCols={2} tone="light">
              {ps.map((p, i) => (
                <ScrollGridItem key={p.n} sectionIndex={2} cardIndex={i}>
                  <div style={{ height: "100%", minHeight: 0 }}>
                    <div
                      onMouseEnter={(e) => {
                        setHov(i);
                        consultancyCardGridCellLift(e.currentTarget, true);
                      }}
                      onMouseLeave={(e) => {
                        setHov(null);
                        consultancyCardGridCellLift(e.currentTarget, false);
                      }}
                      style={{
                        position: "relative",
                        background: hov === i ? DK : `linear-gradient(140deg,${BG},${BG2})`,
                        padding: "36px 36px",
                        transition: "background .35s, transform .22s ease, box-shadow .22s ease",
                        display: "flex",
                        flexDirection: "column",
                        gap: 14,
                        minHeight: "100%",
                        boxSizing: "border-box",
                        transform: hov === i ? "translateY(-2px)" : "translateY(0)",
                        boxShadow: hov === i ? "0 12px 32px rgba(0,0,0,0.18)" : "none",
                      }}
                    >
                      <span style={{ fontFamily: MN, fontWeight: 700, fontSize: 10, letterSpacing: "normal", color: L2, transition: "color .3s" }}>{p.n}</span>
                      <div
                        style={{
                          fontFamily: MN,
                          fontWeight: 600,
                          fontSize: 14,
                          letterSpacing: "normal",
                          lineHeight: 1.35,
                          transition: "color .3s",
                          color: hov === i ? "#fff" : "rgba(0,0,0,0.85)",
                        }}
                      >
                        {p.t}
                      </div>
                      <div style={{ height: 1, background: hov === i ? "rgba(255,255,255,0.08)" : PL, transition: "background .3s" }} />
                      <div
                        style={{
                          fontFamily: SN,
                          fontSize: 12.5,
                          lineHeight: 1.7,
                          color: hov === i ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.48)",
                          transition: "color .3s",
                        }}
                      >
                        {p.d}
                      </div>
                    </div>
                  </div>
                </ScrollGridItem>
              ))}
            </ConsultancyCardGrid>
          </div>
        ) : null}
      </div>
    </ScrollSection>
  );
}

export default function ServicesPageClient() {
  return (
    <ConsultancyLoadedShell label="SERVICES">
      <Nav current="Services" />
      <PageHero
        compact
        eyebrow="Services"
        title="STRATEGY,|BUILD,OPERATE.|END-TO-END."
        sub="Six service modes. Mix and match. Pay for what you use. We're equally happy as the strategy partner, the build team, or the on-call ops crew."
        meta={[["Service modes", "6"], ["Avg engagement", "14 weeks"], ["Smallest", "$15K · 2 weeks"], ["Largest", "$2.4M · 3 yrs"]]}
        accent="Booking Q3 / Q4 engagements now"
      />
      <Ticker
        durationSec={56}
        words={["AI Strategy", "Custom AI Dev", "AI Implementation", "Managed Ops", "Training", "Governance", "Roadmaps", "Bias Audits", "24/7 SLA", "Bootcamps"]}
      />
      <ServicesAccordion />
      <ProcessTimeline />
      <Principles />
      <CTAStrip
        title="LET'S TALK SCOPE"
        sub="A 30-minute call gets you a fixed-fee quote, a roadmap sketch, and three references in your industry."
      />
      <Footer />
    </ConsultancyLoadedShell>
  );
}
