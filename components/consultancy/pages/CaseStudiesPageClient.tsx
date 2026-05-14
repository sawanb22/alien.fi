"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { caseStudyPathByClient } from "@/lib/consultancy/case-study-routes";
import { ConsultancyLoadedShell } from "@/components/consultancy/ConsultancyLoadedShell";
import {
  Arr,
  Chip,
  CTAStrip,
  Footer,
  Lbl,
  Nav,
  Ticker,
  Ttl,
} from "@/components/consultancy/consultancy-ui";
import { gridCols, sectionGutter, sectionVPad, useLandingLayout } from "@/lib/landing-layout-context";
import { MN, MN_WORD_SPACE, SN } from "@/lib/consultancy/tokens";
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
  footerMetric: string;
  cardHref: string;
  featured?: boolean;
};

const STUDIES_DATA: Omit<StudyHub, 'cardHref'>[] = [
  {
    id: "southeast-regional-hospital",
    industry: "Healthcare",
    client: "Southeast Regional Hospital",
    blurb: "400-bed regional hospital · 25,000 inpatients annually",
    duration: "6 months",
    headline:
      "This AI case study shows how a six-month deployment cut 30-day readmissions by 28%, reduced documentation time by 41%, and delivered $1.4M in annual CMS penalty savings through patient risk stratification, ambient documentation AI, and automated discharge workflows.",
    hero: "28%",
    heroLbl: "Fewer readmissions",
    services: ["AI Strategy", "Implementation", "Managed"],
    footerMetric: "6 months",
    featured: true,
  },
  {
    id: "chicago-commercial-litigation-firm",
    industry: "Legal",
    client: "Chicago Commercial Litigation Firm",
    blurb: "120 attorneys · 450 active matters",
    duration: "2.1x ROI",
    headline:
      "One of our strongest AI transformation examples in legal: NLP-based contract review, AI legal research, and billing optimization helped the firm handle 35% more cases per attorney while improving billing realization by 18%.",
    hero: "65%",
    heroLbl: "Faster contract review",
    services: ["AI Strategy", "Implementation", "Managed"],
    footerMetric: "2.1x ROI",
  },
  {
    id: "midwest-community-bank",
    industry: "Financial Services",
    client: "Midwest Community Bank",
    blurb: "$2.1B assets · 34 branches",
    duration: "$2.8M annual value",
    headline:
      "This enterprise AI implementation success story combined real-time fraud scoring, AML pattern recognition, and explainable reporting to cut fraud losses 44%, reduce false positives 52%, and save 1,100 compliance hours per month.",
    hero: "44%",
    heroLbl: "Lower fraud losses",
    services: ["AI Strategy", "Implementation", "Managed"],
    footerMetric: "$2.8M annual value",
  },
  {
    id: "regional-last-mile-carrier",
    industry: "Logistics",
    client: "Regional Last-Mile Carrier",
    blurb: "280 vehicles · 150K packages daily",
    duration: "$1.1M annual savings",
    headline:
      "A route optimization and fleet intelligence deployment improved on-time delivery by 29%, reduced inbound customer calls by 38%, and delivered $1.1M in annual operational savings.",
    hero: "19%",
    heroLbl: "Fuel cost reduction",
    services: ["AI Strategy", "Implementation", "Managed"],
    footerMetric: "$1.1M annual savings",
  },
  {
    id: "ohio-auto-parts-manufacturer",
    industry: "Manufacturing",
    client: "Ohio Auto Parts Manufacturer",
    blurb: "8 production lines · 1.2M parts/year",
    duration: "9-month payback",
    headline:
      "Among our clearest AI transformation examples in manufacturing, predictive maintenance, computer vision quality control, and energy forecasting reduced downtime 31%, improved defect detection 22%, and created $1.9M in annual savings.",
    hero: "31%",
    heroLbl: "Less downtime",
    services: ["AI Strategy", "Implementation", "Managed"],
    footerMetric: "9-month payback",
  },
  {
    id: "southwest-retail-chain",
    industry: "Retail",
    client: "Southwest Retail Chain",
    blurb: "140 stores · $450M annual sales",
    duration: "$2.6M net savings",
    headline:
      "This AI case study highlights demand forecasting, automated reordering, and markdown optimization that reduced inventory costs 23%, lowered stockouts 34%, and cut markdown rates 11%.",
    hero: "23%",
    heroLbl: "Lower inventory cost",
    services: ["AI Strategy", "Implementation", "Managed"],
    footerMetric: "$2.6M net savings",
  },
  {
    id: "mid-atlantic-private-university",
    industry: "Education",
    client: "Mid-Atlantic Private University",
    blurb: "12,000 students · tuition-led model",
    duration: "4 months to impact",
    headline:
      "Early-warning models, advisor alerts, and enrollment yield optimization improved student retention 17%, raised enrollment yield 13%, and retained $3.1M in annual tuition revenue.",
    hero: "17%",
    heroLbl: "Retention lift",
    services: ["AI Strategy", "Implementation", "Managed"],
    footerMetric: "4 months to impact",
  },
  {
    id: "florida-residential-brokerage",
    industry: "Real Estate",
    client: "Florida Residential Brokerage",
    blurb: "200 agents · 3,000+ monthly leads",
    duration: "$890K added revenue",
    headline:
      "AI lead scoring, 90-second automated follow-up, and valuation modeling improved lead conversion 29%, increased pricing accuracy 16%, and added $890K in annual commission revenue.",
    hero: "29%",
    heroLbl: "Higher lead conversion",
    services: ["AI Strategy", "Implementation", "Managed"],
    footerMetric: "$890K added revenue",
  },
  {
    id: "fast-casual-restaurant-group",
    industry: "Restaurant",
    client: "Fast-Casual Restaurant Group",
    blurb: "45 locations · $120M revenue",
    duration: "$620K cost reduction",
    headline:
      "Demand forecasting, AI labor scheduling, and review sentiment monitoring reduced food waste 21%, improved labor efficiency 12%, and lowered annual costs by $620K.",
    hero: "21%",
    heroLbl: "Less food waste",
    services: ["AI Strategy", "Implementation", "Managed"],
    footerMetric: "$620K cost reduction",
  },
  {
    id: "b2b-saas-startup",
    industry: "SaaS",
    client: "B2B SaaS Startup",
    blurb: "180 enterprise customers · 4,200 tickets/month",
    duration: "$480K avoided hiring cost",
    headline:
      "A knowledge-based AI assistant and churn prediction model reduced support tickets 58%, cut response times from 26 hours to 4 hours, and improved retention 22% while avoiding $480K in hiring costs.",
    hero: "58%",
    heroLbl: "Fewer support tickets",
    services: ["AI Strategy", "Implementation", "Managed"],
    footerMetric: "$480K avoided hiring cost",
  },
];

