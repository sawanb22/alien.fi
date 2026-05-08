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
  { ic: "⌬", t: "Clinical Documentation Copilot", d: "Ambient ASR plus structured field auto-population for Epic, Cerner, and athenahealth. HIPAA-compliant.", m: "Outcome: 41% charting time reduction" },
  { ic: "✚", t: "Imaging Triage AI", d: "Radiology priority queue plus first-read suggestions for CT, MRI, X-ray, and FLAIR workflows.", m: "Outcome: 2.3x radiologist throughput" },
  { ic: "◭", t: "Clinical Decision Support", d: "Real-time treatment recommendations, drug interaction flags, and ICD-10 coding accuracy support.", m: "Outcome: 22% diagnostic confidence lift" },
  { ic: "◯", t: "Patient Risk Stratification", d: "Readmission, sepsis, and deterioration prediction live in the EHR sidebar.", m: "Outcome: 31% 30-day readmit reduction" },
  { ic: "⊞", t: "Pharmacy and Formulary AI", d: "Drug substitution recommendations, prior auth automation, and formulary compliance support.", m: "Outcome: 3.2M annual savings" },
  { ic: "◐", t: "Patient Engagement Copilot", d: "Multilingual chatbot for scheduling, refills, and post-discharge check-ins with escalation rules.", m: "Outcome: 30% NPS lift" },
];
const COMPLIANCE = [
  { n: "HIPAA", d: "Full BAA, tenant-isolated PHI, end-to-end encryption" },
  { n: "SOC 2 Type II", d: "Annual third-party audit, quarterly penetration testing" },
  { n: "HITRUST CSF", d: "Certified control family alignment" },
  { n: "FDA 510(k)", d: "Aligned workflow for diagnostic-adjacent modules" },
  { n: "21 CFR Part 11", d: "Audit-trail integrity for clinical-trial deployments" },
  { n: "NIST AI RMF", d: "Risk-management mapping for every model" },
];

