"use client";

import Link from "next/link";
import { ConsultancyLoadedShell } from "@/components/consultancy/ConsultancyLoadedShell";
import {
  Arr,
  Chip,
  ConsultancyFaqAccordion,
  ConsultancyCardGrid,
  ConsultancyInteractiveSurface,
  CTAStrip,
  Footer,
  Lbl,
  Nav,
  Ttl,
  consultancyGhostOnDarkEnter,
  consultancyGhostOnDarkLeave,
  consultancyLimeCtaEnter,
  consultancyLimeCtaLeave,
} from "@/components/consultancy/consultancy-ui";
import {
  gridCols,
  sectionGutter,
  sectionVPad,
  useLandingLayout,
} from "@/lib/landing-layout-context";
import { MN, SN } from "@/lib/consultancy/tokens";
import { BG, BG2, DK, L, L2, L_TEXT_ON_LIGHT, PL } from "@/lib/consultancy/theme";
import { MagneticWrap, ScrollGridItem, ScrollSection } from "@/components/motion/scroll-primitives";

const METRICS = [
  { v: "95%+", l: "Model accuracy", s: "Avg on production deployments" },
  { v: "3.1x", l: "Year-1 ROI", s: "Across custom AI builds" },
  { v: "6 weeks", l: "Avg to first model", s: "Discovery to working prototype" },
  { v: "100%", l: "IP ownership", s: "Clients own all code and models" },
];

const PHASES = [
  {
    p: "Phase 01 · 1–2 WEEKS",
    t: "Discovery & Scoping",
    d: "We audit your data, define the use case, and scope the build. No assumptions, no templates - just what your specific problem actually requires.",
    deliv: [
      "Data audit and readiness report",
      "Use case definition document",
      "Tech stack recommendation",
      "Fixed-fee SOW",
    ],
  },
  {
    p: "Phase 02 · 1–2 WEEKS",
    t: "Architecture Design",
    d: "Our AI solutions architects design the model architecture, data pipeline, integration points, and compliance framework before a single line of code is written.",
    deliv: [
      "System architecture blueprint",
      "Data pipeline design",
      "Integration map",
      "Compliance review",
    ],
  },
  {
    p: "Phase 03 · 2–4 WEEKS",
    t: "Model Development",
    d: "ML engineers build, train, and evaluate the model against your data. Whether it is a machine learning model, NLP development, or computer vision system - built clean, tested rigorously.",
    deliv: [
      "Trained model (v1)",
      "Evaluation report",
      "Benchmark results",
      "Iteration log",
    ],
  },
  {
    p: "Phase 04 · 1–2 WEEKS",
    t: "Integration & Testing",
    d: "The model is integrated into your existing stack - APIs, cloud infrastructure, UI, or internal tools. Full QA, load testing, and bias review before any production deployment.",
    deliv: [
      "Production-integrated system",
      "QA and load test results",
      "Bias and safety audit",
      "Deployment runbook",
    ],
  },
  {
    p: "Phase 05 · ONGOING",
    t: "Deployment & Handover",
    d: "We deploy, monitor, and hand over full documentation. Clients can run it independently or move to a managed services retainer for ongoing optimization.",
    deliv: [
      "Live production deployment",
      "Monitoring dashboard",
      "Full documentation",
      "Handover or retainer options",
    ],
  },
];

