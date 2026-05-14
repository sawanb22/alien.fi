"use client";

import Link from "next/link";
import { ConsultancyLoadedShell } from "@/components/consultancy/ConsultancyLoadedShell";
import {
  Arr,
  Chip,
  ConsultancyInteractiveSurface,
  CTAStrip,
  Footer,
  Lbl,
  Nav,
  Ttl,
  consultancyLimeCtaEnter,
  consultancyLimeCtaLeave,
  consultancyOutlineLightPillEnter,
  consultancyOutlineLightPillLeave,
} from "@/components/consultancy/consultancy-ui";
import { gridCols, sectionGutter, sectionVPad, useLandingLayout } from "@/lib/landing-layout-context";
import { MN, SN } from "@/lib/consultancy/tokens";
import { BG, BG2, DK, L, PL } from "@/lib/consultancy/theme";

const METRICS = [
  { metric: "22", label: "Active alliances", sub: "Across cloud, data, and industry" },
  { metric: "4", label: "Partnership tiers", sub: "Strategic to advisory" },
  { metric: "11", label: "Platform categories", sub: "Models, cloud, data, enterprise" },
  { metric: "2026", label: "5 new partners added", sub: "This year so far" },
];

const PARTNER_TIERS = [
  {
    tier: "Tier 01 - Strategic",
    desc: "Our deepest technical alliances with model and data infrastructure providers. These partnerships inform architecture decisions on regulated and high-scale deployments.",
  },
  {
    tier: "Tier 02 - Technology",
    desc: "Cloud, compute, vector database, and data infrastructure partners that support implementation, deployment, and scaling across client environments.",
  },
  {
    tier: "Tier 03 - Industry",
    desc: "Enterprise software and workflow ecosystem partners that help us integrate AI into business systems our clients already use every day.",
  },
  {
    tier: "Tier 04 - Advisory",
    desc: "Research and policy organizations that help us stay current on responsible AI, governance, safety, and deployment best practices.",
  },
];

const ALLIANCE_GRID = [
  { partner: "Anthropic", category: "Foundation models", role: "Claude across copilots and agents" },
  { partner: "OpenAI", category: "Foundation models", role: "Enterprise LLM deployments" },
  { partner: "Snowflake", category: "Data cloud", role: "Snowflake native AI architecture" },
  { partner: "Databricks", category: "Lakehouse", role: "Data and model pipelines" },
  { partner: "AWS", category: "Cloud", role: "Primary cloud deployment partner" },
  { partner: "Microsoft Azure", category: "Cloud", role: "Enterprise AI and co-sell" },
  { partner: "Google Cloud", category: "Cloud", role: "Generative AI and data workloads" },
  { partner: "NVIDIA", category: "Compute", role: "GPU and inference infrastructure" },
  { partner: "Hugging Face", category: "Models and data", role: "Model hosting and orchestration" },
  { partner: "Pinecone", category: "Vector DB", role: "Retrieval infrastructure" },
  { partner: "MongoDB", category: "Data", role: "Application data layer" },
  { partner: "Confluent", category: "Streaming", role: "Real-time event pipelines" },
];

const INDUSTRY_PARTNERS = [
  { partner: "Epic", category: "Healthcare EHR", role: "Clinical integration partner" },
  { partner: "Salesforce", category: "CRM", role: "Sales and service workflows" },
  { partner: "HubSpot", category: "CRM", role: "Marketing and pipeline systems" },
  { partner: "Workday", category: "HCM", role: "HR and people operations" },
  { partner: "iManage", category: "Legal DMS", role: "Document and matter management" },
  { partner: "Stripe", category: "Fintech", role: "Payments and billing workflows" },
];

