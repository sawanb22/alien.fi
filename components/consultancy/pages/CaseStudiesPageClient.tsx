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
import { gridCols, sectionGutter, sectionVPad, useLandingLayout } from "@/lib/landing-layout-context";
import { MN, SN } from "@/lib/consultancy/tokens";
import { BG, BG2, DK, L, L2, PL } from "@/lib/consultancy/theme";
import { useMemo, useState } from "react";

type StudyHub = {
  id: string;
  industry: string;
  client: string;
  blurb: string;
  duration: string;
  headline: string;
  hero: string;
  heroLbl: string;
  services: string[];
  featured?: boolean;
};

const STUDIES: StudyHub[] = [
  {
    id: "meridian-insurance",
    industry: "Insurance",
    client: "Meridian Insurance",
    blurb: "Regional P&C carrier · 500+ employees",
    duration: "9 months",
    headline: "9-month transformation cut claims time 62% and saved $3.2M in fraud losses.",
    hero: "62%",
    heroLbl: "Faster claims",
    services: ["Strategy", "Custom Dev", "Managed"],
    featured: true,
  },
  {
    id: "northbay-health",
    industry: "Healthcare",
    client: "NorthBay Health",
    blurb: "Regional health system · 12 hospitals",
    duration: "14 months",
    headline: "EHR copilot rolled out to 1,800 clinicians cut documentation time 41%.",
    hero: "41%",
    heroLbl: "Less charting",
    services: ["Custom Dev", "Managed"],
  },
  {
    id: "kestrel-bank",
    industry: "Financial Services",
    client: "Kestrel Bank",
    blurb: "Top-50 US bank · $48B AUM",
    duration: "11 months",
    headline: "Real-time fraud model recovered $47M in year one with <50ms scoring latency.",
    hero: "$47M",
    heroLbl: "Fraud recovered",
    services: ["Strategy", "Custom", "Managed"],
  },
  {
    id: "redline-logistics",
    industry: "Logistics",
    client: "Redline Logistics",
    blurb: "Regional 3PL · 200 trucks",
    duration: "7 months",
    headline: "Route optimization + ETA prediction cut fuel costs 21% across the fleet.",
    hero: "21%",
    heroLbl: "Fuel savings",
    services: ["Custom", "Managed"],
  },
  {
    id: "oakridge-industrial",
    industry: "Manufacturing",
    client: "Oakridge Industrial",
    blurb: "Tier-1 auto supplier · 4 plants",
    duration: "10 months",
    headline: "Predictive maintenance and CV quality control cut downtime 34% in 9 months.",
    hero: "34%",
    heroLbl: "Less downtime",
    services: ["Custom", "CV", "Managed"],
  },
  {
    id: "aurora-retail",
    industry: "Retail",
    client: "Aurora Retail Group",
    blurb: "$2B specialty retailer · 340 stores",
    duration: "8 months",
    headline: "Personalization engine drove 18% conversion lift and 24% larger basket sizes.",
    hero: "18%",
    heroLbl: "Conv. lift",
    services: ["Custom", "Managed"],
  },
  {
    id: "lumen-legal",
    industry: "Legal",
    client: "Lumen Legal",
    blurb: "AmLaw 100 firm · 1,200 attorneys",
    duration: "12 months",
    headline: "Contract review AI eliminated 82% of routine redline time across M&A practice.",
    hero: "82%",
    heroLbl: "Faster review",
    services: ["Custom", "Governance"],
  },
  {
    id: "civica-state",
    industry: "Government",
    client: "Civica State Agency",
    blurb: "State benefits dept · 3M residents",
    duration: "15 months",
    headline: "Benefits fraud ML recovered $28M in year one while reducing false positives 38%.",
    hero: "$28M",
    heroLbl: "Recovered",
    services: ["Custom", "Governance"],
  },
];

