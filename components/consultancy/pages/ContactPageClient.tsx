"use client";

import { ConsultancyLoadedShell } from "@/components/consultancy/ConsultancyLoadedShell";
import {
  Arr,
  CTAStrip,
  Footer,
  Lbl,
  Nav,
  PageHero,
  Ticker,
  consultancyPrimaryBlackCtaEnter,
  consultancyPrimaryBlackCtaLeave,
} from "@/components/consultancy/consultancy-ui";
import { sectionGutter, sectionVPad, useLandingLayout } from "@/lib/landing-layout-context";
import { MN, SN } from "@/lib/consultancy/tokens";
import { BG, BG2, CD, DK, L, L2, PL } from "@/lib/consultancy/theme";
import { CONTACT_BUDGETS, CONTACT_SERVICES, CONTACT_TIMELINES } from "@/lib/lead-form-allowlists";
import dynamic from "next/dynamic";
import { type ReactNode, useEffect, useRef, useState } from "react";

const SERVICES = [...CONTACT_SERVICES];
const BUDGETS = [...CONTACT_BUDGETS];
const TIMELINES = [...CONTACT_TIMELINES];

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), { ssr: false });
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

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
        <label style={{ fontFamily: MN, fontSize: 10, fontWeight: 700, letterSpacing: "normal", textTransform: "uppercase", color: "rgba(0,0,0,0.55)" }}>
          {lbl}
        </label>
        {note ? (
          <span style={{ fontFamily: MN, fontSize: 9, letterSpacing: "normal", color: "rgba(0,0,0,0.35)" }}>{note}</span>
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
        title="CONTACT|ALIEN.FI.|WE LISTEN."
        sub="Tell us what's broken, or what you want to build. When you contact alien.fi, a solution lead replies within one business day with sharp questions, a proposed call time, and options for a free AI consultation if it makes sense."
        meta={[
          ["Reply SLA", "< 1 day"],
          ["Headquarters", "Austin, TX"],
          ["Operating", "North America · Europe · APAC"],
          ["NDA", "On request"],
        ]}
        accent="Book a free AI consultation"
        accentHref="mailto:hello@alien.fi?subject=Free%20AI%20consultation"
      />
      <Ticker words={["Get a quote", "Sign an NDA", "Request references", "Tour the team", "Send a brief", "Schedule a fit call"]} />
      <section style={{ padding: `${pv}px ${gv}px`, background: `linear-gradient(180deg,${BG2},${BG})`, position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: layout === "desktop" ? "1.6fr 1fr" : "1fr", gap: layout === "mobile" ? 28 : 32 }}>
          <Form />
          <SidePanel />
        </div>
      </section>
      <CTAStrip
        title="WE'RE FIVE|MINUTES AWAY"
        sub="Prefer to skip the form? Contact alien.fi directly at hello@alien.fi and a senior AI expert will respond within an hour during PT business hours to schedule a free AI consultation or a quick fit check."
        cta="Start a Project"
        href="mailto:hello@alien.fi"
        ctaUppercase={false}
      />
      <Footer />
    </ConsultancyLoadedShell>
  );
}

