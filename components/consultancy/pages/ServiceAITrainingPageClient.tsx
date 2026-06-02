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
  { v: '3 levels', l: 'Training tracks available', s: 'Executive, operational, technical' },
  { v: '1 day', l: 'Fastest engagement', s: 'Executive ai workshop format' },
  { v: '12 weeks', l: 'Longest track', s: 'Full ai upskilling program' },
  { v: '94%', l: 'Participant satisfaction rate', s: 'Across delivered ai training programs' },
];

const PHASES = [
  {
    p: 'Phase 01 · PRE-ENGAGEMENT',
    t: 'Needs Assessment and Curriculum Design',
    d: 'Before any session begins we conduct a skills gap assessment across your target cohort, map AI literacy levels by role, and design a custom curriculum that addresses your specific business context, industry, and existing AI maturity. No generic slide decks. Every ai training program is built for your team.',
    deliv: [
      'Skills gap assessment by role',
      'AI literacy baseline scoring',
      'Custom curriculum design',
      'Industry and use case alignment',
    ],
  },
  {
    p: 'Phase 02 · DELIVERY',
    t: 'Live Training Sessions',
    d: 'Hands-on, interactive ai training delivered live, in-person or virtually, with real exercises, real tools, and real use cases from your industry. Sessions range from a half-day enterprise executive ai workshop for C-suite leaders to multi-week ai workforce training cohorts for operational and technical teams.',
    deliv: [
      'Live facilitated sessions',
      'Hands-on tool exercises',
      'Industry-specific use cases',
      'Q and A and applied learning',
    ],
  },
  {
    p: 'Phase 03 · APPLICATION',
    t: 'Applied Projects and Practice',
    d: 'Every ai upskilling program includes applied project work where participants build or configure real AI tools relevant to their role. Technical cohorts build and test AI workflows. Executive cohorts evaluate vendor proposals, score AI use cases, and stress-test AI business cases against financial models.',
    deliv: [
      'Role-specific applied projects',
      'Real tool configuration exercises',
      'Use case scoring and evaluation',
      'AI business case stress testing',
    ],
  },
  {
    p: 'Phase 04 · EMBED',
    t: 'Documentation and Capability Handover',
    d: 'At the close of every ai training engagement we deliver a full documentation package including training playbooks, AI evaluation frameworks, prompt libraries, governance guidelines, and a recommended 90-day practice plan so the capability your team built during training does not fade after the final session.',
    deliv: [
      'Training playbooks and guides',
      'AI evaluation frameworks',
      'Prompt libraries by role',
      '90-day practice plan',
    ],
  },
];

const DELIVERABLES = [
    {
        t: 'Custom Training Curriculum',
        d: 'A fully documented training curriculum built specifically for your organization covering the AI concepts, tools, and use cases most relevant to your business. Reusable for future onboarding of new team members and adaptable as AI technology evolves.',
    },
    {
        t: 'Role-Specific Playbooks',
        d: 'Written playbooks tailored to each participant role covering how to evaluate AI tools, how to write effective prompts, how to assess AI vendor proposals, and how to identify high-value AI use cases in their specific function. Every ai workforce training engagement ships with playbooks your team can apply from the first working day after training.',
    },
    {
        t: 'AI Evaluation Framework',
        d: 'A structured scoring framework your leadership team can use to evaluate any AI tool, vendor, or use case proposal going forward. Covers ROI modeling, build-vs-buy analysis, risk assessment, data requirements, and governance considerations. Essential output of every enterprise executive ai workshop.',
    },
    {
        t: 'Prompt Library by Role',
        d: 'A curated, tested library of prompts and AI interaction patterns organized by business function. Covers use cases for legal, finance, operations, HR, sales, marketing, and technical roles. Delivered as a living document your team updates and extends as they build confidence with AI tools.',
    },
    {
        t: 'AI Governance Guidelines',
        d: 'A practical governance document covering responsible AI use policies, data handling guidelines, acceptable use boundaries, and human oversight requirements for your organization. Built specifically for your industry and regulatory context during every ai upskilling program engagement.',
    },
    {
        t: '90-Day Practice Plan',
        d: 'A structured 90-day plan with weekly milestones that keeps your team practicing and applying what they learned after the training program ends. Includes recommended exercises, tool challenges, and a peer review cadence so AI capability compounds rather than fades.',
    },
];

