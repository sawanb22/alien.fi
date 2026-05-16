"use client";

import Link from "next/link";
import { ConsultancyLoadedShell } from "@/components/consultancy/ConsultancyLoadedShell";
import {
  Arr,
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
import { gridCols, sectionGutter, sectionVPad, useLandingLayout } from "@/lib/landing-layout-context";
import { MN, SN } from "@/lib/consultancy/tokens";
import { BG, BG2, DK, L, L2, L_TEXT_ON_LIGHT, PL } from "@/lib/consultancy/theme";
import { MagneticWrap, ScrollGridItem, ScrollSection } from "@/components/motion/scroll-primitives";

const METRICS = [
  ["4 to 8 weeks", "Time to production RAG", "From data audit to go-live"],
  ["95%+", "Out-of-box retrieval accuracy", "On structured document sets"],
  ["$25K", "Starting engagement cost", "Fixed-fee, no surprises"],
  ["0", "Hallucinations on grounded queries", "Source-cited answers only"],
] as const;
const PHASES = [
  ["Phase 01 · 2 WEEKS", "Data Audit and Ingestion", "We audit your existing documents, databases, and knowledge assets.", ["Document and data source audit", "Chunking strategy design", "Embedding model selection", "Ingestion pipeline build"]],
  ["Phase 02 · 2 WEEKS", "Vector Database and Retrieval Design", "We deploy vector storage and optimize retrieval with hybrid search, reranking, and metadata filtering.", ["Vector database deployment", "Hybrid search configuration", "Reranking and metadata filtering", "Retrieval quality benchmarking"]],
  ["Phase 03 · 2 WEEKS", "LLM Integration and Tuning", "We connect retrieval to your LLM backbone and benchmark hallucination rates before go-live.", ["LLM backbone integration", "Prompt engineering and testing", "Response quality tuning", "Hallucination rate benchmarking"]],
  ["Phase 04 · 1 to 2 WEEKS", "Deployment and Handover", "We deploy the UI/API layer, set permissions, configure monitoring, and train your team.", ["UI or API deployment", "Access controls and permissions", "Monitoring and alerting setup", "Team training and documentation"]],
] as const;
const DELIVERABLES = [
  "Production RAG System",
  "Ingestion and Refresh Pipeline",
  "Retrieval Quality Report",
  "Prompt and Configuration Library",
  "Monitoring Dashboard",
  "Handover Documentation and Training",
];
const ADVANCED = [
  ["Agentic RAG", "The AI agent decides which sources to query and in what sequence for multi-step answers."],
  ["Multi-Modal RAG", "Retrieval across text, tables, images, and PDFs in one query."],
  ["Conversational Memory RAG", "Context retention across multi-turn conversations for reliable follow-up handling."],
  ["Auto-Refresh Pipelines", "New documents are detected, processed, and indexed automatically with no manual work."],
] as const;
const QUOTES = [
  "\"alien.fi's RAG development services turned our archive into a live, accurate Q and A system our team uses daily.\" -- Head of Legal Operations, Regional Insurance Company",
  "\"By week eight we had a production system handling 400 queries per day with source-cited answers.\" -- VP of Operations, Mid-Market Healthcare Provider",
  "\"alien.fi was the only team that benchmarked hallucination rates before go-live and built auto-refresh.\" -- CTO, Financial Services Technology Company",
];
const INDUSTRIES = [
  ["Legal", "Case law and contract retrieval", "60 to 70% faster research"],
  ["Healthcare", "Clinical guideline and protocol lookup", "Accurate, cited recommendations"],
  ["Financial Services", "Regulatory document search and compliance QA", "Audit-ready answers"],
  ["Retail", "Product catalog and policy knowledge bases", "Instant accurate responses"],
  ["Internal Enterprise", "HR policy, IT helpdesk, employee handbook", "Reduced support ticket volume"],
] as const;
const FAQS = [
  ["What are RAG development services and what do they deliver?", "They design, build, and deploy retrieval-augmented generation systems grounded in your own data. We deliver ingestion, vector DB deployment, LLM integration, monitoring, and training in 4 to 8 weeks."],
  ["How are custom RAG development services different from a standard chatbot?", "Standard chatbots rely on pretrained knowledge. Custom RAG retrieves verified source content from your knowledge base before response generation, yielding higher accuracy and grounded answers."],
  ["What data sources can your rag application development services connect to?", "PDFs, office docs, tables, web content, SQL, wikis, SharePoint, Confluence, Notion, Google Drive, and API-accessible sources."],
  ["What vector databases does alien.fi use for RAG development services?", "Pinecone, Weaviate, Qdrant, pgvector, and ChromaDB based on your scale, infra, and residency requirements."],
  ["How long does a custom RAG development engagement take?", "Most projects run 4 to 8 weeks based on source count, architecture complexity, and advanced options."],
  ["What is the budget range for rag application development services at alien.fi?", "Engagements range from $25,000 to $150,000 depending on source breadth, modality, and integration scope."],
] as const;

export default function ServiceRAGAcceleratorPageClient() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  return (
    <ConsultancyLoadedShell label="RAG ACCELERATOR">
      <Nav current="Services" />
      <ScrollSection as="section" index={0} style={{ paddingTop: 60, background: DK }}>
        <div style={{ padding: `0 ${gv}px` }}>
          <div style={{ display: "grid", gridTemplateColumns: layout === "desktop" ? "320px 1fr" : "1fr" }}>
            <div style={{ padding: 28, borderRight: layout === "desktop" ? "1px solid rgba(255,255,255,0.08)" : "none", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: MN, fontSize: 9, color: "rgba(255,255,255,0.5)", letterSpacing: "normal", textTransform: "uppercase", marginBottom: 20 }}>
                <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</Link>
                <span style={{ opacity: 0.4 }}>/</span>
                <Link href="/services" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Services</Link>
                <span style={{ opacity: 0.4 }}>/</span>
                <span style={{ color: L2 }}>RAG Accelerator</span>
              </div>
              <Lbl ch="Service · Discovery to Production" lt />
              <div style={{ fontFamily: MN, color: "#fff", fontSize: 18, marginBottom: 10 }}>RAG development services that go live in 4 to 8 weeks.</div>
              <div style={{ fontFamily: SN, color: "rgba(255,255,255,0.6)", fontSize: 13, lineHeight: 1.65, marginBottom: 16 }}>For teams that need AI to answer questions accurately from their own documents, databases, and knowledge assets.</div>
              <div style={{ fontFamily: MN, fontSize: 11, color: "rgba(255,255,255,0.8)", lineHeight: 1.9 }}>
                <div>Engagement: $25K to $150K</div><div>Duration: 4 to 8 weeks</div><div>Team: 1 lead AI engineer + 1 data engineer + 1 solutions architect</div><div>Output: Production-grade RAG system</div>
              </div>
            </div>
            <div style={{ padding: "52px 36px" }}>
              <Lbl ch="RAG Application Development Services" lt />
              <div style={{ fontFamily: MN, fontSize: "clamp(34px,5vw,66px)", lineHeight: 1, color: "#fff", marginBottom: 20 }}>
                <div>YOUR DATA.</div><div style={{ fontWeight: 600 }}>YOUR ANSWERS.</div><div style={{ fontWeight: 700, color: L }}>ZERO HALLUCINATIONS.</div>
              </div>
              <div style={{ fontFamily: SN, fontSize: 15, color: "rgba(255,255,255,0.63)", lineHeight: 1.7, maxWidth: 720, marginBottom: 24 }}>
                Most AI systems make things up. Our RAG development services build retrieval-augmented generation systems that answer questions by dynamically retrieving verified content from your own documents and knowledge bases.
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <MagneticWrap strength={0.35} style={{ display: "inline-flex" }}>
                  <Link
                    href="/contact"
                    className="hv"
                    style={{
                      background: L,
                      color: "#000",
                      textDecoration: "none",
                      padding: "12px 18px",
                      borderRadius: 999,
                      fontFamily: MN,
                      fontSize: 11,
                      fontWeight: 700,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      transition: "background .2s,color .2s,box-shadow .2s",
                    }}
                    onMouseEnter={consultancyLimeCtaEnter}
                    onMouseLeave={consultancyLimeCtaLeave}
                  >
                    Start your RAG project <Arr sz={10} cl="currentColor" />
                  </Link>
                </MagneticWrap>
                <MagneticWrap strength={0.35} style={{ display: "inline-flex" }}>
                  <Link
                    href="/case-studies"
                    className="hv"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      padding: "12px 18px",
                      borderRadius: 999,
                      border: "1px solid rgba(255,255,255,0.28)",
                      fontFamily: MN,
                      fontSize: 11,
                      fontWeight: 700,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      transition: "background .2s,box-shadow .2s",
                    }}
                    onMouseEnter={consultancyGhostOnDarkEnter}
                    onMouseLeave={consultancyGhostOnDarkLeave}
                  >
                    See past builds
                  </Link>
                </MagneticWrap>
              </div>
            </div>
          </div>
        </div>
      </ScrollSection>

      <ScrollSection as="section" index={1} style={{ padding: `42px ${gv}px`, background: DK }}>
        <ConsultancyCardGrid desktopCols={4} tabletCols={2} tone="dark" borderRadius={18}>
          {METRICS.map(([v, l, s], i) => (
            <ScrollGridItem key={l} sectionIndex={1} cardIndex={i}>
              <ConsultancyInteractiveSurface variant="dk" style={{ padding: 22 }}>
                <div style={{ fontFamily: MN, fontSize: 42, color: L, fontWeight: 700 }}>{v}</div>
                <div style={{ fontFamily: MN, fontSize: 11, color: "rgba(255,255,255,0.8)" }}>{l}</div>
                <div style={{ fontFamily: SN, fontSize: 11, color: "rgba(255,255,255,0.5)" }}>{s}</div>
              </ConsultancyInteractiveSurface>
            </ScrollGridItem>
          ))}
        </ConsultancyCardGrid>
      </ScrollSection>

      <ScrollSection as="section" index={2} style={{ padding: `${pv}px ${gv}px`, background: BG, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
        <Lbl ch="Four to eight weeks · Four phases" /><Ttl ch="THE METHOD." />
        <p style={{ fontFamily: SN, color: "rgba(0,0,0,0.58)", maxWidth: 760 }}>Our custom RAG development services follow four sequential phases. Each phase produces a tangible output.</p>
        <ConsultancyCardGrid desktopCols={4} tabletCols={2} tone="light" borderRadius={18}>
          {PHASES.map(([p, t, d, b], i) => (
            <ScrollGridItem key={p} sectionIndex={2} cardIndex={i}>
              <ConsultancyInteractiveSurface variant="muted" style={{ padding: 20 }}>
                <div style={{ fontFamily: MN, fontSize: 11, fontWeight: 700, letterSpacing: "normal", color: L_TEXT_ON_LIGHT }}>{p}</div>
                <div style={{ fontFamily: MN, fontSize: 15, margin: "8px 0" }}>{t}</div>
                <div style={{ fontFamily: SN, fontSize: 12.5, color: "rgba(0,0,0,0.56)", marginBottom: 8 }}>{d}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {b.map((x) => (
                    <div key={x} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontFamily: MN, fontSize: 10.5, color: "rgba(0,0,0,0.72)" }}>
                      <span aria-hidden style={{ width: 4, height: 4, borderRadius: "50%", background: L_TEXT_ON_LIGHT, flexShrink: 0, marginTop: 5 }} />
                      <span>{x}</span>
                    </div>
                  ))}
                </div>
              </ConsultancyInteractiveSurface>
            </ScrollGridItem>
          ))}
        </ConsultancyCardGrid>
      </ScrollSection>

      <ScrollSection as="section" index={3} style={{ padding: `${pv}px ${gv}px`, background: BG2, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
        <Lbl ch="Six deliverables" /><Ttl ch="WHAT YOU TAKE HOME." />
        <ConsultancyCardGrid desktopCols={3} tabletCols={2} tone="light" borderRadius={18}>
          {DELIVERABLES.map((t, i) => (
            <ScrollGridItem key={t} sectionIndex={3} cardIndex={i}>
              <ConsultancyInteractiveSurface variant="light" style={{ padding: 22 }}>
                <div style={{ fontFamily: MN, fontSize: 11, fontWeight: 700, letterSpacing: "normal", color: L_TEXT_ON_LIGHT }}>{String(i + 1).padStart(2, "0")} -</div>
                <div style={{ fontFamily: MN, fontSize: 15, marginTop: 8 }}>{t}</div>
              </ConsultancyInteractiveSurface>
            </ScrollGridItem>
          ))}
        </ConsultancyCardGrid>
      </ScrollSection>

      <ScrollSection as="section" index={4} style={{ padding: `${pv}px ${gv}px`, background: BG, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
        <Lbl ch="Beyond standard RAG" /><Ttl ch="ADVANCED RAG OPTIONS." />
        <ConsultancyCardGrid desktopCols={4} tabletCols={2} tone="light" borderRadius={18}>
          {ADVANCED.map(([t, d], i) => (
            <ScrollGridItem key={t} sectionIndex={4} cardIndex={i}>
              <ConsultancyInteractiveSurface variant="muted" style={{ padding: 20 }}>
                <div style={{ fontFamily: MN, fontSize: 14, marginBottom: 6 }}>{t}</div>
                <div style={{ fontFamily: SN, fontSize: 12.5, color: "rgba(0,0,0,0.57)" }}>{d}</div>
              </ConsultancyInteractiveSurface>
            </ScrollGridItem>
          ))}
        </ConsultancyCardGrid>
      </ScrollSection>

      <ScrollSection as="section" index={5} style={{ padding: `${pv}px ${gv}px`, background: DK, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
        <Lbl ch="What clients say" lt /><Ttl ch="TRUSTED BY TEAMS THAT SHIP." lt />
        <ConsultancyCardGrid desktopCols={3} tabletCols={2} tone="dark" borderRadius={18}>
          {QUOTES.map((q, i) => (
            <ScrollGridItem key={q} sectionIndex={5} cardIndex={i}>
              <ConsultancyInteractiveSurface variant="dk" style={{ padding: 22, fontFamily: SN, fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
                {q}
              </ConsultancyInteractiveSurface>
            </ScrollGridItem>
          ))}
        </ConsultancyCardGrid>
      </ScrollSection>

      <ScrollSection as="section" index={6} style={{ padding: `${pv}px ${gv}px`, background: BG2, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
        <Lbl ch="Built for your industry" /><Ttl ch="WHERE RAG WORKS." />
        <ConsultancyCardGrid desktopCols={1} tabletCols={1} tone="light" borderRadius={14}>
          {INDUSTRIES.map(([ind, a, b], i) => (
            <ScrollGridItem key={ind} sectionIndex={6} cardIndex={i}>
              <ConsultancyInteractiveSurface
                variant="light"
                style={{ padding: 18, display: "grid", gridTemplateColumns: layout === "mobile" ? "1fr" : "1.1fr 1.6fr 1.3fr", gap: 8 }}
              >
                <div style={{ fontFamily: MN, fontSize: 12, fontWeight: 600 }}>{ind}</div>
                <div style={{ fontFamily: SN, fontSize: 12.5, color: "rgba(0,0,0,0.57)" }}>{a}</div>
                <div style={{ fontFamily: MN, fontSize: 11, color: "rgba(0,0,0,0.6)" }}>{b}</div>
              </ConsultancyInteractiveSurface>
            </ScrollGridItem>
          ))}
        </ConsultancyCardGrid>
      </ScrollSection>

      <ScrollSection as="section" index={7} style={{ padding: `${pv}px ${gv}px`, background: BG, borderRadius: "24px 24px 0 0", marginTop: -24 }}>
        <Lbl ch="Got questions" /><Ttl ch="FAQS." />
        <ConsultancyFaqAccordion items={FAQS} tone="paper" />
      </ScrollSection>

      <CTAStrip
        title="FOUR WEEKS.|ONE RAG SYSTEM.|FIXED FEE."
        sub="Tell us what documents and data sources you want your AI to answer from. We will review your data landscape, send three peer references, and deliver a fixed-fee statement of work within 48 hours."
        cta="Start a project"
      />
      <Footer />
    </ConsultancyLoadedShell>
  );
}
