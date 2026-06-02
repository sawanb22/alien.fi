'use client';

import Link from 'next/link';
import { ConsultancyLoadedShell } from '@/components/consultancy/ConsultancyLoadedShell';
import {
  Arr,
  ConsultancyFaqAccordion,
  ConsultancyCardGrid,
  ConsultancyInteractiveSurface,
  CTAStrip,
  Footer,
  Lbl,
  Nav,
  FAQ_SECTION_TITLE_SX,
  Ttl,
  consultancyGhostOnDarkEnter,
  consultancyGhostOnDarkLeave,
  consultancyLimeCtaEnter,
  consultancyLimeCtaLeave,
} from '@/components/consultancy/consultancy-ui';
import {
  gridCols,
  sectionGutter,
  sectionVPad,
  useLandingLayout,
} from '@/lib/landing-layout-context';
import { MN, SN } from '@/lib/consultancy/tokens';
import { BG, BG2, DK, L, L2, L_TEXT_ON_LIGHT, PL } from '@/lib/consultancy/theme';
import { MagneticWrap, ScrollGridItem, ScrollSection } from '@/components/motion/scroll-primitives';

const METRICS = [
  { v: '4 weeks', l: 'Fastest governance program', s: 'Audit-ready output' },
  { v: '100%', l: 'Clients pass first regulatory review', s: 'Post ai governance consulting' },
  { v: '3 frameworks', l: 'Covered as standard', s: 'NIST AI RMF, EU AI Act, ISO 42001' },
  { v: '$15K', l: 'Starting engagement cost', s: 'Fixed-fee, defined scope' },
];

const PHASES = [
  {
    p: 'Phase 01 · 1 to 2 WEEKS',
    t: 'AI Risk Discovery and Inventory',
    d: 'We conduct a full audit of every AI system your organization currently operates or plans to deploy. We classify each system by risk level, map data flows, identify regulatory exposure, and document the gap between your current controls and the requirements of your target enterprise ai governance framework.',
    deliv: [
      'AI system inventory and classification',
      'Data flow and exposure mapping',
      'Regulatory gap analysis',
      'Risk register draft',
    ],
  },
  {
    p: 'Phase 02 · 2 to 4 WEEKS',
    t: 'AI Risk Management Framework Design',
    d: 'We design your ai risk management framework covering risk classification methodology, acceptable use policies, bias audit protocols, data governance requirements, human oversight requirements, and incident response procedures. Built specifically for your industry, AI use cases, and applicable regulatory environment.',
    deliv: [
      'Risk classification methodology',
      'Acceptable use policy design',
      'Bias audit protocol development',
      'Incident response procedure',
    ],
  },
  {
    p: 'Phase 03 · 2 to 6 WEEKS',
    t: 'Enterprise AI Governance Program Build',
    d: 'We build the full enterprise ai governance program including your AI council charter, governance committee structure, vendor assessment criteria, model approval workflow, ongoing monitoring cadence, and employee acceptable use policy. Every document is written to survive external audit, not just internal review.',
    deliv: [
      'AI council charter and structure',
      'Vendor and model approval workflow',
      'Employee acceptable use policy',
      'Ongoing monitoring cadence',
    ],
  },
  {
    p: 'Phase 04 · 1 to 2 WEEKS',
    t: 'Board Presentation and Handover',
    d: 'We package every output into a board-ready governance deck, deliver a live presentation to your leadership team or audit committee, and train your designated AI governance lead on how to operate and maintain the program after handover.',
    deliv: [
      'Board-ready governance deck',
      'Leadership team presentation',
      'AI governance lead training',
      'Program maintenance playbook',
    ],
  },
];

