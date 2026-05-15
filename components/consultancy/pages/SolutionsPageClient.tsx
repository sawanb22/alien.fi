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
  Ttl,
} from "@/components/consultancy/consultancy-ui";
import { gridCols, sectionGutter, sectionVPad, useLandingLayout } from "@/lib/landing-layout-context";
import { MN, SN } from "@/lib/consultancy/tokens";
import { BG, BG2, CD, DK, L, L2, PL } from "@/lib/consultancy/theme";
import { useState } from "react";

const SOLUTIONS = [
  {
    cat: "CONVERSATIONAL",
    tag: "GPT-4 · Claude · RAG · LangChain",
    t: "AI Customer Service Chatbot",
    d: "Handles FAQs, scheduling, order tracking, and escalation routing. Integrates with Salesforce, Zendesk, HubSpot, and Freshdesk.",
    price: "$28K + $4K/mo",
    stack: ["GPT-4", "Claude", "RAG", "LangChain"],
    kpi: ["64% ticket volume", "4.2x CSAT", "24/7 coverage"],
    ic: "◐",
  },
  {
    cat: "AUTOMATION",
    tag: "Layout LM · Tesseract · Azure AI · OpenAI",
    t: "Intelligent Document Processing",
    d: "Automated extraction from invoices, contracts, forms, and medical records using OCR and NLP.",
    price: "$45K + $6K/mo",
    stack: ["Layout LM", "Tesseract", "Azure AI", "OpenAI"],
    kpi: ["12x throughput", "78% manual review", "99.2% accuracy"],
    ic: "▤",
  },
  {
    cat: "ANALYTICS",
    tag: "XGBoost · Prophet · Streamlit · dbt",
    t: "Predictive Analytics Dashboard",
    d: "Sales forecasting, demand spikes, and churn prediction. Connects to Snowflake, BigQuery, and Redshift.",
    price: "$60K + $8K/mo",
    stack: ["XGBoost", "Prophet", "Streamlit", "dbt"],
    kpi: ["31% forecast accuracy", "22% inventory waste", "real time"],
    ic: "▦",
  },
  {
    cat: "RISK",
    tag: "PyTorch · SHAP · Kafka · Feast",
    t: "AI Fraud Detection Engine",
    d: "Anomaly detection across financial, insurance, and e-commerce platforms with explainable AI reporting.",
    price: "$80K + $12K/mo",
    stack: ["PyTorch", "SHAP", "Kafka", "Feast"],
    kpi: ["47% fraud loss", "under 50 ms scoring", "audit-ready logs"],
    ic: "⚠",
  },
  {
    cat: "HR AND PEOPLE",
    tag: "Sentence-BERT · LightGBM · Streamlit",
    t: "HR and Talent Intelligence",
    d: "Resume screening, candidate ranking, retention risk predictor, workforce sentiment.",
    price: "$35K + $5K/mo",
    stack: ["Sentence-BERT", "LightGBM", "Streamlit"],
    kpi: ["3x recruiter throughput", "18% predictable attrition", "bias-audited"],
    ic: "◊",
  },
  {
    cat: "OPERATIONS",
    tag: "Prophet · LightGBM · Airflow · dbt",
    t: "Inventory and Supply Chain AI",
    d: "Demand forecasting, automated reorder, supplier risk scoring in one dashboard.",
    price: "$70K + $9K/mo",
    stack: ["Prophet", "LightGBM", "Airflow", "dbt"],
    kpi: ["28% stockouts", "19% turn rate", "multi-echelon"],
    ic: "⛟",
  },
  {
    cat: "HEALTHCARE",
    tag: "Med-PaLM · LLMs · FHIR · Epic API",
    t: "Clinical Decision Support",
    d: "Treatment recommendations, drug interaction flags, ICD-10 accuracy improvements for EHRs.",
    price: "$120K + $15K/mo",
    stack: ["Med-PaLM", "LLMs", "FHIR", "Epic API"],
    kpi: ["22% diagnostic confidence", "41% adverse interactions", "HIPAA-SOC2"],
    ic: "✚",
  },
  {
    cat: "MARKETING",
    tag: "LightGBM · Vector DB · Segment · Braze",
    t: "Marketing Personalization Engine",
    d: "Next-best-action, email optimization, content recommendations from behavioral data.",
    price: "$50K + $7K/mo",
    stack: ["LightGBM", "Vector DB", "Segment", "Braze"],
    kpi: ["38% email CTR", "24% LTV", "1:1 personalization"],
    ic: "◇",
  },
];