function CareHero() {
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
                <span style={{ color: "#000" }}>AlienCare</span>
              </div>
              <Lbl ch="Platform · Healthcare · HIPAA and SOC 2 ready" />
              <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 24, color: "#000", lineHeight: 1.2, marginBottom: 14, letterSpacing: "0.02em" }}>AlienCare™</div>
              <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.7, color: "rgba(0,0,0,0.55)" }}>
                AlienCare is a vertical AI platform for health systems. Six clinical AI modules. One HIPAA-compliant tenant. Live in 3 weeks on Epic, Cerner, or athenahealth, without a multi-year transformation program.
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                ["Modules", "6 · All interoperable"],
                ["Avg deploy", "3 wks · Fast rollout"],
                ["Clinicians live", "12,400+ · Across active tenants"],
                ["Pricing", "From $180K/yr · For platform access"],
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
              <Chip ch="Healthcare" bg={DK} cl={L} />
              <Chip ch="HIPAA and SOC 2 ready" />
            </div>
            <div className="rv" style={{ fontFamily: MN, fontWeight: 300, fontSize: "clamp(38px,5vw,80px)", lineHeight: 0.98, color: "#000", letterSpacing: "0.03em", marginBottom: 28 }}>
              <div style={{ fontWeight: 300 }}>CLINICAL AI</div>
              <div style={{ fontWeight: 500 }}>BUILT FOR THE</div>
              <div style={{ fontWeight: 700, color: DK }}>BEDSIDE.</div>
            </div>
            <div className="rv d3" style={{ fontFamily: SN, fontSize: 16, lineHeight: 1.7, color: "rgba(0,0,0,0.6)", maxWidth: 640, marginBottom: 32 }}>
              AlienCare is a vertical AI platform for health systems. Six clinical AI modules. One HIPAA-compliant tenant. Live in 3 weeks on Epic, Cerner, or athenahealth, without a multi-year transformation program.
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/contact" className="hv" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: DK, color: "#fff", borderRadius: 24, padding: "14px 22px", fontFamily: MN, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", transition: "background .2s,color .2s,transform .15s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgb(230,230,234)"; e.currentTarget.style.color = "#000"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = DK; e.currentTarget.style.color = "#fff"; }}
              >
                Book a clinical demo <Arr sz={10} cl="currentColor" sw={2.4} />
              </Link>
              <Link href="/case-studies/northbay-health" className="hv" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "#000", border: `1.5px solid ${PL}`, borderRadius: 24, padding: "14px 22px", fontFamily: MN, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", transition: "background .2s,color .2s,border-color .2s,transform .15s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgb(230,230,234)"; e.currentTarget.style.color = "#000"; e.currentTarget.style.borderColor = "rgb(230,230,234)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#000"; e.currentTarget.style.borderColor = PL; }}
              >
                NorthBay case study <Arr sz={10} cl="currentColor" sw={2.4} />
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
    <section style={{ padding: `${pv}px ${gv}px`, background: `linear-gradient(180deg,${BG2},${BG})`, position: "relative", paddingTop: 60 }}>
      <div style={{ marginBottom: 36, display: "flex", alignItems: layout === "mobile" ? "flex-start" : "flex-end", justifyContent: "space-between", flexDirection: layout === "mobile" ? "column" : "row", gap: layout === "mobile" ? 12 : 0 }}>
        <div><Lbl ch="Six modules · All interoperable" /><Ttl ch="WHAT'S INSIDE." /></div>
        <div style={{ fontFamily: SN, fontSize: 13, color: "rgba(0,0,0,0.4)", maxWidth: 280, textAlign: layout === "mobile" ? "left" : "right", lineHeight: 1.6 }}>Deploy one or all six. Each module activates inside the same tenant.</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 22 }}>
        {[
          "Clinical Documentation Copilot",
          "Imaging Triage AI",
          "Clinical Decision Support",
          "Patient Risk Stratification",
          "Pharmacy and Formulary AI",
          "Patient Engagement Copilot",
        ].map((t) => (
          <Chip key={t} ch={<a href={`#${t.toLowerCase().replace(/\s/g, '-')}`}>{t}</a>} />
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
    <section style={{ padding: `${pv}px ${gv}px`, background: DK, position: "relative" }}>
      <div style={{ marginBottom: 40, display: "grid", gridTemplateColumns: layout === "desktop" ? "320px 1fr" : "1fr", gap: layout === "mobile" ? 20 : 60, alignItems: "flex-end" }}>
        <div><Lbl ch="Trust isn't optional" lt /><Ttl ch="COMPLIANCE." lt /></div>
        <div style={{ fontFamily: SN, fontSize: 14, color: "rgba(255,255,255,0.5)", maxWidth: 640, lineHeight: 1.7 }}>
          AlienCare ships with the audit packs your CISO and compliance lead need from day one. The platform is designed for healthcare environments that require clear controls, traceable outputs, and regulated deployment patterns.
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

function HowItWorksSection() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  return (
    <section style={{ padding: `${pv}px ${gv}px`, background: BG, position: "relative" }}>
      <div style={{ marginBottom: layout === "mobile" ? 28 : 40, display: "grid", gridTemplateColumns: layout === "desktop" ? "320px 1fr" : "1fr", gap: layout === "mobile" ? 20 : 60, alignItems: "flex-end" }}>
        <div><Lbl ch="Built to fit your stack" /><Ttl ch="HOW IT WORKS." /></div>
        <div style={{ fontFamily: SN, fontSize: 14, color: "rgba(0,0,0,0.55)", maxWidth: 560, lineHeight: 1.7 }}>
          Start with one module or six. Deploy inside the same tenant. Connect Epic, Cerner, or athenahealth. Go live in 3 weeks with audit-ready controls.
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: layout === "mobile" ? "1fr" : "repeat(4,1fr)", gap: 1, background: PL, borderRadius: 20, overflow: "hidden", border: `1px solid ${PL}` }}>
        {[
          "Start with one module or six.",
          "Deploy inside the same tenant.",
          "Connect Epic, Cerner, or athenahealth.",
          "Go live in 3 weeks with audit-ready controls.",
        ].map((t, i) => (
          <div key={t} style={{ background: `linear-gradient(160deg,${BG},${BG2})`, padding: "26px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 9, letterSpacing: "0.14em", color: L2 }}>{`0${i + 1}`}</div>
            <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.65, color: "rgba(0,0,0,0.6)" }}>{t}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function PlatformAlienCarePageClient() {
  return (
    <ConsultancyLoadedShell label="ALIENCARE">
      <Nav current="Platform" />
      <CareHero />
      <ModulesSection />
      <ComplianceSection />
      <HowItWorksSection />
      <CTAStrip title="BRING IT TO YOUR CLINICIANS." sub="A 30-min discovery call. We will send sample audit packs, three peer references, and a fixed-fee deployment quote." />
      <Footer />
    </ConsultancyLoadedShell>
  );
}
