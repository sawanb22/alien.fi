"use client";

import Link from "next/link";
import { ConsultancyLoadedShell } from "@/components/consultancy/ConsultancyLoadedShell";
import {
  Arr,
  Chip,
  ConsultancyCardGrid,
  CTAStrip,
  Footer,
  Lbl,
  MOSAIC_CARD_FACE_FILL,
  Nav,
  Ttl,
  consultancyOutlineLightPillEnter,
  consultancyOutlineLightPillLeave,
  consultancyPrimaryBlackCtaEnter,
} from "@/components/consultancy/consultancy-ui";
import {
  sectionGutter,
  sectionVPad,
  useLandingLayout,
  type LandingLayoutMode,
} from "@/lib/landing-layout-context";
import { MN, SN } from "@/lib/consultancy/tokens";
import { BG, BG2, DK, L, L2, PL } from "@/lib/consultancy/theme";
import { MagneticWrap, ScrollGridItem, ScrollSection } from "@/components/motion/scroll-primitives";

const VALUES = [
  {
    n: "01",
    t: "Outcomes over optics",
    d: "We measure ourselves by the metric we moved, not the model we shipped. Every engagement carries a number our client's CFO signs.",
  },
  {
    n: "02",
    t: "Senior, always",
    d: "No pyramid. The partner who scopes your work is on your Slack at week thirty. We staff small teams of expensive people.",
  },
  {
    n: "03",
    t: "Honest about hard",
    d: "We say no to work we can't do well, and we tell you when an AI isn't the answer. Trust compounds; hype doesn't.",
  },
];

const TIMELINE = [
  {
    y: "2018",
    t: "Founded in Austin",
    d: "Jordan and Anya leave big tech to build the consultancy they wished existed.",
  },
  {
    y: "2020",
    t: "First managed practice",
    d: "Healthcare vertical launches. NorthBay Health becomes anchor client.",
  },
  {
    y: "2022",
    t: "AlienCare ships",
    d: "Our first vertical platform reaches 5,000 clinicians.",
  },
  {
    y: "2024",
    t: "96 people, 11 cities",
    d: "Crossed $1.2B in cumulative client value. SOC 2 + HITRUST certified.",
  },
  {
    y: "2026",
    t: "Where we are now",
    d: "12 verticals, 480+ engagements, 94% client retention.",
  },
];

const HERO_STATS: [string, string][] = [
  ["Founded", "2018"],
  ["Headquarters", "Austin, TX"],
  ["People", "96"],
  ["Verticals", "12"],
  ["Client value", "$1.2B"],
];

/** Card magnetic pull — same component as CTAs; lower strength suits larger tiles. */
const CARD_MAGNETIC_STRENGTH = 0.2;

function mosaicLastOddSpanFull(
  index: number,
  total: number,
  layout: LandingLayoutMode,
  desktopCols: number,
  tabletCols: number,
): boolean {
  const cols =
    layout === "desktop" ? desktopCols : layout === "tablet" ? tabletCols : 1;
  if (cols <= 1) return false;
  const remainder = total % cols;
  if (remainder === 0) return false;
  return index === total - 1;
}

function AboutHero() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const stacked = layout !== "desktop";

  return (
    <ScrollSection
      as="section"
      index={0}
      style={{
        paddingTop: 60,
        background: DK,
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: -160,
          top: 60,
          width: 540,
          height: 540,
          borderRadius: "50%",
          background: `radial-gradient(circle,${L}22,transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      <div style={{ paddingLeft: gv, paddingRight: gv }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: stacked ? "1fr" : "320px 1fr",
            minHeight: stacked ? undefined : 460,
          }}
        >
          <div
            style={{
              padding: stacked ? "36px 0 28px" : "60px 36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 24,
              borderRight: stacked ? "none" : "1px solid rgba(255,255,255,0.06)",
              borderBottom: stacked ? "1px solid rgba(255,255,255,0.06)" : "none",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: MN,
                  fontSize: 9,
                  fontWeight: 600,
                  letterSpacing: "normal",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: 32,
                }}
              >
                <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
                  Home
                </Link>
                <span style={{ opacity: 0.4 }}>/</span>
                <span style={{ color: L2 }}>About</span>
              </div>
              <Lbl ch="Who we are" lt />
              <div
                style={{
                  fontFamily: MN,
                  fontWeight: 600,
                  fontSize: 18,
                  color: "#fff",
                  lineHeight: 1.5,
                  marginBottom: 14,
                }}
              >
                An AI consultancy that ships.
              </div>
              <div
                style={{
                  fontFamily: SN,
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Founded in 2018. Built on the belief that AI consulting should leave clients more
                capable, not more dependent.
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {HERO_STATS.map(([k, v]) => (
                <div
                  key={k}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "8px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: MN,
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "normal",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.35)",
                    }}
                  >
                    {k}
                  </span>
                  <span
                    style={{
                      fontFamily: MN,
                      fontSize: 11,
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              padding: stacked ? "32px 0 44px" : "72px 60px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Chip ch="About alien.fi" bg={L} cl="#000" sx={{ marginBottom: 24 }} />
            <div
              style={{
                fontFamily: MN,
                fontWeight: 300,
                fontSize: "clamp(40px,5vw,76px)",
                lineHeight: 0.98,
                color: "#fff",
                letterSpacing: "normal",
                marginBottom: 32,
              }}
            >
              <div style={{ fontWeight: 300 }}>WE LEAVE</div>
              <div style={{ fontWeight: 500 }}>CLIENTS MORE</div>
              <div
                style={{
                  fontWeight: 700,
                  background: `linear-gradient(90deg,#fff 40%,${L} 60%,#fff 80%)`,
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "consultancy-shimmer 4s linear infinite",
                }}
              >
                CAPABLE.
              </div>
            </div>
            <div
              style={{
                fontFamily: SN,
                fontSize: 16,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.55)",
                maxWidth: 620,
              }}
            >
              The best consultancies make themselves unnecessary. We strategize, build, and operate
              AI — then hand you the keys, the documentation, and the team that can run it.
            </div>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
}

