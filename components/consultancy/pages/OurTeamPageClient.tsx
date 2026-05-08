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

const LEADERSHIP = [
  { init: "JR", n: "Jordan Reyes", r: "Co-founder and CEO", bio: "Ex-McKinsey QuantumBlack. Led AI transformation programs at three Fortune 100s before starting alien.fi.", tags: ["Strategy", "Operating"] },
  { init: "AK", n: "Anya Kowalski", r: "Co-founder and CTO", bio: "Former staff ML engineer at Meta. Architected the recommendation stack for 14M MAU. PhD, Stanford.", tags: ["ML Infra", "Research"] },
  { init: "MO", n: "Marcus Okafor", r: "Chief Operating Officer", bio: "Built the delivery organization from 12 to 96. Previously COO of a Series D fintech.", tags: ["Delivery", "Ops"] },
  { init: "PS", n: "Priya Suresh", r: "Chief AI Officer", bio: "Wrote the EU AI Act compliance playbook adopted by four major banks. Frequent regulator advisor.", tags: ["Governance", "Policy"] },
];
const PRACTICE = [
  { init: "DK", n: "Dr. Daniel Kim", r: "Head of Healthcare", bio: "Boarded internist + ML PhD. Led NorthBay Health rollout to 1,800 clinicians.", tags: ["Healthcare", "Clinical AI"] },
  { init: "EH", n: "Elena Hadid", r: "Head of Financial Services", bio: "Former head of model risk at a top-10 bank. SR 11-7 in her sleep.", tags: ["Finance", "Risk"] },
  { init: "TN", n: "Theresa Nakamura", r: "Head of Legal and Compliance", bio: "Former AmLaw 100 GC. Now leads the legal AI vertical.", tags: ["Legal", "Privilege"] },
  { init: "RC", n: "Ramon Castillo", r: "Head of Industrial AI", bio: "20-year manufacturing veteran. Walked plants for the first, wrote optimizers for the second.", tags: ["Manufacturing", "Logistics"] },
  { init: "AM", n: "Aisha Mensah", r: "Head of Public Sector", bio: "Former White House OSTP fellow. Led the Civica State Agency benefits-fraud rollout.", tags: ["Government", "Civic AI"] },
  { init: "JT", n: "Janet Tobin", r: "Head of Retail and Consumer", bio: "Built personalization at two Top-50 retailers before joining. Trusted by merchandisers.", tags: ["Retail", "Personalization"] },
];
const CRAFT = [
  { init: "SP", n: "Sebastian Palacios", r: "Principal ML Engineer", tags: ["LLMs", "RAG"] },
  { init: "NV", n: "Nora Vetrov", r: "Principal MLOps", tags: ["Infra", "Eval"] },
  { init: "MC", n: "Mei Chen", r: "Staff Research Scientist", tags: ["Vision", "Multimodal"] },
  { init: "OD", n: "Oluwaseun Davies", r: "Staff Data Engineer", tags: ["Streaming", "Lakehouse"] },
  { init: "IB", n: "Idris Bayer", r: "Principal SRE", tags: ["Reliability", "Cost"] },
  { init: "LR", n: "Lena Romanenko", r: "Head of Design", tags: ["UX", "Trust"] },
  { init: "KW", n: "Kai Watanabe", r: "Head of Security", tags: ["SOC 2", "Threat"] },
  { init: "CB", n: "Claire Brennan", r: "Head of Talent", tags: ["People", "Culture"] },
];

type TeamPerson = {
  init: string;
  n: string;
  r: string;
  bio?: string;
  tags: string[];
};

