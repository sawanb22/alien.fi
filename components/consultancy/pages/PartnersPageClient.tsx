"use client";

import Link from "next/link";
import { ConsultancyLoadedShell } from "@/components/consultancy/ConsultancyLoadedShell";
import { Arr, Chip, CTAStrip, Footer, Lbl, Nav, Tilt, Ttl } from "@/components/consultancy/consultancy-ui";
import { gridCols, sectionGutter, sectionVPad, useLandingLayout } from "@/lib/landing-layout-context";
import { MN, SN } from "@/lib/consultancy/tokens";
import { BG, BG2, DK, L, L2, PL } from "@/lib/consultancy/theme";

const TIERS = [
  { tier: "STRATEGIC", color: L, parts: [{ n: "Anthropic", cat: "Foundation Models", d: "Claude across our copilots. Joint solution architecture for regulated verticals." }, { n: "OpenAI", cat: "Foundation Models", d: "GPT-4/5 deployments at enterprise tier. Co-architecture on private-tenant rollouts." }, { n: "Snowflake", cat: "Data Cloud", d: "Snowflake-native deployments. Powered By Snowflake partner. Cortex co-architecture." }, { n: "Databricks", cat: "Lakehouse", d: "Mosaic AI deployments. Brickbuilder Solutions partner." }] },
  { tier: "TECHNOLOGY", color: L2, parts: [{ n: "AWS", cat: "Cloud", d: "Advanced Tier · ML Competency · Generative AI Competency" }, { n: "Microsoft Azure", cat: "Cloud", d: "Solutions Partner for Data & AI · OpenAI Service co-sell" }, { n: "Google Cloud", cat: "Cloud", d: "Premier Partner · Generative AI Specialization" }, { n: "NVIDIA", cat: "Compute", d: "Solution Provider · Inception alumni" }, { n: "Hugging Face", cat: "Models & Data", d: "Enterprise Hub partner" }, { n: "Pinecone", cat: "Vector DB", d: "Solution partner" }, { n: "MongoDB", cat: "Data", d: "Strategic SI partner" }, { n: "Confluent", cat: "Streaming", d: "Premier SI partner" }] },
  { tier: "INDUSTRY & ECOSYSTEM", color: "rgb(255,170,170)", parts: [{ n: "Epic", cat: "Healthcare EHR", d: "App Orchard partner. AlienCare integration certified." }, { n: "Salesforce", cat: "CRM", d: "Crest Consulting Partner · Einstein expert" }, { n: "HubSpot", cat: "CRM", d: "Solutions Partner · Diamond Tier" }, { n: "Workday", cat: "HCM", d: "Innovation Partner" }, { n: "iManage", cat: "Legal DM", d: "Premier partner - Lumen Legal integration" }, { n: "Stripe", cat: "Fintech", d: "Verified Partner · Risk Suite SI" }] },
  { tier: "ADVISORY & RESEARCH", color: "rgb(180,200,255)", parts: [{ n: "Stanford HAI", cat: "Research Affiliate", d: "Joint research on responsible deployment patterns." }, { n: "MIT CSAIL", cat: "Research Affiliate", d: "Visiting industry collaborator program." }, { n: "Future of Privacy Forum", cat: "Policy", d: "Member · authored 2024 vendor due-diligence framework." }, { n: "Partnership on AI", cat: "Industry", d: "Founding member of safety working group." }] },
];