const DELIVERABLES = [
    {
        t: 'AI Risk Register',
        d: 'A fully documented register of every AI system in your organization classified by risk tier, regulatory exposure, data sensitivity, potential for harm, and current control status. The foundation of your ai risk management framework and the first document any regulator or auditor will request.',
    },
    {
        t: 'AI Risk Management Framework',
        d: 'A complete ai risk management framework covering how your organization identifies, classifies, evaluates, mitigates, and monitors AI-related risks across every deployment. Aligned to NIST AI RMF, EU AI Act, and ISO 42001 as applicable to your regulatory context. Written to survive external audit on day one.',
    },
    {
        t: 'Enterprise AI Governance Program',
        d: 'The full enterprise ai governance program documentation set including your AI council charter, governance committee terms of reference, model approval workflow, vendor assessment criteria, bias audit protocol, and ongoing monitoring cadence. Every document board-ready and version-controlled from delivery.',
    },
    {
        t: 'Acceptable Use Policy',
        d: 'A practical, role-specific acceptable use policy covering what AI tools employees may use, how they may use them, what data they may input, how outputs must be reviewed, and what escalation procedures apply when AI systems produce unexpected or harmful results. Written in plain language for organization-wide adoption.',
    },
    {
        t: 'Bias and Fairness Audit Protocol',
        d: 'A repeatable, documented protocol for auditing AI models and outputs for bias, discrimination, and fairness issues before deployment and on a scheduled ongoing basis. Includes evaluation criteria, testing methodology, acceptable threshold definitions, and remediation workflow tied to your ai risk management framework.',
    },
    {
        t: 'Board-Ready Governance Deck',
        d: 'A concise, executive-level presentation covering your AI risk landscape, the enterprise ai governance program structure, key policies and controls, regulatory alignment status, and the ongoing governance roadmap. Designed to satisfy board members, audit committees, and external regulators in a single sitting.',
    },
];

const FRAMEWORKS = [
    { name: 'NIST AI RMF', applies: 'US organizations across all sectors', covers: 'Govern, Map, Measure, Manage functions' },
    { name: 'EU AI Act', applies: 'Organizations operating in or selling to EU markets', covers: 'Risk classification, prohibited uses, conformity assessment' },
    { name: 'ISO 42001', applies: 'Organizations seeking certified AI management systems', covers: 'Management system structure, audit readiness' },
    { name: 'HIPAA AI Guidance', applies: 'Healthcare organizations using clinical AI', covers: 'Data privacy, clinical decision support governance' },
    { name: 'FFIEC AI Guidance', applies: 'Banks and financial services firms', covers: 'Model risk management, explainability requirements' },
    { name: 'SOC 2 AI Controls', applies: 'SaaS and technology companies', covers: 'AI system controls for trust service criteria' },
];

const QUOTES = [
  {
    q: "We had AI deployed across six business units with no centralized governance. alien.fi's ai governance consulting practice built our full enterprise ai governance program in eight weeks. When our first regulatory inquiry arrived three months later, we handed them the documentation and closed the inquiry in one meeting.",
    by: 'Chief Risk Officer, Regional Bank',
  },
  {
    q: 'The ai risk management framework alien.fi delivered gave our board the confidence to approve three major AI investments they had been deferring for over a year. Governance was the blocker. It no longer is.',
    by: 'Chief Digital Officer, National Insurance Group',
  },
  {
    q: 'We needed ISO 42001 alignment before our enterprise clients would sign AI data processing agreements with us. alien.fi\'s ai governance consulting team delivered a compliant program in six weeks. We closed two enterprise deals the following month that had been stalled on governance.',
    by: 'CEO, B2B SaaS Technology Company',
  },
];

const FAQS = [
  {
    q: 'What does ai governance consulting from alien.fi include?',
    a: 'Our ai governance consulting engagements include a full AI system inventory and risk classification, gap analysis against applicable regulatory frameworks, design and documentation of your ai risk management framework, build of your complete enterprise ai governance program covering policies, workflows, and oversight structures, a bias and fairness audit protocol, and a board-ready governance presentation. All delivered as a fixed-fee engagement with defined milestones.',
  },
  {
    q: 'What is an enterprise ai governance program and why do we need one?',
    a: 'An enterprise ai governance program is the formal structure your organization uses to approve, monitor, audit, and manage every AI system you deploy. It covers who has oversight authority, how new AI tools get approved, how bias and fairness are tested, how incidents are handled, and how regulatory requirements are met. Without one, AI adoption spreads faster than accountability and a single incident can create regulatory, legal, and reputational exposure that far exceeds the cost of building governance proactively.',
  },
    {
        q: 'What is an ai risk management framework?',
        a: 'An ai risk management framework is a documented methodology for identifying, classifying, evaluating, mitigating, and monitoring AI-related risks across your organization. It defines risk tiers, acceptable thresholds, control requirements, audit procedures, and escalation paths for every category of AI risk including bias, data privacy, model failure, and regulatory non-compliance. alien.fi\'s ai risk management frameworks are aligned to NIST AI RMF, EU AI Act, and ISO 42001 as applicable.',
    },
    {
        q: 'How long does an ai governance consulting engagement take?',
        a: 'A focused ai risk management framework and acceptable use policy engagement takes 4 to 6 weeks. A full enterprise ai governance program build including all six components takes 8 to 16 weeks depending on the number of AI systems in scope, the complexity of your regulatory environment, and the number of business units covered.',
    },
    {
        q: 'Which regulatory frameworks does alien.fi align ai governance consulting to?',
        a: 'We build enterprise ai governance programs aligned to NIST AI RMF, EU AI Act, ISO 42001, HIPAA AI guidance for healthcare organizations, FFIEC model risk management guidance for financial services, and SOC 2 AI controls for technology companies. Most engagements are aligned to two or three frameworks simultaneously so clients are not rebuilding governance documentation for each separate audit.',
    },
    {
        q: 'What is the budget range for ai governance consulting at alien.fi?',
        a: 'A focused ai risk management framework engagement starts at $15,000. A full enterprise ai governance program covering all six structural components ranges from $60,000 to $180,000 depending on the number of AI systems in scope, regulatory framework complexity, and whether board presentation and ongoing advisory support are included. All engagements are fixed-fee with defined deliverables agreed before work begins.',
    },
];