const ADVISORY_PARTNERS = [
  { partner: "Stanford HAI", category: "Research affiliate", role: "Responsible deployment patterns" },
  { partner: "MIT CSAIL", category: "Research affiliate", role: "Technical research exchange" },
  { partner: "Future of Privacy Forum", category: "Policy", role: "Data and privacy guidance" },
  { partner: "Partnership on AI", category: "Industry", role: "Safety and governance collaboration" },
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
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: MN, fontSize: 9, fontWeight: 600, letterSpacing: "normal", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: 32 }}>
                <Link href="/" style={{ color: "rgba(0,0,0,0.5)", textDecoration: "none" }}>Home</Link>
                <span style={{ opacity: 0.4 }}>/</span>
                <span style={{ color: "rgba(0,0,0,0.5)" }}>About</span>
                <span style={{ opacity: 0.4 }}>/</span>
                <span style={{ color: "#000" }}>Partners</span>
              </div>
              <Lbl ch="The bench we build with" />
              <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.7, color: "rgba(0,0,0,0.55)" }}>
                We stay vendor-neutral, but our architecture goes deep with the platforms our clients rely on. 22 active alliances across cloud, data, models, and industry ecosystems help us design faster, integrate cleaner, and keep your options open as your stack evolves.
              </div>
            </div>
          </div>
          <div style={{ padding: stacked ? "32px 0 44px" : "72px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Chip ch="Partner Ecosystem" sx={{ marginBottom: 24 }} />
            <div style={{ fontFamily: MN, fontWeight: 300, fontSize: "clamp(40px,5vw,72px)", lineHeight: 1, color: "#000", letterSpacing: "normal", marginBottom: 28 }}>
              <div style={{ fontWeight: 300 }}>VENDOR-NEUTRAL.</div>
              <div style={{ fontWeight: 500 }}>PLATFORM-DEEP.</div>
              <div style={{ fontWeight: 700, color: DK }}>NEVER LOCKED-IN.</div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link
                href="/contact"
                className="hv"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: L,
                  color: "#000",
                  borderRadius: 24,
                  padding: "14px 22px",
                  fontFamily: MN,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "normal",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  border: "none",
                  cursor: "none",
                  transition: "background .2s,color .2s,box-shadow .2s,transform .15s",
                }}
                onMouseEnter={consultancyLimeCtaEnter}
                onMouseLeave={consultancyLimeCtaLeave}
              >
                Become a partner <Arr sz={10} cl="currentColor" sw={2.4} />
              </Link>
              <a
                href="#alliance-tiers"
                className="hv"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "transparent",
                  color: "#000",
                  borderRadius: 24,
                  padding: "14px 20px",
                  border: `1px solid ${PL}`,
                  fontFamily: MN,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "normal",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  cursor: "none",
                  transition: "background .2s,color .2s,border-color .2s,box-shadow .2s,transform .15s",
                }}
                onMouseEnter={consultancyOutlineLightPillEnter}
                onMouseLeave={consultancyOutlineLightPillLeave}
              >
                See alliance tiers
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrioGrid({ items, dark }: { items: { partner: string; category: string; role: string }[]; dark?: boolean }) {
  const layout = useLandingLayout();
  const roleAlign = layout === "desktop" ? "left" : "right";
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
      {items.map((item) => (
        <ConsultancyInteractiveSurface
          key={item.partner}
          variant={dark ? "darkGlass" : "gradient"}
          style={{
            ...(dark ? { background: "rgba(255,255,255,0.04)" } : {}),
            border: dark ? "1px solid rgba(255,255,255,0.08)" : `1px solid ${PL}`,
            borderRadius: 14,
            padding: "18px 16px",
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1.6fr",
            gap: 12,
            alignItems: "start",
          }}
        >
          <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 13, color: dark ? "#fff" : "#000", textAlign: "left" }}>{item.partner}</div>
          <div style={{ fontFamily: MN, fontSize: 10, fontWeight: 600, letterSpacing: "normal", textTransform: "uppercase", color: dark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.55)", textAlign: "center" }}>{item.category}</div>
          <div style={{ fontFamily: SN, fontSize: 12, lineHeight: 1.6, color: dark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.55)", textAlign: roleAlign }}>{item.role}</div>
        </ConsultancyInteractiveSurface>
      ))}
    </div>
  );
}