function Mission() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  const stacked = layout !== "desktop";

  return (
    <ScrollSection
      as="section"
      index={1}
      style={{
        padding: `${pv}px ${gv}px`,
        background: `linear-gradient(180deg,${BG2},${BG})`,
        position: "relative",
        zIndex: 2,
      }}
    >
      <div
        style={{
          padding: "0 9px",
          display: "grid",
          gridTemplateColumns: stacked ? "1fr" : "320px 1fr",
          gap: stacked ? 32 : 60,
          alignItems: "flex-start",
        }}
      >
        <div>
          <Lbl ch="Why we exist" />
          <Ttl ch="THE MISSION." />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <p
            style={{
              fontFamily: SN,
              fontSize: 19,
              lineHeight: 1.7,
              color: "rgba(0,0,0,0.75)",
              fontWeight: 400,
            }}
          >
            Most AI consulting creates dependency. A vendor ships a black box, bills a retainer, and
            keeps the knowledge. We think that&apos;s backwards.
          </p>
          <p
            style={{
              fontFamily: SN,
              fontSize: 15,
              lineHeight: 1.8,
              color: "rgba(0,0,0,0.55)",
            }}
          >
            alien.fi exists to bring measurable, defensible AI into complex organizations — and to
            leave behind teams that can maintain and extend it. We staff small, senior teams. We
            tie our fees to outcomes. We document everything. And when a client is ready to run AI
            themselves, we celebrate the handoff instead of fighting it.
          </p>
          <p
            style={{
              fontFamily: SN,
              fontSize: 15,
              lineHeight: 1.8,
              color: "rgba(0,0,0,0.55)",
            }}
          >
            Eight years in, that approach has produced $1.2B in audited client value and a 94%
            retention rate — because the clients who could leave choose to stay.
          </p>
        </div>
      </div>
    </ScrollSection>
  );
}

function Values() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  const desktopCols = 3;
  const tabletCols = 1;

  return (
    <ScrollSection
      as="section"
      index={2}
      style={{
        padding: `${pv}px ${gv}px`,
        background: DK,
        position: "relative",
        zIndex: 3,
        borderRadius: "24px 24px 0 0",
        marginTop: -24,
      }}
    >
      <div style={{ padding: "0 9px", marginBottom: 48 }}>
        <Lbl ch="What we believe" lt />
        <Ttl ch="THREE VALUES." lt />
      </div>
      <div style={{ padding: "0 9px" }}>
        <ConsultancyCardGrid desktopCols={desktopCols} tabletCols={tabletCols} tone="dark">
          {VALUES.map((v, i) => (
            <ScrollGridItem
              key={v.n}
              sectionIndex={2}
              cardIndex={i}
              gridSpanFull={mosaicLastOddSpanFull(
                i,
                VALUES.length,
                layout,
                desktopCols,
                tabletCols,
              )}
            >
              <MagneticWrap
                strength={CARD_MAGNETIC_STRENGTH}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    ...MOSAIC_CARD_FACE_FILL,
                    background: DK,
                    padding: "40px 32px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: MN,
                      fontWeight: 700,
                      fontSize: 40,
                      color: L,
                      letterSpacing: "normal",
                      lineHeight: 1,
                      marginBottom: 24,
                    }}
                  >
                    {v.n}
                  </div>
                  <div
                    style={{
                      fontFamily: MN,
                      fontWeight: 600,
                      fontSize: 20,
                      color: "#fff",
                      letterSpacing: "normal",
                      lineHeight: 1.3,
                      marginBottom: 16,
                    }}
                  >
                    {v.t}
                  </div>
                  <div
                    style={{
                      fontFamily: SN,
                      fontSize: 13.5,
                      lineHeight: 1.75,
                      color: "rgba(255,255,255,0.55)",
                    }}
                  >
                    {v.d}
                  </div>
                </div>
              </MagneticWrap>
            </ScrollGridItem>
          ))}
        </ConsultancyCardGrid>
      </div>
    </ScrollSection>
  );
}

