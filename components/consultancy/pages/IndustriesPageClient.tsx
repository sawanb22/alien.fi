"use client";

import Link from "next/link";
import { caseStudyPathByClient } from "@/lib/consultancy/case-study-routes";
import { ConsultancyLoadedShell } from "@/components/consultancy/ConsultancyLoadedShell";
import {
  Arr,
  ConsultancyCardGrid,
  CTAStrip,
  Footer,
  Lbl,
  Nav,
  PageHero,
  Ticker,
  Ttl,
} from "@/components/consultancy/consultancy-ui";
import { gridCols, sectionGutter, sectionVPad, useLandingLayout } from "@/lib/landing-layout-context";
import { MN, SN } from "@/lib/consultancy/tokens";
import { BG, BG2, CD, DK, L, L2, L_TEXT_ON_LIGHT, PL } from "@/lib/consultancy/theme";
import { ScrollGridItem, ScrollSection } from "@/components/motion/scroll-primitives";
import { useEffect, useRef, useState } from "react";

type Ind = {
  id: string;
  n: string;
  industryLabel?: string;
  ic: string;
  engagements: number;
  clients: string[];
  clientCount?: number;
  usecases: string[];
  highlight?: { v: string; l: string };
  color?: string;
  featured?: boolean;
  cta1?: string;
};

