"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEventHandler,
  type ReactNode,
} from "react";
import {
  sectionGutter,
  sectionVPad,
  useLandingLayout,
} from "@/lib/landing-layout-context";
import { MN, OT, SN } from "@/lib/consultancy/tokens";

const L = "rgb(150,238,82)";
const L2 = "rgb(177,238,82)";
const BG = "rgb(243,243,255)";
const BG2 = "rgb(224,226,241)";
const PL = "rgb(199,200,211)";
const DK = "rgb(21,24,43)";

export type NavPage =
  | "Services"
  | "Industries"
  | "Solutions"
  | "Case Studies"
  | "Contact";

export function Arr({ sz = 10, cl = "#fff", sw = 1.8 }) {
  return (
    <svg width={sz} height={sz} viewBox="0 0 10 10" fill="none">
      <path
        d="M2 8L8 2M8 2H4M8 2V6"
        stroke={cl}
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Chip({
  ch,
  bg = L2,
  cl = "#000",
  sx = {},
}: {
  ch: ReactNode;
  bg?: string;
  cl?: string;
  sx?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        background: bg,
        color: cl,
        fontFamily: MN,
        fontWeight: 700,
        fontSize: 9,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        padding: "4px 10px",
        borderRadius: 20,
        alignSelf: "flex-start",
        ...sx,
      }}
    >
      {ch}
    </div>
  );
}

export function Lbl({
  ch,
  lt = false,
  sx = {},
}: {
  ch: ReactNode;
  lt?: boolean;
  sx?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        fontFamily: MN,
        fontWeight: 600,
        fontSize: 10,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: lt ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)",
        marginBottom: 12,
        ...sx,
      }}
    >
      {ch}
    </div>
  );
}

export function Ttl({
  ch,
  lt = false,
  sx = {},
}: {
  ch: ReactNode;
  lt?: boolean;
  sx?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        fontFamily: MN,
        fontWeight: 300,
        fontSize: "clamp(38px,4vw,64px)",
        letterSpacing: "0.06em",
        lineHeight: 1.05,
        color: lt ? "#fff" : "#000",
        ...sx,
      }}
    >
      {ch}
    </div>
  );
}

