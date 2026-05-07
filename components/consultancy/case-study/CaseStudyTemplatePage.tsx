"use client";

import Link from "next/link";
import {
  Chip,
  CTAStrip,
  Footer,
  Lbl,
  Nav,
  Tilt,
  Ttl,
} from "@/components/consultancy/consultancy-ui";
import { ConsultancyLoadedShell } from "@/components/consultancy/ConsultancyLoadedShell";
import { caseStudyPathByClient } from "@/lib/consultancy/case-study-routes";
import type { CaseStudyTemplateData } from "@/lib/consultancy/studies/types";
import { gridCols, sectionGutter, sectionVPad, useLandingLayout } from "@/lib/landing-layout-context";
import { MN, SN } from "@/lib/consultancy/tokens";
import { BG, BG2, DK, L, L2, PL } from "@/lib/consultancy/theme";

function StudyHero({ d }: { d: CaseStudyTemplateData }) {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const titleParts = d.title.split("|").filter(Boolean);
  const stacked = layout !== "desktop";
  return (
    <section style={{ paddingTop: 60, background: DK, position: "relative", borderBottom: "1px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: -200, top: 60, width: 520, height: 520, borderRadius: "50%", background: `radial-gradient(circle,${L}22,transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ paddingLeft: gv, paddingRight: gv, boxSizing: "border-box", width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: stacked ? "1fr" : "320px 1fr", minHeight: stacked ? undefined : 440 }}>
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
                Cases
              </Link>
              <span style={{ opacity: 0.4 }}>/</span>
              <span style={{ color: L2 }}>{d.short}</span>
            </div>
            <Lbl ch={`${d.industry} · ${d.duration}`} lt />
            <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 22, color: "#fff", letterSpacing: "0.03em", marginBottom: 8 }}>
              {d.client}
            </div>
            <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.5)" }}>{d.blurb}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {d.facts.map(([k, v]) => (
              <div
                key={k}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span style={{ fontFamily: MN, fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
                  {k}
                </span>
                <span style={{ fontFamily: MN, fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>{v}</span>
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
              position: "relative",
            }}
          >
          <Chip ch="Case Study" bg={L} cl="#000" sx={{ marginBottom: 24 }} />
          <div
            className="rv"
            style={{
              fontFamily: MN,
              fontWeight: 300,
              fontSize: "clamp(36px,4.8vw,68px)",
              lineHeight: 1.0,
              color: "#fff",
              letterSpacing: "0.04em",
              marginBottom: 32,
              wordBreak: "keep-all",
            }}
          >
            {titleParts.map((part, i) => (
              <div
                key={i}
                style={{
                  fontWeight: i === 0 ? 300 : i === 1 ? 500 : 700,
                  ...(i === 2
                    ? {
                        background: `linear-gradient(90deg,#fff 40%,${L} 60%,#fff 80%)`,
                        backgroundSize: "200% auto",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        animation: "consultancy-shimmer 4s linear infinite",
                      }
                    : {}),
                }}
              >
                {part}
              </div>
            ))}
          </div>
          <div className="rv d3" style={{ fontFamily: SN, fontSize: stacked ? 15 : 16, lineHeight: 1.7, color: "rgba(255,255,255,0.55)", maxWidth: 620 }}>
            {d.lead}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricsBar({ m }: { m: CaseStudyTemplateData["metrics"] }) {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  return (
    <section style={{ padding: `${layout === "mobile" ? 40 : 60}px ${gv}px`, background: DK, position: "relative", zIndex: 2, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: layout === "mobile" ? "1fr" : `repeat(${m.length},1fr)`,
          gap: 1,
          background: "rgba(255,255,255,0.05)",
          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        {m.map((x) => (
          <Tilt
            key={x.l}
            int={6}
            ch={
              <div style={{ background: DK, padding: layout === "mobile" ? "26px 22px" : "36px 30px" }}>
                <div
                  style={{
                    fontFamily: MN,
                    fontWeight: 700,
                    fontSize: layout === "mobile" ? "clamp(28px,7vw,40px)" : 52,
                    color: L,
                    letterSpacing: "0.02em",
                    lineHeight: 1,
                    marginBottom: 14,
                  }}
                >
                  {x.v}
                </div>
                <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 12, letterSpacing: "0.06em", color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>{x.l}</div>
                <div style={{ fontFamily: SN, fontSize: 11, color: "rgba(255,255,255,0.4)" }}>{x.sub}</div>
              </div>
            }
          />
        ))}
      </div>
    </section>
  );
}

function Challenge({ c }: { c: CaseStudyTemplateData["challenge"] }) {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  return (
    <section
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
          <Ttl ch={c.heading} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {c.paragraphs.map((p, i) => (
            <p key={i} style={{ fontFamily: SN, fontSize: 16, lineHeight: 1.8, color: `rgba(0,0,0,${i === 0 ? 0.7 : 0.55})` }}>
              {p}
            </p>
          ))}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: layout === "mobile" ? "1fr" : `repeat(${c.stats.length},1fr)`,
              gap: 1,
              background: PL,
              borderRadius: 14,
              overflow: "hidden",
              border: `1px solid ${PL}`,
              marginTop: 12,
            }}
          >
            {c.stats.map(([v, l]) => (
              <div key={l} style={{ background: BG, padding: "24px" }}>
                <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 30, color: "#000", lineHeight: 1 }}>{v}</div>
                <div style={{ fontFamily: MN, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginTop: 8 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Approach({
  phases,
  intro,
  heading = "FOUR PHASES.",
}: {
  phases: CaseStudyTemplateData["phases"];
  intro?: string;
  heading?: string;
}) {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  const n = phases.length;
  const phaseCols =
    layout === "mobile" ? "1fr" : layout === "tablet" ? (n <= 2 ? `repeat(${n},1fr)` : "repeat(2,1fr)") : `repeat(${n},1fr)`;
  return (
    <section style={{ padding: `${pv}px ${gv}px`, background: BG, position: "relative", zIndex: 4, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
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
          <Ttl ch={heading} />
        </div>
        <div style={{ fontFamily: SN, fontSize: 14, color: "rgba(0,0,0,0.55)", maxWidth: 560, lineHeight: 1.7 }}>
          {intro ?? "Sequenced for cash-flow positive value at every milestone. Each phase paid for the next."}
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: phaseCols,
          gap: 1,
          background: PL,
          borderRadius: layout === "mobile" ? 16 : 20,
          overflow: "hidden",
          border: `1px solid ${PL}`,
        }}
      >
        {phases.map((ph) => (
          <div
            key={ph.n}
            style={{
              background: `linear-gradient(160deg,${BG},${BG2})`,
              padding: "30px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Chip ch={ph.p} />
              <span style={{ fontFamily: MN, fontSize: 9, letterSpacing: "0.1em", color: "rgba(0,0,0,0.4)", fontWeight: 600 }}>{ph.w}</span>
            </div>
            <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 15, color: "#000", letterSpacing: "0.03em", lineHeight: 1.3 }}>{ph.n}</div>
            <div style={{ fontFamily: SN, fontSize: 12, lineHeight: 1.65, color: "rgba(0,0,0,0.5)", flex: 1 }}>{ph.d}</div>
            <div style={{ height: 1, background: PL, marginTop: 6 }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {ph.deliv.map((x) => (
                <div
                  key={x}
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
                  {x}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Quote({ q }: { q: CaseStudyTemplateData["quote"] }) {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  return (
    <section style={{ padding: `${pv}px ${gv}px`, background: DK, position: "relative", zIndex: 5, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
      <div>
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
                letterSpacing: "0.02em",
                color: "rgba(255,255,255,0.85)",
                marginBottom: 32,
                maxWidth: 780,
              }}
            >
              {q.text}
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
                {q.initials}
              </div>
              <div>
                <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 13, color: "#fff" }}>{q.name}</div>
                <div style={{ fontFamily: MN, fontWeight: 500, fontSize: 11, letterSpacing: "0.06em", color: L2, textTransform: "uppercase", marginTop: 4 }}>
                  {q.role}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Related({
  rel,
  ctaLabel,
}: {
  rel: CaseStudyTemplateData["related"];
  ctaLabel?: string;
}) {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  return (
    <section
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
        <Link
          href="/case-studies"
          className="rv d2 hv"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontFamily: MN,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(0,0,0,0.6)",
            textDecoration: "none",
          }}
        >
          {ctaLabel ?? "See all 8 →"}
        </Link>
      </div>
      <div
        className="rv d1"
        style={{
          display: "grid",
          gridTemplateColumns: gridCols(layout, 3, 2),
          gap: 1,
          background: PL,
          borderRadius: layout === "mobile" ? 16 : 20,
          overflow: "hidden",
          border: `1px solid ${PL}`,
        }}
      >
        {rel.map((r) => (
          <Link
            key={r.n}
            href={caseStudyPathByClient(r.n)}
            className="hv"
            style={{
              background: `linear-gradient(160deg,${BG},${BG2})`,
              padding: "30px",
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
              <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 38, color: "#000", lineHeight: 1 }}>{r.v}</div>
              <div style={{ fontFamily: MN, fontSize: 10.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(0,0,0,0.45)" }}>{r.l}</div>
            </div>
            <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 13, color: "#000" }}>{r.n}</div>
            <div style={{ fontFamily: SN, fontSize: 12.5, lineHeight: 1.6, color: "rgba(0,0,0,0.5)" }}>{r.h}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function CaseStudyTemplatePage({
  study,
}: {
  study: CaseStudyTemplateData;
}) {
  const label = study.short;
  return (
    <ConsultancyLoadedShell label={label}>
      <Nav current="Case Studies" />
      <StudyHero d={study} />
      <MetricsBar m={study.metrics} />
      <Challenge c={study.challenge} />
      <Approach phases={study.phases} intro={study.approachIntro} />
      <Quote q={study.quote} />
      <Related rel={study.related} ctaLabel={study.relatedCtaLabel} />
      <CTAStrip
        title={study.cta?.title ?? "WRITE YOUR STORY"}
        sub={study.cta?.sub ?? "Tell us your boldest goal. We'll show you how 3+ peers got there."}
        cta={study.cta?.button ?? "Start a project"}
      />
      <Footer />
    </ConsultancyLoadedShell>
  );
}
