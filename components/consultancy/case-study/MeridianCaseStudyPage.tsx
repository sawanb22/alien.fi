"use client";

import Link from "next/link";
import { ConsultancyLoadedShell } from "@/components/consultancy/ConsultancyLoadedShell";
import {
  Chip,
  CTAStrip,
  Footer,
  Lbl,
  Nav,
  Tilt,
  Ttl,
} from "@/components/consultancy/consultancy-ui";
import { caseStudyPathByClient } from "@/lib/consultancy/case-study-routes";
import { CW, MN, OT, SN } from "@/lib/consultancy/tokens";
import { BG, BG2, DK, L, L2, PL } from "@/lib/consultancy/theme";

function StudyHero() {
  return (
    <section style={{ paddingTop: 60, background: DK, position: "relative", borderBottom: "1px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: -200, top: 60, width: 520, height: 520, borderRadius: "50%", background: `radial-gradient(circle,${L}22,transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: OT, right: OT, top: 60, bottom: 0, border: "1px solid rgba(255,255,255,0.06)", borderTop: "none", pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: OT + CW, top: 60, bottom: 0, width: 1, background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
      <div style={{ display: "grid", gridTemplateColumns: `${CW}px 1fr`, minHeight: 440 }}>
        <div className="rvl" style={{ padding: "52px 36px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 24 }}>
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
            <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 24, color: "#fff", letterSpacing: "0.03em", marginBottom: 8 }}>Meridian Insurance</div>
            <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.5)" }}>
              Regional P&C carrier serving 240,000 policyholders across the Mountain West. 500+ employees. Founded 1962.
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {(
              [
                ["Industry", "Insurance · P&C"],
                ["Engagement", "Strategy + Custom + Managed"],
                ["Duration", "9 months · ongoing"],
                ["Team", "6 alien.fi · 4 client"],
                ["Stack", "Python · PyTorch · AWS · Snowflake"],
              ] as const
            ).map(([k, v]) => (
              <div key={k} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ fontFamily: MN, fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
                  {k}
                </span>
                <span style={{ fontFamily: MN, fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.85)", letterSpacing: "0.02em" }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: "72px 60px", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative" }}>
          <Chip ch="Featured Case Study" bg={L} cl="#000" sx={{ marginBottom: 24 }} />
          <div className="rv" style={{ fontFamily: MN, fontWeight: 300, fontSize: "clamp(40px,5vw,72px)", lineHeight: 1.0, color: "#fff", letterSpacing: "0.04em", marginBottom: 12 }}>
            HOW WE CUT
          </div>
          <div className="rv d1" style={{ fontFamily: MN, fontWeight: 500, fontSize: "clamp(40px,5vw,72px)", lineHeight: 1.0, color: "#fff", letterSpacing: "0.04em", marginBottom: 12 }}>
            CLAIMS TIME
          </div>
          <div
            className="rv d2"
            style={{
              fontFamily: MN,
              fontWeight: 700,
              fontSize: "clamp(40px,5vw,72px)",
              lineHeight: 1.0,
              letterSpacing: "0.04em",
              background: `linear-gradient(90deg,#fff 40%,${L} 60%,#fff 80%)`,
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "consultancy-shimmer 4s linear infinite",
              marginBottom: 32,
            }}
          >
            BY 62%.
          </div>
          <div className="rv d3" style={{ fontFamily: SN, fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.55)", maxWidth: 620 }}>
            A 9-month transformation that automated routine claims, deployed real-time fraud ML, and saved $3.2M in fraud losses while lifting CSAT 38 points.
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricsBar() {
  const m = [
    { v: "62%", l: "Faster claims", sub: "14 days → 5.3 days" },
    { v: "$3.2M", l: "Fraud loss reduction", sub: "In year one" },
    { v: "+38", l: "CSAT points", sub: "NPS +24 net change" },
    { v: "3.1×", l: "First-year ROI", sub: "Payback in 5.8 months" },
  ];
  return (
    <section style={{ padding: `60px ${OT}px`, background: DK, position: "relative", zIndex: 2, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="rv d1" style={{ padding: "0 9px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: "rgba(255,255,255,0.05)", borderRadius: 20, overflow: "hidden" }}>
        {m.map((x) => (
          <Tilt key={x.l} int={6}>
            <div style={{ background: DK, padding: "36px 30px" }}>
              <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 52, color: L, letterSpacing: "0.02em", lineHeight: 1, marginBottom: 14 }}>{x.v}</div>
              <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 12, letterSpacing: "0.06em", color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>{x.l}</div>
              <div style={{ fontFamily: SN, fontSize: 11, color: "rgba(255,255,255,0.4)" }}>{x.sub}</div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}

function Challenge() {
  return (
    <section style={{ padding: `80px ${OT}px`, background: `linear-gradient(180deg,${BG2},${BG})`, position: "relative", zIndex: 3, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
      <div style={{ padding: "0 9px", display: "grid", gridTemplateColumns: "320px 1fr", gap: 60 }}>
        <div className="rvl">
          <Lbl ch="The challenge" />
          <Ttl ch="STUCK IN PAPER." />
        </div>
        <div className="rv d1" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <p style={{ fontFamily: SN, fontSize: 16, lineHeight: 1.8, color: "rgba(0,0,0,0.7)" }}>
            Meridian's claims operation was buried. Average claim took 14 days to close. Adjusters spent 60% of their day re-keying data from PDFs into legacy systems. Fraud losses were creeping up year over year — but the SIU team was overwhelmed reviewing low-priority cases.
          </p>
          <p style={{ fontFamily: SN, fontSize: 16, lineHeight: 1.8, color: "rgba(0,0,0,0.55)" }}>
            Leadership had piloted three "AI" vendors over four years. Each promised transformation. Each delivered a fragile chatbot. The board was AI-skeptical and wanted measurable, audited results — or nothing.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1, background: PL, borderRadius: 14, overflow: "hidden", border: `1px solid ${PL}`, marginTop: 12 }}>
            {(
              [
                ["14 days", "Avg claim cycle"],
                ["$6.8M", "Annual fraud loss"],
                ["60%", "Adjuster re-keying time"],
              ] as const
            ).map(([v, l]) => (
              <div key={l} style={{ background: BG, padding: "24px 24px" }}>
                <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 30, color: "#000", lineHeight: 1, letterSpacing: "0.02em" }}>{v}</div>
                <div style={{ fontFamily: MN, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginTop: 8 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const phases = [
    {
      p: "Phase 1",
      w: "Wks 1–8",
      n: "Claims Automation",
      d: "NLP-powered extraction automated 70% of routine claims intake and routing. Adjuster dashboard surfaced ranked next-actions.",
      deliverables: ["LLM extraction layer", "Routing rules engine", "Adjuster cockpit UI", "Audit trail logging"],
    },
    {
      p: "Phase 2",
      w: "Wks 9–18",
      n: "Fraud Detection AI",
      d: "Real-time ML model scores every claim within 50ms before payout. SHAP explanations surface for SIU review queue.",
      deliverables: ["Gradient-boosted model", "Feature store on Snowflake", "SHAP-based XAI layer", "SIU triage workflow"],
    },
    {
      p: "Phase 3",
      w: "Wks 19–28",
      n: "Customer Experience AI",
      d: "Conversational assistant handles policy lookup, FNOL, and status checks 24/7. Live agent handoff in 4% of sessions.",
      deliverables: ["Multi-turn chatbot", "Voice channel (Twilio)", "Knowledge base RAG", "Agent handoff protocol"],
    },
    {
      p: "Phase 4",
      w: "Wks 29–36",
      n: "Unified Data Platform",
      d: "Integrated 6 siloed systems into a centralized Snowflake pipeline. Powered all upstream models and exec dashboards.",
      deliverables: ["Snowflake warehouse", "dbt transformation layer", "Real-time CDC pipelines", "Executive dashboards"],
    },
  ];
  return (
    <section style={{ padding: `80px ${OT}px`, background: BG, position: "relative", zIndex: 4, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
      <div style={{ padding: "0 9px", marginBottom: 48, display: "grid", gridTemplateColumns: "320px 1fr", gap: 60, alignItems: "flex-end" }}>
        <div className="rvl">
          <Lbl ch="The approach" />
          <Ttl ch="FOUR PHASES." />
        </div>
        <div className="rv d1" style={{ fontFamily: SN, fontSize: 14, color: "rgba(0,0,0,0.55)", maxWidth: 480, lineHeight: 1.7 }}>
          Sequenced for cash-flow positive value at every milestone. Each phase paid for the next.
        </div>
      </div>
      <div className="rv d1" style={{ padding: "0 9px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: PL, borderRadius: 20, overflow: "hidden", border: `1px solid ${PL}` }}>
        {phases.map((p) => (
          <div key={p.n} style={{ background: `linear-gradient(160deg,${BG},${BG2})`, padding: "30px 28px", display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Chip ch={p.p} />
              <span style={{ fontFamily: MN, fontSize: 9, letterSpacing: "0.1em", color: "rgba(0,0,0,0.4)", fontWeight: 600 }}>{p.w}</span>
            </div>
            <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 15, color: "#000", letterSpacing: "0.03em", lineHeight: 1.3 }}>{p.n}</div>
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
          </div>
        ))}
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section style={{ padding: `80px ${OT}px`, background: DK, position: "relative", zIndex: 5, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
      <div className="rv" style={{ padding: "0 9px" }}>
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "56px 64px", display: "grid", gridTemplateColumns: "auto 1fr", gap: 40 }}>
          <div style={{ fontSize: 120, lineHeight: 0.7, color: L, fontFamily: "Georgia, serif", marginTop: -12 }}>&quot;</div>
          <div>
            <div style={{ fontFamily: MN, fontWeight: 400, fontSize: 22, lineHeight: 1.6, letterSpacing: "0.02em", color: "rgba(255,255,255,0.85)", marginBottom: 32, maxWidth: 780 }}>
              alien.fi didn't just deliver technology — they delivered a transformation. Their team understood our business deeply, proposed solutions that were realistic and well-scoped, and stood by us through every phase. We've already extended into a multi-year managed services partnership.
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
                <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 13, color: "#fff", letterSpacing: "0.02em" }}>Sarah Reyes</div>
                <div style={{ fontFamily: MN, fontWeight: 500, fontSize: 11, letterSpacing: "0.06em", color: L2, textTransform: "uppercase", marginTop: 4 }}>
                  Chief Operations Officer · Meridian Insurance
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Related() {
  const related = [
    {
      n: "Kestrel Bank",
      i: "Financial Services",
      v: "$47M",
      l: "Fraud recovered",
      h: "Real-time fraud model recovered $47M in year one with <50ms scoring latency.",
    },
    {
      n: "NorthBay Health",
      i: "Healthcare",
      v: "41%",
      l: "Less charting",
      h: "EHR copilot rolled out to 1,800 clinicians cut documentation time 41%.",
    },
    {
      n: "Civica State Agency",
      i: "Government",
      v: "$28M",
      l: "Recovered",
      h: "Benefits fraud ML recovered $28M in year one while reducing false positives 38%.",
    },
  ];
  return (
    <section style={{ padding: `80px ${OT}px`, background: `linear-gradient(180deg,${BG},${BG2})`, position: "relative", zIndex: 6, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
      <div style={{ padding: "0 9px", marginBottom: 40, display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
        <div className="rv">
          <Lbl ch="More like this" />
          <Ttl ch="RELATED STUDIES" />
        </div>
        <Link href="/case-studies" className="rv d2 hv" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: MN, fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(0,0,0,0.6)", textDecoration: "none" }}>
          See all 8 →
        </Link>
      </div>
      <div className="rv d1" style={{ padding: "0 9px", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: PL, borderRadius: 20, overflow: "hidden", border: `1px solid ${PL}` }}>
        {related.map((r) => (
          <Link
            key={r.n}
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
              <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 38, color: "#000", lineHeight: 1, letterSpacing: "0.02em" }}>{r.v}</div>
              <div style={{ fontFamily: MN, fontSize: 10.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(0,0,0,0.45)" }}>{r.l}</div>
            </div>
            <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 13, color: "#000", letterSpacing: "0.03em" }}>{r.n}</div>
            <div style={{ fontFamily: SN, fontSize: 12.5, lineHeight: 1.6, color: "rgba(0,0,0,0.5)" }}>{r.h}</div>
          </Link>
        ))}
      </div>
    </section>
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
      <CTAStrip title="WRITE YOUR STORY" sub="Tell us your most painful operational metric. We'll show you 3 ways AI could move it within 9 months." />
      <Footer />
    </ConsultancyLoadedShell>
  );
}
