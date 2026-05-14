"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ConsultancyLoadedShell } from "@/components/consultancy/ConsultancyLoadedShell";
import { Arr, Chip, ConsultancyInteractiveSurface, CTAStrip, Footer, Lbl, Nav, Ttl } from "@/components/consultancy/consultancy-ui";
import { gridCols, sectionGutter, sectionVPad, useLandingLayout } from "@/lib/landing-layout-context";
import { MN, SN } from "@/lib/consultancy/tokens";
import { BG, BG2, DK, L, L2, PL } from "@/lib/consultancy/theme";

const FEATURED = {
  cat: "STRATEGY",
  date: "May 2, 2026",
  read: "12 min",
  t: "The Real Cost of an AI Pilot That Goes Nowhere",
  d: "After auditing 240 stalled AI pilots across enterprise clients, we found three failure modes. None of them are technical. Here is what to do about each.",
  author: { n: "Jordan Reyes", r: "Co-founder & CEO", init: "JR" },
};
const POSTS = [
  { cat: "IMPLEMENTATION", date: "Apr 28, 2026", read: "8 min", t: "Build vs. Buy in 2026: A Decision Tree That Actually Works", d: "Most build-vs-buy frameworks were written for SaaS. AI is different. Defensibility, data flywheels, and buyer-beware compliance change the math.", author: { init: "AK", n: "Anya Kowalski" } },
  { cat: "GOVERNANCE", date: "Apr 22, 2026", read: "10 min", t: "EU AI Act, One Year In: What Compliance Actually Looks Like", d: "A pragmatic compliance checklist from the trenches of three Tier-1 bank deployments.", author: { init: "PS", n: "Priya Suresh" } },
  { cat: "IMPLEMENTATION", date: "Apr 18, 2026", read: "6 min", t: "Why Your RAG System Hallucinates and How to Diagnose It", d: "Eight specific anti-patterns we keep finding in client RAG deployments, with concrete fixes.", author: { init: "SP", n: "Sebastian Palacios" } },
  { cat: "CASE NOTES", date: "Apr 14, 2026", read: "9 min", t: "How We Cut Charting Time 41% Without Replacing Epic", d: "The architectural pattern behind the NorthBay Health rollout and why we did not pull a rip-and-replace.", author: { init: "DK", n: "Dr. Daniel Kim" } },
  { cat: "STRATEGY", date: "Apr 8, 2026", read: "7 min", t: "The 90-Day AI Audit We Run Before Any Engagement", d: "Our discovery sprint, fully open-sourced. The questions, the scoring, and the readout template.", author: { init: "JR", n: "Jordan Reyes" } },
  { cat: "INFRA", date: "Apr 2, 2026", read: "11 min", t: "Notes From Running 14 Production LLM Stacks", d: "Cost, latency, and reliability numbers from a year of real deployments, with graphs.", author: { init: "NV", n: "Nora Vetrov" } },
  { cat: "GOVERNANCE", date: "Mar 28, 2026", read: "9 min", t: "Bias Audits That Are Not Theatre", d: "How to design a bias audit that produces decisions, not just dashboards.", author: { init: "PS", n: "Priya Suresh" } },
  { cat: "IMPLEMENTATION", date: "Mar 22, 2026", read: "8 min", t: "Eval Frameworks: The Quiet Difference Between AI That Ships and AI That Doesn't", d: "Eval is the most underinvested-in part of every client stack. Here is a starter kit.", author: { init: "AK", n: "Anya Kowalski" } },
  { cat: "CASE NOTES", date: "Mar 18, 2026", read: "10 min", t: "The Architecture Behind a Real-Time Fraud Stack at <50ms", d: "How the Kestrel Bank fraud-scoring engine works, end to end.", author: { init: "NV", n: "Nora Vetrov" } },
];
const CATS = [
  { value: "ALL", label: "All" },
  { value: "STRATEGY", label: "Strategy" },
  { value: "IMPLEMENTATION", label: "Implementation" },
  { value: "GOVERNANCE", label: "Governance" },
  { value: "INFRA", label: "Infra" },
  { value: "CASE NOTES", label: "Case Notes" },
];

