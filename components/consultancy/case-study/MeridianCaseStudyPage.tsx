"use client";

import Link from "next/link";
import { ConsultancyLoadedShell } from "@/components/consultancy/ConsultancyLoadedShell";
import {
  Chip,
  ConsultancyCardGrid,
  ConsultancyInteractiveSurface,
  consultancyOutlineLightPillEnter,
  consultancyOutlineLightPillLeave,
  CTAStrip,
  Footer,
  Lbl,
  Nav,
  Tilt,
  Ttl,
} from "@/components/consultancy/consultancy-ui";
import { caseStudyPathByClient } from "@/lib/consultancy/case-study-routes";
import { gridCols, sectionGutter, sectionVPad, useLandingLayout } from "@/lib/landing-layout-context";
import { CW, MN, MN_WORD_SPACE, OT, SN } from "@/lib/consultancy/tokens";
import { BG, BG2, DK, L, L2, PL } from "@/lib/consultancy/theme";
import { MagneticWrap, ScrollGridItem, ScrollSection } from "@/components/motion/scroll-primitives";

function StudyHero() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const stacked = layout !== "desktop";
  return (
    <ScrollSection as="section" index={0} style={{ paddingTop: 60, background: DK, position: "relative", borderBottom: "1px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: -200, top: 60, width: 520, height: 520, borderRadius: "50%", background: `radial-gradient(circle,${L}22,transparent 70%)`, pointerEvents: "none" }} />
      {!stacked ? (
        <>
          <div style={{ position: "absolute", left: OT, right: OT, top: 60, bottom: 0, border: "1px solid rgba(255,255,255,0.06)", borderTop: "none", pointerEvents: "none" }} />
          <div style={{ position: "absolute", left: OT + CW, top: 60, bottom: 0, width: 1, background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
        </>
      ) : null}
      <div style={{ paddingLeft: gv, paddingRight: gv, boxSizing: "border-box", width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: stacked ? "1fr" : `${CW}px 1fr`, minHeight: stacked ? undefined : 440 }}>
          <div
            className="rvl"
            style={{
              padding: stacked ? "36px 0 28px" : "52px 36px",
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
                <Link href="/case-studies" className="hv" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
                  Case Studies
                </Link>
                <span style={{ opacity: 0.4 }}>/</span>
                <span style={{ color: L2 }}>Meridian</span>
              </div>
              <Lbl ch="Insurance · 9 months" lt />
              <div style={{ fontFamily: MN, fontWeight: 600, fontSize: stacked ? 22 : 24, color: "#fff", letterSpacing: "normal", wordSpacing: MN_WORD_SPACE, marginBottom: 8 }}>Meridian Insurance</div>
              <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.5)" }}>
                Regional P&C carrier serving 240,000 policyholders across the Mountain West. 500+ employees. Founded 1962.
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {(
                [
                  ["Industry", "Insurance · P&C"],
                  ["Engagement", "Strategy · Custom · Managed"],
                  ["Duration", "9 months · ongoing"],
                  ["Team", "6 alien.fi, 4 client"],
                  ["Stack", "Python · PyTorch · AWS · Snowflake"],
                ] as const
              ).map(([k, v]) => (
                <div
                  key={k}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(96px, auto) minmax(0, 1fr)",
                    alignItems: "start",
                    gap: 12,
                    padding: "8px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span style={{ fontFamily: MN, fontSize: 10, fontWeight: 600, letterSpacing: "normal", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", whiteSpace: "normal", lineHeight: 1.2 }}>
                    {k}
                  </span>
                  <span style={{ fontFamily: MN, fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.85)", letterSpacing: "normal", textAlign: "right", lineHeight: 1.25, minWidth: 0, wordBreak: "break-word" }}>
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding: stacked ? "32px 0 44px" : "72px 60px", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative" }}>
            <Chip ch="Featured case study" bg={L} cl="#000" sx={{ marginBottom: 24 }} />
            <div className="rv" style={{ fontFamily: MN, fontWeight: 300, fontSize: "clamp(18px,1.5vw,22px)", lineHeight: 1.1, color: "rgba(255,255,255,0.72)", letterSpacing: "normal", wordSpacing: MN_WORD_SPACE, marginBottom: 16 }}>
              AI FOR INSURANCE COMPANIES:
            </div>
            <div className="rv" style={{ fontFamily: MN, fontWeight: 300, fontSize: "clamp(36px,4.8vw,72px)", lineHeight: 1.0, color: "#fff", letterSpacing: "normal", wordSpacing: MN_WORD_SPACE, marginBottom: 12 }}>
              HOW WE CUT
            </div>
            <div className="rv d1" style={{ fontFamily: MN, fontWeight: 500, fontSize: "clamp(36px,4.8vw,72px)", lineHeight: 1.0, color: "#fff", letterSpacing: "normal", wordSpacing: MN_WORD_SPACE, marginBottom: 12 }}>
              CLAIMS TIME
            </div>
            <div
              className="rv d2"
              style={{
                fontFamily: MN,
                fontWeight: 700,
                fontSize: "clamp(36px,4.8vw,72px)",
                lineHeight: 1.0,
                letterSpacing: "normal",
                wordSpacing: MN_WORD_SPACE,
                background: `linear-gradient(90deg,#fff 40%,${L} 60%,#fff 80%)`,
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "consultancy-shimmer 4s linear infinite",
                marginBottom: 32,
              }}
            >
              BY 62%
            </div>
            <div className="rv d3" style={{ fontFamily: SN, fontSize: stacked ? 15 : 16, lineHeight: 1.7, color: "rgba(255,255,255,0.55)", maxWidth: 620 }}>
              This insurance AI solutions engagement transformed Meridian’s claims operation in nine months. We automated routine claims handling, deployed real-time AI fraud detection insurance models, and unified siloed data, cutting claim cycle time by 62%, reducing fraud losses by $3.2M a year, and lifting CSAT by 38 points.
            </div>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
}

function MetricsBar() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const m = [
    { v: "62%", l: "Faster claims", sub: "Avg days → 5.3 days (–13 days)" },
    { v: "$3.2M", l: "Fraud loss reduction", sub: "In year one" },
    { v: "+38", l: "CSAT points", sub: "NPS +24 net change" },
    { v: "3.1x", l: "First-year ROI", sub: "Payback in 8 months" },
  ];
  return (
    <ScrollSection as="section" index={1} style={{ padding: `${layout === "mobile" ? 40 : 60}px ${gv}px`, background: DK, position: "relative", zIndex: 2, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <ConsultancyCardGrid desktopCols={m.length} tabletCols={m.length} tone="dark">
        {m.map((x, i) => (
          <ScrollGridItem key={x.l} sectionIndex={1} cardIndex={i}>
          <Tilt
            int={6}
            ch={
              <div data-consultancy-magnet="" style={{ background: DK, padding: layout === "mobile" ? "26px 22px" : "36px 30px" }}>
                <div
                  style={{
                    fontFamily: MN,
                    fontWeight: 700,
                    fontSize: layout === "mobile" ? "clamp(28px,7vw,40px)" : 52,
                    color: L,
                    letterSpacing: "normal",
                    lineHeight: 1,
                    marginBottom: 14,
                  }}
                >
                  {x.v}
                </div>
                <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 12, letterSpacing: "normal", color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>{x.l}</div>
                <div style={{ fontFamily: SN, fontSize: 11, color: "rgba(255,255,255,0.4)" }}>{x.sub}</div>
              </div>
            }
          />
          </ScrollGridItem>
        ))}
      </ConsultancyCardGrid>
    </ScrollSection>
  );
}

function Challenge() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  const stats = [
    ["14 days", "Avg claim cycle"],
    ["$6.8M", "Annual fraud loss"],
    ["60%", "Adjuster re-keying time"],
  ] as const;
  return (
    <ScrollSection
      as="section"
      index={2}
      style={{
        padding: `${pv}px ${gv}px`,
        background: `linear-gradient(180deg,${BG2},${BG})`,
        position: "relative",
        zIndex: 3,
        borderRadius: "24px 24px 0 0",
        marginTop: -24,
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: layout === "desktop" ? "320px 1fr" : "1fr", gap: layout === "mobile" ? 28 : 60 }}>
        <div className="rvl">
          <Lbl ch="The challenge" />
          <Ttl ch="STUCK IN PAPER." />
        </div>
        <div className="rv d1" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <p style={{ fontFamily: SN, fontSize: 16, lineHeight: 1.8, color: "rgba(0,0,0,0.7)" }}>
            Meridian’s claims operation was buried in manual work. Average claim took 14 days to close, and adjusters spent 60% of their day re-keying data from PDFs into legacy systems. Fraud losses were creeping up year over year, but the SIU team was overwhelmed reviewing low-priority cases. Leadership had already tested multiple AI for insurance companies pilots with other vendors; each produced a fragile chatbot and no measurable AI ROI. The board was AI-skeptical and wanted audited outcomes or nothing.
          </p>
          <ConsultancyCardGrid
            desktopCols={stats.length}
            tabletCols={stats.length}
            tone="light"
            borderRadius={14}
            style={{ marginTop: 12 }}
          >
            {stats.map(([v, l], i) => (
              <ScrollGridItem key={l} sectionIndex={2} cardIndex={i}>
              <div style={{ background: BG, padding: "24px" }}>
                <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 30, color: "#000", lineHeight: 1, letterSpacing: "normal" }}>{v}</div>
                <div style={{ fontFamily: MN, fontSize: 10, letterSpacing: "normal", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginTop: 8 }}>{l}</div>
              </div>
              </ScrollGridItem>
            ))}
          </ConsultancyCardGrid>
        </div>
      </div>
    </ScrollSection>
  );
}

function Approach() {
  const phases = [
    {
      p: "Phase 1",
      w: "Weeks 1–8",
      n: "Claims Automation",
      d: "",
      deliverables: [
        "NLP-powered extraction automated 70% of intake from PDFs and email",
        "Routing rules engine prioritized and assigned claims in real time",
        "Adjuster cockpit UI surfaced next-best actions and required documents",
        "Audit trail logging satisfied compliance and regulator review needs",
      ],
    },
    {
      p: "Phase 2",
      w: "Weeks 8–16",
      n: "Fraud Detection AI",
      d: "",
      deliverables: [
        "Real-time ML model scored every claim with AI fraud detection insurance features",
        "Gradient-boosted models trained on 3 years of historical loss data",
        "Feature store on Snowflake powered SHAP explanations for regulators",
        "SIU triage workflows pushed only high-risk claims for human review",
      ],
    },
    {
      p: "Phase 3",
      w: "Weeks 16–22",
      n: "Customer Experience AI",
      d: "",
      deliverables: [
        "Multi-turn claims status chatbot for policyholders, 24/7",
        "Voice channel integration for phone-based updates",
        "Knowledge-base FAQ for common coverage questions",
        "Agent handoff protocol preserved full conversation context",
      ],
    },
    {
      p: "Phase 4",
      w: "Weeks 22–36",
      n: "Unified Data Platform",
      d: "",
      deliverables: [
        "Snowflake warehouse consolidated policy, claims, and SIU data",
        "ETL/ELT transformation layer standardized inconsistent source systems",
        "Real-time CDC pipelines pushed events to downstream apps and dashboards",
        "Executive dashboards surfaced AI ROI and operational KPIs by line of business",
      ],
    },
  ];
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  const n = phases.length;
  const tabletPhaseCols = n <= 2 ? n : 2;
  return (
    <ScrollSection as="section" index={3} style={{ padding: `${pv}px ${gv}px`, background: BG, position: "relative", zIndex: 4, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
      <div
        style={{
          marginBottom: layout === "mobile" ? 32 : 48,
          display: "grid",
          gridTemplateColumns: layout === "desktop" ? "320px 1fr" : "1fr",
          gap: layout === "mobile" ? 20 : 60,
          alignItems: layout === "mobile" ? "start" : "flex-end",
        }}
      >
        <div className="rvl">
          <Lbl ch="The approach" />
          <Ttl ch="FOUR PHASES." />
        </div>
        <div className="rv d1" style={{ fontFamily: SN, fontSize: 14, color: "rgba(0,0,0,0.55)", maxWidth: 480, lineHeight: 1.7 }}>
          We sequenced the insurance AI solutions program into four phases, each designed to be cash-flow positive on its own. Every phase shipped to production, generated visible AI ROI, and de-risked the next layer of AI for insurance companies.
        </div>
      </div>
      <ConsultancyCardGrid className="rv d1" desktopCols={n} tabletCols={tabletPhaseCols} tone="light">
        {phases.map((p, i) => (
          <ScrollGridItem key={p.n} sectionIndex={3} cardIndex={i}>
          <ConsultancyInteractiveSurface variant="gradient" style={{ padding: "30px 28px", display: "flex", flexDirection: "column", gap: 14, height: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
              <Chip ch={p.p} />
              <span
                style={{
                  fontFamily: MN,
                  fontSize: 11,
                  letterSpacing: "normal",
                  color: "rgba(0,0,0,0.62)",
                  fontWeight: 600,
                  textAlign: "right",
                  lineHeight: 1.35,
                }}
              >
                {p.w}
              </span>
            </div>
            <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 15, color: "#000", letterSpacing: "normal", lineHeight: 1.3 }}>{p.n}</div>
            <div style={{ fontFamily: SN, fontSize: 12, lineHeight: 1.65, color: "rgba(0,0,0,0.5)", flex: 1 }}>{p.d}</div>
            <div style={{ height: 1, background: PL, marginTop: 6 }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {p.deliverables.map((d) => (
                <div
                  key={d}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 8,
                    fontFamily: MN,
                    fontSize: 10.5,
                    fontWeight: 500,
                    color: "rgba(0,0,0,0.55)",
                    lineHeight: 1.5,
                  }}
                >
                  <div style={{ width: 4, height: 4, borderRadius: "50%", background: L2, flexShrink: 0, marginTop: 6 }} />
                  {d}
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

function Quote() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  return (
    <ScrollSection as="section" index={4} style={{ padding: `${pv}px ${gv}px`, background: DK, position: "relative", zIndex: 5, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
      <div className="rv">
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 20,
            padding: layout === "mobile" ? "32px 22px" : "56px 64px",
            display: "grid",
            gridTemplateColumns: layout === "desktop" ? "auto 1fr" : "1fr",
            gap: layout === "mobile" ? 20 : 40,
          }}
        >
          <div style={{ fontSize: layout === "mobile" ? 72 : 120, lineHeight: 0.7, color: L, fontFamily: "Georgia, serif", marginTop: -12 }}>&quot;</div>
          <div>
            <div
              style={{
                fontFamily: MN,
                fontWeight: 400,
                fontSize: layout === "mobile" ? 17 : 22,
                lineHeight: 1.6,
                letterSpacing: "normal",
                color: "rgba(255,255,255,0.85)",
                marginBottom: 32,
                maxWidth: 780,
              }}
            >
              “alien.fi didn’t just deliver technology :- they delivered a transformation. Their team understood our business deeply, proposed insurance AI solutions that were realistic and well-scoped, and stood by us through every phase. We’ve already extended into a multi-year managed services partnership.”
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg,${L},${L2})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: MN,
                  fontWeight: 700,
                  fontSize: 18,
                  color: "#000",
                }}
              >
                SR
              </div>
              <div>
                <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 13, color: "#fff", letterSpacing: "normal" }}>Sarah Reyes</div>
                <div style={{ fontFamily: MN, fontWeight: 500, fontSize: 11, letterSpacing: "normal", color: L2, textTransform: "uppercase", marginTop: 4 }}>
                  Chief Operations Officer, Meridian Insurance
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
}

function Related() {
  const related = [
    {
      n: "Kestrel Bank",
      i: "Financial Services",
      v: "$47M",
      l: "Fraud recovered",
      h: "Real-time fraud model recovered $47M in year one with <60ms scoring latency, forming one of our flagship AI for insurance companies–adjacent banking deployments.",
    },
    {
      n: "Northbay Health",
      i: "Healthcare",
      v: "41%",
      l: "Less charting",
      h: "EHR copilots rolled out to 1,800 clinicians cut documentation time 41% and became a reference point for other regulated industries adopting AI.",
    },
    {
      n: "Civica State Agency",
      i: "Government",
      v: "$28M",
      l: "Recovered",
      h: "Benefits fraud ML recovered $28M in one year while reducing false positives 38%, validating our playbook for public-sector fraud and risk programs.",
    },
  ];
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  return (
    <ScrollSection
      as="section"
      index={5}
      style={{
        padding: `${pv}px ${gv}px`,
        background: `linear-gradient(180deg,${BG},${BG2})`,
        position: "relative",
        zIndex: 6,
        borderRadius: "24px 24px 0 0",
        marginTop: -24,
      }}
    >
      <div
        style={{
          marginBottom: 40,
          display: "flex",
          flexDirection: layout === "mobile" ? "column" : "row",
          alignItems: layout === "mobile" ? "flex-start" : "flex-end",
          justifyContent: "space-between",
          gap: layout === "mobile" ? 16 : 0,
        }}
      >
        <div className="rv">
          <Lbl ch="More like this" />
          <Ttl ch="RELATED STUDIES" />
        </div>
        <MagneticWrap strength={0.35} style={{ display: "inline-flex" }}>
          <Link
            href="/case-studies"
            className="rv d2"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: MN,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "normal",
              textTransform: "uppercase",
              color: "rgba(0,0,0,0.6)",
              textDecoration: "none",
              border: `1px solid ${PL}`,
              borderRadius: 999,
              padding: "10px 20px",
              cursor: "pointer",
              transition: "background .2s,color .2s,border-color .2s,box-shadow .2s,transform .15s",
            }}
            onMouseEnter={consultancyOutlineLightPillEnter}
            onMouseLeave={consultancyOutlineLightPillLeave}
          >
            See all →
          </Link>
        </MagneticWrap>
      </div>
      <ConsultancyCardGrid className="rv d1" desktopCols={3} tabletCols={2} tone="light">
        {related.map((r, i) => (
          <ScrollGridItem key={r.n} sectionIndex={5} cardIndex={i}>
          <Link
            href={caseStudyPathByClient(r.n)}
            className="hv"
            style={{
              background: `linear-gradient(160deg,${BG},${BG2})`,
              padding: "30px 30px",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              transition: "background .25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `linear-gradient(160deg,rgb(220,244,200),${BG2})`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `linear-gradient(160deg,${BG},${BG2})`;
            }}
          >
            <Chip ch={r.i} />
            <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
              <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 38, color: "#000", lineHeight: 1, letterSpacing: "normal" }}>{r.v}</div>
              <div style={{ fontFamily: MN, fontSize: 10.5, letterSpacing: "normal", textTransform: "uppercase", color: "rgba(0,0,0,0.45)" }}>{r.l}</div>
            </div>
            <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 13, color: "#000", letterSpacing: "normal" }}>{r.n}</div>
            <div style={{ fontFamily: SN, fontSize: 12.5, lineHeight: 1.6, color: "rgba(0,0,0,0.5)" }}>{r.h}</div>
          </Link>
          </ScrollGridItem>
        ))}
      </ConsultancyCardGrid>
    </ScrollSection>
  );
}

export function MeridianCaseStudyPage() {
  return (
    <ConsultancyLoadedShell label="MERIDIAN">
      <Nav current="Case Studies" />
      <StudyHero />
      <MetricsBar />
      <Challenge />
      <Approach />
      <Quote />
      <Related />
      <CTAStrip
        title="WRITE YOUR|STORY"
        sub="Tell us your most painful metric. We’ll show you how AI for insurance companies like Meridian turned similar baselines into audited results :- and outline three insurance AI solutions paths that could deliver measurable AI ROI for your book within 9 months."
        cta="Start a Project ↗"
        ctaUppercase={false}
      />
      <Footer />
    </ConsultancyLoadedShell>
  );
}
