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
import { MN, OT, SN } from "@/lib/consultancy/tokens";
import { BG, BG2, CD, DK, L, L2, PL } from "@/lib/consultancy/theme";
import { useState } from "react";

const SOLUTIONS = [
  {
    cat: "CONVERSATIONAL",
    tag: "2–4 wk deploy",
    t: "AI Customer Service Chatbot",
    d: "Handles FAQs, scheduling, order tracking. Integrates with Salesforce, Zendesk, HubSpot, Freshdesk.",
    price: "$28K + $4K/mo",
    stack: ["GPT-4", "Claude", "RAG", "LangChain"],
    kpi: ["↓ 64% ticket volume", "↑ 4.2× CSAT", "24/7 coverage"],
    ic: "◐",
  },
  {
    cat: "AUTOMATION",
    tag: "95%+ accuracy",
    t: "Intelligent Document Processing",
    d: "Automated extraction from invoices, contracts, forms, medical records using OCR + NLP.",
    price: "$45K + $6K/mo",
    stack: ["Layout LM", "Tesseract", "Azure DI", "OpenAI"],
    kpi: ["↑ 12× throughput", "↓ 78% manual review", "99.2% accuracy"],
    ic: "▤",
  },
  {
    cat: "ANALYTICS",
    tag: "Plug-and-play",
    t: "Predictive Analytics Dashboard",
    d: "Sales forecasting, demand spikes, churn prediction. Connects to Snowflake, BigQuery, Redshift.",
    price: "$60K + $8K/mo",
    stack: ["XGBoost", "Prophet", "Streamlit", "dbt"],
    kpi: ["↑ 31% forecast accuracy", "↓ 22% inventory waste", "Real-time"],
    ic: "▦",
  },
  {
    cat: "RISK",
    tag: "Real-time",
    t: "AI Fraud Detection Engine",
    d: "Anomaly detection across financial, insurance, e-commerce platforms with explainable AI reporting.",
    price: "$80K + $12K/mo",
    stack: ["PyTorch", "SHAP", "Kafka", "Feast"],
    kpi: ["↓ 47% fraud loss", "<50ms scoring", "Audit-ready logs"],
    ic: "⚠",
  },
  {
    cat: "HR & PEOPLE",
    tag: "Bias-reduced",
    t: "HR & Talent Intelligence",
    d: "Resume screening, candidate ranking, retention risk predictor, workforce sentiment.",
    price: "$35K + $5K/mo",
    stack: ["Sentence-BERT", "LightGBM", "Streamlit"],
    kpi: ["↑ 3× recruiter throughput", "↓ 18% regrettable attrition", "Bias-audited"],
    ic: "◊",
  },
  {
    cat: "OPERATIONS",
    tag: "ML-driven",
    t: "Inventory & Supply Chain AI",
    d: "Demand forecasting, automated reorders, supplier risk scoring in one dashboard.",
    price: "$70K + $9K/mo",
    stack: ["Prophet", "LightGBM", "Airflow", "dbt"],
    kpi: ["↓ 28% stock-outs", "↑ 19% turn rate", "Multi-echelon"],
    ic: "⛟",
  },
  {
    cat: "HEALTHCARE",
    tag: "HIPAA-compliant",
    t: "Clinical Decision Support",
    d: "Treatment recommendations, drug interaction flags, ICD-10 accuracy improvements for EHRs.",
    price: "$120K + $15K/mo",
    stack: ["Med-PaLM", "UMLS", "FHIR", "Epic API"],
    kpi: ["↑ 22% diagnostic confidence", "↓ 41% adverse interactions", "HIPAA·SOC2"],
    ic: "✚",
  },
  {
    cat: "MARKETING",
    tag: "Real-time",
    t: "Marketing Personalization Engine",
    d: "Next-best-action, email optimization, content recommendations from behavioral data.",
    price: "$50K + $7K/mo",
    stack: ["LightGBM", "Vector DB", "Segment", "Braze"],
    kpi: ["↑ 38% email CTR", "↑ 24% LTV", "1:1 personalization"],
    ic: "◇",
  },
];

const CATS = [
  "ALL",
  "CONVERSATIONAL",
  "AUTOMATION",
  "ANALYTICS",
  "RISK",
  "HR & PEOPLE",
  "OPERATIONS",
  "HEALTHCARE",
  "MARKETING",
] as const;

