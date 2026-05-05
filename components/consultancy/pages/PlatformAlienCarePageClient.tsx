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
  { ic: "⌬", t: "Clinical Documentation Copilot", d: "Ambient ASR + structured-field auto-population for Epic, Cerner, athenahealth. HIPAA-compliant.", m: "-41% charting time" },
  { ic: "✚", t: "Imaging Triage AI", d: "Radiology priority queue + first-read suggestions for CT, MRI, X-ray. FDA 510(k)-aligned workflow.", m: "2.3x radiologist throughput" },
  { ic: "◭", t: "Clinical Decision Support", d: "Real-time treatment recommendations, drug-interaction flags, ICD-10 coding accuracy.", m: "+22% diagnostic confidence" },
  { ic: "◯", t: "Patient Risk Stratification", d: "Readmission, sepsis, deterioration prediction. Live in EHR sidebar.", m: "-31% 30-day readmits" },
  { ic: "⊞", t: "Pharmacy & Formulary AI", d: "Drug substitution recommendations, prior-auth automation, formulary compliance.", m: "$4.2M annual savings" },
  { ic: "◐", t: "Patient Engagement Copilot", d: "Multilingual chatbot for scheduling, refills, post-discharge check-ins. Escalation rules.", m: "+38 NPS lift" },
];
const COMPLIANCE = [
  { n: "HIPAA", d: "Full BAA. Tenant-isolated PHI. End-to-end encryption." },
  { n: "SOC 2 Type II", d: "Annual third-party audit. Quarterly penetration testing." },
  { n: "HITRUST CSF", d: "Certified r2. 90+ control families." },
  { n: "FDA 510(k)", d: "Aligned workflow for diagnostic-aid modules." },
  { n: "21 CFR Part 11", d: "Audit-trail integrity for clinical-trial deployments." },
  { n: "NIST AI RMF", d: "Risk-management mapping for every model." },
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
              <Lbl ch="A vertical AI platform for healthcare" />
              <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 24, color: "#000", lineHeight: 1.2, marginBottom: 14, letterSpacing: "0.02em" }}>AlienCare™</div>
              <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.7, color: "rgba(0,0,0,0.55)" }}>Six clinical AI modules. One HIPAA-compliant tenant. Live in 3 weeks on Epic, Cerner, or athenahealth.</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[["Modules", "6 + 4 in beta"], ["Avg deploy", "3 weeks"], ["Clinicians live", "12,400+"], ["Tenant model", "Single + multi"], ["Pricing", "From $180K/yr"]].map(([k, v]) => (
                <div key={k} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0", borderBottom: `1px solid ${PL}` }}>
                  <span style={{ fontFamily: MN, fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)" }}>{k}</span>
                  <span style={{ fontFamily: MN, fontSize: 11, fontWeight: 600, color: "#000" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding: stacked ? "32px 0 44px" : "72px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 24, alignSelf: "flex-start", flexWrap: "wrap" }}>
              <Chip ch="Platform" />
              <Chip ch="Healthcare" bg={DK} cl={L} />
              <Chip ch="HIPAA · SOC 2 · HITRUST" />
            </div>
            <div className="rv" style={{ fontFamily: MN, fontWeight: 300, fontSize: "clamp(38px,5vw,80px)", lineHeight: 0.98, color: "#000", letterSpacing: "0.03em", marginBottom: 28 }}>
              <div style={{ fontWeight: 300 }}>CLINICAL AI</div>
              <div style={{ fontWeight: 500 }}>BUILT FOR THE</div>
              <div style={{ fontWeight: 700, color: DK }}>BEDSIDE.</div>
            </div>
            <div className="rv d3" style={{ fontFamily: SN, fontSize: 16, lineHeight: 1.7, color: "rgba(0,0,0,0.6)", maxWidth: 640, marginBottom: 32 }}>
              AlienCare is a vertical AI platform for health systems. Six modules deployed in 12,400+ clinicians workflows - without a multi-year transformation program.
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/contact" className="hv" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: DK, color: L, borderRadius: 24, padding: "14px 22px", fontFamily: MN, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
                Book a clinical demo <Arr sz={10} cl={L} sw={2.4} />
              </Link>
              <Link href="/case-studies/northbay-health" className="hv" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "#000", border: `1.5px solid ${PL}`, borderRadius: 24, padding: "14px 22px", fontFamily: MN, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
                NorthBay case study →
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
        <div><Lbl ch="Six modules · all interoperable" /><Ttl ch="WHAT'S INSIDE" /></div>
        <div style={{ fontFamily: SN, fontSize: 13, color: "rgba(0,0,0,0.4)", maxWidth: 280, textAlign: layout === "mobile" ? "left" : "right", lineHeight: 1.6 }}>Deploy one or all six. Each module activates inside the same tenant.</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: gridCols(layout, 3, 2), gap: 1, background: PL, borderRadius: 20, overflow: "hidden", border: `1px solid ${PL}` }}>
        {MODULES.map((m, i) => (
          <Tilt
            key={m.t}
            int={4}
            ch={
              <div style={{ background: `linear-gradient(160deg,${BG},${BG2})`, padding: "30px 28px", height: "100%", display: "flex", flexDirection: "column", gap: 14 }}>
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
        <div style={{ fontFamily: SN, fontSize: 14, color: "rgba(255,255,255,0.5)", maxWidth: 540, lineHeight: 1.7 }}>AlienCare ships with the audit packs your CISO and compliance lead need on day one.</div>
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

export default function PlatformAlienCarePageClient() {
  return (
    <ConsultancyLoadedShell label="ALIENCARE">
      <Nav current="Solutions" />
      <CareHero />
      <ModulesSection />
      <ComplianceSection />
      <CTAStrip title="BRING IT TO YOUR CLINICIANS." sub="A 30-min discovery call. We'll send sample audit packs, three peer references, and a fixed-fee deployment quote." />
      <Footer />
    </ConsultancyLoadedShell>
  );
}