function PersonCard({ p, big = false, dark = false }: { p: TeamPerson; big?: boolean; dark?: boolean }) {
  return (
    <div style={{ background: dark ? "rgba(255,255,255,0.04)" : `linear-gradient(160deg,${BG},${BG2})`, border: dark ? "1px solid rgba(255,255,255,0.08)" : `1px solid ${PL}`, borderRadius: 14, padding: big ? "30px 28px" : "22px", display: "flex", flexDirection: "column", gap: big ? 14 : 10, height: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ width: big ? 56 : 46, height: big ? 56 : 46, borderRadius: "50%", background: `linear-gradient(135deg,${L},${L2})`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: MN, fontWeight: 700, fontSize: big ? 16 : 14, color: "#000" }}>{p.init}</div>
        <div>
          <div style={{ fontFamily: MN, fontWeight: 600, fontSize: big ? 16 : 14, color: dark ? "#fff" : "#000" }}>{p.n}</div>
          <div style={{ fontFamily: MN, fontWeight: 500, fontSize: 11, letterSpacing: "0.04em", color: dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)", marginTop: 3 }}>{p.r}</div>
        </div>
      </div>
      {p.bio ? <div style={{ fontFamily: SN, fontSize: 12.5, lineHeight: 1.65, color: dark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.55)" }}>{p.bio}</div> : null}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: "auto" }}>
        {p.tags.map((t: string) => (
          <div key={t} style={{ padding: "3px 9px", background: dark ? "rgba(255,255,255,0.08)" : "rgba(21,24,43,0.06)", borderRadius: 5, fontFamily: MN, fontSize: 9.5, fontWeight: 600, letterSpacing: "0.06em", color: dark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)", textTransform: "uppercase" }}>{t}</div>
        ))}
      </div>
    </div>
  );
}

function TeamHero() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const stacked = layout !== "desktop";
  return (
    <section style={{ paddingTop: 60, background: DK, position: "relative", overflow: "hidden", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ position: "absolute", right: -200, top: 60, width: 520, height: 520, borderRadius: "50%", background: `radial-gradient(circle,${L}22,transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ paddingLeft: gv, paddingRight: gv }}>
        <div style={{ display: "grid", gridTemplateColumns: stacked ? "1fr" : "320px 1fr", minHeight: stacked ? undefined : 440 }}>
          <div style={{ padding: stacked ? "36px 0 28px" : "60px 36px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 24, borderRight: stacked ? "none" : "1px solid rgba(255,255,255,0.06)", borderBottom: stacked ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: MN, fontSize: 9, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 32 }}>
                <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</Link>
                <span style={{ opacity: 0.4 }}>/</span>
                <span style={{ color: "rgba(255,255,255,0.5)" }}>About</span>
                <span style={{ opacity: 0.4 }}>/</span>
                <span style={{ color: L2 }}>Team</span>
              </div>
              <Lbl ch="The people behind the work" lt />
              <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.5)" }}>
                We staff small, senior-only teams with no pyramid and no offshore handoffs. You will see these same faces every week, from discovery to production. 96 team members across 11 cities. Average tenure 5.4 years. 22 PhDs.
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[["96", "Team members", "Across 11 global cities"], ["5.4 yrs", "Average tenure", "Senior-heavy expertise"], ["22", "PhDs on staff", "Deep research background"], ["2018", "Founded", "Proven track record"]].map(([value, label, sub]) => (
                <div key={label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <span style={{ fontFamily: MN, fontSize: 12, fontWeight: 700, color: "#fff" }}>{value}</span>
                    <span style={{ fontFamily: MN, fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>{label}</span>
                    <span style={{ fontFamily: SN, fontSize: 11, color: "rgba(255,255,255,0.4)" }}>{sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding: stacked ? "32px 0 44px" : "72px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Chip ch="Our Team" bg={L} cl="#000" sx={{ marginBottom: 24 }} />
            <div style={{ fontFamily: MN, fontWeight: 300, fontSize: "clamp(40px,5vw,72px)", lineHeight: 1, color: "#fff", letterSpacing: "0.04em", marginBottom: 32 }}>
              <div style={{ fontWeight: 300 }}>SMALL TEAMS.</div>
              <div style={{ fontWeight: 500 }}>SENIOR PEOPLE.</div>
              <div style={{ fontWeight: 700, background: `linear-gradient(90deg,#fff 40%,${L} 60%,#fff 80%)`, backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", animation: "consultancy-shimmer 4s linear infinite" }}>NO HANDOFFS.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function OurTeamPageClient() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  return (
    <ConsultancyLoadedShell label="TEAM">
      <Nav current="About" />
      <TeamHero />
      <section style={{ padding: `${pv}px ${gv}px`, background: DK, position: "relative", zIndex: 2, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ marginBottom: 36 }}><Lbl ch="Founders and C-Suite" lt /><Ttl ch="LEADERSHIP." lt /></div>
        <div style={{ display: "grid", gridTemplateColumns: gridCols(layout, 2, 1), gap: 16 }}>
          {LEADERSHIP.map((p) => <PersonCard key={p.init} p={p} big dark />)}
        </div>
      </section>
      <section style={{ padding: `${pv}px ${gv}px`, background: `linear-gradient(180deg,${BG2},${BG})`, position: "relative", zIndex: 3, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
        <div style={{ marginBottom: 36, display: "flex", alignItems: layout === "mobile" ? "flex-start" : "flex-end", justifyContent: "space-between", flexDirection: layout === "mobile" ? "column" : "row", gap: layout === "mobile" ? 12 : 0 }}>
          <div><Lbl ch="Vertical experts" /><Ttl ch="PRACTICE LEADS." /></div>
          <div style={{ fontFamily: SN, fontSize: 13, color: "rgba(0,0,0,0.4)", maxWidth: 330, textAlign: layout === "mobile" ? "left" : "right", lineHeight: 1.6 }}>Each vertical has a senior practice lead with 8+ years in industry.</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: gridCols(layout, 3, 2), gap: 16 }}>
          {PRACTICE.map((p) => <PersonCard key={p.init} p={p} />)}
        </div>
      </section>
      <section style={{ padding: `${pv}px ${gv}px`, background: `linear-gradient(180deg,${BG},${BG2})`, position: "relative", zIndex: 4, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
        <div style={{ marginBottom: 36 }}><Lbl ch="Senior technical craft" /><Ttl ch="CRAFT LEADS." /></div>
        <div style={{ display: "grid", gridTemplateColumns: gridCols(layout, 4, 2), gap: 14 }}>
          {CRAFT.map((p) => <PersonCard key={p.init} p={p} />)}
        </div>
        <div style={{ display: "flex", alignItems: layout === "mobile" ? "flex-start" : "center", justifyContent: "space-between", flexDirection: layout === "mobile" ? "column" : "row", gap: layout === "mobile" ? 14 : 0, borderTop: `1px solid ${PL}`, marginTop: 48, paddingTop: 32 }}>
          <div>
            <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: 8 }}>Plus 80 more across delivery, research, design, and ops</div>
            <div style={{ fontFamily: MN, fontSize: 14, color: "#000", fontWeight: 500 }}>We are hiring 14 roles this quarter.</div>
          </div>
          <Link href="/contact" className="hv" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#000", color: L, borderRadius: 24, padding: "12px 18px", fontFamily: MN, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", transition: "background .2s,color .2s,transform .15s" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgb(230,230,234)"; e.currentTarget.style.color = "#000"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#000"; e.currentTarget.style.color = L; }}
          >
            See open roles <Arr sz={10} cl={L} sw={2.4} />
          </Link>
        </div>
      </section>
      <CTAStrip title="MEET THE PEOPLE|WHO'D OWN YOUR|ENGAGEMENT." sub="A 30-min intro call with the partner and practice lead who would staff your project. Always free." cta="Start a project" />
      <Footer />
    </ConsultancyLoadedShell>
  );
}