function Story() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  const desktopCols = 5;
  const tabletCols = 2;

  return (
    <ScrollSection
      as="section"
      index={3}
      style={{
        padding: `${pv}px ${gv}px`,
        background: `linear-gradient(180deg,${BG},${BG2})`,
        position: "relative",
        zIndex: 4,
        borderRadius: "24px 24px 0 0",
        marginTop: -24,
      }}
    >
      <div style={{ padding: "0 9px", marginBottom: 48 }}>
        <Lbl ch="Eight years" />
        <Ttl ch="THE STORY." />
      </div>
      <div style={{ padding: "0 9px" }}>
        <ConsultancyCardGrid desktopCols={desktopCols} tabletCols={tabletCols} tone="light">
          {TIMELINE.map((t, i) => (
            <ScrollGridItem
              key={t.y}
              sectionIndex={3}
              cardIndex={i}
              gridSpanFull={mosaicLastOddSpanFull(
                i,
                TIMELINE.length,
                layout,
                desktopCols,
                tabletCols,
              )}
            >
              <MagneticWrap
                strength={CARD_MAGNETIC_STRENGTH}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    ...MOSAIC_CARD_FACE_FILL,
                    background: `linear-gradient(160deg,${BG},${BG2})`,
                    padding: "30px 24px",
                    gap: 14,
                  }}
                >
                  <div
                    style={{
                      fontFamily: MN,
                      fontWeight: 700,
                      fontSize: 24,
                      color: "#000",
                      letterSpacing: "normal",
                    }}
                  >
                    {t.y}
                  </div>
                  <div style={{ width: 32, height: 2, background: L2 }} />
                  <div
                    style={{
                      fontFamily: MN,
                      fontWeight: 600,
                      fontSize: 13,
                      color: "#000",
                      letterSpacing: "normal",
                      lineHeight: 1.35,
                    }}
                  >
                    {t.t}
                  </div>
                  <div
                    style={{
                      fontFamily: SN,
                      fontSize: 12,
                      lineHeight: 1.6,
                      color: "rgba(0,0,0,0.5)",
                    }}
                  >
                    {t.d}
                  </div>
                </div>
              </MagneticWrap>
            </ScrollGridItem>
          ))}
        </ConsultancyCardGrid>
        <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
          <MagneticWrap strength={0.35} style={{ display: "inline-flex" }}>
            <Link
              href="/about/team"
              className="hv"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#000",
                color: L,
                border: "none",
                borderRadius: 24,
                padding: "14px 22px",
                fontFamily: MN,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "normal",
                textTransform: "uppercase",
                cursor: "none",
                textDecoration: "none",
                transition: "background .2s,color .2s,box-shadow .2s,transform .15s",
              }}
              onMouseEnter={consultancyPrimaryBlackCtaEnter}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#000";
                e.currentTarget.style.color = L;
                e.currentTarget.style.boxShadow = "none";
                window.magnetReset?.(e.currentTarget);
              }}
            >
              Meet the team <Arr sz={10} cl={L} sw={2.4} />
            </Link>
          </MagneticWrap>
          <MagneticWrap strength={0.35} style={{ display: "inline-flex" }}>
            <Link
              href="/about/partners"
              className="hv"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "transparent",
                color: "#000",
                border: `1.5px solid ${PL}`,
                borderRadius: 24,
                padding: "14px 22px",
                fontFamily: MN,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "normal",
                textTransform: "uppercase",
                cursor: "none",
                textDecoration: "none",
                transition:
                  "background .2s,color .2s,border-color .2s,box-shadow .2s,transform .15s",
              }}
              onMouseEnter={consultancyOutlineLightPillEnter}
              onMouseLeave={consultancyOutlineLightPillLeave}
            >
              Our partners →
            </Link>
          </MagneticWrap>
        </div>
      </div>
    </ScrollSection>
  );
}

export default function AboutPageClient() {
  return (
    <ConsultancyLoadedShell label="ABOUT">
      <Nav current="About" />
      <AboutHero />
      <Mission />
      <Values />
      <Story />
      <CTAStrip
        title="LET'S BUILD SOMETHING THAT LASTS."
        sub="Tell us what you're trying to do. We'll tell you honestly whether — and how — AI helps."
      />
      <Footer />
    </ConsultancyLoadedShell>
  );
}
