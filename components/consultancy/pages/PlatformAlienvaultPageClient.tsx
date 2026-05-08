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
import { BG, BG2, DK, L, L2, PL } from "@/lib/consultancy/theme";

const MODULES = [
  {
    ic: "⌬",
    t: "Fraud Detection Engine",
    d: "Real-time anomaly detection across transactions, users, and devices for faster fraud response and lower losses.",
    m: "Outcome: Lower fraud exposure",
  },
  {
    ic: "✚",
    t: "Credit Risk Copilot",
    d: "Summarize borrower profiles, analyze underwriting signals, and support credit decisions with structured evidence.",
    m: "Outcome: Faster underwriting",
  },
  {
    ic: "◭",
    t: "Compliance Monitor",
    d: "Track policy breaches, regulatory flags, and audit trails across financial workflows with defensible logging.",
    m: "Outcome: Cleaner audit readiness",
  },
  {
    ic: "◯",
    t: "Collections Assistant",
    d: "Prioritize accounts, recommend next actions, and automate outreach workflows with tone and timing controls.",
    m: "Outcome: Better recovery rates",
  },
  {
    ic: "⊞",
    t: "Treasury Forecasting",
    d: "Predict cash flow, liquidity shifts, and near-term exposure using historical and live finance data.",
    m: "Outcome: Improved planning accuracy",
  },
  {
    ic: "◐",
    t: "Customer Ops Copilot",
    d: "Support finance operations, service teams, and escalations with secure retrieval and workflow automation.",
    m: "Outcome: Faster internal resolution",
  },
];

const COMPLIANCE = [
  { n: "HIPAA", d: "For healthcare-linked finance workflows and sensitive data handling." },
  { n: "SOC 2 Type II", d: "Annual third-party audit readiness and continuous control alignment." },
  { n: "PCI DSS", d: "Payment and card-data handling safeguards for finance operations." },
  { n: "SOX", d: "Audit trail support for reporting, approvals, and controls." },
  { n: "NIST AI RMF", d: "Risk management mapping for every model and workflow." },
  { n: "FFIEC aligned", d: "Built to support banking AI governance expectations." },
];