const CATS = [
  "ALL",
  "CONVERSATIONAL",
  "AUTOMATION",
  "ANALYTICS",
  "RISK",
  "HR AND PEOPLE",
  "OPERATIONS",
  "HEALTHCARE",
  "MARKETING",
] as const;

function SolutionsGrid() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  const [cat, setCat] = useState<(typeof CATS)[number]>("ALL");
  /** Hover by stable solution title so filtered views do not mis-apply styles. */
  const [hov, setHov] = useState<string | null>(null);
  const [filterHov, setFilterHov] = useState<(typeof CATS)[number] | null>(null);
  const filtered = cat === "ALL" ? SOLUTIONS : SOLUTIONS.filter((s) => s.cat === cat);
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
          <Lbl ch="Pre-built · production-ready" />
          <Ttl ch="THE CATALOG." />
        </div>
        <div className="rv d2" style={{ fontFamily: SN, fontSize: 13, color: "rgba(0,0,0,0.4)", maxWidth: 300, textAlign: layout === "mobile" ? "left" : "right", lineHeight: 1.6 }}>
          Eight pre-built AI products with proven outcomes. Configure to your data, deploy in weeks, scale with our managed operations.
        </div>
      </div>
      <div className="rv d1" style={{ marginBottom: 28, display: "flex", gap: 8, flexWrap: "wrap" }}>
        {CATS.map((c) => {
          const isActive = cat === c;
          const pillHover = !isActive && filterHov === c;
          return (
            <button
              type="button"
              key={c}
              className="hv"
              onClick={() => setCat(c)}
              onMouseEnter={() => {
                if (!isActive) setFilterHov(c);
              }}
              onMouseLeave={() => setFilterHov(null)}
              style={{
                background: isActive ? "#000" : pillHover ? "rgba(21,24,43,0.12)" : CD,
                color: isActive ? L : "rgba(0,0,0,0.6)",
                border: "none",
                borderRadius: 20,
                padding: "8px 16px",
                fontFamily: MN,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "normal",
                cursor: "pointer",
                transition: "background .2s,color .2s,transform .15s,box-shadow .2s",
                textTransform: "uppercase",
                boxShadow: pillHover ? `0 0 0 1px ${PL}` : "none",
                transform: pillHover ? "translateY(-1px)" : "translateY(0)",
              }}
            >
              {c === "ALL" ? "All" : c === "HR AND PEOPLE" ? "HR and People" : c.charAt(0) + c.slice(1).toLowerCase()}
            </button>
          );
        })}
      </div>
      <div
        className="rv d2"
        style={{
          display: "grid",
          gridTemplateColumns: gridCols(layout, 2, 2),
          gap: 1,
          background: PL,
          borderRadius: layout === "mobile" ? 16 : 20,
          overflow: "hidden",
          border: `1px solid ${PL}`,
          alignItems: "stretch",
        }}
      >
        {filtered.map((s) => {
          const active = hov === s.t;
          const isWide = layout !== "mobile";
          const spanFull = isWide && filtered.length === 1;
          return (
            <div
              key={s.t}
              role="presentation"
              onMouseEnter={() => setHov(s.t)}
              onMouseLeave={() => setHov(null)}
              className="hv"
              style={{
                background: active ? `linear-gradient(150deg,rgb(220,244,200),${BG2})` : `linear-gradient(150deg,${BG},${BG2})`,
                padding: layout === "mobile" ? "24px 20px" : "28px 28px 32px",
                display: "flex",
                flexDirection: layout === "mobile" ? "column" : "row",
                alignItems: "stretch",
                gap: layout === "mobile" ? 18 : 0,
                columnGap: layout === "mobile" ? 0 : 24,
                minHeight: isWide ? 300 : undefined,
                height: "100%",
                boxSizing: "border-box",
                gridColumn: spanFull ? "1 / -1" : undefined,
                cursor: "pointer",
                transition: "background .25s ease, box-shadow .22s ease, transform .22s ease",
                boxShadow: active
                  ? `inset 0 0 0 1.5px ${L}88, 0 16px 36px rgba(21,24,43,0.1)`
                  : "0 2px 12px rgba(21,24,43,0.04)",
                transform: active ? "translateY(-3px)" : "translateY(0)",
              }}
            >
              {/* Narrow rail: icon only (chip lives in main column full-width so the rail does not steal horizontal space). */}
              <div
                style={{
                  flex: "0 0 auto",
                  width: layout === "mobile" ? "100%" : "auto",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: layout === "mobile" ? "row" : "column",
                  alignItems: layout === "mobile" ? "center" : "flex-start",
                  justifyContent: layout === "mobile" ? "flex-start" : "flex-start",
                  gap: layout === "mobile" ? 16 : 0,
                  paddingRight: layout === "mobile" ? 0 : 22,
                  borderRight: layout === "mobile" ? "none" : `1px solid rgba(21,24,43,0.1)`,
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: active ? "#000" : CD,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: MN,
                    fontSize: 30,
                    fontWeight: 700,
                    color: active ? L : "rgba(0,0,0,0.5)",
                    transition: "background .25s ease,color .25s ease,transform .22s ease,box-shadow .22s ease",
                    flexShrink: 0,
                    boxShadow: active ? `0 6px 18px rgba(0,0,0,0.18)` : "none",
                    transform: active ? "scale(1.03)" : "scale(1)",
                  }}
                >
                  {s.ic}
                </div>
                {layout === "mobile" ? <Chip ch={s.tag} sx={{ flex: 1, minWidth: 0 }} /> : null}
              </div>
              <div
                style={{
                  flex: "1 1 0%",
                  minWidth: 0,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: 14,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 0 }}>
                  {isWide ? (
                    <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
                      <Chip
                        ch={s.tag}
                        sx={{
                          width: "auto",
                          maxWidth: "min(100%, 280px)",
                          display: "inline-flex",
                          justifyContent: "center",
                          textAlign: "center",
                          whiteSpace: "normal",
                          lineHeight: 1.4,
                          boxSizing: "border-box",
                          padding: "6px 12px",
                        }}
                      />
                    </div>
                  ) : null}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, minWidth: 0 }}>
                    <span
                      style={{
                        fontFamily: MN,
                        fontSize: 9,
                        letterSpacing: "normal",
                        color: active ? "rgba(21,24,43,0.78)" : L2,
                        fontWeight: 700,
                        transition: "color .22s ease",
                      }}
                    >
                      {s.cat}
                    </span>
                    <span style={{ flexShrink: 0, display: "inline-flex" }}>
                      <Arr sz={10} cl={active ? "#000" : PL} sw={2} />
                    </span>
                  </div>
                  <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 16, letterSpacing: "normal", color: "#000", lineHeight: 1.3 }}>{s.t}</div>
                  <div style={{ fontFamily: SN, fontSize: 12.5, lineHeight: 1.65, color: "rgba(0,0,0,0.55)" }}>{s.d}</div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {s.stack.map((t) => (
                      <div
                        key={t}
                        style={{
                          padding: "4px 10px",
                          background: active ? "rgba(21,24,43,0.1)" : "rgba(21,24,43,0.06)",
                          borderRadius: 6,
                          fontFamily: MN,
                          fontSize: 9.5,
                          fontWeight: 500,
                          letterSpacing: "normal",
                          color: "rgba(0,0,0,0.55)",
                          transition: "background .2s ease",
                        }}
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: "auto", minWidth: 0, width: "100%" }}>
                  <div
                    aria-hidden
                    style={{
                      height: 1,
                      background: PL,
                      marginLeft: isWide ? 20 : 14,
                      width: isWide ? "calc(100% - 20px)" : "calc(100% - 14px)",
                      flexShrink: 0,
                    }}
                  />
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: layout === "mobile" ? "1fr" : "repeat(3, minmax(0, 1fr))",
                      gap: layout === "mobile" ? 10 : 12,
                      paddingTop: 12,
                      width: "100%",
                    }}
                  >
                    {s.kpi.map((k) => (
                      <div
                        key={k}
                        style={{
                          fontFamily: MN,
                          fontWeight: 600,
                          fontSize: 10.5,
                          color: "#000",
                          letterSpacing: "normal",
                          lineHeight: 1.45,
                          minWidth: 0,
                        }}
                      >
                        {k}
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                    <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 13, color: "#000" }}>{s.price}</div>
                    <Link
                      href="/contact"
                      className="hv"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                        fontFamily: MN,
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: "normal",
                        textTransform: "uppercase",
                        color: active ? L2 : "rgba(0,0,0,0.4)",
                        textDecoration: "none",
                        transition: "color .2s,transform .15s",
                        marginLeft: "auto",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#000";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = active ? L2 : "rgba(0,0,0,0.4)";
                      }}
                    >
                      Configure <Arr sz={9} cl="currentColor" sw={1.8} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function HowItWorks() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  const [stepHov, setStepHov] = useState<string | null>(null);
  const steps = [
    { n: "01", text: "Choose a solution from the catalog." },
    { n: "02", text: "Connect your data, tools, and permissions." },
    { n: "03", text: "Configure workflows and success metrics." },
    { n: "04", text: "Go live in 2 to 6 weeks with managed support." },
  ];
  return (
    <section
      id="how-it-works"
      style={{
        padding: `${pv}px ${gv}px`,
        background: DK,
        position: "relative",
        zIndex: 3,
        borderRadius: "24px 24px 0 0",
        marginTop: -24,
      }}
    >
      <div style={{ marginBottom: layout === "mobile" ? 28 : 40 }}>
        <div className="rv">
          <Lbl ch="From shelf to production" lt sx={{ letterSpacing: "normal" }} />
          <Ttl ch="HOW IT WORKS." lt sx={{ letterSpacing: "normal" }} />
        </div>
      </div>
      <div
        className="rv d1"
        style={{
          display: "grid",
          gridTemplateColumns: gridCols(layout, 4, 2),
          gap: layout === "mobile" ? 14 : 18,
          alignItems: "stretch",
        }}
      >
        {steps.map((s) => {
          const h = stepHov === s.n;
          return (
            <div key={s.n} style={{ height: "100%", minHeight: 0 }}>
              <div
                role="presentation"
                onMouseEnter={() => setStepHov(s.n)}
                onMouseLeave={() => setStepHov(null)}
                style={{
                  height: "100%",
                  boxSizing: "border-box",
                  borderRadius: layout === "mobile" ? 14 : 16,
                  padding: layout === "mobile" ? "22px 20px" : "26px 24px",
                  background: h ? "rgb(28,32,56)" : "rgba(255,255,255,0.05)",
                  border: h ? `1px solid rgba(177,238,82,0.35)` : "1px solid rgba(255,255,255,0.08)",
                  cursor: "default",
                  transition: "background .28s ease, border-color .28s ease, box-shadow .28s ease, transform .22s ease",
                  boxShadow: h ? `0 12px 32px rgba(0,0,0,0.35)` : "none",
                  transform: h ? "translateY(-3px)" : "translateY(0)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <span
                  style={{
                    fontFamily: MN,
                    fontWeight: 700,
                    fontSize: 10,
                    letterSpacing: "normal",
                    color: h ? L : L2,
                    transition: "color .25s ease",
                  }}
                >
                  {s.n}
                </span>
                <div
                  style={{
                    fontFamily: SN,
                    fontSize: 13.5,
                    lineHeight: 1.65,
                    color: h ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.72)",
                    transition: "color .25s ease",
                  }}
                >
                  {s.text}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function StackStrip() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  const [stackHov, setStackHov] = useState<string | null>(null);
  const stacks = [
    { h: "LLMs & Foundation Models", i: ["OpenAI", "Anthropic", "Mistral", "Llama", "Cohere", "Gemini"] },
    { h: "Data & ML Infra", i: ["Snowflake", "Databricks", "BigQuery", "MLflow", "Weights & Biases", "Airflow"] },
    { h: "Cloud", i: ["AWS", "Azure", "GCP", "Vercel", "Cloudflare", "Modal"] },
    { h: "Frameworks", i: ["LangChain", "LlamaIndex", "PyTorch", "TensorFlow", "Hugging Face", "vLLM"] },
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
      <div style={{ marginBottom: 40 }}>
        <div className="rv">
          <Lbl ch="Built on what works" />
          <Ttl ch="OUR STACK." />
        </div>
      </div>
      <div
        className="rv d1"
        style={{
          display: "grid",
          gridTemplateColumns: gridCols(layout, 4, 2),
          gap: 1,
          background: PL,
          borderRadius: layout === "mobile" ? 16 : 20,
          overflow: "hidden",
          border: `1px solid ${PL}`,
          alignItems: "stretch",
        }}
      >
        {stacks.map((s) => {
          const h = stackHov === s.h;
          return (
          <div
            key={s.h}
            role="presentation"
            onMouseEnter={() => setStackHov(s.h)}
            onMouseLeave={() => setStackHov(null)}
            style={{
              background: h ? `linear-gradient(165deg,${BG},rgb(232,234,248))` : `linear-gradient(160deg,${BG},${BG2})`,
              padding: "28px 28px",
              height: "100%",
              boxSizing: "border-box",
              cursor: "pointer",
              transition: "background .22s ease, box-shadow .22s ease, transform .22s ease",
              boxShadow: h ? `inset 0 0 0 1.5px ${L}55, 0 12px 28px rgba(21,24,43,0.08)` : "none",
              transform: h ? "translateY(-3px)" : "translateY(0)",
            }}
          >
            <Lbl ch={s.h} />
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {s.i.map((x) => (
                <div
                  key={x}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontFamily: MN,
                    fontSize: 12,
                    fontWeight: 500,
                    color: h ? "rgba(0,0,0,0.78)" : "rgba(0,0,0,0.7)",
                    padding: "6px 0",
                    borderBottom: `1px solid ${PL}`,
                    letterSpacing: "normal",
                    transition: "color .2s ease",
                  }}
                >
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: L2, flexShrink: 0 }} />
                  {x}
                </div>
              ))}
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
}

export default function SolutionsPageClient() {
  return (
    <ConsultancyLoadedShell label="SOLUTIONS">
      <Nav current="Solutions" />
      <PageHero
        eyebrow="Solutions"
        title="OFF-THE-SHELF.|YOUR STACK.|FAST."
        sub="Eight pre-built AI products with proven outcomes. Configure to your data, deploy in weeks, scale with our managed operations."
        meta={[["Catalog size", "8 solutions"], ["Avg deploy time", "2 to 6 wks per solution"], ["Starting price", "$28K per solution"], ["Managed SLA", "99.95% available"]]}
      />
      <Ticker words={["Fraud Detection", "HR Intelligence", "Supply Chain", "Clinical Support", "Personalization", "Chatbots", "Document AI", "Forecasting"]} />
      <SolutionsGrid />
      <HowItWorks />
      <StackStrip />
      <CTAStrip
        title="YOUR STACK. OUR SOLUTIONS. FASTER."
        sub="If you need enterprise AI solutions that are proven, configurable, and supported after launch, we can map the right product or custom fit for your business."
        cta="Start a project"
      />
      <Footer />
    </ConsultancyLoadedShell>
  );
}