const TRACKS = [
    {
        eyebrow: 'Track 01 · EXECUTIVE',
        title: 'Enterprise Executive AI Workshop',
        desc: 'A focused half-day or full-day enterprise executive ai workshop designed for C-suite leaders, board members, and senior directors. Covers AI strategy fundamentals, how to evaluate AI investments, how to govern AI adoption responsibly, and how to lead AI transformation without becoming dependent on vendor narratives.',
        meta: [
            ['Format', 'Half-day or full-day, in-person or virtual'],
            ['Cohort size', '6 to 20 participants'],
            ['Budget', '$8K to $25K'],
            ['Best for', 'CEOs, CTOs, CFOs, CDOs, board members, senior VPs'],
        ]
    },
    {
        eyebrow: 'Track 02 · OPERATIONAL',
        title: 'AI Workforce Training for Business Teams',
        desc: 'A 2 to 6 week ai workforce training program for operational, sales, marketing, HR, legal, and finance teams. Covers practical AI tool use, prompt engineering for business tasks, AI-assisted workflow design, and how to identify and evaluate AI opportunities within a specific business function.',
        meta: [
            ['Format', 'Weekly live sessions plus applied project work'],
            ['Cohort size', '10 to 50 participants'],
            ['Budget', '$20K to $60K'],
            ['Best for', 'Department heads, team leads, and individual contributors across business functions'],
        ]
    },
    {
        eyebrow: 'Track 03 · TECHNICAL',
        title: 'AI Upskilling Program for Technical Teams',
        desc: 'A 6 to 12 week ai upskilling program for developers, data analysts, IT managers, and product teams. Covers LLM integration, prompt engineering, RAG system basics, AI evaluation frameworks, MLOps fundamentals, and responsible AI practices. Participants complete real builds during the program.',
        meta: [
            ['Format', 'Weekly hands-on sessions plus build projects'],
            ['Cohort size', '5 to 20 participants'],
            ['Budget', '$35K to $120K'],
            ['Best for', 'Engineers, data scientists, product managers, and IT teams building or managing AI systems'],
        ]
    },
];

const QUOTES = [
  {
    q: "We ran alien.fi's enterprise executive ai workshop with our full leadership team before starting our AI transformation program. It changed every conversation we had with vendors afterward. Our executives stopped accepting vague AI promises and started asking the right questions.",
    by: 'Chief Executive Officer, Regional Healthcare System',
  },
  {
    q: 'The ai workforce training program alien.fi delivered to our operations and finance teams was the single best investment we made in our AI rollout. Our teams adopted the tools we deployed three times faster than teams that did not go through the training.',
    by: 'Chief Digital Officer, Mid-Market Insurance Company',
  },
  {
    q: 'We put 18 engineers through alien.fi\'s ai upskilling program over 10 weeks. By week six they were building production RAG prototypes independently. The program paid for itself in the first month of reduced vendor dependency.',
    by: 'VP of Engineering, B2B Technology Company',
  },
];

