"use client";

import { ConsultancyLoadedShell } from "@/components/consultancy/ConsultancyLoadedShell";
import {
  Arr,
  Chip,
  CTAStrip,
  Footer,
  Lbl,
  Nav,
  PageHero,
  Ticker,
} from "@/components/consultancy/consultancy-ui";
import { sectionGutter, sectionVPad, useLandingLayout } from "@/lib/landing-layout-context";
import { MN, SN } from "@/lib/consultancy/tokens";
import { BG, BG2, CD, DK, L, L2, PL } from "@/lib/consultancy/theme";
import { type ReactNode, useState } from "react";

const SERVICES = [
  "Strategy & Roadmap",
  "Custom AI Development",
  "Pre-built Solution",
  "Data Engineering",
  "Managed Operations",
  "Training & Enablement",
  "Not sure yet",
];
const BUDGETS = ["<$50K", "$50–150K", "$150–500K", "$500K–1M", "$1M+"];
const TIMELINES = ["ASAP", "1–3 months", "3–6 months", "6+ months", "Exploratory"];

function Field({
  lbl,
  children,
  note,
}: {
  lbl: string;
  children: ReactNode;
  note?: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
        <label style={{ fontFamily: MN, fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(0,0,0,0.55)" }}>
          {lbl}
        </label>
        {note ? (
          <span style={{ fontFamily: MN, fontSize: 9, letterSpacing: "0.06em", color: "rgba(0,0,0,0.35)" }}>{note}</span>
        ) : null}
      </div>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  background: "#fff",
  border: `1px solid ${PL}`,
  borderRadius: 10,
  padding: "14px 16px",
  fontFamily: MN,
  fontSize: 13,
  color: "#000",
  outline: "none",
  width: "100%",
  transition: "border-color .2s",
};

export default function ContactPageClient() {
  const layout = useLandingLayout();
  const gv = sectionGutter(layout);
  const pv = sectionVPad(layout);
  return (
    <ConsultancyLoadedShell label="CONTACT">
      <Nav current="Contact" />
      <PageHero
        eyebrow="Contact"
        title="OPEN A|CHANNEL.|WE LISTEN."
        sub="Tell us what's broken. Within one business day, a solution lead will reply with sharp questions and a proposed call time."
        meta={[["Reply SLA", "< 1 day"], ["Offices", "SF · NY · LON"], ["Time zones", "PT · ET · GMT"], ["NDA", "On request"]]}
        accent="Booking 3 strategy calls per week"
      />
      <Ticker words={["Send a brief", "Schedule a fit call", "Get a quote", "Sign an NDA", "Request references", "Tour the team"]} />
      <section style={{ padding: `${pv}px ${gv}px`, background: `linear-gradient(180deg,${BG2},${BG})`, position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: layout === "desktop" ? "1.6fr 1fr" : "1fr", gap: layout === "mobile" ? 28 : 32 }}>
          <Form />
          <SidePanel />
        </div>
      </section>
      <CTAStrip title="WE'RE FIVE MINUTES AWAY" sub="Skip the form: hello@alien.fi reaches a real human within an hour during PT business hours." />
      <Footer />
    </ConsultancyLoadedShell>
  );
}

function Form() {
  const [step, setStep] = useState(1);
  type FormRow = {
    name?: string;
    email?: string;
    co?: string;
    role?: string;
    service: string;
    budget: string;
    timeline: string;
    problem?: string;
  };
  const [data, setData] = useState<FormRow>({
    service: "Strategy & Roadmap",
    budget: "$150–500K",
    timeline: "1–3 months",
  });
  const [sent, setSent] = useState(false);

  const upd = <K extends keyof FormRow>(k: K, v: FormRow[K]) => setData((d) => ({ ...d, [k]: v }));

  const onFocus: React.FocusEventHandler<HTMLElement> = (e) => {
    (e.target as HTMLInputElement | HTMLTextAreaElement).style.borderColor = L2;
  };
  const onBlur: React.FocusEventHandler<HTMLElement> = (e) => {
    (e.target as HTMLInputElement | HTMLTextAreaElement).style.borderColor = PL;
  };

  const layout = useLandingLayout();

  if (sent) {
    return (
      <div className="rv" style={{ background: DK, borderRadius: 20, padding: layout === "mobile" ? "52px 24px" : "80px 60px", textAlign: "center", color: "#fff" }}>
        <div style={{ fontSize: 60, color: L, marginBottom: 20 }}>✓</div>
        <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 32, letterSpacing: "0.04em", marginBottom: 14 }}>TRANSMISSION RECEIVED</div>
        <div style={{ fontFamily: SN, fontSize: 14, color: "rgba(255,255,255,0.6)", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
          A solution lead will reply within 1 business day with next steps and a proposed call time.
        </div>
      </div>
    );
  }

  return (
    <div
      className="rv"
      style={{
        background: `linear-gradient(165deg,${BG},${BG2})`,
        borderRadius: 20,
        padding: layout === "mobile" ? "28px 20px" : "40px 40px",
        border: `1px solid ${PL}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 30 }}>
        {[1, 2, 3].map((n) => (
          <div key={n} style={{ display: "flex", alignItems: "center", gap: 14, flex: n < 3 ? 1 : "none" }}>
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                background: step >= n ? "#000" : CD,
                color: step >= n ? L : "rgba(0,0,0,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: MN,
                fontSize: 11,
                fontWeight: 700,
                transition: "all .25s",
              }}
            >
              {step > n ? "✓" : n}
            </div>
            {n < 3 ? <div style={{ flex: 1, height: 2, background: step > n ? "#000" : CD, transition: "background .25s" }} /> : null}
          </div>
        ))}
      </div>
      {step === 1 ? (
        <div id="about-you" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div>
            <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 20, letterSpacing: "0.04em", color: "#000", marginBottom: 6 }}>About you</div>
            <div style={{ fontFamily: SN, fontSize: 13, color: "rgba(0,0,0,0.55)" }}>So we route to the right solution lead.</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: layout === "mobile" ? "1fr" : "1fr 1fr", gap: 18 }}>
            <Field lbl="Name">
              <input style={inputStyle} placeholder="Sarah Reyes" onFocus={onFocus} onBlur={onBlur} onChange={(e) => upd("name", e.target.value)} />
            </Field>
            <Field lbl="Work email">
              <input style={inputStyle} placeholder="sarah@company.com" onFocus={onFocus} onBlur={onBlur} onChange={(e) => upd("email", e.target.value)} />
            </Field>
            <Field lbl="Company">
              <input style={inputStyle} placeholder="Acme Corp" onFocus={onFocus} onBlur={onBlur} onChange={(e) => upd("co", e.target.value)} />
            </Field>
            <Field lbl="Role">
              <input style={inputStyle} placeholder="VP, Operations" onFocus={onFocus} onBlur={onBlur} onChange={(e) => upd("role", e.target.value)} />
            </Field>
          </div>
        </div>
      ) : null}
      {step === 2 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div>
            <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 20, letterSpacing: "0.04em", color: "#000", marginBottom: 6 }}>
              The engagement
            </div>
            <div style={{ fontFamily: SN, fontSize: 13, color: "rgba(0,0,0,0.55)" }}>Helps us scope the first call.</div>
          </div>
          <Field lbl="What kind of engagement?">
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {SERVICES.map((s) => {
                const a = data.service === s;
                return (
                  <button
                    key={s}
                    type="button"
                    className="hv"
                    onClick={() => upd("service", s)}
                    style={{
                      background: a ? "#000" : "#fff",
                      color: a ? L : "rgba(0,0,0,0.7)",
                      border: `1px solid ${a ? "#000" : PL}`,
                      borderRadius: 20,
                      padding: "8px 16px",
                      fontFamily: MN,
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      cursor: "none",
                      transition: "all .2s",
                    }}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </Field>
          <div style={{ display: "grid", gridTemplateColumns: layout === "mobile" ? "1fr" : "1fr 1fr", gap: 18 }}>
            <Field lbl="Budget range">
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {BUDGETS.map((b) => {
                  const a = data.budget === b;
                  return (
                    <button
                      type="button"
                      key={b}
                      className="hv"
                      onClick={() => upd("budget", b)}
                      style={{
                        background: a ? "#000" : "#fff",
                        color: a ? L : "rgba(0,0,0,0.7)",
                        border: `1px solid ${a ? "#000" : PL}`,
                        borderRadius: 8,
                        padding: "8px 12px",
                        fontFamily: MN,
                        fontSize: 11,
                        fontWeight: 600,
                        cursor: "none",
                      }}
                    >
                      {b}
                    </button>
                  );
                })}
              </div>
            </Field>
            <Field lbl="Timeline">
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {TIMELINES.map((t) => {
                  const a = data.timeline === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      className="hv"
                      onClick={() => upd("timeline", t)}
                      style={{
                        background: a ? "#000" : "#fff",
                        color: a ? L : "rgba(0,0,0,0.7)",
                        border: `1px solid ${a ? "#000" : PL}`,
                        borderRadius: 8,
                        padding: "8px 12px",
                        fontFamily: MN,
                        fontSize: 11,
                        fontWeight: 600,
                        cursor: "none",
                      }}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </Field>
          </div>
        </div>
      ) : null}
      {step === 3 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div>
            <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 20, letterSpacing: "0.04em", color: "#000", marginBottom: 6 }}>
              The problem
            </div>
            <div style={{ fontFamily: SN, fontSize: 13, color: "rgba(0,0,0,0.55)" }}>One paragraph is fine. We'll ask the rest live.</div>
          </div>
          <Field lbl="What are you trying to solve?" note="Optional but encouraged">
            <textarea
              style={{ ...inputStyle, minHeight: 140, resize: "vertical", fontFamily: SN, lineHeight: 1.6 }}
              placeholder="We're a regional bank. Our SIU team is overwhelmed and we suspect ~$5M/yr in fraud is slipping through. Looking for a real-time scoring solution we could pilot in Q1."
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={(e) => upd("problem", e.target.value)}
            />
          </Field>
          <Field lbl="Anything to share? (deck, RFP)" note="Optional">
            <div style={{ ...inputStyle, display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", cursor: "none" }} className="hv">
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 6,
                  background: CD,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: MN,
                  fontSize: 14,
                  color: "rgba(0,0,0,0.4)",
                }}
              >
                ↑
              </div>
              <span style={{ fontFamily: MN, fontSize: 12, color: "rgba(0,0,0,0.5)" }}>
                Drop a file or click to upload (PDF, DOCX, PPTX · max 25MB)
              </span>
            </div>
          </Field>
        </div>
      ) : null}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 32,
          paddingTop: 24,
          borderTop: `1px solid ${PL}`,
        }}
      >
        <button
          type="button"
          className="hv"
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          disabled={step === 1}
          style={{
            background: "transparent",
            border: "none",
            fontFamily: MN,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: step === 1 ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.6)",
            cursor: step === 1 ? "default" : "none",
            padding: "10px 0",
          }}
        >
          ← Back
        </button>
        <div style={{ fontFamily: MN, fontSize: 10, letterSpacing: "0.1em", color: "rgba(0,0,0,0.4)" }}>STEP {step} OF 3</div>
        <button
          type="button"
          className="hv"
          onClick={() => (step < 3 ? setStep((s) => s + 1) : setSent(true))}
          style={{
            background: "#000",
            color: L,
            border: "none",
            borderRadius: 24,
            padding: "12px 22px",
            fontFamily: MN,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            cursor: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          {step < 3 ? "Continue" : "Transmit"} <Arr sz={11} cl={L} sw={2.2} />
        </button>
      </div>
    </div>
  );
}

function SidePanel() {
  const offices = [
    { c: "San Francisco", a: "88 Folsom Street, Floor 6", z: "CA 94105", tz: "PT · UTC-8" },
    { c: "New York", a: "347 Madison Avenue, Floor 14", z: "NY 10017", tz: "ET · UTC-5" },
    { c: "London", a: "2 Eastbourne Terrace", z: "W2 6LG", tz: "GMT · UTC+0" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 1, background: PL, borderRadius: 20, overflow: "hidden", border: `1px solid ${PL}` }}>
      <div className="rv d1" style={{ background: DK, padding: "30px 28px" }}>
        <Lbl ch="Direct lines" lt />
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            ["hello@alien.fi", "General"],
            ["solutions@alien.fi", "Engagements"],
            ["careers@alien.fi", "Careers"],
            ["press@alien.fi", "Press"],
          ].map(([e, lab]) => (
            <a key={e} href={`mailto:${e}`} className="hv" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", textDecoration: "none" }}>
              <span style={{ fontFamily: MN, fontSize: 12, fontWeight: 600, color: "#fff", letterSpacing: "0.02em" }}>{e}</span>
              <span style={{ fontFamily: MN, fontSize: 9, letterSpacing: "0.1em", color: L2, textTransform: "uppercase" }}>{lab}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="rv d2" style={{ background: `linear-gradient(160deg,${BG},${BG2})`, padding: "30px 28px" }}>
        <Lbl ch="Offices" />
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {offices.map((o) => (
            <div key={o.c} style={{ paddingBottom: 14, borderBottom: `1px solid ${PL}` }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontFamily: MN, fontWeight: 700, fontSize: 13, color: "#000", letterSpacing: "0.04em" }}>{o.c}</span>
                <span style={{ fontFamily: MN, fontSize: 9, letterSpacing: "0.08em", color: L2, fontWeight: 600 }}>{o.tz}</span>
              </div>
              <div style={{ fontFamily: SN, fontSize: 11.5, color: "rgba(0,0,0,0.55)", lineHeight: 1.5 }}>
                {o.a}
                <br />
                {o.z}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rv d3" style={{ background: `linear-gradient(160deg,${BG2},${BG})`, padding: "30px 28px" }}>
        <Lbl ch="Response promise" />
        <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 15, color: "#000", letterSpacing: "0.02em", lineHeight: 1.5, marginBottom: 12 }}>
          Replies within 1 business day. Always from a human.
        </div>
        <div style={{ fontFamily: SN, fontSize: 11.5, color: "rgba(0,0,0,0.5)", lineHeight: 1.6 }}>
          If your problem is urgent, mention it in the form and we'll surface it to a partner.
        </div>
      </div>
    </div>
  );
}