const STUDIES = STUDIES_DATA.map((s) => ({ ...s, cardHref: caseStudyPathByClient(s.client) }));

const FILTER_ORDER = [
  "All",
  "Healthcare",
  "Legal",
  "Financial Services",
  "Logistics",
  "Manufacturing",
  "Retail",
  "Education",
  "Real Estate",
  "Restaurant",
  "SaaS",
];

const SERVICE_QUERY_ALIASES: Record<string, string[]> = {
  "strategy-consulting": ["strategy", "roadmap"],
  "custom-ai-development": ["custom", "development", "build", "model"],
  "implementation-integration": ["implementation", "integration", "deploy"],
  "managed-ai-services": ["managed", "operations", "monitoring"],
  "training-enablement": ["training", "enablement", "workshop"],
  "responsible-ai-governance": ["governance", "compliance", "risk", "audit"],
};

function normalizeQueryValue(value: string) {
  return value.trim().toLowerCase();
}

function normalizeIndustryQuery(value: string) {
  const normalized = normalizeQueryValue(value);
  return FILTER_ORDER.find((item) => item.toLowerCase() === normalized);
}

function matchesServiceQuery(study: StudyHub, serviceQuery: string) {
  const normalized = normalizeQueryValue(serviceQuery);
  const aliasTerms = SERVICE_QUERY_ALIASES[normalized] ?? [normalized.replace(/-/g, " ")];
  const corpus = [study.client, study.blurb, study.headline, ...study.services].join(" ").toLowerCase();
  return aliasTerms.some((term) => corpus.includes(term));
}

