"use client";

import Link from "next/link";
import { ConsultancyLoadedShell } from "@/components/consultancy/ConsultancyLoadedShell";
import {
  Arr,
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
import { BG, BG2, CD, DK, L, L2, PL } from "@/lib/consultancy/theme";
import { useState } from "react";

type Ind = {
  id: string;
  n: string;
  ic: string;
  engagements: number;
  clients: string[];
  usecases: string[];
  highlight?: { v: string; l: string };
  color?: string;
  featured?: boolean;
};

const INDUSTRIES: Ind[] = [
  {
    id: "fin",
    n: "Financial Services",
    ic: "$",
    engagements: 42,
    clients: ["Kestrel Bank", "Atlas Capital", "Civica Credit Union"],
    usecases: ["Real-time fraud scoring", "Credit underwriting AI", "AML transaction monitoring", "Wealth advisor copilots"],
    highlight: { v: "$47M", l: "Fraud recovered · Kestrel Bank" },
    color: L,
  },
  {
    id: "health",
    n: "Healthcare",
    ic: "✚",
    engagements: 38,
    clients: ["NorthBay Health", "Mercy Regional", "Ridgeline Pharma"],
    usecases: ["EHR documentation copilots", "Imaging triage AI", "Clinical decision support", "Drug discovery pipelines"],
    highlight: { v: "41%", l: "Less charting · NorthBay Health" },
    color: "rgb(255,170,170)",
  },
  {
    id: "ins",
    n: "Insurance",
    ic: "⊡",
    engagements: 31,
    clients: ["Meridian Insurance", "Fairway P&C", "Atlas Re"],
    usecases: ["Claims automation", "SIU fraud detection", "Underwriting risk models", "Customer FNOL chatbots"],
    highlight: { v: "62%", l: "Faster claims · Meridian" },
    color: L,
    featured: true,
  },
  {
    id: "mfg",
    n: "Manufacturing",
    ic: "⚙",
    engagements: 28,
    clients: ["Oakridge Industrial", "Steele Auto", "Apex Components"],
    usecases: ["Predictive maintenance", "CV quality control", "Supply-chain forecasting", "Energy optimization"],
    highlight: { v: "34%", l: "Less downtime · Oakridge" },
  },
  {
    id: "retail",
    n: "Retail & Commerce",
    ic: "◫",
    engagements: 35,
    clients: ["Aurora Retail", "Northwind Goods", "Bayside Brands"],
    usecases: ["Personalization engines", "Demand forecasting", "Inventory optimization", "Conversational search"],
    highlight: { v: "18%", l: "Conversion lift · Aurora" },
  },
  {
    id: "log",
    n: "Logistics",
    ic: "⛟",
    engagements: 22,
    clients: ["Redline Logistics", "Pacific Freight", "Vector 3PL"],
    usecases: ["Route optimization", "ETA prediction", "Yard management AI", "Carrier scoring"],
    highlight: { v: "21%", l: "Fuel savings · Redline" },
  },
  {
    id: "gov",
    n: "Government",
    ic: "⌂",
    engagements: 14,
    clients: ["Civica State Agency", "Westport Municipality", "Federal Benefits Office"],
    usecases: ["Benefits fraud detection", "Constituent service AI", "Procurement intelligence", "Public records search"],
    highlight: { v: "$28M", l: "Recovered · Civica" },
  },
  {
    id: "legal",
    n: "Legal & Compliance",
    ic: "§",
    engagements: 19,
    clients: ["Lumen Legal", "Steel & Vance", "Ironside Compliance"],
    usecases: ["Contract review AI", "M&A diligence copilots", "Regulatory change tracking", "Privilege detection"],
    highlight: { v: "82%", l: "Faster review · Lumen" },
  },
  {
    id: "energy",
    n: "Energy & Utilities",
    ic: "◈",
    engagements: 11,
    clients: ["Helix Energy", "Ridgepoint Utilities", "BlueGrid"],
    usecases: ["Grid load forecasting", "Wellsite anomaly detection", "Customer churn models", "Carbon accounting AI"],
  },
  {
    id: "edu",
    n: "Education",
    ic: "⌘",
    engagements: 9,
    clients: ["Heritage University", "MapleNorth Schools", "EdNorth Group"],
    usecases: ["Student-success ML", "Adaptive curriculum", "Admin chatbots", "Plagiarism detection"],
  },
  {
    id: "media",
    n: "Media & Entertainment",
    ic: "⏵",
    engagements: 13,
    clients: ["Beacon Studios", "Loop Media", "Crescendo Audio"],
    usecases: ["Content recommendation", "Rights management AI", "Generative production tools", "Audience forecasting"],
  },
  {
    id: "tele",
    n: "Telecom",
    ic: "⌁",
    engagements: 8,
    clients: ["Northwave Telecom", "Pinnacle Mobile", "SignalCo"],
    usecases: ["Network anomaly detection", "Churn prediction", "Field-service optimization", "Customer service AI"],
  },
];

function IndustryCard({ ind, active, onClick }: { ind: Ind; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="hv"
      style={{
        background: active ? DK : `linear-gradient(160deg,${BG},${BG2})`,
        border: `1px solid ${active ? DK : PL}`,
        borderRadius: 14,
        padding: "24px 22px",
        cursor: "none",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        transition: "background .25s,transform .25s,border-color .25s",
        transform: active ? "translateY(-3px)" : "none",
        boxShadow: active ? "0 12px 32px rgba(0,0,0,0.18)" : "none",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: 10,
            background: active ? L : CD,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: MN,
            fontSize: 22,
            fontWeight: 700,
            color: active ? "#000" : "rgba(0,0,0,0.5)",
            transition: "all .25s",
          }}
        >
          {ind.ic}
        </div>
        <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 9, letterSpacing: "0.1em", color: active ? L2 : "rgba(0,0,0,0.4)" }}>
          {ind.engagements} ENG.
        </div>
      </div>
      <div
        style={{
          fontFamily: MN,
          fontWeight: 600,
          fontSize: 14,
          color: active ? "#fff" : "#000",
          letterSpacing: "0.03em",
          lineHeight: 1.3,
          transition: "color .25s",
        }}
      >
        {ind.n}
      </div>
      {ind.highlight ? (
        <div
          style={{
            paddingTop: 10,
            borderTop: `1px solid ${active ? "rgba(255,255,255,0.1)" : PL}`,
            display: "flex",
            alignItems: "baseline",
            gap: 8,
          }}
        >
          <span style={{ fontFamily: MN, fontWeight: 700, fontSize: 18, color: active ? L : "#000", letterSpacing: "0.02em" }}>
            {ind.highlight.v}
          </span>
        </div>
      ) : null}
    </button>
  );
}