function SolutionsGrid() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("ALL");
  const [hov, setHov] = useState<number | null>(null);
  const filtered = cat === "ALL" ? SOLUTIONS : SOLUTIONS.filter((s) => s.cat === cat);
  return (
    <section style={{ padding: `80px ${OT}px`, background: `linear-gradient(180deg,${BG2},${BG})`, position: "relative", zIndex: 2 }}>
      <div style={{ padding: "0 9px", marginBottom: 36, display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
        <div className="rv">
          <Lbl ch="Pre-built · production-ready" />
          <Ttl ch="THE CATALOG" />
        </div>
        <div className="rv d2" style={{ fontFamily: SN, fontSize: 13, color: "rgba(0,0,0,0.4)", maxWidth: 280, textAlign: "right", lineHeight: 1.6 }}>
          Eight battle-tested solutions. Configure to your stack in weeks, not quarters.
        </div>
      </div>
      <div className="rv d1" style={{ padding: "0 9px", marginBottom: 28, display: "flex", gap: 8, flexWrap: "wrap" }}>
        {CATS.map((c) => {
          const isActive = cat === c;
          return (
            <button
              type="button"
              key={c}
              className="hv"
              onClick={() => setCat(c)}
              style={{
                background: isActive ? "#000" : CD,
                color: isActive ? L : "rgba(0,0,0,0.6)",
                border: "none",
                borderRadius: 20,
                padding: "8px 16px",
                fontFamily: MN,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.1em",
                cursor: "none",
                transition: "background .2s,color .2s",
                textTransform: "uppercase",
              }}
            >
              {c}
            </button>
          );
        })}
      </div>
      <div
        className="rv d2"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: 1,
          background: PL,
          borderRadius: 20,
          overflow: "hidden",
          border: `1px solid ${PL}`,
        }}
      >
        {filtered.map((s, i) => {
          const active = hov === i;
          return (
            <div
              key={s.t}
              role="presentation"
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
              className="hv"
              style={{
                background: active ? `linear-gradient(150deg,rgb(220,244,200),${BG2})` : `linear-gradient(150deg,${BG},${BG2})`,
                padding: "32px 32px",
                display: "flex",
                gap: 24,
                transition: "background .25s",
                boxShadow: active ? `inset 0 0 0 1.5px ${L}66` : "none",
              }}
            >
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
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
                    transition: "all .25s",
                  }}
                >
                  {s.ic}
                </div>
                <Chip ch={s.tag} />
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: MN, fontSize: 9, letterSpacing: "0.14em", color: L2, fontWeight: 700 }}>{s.cat}</span>
                  <Arr sz={10} cl={active ? "#000" : PL} sw={2} />
                </div>
                <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 16, letterSpacing: "0.03em", color: "#000", lineHeight: 1.3 }}>{s.t}</div>
                <div style={{ fontFamily: SN, fontSize: 12.5, lineHeight: 1.65, color: "rgba(0,0,0,0.5)" }}>{s.d}</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 4 }}>
                  {s.stack.map((t) => (
                    <div
                      key={t}
                      style={{
                        padding: "3px 9px",
                        background: "rgba(21,24,43,0.06)",
                        borderRadius: 5,
                        fontFamily: MN,
                        fontSize: 9.5,
                        fontWeight: 500,
                        letterSpacing: "0.04em",
                        color: "rgba(0,0,0,0.55)",
                      }}
                    >
                      {t}
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3,1fr)",
                    gap: 8,
                    marginTop: 8,
                    paddingTop: 14,
                    borderTop: `1px solid ${PL}`,
                  }}
                >
                  {s.kpi.map((k) => (
                    <div key={k} style={{ fontFamily: MN, fontWeight: 600, fontSize: 10.5, color: "#000", letterSpacing: "0.02em", lineHeight: 1.4 }}>
                      {k}
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 6 }}>
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
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: active ? L2 : "rgba(0,0,0,0.4)",
                      textDecoration: "none",
                      transition: "color .2s",
                    }}
                  >
                    Configure <Arr sz={9} cl={active ? L2 : "rgba(0,0,0,0.4)"} sw={1.8} />
                  </Link>
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
  const steps = [
    {
      n: "01",
      t: "Pick a solution",
      d: "Browse the catalog. Schedule a 30-min fit call with one of our solution leads.",
    },
    {
      n: "02",
      t: "Configure",
      d: "We map the solution to your stack, data sources, and SLAs. Fixed quote within 48 hours.",
    },
    {
      n: "03",
      t: "Deploy",
      d: "2–6 week deployment with daily standups. We handle infra, integrations, security review.",
    },
    {
      n: "04",
      t: "Operate",
      d: "Optional managed services from day one. We monitor, retrain, and tune as you grow.",
    },
  ];
  return (
    <section style={{ padding: `80px ${OT}px`, background: DK, position: "relative", zIndex: 3, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
      <div style={{ padding: "0 9px", marginBottom: 48 }}>
        <div className="rv">
          <Lbl ch="From shelf to production" lt />
          <Ttl ch="HOW IT WORKS" lt />
        </div>
      </div>
      <div className="rv d1" style={{ padding: "0 9px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: "rgba(255,255,255,0.06)", borderRadius: 20, overflow: "hidden" }}>
        {steps.map((s, i) => (
          <Tilt key={s.n} int={6} sx={{ height: "100%" }}>
            <div style={{ background: DK, padding: "36px 28px", display: "flex", flexDirection: "column", gap: 14, height: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: MN, fontWeight: 700, fontSize: 10, letterSpacing: "0.12em", color: L2 }}>{s.n}</span>
                {i < 3 ? <Arr sz={10} cl="rgba(255,255,255,0.2)" sw={2} /> : null}
              </div>
              <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 18, letterSpacing: "0.03em", color: "#fff" }}>{s.t}</div>
              <div style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />
              <div style={{ fontFamily: SN, fontSize: 12.5, lineHeight: 1.7, color: "rgba(255,255,255,0.5)" }}>{s.d}</div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}

function StackStrip() {
  const stacks = [
    { h: "LLMs & Foundation Models", i: ["OpenAI", "Anthropic", "Mistral", "Llama", "Cohere", "Gemini"] },
    { h: "Data & ML Infra", i: ["Snowflake", "Databricks", "BigQuery", "MLflow", "Weights & Biases", "Airflow"] },
    { h: "Cloud", i: ["AWS", "Azure", "GCP", "Vercel", "Cloudflare", "Modal"] },
    { h: "Frameworks", i: ["LangChain", "LlamaIndex", "PyTorch", "TensorFlow", "Hugging Face", "vLLM"] },
  ];
  return (
    <section
      style={{
        padding: `80px ${OT}px`,
        background: `linear-gradient(180deg,${BG},${BG2})`,
        position: "relative",
        zIndex: 4,
        borderRadius: "24px 24px 0 0",
        marginTop: -24,
      }}
    >
      <div style={{ padding: "0 9px", marginBottom: 40 }}>
        <div className="rv">
          <Lbl ch="Built on what works" />
          <Ttl ch="OUR STACK" />
        </div>
      </div>
      <div
        className="rv d1"
        style={{ padding: "0 9px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: PL, borderRadius: 20, overflow: "hidden", border: `1px solid ${PL}` }}
      >
        {stacks.map((s) => (
          <div key={s.h} style={{ background: `linear-gradient(160deg,${BG},${BG2})`, padding: "28px 28px" }}>
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
                    color: "rgba(0,0,0,0.7)",
                    padding: "6px 0",
                    borderBottom: `1px solid ${PL}`,
                    letterSpacing: "0.03em",
                  }}
                >
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: L2, flexShrink: 0 }} />
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

export default function SolutionsPageClient() {
  return (
    <ConsultancyLoadedShell label="SOLUTIONS">
      <Nav current="Solutions" />
      <PageHero
        eyebrow="Solutions"
        title="OFF-THE-SHELF|YOUR STACK,|FAST."
        sub="Eight pre-built AI products with proven outcomes. Configure to your data, deploy in weeks, scale with our managed operations."
        meta={[["Catalog size", "8 solutions"], ["Avg deploy", "2–6 weeks"], ["Starting price", "$28K"], ["Managed SLA", "99.95%"]]}
        accent="2 new solutions in beta"
      />
      <Ticker words={["Chatbots", "Document AI", "Forecasting", "Fraud Detection", "HR Intelligence", "Supply Chain", "Clinical Support", "Personalization"]} />
      <SolutionsGrid />
      <HowItWorks />
      <StackStrip />
      <CTAStrip title="DEPLOY THIS QUARTER" sub="Pick a solution from the catalog. We'll send a tailored config and quote within 48 hours." />
      <Footer />
    </ConsultancyLoadedShell>
  );
}