export function Tilt({
  ch,
  sx = {},
  int = 10,
}: {
  ch: ReactNode;
  sx?: React.CSSProperties;
  int?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mv = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(700px) rotateY(${x * int * 2}deg) rotateX(${-y * int * 1.5}deg) scale(1.025)`;
      el.style.boxShadow = `${-x * 10}px ${-y * 10}px 32px rgba(0,0,0,0.1)`;
    },
    [int],
  );
  const lv = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(700px) rotateY(0) rotateX(0) scale(1)";
    el.style.boxShadow = "none";
  }, []);
  return (
    <div
      ref={ref}
      onMouseMove={mv}
      onMouseLeave={lv}
      style={{
        transition:
          "transform .22s cubic-bezier(.16,1,.3,1),box-shadow .22s",
        ...sx,
      }}
    >
      {ch}
    </div>
  );
}

export function MiniLoader({
  onDone,
  label = "LOADING",
}: {
  onDone: () => void;
  label?: string;
}) {
  const [ph, setPh] = useState(0);
  const [bw, setBw] = useState(0);
  useEffect(() => {
    let w = 0;
    const t = setInterval(() => {
      w += 5;
      setBw(Math.min(w, 100));
      if (w >= 100) {
        clearInterval(t);
        setTimeout(() => setPh(1), 120);
      }
    }, 14);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    if (ph === 1) setTimeout(onDone, 500);
  }, [ph, onDone]);
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        background: DK,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
        transition:
          ph === 1 ? "transform .6s cubic-bezier(.76,0,.24,1),opacity .45s" : "none",
        transform: ph === 1 ? "translateY(-100%)" : "translateY(0)",
        opacity: ph === 1 ? 0 : 1,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: `${i * 11}%`,
              height: 1,
              background: "rgba(255,255,255,0.025)",
            }}
          />
        ))}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: 3,
            background: `linear-gradient(transparent,${L},transparent)`,
            opacity: 0.18,
            animation: "consultancy-scan 1.5s linear infinite",
          }}
        />
      </div>
      <img
        src="/assets/logo-icon.svg"
        alt=""
        style={{
          height: 56,
          objectFit: "contain",
          filter: "invert(1)",
          animation: "consultancy-glow 2s ease-in-out infinite",
        }}
      />
      <div
        style={{
          fontFamily: MN,
          fontWeight: 700,
          fontSize: 13,
          letterSpacing: "0.32em",
          color: "#fff",
        }}
      >
        {label}
        <span
          style={{
            animation: "consultancy-blink .75s step-end infinite",
            color: L,
          }}
        >
          _
        </span>
      </div>
      <div
        style={{
          width: 200,
          height: 2,
          background: "rgba(255,255,255,0.08)",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            background: L,
            borderRadius: 2,
            width: `${bw}%`,
            transition: "width .04s linear",
            boxShadow: `0 0 14px ${L}`,
          }}
        />
      </div>
    </div>
  );
}

const navLinks: { l: NavPage; href: string }[] = [
  { l: "Services", href: "/services" },
  { l: "Industries", href: "/industries" },
  { l: "Solutions", href: "/solutions" },
  { l: "Case Studies", href: "/case-studies" },
  { l: "Contact", href: "/contact" },
];

export function Nav({ current = "Services" }: { current?: NavPage }) {
  const layout = useLandingLayout();
  const [sc, setSc] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const f = () => setSc(window.scrollY > 20);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  useEffect(() => {
    if (!menu) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menu]);

  const g = layout === "desktop" ? OT + 9 : sectionGutter(layout) + 10;

  const navInner = navLinks.map(({ l, href }) => {
    const active = current === l;
    return (
      <Link
        key={l}
        href={href}
        className="hv"
        style={{
          fontFamily: MN,
          fontWeight: active ? 700 : 500,
          fontSize: 12,
          letterSpacing: "0.06em",
          color: active ? "#000" : "rgba(0,0,0,0.6)",
          textDecoration: "none",
          transition: "color .2s",
          position: "relative",
          paddingBottom: 4,
          borderBottom: active ? "1.5px solid #000" : "1.5px solid transparent",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#000";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = active ? "#000" : "rgba(0,0,0,0.6)";
        }}
      >
        {l}
      </Link>
    );
  });

  if (layout === "desktop") {
    return (
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 300,
          background: L,
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: `0 ${OT + 9}px`,
          gap: 24,
          boxShadow: sc ? "0 2px 28px rgba(0,0,0,0.14)" : "none",
          transition: "box-shadow .3s",
        }}
      >
        <Link
          href="/"
          className="hv"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            flexShrink: 0,
            marginRight: 16,
          }}
        >
          <img src="/assets/logo-with-font.svg" alt="Alien.fi" style={{ height: 20 }} />
        </Link>
        <div style={{ display: "flex", gap: 22, alignItems: "center", flexShrink: 0 }}>{navInner}</div>
        <Link
          href="/contact"
          className="hv"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "#000",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontFamily: MN,
            fontWeight: 600,
            fontSize: 11,
            letterSpacing: "0.08em",
            padding: "10px 18px",
            cursor: "none",
            transition: "background .2s,transform .15s",
            textDecoration: "none",
          }}
          onMouseMove={(e) => window.magnet?.(e.currentTarget, e)}
          onMouseLeave={(e) => window.magnetReset?.(e.currentTarget)}
        >
          Start a project <Arr sz={9} cl={L} sw={2.2} />
        </Link>
      </nav>
    );
  }

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 300,
          background: L,
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: `0 ${g}px`,
          gap: 16,
          boxShadow: sc ? "0 2px 28px rgba(0,0,0,0.14)" : "none",
          transition: "box-shadow .3s",
        }}
      >
        <Link href="/" className="hv" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img src="/assets/logo-with-font.svg" alt="Alien.fi" style={{ height: 20 }} />
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            type="button"
            className="hv consultancy-nav-menu-btn"
            aria-expanded={menu}
            aria-controls="consultancy-nav-sheet"
            aria-label={menu ? "Close menu" : "Open menu"}
            onClick={() => setMenu((m) => !m)}
            style={{
              width: 42,
              height: 40,
              borderRadius: 10,
              border: "1.5px solid rgba(0,0,0,0.35)",
              background: menu ? "#000" : "rgba(255,255,255,0.35)",
              color: menu ? "#fff" : "#000",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              padding: 0,
            }}
          >
            <span style={{ display: "block", width: 18, height: 2, background: "currentColor", borderRadius: 2 }} />
            <span style={{ display: "block", width: 18, height: 2, background: "currentColor", borderRadius: 2 }} />
          </button>
          <Link
            href="/contact"
            className="hv consultancy-nav-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#000",
              color: "#fff",
              borderRadius: 8,
              fontFamily: MN,
              fontWeight: 600,
              fontSize: layout === "mobile" ? 10 : 11,
              letterSpacing: "0.06em",
              padding: layout === "mobile" ? "9px 12px" : "10px 16px",
              textDecoration: "none",
            }}
          >
            Start <Arr sz={9} cl={L} sw={2.2} />
          </Link>
        </div>
      </nav>
      {menu ? (
        <>
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 280,
              background: "rgba(21,24,43,0.35)",
              backdropFilter: "blur(6px)",
            }}
            aria-hidden
            onClick={() => setMenu(false)}
          />
          <div
            id="consultancy-nav-sheet"
            role="dialog"
            aria-modal
            style={{
              position: "fixed",
              top: 58,
              left: sectionGutter(layout),
              right: sectionGutter(layout),
              maxHeight: "min(520px,calc(100vh - 80px))",
              zIndex: 310,
              overflow: "hidden",
              borderRadius: 16,
              border: `1px solid ${PL}`,
              boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
              background: BG,
            }}
          >
            <div style={{ overflowY: "auto", padding: "22px 20px 26px" }}>
              {navLinks.map(({ l, href }) => {
                const active = current === l;
                return (
                  <Link
                    key={l}
                    href={href}
                    onClick={() => setMenu(false)}
                    style={{
                      display: "block",
                      padding: "14px 4px",
                      fontFamily: MN,
                      fontWeight: active ? 700 : 600,
                      fontSize: 12,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#000",
                      textDecoration: "none",
                      borderBottom: `1px solid ${PL}`,
                    }}
                  >
                    {l}
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export function Ticker({ words }: { words?: string[] }) {
  const layout = useLandingLayout();
  const gx = sectionGutter(layout);
  const w = words ?? [
    "AI Strategy",
    "Custom ML Models",
    "NLP & LLMs",
    "Computer Vision",
    "MLOps",
    "Managed AI",
    "RAG Systems",
    "Fraud Detection",
    "Predictive Analytics",
    "Knowledge Bases",
    "Responsible AI",
    "End-to-End Delivery",
  ];
  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: `1px solid ${PL}`,
        borderBottom: `1px solid ${PL}`,
        background: BG,
        padding: `13px ${gx}px`,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 64,
          animation: "consultancy-ticker 32s linear infinite",
          whiteSpace: "nowrap",
        }}
      >
        {[...w, ...w].map((x, i) => (
          <span
            key={i}
            style={{
              fontFamily: MN,
              fontWeight: 500,
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              opacity: 0.28,
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: L2,
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            {x}
          </span>
        ))}
      </div>
    </div>
  );
}

export function CTAStrip({
  title = "READY TO BUILD?",
  sub = "Tell us about your project. We respond within 24 hours.",
  cta = "Start a project",
  href = "/contact",
}: {
  title?: string;
  sub?: string;
  cta?: string;
  href?: string;
}) {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  const [hov, setHov] = useState(false);
  const parts = title.trim().split(/\s+/).filter(Boolean);
  const rest = parts.slice(0, -1).join(" ");
  const last =
    parts.length > 0 ? (parts[parts.length - 1] ?? "") : title;
  return (
    <section style={{ padding: layout === "desktop" ? `60px ${gv}px 0` : `48px ${gv}px 0`, position: "relative", zIndex: 9 }}>
      <div
        className="rv"
        style={{
          background: DK,
          borderRadius: "20px 20px 0 0",
          padding:
            layout === "mobile"
              ? `${Math.max(44, pv - 12)}px ${gv + 6}px`
              : layout === "tablet"
                ? `${pv}px 36px`
                : "72px 60px",
          display: "grid",
          gridTemplateColumns: layout === "desktop" ? "1.2fr 1fr" : "1fr",
          gap: layout === "mobile" ? 32 : layout === "tablet" ? 40 : 60,
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -80,
            top: -80,
            width: 240,
            height: 240,
            borderRadius: "50%",
            background: `radial-gradient(circle,${L}33,transparent 70%)`,
            animation: "consultancy-drift 8s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative" }}>
          <Lbl ch="Let's build together" lt />
          <div
            style={{
              fontFamily: MN,
              fontWeight: 700,
              fontSize: "clamp(36px,3.6vw,56px)",
              letterSpacing: "0.04em",
              lineHeight: 1.0,
              color: "#fff",
              marginBottom: 18,
            }}
          >
            {rest}
            {rest ? " " : ""}
            <span style={{ color: L }}>{last}</span>
          </div>
          <div
            style={{
              fontFamily: SN,
              fontSize: 14,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.4)",
              maxWidth: 440,
            }}
          >
            {sub}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: layout === "desktop" ? "flex-end" : "stretch",
            position: "relative",
          }}
        >
          <Link
            href={href}
            className="hv"
            onMouseEnter={() => setHov(true)}
            onMouseLeave={(e) => {
              setHov(false);
              window.magnetReset?.(e.currentTarget);
            }}
            onMouseMove={(e) => window.magnet?.(e.currentTarget, e, 0.2)}
            style={{
              background: hov ? L2 : L,
              color: "#000",
              border: "none",
              borderRadius: 14,
              padding: layout === "mobile" ? "18px 28px" : "24px 40px",
              fontFamily: MN,
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: layout === "desktop" ? "none" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              transition: "background .2s,transform .15s",
              textDecoration: "none",
              width: layout === "desktop" ? "auto" : "100%",
              boxShadow: hov
                ? `0 12px 40px ${L}66`
                : "0 4px 16px rgba(0,0,0,0.3)",
            }}
          >
            {cta} <Arr sz={14} cl="#000" sw={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}

type FooterMouseHandler = MouseEventHandler<HTMLAnchorElement>;

export function Footer() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const social = [
    "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25h6.927l4.262 5.613z",
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z",
  ];
  const cols: {
    h: string;
    links: [string, string][];
  }[] = [
    {
      h: "Company",
      links: [
        ["About", "/"],
        ["Case Studies", "/case-studies"],
        ["Careers", "/contact"],
        ["Contact", "/contact"],
      ],
    },
    {
      h: "Services",
      links: [
        ["AI Strategy", "/services"],
        ["Custom AI Dev", "/services"],
        ["Implementation", "/services"],
        ["Managed Services", "/services"],
        ["Training", "/services"],
      ],
    },
    {
      h: "Contact",
      links: [
        ["info@alien.fi", "/contact"],
        ["sales@alien.fi", "/contact"],
        ["support@alien.fi", "/contact"],
        ["+1 (800) 555-2946", "/contact"],
      ],
    },
  ];
  const linkEnter: FooterMouseHandler = (e) => {
    e.currentTarget.style.color = "rgba(255,255,255,0.88)";
    e.currentTarget.style.paddingLeft = "6px";
  };
  const linkLeave: FooterMouseHandler = (e) => {
    e.currentTarget.style.color = "rgba(255,255,255,0.38)";
    e.currentTarget.style.paddingLeft = "0";
  };
  return (
    <footer
      style={{
        background: DK,
        padding: `0 ${gv}px`,
        borderTop: "1px solid rgba(255,255,255,0.05)",
        position: "relative",
        zIndex: 9,
        marginTop: "auto",
      }}
    >
      <div
        style={{
          padding: layout === "mobile" ? "40px 4px 28px" : layout === "tablet" ? "44px 12px 36px" : "48px 9px 32px",
          display: "grid",
          gridTemplateColumns:
            layout === "desktop" ? "1.4fr 1fr 1fr 1fr" : layout === "tablet" ? "1fr 1fr" : "1fr",
          gap: layout === "mobile" ? 32 : 40,
        }}
      >
        <div>
          <img
            src="/assets/logo-with-font.svg"
            alt="Alien.fi"
            style={{ height: 18, filter: "invert(1)", marginBottom: 16 }}
          />
          <div
            style={{
              fontFamily: SN,
              fontSize: 12,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.28)",
              marginBottom: 20,
            }}
          >
            A full-service AI consultancy.
            <br />
            Austin, TX — Operating globally.
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            {social.map((d, i) => (
              <div
                key={i}
                className="hv"
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 7,
                  background: "rgba(255,255,255,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background .2s,transform .2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "rgba(150,238,82,0.18)";
                  e.currentTarget.style.transform = "scale(1.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "rgba(255,255,255,0.06)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <svg width={13} height={13} viewBox="0 0 24 24" fill="rgba(255,255,255,0.5)">
                  <path d={d} />
                </svg>
              </div>
            ))}
          </div>
        </div>
        {cols.map(({ h, links }) => (
          <div key={h}>
            <div
              style={{
                fontFamily: MN,
                fontWeight: 700,
                fontSize: 10,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.2)",
                marginBottom: 18,
              }}
            >
              {h}
            </div>
            {links.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="hv"
                style={{
                  display: "block",
                  fontFamily: MN,
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  color: "rgba(255,255,255,0.38)",
                  marginBottom: 10,
                  transition: "color .2s,padding-left .18s",
                  textDecoration: "none",
                }}
                onMouseEnter={linkEnter}
                onMouseLeave={linkLeave}
              >
                {label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div
        style={{
          padding: layout === "mobile" ? "18px 4px" : layout === "tablet" ? "18px 12px" : "20px 9px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          display: "flex",
          flexDirection: layout === "mobile" ? "column" : "row",
          alignItems: layout === "mobile" ? "flex-start" : "center",
          justifyContent: "space-between",
          gap: layout === "mobile" ? 10 : 0,
        }}
      >
        <span
          style={{
            fontFamily: MN,
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.04em",
            color: "rgba(255,255,255,0.18)",
          }}
        >
          © 2024 Alien.fi. All rights reserved.
        </span>
        <span
          style={{
            fontFamily: MN,
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.08em",
            color: "rgba(255,255,255,0.18)",
          }}
        >
          alien.fi
        </span>
      </div>
    </footer>
  );
}

const PAGE_HERO_SIDE = 240;

export function PageHero({
  eyebrow,
  title,
  sub,
  meta,
  accent,
}: {
  eyebrow: string;
  title: string;
  sub: string;
  meta?: [string, string][];
  accent?: string;
}) {
  const layout = useLandingLayout();
  const g = sectionGutter(layout);
  const titleParts = title.split("|").filter(Boolean);

  const titleBlock = (
    <div
      className="rv"
      style={{
        fontFamily: MN,
        fontWeight: 300,
        fontSize: layout === "mobile" ? "clamp(26px,7vw,40px)" : "clamp(30px,4.5vw,72px)",
        letterSpacing: "0.04em",
        lineHeight: 0.98,
        color: "#000",
        wordBreak: "keep-all" as const,
      }}
    >
      {titleParts.map((part, i) => (
        <div
          key={i}
          style={{
            fontWeight: i === 0 ? 300 : i === 1 ? 500 : 700,
            ...(i === 2
              ? {
                  background: `linear-gradient(90deg,#000 40%,${L} 60%,#000 80%)`,
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "consultancy-shimmer 4s linear infinite",
                }
              : {}),
          }}
        >
          {part}
        </div>
      ))}
    </div>
  );

  if (layout !== "desktop") {
    return (
      <section
        style={{
          paddingTop: 60,
          background: `linear-gradient(180deg,${BG} 0%,${BG2} 100%)`,
          position: "relative",
          borderBottom: `1px solid ${PL}`,
        }}
      >
        <div style={{ marginLeft: g, marginRight: g, paddingBottom: layout === "mobile" ? 32 : 40, boxSizing: "border-box" }}>
          <div
            style={{
              borderLeft: `1px solid ${PL}`,
              borderRight: `1px solid ${PL}`,
              padding: layout === "mobile" ? "28px 16px 32px" : "36px 22px 40px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontFamily: MN,
                fontSize: 9,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(0,0,0,0.35)",
                marginBottom: 20,
              }}
            >
              <Link href="/" className="hv" style={{ color: "rgba(0,0,0,0.5)", textDecoration: "none" }}>
                Home
              </Link>
              <span style={{ opacity: 0.4 }}>/</span>
              <span>{eyebrow}</span>
            </div>
            <Lbl ch={eyebrow} />
            <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.75, color: "rgba(0,0,0,0.5)", marginTop: 8, marginBottom: 24 }}>
              {sub}
            </div>
            {titleBlock}
            {(meta?.length ?? 0) > 0 ? (
              <div style={{ marginTop: layout === "mobile" ? 28 : 36 }}>
                <Lbl ch="Quick facts" />
                {(meta ?? []).map((m, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0,
                      padding: "10px 0",
                      borderBottom: `1px solid ${PL}`,
                      fontFamily: MN,
                      fontSize: 11,
                      fontWeight: 500,
                      letterSpacing: "0.04em",
                    }}
                  >
                    <span style={{ flex: 1, minWidth: 0, color: "rgba(0,0,0,0.45)", paddingRight: 2 }}>{m[0]}</span>
                    <span aria-hidden style={{ alignSelf: "stretch", width: 1, flexShrink: 0, background: PL }} />
                    <span style={{ flex: 1, minWidth: 0, color: "#000", fontWeight: 700, paddingLeft: 2, textAlign: "right" }}>
                      {m[1]}
                    </span>
                  </div>
                ))}
              </div>
            ) : null}
            {accent ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: MN,
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: L2,
                  marginTop: 28,
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: L2,
                    animation: "consultancy-dotPulse 1.8s ease-in-out infinite",
                  }}
                />
                {accent}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      style={{
        paddingTop: 60,
        background: `linear-gradient(180deg,${BG} 0%,${BG2} 100%)`,
        position: "relative",
        borderBottom: `1px solid ${PL}`,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: OT,
          right: OT,
          top: 60,
          bottom: 0,
          border: `1px solid ${PL}`,
          borderTop: "none",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: OT + PAGE_HERO_SIDE,
          top: 60,
          bottom: 0,
          width: 1,
          background: PL,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          right: OT + PAGE_HERO_SIDE,
          top: 60,
          bottom: 0,
          width: 1,
          background: PL,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "absolute",
          left: OT + PAGE_HERO_SIDE - 3,
          top: 60,
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: L,
          boxShadow: `0 0 10px ${L}`,
          animation: "consultancy-scan 4s linear infinite",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />

      {/* Inset grid with OT so column edges match guides; z-index keeps copy above lines */}
      <div
        style={{
          marginLeft: OT,
          marginRight: OT,
          position: "relative",
          zIndex: 1,
          width: `calc(100% - ${OT * 2}px)`,
          maxWidth: "100%",
          boxSizing: "border-box",
        }}
      >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `${PAGE_HERO_SIDE}px 1fr ${PAGE_HERO_SIDE}px`,
          minHeight: 300,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          className="rvl"
          style={{
            padding: "52px 28px 52px 20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 24,
            boxSizing: "border-box",
          }}
        >
          <div>
            <Lbl ch={eyebrow} />
            <div style={{ fontFamily: SN, fontSize: 13, lineHeight: 1.7, color: "rgba(0,0,0,0.5)" }}>
              {sub}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontFamily: MN,
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(0,0,0,0.3)",
            }}
          >
            <Link href="/" className="hv" style={{ color: "rgba(0,0,0,0.5)", textDecoration: "none" }}>
              Home
            </Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span>{eyebrow}</span>
          </div>
        </div>
        <div
          style={{
            padding: "52px 44px 52px 20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderLeft: `1px solid ${PL}`,
            borderRight: `1px solid ${PL}`,
            position: "relative",
            overflow: "hidden",
            minWidth: 0,
            boxSizing: "border-box",
            background: `linear-gradient(180deg,${BG} 0%,${BG2} 100%)`,
          }}
        >
          {titleBlock}
        </div>
        <div
          className="rvr"
          style={{
            padding: "52px 30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 24,
            boxSizing: "border-box",
          }}
        >
          <div>
            <Lbl ch="Quick facts" />
            {(meta ?? []).map((m, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0,
                  padding: "10px 0",
                  borderBottom: `1px solid ${PL}`,
                  fontFamily: MN,
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                }}
              >
                <span style={{ flex: 1, minWidth: 0, color: "rgba(0,0,0,0.45)", paddingRight: 2 }}>
                  {m[0]}
                </span>
                <span
                  aria-hidden
                  style={{
                    alignSelf: "stretch",
                    width: 1,
                    flexShrink: 0,
                    background: PL,
                  }}
                />
                <span
                  style={{
                    flex: 1,
                    minWidth: 0,
                    color: "#000",
                    fontWeight: 700,
                    paddingLeft: 2,
                    textAlign: "right",
                  }}
                >
                  {m[1]}
                </span>
              </div>
            ))}
          </div>
          {accent ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontFamily: MN,
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: L2,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: L2,
                  animation: "consultancy-dotPulse 1.8s ease-in-out infinite",
                }}
              />
              {accent}
            </div>
          ) : null}
        </div>
      </div>
      </div>
    </section>
  );
}