function DetailPanel({ ind }: { ind: Ind }) {
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
            <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 9, letterSpacing: "0.16em", color: L2, marginBottom: 4 }}>INDUSTRY</div>
            <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 24, color: "#fff", letterSpacing: "0.03em" }}>{ind.n}</div>
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
            <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 9, letterSpacing: "0.14em", color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>
              ENGAGEMENTS
            </div>
            <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 30, color: "#fff", lineHeight: 1 }}>{ind.engagements}</div>
          </div>
          <div style={{ background: DK, padding: "18px 20px" }}>
            <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 9, letterSpacing: "0.14em", color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>
              CLIENTS
            </div>
            <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 30, color: "#fff", lineHeight: 1 }}>{ind.clients.length}+</div>
          </div>
        </div>
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 10, letterSpacing: "0.14em", color: "rgba(255,255,255,0.4)", marginBottom: 14 }}>
            USE CASES WE'VE DEPLOYED
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
                  letterSpacing: "0.02em",
                }}
              >
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: L, flexShrink: 0 }} />
                {u}
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 10, letterSpacing: "0.14em", color: "rgba(255,255,255,0.4)", marginBottom: 12 }}>
            SELECTED CLIENTS
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {ind.clients.map((c) => (
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
                  letterSpacing: "0.04em",
                }}
              >
                {c}
              </div>
            ))}
          </div>
        </div>
        {ind.highlight ? (
          <div style={{ padding: "24px 24px", background: `linear-gradient(135deg,${L},${L2})`, borderRadius: 14, marginBottom: 24 }}>
            <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 9, letterSpacing: "0.14em", color: "rgba(0,0,0,0.5)", marginBottom: 8 }}>
              FEATURED OUTCOME
            </div>
            <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 42, color: "#000", letterSpacing: "0.02em", lineHeight: 1, marginBottom: 8 }}>
              {ind.highlight.v}
            </div>
            <div style={{ fontFamily: MN, fontWeight: 500, fontSize: 11, letterSpacing: "0.06em", color: "#000", opacity: 0.7 }}>{ind.highlight.l}</div>
          </div>
        ) : null}
        <div style={{ display: "flex", gap: 10 }}>
          <Link
            href="/contact"
            className="hv"
            style={{
              flex: 1,
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
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "none",
              textDecoration: "none",
            }}
          >
            Talk to a {ind.n.split(" ")[0]} lead <Arr sz={11} cl="#000" sw={2.4} />
          </Link>
          <Link
            href="/case-studies"
            className="hv"
            style={{
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
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "none",
              textDecoration: "none",
            }}
          >
            Case studies →
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
          <Lbl ch="Twelve verticals · 270+ engagements" />
          <Ttl ch="WHO WE SERVE" />
        </div>
        <div style={{ fontFamily: SN, fontSize: 13, color: "rgba(0,0,0,0.4)", maxWidth: 320, textAlign: layout === "mobile" ? "left" : "right", lineHeight: 1.6 }}>
          Click any industry to see selected clients, our use-case repertoire, and signature outcomes.
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
        <div style={{ display: "grid", gridTemplateColumns: gridCols(layout, 3, 2), gap: 12 }}>
          {INDUSTRIES.map((ind) => (
            <IndustryCard key={ind.id} ind={ind} active={activeId === ind.id} onClick={() => setActiveId(ind.id)} />
          ))}
        </div>
        <DetailPanel ind={active} />
      </div>
    </section>
  );
}