function Filters({
  active,
  setActive,
  counts,
}: {
  active: string;
  setActive: (c: string) => void;
  counts: Record<string, number>;
}) {
  const cats = useMemo(() => ["All", ...Array.from(new Set(STUDIES.map((s) => s.industry)))], []);
  return (
    <div className="rv d1" style={{ padding: "0 9px", marginBottom: 32, display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
      <span style={{ fontFamily: MN, fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginRight: 8 }}>
        Filter:
      </span>
      {cats.map((c) => {
        const isActive = active === c;
        return (
          <button
            key={c}
            type="button"
            className="hv"
            onClick={() => setActive(c)}
            style={{
              background: isActive ? "#000" : `rgb(229,231,245)`,
              color: isActive ? L : "rgba(0,0,0,0.6)",
              border: "none",
              borderRadius: 20,
              padding: "8px 16px",
              fontFamily: MN,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.1em",
              cursor: "none",
              transition: "background .2s",
              textTransform: "uppercase",
            }}
          >
            {c}{" "}
            <span style={{ opacity: 0.5, marginLeft: 6 }}>{counts[c] ?? 0}</span>
          </button>
        );
      })}
    </div>
  );
}

function FeaturedCard({ s }: { s: StudyHub }) {
  const layout = useLandingLayout();
  const [hov, setHov] = useState(false);
  return (
    <Link
      href={`/case-studies/${s.id}`}
      className="rv d1 hv"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "grid",
        gridTemplateColumns: layout === "mobile" ? "1fr" : "1fr 1.2fr",
        background: DK,
        borderRadius: 20,
        overflow: "hidden",
        gridColumn: "1 / -1",
        textDecoration: "none",
        position: "relative",
        marginBottom: 1,
        transition: "transform .25s",
        transform: hov ? "translateY(-4px)" : "none",
      }}
    >
      <div
        style={{
          padding: layout === "mobile" ? "32px 22px" : "48px 44px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 24,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", right: -100, top: -100, width: 280, height: 280, borderRadius: "50%", background: `radial-gradient(circle,${L}22,transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
            <Chip ch="Featured" bg={L} cl="#000" />
            <Chip ch={s.industry} bg="rgba(255,255,255,0.08)" cl="rgba(255,255,255,0.7)" />
          </div>
          <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 22, color: "#fff", letterSpacing: "0.03em", marginBottom: 6 }}>{s.client}</div>
          <div style={{ fontFamily: SN, fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 24 }}>{s.blurb}</div>
          <div style={{ fontFamily: MN, fontWeight: 500, fontSize: "clamp(22px,2vw,30px)", lineHeight: 1.3, color: "#fff", letterSpacing: "0.02em", maxWidth: 480 }}>
            {s.headline}
          </div>
        </div>
        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontFamily: MN,
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: hov ? L : L2,
              transition: "color .2s",
            }}
          >
            Read full study <Arr sz={11} cl={hov ? L : L2} sw={2.2} />
          </div>
          <div style={{ height: 1, flex: 1, background: "rgba(255,255,255,0.1)" }} />
          <div style={{ fontFamily: MN, fontSize: 10, letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)" }}>{s.duration}</div>
        </div>
      </div>
      <div
        style={{
          background: `linear-gradient(135deg,${L},${L2})`,
          padding: layout === "mobile" ? "32px 22px" : "48px 44px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `repeating-linear-gradient(90deg,transparent 0,transparent 60px,rgba(0,0,0,0.04) 60px,rgba(0,0,0,0.04) 61px),repeating-linear-gradient(0deg,transparent 0,transparent 60px,rgba(0,0,0,0.04) 60px,rgba(0,0,0,0.04) 61px)`,
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", fontFamily: MN, fontWeight: 700, fontSize: "clamp(80px,9vw,140px)", color: "#000", lineHeight: 0.95, letterSpacing: "0.02em" }}>
          {s.hero}
        </div>
        <div style={{ position: "relative", fontFamily: MN, fontWeight: 600, fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase", color: "#000", marginTop: 14, opacity: 0.7 }}>{s.heroLbl}</div>
        <div style={{ position: "relative", display: "flex", gap: 8, marginTop: 32, flexWrap: "wrap" }}>
          {s.services.map((sv) => (
            <div key={sv} style={{ padding: "5px 12px", background: "rgba(0,0,0,0.08)", borderRadius: 6, fontFamily: MN, fontSize: 10, fontWeight: 600, letterSpacing: "0.06em", color: "#000" }}>
              {sv}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}

function StudyCard({ s, delayClass }: { s: StudyHub; delayClass: string }) {
  const layout = useLandingLayout();
  const [hov, setHov] = useState(false);
  return (
    <Link
      href={`/case-studies/${s.id}`}
      className={`rv ${delayClass} hv`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? `linear-gradient(160deg,rgb(220,244,200),${BG2})` : `linear-gradient(160deg,${BG},${BG2})`,
        padding: layout === "mobile" ? "22px 18px" : "30px 30px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        textDecoration: "none",
        transition: "background .25s,transform .25s",
        transform: hov ? "translateY(-3px)" : "none",
        boxShadow: hov ? `inset 0 0 0 1.5px ${L}66` : "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <Chip ch={s.industry} />
        <Arr sz={10} cl={hov ? "#000" : PL} sw={2} />
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
        <div
          style={{
            fontFamily: MN,
            fontWeight: 700,
            fontSize: layout === "mobile" ? "clamp(28px,8vw,36px)" : 42,
            color: "#000",
            letterSpacing: "0.02em",
            lineHeight: 1,
          }}
        >
          {s.hero}
        </div>
        <div style={{ fontFamily: MN, fontWeight: 500, fontSize: 10.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(0,0,0,0.45)" }}>{s.heroLbl}</div>
      </div>
      <div style={{ height: 1, background: hov ? L2 : PL, transition: "background .25s" }} />
      <div>
        <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 13, color: "#000", letterSpacing: "0.03em" }}>{s.client}</div>
        <div style={{ fontFamily: SN, fontSize: 11, color: "rgba(0,0,0,0.45)", marginTop: 2 }}>{s.blurb}</div>
      </div>
      <div style={{ fontFamily: SN, fontSize: 12.5, lineHeight: 1.6, color: "rgba(0,0,0,0.55)", flex: 1 }}>{s.headline}</div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 6, paddingTop: 12, borderTop: `1px solid ${PL}` }}>
        <div style={{ fontFamily: MN, fontSize: 10, color: "rgba(0,0,0,0.4)", letterSpacing: "0.06em" }}>{s.duration}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: MN, fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: hov ? L2 : "rgba(0,0,0,0.4)", transition: "color .2s" }}>
          Read study <Arr sz={9} cl={hov ? L2 : "rgba(0,0,0,0.4)"} sw={1.8} />
        </div>
      </div>
    </Link>
  );
}

function Grid() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  const [active, setActive] = useState("All");
  const counts: Record<string, number> = { All: STUDIES.length };
  STUDIES.forEach((s) => {
    counts[s.industry] = (counts[s.industry] ?? 0) + 1;
  });
  const filtered = STUDIES.filter((s) => active === "All" || s.industry === active);
  const featured = filtered.find((s) => s.featured);
  const rest = filtered.filter((s) => !s.featured);
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
        <div className="rv">
          <Lbl ch="Eight stories" />
          <Ttl ch="REAL OUTCOMES" />
        </div>
        <div className="rv d2" style={{ fontFamily: SN, fontSize: 13, color: "rgba(0,0,0,0.4)", maxWidth: 300, textAlign: layout === "mobile" ? "left" : "right", lineHeight: 1.6 }}>
          Production deployments. Audited numbers. Boring buzzwords removed.
        </div>
      </div>
      <Filters active={active} setActive={setActive} counts={counts} />
      <div
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
        {featured ? <FeaturedCard s={featured} /> : null}
        {rest.map((s, i) => (
          <StudyCard key={s.id} s={s} delayClass={`d${(i % 5) + 1}`} />
        ))}
      </div>
    </section>
  );
}

function StatsBar() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  const stats = [
    { v: "480+", l: "Engagements delivered" },
    { v: "94%", l: "Client retention rate" },
    { v: "$1.2B", l: "Cumulative client value" },
    { v: "3.4×", l: "Average first-year ROI" },
  ];
  return (
    <section style={{ padding: `${pv}px ${gv}px`, background: DK, position: "relative", zIndex: 3, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
      <div
        style={{
          marginBottom: 40,
          display: "flex",
          flexDirection: layout === "mobile" ? "column" : "row",
          alignItems: layout === "mobile" ? "flex-start" : "flex-end",
          justifyContent: "space-between",
          gap: layout === "mobile" ? 12 : 0,
        }}
      >
        <div className="rv">
          <Lbl ch="By the numbers" lt />
          <Ttl ch="WHAT WE'VE SHIPPED" lt />
        </div>
        <div className="rv d2" style={{ fontFamily: SN, fontSize: 13, color: "rgba(255,255,255,0.4)", maxWidth: 280, textAlign: layout === "mobile" ? "left" : "right", lineHeight: 1.6 }}>
          Eight years. Twelve verticals. Audited annually.
        </div>
      </div>
      <div className="rv d1" style={{ display: "grid", gridTemplateColumns: gridCols(layout, 4, 2), gap: 1, background: "rgba(255,255,255,0.05)", borderRadius: layout === "mobile" ? 16 : 20, overflow: "hidden" }}>
        {stats.map((stat) => (
          <Tilt key={stat.l} int={6}>
            <div style={{ background: DK, padding: layout === "mobile" ? "28px 22px" : "40px 32px" }}>
              <div
                style={{
                  fontFamily: MN,
                  fontWeight: 700,
                  fontSize: layout === "mobile" ? "clamp(32px,8vw,44px)" : 54,
                  color: L,
                  letterSpacing: "0.02em",
                  lineHeight: 1,
                }}
              >
                {stat.v}
              </div>
              <div style={{ fontFamily: MN, fontWeight: 500, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginTop: 14 }}>{stat.l}</div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}

export default function CaseStudiesPageClient() {
  return (
    <ConsultancyLoadedShell label="CASE STUDIES">
      <Nav current="Case Studies" />
      <PageHero
        eyebrow="Case Studies"
        title="PROOF.|NOT|PROMISES."
        sub="Audited outcomes from production AI deployments. Every number below has been signed off by client finance teams."
        meta={[["Studies published", "8"], ["Total saved/earned", "$1.2B"], ["Avg payback", "7.4 months"], ["Client retention", "94%"]]}
        accent="2 new studies coming Q3"
      />
      <Ticker words={["Insurance", "Healthcare", "Banking", "Logistics", "Manufacturing", "Retail", "Legal", "Government"]} />
      <Grid />
      <StatsBar />
      <CTAStrip title="WRITE THE NEXT ONE" sub="Tell us your boldest goal. We'll show you how 3+ peers got there — and what would change for you." />
      <Footer />
    </ConsultancyLoadedShell>
  );
}