function Filters({
  active,
  setActive,
  counts,
}: {
  active: string;
  setActive: (c: string) => void;
  counts: Record<string, number>;
}) {
  const cats = useMemo(() => FILTER_ORDER, []);
  return (
    <div className="rv d1" style={{ padding: "0 9px", marginBottom: 32, display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
      <span style={{ fontFamily: MN, fontSize: 10, fontWeight: 600, letterSpacing: "normal", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginRight: 8 }}>
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
              letterSpacing: "normal",
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

function OutcomeSplitCard({
  s,
  showFeaturedBadge,
  delayClass,
}: {
  s: StudyHub;
  showFeaturedBadge: boolean;
  delayClass: string;
}) {
  const layout = useLandingLayout();
  const [hov, setHov] = useState(false);
  return (
    <Link
      href={s.cardHref}
      className={`rv ${delayClass} hv`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "grid",
        gridTemplateColumns: layout === "mobile" ? "1fr" : "1fr 1.2fr",
        background: DK,
        borderRadius: 20,
        overflow: "hidden",
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
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18, flexWrap: "wrap" }}>
            {showFeaturedBadge ? <Chip ch="Featured" bg={L} cl="#000" /> : null}
            <Chip ch={s.industry} bg="rgba(255,255,255,0.08)" cl="rgba(255,255,255,0.7)" />
          </div>
          <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 22, color: "#fff", letterSpacing: "normal", marginBottom: 6 }}>{s.client}</div>
          <div style={{ fontFamily: SN, fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 24 }}>{s.blurb}</div>
          <div style={{ fontFamily: MN, fontWeight: 500, fontSize: "clamp(22px,2vw,30px)", lineHeight: 1.3, color: "#fff", letterSpacing: "normal", maxWidth: 560 }}>
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
              letterSpacing: "normal",
              textTransform: "uppercase",
              color: hov ? L : L2,
              transition: "color .2s",
            }}
          >
            Read full study <Arr sz={11} cl={hov ? L : L2} sw={2.2} />
          </div>
          <div style={{ height: 1, flex: 1, background: "rgba(255,255,255,0.1)" }} />
          <div style={{ fontFamily: MN, fontSize: 10, letterSpacing: "normal", color: "rgba(255,255,255,0.4)" }}>{s.duration}</div>
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
        <div style={{ position: "relative", fontFamily: MN, fontWeight: 700, fontSize: "clamp(80px,9vw,140px)", color: "#000", lineHeight: 0.95, letterSpacing: "normal" }}>
          {s.hero}
        </div>
        <div style={{ position: "relative", fontFamily: MN, fontWeight: 600, fontSize: 14, letterSpacing: "normal", textTransform: "uppercase", color: "#000", marginTop: 14, opacity: 0.7 }}>{s.heroLbl}</div>
        <div style={{ position: "relative", display: "flex", gap: 8, marginTop: 32, flexWrap: "wrap" }}>
          {s.services.map((sv) => (
            <div key={sv} style={{ padding: "5px 12px", background: "rgba(0,0,0,0.08)", borderRadius: 6, fontFamily: MN, fontSize: 10, fontWeight: 600, letterSpacing: "normal", color: "#000" }}>
              {sv}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}

function Grid() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  const searchParams = useSearchParams();
  const industryQuery = searchParams.get("industry") ?? "";
  const serviceQuery = searchParams.get("service") ?? "";
  const [active, setActive] = useState(() => normalizeIndustryQuery(industryQuery) ?? "All");

  const counts: Record<string, number> = { All: STUDIES.length };
  STUDIES.forEach((s) => {
    counts[s.industry] = (counts[s.industry] ?? 0) + 1;
  });

  const normalizedServiceQuery = normalizeQueryValue(serviceQuery);
  const serviceMatchedStudies = normalizedServiceQuery
    ? STUDIES.filter((s) => matchesServiceQuery(s, normalizedServiceQuery))
    : STUDIES;

  const baseStudies = normalizedServiceQuery && serviceMatchedStudies.length > 0
    ? serviceMatchedStudies
    : STUDIES;

  const filtered = baseStudies.filter((s) => active === "All" || s.industry === active);
  return (
    <section id="real-outcomes" style={{ padding: `${pv}px ${gv}px`, background: `linear-gradient(180deg,${BG2},${BG})`, position: "relative", zIndex: 2 }}>
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
          <Lbl ch="Client Stories" />
          <Ttl ch="REAL OUTCOMES" />
        </div>
        <div className="rv d2" style={{ fontFamily: SN, fontSize: 13, color: "rgba(0,0,0,0.4)", maxWidth: 300, textAlign: layout === "mobile" ? "left" : "right", lineHeight: 1.6 }}>
          Production deployments. Audited numbers. These AI case studies show how enterprise AI implementation success stories translate into real AI ROI, operational gains, and repeatable AI transformation examples across sectors.
        </div>
      </div>
      <Filters active={active} setActive={setActive} counts={counts} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 1,
          background: "transparent",
          borderRadius: layout === "mobile" ? 16 : 20,
          overflow: "hidden",
        }}
      >
        {filtered.map((s, i) => (
          <OutcomeSplitCard
            key={s.id}
            s={s}
            showFeaturedBadge={!!s.featured}
            delayClass={`d${(i % 5) + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function RoiSnapshot() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  const [roiOpen, setRoiOpen] = useState(false);
  const [hov, setHov] = useState<number | null>(null);
  const stats = [
    { label: "Annual value delivered", value: "$14.89M+" },
    { label: "Average payback period", value: "7.3 months" },
    { label: "Fastest time to measurable impact", value: "4 months" },
    { label: "Case studies with production deployment", value: "10/10" },
  ];
  return (
    <section
      id="ai-roi-snapshot"
      data-expanded={roiOpen ? "true" : "false"}
      style={{
        padding: `${pv}px ${gv}px`,
        background: BG,
        position: "relative",
        zIndex: roiOpen ? 5 : 2,
        borderRadius: "24px 24px 0 0",
        marginTop: -24,
      }}
    >
      <div style={{ padding: "0" }}>
        <button
          type="button"
          className="hv"
          aria-expanded={roiOpen}
          aria-controls={roiOpen ? "ai-roi-stats" : undefined}
          aria-label={roiOpen ? "Collapse AI ROI stats" : "Expand AI ROI stats"}
          onClick={() => setRoiOpen((v) => !v)}
          style={{
            display: "block",
            width: "100%",
            background: "transparent",
            border: "none",
            padding: 0,
            cursor: "pointer",
            font: "inherit",
            color: "inherit",
            textAlign: "inherit",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              marginBottom: layout === "mobile" ? 36 : 48,
            }}
          >
            <div className="rv">
              <Lbl ch="AI ROI Snapshot" sx={{ letterSpacing: "normal" }} />
              <Ttl ch="AI ROI ACROSS CASE STUDIES" sx={{ letterSpacing: "normal" }} />
            </div>
          </div>
        </button>
        {!roiOpen ? (
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
        {roiOpen ? (
          <div id="ai-roi-stats" role="region" aria-label="AI ROI across case studies" style={{ position: "relative", zIndex: 1 }}>
            <div
              className="rv d1 in"
              style={{
                display: "grid",
                gridTemplateColumns: gridCols(layout, 4, 2),
                gap: 1,
                background: PL,
                borderRadius: layout === "mobile" ? 16 : 20,
                overflow: "hidden",
                border: `1px solid ${PL}`,
              }}
            >
              {stats.map((stat, i) => (
                <div key={stat.label} style={{ height: "100%", minHeight: 0 }}>
                  <div
                    onMouseEnter={() => setHov(i)}
                    onMouseLeave={() => setHov(null)}
                    style={{
                      background: hov === i ? DK : `linear-gradient(160deg,${BG},${BG2})`,
                      padding: layout === "mobile" ? "28px 22px" : "34px 28px",
                      transition: "background .35s",
                      minHeight: "100%",
                      boxSizing: "border-box",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: MN,
                        fontWeight: 700,
                        fontSize: layout === "mobile" ? "clamp(28px,8vw,42px)" : 44,
                        color: hov === i ? "#fff" : "#000",
                        letterSpacing: "normal",
                        lineHeight: 1,
                        transition: "color .3s",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontFamily: MN,
                        fontWeight: 500,
                        fontSize: 11,
                        letterSpacing: "normal",
                        textTransform: "uppercase",
                        color: hov === i ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.45)",
                        marginTop: 12,
                        transition: "color .3s",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function StatsBar() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  const [shippedOpen, setShippedOpen] = useState(false);
  const [hov, setHov] = useState<number | null>(null);
  const stats = [
    { v: "10", l: "Audited case studies" },
    { v: "10", l: "Operating environments" },
    { v: "94%", l: "Client retention" },
    { v: "7.3", l: "Average payback (months)" },
  ];
  const railBg = "rgba(255,255,255,0.07)";
  const railBorder = "rgba(255,255,255,0.14)";
  return (
    <section
      id="what-weve-shipped"
      data-expanded={shippedOpen ? "true" : "false"}
      style={{
        padding: `${pv}px ${gv}px`,
        background: DK,
        position: "relative",
        zIndex: shippedOpen ? 6 : 3,
        borderRadius: "24px 24px 0 0",
        marginTop: -24,
      }}
    >
      <div style={{ padding: "0" }}>
        <button
          type="button"
          className="hv"
          aria-expanded={shippedOpen}
          aria-controls={shippedOpen ? "shipped-stats" : undefined}
          aria-label={shippedOpen ? "Collapse shipped stats" : "Expand shipped stats"}
          onClick={() => setShippedOpen((v) => !v)}
          style={{
            display: "block",
            width: "100%",
            background: "transparent",
            border: "none",
            padding: 0,
            cursor: "pointer",
            font: "inherit",
            color: "inherit",
            textAlign: "inherit",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              marginBottom: layout === "mobile" ? 36 : 48,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: layout === "mobile" ? "column" : "row",
                alignItems: layout === "mobile" ? "flex-start" : "flex-end",
                justifyContent: "space-between",
                gap: layout === "mobile" ? 12 : 0,
              }}
            >
              <div className="rv">
                <Lbl ch="By the Numbers" lt sx={{ letterSpacing: "normal" }} />
                <Ttl ch="WHAT WE'VE SHIPPED" lt sx={{ letterSpacing: "normal" }} />
              </div>
              <div
                className="rv d2"
                style={{
                  fontFamily: SN,
                  fontSize: 13,
                  color: "rgba(255,255,255,0.4)",
                  maxWidth: layout === "mobile" ? 420 : 280,
                  textAlign: layout === "mobile" ? "left" : "right",
                  lineHeight: 1.6,
                }}
              >
                Ten AI case studies. Ten different operating environments. These enterprise AI implementation success stories show how alien.fi turns AI transformation examples into audited AI ROI across healthcare, legal, banking, manufacturing, logistics, retail, education, real estate, restaurants, and SaaS.
              </div>
            </div>
          </div>
        </button>
        {!shippedOpen ? (
          <div
            aria-hidden
            className="rv d1 in"
            style={{
              display: "grid",
              gridTemplateColumns: gridCols(layout, 4, 2),
              gap: 1,
              height: 3,
              boxSizing: "border-box",
              background: railBg,
              borderRadius: layout === "mobile" ? 16 : 20,
              overflow: "hidden",
              border: `1px solid ${railBorder}`,
            }}
          />
        ) : null}
        {shippedOpen ? (
          <div id="shipped-stats" role="region" aria-label="What we've shipped" style={{ position: "relative", zIndex: 1 }}>
            <div
              className="rv d1 in"
              style={{
                display: "grid",
                gridTemplateColumns: gridCols(layout, 4, 2),
                gap: 1,
                background: "rgba(255,255,255,0.05)",
                borderRadius: layout === "mobile" ? 16 : 20,
                overflow: "hidden",
              }}
            >
              {stats.map((stat, i) => (
                <div key={stat.l} style={{ height: "100%", minHeight: 0 }}>
                  <div
                    onMouseEnter={() => setHov(i)}
                    onMouseLeave={() => setHov(null)}
                    style={{
                      background: hov === i ? "rgb(28,32,56)" : DK,
                      padding: layout === "mobile" ? "28px 22px" : "40px 32px",
                      transition: "background .3s",
                      minHeight: "100%",
                      boxSizing: "border-box",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: MN,
                        fontWeight: 700,
                        fontSize: layout === "mobile" ? "clamp(32px,8vw,44px)" : 54,
                        color: L,
                        letterSpacing: "normal",
                        lineHeight: 1,
                        transition: "color .25s, filter .25s",
                        filter: hov === i ? "brightness(1.08)" : "none",
                      }}
                    >
                      {stat.v}
                    </div>
                    <div
                      style={{
                        fontFamily: MN,
                        fontWeight: 500,
                        fontSize: 11,
                        letterSpacing: "normal",
                        textTransform: "uppercase",
                        color: hov === i ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.45)",
                        marginTop: 14,
                        transition: "color .25s",
                      }}
                    >
                      {stat.l}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function CaseStudiesPageHero() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const sideWidth = layout === "mobile" ? 0 : layout === "tablet" ? 208 : 240;
  const title = "AI CASE|STUDIES.|PROOF, NOT|PROMISES.";
  const facts: Array<[string, string]> = [
    ["Studies published", "10"],
    ["Total value delivered", "$14.89M+"],
    ["Avg payback", "7.3 months"],
    ["Client retention", "94%"],
  ];

  return (
    <section style={{ paddingTop: 60, background: `linear-gradient(180deg,${BG} 0%,${BG2} 100%)`, position: "relative", borderBottom: `1px solid ${PL}` }}>
      {layout !== "mobile" ? (
        <>
          <div style={{ position: "absolute", left: gv, right: gv, top: 60, bottom: 0, border: `1px solid ${PL}`, borderTop: "none", pointerEvents: "none" }} />
          <div style={{ position: "absolute", left: gv + sideWidth, top: 60, bottom: 0, width: 1, background: PL, pointerEvents: "none" }} />
          <div style={{ position: "absolute", right: gv + sideWidth, top: 60, bottom: 0, width: 1, background: PL, pointerEvents: "none" }} />
          <div style={{ position: "absolute", left: gv + sideWidth - 3, top: 60, width: 7, height: 7, borderRadius: "50%", background: L, boxShadow: `0 0 10px ${L}`, animation: "scan 4s linear infinite", pointerEvents: "none", zIndex: 10 }} />
        </>
      ) : null}

      <div style={{ paddingLeft: gv, paddingRight: gv, boxSizing: "border-box" }}>
      <div style={{ display: "grid", gridTemplateColumns: layout === "mobile" ? "1fr" : `${sideWidth}px 1fr ${sideWidth}px`, minHeight: layout === "mobile" ? "auto" : 300 }}>
        <div
          className="rvl"
          style={{
            padding: layout === "mobile" ? "28px 18px 18px" : "52px 28px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <div>
            <Lbl ch="Case Studies" />
            <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.7, color: "rgba(0,0,0,0.5)" }}>
              Audited outcomes from production AI deployments. Every number below has been signed off by client finance or operations teams, making these AI case studies a proof layer for serious buyers evaluating enterprise AI implementation success stories and measurable AI ROI.
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: MN, fontSize: 9, fontWeight: 600, letterSpacing: "normal", textTransform: "uppercase", color: "rgba(0,0,0,0.3)" }}>
            <Link href="/" className="hv" style={{ color: "rgba(0,0,0,0.5)", textDecoration: "none" }}>
              Home
            </Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span>Case Studies</span>
          </div>
        </div>
        <div
          style={{
            padding: layout === "mobile" ? "0 18px 22px" : "52px 44px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderLeft: layout === "mobile" ? "none" : `1px solid ${PL}`,
            borderRight: layout === "mobile" ? "none" : `1px solid ${PL}`,
            position: "relative",
            overflow: "hidden",
            minWidth: 0,
          }}
        >
          <div className="rv" style={{ fontFamily: MN, fontWeight: 300, fontSize: "clamp(34px,4.5vw,72px)", letterSpacing: "normal", wordSpacing: MN_WORD_SPACE, lineHeight: 0.98, color: "#000", wordBreak: "keep-all" }}>
            {title.split("|").map((part, i, arr) => (
              <div
                key={part}
                style={{
                  fontWeight: i === 0 ? 300 : i === 1 ? 500 : 700,
                  ...(i === arr.length - 1
                    ? {
                        background: `linear-gradient(90deg,#000 40%,${L} 60%,#000 80%)`,
                        backgroundSize: "200% auto",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        animation: "shimmer 4s linear infinite",
                      }
                    : {}),
                }}
              >
                {part}
              </div>
            ))}
          </div>
        </div>
        <div
          className="rvr"
          style={{
            padding: layout === "mobile" ? "0 18px 28px" : "52px 28px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <div>
            <Lbl ch="Quick Facts" />
            {facts.map((fact) => (
              <div key={fact[0]} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: `1px solid ${PL}`, fontFamily: MN, fontSize: 11, fontWeight: 500, letterSpacing: "normal" }}>
                <span style={{ color: "rgba(0,0,0,0.45)" }}>{fact[0]}</span>
                <span style={{ color: "#000", fontWeight: 700 }}>{fact[1]}</span>
              </div>
            ))}
          </div>
          <Link href="#real-outcomes" className="hv" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: MN, fontSize: 11, fontWeight: 600, letterSpacing: "normal", textTransform: "uppercase", color: "rgba(0,0,0,0.6)", textDecoration: "none" }}>
            View audited outcomes <Arr sz={11} cl="rgba(0,0,0,0.6)" sw={2} />
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
}

export default function CaseStudiesPageClient() {
  return (
    <ConsultancyLoadedShell label="CASE STUDIES">
      <Nav current="Case Studies" />
      <CaseStudiesPageHero />
      <Ticker words={["Healthcare", "Legal", "Manufacturing", "Financial Services", "Retail", "Education", "Logistics", "Real Estate", "Restaurant", "SaaS"]} />
      <Grid />
      <RoiSnapshot />
      <StatsBar />
      <CTAStrip
        title="WRITE THE NEXT ONE"
        sub="Tell us your boldest goal. We'll show you the most relevant AI case studies, the enterprise AI implementation success stories closest to your environment, and the AI ROI targets that would matter most for your team."
        cta="Start a Project ↗"
        href="/contact"
      />
      <Footer />
    </ConsultancyLoadedShell>
  );
}