function Methodology() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  const items = [
    {
      h: "Vertical fluency",
      d:
        "Every solution lead has 8+ years in the industry they cover. We learn your acronyms, your KPIs, and your regulatory landscape before week one.",
    },
    {
      h: "Bring-your-own-stack",
      d: "We architect for your environment — not the other way around. Snowflake or Databricks, AWS or Azure, on-prem or hybrid. We adapt.",
    },
    {
      h: "Compliance-first design",
      d: "HIPAA, SOC 2, ISO 27001, EU AI Act, FINRA — pick your acronym. Our discovery sprint surfaces compliance constraints in week one, not week ten.",
    },
    {
      h: "Reference network",
      d:
        "On request, we'll connect you with 3 peer-company executives who've worked with us in your industry. They take your call, not ours.",
    },
  ];
  return (
    <section style={{ padding: `${pv}px ${gv}px`, background: DK, position: "relative", zIndex: 3, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
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
            "Every vertical has a hidden grammar — what data exists, what regulators care about, where the bodies are buried. Generic AI shops miss it. We don't."
          }
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: gridCols(layout, 2, 2),
          gap: 1,
          background: "rgba(255,255,255,0.05)",
          borderRadius: layout === "mobile" ? 16 : 20,
          overflow: "hidden",
        }}
      >
        {items.map((it, i) => (
          <div key={it.h} style={{ background: DK, padding: "34px 32px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
              <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 11, letterSpacing: "0.16em", color: L2 }}>
                0{i + 1}
              </div>
              <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
            </div>
            <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 18, color: "#fff", letterSpacing: "0.03em", marginBottom: 14 }}>{it.h}</div>
            <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.5)" }}>{it.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function IndustriesPageClient() {
  return (
    <ConsultancyLoadedShell label="INDUSTRIES">
      <Nav current="Industries" />
      <PageHero
        eyebrow="Industries"
        title="TWELVE|VERTICALS.|DEEP BENCH."
        sub="Eight years of operational depth across regulated, complex industries. Solution leads with 8+ years of vertical experience own every engagement."
        meta={[["Verticals served", "12"], ["Engagements", "270+"], ["Repeat clients", "94%"], ["Avg vertical tenure", "11 yrs"]]}
        accent="Adding Aerospace + Agritech in Q3"
      />
      <Ticker words={["Banking", "Healthcare", "Insurance", "Manufacturing", "Retail", "Logistics", "Government", "Legal", "Energy", "Education", "Media", "Telecom"]} />
      <Selector />
      <Methodology />
      <CTAStrip
        title="WHICH VERTICAL'S YOURS?"
        sub="Tell us your industry. We'll send 3 case studies, peer-company references, and a vertical-specific playbook."
      />
      <Footer />
    </ConsultancyLoadedShell>
  );
}