function VaultHero() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const stacked = layout !== "desktop";
  return (
    <section
      style={{
        paddingTop: 60,
        background: "#fff",
        position: "relative",
        overflow: "hidden",
        borderBottom: `1px solid ${PL}`,
      }}
    >
      <div
        style={{
          position: "absolute",
          right: -150,
          top: 60,
          width: 560,
          height: 560,
          borderRadius: "50%",
          background: `radial-gradient(circle,${L}33,transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      <div style={{ paddingLeft: gv, paddingRight: gv }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: stacked ? "1fr" : "320px 1fr",
            minHeight: stacked ? undefined : 480,
          }}
        >
          <div
            style={{
              padding: stacked ? "36px 0 28px" : "60px 36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 24,
              borderRight: stacked ? "none" : `1px solid ${PL}`,
              borderBottom: stacked ? `1px solid ${PL}` : "none",
              background: "rgb(250,251,255)",
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
                  color: "rgba(0,0,0,0.4)",
                  marginBottom: 32,
                }}
              >
                <Link
                  href="/"
                  style={{ color: "rgba(0,0,0,0.5)", textDecoration: "none" }}
                >
                  Home
                </Link>
                <span style={{ opacity: 0.4 }}>/</span>
                <span style={{ color: "rgba(0,0,0,0.5)" }}>Platforms</span>
                <span style={{ opacity: 0.4 }}>/</span>
                <span style={{ color: "#000" }}>AlienVault</span>
              </div>
              <Lbl ch="Platform · Finance · Regulated" />
              <div
                style={{
                  fontFamily: MN,
                  fontWeight: 600,
                  fontSize: 24,
                  color: "#000",
                  lineHeight: 1.2,
                  marginBottom: 14,
                  letterSpacing: "0.02em",
                }}
              >
                AlienVault™
              </div>
              <div
                style={{
                  fontFamily: SN,
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: "rgba(0,0,0,0.55)",
                }}
              >
                A vertical AI platform for banks and financial services teams. Six finance AI modules. One secure tenant. Live in weeks, not quarters.
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                ["Modules", "6 to 4 in beta"],
                ["Avg deploy", "3 weeks"],
                ["Clients live", "12,400+"],
                ["Tenant model", "Single or multi"],
                ["Pricing", "From $180K/yr"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "grid", gridTemplateColumns: "max-content 1fr", alignItems: "center", gap: 12, padding: "8px 0", borderBottom: `1px solid ${PL}` }}>
                  <span style={{ fontFamily: MN, fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)", whiteSpace: "nowrap" }}>{k}</span>
                  <span style={{ fontFamily: MN, fontSize: 11, fontWeight: 600, color: "#000", textAlign: "right" }}>{v}</span>
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
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 24,
                alignSelf: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <Chip ch="Platform" />
              <Chip ch="Banking" bg={DK} cl={L} />
              <Chip ch="SOC 2 and PCI ready" />
            </div>
            <div
              className="rv"
              style={{
                fontFamily: MN,
                fontWeight: 300,
                fontSize: "clamp(38px,5vw,80px)",
                lineHeight: 0.98,
                color: "#000",
                letterSpacing: "0.03em",
                marginBottom: 28,
              }}
            >
              <div style={{ fontWeight: 300 }}>BANKING AI</div>
              <div style={{ fontWeight: 500 }}>BUILT FOR THE</div>
              <div style={{ fontWeight: 700, color: DK }}>LEDGER.</div>
            </div>
            <div
              className="rv d3"
              style={{
                fontFamily: SN,
                fontSize: 16,
                lineHeight: 1.7,
                color: "rgba(0,0,0,0.6)",
                maxWidth: 640,
                marginBottom: 32,
              }}
            >
              AlienVault is a vertical AI platform for finance teams. Six modules deployed in a secure tenant for banks, lending, payments, and operations teams, without a multi-year transformation program.
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link
                href="/contact"
                className="hv"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: DK,
                  color: L,
                  borderRadius: 24,
                  padding: "14px 22px",
                  fontFamily: MN,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "background .2s,color .2s,transform .15s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgb(230,230,234)"; e.currentTarget.style.color = "#000"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = DK; e.currentTarget.style.color = L; }}
              >
                Book a finance demo <Arr sz={10} cl="currentColor" sw={2.4} />
              </Link>
              <Link
                href="/case-studies/kestrel-bank"
                className="hv"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "transparent",
                  color: "#000",
                  border: `1.5px solid ${PL}`,
                  borderRadius: 24,
                  padding: "14px 22px",
                  fontFamily: MN,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "background .2s,color .2s,border-color .2s,transform .15s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgb(230,230,234)"; e.currentTarget.style.color = "#000"; e.currentTarget.style.borderColor = "rgb(230,230,234)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#000"; e.currentTarget.style.borderColor = PL; }}
              >
                Kestrel case study <Arr sz={10} cl="currentColor" sw={2.4} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ModulesSection() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  return (
    <section
      style={{
        padding: `${pv}px ${gv}px`,
        background: `linear-gradient(180deg,${BG2},${BG})`,
        position: "relative",
      }}
    >
      <div
        style={{
          marginBottom: 36,
          display: "flex",
          alignItems: layout === "mobile" ? "flex-start" : "flex-end",
          justifyContent: "space-between",
          flexDirection: layout === "mobile" ? "column" : "row",
          gap: layout === "mobile" ? 12 : 0,
        }}
      >
        <div>
          <Lbl ch="Six modules · All interoperable" />
          <Ttl ch="WHAT'S INSIDE." />
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: gridCols(layout, 3, 2),
          gap: 1,
          background: PL,
          borderRadius: 20,
          overflow: "hidden",
          border: `1px solid ${PL}`,
        }}
      >
        {MODULES.map((m, i) => (
          <Tilt
            key={m.t}
            int={4}
            ch={
              <div
                style={{
                  background: `linear-gradient(160deg,${BG},${BG2})`,
                  padding: "30px 28px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "rgb(229,231,245)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: MN,
                      fontSize: 24,
                      fontWeight: 700,
                      color: "rgba(0,0,0,0.55)",
                    }}
                  >
                    {m.ic}
                  </div>
                  <div
                    style={{
                      fontFamily: MN,
                      fontWeight: 700,
                      fontSize: 9,
                      letterSpacing: "0.14em",
                      color: L2,
                    }}
                  >
                    {`0${i + 1}`}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: MN,
                    fontWeight: 600,
                    fontSize: 15,
                    color: "#000",
                    letterSpacing: "0.02em",
                    lineHeight: 1.3,
                  }}
                >
                  {m.t}
                </div>
                <div
                  style={{
                    fontFamily: SN,
                    fontSize: 12.5,
                    lineHeight: 1.65,
                    color: "rgba(0,0,0,0.5)",
                    flex: 1,
                  }}
                >
                  {m.d}
                </div>
                <div
                  style={{
                    padding: "10px 12px",
                    background: "#000",
                    borderRadius: 8,
                    fontFamily: MN,
                    fontSize: 11,
                    fontWeight: 700,
                    color: L,
                    letterSpacing: "0.04em",
                  }}
                >
                  {m.m}
                </div>
              </div>
            }
          />
        ))}
      </div>
    </section>
  );
}

function ComplianceSection() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  return (
    <section
      style={{
        padding: `${pv}px ${gv}px`,
        background: DK,
        position: "relative",
      }}
    >
      <div
        style={{
          marginBottom: 40,
          display: "grid",
          gridTemplateColumns: layout === "desktop" ? "320px 1fr" : "1fr",
          gap: layout === "mobile" ? 20 : 60,
          alignItems: "flex-end",
        }}
      >
        <div>
          <Lbl ch="Trust isn't optional" lt />
          <Ttl ch="COMPLIANCE." lt />
        </div>
        <div
          style={{
            fontFamily: SN,
            fontSize: 14,
            color: "rgba(255,255,255,0.5)",
            maxWidth: 640,
            lineHeight: 1.7,
          }}
        >
          AlienVault ships with the controls finance and banking teams need from day one. It is designed for regulated environments where security, traceability, and policy alignment matter as much as model performance.
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: gridCols(layout, 3, 2),
          gap: 1,
          background: "rgba(255,255,255,0.06)",
          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        {COMPLIANCE.map((c) => (
          <div key={c.n} style={{ background: DK, padding: "30px 28px" }}>
            <div
              style={{
                fontFamily: MN,
                fontWeight: 700,
                fontSize: 18,
                color: L,
                letterSpacing: "0.04em",
                marginBottom: 12,
              }}
            >
              {c.n}
            </div>
            <div
              style={{
                fontFamily: SN,
                fontSize: 13,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.55)",
              }}
            >
              {c.d}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function PlatformAlienvaultPageClient() {
  return (
    <ConsultancyLoadedShell label="ALIENVAULT">
      <Nav current="Platform" />
      <VaultHero />
      <ModulesSection />
      <ComplianceSection />
      <CTAStrip
        title="BRING IT TO YOUR FINANCE TEAM."
        sub="A 30-minute discovery call. We will send sample audit packs, three peer references, and a fixed-fee deployment quote."
      />
      <Footer />
    </ConsultancyLoadedShell>
  );
}