const FAQ_ITEMS: ReadonlyArray<readonly [string, string]> = FAQS.map((f) => [f.q, f.a]);

function Hero() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const stacked = layout !== 'desktop';
  return (
    <ScrollSection as="section" index={0} style={{ paddingTop: 60, background: DK, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ padding: `0 ${gv}px` }}>
        <div style={{ display: 'grid', gridTemplateColumns: stacked ? '1fr' : '320px 1fr', minHeight: stacked ? undefined : 480 }}>
          <div style={{ padding: stacked ? '36px 0 28px' : '60px 36px', borderRight: stacked ? 'none' : '1px solid rgba(255,255,255,0.06)', borderBottom: stacked ? '1px solid rgba(255,255,255,0.06)' : 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 24 }}>
            <div>
              <div style={{ display: 'flex', gap: 8, marginBottom: 32, fontFamily: MN, fontSize: 9, letterSpacing: "normal", textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
                <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link><span>/</span>
                <Link href="/services" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Services</Link><span>/</span>
                <span style={{ color: L2 }}>AI Governance</span>
              </div>
              <Lbl ch="Service · Policy and Risk" lt />
              <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 18, color: '#fff', lineHeight: 1.5, marginBottom: 14 }}>
                AI governance consulting that protects what your AI builds.
              </div>
              <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.55)' }}>
                For organizations deploying AI at scale who need a defensible enterprise ai governance program and a documented ai risk management framework before regulators, auditors, or a public incident forces the conversation.
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                ['Engagement', '$15K to $180K'],
                ['Duration', '4 to 16 weeks'],
                ['Team', '1 AI ethics officer + 1 governance strategist + 1 compliance specialist'],
                ['Output', 'Board-ready governance program'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontFamily: MN, fontSize: 10, letterSpacing: "normal", textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>{k}</span>
                  <span style={{ fontFamily: MN, fontSize: 11, color: 'rgba(255,255,255,0.85)' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding: stacked ? '32px 0 44px' : '72px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Lbl ch="Enterprise AI Governance and AI Risk Management Framework" lt />
            <div style={{ fontFamily: MN, fontSize: 'clamp(36px,4.8vw,72px)', lineHeight: 1, color: '#fff', letterSpacing: "normal", marginBottom: 32 }}>
              <div style={{ fontWeight: 500 }}>GOVERN YOUR</div>
              <div style={{ fontWeight: 700, color: L }}>AI BEFORE</div>
              <div style={{ fontWeight: 300 }}>IT GOVERNS</div>
              <div style={{ fontWeight: 300 }}>YOUR REPUTATION.</div>
            </div>
            <div style={{ fontFamily: SN, fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', maxWidth: 700, marginBottom: 32 }}>
                AI moves fast. Governance usually follows a crisis. Our ai governance consulting practice helps organizations build enterprise ai governance programs and ai risk management frameworks before a bias incident, a regulatory audit, or a board inquiry forces the issue. Defensible policies. Documented controls. Board-ready output.
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <MagneticWrap strength={0.35} style={{ display: 'inline-flex' }}>
                <Link href="/contact" className="hv" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: L, color: '#000', borderRadius: 999, padding: '12px 18px', textDecoration: 'none', fontFamily: MN, fontSize: 11, fontWeight: 700, letterSpacing: "normal", textTransform: 'uppercase', transition: 'background .2s,color .2s,box-shadow .2s' }}
                  onMouseEnter={consultancyLimeCtaEnter}
                  onMouseLeave={consultancyLimeCtaLeave}
                >
                  Book a governance call <Arr sz={10} cl="currentColor" sw={2.4} />
                </Link>
              </MagneticWrap>
              <MagneticWrap strength={0.35} style={{ display: 'inline-flex' }}>
                <Link href="/case-studies" className="hv" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid rgba(255,255,255,0.28)', color: '#fff', borderRadius: 999, padding: '12px 18px', textDecoration: 'none', fontFamily: MN, fontSize: 11, fontWeight: 700, letterSpacing: "normal", textTransform: 'uppercase', transition: 'background .2s,box-shadow .2s' }}
                  onMouseEnter={consultancyGhostOnDarkEnter}
                  onMouseLeave={consultancyGhostOnDarkLeave}
                >
                  See past engagements <Arr sz={10} cl="currentColor" sw={2.4} />
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
        <ScrollSection as="section" index={1} style={{ padding: `${layout === 'mobile' ? 40 : 60}px ${gv}px`, background: DK }}>
            <ConsultancyCardGrid desktopCols={4} tabletCols={2} tone="dark">
                {METRICS.map((x, i) => (
                    <ScrollGridItem key={x.l} sectionIndex={1} cardIndex={i}>
                    <ConsultancyInteractiveSurface variant="dk" style={{ padding: layout === 'mobile' ? '24px 20px' : '32px 28px' }}>
                        <div style={{ fontFamily: MN, fontSize: 44, fontWeight: 700, color: L, lineHeight: 1, marginBottom: 10 }}>{x.v}</div>
                        <div style={{ fontFamily: MN, fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.75)', marginBottom: 4 }}>{x.l}</div>
                        <div style={{ fontFamily: SN, fontSize: 11, color: 'rgba(255,255,255,0.45)' }}>{x.s}</div>
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
        <ScrollSection as="section" index={2} style={{ padding: `${pv}px ${gv}px`, background: `linear-gradient(180deg,${BG2},${BG})`, borderRadius: '24px 24px 0 0', marginTop: -24 }}>
            <div style={{ marginBottom: 40, display: 'grid', gridTemplateColumns: layout === 'desktop' ? '320px 1fr' : '1fr', gap: 40, alignItems: 'end' }}>
                <div><Lbl ch="Four to sixteen weeks · Four phases" /><Ttl ch="THE METHOD." /></div>
                <div style={{ fontFamily: SN, fontSize: 14, color: 'rgba(0,0,0,0.55)', maxWidth: 620, lineHeight: 1.7 }}>
                    Our ai governance consulting engagements follow four sequential phases. Each phase produces a board-ready output. Each output earns the next. No surprises at week sixteen.
                </div>
            </div>
            <ConsultancyCardGrid desktopCols={4} tabletCols={2} tone="light">
                {PHASES.map((p, i) => (
                    <ScrollGridItem key={p.p} sectionIndex={2} cardIndex={i}>
                    <ConsultancyInteractiveSurface variant="gradient" style={{ padding: '28px 24px' }}>
                        <div style={{ fontFamily: MN, fontSize: 11, fontWeight: 700, letterSpacing: "normal", color: L_TEXT_ON_LIGHT, marginBottom: 10 }}>{p.p}</div>
                        <div style={{ fontFamily: MN, fontSize: 16, fontWeight: 600, marginBottom: 10 }}>{p.t}</div>
                        <div style={{ fontFamily: SN, fontSize: 12.5, lineHeight: 1.65, color: 'rgba(0,0,0,0.55)', marginBottom: 12 }}>{p.d}</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                            {p.deliv.map((d) => (
                                <div key={d} style={{ display: 'flex', gap: 8, fontFamily: MN, fontSize: 10.5, color: 'rgba(0,0,0,0.55)' }}>
                                    <div style={{ width: 4, height: 4, borderRadius: '50%', background: L_TEXT_ON_LIGHT, marginTop: 6 }} />
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

function Deliverables() {
    const layout = useLandingLayout();
    const gv = sectionGutter(layout);
    const pv = sectionVPad(layout);
    return (
        <ScrollSection as="section" index={3} style={{ padding: `${pv}px ${gv}px`, background: BG2, borderRadius: '24px 24px 0 0', marginTop: -24 }}>
            <Lbl ch="Six deliverables" /><Ttl ch="WHAT YOU TAKE HOME." />
            <ConsultancyCardGrid desktopCols={3} tabletCols={2} tone="light" style={{ marginTop: 36 }}>
                {DELIVERABLES.map((item, i) => (
                    <ScrollGridItem key={item.t} sectionIndex={3} cardIndex={i}>
                    <ConsultancyInteractiveSurface variant="gradient" style={{ padding: '28px 24px' }}>
                        <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 11, color: L_TEXT_ON_LIGHT, letterSpacing: "normal", marginBottom: 8 }}>{String(i + 1).padStart(2, '0')} -</div>
                        <div style={{ fontFamily: MN, fontSize: 15, fontWeight: 600, marginBottom: 10 }}>{item.t}</div>
                        <div style={{ fontFamily: SN, fontSize: 12.5, lineHeight: 1.65, color: 'rgba(0,0,0,0.55)' }}>{item.d}</div>
                    </ConsultancyInteractiveSurface>
                    </ScrollGridItem>
                ))}
            </ConsultancyCardGrid>
        </ScrollSection>
    );
}

function Frameworks() {
    const layout = useLandingLayout();
    const gv = sectionGutter(layout);
    const pv = sectionVPad(layout);
    return (
        <ScrollSection as="section" index={4} style={{ padding: `${pv}px ${gv}px`, background: BG, borderRadius: '24px 24px 0 0', marginTop: -24 }}>
            <Lbl ch="Regulation-ready" /><Ttl ch="FRAMEWORKS WE ALIGN TO." />
            <ConsultancyCardGrid desktopCols={1} tabletCols={1} tone="light" borderRadius={16} style={{ marginTop: 36 }}>
                {FRAMEWORKS.map((f, i) => (
                    <ScrollGridItem key={f.name} sectionIndex={4} cardIndex={i}>
                    <ConsultancyInteractiveSurface variant="light" style={{ padding: '22px 20px', display: 'grid', gridTemplateColumns: layout === 'mobile' ? '1fr' : '1fr 1fr 1fr', gap: 12 }}>
                        <div style={{fontFamily: MN, fontSize: 14, fontWeight: 700}}>{f.name}</div>
                        <div style={{fontFamily: SN, fontSize: 13, color: 'rgba(0,0,0,0.6)'}}><b>Applies to:</b> {f.applies}</div>
                        <div style={{fontFamily: SN, fontSize: 13, color: 'rgba(0,0,0,0.6)'}}><b>What we cover:</b> {f.covers}</div>
                    </ConsultancyInteractiveSurface>
                    </ScrollGridItem>
                ))}
            </ConsultancyCardGrid>
        </ScrollSection>
    )
}

function QuotesSection() {
    const layout = useLandingLayout();
    const gv = sectionGutter(layout);
    const pv = sectionVPad(layout);
    return (
        <ScrollSection as="section" index={5} style={{ padding: `${pv}px ${gv}px`, background: DK, borderRadius: '24px 24px 0 0', marginTop: -24 }}>
            <div style={{ marginBottom: 36 }}><Lbl ch="What clients say" lt /><Ttl ch="TRUSTED BY TEAMS THAT SHIP." lt /></div>
            <ConsultancyCardGrid desktopCols={3} tabletCols={1} tone="dark">
                {QUOTES.map((q, i) => (
                    <ScrollGridItem key={q.by} sectionIndex={5} cardIndex={i}>
                    <ConsultancyInteractiveSurface variant="dk" style={{ padding: '28px 24px' }}>
                        <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.65)', marginBottom: 12 }}>&ldquo;{q.q}&rdquo;</div>
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
        <ScrollSection as="section" index={6} style={{ padding: `${pv}px ${gv}px`, background: `linear-gradient(180deg,${BG2},${BG})`, borderRadius: '24px 24px 0 0', marginTop: -24 }}>
            <div style={{ marginBottom: 32 }}><Lbl ch="Got questions" /><Ttl ch="FAQs." sx={FAQ_SECTION_TITLE_SX} /></div>
            <ConsultancyFaqAccordion items={FAQ_ITEMS} tone="light" />
        </ScrollSection>
    );
}

export default function ServiceAIGovernancePageClient() {
  return (
    <ConsultancyLoadedShell label="AI GOVERNANCE">
      <Nav current="Services" />
      <Hero />
      <Metrics />
      <Method />
      <Deliverables />
      <Frameworks />
      <QuotesSection />
      <FAQSection />
      <CTAStrip
        title="YOUR AI.|GOVERNED.|DEFENSIBLE."
        sub="Tell us how many AI systems you currently operate and which regulatory frameworks apply to your industry. We will map your governance gaps, send a sample ai risk management framework section, and deliver a fixed-fee proposal within 48 hours."
        cta="Start a project"
        ctaUppercase={false}
      />
      <Footer />
    </ConsultancyLoadedShell>
  );
}