function Form() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    co: "",
    role: "",
    service: "Strategy & Roadmap",
    budget: "$150–500K",
    timeline: "1–3 months",
    problem: "",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [transmitError, setTransmitError] = useState<string | null>(null);
  const recaptchaRef = useRef<{ getValue: () => string | null; reset: () => void } | null>(null);
  const attachmentInputRef = useRef<HTMLInputElement>(null);
  const [attachmentName, setAttachmentName] = useState<string | null>(null);
  const [attachmentError, setAttachmentError] = useState<string | null>(null);

  useEffect(() => {
    if (step !== 3) {
      recaptchaRef.current?.reset();
      setTransmitError(null);
      setAttachmentError(null);
      setAttachmentName(null);
      if (attachmentInputRef.current) attachmentInputRef.current.value = "";
    }
  }, [step]);

  const errors = {
    name: !form.name || form.name.length < 2,
    email: !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(form.email),
  };

  const step1Valid = form.name.length > 1 && !errors.email && form.role.length > 1;

  const upd = (k: keyof typeof form, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setTouched((t) => ({ ...t, [k]: true }));
  };

  const onFocus: React.FocusEventHandler<HTMLElement> = (e) => {
    (e.target as HTMLInputElement | HTMLTextAreaElement).style.borderColor = L2;
  };
  const onBlur: React.FocusEventHandler<HTMLElement> = (e) => {
    (e.target as HTMLInputElement | HTMLTextAreaElement).style.borderColor = PL;
  };

  const MAX_ATTACHMENT = 25 * 1024 * 1024;
  const ATTACHMENT_ACCEPT =
    ".pdf,.doc,.docx,.ppt,.pptx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation";

  const validateAttachmentFile = (f: File): string | null => {
    if (f.size > MAX_ATTACHMENT) {
      return "This file is over 25MB. Choose a smaller file or email it to hello@alien.fi.";
    }
    if (!/\.(pdf|doc|docx|ppt|pptx)$/i.test(f.name)) {
      return "Please use PDF, Word (DOC/DOCX), or PowerPoint (PPT/PPTX).";
    }
    return null;
  };

  const applyPickedFile = (f: File | undefined | null) => {
    setAttachmentError(null);
    if (!f) {
      setAttachmentName(null);
      return;
    }
    const err = validateAttachmentFile(f);
    if (err) {
      setAttachmentError(err);
      setAttachmentName(null);
      if (attachmentInputRef.current) attachmentInputRef.current.value = "";
      return;
    }
    setAttachmentName(f.name);
  };

  const onAttachmentChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    applyPickedFile(e.target.files?.[0]);
  };

  const openAttachmentPicker = () => {
    setAttachmentError(null);
    attachmentInputRef.current?.click();
  };

  const handlePrimaryClick = async () => {
    if (step < 3) {
      setTransmitError(null);
      setStep((s) => s + 1);
      return;
    }
    setTransmitError(null);
    if (!RECAPTCHA_SITE_KEY) {
      setTransmitError("Form is temporarily unavailable. Please email hello@alien.fi directly.");
      return;
    }
    const token = recaptchaRef.current?.getValue();
    if (!token) {
      setTransmitError("Please complete the captcha before transmitting.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "contact",
          token,
          name: form.name.trim(),
          email: form.email.trim(),
          co: form.co,
          role: form.role.trim(),
          service: form.service,
          budget: form.budget,
          timeline: form.timeline,
          problem: form.problem,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok) {
        setTransmitError(typeof data.error === "string" ? data.error : "Something went wrong. Please try again.");
        recaptchaRef.current?.reset();
        return;
      }
      setSent(true);
    } catch {
      setTransmitError("Something went wrong. Please try again.");
      recaptchaRef.current?.reset();
    } finally {
      setSubmitting(false);
    }
  };

  const layout = useLandingLayout();

  if (sent) {
    return (
      <div className="rv" style={{ background: DK, borderRadius: 20, padding: layout === "mobile" ? "52px 24px" : "80px 60px", textAlign: "center", color: "#fff" }}>
        <div style={{ fontSize: 60, color: L, marginBottom: 20 }}>✓</div>
        <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 32, letterSpacing: "normal", marginBottom: 14 }}>TRANSMISSION RECEIVED</div>
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
      <div
        style={{
          fontFamily: MN,
          fontSize: 10,
          letterSpacing: "normal",
          color: "rgba(0,0,0,0.4)",
          marginBottom: 20,
        }}
      >
        Step {step} of 3
      </div>
      {step === 1 ? (
        <div id="about-you" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div>
            <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 20, letterSpacing: "normal", color: "#000", marginBottom: 6 }}>About you</div>
            <div style={{ fontFamily: SN, fontSize: 13, color: "rgba(0,0,0,0.55)" }}>
              So we route you to the right AI expert and keep your free AI consultation focused on the problems that matter.
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: layout === "mobile" ? "1fr" : "1fr 1fr", gap: 18 }}>
            <Field lbl="Name">
              <input style={{...inputStyle, borderColor: touched.name && errors.name ? 'red' : PL}} placeholder="Sarah Reyes" onFocus={onFocus} onBlur={onBlur} onChange={(e) => upd("name", e.target.value)} />
              {touched.name && errors.name && <span style={{color: 'red', fontSize: 12}}>Please enter a name.</span>}
            </Field>
            <Field lbl="Work email">
              <input style={{...inputStyle, borderColor: touched.email && errors.email ? 'red' : PL}} placeholder="sarah@company.com" onFocus={onFocus} onBlur={onBlur} onChange={(e) => upd("email", e.target.value)} />
              {touched.email && errors.email && <span style={{color: 'red', fontSize: 12}}>Please enter a valid email.</span>}
            </Field>
            <Field lbl="Company">
              <input style={inputStyle} placeholder="Acme Corp" onFocus={onFocus} onBlur={onBlur} onChange={(e) => upd("co", e.target.value)} />
            </Field>
            <Field lbl="Role">
              <input style={{...inputStyle, borderColor: touched.role && !form.role ? 'red' : PL}} placeholder="VP, Operations" onFocus={onFocus} onBlur={onBlur} onChange={(e) => upd("role", e.target.value)} />
              {touched.role && !form.role && <span style={{color: 'red', fontSize: 12}}>Please enter a role.</span>}
            </Field>
          </div>
        </div>
      ) : null}
      {step === 2 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div>
            <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 20, letterSpacing: "normal", color: "#000", marginBottom: 6 }}>
              About your team
            </div>
            <div style={{ fontFamily: SN, fontSize: 13, color: "rgba(0,0,0,0.55)" }}>
              Share context so the right partner joins the call.
            </div>
          </div>
          <Field lbl="What kind of engagement?">
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {SERVICES.map((s) => {
                const a = form.service === s;
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
                      letterSpacing: "normal",
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
                  const a = form.budget === b;
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
                  const a = form.timeline === t;
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
            <div style={{ fontFamily: MN, fontWeight: 600, fontSize: 20, letterSpacing: "normal", color: "#000", marginBottom: 6 }}>
              About the work
            </div>
            <div style={{ fontFamily: SN, fontSize: 13, color: "rgba(0,0,0,0.55)" }}>
              Outline the AI project, timeline, and what success looks like.
            </div>
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
            <input
              id="contact-attachment"
              ref={attachmentInputRef}
              type="file"
              accept={ATTACHMENT_ACCEPT}
              style={{ display: "none" }}
              onChange={onAttachmentChange}
            />
            <div
              role="button"
              tabIndex={0}
              onClick={openAttachmentPicker}
              onDragOver={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onDrop={(e) => {
                e.preventDefault();
                e.stopPropagation();
                applyPickedFile(e.dataTransfer.files?.[0]);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openAttachmentPicker();
                }
              }}
              style={{
                ...inputStyle,
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 14px",
                cursor: "pointer",
                borderColor: attachmentError ? "#b00020" : PL,
              }}
            >
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
                {attachmentName
                  ? `Selected: ${attachmentName}`
                  : "Drop a file or click to upload (PDF, DOCX, PPTX · max 25MB)"}
              </span>
            </div>
            {attachmentError ? (
              <div style={{ fontFamily: SN, fontSize: 11, color: "#b00020", marginTop: 6 }}>{attachmentError}</div>
            ) : null}
            <div style={{ fontFamily: SN, fontSize: 11, color: "rgba(0,0,0,0.45)", marginTop: 6, lineHeight: 1.5 }}>
              File is not uploaded to our servers yet; you can still email decks to hello@alien.fi if needed.
            </div>
          </Field>
        </div>
      ) : null}
      {step === 3 ? (
        <div style={{ marginTop: 8 }}>
          {transmitError ? (
            <div style={{ fontFamily: SN, fontSize: 12, color: "#b00020", marginBottom: 10 }}>{transmitError}</div>
          ) : null}
          {RECAPTCHA_SITE_KEY ? (
            <ReCAPTCHA ref={recaptchaRef} sitekey={RECAPTCHA_SITE_KEY} />
          ) : (
            <div style={{ fontFamily: SN, fontSize: 12, color: "rgba(0,0,0,0.55)" }}>
              Form is temporarily unavailable. Please email hello@alien.fi directly.
            </div>
          )}
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
          disabled={step === 1 || submitting}
          style={{
            background: "transparent",
            border: "none",
            fontFamily: MN,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "normal",
            textTransform: "uppercase",
            color: step === 1 ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.6)",
            cursor: step === 1 ? "default" : "none",
            padding: "10px 0",
          }}
        >
          ← Back
        </button>
        <button
          type="button"
          className="hv"
          onClick={() => void handlePrimaryClick()}
          disabled={(step === 1 && !step1Valid) || submitting}
          style={{
            background: "#000",
            color: "#fff",
            border: "none",
            borderRadius: 24,
            padding: "12px 22px",
            fontFamily: MN,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "normal",
            textTransform: "none",
            cursor: submitting ? "wait" : "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            transition: "background .2s,color .2s,transform .15s,box-shadow .2s",
            boxShadow: "none",
            opacity: submitting ? 0.65 : 1,
          }}
          onMouseEnter={(e) => {
            if (e.currentTarget.disabled) return;
            consultancyPrimaryBlackCtaEnter(e);
          }}
          onMouseLeave={(e) => {
            consultancyPrimaryBlackCtaLeave(e);
          }}
        >
          {step < 3 ? (
            <>Continue <Arr sz={11} cl="currentColor" sw={2.2} /></>
          ) : submitting ? (
            <>Sending…</>
          ) : (
            <>
              Transmit <Arr sz={11} cl="currentColor" sw={2.2} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

function SidePanel() {
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
              <span style={{ fontFamily: MN, fontSize: 12, fontWeight: 600, color: "#fff", letterSpacing: "normal" }}>{e}</span>
              <span style={{ fontFamily: MN, fontSize: 9, letterSpacing: "normal", color: L2, textTransform: "uppercase" }}>{lab}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="rv d2" style={{ background: `linear-gradient(160deg,${BG},${BG2})`, padding: "30px 28px" }}>
        <Lbl ch="Headquarters" />
        <div style={{ paddingTop: 4 }}>
          <div style={{ fontFamily: MN, fontWeight: 700, fontSize: 13, color: "#000", letterSpacing: "normal", marginBottom: 8 }}>Austin, TX</div>
          <div style={{ fontFamily: SN, fontSize: 11.5, color: "rgba(0,0,0,0.55)", lineHeight: 1.55 }}>
            350 Innovation Drive, Suite 1200, Austin, TX 78701, United States
          </div>
        </div>
      </div>
      <div
        className="rv d2b"
        style={{
          background: `linear-gradient(160deg,${BG2},${BG})`,
          padding: "30px 28px",
          borderTop: `1px solid ${PL}`,
        }}
      >
        <Lbl ch="Operating globally" />
        <div style={{ fontFamily: SN, fontSize: 12.5, color: "rgba(0,0,0,0.55)", lineHeight: 1.6, paddingTop: 4 }}>
          North America · Europe · APAC
        </div>
      </div>
      <div className="rv d3" style={{ background: `linear-gradient(160deg,${BG2},${BG})`, padding: "30px 28px" }}>
        <Lbl ch="Response promise" />
        <div style={{ fontFamily: SN, fontSize: 12.5, color: "rgba(0,0,0,0.52)", lineHeight: 1.65, paddingTop: 4 }}>
          Replies within 1 business day. Always from a human. If your request is urgent, mention it in the form or email and we&apos;ll surface it to a senior AI expert immediately.
        </div>
      </div>
    </div>
  );
}