function Hero() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const stacked = layout !== "desktop";
  return (
    <section style={{ paddingTop: 60, background: "#fff", borderBottom: `1px solid ${PL}` }}>
      <div style={{ paddingLeft: gv, paddingRight: gv }}>
        <div style={{ display: "grid", gridTemplateColumns: stacked ? "1fr" : "320px 1fr", minHeight: stacked ? undefined : 380 }}>
          <div style={{ padding: stacked ? "36px 0 28px" : "60px 36px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 24, borderRight: stacked ? "none" : `1px solid ${PL}`, borderBottom: stacked ? `1px solid ${PL}` : "none", background: "rgb(250,251,255)" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: MN, fontSize: 9, fontWeight: 600, letterSpacing: "normal", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: 32 }}>
                <Link href="/" style={{ color: "rgba(0,0,0,0.5)", textDecoration: "none" }}>Home</Link>
                <span style={{ opacity: 0.4 }}>/</span>
                <span style={{ color: "#000" }}>Blog</span>
              </div>
              <Lbl ch="Field notes" />
              <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 18, color: "#000", lineHeight: 1.5, marginBottom: 14 }}>Working notes, not thought leadership.</div>
              <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.7, color: "rgba(0,0,0,0.55)" }}>Working notes, not thought leadership. What we have learned from shipping AI in regulated, complex environments. Audited numbers. Real failures. No SEO bait.</div>
            </div>
          </div>
          <div style={{ padding: stacked ? "32px 0 44px" : "72px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Chip ch="Field Notes" sx={{ marginBottom: 24 }} />
            <div style={{ fontFamily: MN, fontWeight: 300, fontSize: "clamp(42px,5.4vw,80px)", lineHeight: 0.98, color: "#000", letterSpacing: "normal" }}>
              <div style={{ fontWeight: 300 }}>WHAT WE</div>
              <div style={{ fontWeight: 500 }}>LEARNED ON</div>
              <div style={{ fontWeight: 700, color: DK }}>THE WAY HERE.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BlogPageClient() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  const [cat, setCat] = useState("ALL");
  const filtered = useMemo(() => (cat === "ALL" ? POSTS : POSTS.filter((p) => p.cat === cat)), [cat]);
  return (
    <ConsultancyLoadedShell label="FIELD NOTES">
      <Nav current="Blog" />
      <Hero />
      <section style={{ padding: `${Math.max(48, pv - 12)}px ${gv}px 0`, background: `linear-gradient(180deg,${BG2},${BG})` }}>
        <div style={{ marginBottom: 32 }}><Lbl ch="Featured this week" /></div>
        <ConsultancyInteractiveSurface
          variant="dk"
          style={{
            display: "grid",
            gridTemplateColumns: layout === "desktop" ? "1.4fr 1fr" : "1fr",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <div style={{ padding: layout === "mobile" ? "32px 24px" : "48px 52px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 24 }}>
            <div>
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 20, flexWrap: "wrap" }}>
                <Chip ch={FEATURED.cat} bg={L} cl="#000" />
                <span style={{ fontFamily: MN, fontSize: 11, letterSpacing: "normal", color: "rgba(255,255,255,0.5)" }}>{FEATURED.date} · {FEATURED.read}</span>
              </div>
              <div style={{ fontFamily: MN, fontWeight: 500, fontSize: layout === "mobile" ? 28 : 34, lineHeight: 1.15, color: "#fff", marginBottom: 20 }}>{FEATURED.t}</div>
              <div style={{ fontFamily: SN, fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", maxWidth: 560 }}>{FEATURED.d}</div>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: MN, fontSize: 11, fontWeight: 700, letterSpacing: "normal", textTransform: "uppercase", color: L }}>
              Read article <Arr sz={10} cl={L} sw={2.4} />
            </div>
          </div>
          <div style={{ background: `linear-gradient(135deg,${L}66,${L2}33,${DK})`, minHeight: 260 }} />
        </ConsultancyInteractiveSurface>
      </section>
      <section style={{ padding: `${Math.max(48, pv - 12)}px ${gv}px ${pv}px`, background: `linear-gradient(180deg,${BG2},${BG})` }}>
        <div style={{ marginBottom: 32, display: "flex", alignItems: layout === "mobile" ? "flex-start" : "flex-end", justifyContent: "space-between", flexDirection: layout === "mobile" ? "column" : "row", gap: layout === "mobile" ? 12 : 0 }}>
          <div><Lbl ch="All field notes" /><Ttl ch="THE ARCHIVE." /></div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "flex-end" }}>
            {CATS.map((c) => {
              const active = cat === c.value;
              return (
                <button key={c.value} onClick={() => setCat(c.value)} className="hv" style={{ background: active ? "#000" : "rgb(229,231,245)", color: active ? L : "rgba(0,0,0,0.6)", border: "none", borderRadius: 20, padding: "7px 14px", fontFamily: MN, fontSize: 10, fontWeight: 700, letterSpacing: "normal", textTransform: "none" }}>{c.label}</button>
              );
            })}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: gridCols(layout, 3, 2), gap: 16 }}>
          {filtered.map((p) => (
            <ConsultancyInteractiveSurface
              key={p.t}
              variant="gradient"
              style={{
                border: `1px solid ${PL}`,
                borderRadius: 14,
                padding: "26px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                height: "100%",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Chip ch={p.cat} />
                <span style={{ fontFamily: MN, fontSize: 10, letterSpacing: "normal", color: "rgba(0,0,0,0.4)" }}>{p.read}</span>
              </div>
              <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 17, color: "#000", lineHeight: 1.3 }}>{p.t}</div>
              <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.65, color: "rgba(0,0,0,0.55)", flex: 1 }}>{p.d}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, paddingTop: 14, borderTop: `1px solid ${PL}` }}>
                <div style={{ width: 30, height: 30, borderRadius: "50%", background: `linear-gradient(135deg,${L},${L2})`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: MN, fontWeight: 700, fontSize: 11, color: "#000" }}>{p.author.init}</div>
                <div style={{ fontFamily: MN, fontWeight: 500, fontSize: 11, color: "rgba(0,0,0,0.6)" }}>{p.author.n}</div>
                <div style={{ flex: 1 }} />
                <span style={{ fontFamily: MN, fontSize: 10, letterSpacing: "normal", color: "rgba(0,0,0,0.4)" }}>{p.date}</span>
              </div>
            </ConsultancyInteractiveSurface>
          ))}
        </div>
      </section>
      <section style={{ padding: `${pv}px ${gv}px`, background: DK, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
        <div style={{ display: "grid", gridTemplateColumns: layout === "desktop" ? "1fr 1fr" : "1fr", gap: 60, alignItems: "center" }}>
          <div>
            <Lbl ch="Field Notes weekly" lt />
            <div style={{ fontFamily: MN, fontWeight: 300, fontSize: "clamp(32px,3.5vw,52px)", lineHeight: 1.05, color: "#fff", letterSpacing: "normal", marginBottom: 24 }}>
              <div style={{ fontWeight: 400 }}>ONE EMAIL.</div>
              <div style={{ fontWeight: 600, color: L }}>FRIDAY MORNINGS.</div>
            </div>
            <div style={{ fontFamily: SN, fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.45)", maxWidth: 460 }}>
              A short note on what we are seeing in AI deployment, governance, and adoption. One useful idea per week, no fluff.
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "30px", display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 11, letterSpacing: "normal", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>Subscribe</div>
            <input placeholder="you@company.com" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", padding: "14px 16px", borderRadius: 10, fontFamily: MN, fontSize: 13, outline: "none" }} />
            <button className="hv" style={{ background: L, color: "#000", border: "none", borderRadius: 10, padding: "14px 18px", fontFamily: MN, fontSize: 11, fontWeight: 700, letterSpacing: "normal", textTransform: "uppercase", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "background .2s,color .2s,transform .15s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgb(230,230,234)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = L; }}
            >
              Subscribe <Arr sz={10} cl="currentColor" sw={2.4} />
            </button>
          </div>
        </div>
      </section>
      <CTAStrip title="WANT US TO COVER SOMETHING SPECIFIC?" sub="Reply to the newsletter or send us a topic. We turn 1 in 4 reader prompts into a full field note." />
      <Footer />
    </ConsultancyLoadedShell>
  );
}
