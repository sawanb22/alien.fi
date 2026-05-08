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
    ic: "◈",
    t: "Personalization Engine",
    d: "Recommend next best actions, offers, and content using customer behavior, basket data, and channel signals. Built for teams deploying a retail AI platform that can lift conversion without adding complexity.",
    m: "Outcome: +24% basket lift",
  },
  {
    ic: "▦",
    t: "Demand Forecasting AI",
    d: "Predict demand by location, product, menu item, and seasonality to improve staffing and inventory decisions. Useful across hospitality AI solutions where planning errors hit margin quickly.",
    m: "Outcome: +22% forecast accuracy",
  },
  {
    ic: "◐",
    t: "Guest Service Copilot",
    d: "Support store staff, hotel teams, and service agents with fast answers, policy guidance, and escalation workflows.",
    m: "Outcome: +31% resolution speed",
  },
  {
    ic: "⌬",
    t: "Restaurant Ops AI",
    d: "Track prep, staffing, waste, and reorder signals across restaurant operations with live recommendations. A practical restaurant AI module for multi-location operators.",
    m: "Outcome: -18% food waste",
  },
  {
    ic: "◊",
    t: "Loyalty and CRM Intelligence",
    d: "Identify churn risk, upsell moments, and campaign opportunities across customer segments and visit histories.",
    m: "Outcome: +27% repeat visits",
  },
  {
    ic: "▤",
    t: "Workforce Scheduling Copilot",
    d: "Recommend staffing levels, shift coverage, and scheduling adjustments using traffic, demand, and labor inputs.",
    m: "Outcome: +19% labor efficiency",
  },
];

const COMPLIANCE = [
  { n: "SOC 2 Type II", d: "Operational control readiness for multi-site deployments." },
  { n: "PCI DSS", d: "Aligned controls for payment-adjacent restaurant AI and retail workflows." },
  { n: "Tenant Isolation", d: "Separation across brands, regions, and operating units." },
  { n: "Audit Logs", d: "Traceable actions, recommendations, and approvals across locations." },
  { n: "Role-Based Access", d: "Permissions for store managers, operators, marketers, and service teams." },
  { n: "NIST AI RMF", d: "Risk management mapping for every model and workflow." },
];