const INDUSTRIES: Ind[] = [
  {
    id: "fin",
    n: "Financial Services",
    industryLabel: "AI Solutions for Finance",
    ic: "$",
    engagements: 42,
    clientCount: 6,
    clients: ["Kestrel Bank", "Atlas Capital", "Civica Credit Union"],
    usecases: [
      "Fraud detection and AML monitoring",
      "Credit risk scoring and loan underwriting AI",
      "Algorithmic trading and portfolio risk systems",
      "Customer churn prediction",
    ],
    highlight: { v: "$47M", l: "In fraud losses prevented · Regional bank" },
    cta1: "Talk to a Financial Services Lead",
    color: L,
  },
  {
    id: "health",
    n: "Healthcare",
    industryLabel: "AI in the Healthcare Industry",
    ic: "✚",
    engagements: 38,
    clientCount: 5,
    clients: ["NorthBay Health", "Mercy Regional", "Ridgeline Pharma"],
    usecases: [
      "Ambient clinical documentation AI",
      "Patient risk stratification and care gap identification",
      "Prior authorization and payer denial automation",
      "Appointment no-show prediction",
    ],
    highlight: { v: "41%", l: "Reduction in clinical admin time · Regional health network" },
    cta1: "Talk to a Healthcare Lead",
    color: "rgb(255,170,170)",
  },
  {
    id: "ins",
    n: "Insurance",
    industryLabel: "AI in Industry :- Insurance",
    ic: "⊡",
    engagements: 31,
    clientCount: 3,
    clients: ["Meridian Insurance", "Fairway P&C", "Atlas Re"],
    usecases: [
      "Claims automation",
      "SIU fraud detection",
      "Underwriting risk models",
      "Customer FNOL chatbots",
    ],
    highlight: { v: "62%", l: "Faster claims · Meridian" },
    cta1: "Talk to an Insurance Lead",
    color: L,
    featured: true,
  },
  {
    id: "mfg",
    n: "Manufacturing",
    industryLabel: "AI Solutions for Manufacturing",
    ic: "⚙",
    engagements: 29,
    clientCount: 4,
    clients: ["Oakridge Industrial", "Steele Auto", "Apex Components"],
    usecases: [
      "Predictive maintenance and downtime reduction",
      "Computer vision quality control and defect detection",
      "Production scheduling optimization",
      "Supply chain demand forecasting",
    ],
    highlight: { v: "34%", l: "Reduction in unplanned downtime · Tier 1 manufacturer" },
    cta1: "Talk to a Manufacturing Lead",
  },
  {
    id: "retail",
    n: "Retail & Commerce",
    industryLabel: "AI in Industry :- Retail",
    ic: "◫",
    engagements: 33,
    clientCount: 5,
    clients: ["Aurora Retail", "Northwind Goods", "Bayside Brands"],
    usecases: [
      "Product recommendation and personalization engines",
      "Dynamic pricing and markdown optimization",
      "Inventory demand forecasting",
      "Customer lifetime value prediction",
    ],
    highlight: { v: "18%", l: "Markdown reduction · National retailer" },
    cta1: "Talk to a Retail Lead",
  },
  {
    id: "log",
    n: "Logistics",
    industryLabel: "Vertical AI Solutions :- Logistics",
    ic: "⛟",
    engagements: 32,
    clientCount: 4,
    clients: ["Redline Logistics", "Pacific Freight", "Vector 3PL"],
    usecases: [
      "Route optimization AI",
      "Last-mile delivery visibility and tracking",
      "Warehouse automation and pick-and-pack AI",
      "Carrier performance and delay analytics",
    ],
    highlight: { v: "21%", l: "Fuel cost reduction · National carrier" },
    cta1: "Talk to a Logistics Lead",
  },
  {
    id: "gov",
    n: "Government",
    industryLabel: "AI in Industry :- Government",
    ic: "⌂",
    engagements: 14,
    clientCount: 3,
    clients: ["Civica State Agency", "Westport Municipality", "Federal Benefits Office"],
    usecases: [
      "Citizen service automation and chatbots",
      "Benefits fraud detection",
      "Document processing and form automation",
      "Workforce planning and procurement AI",
    ],
    highlight: { v: "$28M", l: "Annual savings · State agency" },
    cta1: "Talk to a Government Lead",
  },
  {
    id: "legal",
    n: "Legal & Compliance",
    industryLabel: "Vertical AI Solutions :- Legal",
    ic: "§",
    engagements: 19,
    clientCount: 3,
    clients: ["Lumen Legal", "Steel & Vance", "Ironside Compliance"],
    usecases: [
      "Contract analysis and review AI",
      "Legal research and precedent automation",
      "E-discovery and document extraction",
      "Matter billing and utilization optimization",
    ],
    highlight: { v: "82%", l: "Research time reduction · AmLaw 200 firm" },
    cta1: "Talk to a Legal Lead",
  },
  {
    id: "energy",
    n: "Energy & Utilities",
    industryLabel: "AI in Industry :- Energy",
    ic: "◈",
    engagements: 11,
    clientCount: 2,
    clients: ["Helix Energy", "Ridgepoint Utilities", "BlueGrid"],
    usecases: [
      "Grid predictive maintenance",
      "Energy consumption forecasting",
      "Regulatory compliance monitoring AI",
      "Asset performance optimization",
    ],
    cta1: "Talk to an Energy Lead",
  },
  {
    id: "edu",
    n: "Education",
    industryLabel: "Vertical AI Solutions :- Education",
    ic: "⌘",
    engagements: 8,
    clientCount: 2,
    clients: ["Heritage University", "MapleNorth Schools", "EdNorth Group"],
    usecases: [
      "Student retention and at-risk prediction",
      "Personalized learning path AI",
      "Administrative workflow automation",
      "Enrollment demand forecasting",
    ],
    cta1: "Talk to an Education Lead",
  },
  {
    id: "media",
    n: "Media & Entertainment",
    industryLabel: "AI in Industry :- Media",
    ic: "⏵",
    engagements: 13,
    clientCount: 2,
    clients: ["Beacon Studios", "Loop Media", "Crescendo Audio"],
    usecases: [
      "Content recommendation engines",
      "Subscriber churn prediction",
      "Ad yield and programmatic optimization AI",
      "Automated content tagging and metadata",
    ],
    cta1: "Talk to a Media Lead",
  },
  {
    id: "tele",
    n: "Telecom",
    industryLabel: "Vertical AI Solutions :- Telecom",
    ic: "⌁",
    engagements: 9,
    clientCount: 2,
    clients: ["Northwave Telecom", "Pinnacle Mobile", "SignalCo"],
    usecases: [
      "Network anomaly detection AI",
      "Customer churn prevention",
      "Service desk and support automation",
      "Infrastructure predictive maintenance",
    ],
    cta1: "Talk to a Telecom Lead",
  },
];