const FAQS = [
  {
    q: 'What does ai training from alien.fi include?',
    a: 'Every ai training engagement includes a pre-training skills gap assessment, a custom-designed curriculum built for your industry and team, live facilitated sessions with hands-on exercises, role-specific playbooks, an AI evaluation framework, a prompt library, AI governance guidelines, and a 90-day practice plan. The specific format and depth depend on whether you choose the executive, operational, or technical ai workforce training track.',
  },
  {
    q: 'What is included in the enterprise executive ai workshop?',
    a: 'The enterprise executive ai workshop covers AI strategy fundamentals, how to evaluate AI investments using a structured ROI and risk framework, how to govern AI adoption responsibly, and how to assess vendor proposals critically. Participants leave with a scored AI evaluation framework, governance guidelines, and a documented approach to leading AI transformation decisions without being dependent on vendor narratives.',
  },
  {
    q: 'How long does an ai upskilling program take?',
    a: 'The technical ai upskilling program runs 6 to 12 weeks with weekly live sessions and applied build projects. The operational ai workforce training track runs 2 to 6 weeks. The enterprise executive ai workshop is delivered in a half-day or full-day format. All tracks can be compressed or extended based on cohort availability and depth requirements.',
  },
    {
        q: 'Can ai workforce training be delivered in-person?',
        a: 'Yes. All three ai training tracks are available in-person, virtually, or in a hybrid format. In-person delivery is available at your location or at alien.fi\'s New Jersey (NJ) facility. Virtual delivery uses the same live facilitated format with hands-on exercises adapted for remote participation.',
    },
    {
        q: 'How many people can join an ai upskilling program cohort?',
        a: 'The enterprise executive ai workshop accommodates 6 to 20 participants. The ai workforce training operational track supports cohorts of 10 to 50 participants. The technical ai upskilling program runs best with 5 to 20 participants to preserve hands-on project quality. Organizations with larger teams can run multiple cohorts at a discounted rate.',
    },
    {
        q: 'What is the budget range for ai training at alien.fi?',
        a: 'The enterprise executive ai workshop starts at $8,000 for a half-day session. The ai workforce training operational track ranges from $20,000 to $60,000 depending on cohort size and duration. The technical ai upskilling program ranges from $35,000 to $120,000 for a full 12-week engagement. All programs are fixed-fee with a defined curriculum and deliverables agreed before the first session.',
    },
];

const FAQ_ITEMS: ReadonlyArray<readonly [string, string]> = FAQS.map((f) => [f.q, f.a]);