const BUILDS = [
  {
    t: "Machine Learning Models",
    d: "Predictive models, classification systems, anomaly detection, and forecasting engines trained on your data. From fraud detection to demand forecasting - production-grade machine learning development for real business outcomes.",
  },
  {
    t: "NLP Development Services",
    d: "Document extraction, contract analysis, sentiment analysis, entity recognition, and text classification. Our nlp development services handle unstructured data at enterprise scale - legal, healthcare, financial, and operational documents.",
  },
  {
    t: "Computer Vision Systems",
    d: "Defect detection, visual quality control, medical image analysis, and object recognition models. Deployed on cloud infrastructure or edge hardware for real-time production-line intelligence.",
  },
  {
    t: "Conversational AI & Chatbots",
    d: "Domain-tuned LLM-powered assistants built on your knowledge base. Not generic chatbots - AI that knows your products, policies, and customers and handles tier-1 queries autonomously.",
  },
  {
    t: "Recommendation Engines",
    d: "Personalization systems that improve with every interaction. Product recommendations, content surfacing, and next-best-action models built for e-commerce, media, and financial services clients.",
  },
  {
    t: "Predictive Analytics",
    d: "Forecasting models for sales, churn, inventory, staffing, and maintenance. Built on your historical data, connected to your dashboards, and calibrated to your P&L assumptions.",
  },
];

const PERSONAS = [
  {
    t: "CTO / VP Engineering",
    d: "Your team has the data but not the ML expertise to build production-grade models. You need a custom ai development company that builds clean, documented, and hand-offable systems.",
    b: [
      "In-house team lacks ML depth",
      "Need production-ready, not prototype",
      "Full IP ownership required",
    ],
  },
  {
    t: "Operations / Process Owner",
    d: "A specific workflow is breaking at scale and no off-the-shelf tool fits your data format, compliance requirements, or integration constraints.",
    b: [
      "Existing tools don't fit the use case",
      "Data is proprietary or regulated",
      "Need something that actually integrates",
    ],
  },
  {
    t: "Product Leader / Founder",
    d: "You are building an AI-powered product and need a custom ai development company that can build the model layer - and hand it over clean when it is done.",
    b: [
      "Building AI-first product or feature",
      "Need fast time-to-prototype",
      "Investors need a working demo",
    ],
  },
];

const QUOTES = [
  {
    q: "alien.fi's custom ai development team built our fraud detection model from scratch. It went live in 11 weeks and cut our fraud losses by 47% in the first year. The code is clean, documented, and our internal team runs it independently.",
    by: "Chief Technology Officer, Regional Insurance Company",
  },
  {
    q: "We needed nlp development services that could handle 10,000+ contracts a month. alien.fi built a contract extraction model that runs at 95% accuracy. We replaced a team of six manual reviewers.",
    by: "VP of Operations, Mid-Market Legal Services Firm",
  },
  {
    q: "Every other vendor wanted to sell us their platform. alien.fi built exactly what we needed on our infrastructure, on our timeline, and handed over 100% of the IP. That is rare.",
    by: "CTO, Healthcare Technology Scale-Up",
  },
];

const FAQS = [
  {
    q: "What makes alien.fi a custom ai development company rather than a software agency?",
    a: "alien.fi builds only AI systems - machine learning models, NLP pipelines, computer vision, and LLM-powered applications. Every engineer on your project is an AI or ML specialist, not a generalist developer assigned to an AI task.",
  },
  {
    q: "Who owns the code and models after the engagement?",
    a: "You do. 100%. alien.fi retains no intellectual property rights on any model, code, pipeline, or documentation built for your engagement. Full IP transfer is standard in every SOW.",
  },
  {
    q: "What data do I need to start a custom ai development engagement?",
    a: "It depends on the use case. We conduct a data audit in Phase 1 before committing to a scope. Many clients start with imperfect data - our data engineers clean, enrich, and structure it as part of the engagement.",
  },
  {
    q: "How long does custom ai development take?",
    a: "Most engagements run 6 to 20 weeks from kickoff to production deployment. A focused machine learning model for a single use case typically takes 6-10 weeks. A full NLP development pipeline with system integration runs 12-20 weeks.",
  },
  {
    q: "Can alien.fi also maintain the model after it goes live?",
    a: "Yes. Every custom ai development engagement includes a handover package with full documentation and runbooks. Clients can run it independently or move to a managed services retainer for ongoing monitoring, retraining, and optimization.",
  },
];