function IndustryCard({ ind, active, onClick }: { ind: Ind; active: boolean; onClick: () => void }) {
  const [hover, setHover] = useState(false);
  const inactiveHover = hover && !active;

  const cardBg = active
    ? DK
    : inactiveHover
      ? `linear-gradient(160deg,rgb(228,244,210),${BG2})`
      : `linear-gradient(160deg,${BG},${BG2})`;
  const cardBorder = active ? DK : inactiveHover ? "rgba(150,238,82,0.45)" : PL;
  const cardTransform = active ? "translateY(-3px)" : inactiveHover ? "translateY(-2px)" : "none";
  const cardShadow = active
    ? "0 12px 32px rgba(0,0,0,0.18)"
    : inactiveHover
      ? "inset 0 0 0 1.5px rgba(150,238,82,0.38), 0 10px 26px rgba(21,24,43,0.08)"
      : "none";

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="hv"
      style={{
        background: cardBg,
        border: `1px solid ${cardBorder}`,
        borderRadius: 14,
        padding: "24px 22px",
        cursor: "none",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        transition: "background .22s ease,transform .22s ease,border-color .22s ease,box-shadow .22s ease",
        transform: cardTransform,
        boxShadow: cardShadow,
        width: "100%",
        height: "100%",
        minHeight: 0,
        boxSizing: "border-box",
        alignItems: "stretch",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: 10,
            background: active ? L : inactiveHover ? "rgb(218,244,200)" : CD,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: MN,
            fontSize: 22,
            fontWeight: 700,
            color: active ? "#000" : "rgba(0,0,0,0.5)",
            transition: "background .22s ease,color .22s ease",
          }}
        >
          {ind.ic}
        </div>
        <div
          style={{
            fontFamily: MN,
            fontWeight: 700,
            fontSize: 9,
            letterSpacing: "normal",
            color: active ? L2 : inactiveHover ? "rgba(21,24,43,0.62)" : "rgba(0,0,0,0.4)",
            transition: "color .22s ease",
          }}
        >
          {ind.engagements} ENG.
        </div>
      </div>
      <div
        style={{
          fontFamily: MN,
          fontWeight: 600,
          fontSize: 14,
          color: active ? "#fff" : "#000",
          letterSpacing: "normal",
          lineHeight: 1.3,
          transition: "color .25s",
          minHeight: "2.6em",
        }}
      >
        {ind.n}
      </div>
      <div
        style={{
          marginTop: "auto",
          minHeight: 44,
          paddingTop: 10,
          borderTop: `1px solid ${active ? "rgba(255,255,255,0.1)" : PL}`,
          display: "flex",
          alignItems: "baseline",
          gap: 8,
          flexShrink: 0,
        }}
      >
        {ind.highlight ? (
          <span
            style={{
              fontFamily: MN,
              fontWeight: 700,
              fontSize: 18,
              color: active ? L : inactiveHover ? L2 : "#000",
              letterSpacing: "normal",
              transition: "color .22s ease",
            }}
          >
            {ind.highlight.v}
          </span>
        ) : (
          <span
            aria-hidden
            style={{
              fontFamily: MN,
              fontWeight: 700,
              fontSize: 18,
              letterSpacing: "normal",
              visibility: "hidden",
              userSelect: "none",
            }}
          >
            00%
          </span>
        )}
      </div>
    </button>
  );
}