// Using a structure similar to ServiceCustomAIDevelopmentPageClient for consistency
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
                <span style={{ color: L2 }}>AI Training</span>
              </div>
              <Lbl ch="Service · Enablement" lt />
              <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 18, color: '#fff', lineHeight: 1.5, marginBottom: 14 }}>
                AI training that builds real capability inside your organization.
              </div>
              <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.55)' }}>
                For leadership teams and technical staff who need more than a vendor pitch deck. Hands-on ai workforce training and executive ai workshop programs that leave your team able to lead, evaluate, and operate AI independently.
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                ['Engagement', '$8K to $120K'],
                ['Duration', '1 day to 12 weeks'],
                ['Team', '1 lead AI trainer + 1 domain specialist'],
                ['Output', 'Trained team and documented playbooks'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontFamily: MN, fontSize: 10, letterSpacing: "normal", textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>{k}</span>
                  <span style={{ fontFamily: MN, fontSize: 11, color: 'rgba(255,255,255,0.85)' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding: stacked ? '32px 0 44px' : '72px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Lbl ch="AI Workforce Training and Executive AI Workshop Programs" lt />
            <div style={{ fontFamily: MN, fontSize: 'clamp(36px,4.8vw,72px)', lineHeight: 1, color: '#fff', letterSpacing: "normal", marginBottom: 32 }}>
              <div style={{ fontWeight: 500 }}>YOUR TEAM.</div>
              <div style={{ fontWeight: 700, color: L }}>AI READY.</div>
              <div style={{ fontWeight: 300 }}>NOT AI</div>
              <div style={{ fontWeight: 300 }}>DEPENDENT.</div>
            </div>
            <div style={{ fontFamily: SN, fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', maxWidth: 700, marginBottom: 32 }}>
                Most organizations buy AI tools before their teams understand how to use them. Our ai training programs change that. From a one-day enterprise executive ai workshop for your leadership team to a full 12-week ai upskilling program for your technical staff, we build the internal capability your organization needs to lead AI adoption from the inside.
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <MagneticWrap strength={0.35} style={{ display: 'inline-flex' }}>
                <Link href="/contact" className="hv" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: L, color: '#000', borderRadius: 999, padding: '12px 18px', textDecoration: 'none', fontFamily: MN, fontSize: 11, fontWeight: 700, letterSpacing: "normal", textTransform: 'uppercase', transition: 'background .2s,color .2s,box-shadow .2s' }}
                  onMouseEnter={consultancyLimeCtaEnter}
                  onMouseLeave={consultancyLimeCtaLeave}
                >
                  Book a training call <Arr sz={10} cl="currentColor" sw={2.4} />
                </Link>
              </MagneticWrap>
              <MagneticWrap strength={0.35} style={{ display: 'inline-flex' }}>
                <Link href="#training-tracks" className="hv" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid rgba(255,255,255,0.28)', color: '#fff', borderRadius: 999, padding: '12px 18px', textDecoration: 'none', fontFamily: MN, fontSize: 11, fontWeight: 700, letterSpacing: "normal", textTransform: 'uppercase', transition: 'background .2s,box-shadow .2s' }}
                  onMouseEnter={consultancyGhostOnDarkEnter}
                  onMouseLeave={consultancyGhostOnDarkLeave}
                >
                  See training programs <Arr sz={10} cl="currentColor" sw={2.4} />
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
        <div><Lbl ch="Structured enablement · Four phases" /><Ttl ch="THE METHOD." /></div>
        <div style={{ fontFamily: SN, fontSize: 14, color: 'rgba(0,0,0,0.55)', maxWidth: 620, lineHeight: 1.7 }}>
          Our ai training programs follow four phases whether you are booking a single executive ai workshop or a multi-cohort ai workforce training rollout. Each phase produces a tangible output your team keeps after delivery.
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

function TrainingTracks() {
    const layout = useLandingLayout();
    const gv = sectionGutter(layout);
    const pv = sectionVPad(layout);
    return (
        <ScrollSection as="section" index={4} id="training-tracks" style={{ padding: `${pv}px ${gv}px`, background: `linear-gradient(180deg,${BG},${BG2})`, borderRadius: '24px 24px 0 0', marginTop: -24 }}>
            <Lbl ch="Three tracks, one outcome" /><Ttl ch="PICK YOUR TRACK." />
            <ConsultancyCardGrid desktopCols={3} tabletCols={1} tone="light" style={{ marginTop: 36 }}>
                {TRACKS.map((track, i) => (
                    <ScrollGridItem key={track.title} sectionIndex={4} cardIndex={i}>
                    <ConsultancyInteractiveSurface variant="gradient" style={{ padding: '28px 24px' }}>
                        <Lbl ch={track.eyebrow} />
                        <div style={{ fontFamily: MN, fontSize: 18, fontWeight: 600, marginBottom: 10 }}>{track.title}</div>
                        <div style={{ fontFamily: SN, fontSize: 12.5, lineHeight: 1.65, color: 'rgba(0,0,0,0.55)', marginBottom: 20 }}>{track.desc}</div>
                        {track.meta.map(([k,v]) => (
                            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderTop: `1px solid ${PL}`, fontFamily: MN, fontSize: 11}}>
                                <span style={{color: 'rgba(0,0,0,0.5)'}}>{k}</span>
                                <span style={{fontWeight: 600, textAlign: 'right'}}>{v}</span>
                            </div>
                        ))}
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

export default function ServiceAITrainingPageClient() {
  return (
    <ConsultancyLoadedShell label="AI TRAINING">
      <Nav current="Services" />
      <Hero />
      <Metrics />
      <Method />
      <Deliverables />
      <TrainingTracks />
      <QuotesSection />
      <FAQSection />
      <CTAStrip
        title="ONE WORKSHOP.|A TEAM THAT|LEADS AI."
        sub="Tell us your team size, current AI literacy level, and what decisions you need them to make confidently. We will match you to the right ai training track, send a sample curriculum, and deliver a fixed-fee proposal within 48 hours."
        cta="Start a project"
        ctaUppercase={false}
      />
      <Footer />
    </ConsultancyLoadedShell>
  );
}