function ServeHero() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const stacked = layout !== "desktop";
  return (
    <section style={{ paddingTop: 60, background: "#fff", position: "relative", overflow: "hidden", borderBottom: `1px solid ${PL}` }}>
      <div style={{ position: "absolute", right: -150, top: 60, width: 560, height: 560, borderRadius: "50%", background: `radial-gradient(circle,${L}33,transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ paddingLeft: gv, paddingRight: gv }}>
        <div style={{ display: "grid", gridTemplateColumns: stacked ? "1fr" : "320px 1fr", minHeight: stacked ? undefined : 480 }}>
          <div style={{ padding: stacked ? "36px 0 28px" : "60px 36px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 24, borderRight: stacked ? "none" : `1px solid ${PL}`, borderBottom: stacked ? `1px solid ${PL}` : "none", background: "rgb(250,251,255)" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: MN, fontSize: 9, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: 32 }}>
                <Link href="/" style={{ color: "rgba(0,0,0,0.5)", textDecoration: "none" }}>Home</Link>
                <span style={{ opacity: 0.4 }}>/</span>
                <span style={{ color: "rgba(0,0,0,0.5)" }}>Platforms</span>
                <span style={{ opacity: 0.4 }}>/</span>
                <span style={{ color: "#000" }}>AlienServe</span>
              </div>
              <Lbl ch="Platform · Retail · Hospitality" />
              <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 24, color: "#000", lineHeight: 1.2, marginBottom: 14, letterSpacing: "0.02em" }}>AlienServe™</div>
              <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.7, color: "rgba(0,0,0,0.55)" }}>
                A vertical AI platform for retail, hospitality, and restaurant teams. Six customer and operations modules. One secure tenant. Live in weeks across stores, locations, and service workflows.
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                ["Modules", "6 · 4 in beta"],
                ["Avg deploy", "3 weeks"],
                ["Locations live", "12,400+"],
                ["Tenant model", "Single + multi location"],
                ["Pricing", "From $180K/yr"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "grid", gridTemplateColumns: "minmax(112px, auto) minmax(0, 1fr)", alignItems: "start", gap: 12, padding: "8px 0", borderBottom: `1px solid ${PL}` }}>
                  <span style={{ fontFamily: MN, fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)", whiteSpace: "normal", lineHeight: 1.2 }}>{k}</span>
                  <span style={{ fontFamily: MN, fontSize: 11, fontWeight: 600, color: "#000", textAlign: "right", lineHeight: 1.25 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding: stacked ? "32px 0 44px" : "72px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 24, alignSelf: "flex-start", flexWrap: "wrap" }}>
              <Chip ch="Platform" />
              <Chip ch="Retail" bg={DK} cl={L} />
              <Chip ch="Service operations" />
            </div>
            <div className="rv" style={{ fontFamily: MN, fontWeight: 300, fontSize: "clamp(38px,5vw,80px)", lineHeight: 0.98, color: "#000", letterSpacing: "0.03em", marginBottom: 28 }}>
              <div style={{ fontWeight: 300 }}>RETAIL AI</div>
              <div style={{ fontWeight: 500 }}>BUILT FOR THE</div>
              <div style={{ fontWeight: 700, color: DK }}>FRONT LINE.</div>
            </div>
            <div className="rv d3" style={{ fontFamily: SN, fontSize: 16, lineHeight: 1.7, color: "rgba(0,0,0,0.6)", maxWidth: 640, marginBottom: 32 }}>
              AlienServe is a retail AI platform for operators who need sharper personalization, stronger forecasting, and faster service execution across stores, hotels, and restaurant environments. Six modules deploy in one secure tenant without a long transformation program.
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
<Link href="/contact" className="hv" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: DK, color: "#fff", borderRadius: 24, padding: "14px 22px", fontFamily: MN, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", transition: "background .2s,color .2s,transform .15s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "rgb(230,230,234)"; e.currentTarget.style.color = "#000"; }} onMouseLeave={(e) => { e.currentTarget.style.background = DK; e.currentTarget.style.color = "#fff"; }}>
                Book a retail demo <Arr sz={10} cl="currentColor" sw={2.4} />
              </Link>
              <Link href="/case-studies/aurora-retail" className="hv" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "#000", border: `1.5px solid ${PL}`, borderRadius: 24, padding: "14px 22px", fontFamily: MN, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", transition: "background .2s,color .2s,border-color .2s,transform .15s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "rgb(230,230,234)"; e.currentTarget.style.color = "#000"; e.currentTarget.style.borderColor = "rgb(230,230,234)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#000"; e.currentTarget.style.borderColor = PL; }}>
                Aurora case study <Arr sz={10} cl="currentColor" sw={2.4} />
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
    <section style={{ padding: `${pv}px ${gv}px`, background: `linear-gradient(180deg,${BG2},${BG})`, position: "relative", zIndex: 2 }}>
      <div style={{ marginBottom: 36, display: "flex", alignItems: layout === "mobile" ? "flex-start" : "flex-end", justifyContent: "space-between", flexDirection: layout === "mobile" ? "column" : "row", gap: layout === "mobile" ? 12 : 0 }}>
        <div><Lbl ch="Six modules · All interoperable" /><Ttl ch="WHAT'S INSIDE." /></div>
        <div style={{ fontFamily: SN, fontSize: 13, color: "rgba(0,0,0,0.4)", maxWidth: 300, textAlign: layout === "mobile" ? "left" : "right", lineHeight: 1.6 }}>Deploy one or all six. Each module activates inside the same secure tenant.</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 22 }}>
        {MODULES.map((m) => (
          <Chip key={m.t} ch={<a href={`#${m.t.toLowerCase().replace(/\s/g, '-')}`}>{m.t}</a>} />
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: gridCols(layout, 3, 2), gap: 1, background: PL, borderRadius: 20, overflow: "hidden", border: `1px solid ${PL}` }}>
        {MODULES.map((m, i) => (
          <Tilt
            key={m.t}
            int={4}
            ch={
              <div id={`${m.t.toLowerCase().replace(/\s/g, '-')}`} style={{ background: `linear-gradient(160deg,${BG},${BG2})`, padding: "30px 28px", height: "100%", display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgb(229,231,245)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: MN, fontSize: 24, fontWeight: 700, color: "rgba(0,0,0,0.55)" }}>{m.ic}</div>
                  <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 9, letterSpacing: "0.14em", color: L2 }}>{`0${i + 1}`}</div>
                </div>
                <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 15, color: "#000", letterSpacing: "0.02em", lineHeight: 1.3 }}>{m.t}</div>
                <div style={{ fontFamily: SN, fontSize: 12.5, lineHeight: 1.65, color: "rgba(0,0,0,0.5)", flex: 1 }}>{m.d}</div>
                <div style={{ padding: "10px 12px", background: "#000", borderRadius: 8, fontFamily: MN, fontSize: 11, fontWeight: 700, color: L, letterSpacing: "0.04em" }}>{m.m}</div>
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
    <section style={{ padding: `${pv}px ${gv}px`, background: DK, position: "relative", zIndex: 3, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
      <div style={{ marginBottom: 40, display: "grid", gridTemplateColumns: layout === "desktop" ? "320px 1fr" : "1fr", gap: layout === "mobile" ? 20 : 60, alignItems: "flex-end" }}>
        <div><Lbl ch="Trust isn't optional" lt /><Ttl ch="COMPLIANCE." lt /></div>
        <div style={{ fontFamily: SN, fontSize: 14, color: "rgba(255,255,255,0.5)", maxWidth: 640, lineHeight: 1.7 }}>
          AlienServe ships with the controls retail and hospitality teams need from day one. The platform is designed for customer-facing environments where privacy, system consistency, and auditability matter across every location.
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: gridCols(layout, 3, 2), gap: 1, background: "rgba(255,255,255,0.06)", borderRadius: 20, overflow: "hidden" }}>
        {COMPLIANCE.map((c) => (
          <div key={c.n} style={{ background: DK, padding: "30px 28px" }}>
            <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 18, color: L, letterSpacing: "0.04em", marginBottom: 12 }}>{c.n}</div>
            <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.55)" }}>{c.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function PlatformAlienServePageClient() {
  return (
    <ConsultancyLoadedShell label="ALIENSERVE">
      <Nav current="Platform" />
      <ServeHero />
      <ModulesSection />
      <ComplianceSection />
      <CTAStrip
        title="BRING IT TO YOUR OPERATIONS TEAM."
        sub="A 30-min discovery call. We will send sample control packs, three peer references, and a fixed-fee deployment quote for your retail AI platform rollout."
        cta="Start a project"
      />
      <Footer />
    </ConsultancyLoadedShell>
  );
}