function DetailPanel({ ind }: { ind: Ind }) {
  const directCaseStudyHref = ind.clients
    .map((client) => caseStudyPathByClient(client))
    .find((href) => href !== "/case-studies");

  return (
    <div
      style={{
        background: DK,
        borderRadius: 20,
        padding: "48px 44px",
        position: "sticky",
        top: 80,
        minHeight: 520,
        display: "flex",
        flexDirection: "column",
        gap: 28,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: -100,
          top: -100,
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: `radial-gradient(circle,${L}22,transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: L,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: MN,
              fontSize: 28,
              fontWeight: 700,
              color: "#000",
            }}
          >
            {ind.ic}
          </div>
          <div>
            <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 9, letterSpacing: "normal", color: L2, marginBottom: 4, textTransform: "uppercase" }}>{ind.industryLabel ?? "INDUSTRY"}</div>
            <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 24, color: "#fff", letterSpacing: "normal" }}>{ind.n}</div>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1,
            background: "rgba(255,255,255,0.05)",
            borderRadius: 12,
            overflow: "hidden",
            marginBottom: 28,
          }}
        >
          <div style={{ background: DK, padding: "18px 20px" }}>
            <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 9, letterSpacing: "normal", color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>
              ENGAGEMENTS
            </div>
            <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 30, color: "#fff", lineHeight: 1 }}>{ind.engagements}</div>
          </div>
          <div style={{ background: DK, padding: "18px 20px" }}>
            <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 9, letterSpacing: "normal", color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>
              CLIENTS
            </div>
            <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 30, color: "#fff", lineHeight: 1 }}>{ind.clientCount ?? ind.clients.length}+</div>
          </div>
        </div>
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 10, letterSpacing: "normal", color: "rgba(255,255,255,0.4)", marginBottom: 14 }}>
            USE CASES DEPLOYED
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {ind.usecases.map((u) => (
              <div
                key={u}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  fontFamily: MN,
                  fontSize: 13,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.85)",
                  letterSpacing: "normal",
                }}
              >
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: L, flexShrink: 0 }} />
                {u}
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 10, letterSpacing: "normal", color: "rgba(255,255,255,0.4)", marginBottom: 12 }}>
            SELECTED CLIENTS
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {ind.clients.map((c) => {
              const href = caseStudyPathByClient(c);
              const hasCaseStudy = href !== "/case-studies";

              if (!hasCaseStudy) {
                return (
                  <div
                    key={c}
                    style={{
                      padding: "6px 12px",
                      background: "rgba(255,255,255,0.06)",
                      borderRadius: 8,
                      fontFamily: MN,
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#fff",
                      letterSpacing: "normal",
                    }}
                  >
                    {c}
                  </div>
                );
              }

              return (
                <Link
                  key={c}
                  href={href}
                  className="hv"
                  style={{
                    padding: "6px 12px",
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: 8,
                    fontFamily: MN,
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#fff",
                    letterSpacing: "normal",
                    textDecoration: "none",
                  }}
                >
                  {c}
                </Link>
              );
            })}
          </div>
        </div>
        {ind.highlight ? (
          <div style={{ padding: "24px 24px", background: `linear-gradient(135deg,${L},${L2})`, borderRadius: 14, marginBottom: 24 }}>
            <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 9, letterSpacing: "normal", color: "rgba(0,0,0,0.5)", marginBottom: 8 }}>
              FEATURED OUTCOME
            </div>
            <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 42, color: "#000", letterSpacing: "normal", lineHeight: 1, marginBottom: 8 }}>
              {ind.highlight.v}
            </div>
            <div style={{ fontFamily: MN, fontWeight: 500, fontSize: 11, letterSpacing: "normal", color: "#000", opacity: 0.7 }}>{ind.highlight.l}</div>
          </div>
        ) : null}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "stretch" }}>
          <Link
            href="/contact"
            className="hv"
            style={{
              flex: "1 1 240px",
              minWidth: 0,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              background: L,
              color: "#000",
              border: "none",
              borderRadius: 24,
              padding: "14px 20px",
              fontFamily: MN,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "normal",
              lineHeight: 1.3,
              textAlign: "center",
              textTransform: "uppercase",
              cursor: "none",
              textDecoration: "none",
              transition: "background .2s,color .2s,transform .15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#000";
              e.currentTarget.style.color = L;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = L;
              e.currentTarget.style.color = "#000";
            }}
          >
            {ind.cta1 ?? `Talk to a ${ind.n.split(" ")[0]} lead`} <Arr sz={11} cl="currentColor" sw={2.4} />
          </Link>
          <Link
            href={directCaseStudyHref ?? "/case-studies"}
            className="hv"
            style={{
              flex: "0 1 auto",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              background: "transparent",
              color: "#fff",
              border: "1.5px solid rgba(255,255,255,0.2)",
              borderRadius: 24,
              padding: "14px 20px",
              fontFamily: MN,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "normal",
              textTransform: "uppercase",
              cursor: "none",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "background .2s,color .2s,border-color .2s,transform .15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.color = "#000";
              e.currentTarget.style.borderColor = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            }}
          >
            {directCaseStudyHref ? "Featured case study" : "Case studies"} <Arr sz={10} cl="currentColor" sw={2.2} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function Selector() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  const [activeId, setActiveId] = useState("ins");
  const active = INDUSTRIES.find((i) => i.id === activeId) ?? INDUSTRIES[0]!;
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
          <Lbl ch="Vertical AI Solutions · 12 Industries · 270+ AI in Industry Engagements" />
          <Ttl ch="WHO WE SERVE" />
        </div>
        <div style={{ fontFamily: SN, fontSize: 13, color: "rgba(0,0,0,0.4)", maxWidth: 360, textAlign: layout === "mobile" ? "left" : "right", lineHeight: 1.6 }}>
          Select an industry to explore our vertical AI solutions, deployed use cases, and client outcomes. Every panel reflects real AI in industry work, not template case studies.
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: layout === "desktop" ? "1.4fr 1fr" : "1fr",
          gap: layout === "mobile" ? 28 : 32,
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: gridCols(layout, 3, 2),
            gap: 12,
            alignItems: "stretch",
            gridAutoRows: "minmax(196px, auto)",
          }}
        >
          {INDUSTRIES.map((ind, i) => (
            <ScrollGridItem key={ind.id} sectionIndex={0} cardIndex={i}>
              <IndustryCard ind={ind} active={activeId === ind.id} onClick={() => setActiveId(ind.id)} />
            </ScrollGridItem>
          ))}
        </div>
        <DetailPanel ind={active} />
      </div>
    </ScrollSection>
  );
}

function Methodology() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  const [methodologyHover, setMethodologyHover] = useState<number | null>(null);
  const items = [
    {
      h: "Vertical fluency",
      d:
        "Every AI in industry engagement at alien.fi is led by a specialist with 8+ years inside that sector. We know your KPIs, your compliance landscape, and your data realities before we propose a single solution. Vertical AI solutions only work when the team understands the vertical first.",
    },
    {
      h: "Bring-your-own-stack",
      d:
        "Whether we are deploying AI solutions for finance teams on Snowflake, delivering AI solutions for manufacturing plants running on-prem, or supporting AI in the healthcare industry on Azure-hosted EHR environments :- we architect for your stack, not ours.",
    },
    {
      h: "Compliance-first design",
      d:
        "HIPAA, SOC 2, ISO 27001, EU AI Act, FINRA, FedRAMP :- every AI in industry deployment surfaces compliance constraints in week one. Governance is designed into the system architecture, not appended after delivery.",
    },
    {
      h: "Reference network",
      d:
        "When evaluating vertical AI solutions, proof matters more than claims. On request, we connect you with three peer-company executives who have completed AI in industry engagements with alien.fi in your sector. Their experience, not our deck.",
    },
  ];
  return (
    <ScrollSection as="section" index={1} style={{ padding: `${pv}px ${gv}px`, background: DK, position: "relative", zIndex: 3, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
      <div
        style={{
          marginBottom: layout === "mobile" ? 32 : 48,
          display: "grid",
          gridTemplateColumns: layout === "mobile" ? "1fr" : "auto minmax(0, 1fr)",
          columnGap: 28,
          rowGap: 16,
          alignItems: "start",
        }}
      >
        <div style={{ justifySelf: "start", maxWidth: "100%" }}>
          <Lbl ch="How we earn vertical depth" lt />
          <Ttl ch="METHODOLOGY." lt sx={{ whiteSpace: layout === "mobile" ? "normal" : "nowrap" }} />
        </div>
        <div
          style={{
            minWidth: 0,
            fontFamily: SN,
            fontSize: 14,
            color: "rgba(255,255,255,0.5)",
            maxWidth: 520,
            lineHeight: 1.7,
            paddingLeft: 0,
          }}
        >
          {
            "Deploying AI in industry requires more than models :- it requires understanding what data exists in that sector, what regulators enforce, and where operations break down. Generic AI shops miss this layer entirely. We build it in from day one."
          }
        </div>
      </div>
      <ConsultancyCardGrid desktopCols={2} tabletCols={2} tone="dark">
        {items.map((it, i) => {
          const hovered = methodologyHover === i;
          return (
            <ScrollGridItem key={it.h} sectionIndex={1} cardIndex={i}>
            <div
              onMouseEnter={() => setMethodologyHover(i)}
              onMouseLeave={() => setMethodologyHover(null)}
              style={{
                background: hovered ? "rgb(32,36,62)" : DK,
                padding: "34px 32px",
                transition: "background 0.22s ease, box-shadow 0.22s ease",
                boxShadow: hovered ? "inset 0 0 0 1px rgba(177,238,82,0.55)" : "none",
                position: "relative",
                zIndex: hovered ? 1 : 0,
                height: "100%",
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
                <div
                  style={{
                    fontFamily: MN,
                    fontWeight: 700,
                    fontSize: 11,
                    letterSpacing: "normal",
                    color: hovered ? L : L2,
                    transition: "color 0.22s ease",
                  }}
                >
                  0{i + 1}
                </div>
                <div
                  style={{
                    flex: 1,
                    height: 1,
                    background: hovered ? "rgba(150,238,82,0.35)" : "rgba(255,255,255,0.08)",
                    transition: "background 0.22s ease",
                  }}
                />
              </div>
              <div
                style={{
                  fontFamily: MN,
                  fontWeight: 600,
                  fontSize: 18,
                  color: hovered ? L2 : "#fff",
                  letterSpacing: "normal",
                  marginBottom: 14,
                  transition: "color 0.22s ease",
                }}
              >
                {it.h}
              </div>
              <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.5)" }}>{it.d}</div>
            </div>
            </ScrollGridItem>
          );
        })}
      </ConsultancyCardGrid>
    </ScrollSection>
  );
}

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

type OutcomeStatRow =
  | {
      keyword: string;
      l: string;
      kind: "percent";
      n: number;
    }
  | {
      keyword: string;
      l: string;
      kind: "moneyM";
      n: number;
      suffixPlus: boolean;
    };

const OUTCOME_STATS: OutcomeStatRow[] = [
  {
    keyword: "AI solutions for finance",
    kind: "moneyM",
    n: 47,
    suffixPlus: true,
    l: "In fraud and loss prevented across AI solutions for finance engagements",
  },
  {
    keyword: "AI in the healthcare industry",
    kind: "percent",
    n: 40,
    l: "Average admin time reduction through AI in the healthcare industry deployments",
  },
  {
    keyword: "AI solutions for manufacturing",
    kind: "percent",
    n: 34,
    l: "Average unplanned downtime reduction via AI solutions for manufacturing clients",
  },
  {
    keyword: "Vertical AI solutions",
    kind: "percent",
    n: 94,
    l: "Client retention rate across all vertical AI solutions engagements",
  },
];

function formatOutcomeValue(row: OutcomeStatRow, eased01: number) {
  const x = row.n * eased01;
  if (row.kind === "percent") {
    return `${Math.round(x)}%`;
  }
  return `$${Math.round(x)}M${row.suffixPlus ? "+" : ""}`;
}

function Outcomes() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  const sectionRef = useRef<HTMLElement>(null);
  /** Eased animation progress in [0, 1] — drives displayed metric values. */
  const [metricProgress, setMetricProgress] = useState(0);
  const [outcomeHover, setOutcomeHover] = useState<number | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let done = false;

    const runToOne = () => {
      if (done) return;
      done = true;
      if (reduceMotion) {
        setMetricProgress(1);
        return;
      }
      const durationMs = 1650;
      const t0 = performance.now();
      const step = (now: number) => {
        const u = Math.min(1, (now - t0) / durationMs);
        setMetricProgress(easeOutCubic(u));
        if (u < 1) {
          raf = requestAnimationFrame(step);
        }
      };
      raf = requestAnimationFrame(step);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          runToOne();
          obs.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <ScrollSection
      ref={sectionRef}
      as="section"
      index={2}
      style={{
        padding: `${pv}px ${gv}px`,
        background: `linear-gradient(180deg,${BG},${BG2})`,
        position: "relative",
        zIndex: 4,
        borderRadius: "24px 24px 0 0",
        marginTop: -24,
      }}
    >
      <div style={{ marginBottom: layout === "mobile" ? 28 : 40 }}>
        <Lbl
          ch="AI in Industry :- Results Across Verticals"
          sx={{
            fontSize: "clamp(15px, 1.55vw, 19px)",
            color: "rgba(12, 14, 22, 0.88)",
            letterSpacing: "normal",
          }}
        />
        <Ttl ch="WHAT AI IN INDUSTRY DELIVERS." />
      </div>
      <ConsultancyCardGrid desktopCols={4} tabletCols={2} tone="light">
        {OUTCOME_STATS.map((s, i) => {
          const hovered = outcomeHover === i;
          return (
            <ScrollGridItem key={s.keyword} sectionIndex={2} cardIndex={i}>
            <div
              onMouseEnter={() => setOutcomeHover(i)}
              onMouseLeave={() => setOutcomeHover(null)}
              style={{
                background: hovered
                  ? "linear-gradient(158deg,rgb(252,252,255),rgb(216,220,244))"
                  : `linear-gradient(160deg,${BG},${BG2})`,
                padding: layout === "mobile" ? "26px 22px" : "32px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                minHeight: 180,
                position: "relative",
                zIndex: hovered ? 1 : 0,
                transition: "background 0.22s ease, box-shadow 0.22s ease",
                boxShadow: hovered ? "inset 0 0 0 1px rgba(150,238,82,0.55)" : "none",
                height: "100%",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  fontFamily: MN,
                  fontWeight: 700,
                  fontSize: layout === "mobile" ? 11 : 12,
                  letterSpacing: "normal",
                  textTransform: "uppercase",
                  color: hovered ? L : L_TEXT_ON_LIGHT,
                  transition: "color 0.22s ease",
                }}
              >
                {s.keyword}
              </div>
              <div
                style={{
                  fontFamily: MN,
                  fontWeight: 700,
                  fontSize: "clamp(34px,3.4vw,52px)",
                  letterSpacing: "normal",
                  color: "#000",
                  lineHeight: 1,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {formatOutcomeValue(s, metricProgress)}
              </div>
              <div
                style={{
                  fontFamily: SN,
                  fontSize: layout === "mobile" ? 14 : 15,
                  lineHeight: 1.6,
                  color: hovered ? "rgba(0,0,0,0.82)" : "rgba(0,0,0,0.72)",
                  transition: "color 0.22s ease",
                }}
              >
                {s.l}
              </div>
            </div>
            </ScrollGridItem>
          );
        })}
      </ConsultancyCardGrid>
    </ScrollSection>
  );
}

export default function IndustriesPageClient() {
  return (
    <ConsultancyLoadedShell label="INDUSTRIES">
      <Nav current="Industries" />
      <PageHero
        eyebrow="AI in Industry :- 12 Verticals"
        title="AI IN INDUSTRY.|TWELVE VERTICALS.|DEEP BENCH."
        sub="alien.fi delivers specialized AI in industry engagements across twelve regulated, operationally complex verticals. Every project is led by sector specialists with 8+ years of vertical experience, not generalists, so your AI investment reaches production with the right domain context from day one."
        meta={[["Verticals served", "12"], ["Engagements", "270+"], ["Repeat clients", "94%"], ["Avg vertical tenure", "11 yrs"]]}
        accent="Discuss your vertical"
      />
      <Ticker
        words={[
          "Healthcare",
          "Insurance",
          "Manufacturing",
          "Retail",
          "Logistics",
          "Government",
          "Legal",
          "Energy",
          "Education",
          "Media",
          "Telecom",
          "Financial Services",
        ]}
      />
      <Selector />
      <Methodology />
      <Outcomes />
      <CTAStrip
        title="WHICH VERTICAL'S YOURS?"
        sub="Tell us your industry. We'll send three relevant AI in industry case studies, peer-company references from your sector, and a vertical AI solutions playbook built around your data environment, compliance requirements, and ROI benchmarks."
        cta="Start A Project"
      />
      <Footer />
    </ConsultancyLoadedShell>
  );
}