function Hero() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const stacked = layout !== "desktop";
  return (
    <section style={{ paddingTop: 60, background: "#fff", position: "relative", overflow: "hidden", borderBottom: `1px solid ${PL}` }}>
      <div style={{ position: "absolute", left: "40%", top: 60, width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle,${L}22,transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ paddingLeft: gv, paddingRight: gv }}>
        <div style={{ display: "grid", gridTemplateColumns: stacked ? "1fr" : "320px 1fr", minHeight: stacked ? undefined : 440 }}>
          <div style={{ padding: stacked ? "36px 0 28px" : "60px 36px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 24, borderRight: stacked ? "none" : `1px solid ${PL}`, borderBottom: stacked ? `1px solid ${PL}` : "none", background: "rgb(250,251,255)" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: MN, fontSize: 9, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: 32 }}>
                <Link href="/" style={{ color: "rgba(0,0,0,0.5)", textDecoration: "none" }}>Home</Link>
                <span style={{ opacity: 0.4 }}>/</span>
                <span style={{ color: "rgba(0,0,0,0.5)" }}>About</span>
                <span style={{ opacity: 0.4 }}>/</span>
                <span style={{ color: "#000" }}>Partners</span>
              </div>
              <Lbl ch="The bench we build with" />
              <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 18, color: "#000", lineHeight: 1.5, marginBottom: 14 }}>22 active alliances.</div>
              <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.7, color: "rgba(0,0,0,0.55)" }}>We stay vendor-neutral on architecture but deep with the platforms our clients run on.</div>
            </div>
          </div>
          <div style={{ padding: stacked ? "32px 0 44px" : "72px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Chip ch="Partner Ecosystem" sx={{ marginBottom: 24 }} />
            <div style={{ fontFamily: MN, fontWeight: 300, fontSize: "clamp(40px,5vw,72px)", lineHeight: 1, color: "#000", letterSpacing: "0.03em", marginBottom: 28 }}>
              <div style={{ fontWeight: 300 }}>VENDOR-NEUTRAL.</div>
              <div style={{ fontWeight: 500 }}>PLATFORM-DEEP.</div>
              <div style={{ fontWeight: 700, color: DK }}>NEVER LOCKED-IN.</div>
            </div>
            <Link href="/contact" className="hv" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: DK, color: L, borderRadius: 24, padding: "14px 22px", fontFamily: MN, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", alignSelf: "flex-start" }}>
              Become a partner <Arr sz={10} cl={L} sw={2.4} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerCard({ n, color, dark }: { n: any; color: string; dark: boolean }) {
  return (
    <Tilt
      int={4}
      ch={
        <div style={{ background: dark ? "rgba(255,255,255,0.04)" : `linear-gradient(160deg,${BG},${BG2})`, border: dark ? "1px solid rgba(255,255,255,0.08)" : `1px solid ${PL}`, borderRadius: 14, padding: "24px 22px", height: "100%", display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: color, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: MN, fontWeight: 700, fontSize: 14, color: "#000" }}>{n.n.split(" ").map((w: string) => w[0]).join("").slice(0, 2)}</div>
            <div style={{ fontFamily: MN, fontSize: 9, fontWeight: 600, letterSpacing: "0.1em", color: dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)", textTransform: "uppercase" }}>{n.cat}</div>
          </div>
          <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 15, color: dark ? "#fff" : "#000" }}>{n.n}</div>
          <div style={{ fontFamily: SN, fontSize: 12, lineHeight: 1.6, color: dark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.55)" }}>{n.d}</div>
        </div>
      }
    />
  );
}

export default function PartnersPageClient() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  return (
    <ConsultancyLoadedShell label="PARTNERS">
      <Nav current="Services" />
      <Hero />
      {TIERS.map((t, i) => {
        const dark = i % 2 === 0;
        const bg = dark ? DK : `linear-gradient(180deg,${BG2},${BG})`;
        return (
          <section key={t.tier} style={{ padding: `${pv}px ${gv}px`, background: bg, position: "relative", zIndex: 2 + i, borderRadius: i === 0 ? undefined : "24px 24px 0 0", marginTop: i === 0 ? 0 : -24 }}>
            <div style={{ marginBottom: 36, display: "flex", alignItems: layout === "mobile" ? "flex-start" : "flex-end", justifyContent: "space-between", flexDirection: layout === "mobile" ? "column" : "row", gap: layout === "mobile" ? 12 : 0 }}>
              <div><Lbl ch={`Tier 0${i + 1}`} lt={dark} /><Ttl ch={t.tier} lt={dark} /></div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: t.color }} />
                <span style={{ fontFamily: MN, fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)" }}>{t.parts.length} partners</span>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: gridCols(layout, 4, 2), gap: 14 }}>
              {t.parts.map((p: any) => <PartnerCard key={p.n} n={p} color={t.color} dark={dark} />)}
            </div>
          </section>
        );
      })}
      <CTAStrip title="THE BENCH GROWS WHEN OUR CLIENTS NEED IT TO." sub="If you're building something we should integrate with - talk to us. We've onboarded 5 new partners in 2026." />
      <Footer />
    </ConsultancyLoadedShell>
  );
}

