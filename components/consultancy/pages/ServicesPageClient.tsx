"use client";

import Link from "next/link";
import { ConsultancyLoadedShell } from "@/components/consultancy/ConsultancyLoadedShell";
import {
  Arr,
  Chip,
  CTAStrip,
  Footer,
  Lbl,
  Nav,
  PageHero,
  Ticker,
  Tilt,
  Ttl,
} from "@/components/consultancy/consultancy-ui";
import {
  gridCols,
  sectionGutter,
  sectionVPad,
  useLandingLayout,
} from "@/lib/landing-layout-context";
import { MN, SN } from "@/lib/consultancy/tokens";
import { BG, BG2, CD, DK, L, L2, PL } from "@/lib/consultancy/theme";
import { useState } from "react";

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
    time: "2 wks",
  },
  {
    p: "02",
    t: "Design",
    d: "Solution architecture, success metrics, build-vs-buy decisions, fixed-quote SOW.",
    time: "1–2 wks",
  },
  {
    p: "03",
    t: "Build",
    d: "Daily standups, weekly demos, fortnightly steering committee. No surprises.",
    time: "8–24 wks",
  },
  {
    p: "04",
    t: "Ship",
    d: "Phased rollout with feature flags. Monitoring, alerting, and runbooks before any prod traffic.",
    time: "2–4 wks",
  },
  {
    p: "05",
    t: "Operate",
    d: "Optional managed services. Or full handover with documentation and 30-day on-call.",
    time: "Ongoing",
  },
];

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
  return (
    <div
      id={s.anchor}
      style={{
        borderBottom: `1px solid ${PL}`,
        background: isOpen ? `linear-gradient(160deg,rgb(220,244,200),${BG2})` : "transparent",
        transition: "background .25s",
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
          cursor: narrow ? "pointer" : "none",
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
                  letterSpacing: "0.04em",
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
              <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 9, letterSpacing: "0.16em", color: L2, marginBottom: 6 }}>
                {s.cat}
              </div>
              <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 17, color: "#000", letterSpacing: "0.03em" }}>{s.t}</div>
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
              <div style={{ fontFamily: MN, fontSize: 11, letterSpacing: "0.06em", color: "rgba(0,0,0,0.55)" }}>
                <div style={{ fontWeight: 700, color: "#000", fontSize: 13 }}>{s.price}</div>
                <div style={{ marginTop: 4, fontSize: 10 }}>{s.duration}</div>
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
                letterSpacing: "0.04em",
                lineHeight: 1,
                transition: "color .25s",
              }}
            >
              {s.n}
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 9, letterSpacing: "0.16em", color: L2, marginBottom: 6 }}>{s.cat}</div>
              <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 22, color: "#000", letterSpacing: "0.03em" }}>{s.t}</div>
            </div>
            <div style={{ fontFamily: MN, fontSize: 11, letterSpacing: "0.06em", color: "rgba(0,0,0,0.55)" }}>
              <div style={{ fontWeight: 700, color: "#000", fontSize: 13 }}>{s.price}</div>
              <div style={{ marginTop: 4, fontSize: 10 }}>{s.duration}</div>
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
            <div style={{ fontFamily: SN, fontSize: 14.5, lineHeight: 1.7, color: "rgba(0,0,0,0.6)", marginBottom: 20 }}>
              {s.d}
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link
                href="/contact"
                className="hv"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#000",
                  color: L,
                  border: "none",
                  borderRadius: 24,
                  padding: "10px 18px",
                  fontFamily: MN,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "none",
                  textDecoration: "none",
                  transition: "background .2s,color .2s,transform .15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = L;
                  e.currentTarget.style.color = "#000";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#000";
                  e.currentTarget.style.color = "#fff";
                }}
              >
                Discuss this engagement <Arr sz={10} cl="currentColor" sw={2.2} />
              </Link>
              <Link
                href={`/case-studies?service=${s.anchor}`}
                className="hv"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "transparent",
                  color: "#000",
                  border: `1.5px solid ${PL}`,
                  borderRadius: 24,
                  padding: "10px 18px",
                  fontFamily: MN,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "none",
                  textDecoration: "none",
                  transition: "background .2s,color .2s,border-color .2s,transform .15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#000";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.borderColor = "#000";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#000";
                  e.currentTarget.style.borderColor = PL;
                }}
              >
                Related case studies <Arr sz={10} cl="currentColor" sw={2.2} />
              </Link>
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: MN,
                fontWeight: 700,
                fontSize: 9,
                letterSpacing: "0.14em",
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
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 0",
                    borderBottom: `1px solid ${PL}`,
                    fontFamily: MN,
                    fontSize: 12,
                    fontWeight: 500,
                    color: "#000",
                    letterSpacing: "0.02em",
                  }}
                >
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: L2, flexShrink: 0 }} />
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
    <section style={{ padding: `${pv}px ${gv}px`, background: `linear-gradient(180deg,${BG2},${BG})`, position: "relative", zIndex: 2 }}>
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
          <Lbl ch="Six engagement modes" />
          <Ttl ch="HOW WE WORK" />
        </div>
        <div
          style={{
            fontFamily: SN,
            fontSize: 13,
            color: "rgba(0,0,0,0.4)",
            maxWidth: 340,
            textAlign: layout === "mobile" ? "left" : "right",
            lineHeight: 1.6,
          }}
        >
          Click any service to see deliverables, pricing, and timeline.
        </div>
      </div>
      <div>
        <div style={{ background: BG, borderRadius: layout === "mobile" ? 16 : 20, overflow: "hidden", border: `1px solid ${PL}` }}>
          {SERVICES.map((s, i) => (
            <ServiceRow key={s.n} s={s} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessTimeline() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  const showHr = layout === "desktop";
  return (
    <section style={{ padding: `${pv}px ${gv}px`, background: DK, position: "relative", zIndex: 3, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
      <div style={{ marginBottom: layout === "mobile" ? 32 : 48 }}>
        <Lbl ch="Boring is good" lt />
        <Ttl ch="THE PROCESS" lt />
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
          {PROCESS.map((p) => (
            <div key={p.p} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
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
                    animation: "consultancy-pulseRing 2.4s ease-out infinite",
                  }}
                />
                {p.p}
              </div>
              <Chip ch={p.time} bg="rgba(255,255,255,0.08)" cl="rgba(255,255,255,0.7)" sx={{ marginBottom: 12 }} />
              <div
                style={{
                  fontFamily: MN,
                  fontWeight: 600,
                  fontSize: 18,
                  color: "#fff",
                  letterSpacing: "0.03em",
                  marginBottom: 10,
                }}
              >
                {p.t}
              </div>
              <div style={{ fontFamily: SN, fontSize: 12.5, lineHeight: 1.65, color: "rgba(255,255,255,0.45)" }}>{p.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Principles() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  const ps = [
    {
      n: "01",
      t: "Outcome before architecture",
      d:
        "Every engagement starts with the metric we're moving. The model serves the metric — never the reverse.",
    },
    {
      n: "02",
      t: "Boring tech, sharp judgment",
      d: "We pick the simplest stack that solves the problem. We pick fights about everything else.",
    },
    {
      n: "03",
      t: "Audited numbers only",
      d: "Every claim we publish has been signed off by client finance. No marketing math.",
    },
    {
      n: "04",
      t: "Handover, not lock-in",
      d: "We document, train, and leave when asked. The best partnerships outlast our presence.",
    },
  ];
  return (
    <section
      style={{
        padding: `${pv}px ${gv}px`,
        background: `linear-gradient(180deg,${BG},${BG2})`,
        position: "relative",
        zIndex: 4,
        borderRadius: "24px 24px 0 0",
        marginTop: -24,
      }}
    >
      <div
        style={{
          marginBottom: layout === "mobile" ? 28 : 36,
          display: "flex",
          flexDirection: layout === "mobile" ? "column" : "row",
          justifyContent: "space-between",
          alignItems: layout === "mobile" ? "flex-start" : "flex-end",
          gap: layout === "mobile" ? 12 : 0,
        }}
      >
        <div style={{ maxWidth: layout === "mobile" ? "100%" : 520, flex: layout === "mobile" ? "none" : "0 1 auto" }}>
          <Lbl ch="What you can count on" />
          <Ttl ch="PRINCIPLES." sx={{ whiteSpace: layout === "mobile" ? "normal" : "nowrap" }} />
        </div>
        <div
          style={{
            minWidth: 0,
            fontFamily: SN,
            fontSize: 14,
            lineHeight: 1.7,
            color: "rgba(0,0,0,0.55)",
            maxWidth: 540,
            textAlign: layout === "mobile" ? "left" : "right",
          }}
        >
          {
            "The shortlist. We've watched a lot of consulting go sideways for predictable reasons. These four are how we don't."
          }
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: gridCols(layout, 2, 2),
          gap: 1,
          background: PL,
          borderRadius: layout === "mobile" ? 16 : 20,
          overflow: "hidden",
          border: `1px solid ${PL}`,
        }}
      >
        {ps.map((p) => (
          <Tilt key={p.n} int={5}>
            <div style={{ background: `linear-gradient(160deg,${BG},${BG2})`, padding: "34px 32px", height: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
                <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 11, letterSpacing: "0.16em", color: L2 }}>{p.n}</div>
                <div style={{ flex: 1, height: 1, background: PL }} />
              </div>
              <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 20, color: "#000", letterSpacing: "0.03em", lineHeight: 1.3, marginBottom: 14 }}>
                {p.t}
              </div>
              <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.7, color: "rgba(0,0,0,0.55)" }}>{p.d}</div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}

export default function ServicesPageClient() {
  return (
    <ConsultancyLoadedShell label="SERVICES">
      <Nav current="Services" />
      <PageHero
        eyebrow="Services"
        title="STRATEGY,|BUILD, OPERATE.|END-TO-END."
        sub="Six service modes. Mix and match. Pay for what you use. We're equally happy as the strategy partner, the build team, or the on-call ops crew."
        meta={[["Service modes", "6"], ["Avg engagement", "14 weeks"], ["Smallest", "$15K · 2 wks"], ["Largest", "$2.4M · 3 yrs"]]}
        accent="Booking Q3 / Q4 engagements now"
      />
      <Ticker words={["AI Strategy", "Custom AI Dev", "Implementation", "Managed Ops", "Training", "Governance", "Roadmaps", "Bias Audits", "24/7 SLA", "Bootcamps"]} />
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