const FAQ_ITEMS: ReadonlyArray<readonly [string, string]> = FAQS.map((f) => [f.q, f.a]);

function Hero() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const stacked = layout !== "desktop";
  return (
    <ScrollSection as="section" index={0} style={{ paddingTop: 60, background: DK, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ padding: `0 ${gv}px` }}>
        <div style={{ display: "grid", gridTemplateColumns: stacked ? "1fr" : "320px 1fr", minHeight: stacked ? undefined : 480 }}>
          <div style={{ padding: stacked ? "36px 0 28px" : "60px 36px", borderRight: stacked ? "none" : "1px solid rgba(255,255,255,0.06)", borderBottom: stacked ? "1px solid rgba(255,255,255,0.06)" : "none", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 24 }}>
            <div>
              <div style={{ display: "flex", gap: 8, marginBottom: 32, fontFamily: MN, fontSize: 9, letterSpacing: "normal", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
                <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</Link><span>/</span>
                <Link href="/services" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Services</Link><span>/</span>
                <span style={{ color: L2 }}>Custom AI Development</span>
              </div>
              <Lbl ch="Service · Build to Production" lt />
              <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 18, color: "#fff", lineHeight: 1.5, marginBottom: 14 }}>
                Your custom ai development company. From model to production.
              </div>
              <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.55)" }}>
                For teams that need AI built for their specific data, workflows, and compliance requirements - not off-the-shelf tools retrofitted to fit.
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                ["Engagement", "$25-500K"],
                ["Duration", "6-20 weeks"],
                ["Team", "1 architect + 2-4 engineers"],
                ["Output", "Production-ready AI system"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <span style={{ fontFamily: MN, fontSize: 10, letterSpacing: "normal", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>{k}</span>
                  <span style={{ fontFamily: MN, fontSize: 11, color: "rgba(255,255,255,0.85)" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding: stacked ? "32px 0 44px" : "72px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Chip ch="Custom AI Development" bg={L} cl="#000" sx={{ marginBottom: 24 }} />
            <div style={{ fontFamily: MN, fontSize: "clamp(36px,4.8vw,72px)", lineHeight: 1, color: "#fff", letterSpacing: "normal", marginBottom: 32 }}>
              <div style={{ fontWeight: 300 }}>BUILT FOR</div>
              <div style={{ fontWeight: 500 }}>YOUR DATA.</div>
              <div style={{ fontWeight: 700, color: L }}>NOT THEIRS.</div>
            </div>
            <div style={{ fontFamily: SN, fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", maxWidth: 700, marginBottom: 32 }}>
              Off-the-shelf AI tools are built for someone else&#39;s problem. We are a custom ai development company that builds machine learning models, NLP systems, and intelligent automation for your specific data, your workflows, and your compliance constraints.
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <MagneticWrap strength={0.35} style={{ display: "inline-flex" }}>
                <Link href="/contact" className="hv" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: L, color: "#000", borderRadius: 999, padding: "12px 18px", textDecoration: "none", fontFamily: MN, fontSize: 11, fontWeight: 700, letterSpacing: "normal", textTransform: "uppercase", transition: "background .2s,color .2s,box-shadow .2s" }}
                  onMouseEnter={consultancyLimeCtaEnter}
                  onMouseLeave={consultancyLimeCtaLeave}
                >
                  Start a project <Arr sz={10} cl="currentColor" sw={2.4} />
                </Link>
              </MagneticWrap>
              <MagneticWrap strength={0.35} style={{ display: "inline-flex" }}>
                <Link href="/case-studies" className="hv" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(255,255,255,0.28)", color: "#fff", borderRadius: 999, padding: "12px 18px", textDecoration: "none", fontFamily: MN, fontSize: 11, fontWeight: 700, letterSpacing: "normal", textTransform: "uppercase", transition: "background .2s,box-shadow .2s" }}
                  onMouseEnter={consultancyGhostOnDarkEnter}
                  onMouseLeave={consultancyGhostOnDarkLeave}
                >
                  See case studies <Arr sz={10} cl="currentColor" sw={2.4} />
                </Link>
              </MagneticWrap>
            </div>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
}

function Metrics() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  return (
    <ScrollSection as="section" index={1} style={{ padding: `${layout === "mobile" ? 40 : 60}px ${gv}px`, background: DK }}>
      <ConsultancyCardGrid desktopCols={4} tabletCols={2} tone="dark">
        {METRICS.map((x, i) => (
          <ScrollGridItem key={x.l} sectionIndex={1} cardIndex={i}>
            <ConsultancyInteractiveSurface variant="dk" style={{ padding: layout === "mobile" ? "24px 20px" : "32px 28px" }}>
              <div style={{ fontFamily: MN, fontSize: 44, fontWeight: 700, color: L, lineHeight: 1, marginBottom: 10 }}>{x.v}</div>
              <div style={{ fontFamily: MN, fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.75)", marginBottom: 4 }}>{x.l}</div>
              <div style={{ fontFamily: SN, fontSize: 11, color: "rgba(255,255,255,0.45)" }}>{x.s}</div>
            </ConsultancyInteractiveSurface>
          </ScrollGridItem>
        ))}
      </ConsultancyCardGrid>
    </ScrollSection>
  );
}

function Method() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  return (
    <ScrollSection as="section" index={2} style={{ padding: `${pv}px ${gv}px`, background: `linear-gradient(180deg,${BG2},${BG})`, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
      <div style={{ marginBottom: 40, display: "grid", gridTemplateColumns: layout === "desktop" ? "320px 1fr" : "1fr", gap: 40, alignItems: "end" }}>
        <div><Lbl ch="Six weeks to production · Five phases" /><Ttl ch="THE METHOD." /></div>
        <div style={{ fontFamily: SN, fontSize: 14, color: "rgba(0,0,0,0.55)", maxWidth: 620, lineHeight: 1.7 }}>
          Each phase has a clear output and a go or no-go gate. Nothing moves forward until the previous phase is validated.
        </div>
      </div>
      <ConsultancyCardGrid desktopCols={5} tabletCols={2} tone="light">
        {PHASES.map((p, i) => (
          <ScrollGridItem key={p.p} sectionIndex={2} cardIndex={i}>
            <ConsultancyInteractiveSurface variant="gradient" style={{ padding: "28px 24px" }}>
              <div style={{ fontFamily: MN, fontSize: 11, fontWeight: 700, letterSpacing: "normal", color: L_TEXT_ON_LIGHT, marginBottom: 10 }}>{p.p}</div>
              <div style={{ fontFamily: MN, fontSize: 16, fontWeight: 600, marginBottom: 10 }}>{p.t}</div>
              <div style={{ fontFamily: SN, fontSize: 12.5, lineHeight: 1.65, color: "rgba(0,0,0,0.55)", marginBottom: 12 }}>{p.d}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {p.deliv.map((d) => (
                  <div key={d} style={{ display: "flex", gap: 8, fontFamily: MN, fontSize: 10.5, color: "rgba(0,0,0,0.55)" }}>
                    <div style={{ width: 4, height: 4, borderRadius: "50%", background: L_TEXT_ON_LIGHT, marginTop: 6 }} />
                    {d}
                  </div>
                ))}
              </div>
            </ConsultancyInteractiveSurface>
          </ScrollGridItem>
        ))}
      </ConsultancyCardGrid>
    </ScrollSection>
  );
}

function CardsSection({
  eyebrow,
  title,
  items,
  sectionIndex,
}: {
  eyebrow: string;
  title: string;
  items: { t: string; d: string; b?: string[] }[];
  sectionIndex: number;
}) {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  return (
    <ScrollSection as="section" index={sectionIndex} style={{ padding: `${pv}px ${gv}px`, background: BG, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
      <div style={{ marginBottom: 36 }}><Lbl ch={eyebrow} /><Ttl ch={title} /></div>
      <ConsultancyCardGrid desktopCols={3} tabletCols={2} tone="light">
        {items.map((it, i) => (
          <ScrollGridItem key={it.t} sectionIndex={sectionIndex} cardIndex={i}>
            <ConsultancyInteractiveSurface variant="gradient" style={{ padding: "28px 24px" }}>
              <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 11, color: L_TEXT_ON_LIGHT, letterSpacing: "normal", marginBottom: 8 }}>{String(i + 1).padStart(2, "0")} -</div>
              <div style={{ fontFamily: MN, fontSize: 15, fontWeight: 600, marginBottom: 10 }}>{it.t}</div>
              <div style={{ fontFamily: SN, fontSize: 12.5, lineHeight: 1.65, color: "rgba(0,0,0,0.55)" }}>{it.d}</div>
              {it.b ? (
                <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 12 }}>
                  {it.b.map((x) => (
                    <div key={x} style={{ display: "flex", gap: 8, fontFamily: MN, fontSize: 10.5, color: "rgba(0,0,0,0.55)" }}>
                      <div style={{ width: 4, height: 4, borderRadius: "50%", background: L_TEXT_ON_LIGHT, marginTop: 6 }} />
                      {x}
                    </div>
                  ))}
                </div>
              ) : null}
            </ConsultancyInteractiveSurface>
          </ScrollGridItem>
        ))}
      </ConsultancyCardGrid>
    </ScrollSection>
  );
}

function QuotesSection() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  return (
    <ScrollSection as="section" index={5} style={{ padding: `${pv}px ${gv}px`, background: DK, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
      <div style={{ marginBottom: 36 }}><Lbl ch="What clients say" lt /><Ttl ch="TRUSTED BY TEAMS THAT SHIP." lt /></div>
      <ConsultancyCardGrid desktopCols={3} tabletCols={2} tone="dark">
        {QUOTES.map((q, i) => (
          <ScrollGridItem key={q.by} sectionIndex={5} cardIndex={i}>
            <ConsultancyInteractiveSurface variant="dk" style={{ padding: "28px 24px" }}>
              <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", marginBottom: 12 }}>&ldquo;{q.q}&rdquo;</div>
              <div style={{ fontFamily: MN, fontSize: 10.5, letterSpacing: "normal", color: L }}>{q.by}</div>
            </ConsultancyInteractiveSurface>
          </ScrollGridItem>
        ))}
      </ConsultancyCardGrid>
    </ScrollSection>
  );
}

function FAQSection() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  return (
    <ScrollSection as="section" index={6} style={{ padding: `${pv}px ${gv}px`, background: `linear-gradient(180deg,${BG2},${BG})`, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
      <div style={{ marginBottom: 32 }}><Lbl ch="Got questions" /><Ttl ch="FAQS." /></div>
      <ConsultancyFaqAccordion items={FAQ_ITEMS} tone="light" />
    </ScrollSection>
  );
}

export default function ServiceCustomAIDevelopmentPageClient() {
  return (
    <ConsultancyLoadedShell label="CUSTOM BUILD">
      <Nav current="Services" />
      <Hero />
      <Metrics />
      <Method />
      <CardsSection eyebrow="Six capabilities" title="WHAT WE BUILD." items={BUILDS} sectionIndex={3} />
      <CardsSection eyebrow="Built for these teams" title="WHO THIS IS FOR." items={PERSONAS} sectionIndex={4} />
      <QuotesSection />
      <FAQSection />
      <CTAStrip
        title="YOUR DATA.|YOUR MODEL.|YOUR IP."
        sub="Tell us the use case. We will send a scoping brief, a fixed-fee estimate, and three references from comparable custom ai development engagements in your industry."
        cta="Start a project"
        ctaUppercase={false}
      />
      <Footer />
    </ConsultancyLoadedShell>
  );
}