export default function PartnersPageClient() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  return (
    <ConsultancyLoadedShell label="PARTNERS">
      <Nav current="About" />
      <Hero />
      <section style={{ padding: `${pv}px ${gv}px`, background: DK, position: "relative", zIndex: 2, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "grid", gridTemplateColumns: gridCols(layout, 4, 2), gap: 14 }}>
          {METRICS.map((m) => (
            <ConsultancyInteractiveSurface key={m.label} variant="darkGlass" style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "18px 16px" }}>
              <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 22, color: "#fff", marginBottom: 8 }}>{m.metric}</div>
              <div style={{ fontFamily: MN, fontSize: 10, fontWeight: 600, letterSpacing: "normal", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 6 }}>{m.label}</div>
              <div style={{ fontFamily: SN, fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{m.sub}</div>
            </ConsultancyInteractiveSurface>
          ))}
        </div>
      </section>
      <section id="alliance-tiers" style={{ padding: `${pv}px ${gv}px`, background: `linear-gradient(180deg,${BG2},${BG})`, position: "relative", zIndex: 3, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
        <div style={{ marginBottom: 36 }}><Lbl ch="How we work" /><Ttl ch="PARTNER ECOSYSTEM." /></div>
        <div style={{ display: "grid", gridTemplateColumns: gridCols(layout, 2, 1), gap: 14 }}>
          {PARTNER_TIERS.map((tier) => (
            <ConsultancyInteractiveSurface key={tier.tier} variant="light" style={{ border: `1px solid ${PL}`, borderRadius: 14, background: "#fff", padding: "20px 18px" }}>
              <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 12, letterSpacing: "normal", textTransform: "uppercase", marginBottom: 10 }}>{tier.tier}</div>
              <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.7, color: "rgba(0,0,0,0.6)" }}>{tier.desc}</div>
            </ConsultancyInteractiveSurface>
          ))}
        </div>
      </section>
      <section style={{ padding: `${pv}px ${gv}px`, background: DK, position: "relative", zIndex: 4, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
        <div style={{ marginBottom: 26 }}><Lbl ch="Strategic and technical" lt /><Ttl ch="PLATFORM PARTNERS." lt /></div>
        <TrioGrid items={ALLIANCE_GRID} dark />
      </section>
      <section style={{ padding: `${pv}px ${gv}px`, background: `linear-gradient(180deg,${BG2},${BG})`, position: "relative", zIndex: 5, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
        <div style={{ marginBottom: 26 }}><Lbl ch="Enterprise systems" /><Ttl ch="BUSINESS ECOSYSTEM." /></div>
        <TrioGrid items={INDUSTRY_PARTNERS} />
      </section>
      <section style={{ padding: `${pv}px ${gv}px`, background: DK, position: "relative", zIndex: 6, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
        <div style={{ marginBottom: 26 }}><Lbl ch="Research and policy" lt /><Ttl ch="ADVISORY AND RESEARCH." lt /></div>
        <TrioGrid items={ADVISORY_PARTNERS} dark />
      </section>
      <section style={{ padding: `${pv}px ${gv}px`, background: `linear-gradient(180deg,${BG},${BG2})`, position: "relative", zIndex: 7, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
        <div style={{ marginBottom: 18 }}><Lbl ch="Why it matters" /><Ttl ch="BUILT TO INTEGRATE." /></div>
        <div style={{ maxWidth: 980, fontFamily: SN, fontSize: 14, lineHeight: 1.8, color: "rgba(0,0,0,0.65)" }}>
          <p style={{ marginTop: 0, marginBottom: 16 }}>
            Our partnerships are not logo collecting. They help us choose the right stack for each client, negotiate better support, and implement AI with fewer dead ends. That means faster delivery, cleaner architecture, and less lock-in for your team.
          </p>
          <p style={{ margin: 0 }}>
            We are vendor-neutral in principle and platform-deep in practice. Clients get a solution designed around business outcomes, not around whatever stack happens to be easiest to sell.
          </p>
        </div>
      </section>
      <CTAStrip title="THE BENCH GROWS|WHEN OUR CLIENTS|NEED IT TO." sub="If you are building something we should integrate with, talk to us. We onboarded 5 new partners in 2026 and are open to ecosystem conversations that help clients ship faster." cta="Start a project" />
      <Footer />
    </ConsultancyLoadedShell>
  );
}

