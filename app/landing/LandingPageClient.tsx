"use client";

/* Generated from repo-root `Landing Page.html` via `scripts/generate-landing-client.mjs` (then link/tag fixes). Regenerate after editing the HTML source. */

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { CW, OT } from "@/lib/consultancy/tokens";
import {
  LandingLayoutProvider,
  gridCols,
  sectionGutter,
  sectionVPad,
  useLandingLayout,
} from "@/lib/landing-layout-context";
import { LandingChrome } from "./LandingChrome";
import { SplineHeroLogo } from "./SplineHeroLogo";

/* ── TOKENS ── */
const L='rgb(150,238,82)',L2='rgb(177,238,82)';
const BG='rgb(243,243,255)',BG2='rgb(224,226,241)';
const PL='rgb(199,200,211)',CD='rgb(229,231,245)';
const DK='rgb(21,24,43)';
const MN="var(--font-azeret), 'Azeret Mono', monospace",
  SN="var(--font-poppins), 'Poppins', sans-serif";
/** Hero side rails (.rvl / .rvr); inner verticals at OT+CWS from each edge */
const CWS=CW-20;

const TWEAK_DEFAULTS=/*EDITMODE-BEGIN*/{"showStats":true}/*EDITMODE-END*/;

/* ── SMALL ATOMS ── */
const Arr = ({ sz = 10, cl = "#fff", sw = 1.8 }) => (
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
const Chip = ({ ch, bg = L2, cl = "#000", sx = {} }) => (
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
const Lbl = ({ ch, lt = false }) => (
  <div
    style={{
      fontFamily: MN,
      fontWeight: 600,
      fontSize: 10,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: lt ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)",
      marginBottom: 12,
    }}
  >
    {ch}
  </div>
);
const Ttl = ({ ch, lt = false, sx = {} }) => (
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

/* ── COUNT-UP ── */
function useCountUp(target,dur=1400,trigger){
  const [v,setV]=useState(0);
  useEffect(()=>{
    if(!trigger)return;
    let s=null;
    const step=t=>{
      if(!s)s=t;
      const p=Math.min((t-s)/dur,1);
      const e=1-Math.pow(1-p,3);
      setV(Math.round(e*target));
      if(p<1)requestAnimationFrame(step);
      else setV(target);
    };
    requestAnimationFrame(step);
  },[trigger,target,dur]);
  return v;
}

/* ── STAT CELL with countUp ── */
function StatCell({val,raw,lbl}){
  const ref=useRef();
  const [triggered,setTriggered]=useState(false);
  const count=useCountUp(raw,1200,triggered);
  useEffect(()=>{
    const o=new IntersectionObserver(en=>{if(en[0].isIntersecting){setTriggered(true);o.disconnect();}},{threshold:.5});
    if(ref.current)o.observe(ref.current);
    return()=>o.disconnect();
  },[]);
  // format: raw=20 → "20+", raw=3.1 → "3.1×", raw=62 → "62%"
  const suffix=val.replace(/[\d.]/g,'');
  const isDecimal=val.includes('.');
  const display=isDecimal?(count/10).toFixed(1)+suffix:count+suffix;
  return(
    <div ref={ref} className="hv" style={{background:`linear-gradient(135deg,${BG},${BG2})`,padding:'26px 24px',transition:'background .3s',cursor:'default'}}
      onMouseEnter={e=>e.currentTarget.style.background='rgb(218,242,200)'}
      onMouseLeave={e=>e.currentTarget.style.background=`linear-gradient(135deg,${BG},${BG2})`}>
      <div style={{fontFamily:MN,fontWeight:700,fontSize:34,letterSpacing:'0.02em',color:L2,lineHeight:1,animation:triggered?'statPop .5s ease':'none'}}>{display}</div>
      <div style={{fontFamily:SN,fontWeight:500,fontSize:10,color:'rgba(0,0,0,0.38)',marginTop:5}}>{lbl}</div>
    </div>
  );
}

/* ── TILT CARD ── */
function Tilt({ch,sx={},int=10}){
  const ref=useRef();
  const mv=useCallback(e=>{
    const r=ref.current.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    ref.current.style.transform=`perspective(700px) rotateY(${x*int*2}deg) rotateX(${-y*int*1.5}deg) scale(1.025)`;
    ref.current.style.boxShadow=`${-x*10}px ${-y*10}px 32px rgba(0,0,0,0.1)`;
  },[int]);
  const lv=useCallback(()=>{ref.current.style.transform='perspective(700px) rotateY(0) rotateX(0) scale(1)';ref.current.style.boxShadow='none';},[]);
  return<div ref={ref} onMouseMove={mv} onMouseLeave={lv} style={{transition:'transform .22s cubic-bezier(.16,1,.3,1),box-shadow .22s',...sx}}>{ch}</div>;
}

/* ── LOADER ── */
function Loader({onDone}){
  const [ph,setPh]=useState(0); // 0=typing 1=bar 2=exit
  const [typed,setTyped]=useState('');
  const [bw,setBw]=useState(0);
  const full='ALIEN.FI';
  useEffect(()=>{
    let i=0;const t=setInterval(()=>{i++;setTyped(full.slice(0,i));if(i>=full.length){clearInterval(t);setPh(1);}},75);
    return()=>clearInterval(t);
  },[]);
  useEffect(()=>{
    if(ph!==1)return;
    let w=0;const t=setInterval(()=>{w+=2.8;setBw(Math.min(w,100));if(w>=100){clearInterval(t);setTimeout(()=>setPh(2),200);}},16);
    return()=>clearInterval(t);
  },[ph]);
  useEffect(()=>{if(ph===2)setTimeout(onDone,700);},[ph]);
  return(
    <div style={{position:'fixed',inset:0,zIndex:10000,background:DK,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:28,
      transition:ph===2?'transform .72s cubic-bezier(.76,0,.24,1),opacity .55s':'none',
      transform:ph===2?'translateY(-100%)':'translateY(0)',opacity:ph===2?0:1}}>
      {/* scanlines */}
      <div style={{position:'absolute',inset:0,pointerEvents:'none',overflow:'hidden'}}>
        {[0,1,2,3,4,5,6,7,8,9].map(i=><div key={i} style={{position:'absolute',left:0,right:0,top:`${i*11}%`,height:1,background:'rgba(255,255,255,0.025)'}}/>)}
        <div style={{position:'absolute',left:0,right:0,height:3,background:`linear-gradient(transparent,${L},transparent)`,opacity:.18,animation:ph<2?'scan 2s linear infinite':'none'}}/>
      </div>
      <img src="/assets/logo-icon.svg" alt="" style={{height:72,objectFit:'contain',filter:'invert(1)',animation:'glow 2s ease-in-out infinite'}}/>
      <div style={{fontFamily:MN,fontWeight:700,fontSize:26,letterSpacing:'0.32em',color:'#fff',minWidth:220,textAlign:'center'}}>
        {typed}<span style={{animation:'blink .75s step-end infinite',color:L}}>_</span>
      </div>
      <div style={{fontFamily:MN,fontWeight:500,fontSize:10,letterSpacing:'0.2em',color:'rgba(255,255,255,0.22)',textTransform:'uppercase'}}>AI Consultancy & Solutions</div>
      <div style={{width:220,height:2,background:'rgba(255,255,255,0.08)',borderRadius:2,overflow:'hidden'}}>
        <div style={{height:'100%',background:L,borderRadius:2,width:`${bw}%`,transition:'width .04s linear',boxShadow:`0 0 14px ${L}`}}/>
      </div>
    </div>
  );
}

/* ── NAV ── */
function Nav(){
  const layout=useLandingLayout();
  const [sc,setSc]=useState(false);
  const [menu,setMenu]=useState(false);
  useEffect(()=>{const f=()=>setSc(window.scrollY>20);window.addEventListener('scroll',f);return()=>window.removeEventListener('scroll',f);},[]);
  useEffect(()=>{
    if(!menu)return;
    const prev=document.body.style.overflow;
    document.body.style.overflow='hidden';
    return()=>{document.body.style.overflow=prev;};
  },[menu]);

  /** Match `HeroNarrow` framed column: margin `sectionGutter` + 1px rule + same inner inset as body copy */
  const navFrameInset=layout==='mobile'?10:12;
  const navHPad=layout==='desktop'?OT+9:sectionGutter(layout)+1+navFrameInset;
  const links=[['Services','/services'],['Industries','/industries'],['Solutions','/solutions'],['Case Studies','/case-studies'],['Contact','/contact']]as const;

  if(layout==='desktop'){
    return(
      <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:300,background:L,height:60,display:'flex',alignItems:'center',justifyContent:'space-between',padding:`0 ${OT+9}px`,boxShadow:sc?'0 2px 28px rgba(0,0,0,0.14)':'none',transition:'box-shadow .3s'}}>
        <Link href="/" className="hv" style={{display:'flex',alignItems:'center',textDecoration:'none'}}>
          <img src="/assets/logo-with-font.svg" alt="Alien.fi" style={{height:20}}/>
        </Link>
        <div style={{display:'flex',gap:32,alignItems:'center'}}>
          {links.map(([l,h])=>(
            <Link key={l} href={h} className="hv" style={{fontFamily:MN,fontWeight:500,fontSize:12,letterSpacing:'0.06em',color:'rgba(0,0,0,0.6)',textDecoration:'none',transition:'color .2s'}}
              onMouseEnter={e=>{e.currentTarget.style.color='#000';}} onMouseLeave={e=>{e.currentTarget.style.color='rgba(0,0,0,0.6)';}}>{l}</Link>
          ))}
        </div>
        <button className="hv" onClick={()=>document.getElementById('contact')?.scrollIntoView({block:'start'})}
          style={{display:'flex',alignItems:'center',gap:8,background:'#000',color:'#fff',border:'none',borderRadius:8,fontFamily:MN,fontWeight:600,fontSize:11,letterSpacing:'0.08em',padding:'10px 18px',cursor:'none',transition:'background .2s,transform .15s'}}
          onMouseMove={e=>window.magnet?.(e.currentTarget,e)}
          onMouseLeave={e=>window.magnetReset?.(e.currentTarget)}
        >Start a project <Arr sz={9} cl={L} sw={2.2}/></button>
      </nav>
    );
  }

  return(
    <>
      <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:300,background:L,height:60,display:'flex',alignItems:'center',justifyContent:'space-between',padding:`0 ${navHPad}px`,boxShadow:sc?'0 2px 28px rgba(0,0,0,0.14)':'none',transition:'box-shadow .3s'}}>
        <Link href="/" className="hv" style={{display:'flex',alignItems:'center',textDecoration:'none'}}>
          <img src="/assets/logo-with-font.svg" alt="Alien.fi" style={{height:20}}/>
        </Link>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <button type="button" className="hv landing-nav-menu-btn" aria-expanded={menu} aria-controls="landing-nav-sheet" aria-label={menu?'Close menu':'Open menu'} onClick={()=>setMenu(m=>!m)}
            style={{width:42,height:40,borderRadius:10,border:'1.5px solid rgba(0,0,0,0.35)',background:menu?'#000':'rgba(255,255,255,0.35)',color:menu?'#fff':'#000',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:5,padding:0}}
          >
            <span style={{display:'block',width:18,height:2,background:'currentColor',borderRadius:2,transition:'transform .2s'}}/>
            <span style={{display:'block',width:18,height:2,background:'currentColor',borderRadius:2,transition:'transform .2s'}}/>
          </button>
          <button type="button" className="hv landing-nav-cta" onClick={()=>{setMenu(false);document.getElementById('contact')?.scrollIntoView({block:'start'});}}
            style={{display:'inline-flex',alignItems:'center',gap:8,background:'#000',color:'#fff',border:'none',borderRadius:8,fontFamily:MN,fontWeight:600,fontSize:layout==='mobile'?10:11,letterSpacing:'0.06em',padding:layout==='mobile'?'9px 12px':'10px 16px'}}>
            Start <Arr sz={9} cl={L} sw={2.2}/>
          </button>
        </div>
      </nav>
      {menu&&<>
        <div style={{position:'fixed',inset:0,zIndex:280,background:'rgba(21,24,43,0.35)',backdropFilter:'blur(6px)',WebkitBackdropFilter:'blur(6px)'}} aria-hidden onClick={()=>setMenu(false)}/>
        <div id="landing-nav-sheet" role="dialog" aria-modal style={{position:'fixed',top:58,left:sectionGutter(layout),right:sectionGutter(layout),maxHeight:'min(560px,calc(100vh - 80px))',zIndex:310,overflow:'hidden',borderRadius:16,border:`1px solid ${PL}`,boxShadow:'0 24px 60px rgba(0,0,0,0.18)',background:BG}}>
          <div style={{overflowY:'auto',padding:'22px 20px 26px'}}>
            {links.map(([l,h])=>(
              <Link key={l} href={h} onClick={()=>setMenu(false)} style={{display:'block',padding:'14px 4px',fontFamily:MN,fontWeight:600,fontSize:12,letterSpacing:'0.08em',textTransform:'uppercase',color:'#000',textDecoration:'none',borderBottom:`1px solid ${PL}`}}>{l}</Link>
            ))}
          </div>
        </div>
      </>}
    </>
  );
}

/* ── HERO DESKTOP — unchanged grid (>=1120px only) ── */
function HeroDesktop({tweaks}){
  const [hovSvc,setHovSvc]=useState(null);

  return(
    <section style={{paddingTop:60,background:`linear-gradient(180deg,${BG} 0%,${BG2} 100%)`,position:'relative',minHeight:'100vh'}}>
      {/* Grid lines */}
      <div style={{position:'absolute',left:OT,right:OT,top:60,bottom:0,border:`1px solid ${PL}`,borderTop:'none',pointerEvents:'none'}}/>
      <div style={{position:'absolute',left:OT+CWS,top:60,bottom:0,width:1,background:PL,pointerEvents:'none'}}/>
      <div style={{position:'absolute',right:OT+CWS,top:60,bottom:0,width:1,background:PL,pointerEvents:'none'}}/>
      {/* Row-1 divider comes from matching borderBottom on grid cells */}
      {/* Scanning dots on vertical lines — inset from rails (no innerWidth; avoids SSR/client hydration mismatch) */}
      <div style={{position:'absolute',left:OT+CWS-3,top:60,width:7,height:7,borderRadius:'50%',background:L,boxShadow:`0 0 10px ${L}`,animation:'scan 3s linear infinite',pointerEvents:'none',zIndex:10}}/>
      <div style={{position:'absolute',right:OT+CWS-3,top:60,width:7,height:7,borderRadius:'50%',background:L,boxShadow:`0 0 10px ${L}`,animation:'scan 4s linear infinite',pointerEvents:'none',zIndex:10}}/>

      {/* Inset matches absolute frame (left/right OT) — columns were edge-to-edge and sat outside guides */}
      <div style={{marginLeft:OT,marginRight:OT}}>
      <div style={{display:'grid',gridTemplateColumns:`${CWS}px 1fr ${CWS}px`,gridTemplateRows:'auto minmax(0,1fr)',minHeight:'calc(100vh - 60px)'}}>

        {/* Row 1 — shared auto height so headline can grow on large screens */}
        <div className="rvl" style={{minHeight:220,padding:'40px 18px 40px 28px',borderBottom:`1px solid ${PL}`,display:'flex',alignItems:'center',boxSizing:'border-box'}}>
          <img src="/assets/logo-icon.svg" alt="" style={{height:52,opacity:.1}}/>
        </div>
        <div style={{minHeight:220,padding:'36px 52px 36px 20px',display:'flex',alignItems:'flex-start',justifyContent:'space-between',borderBottom:`1px solid ${PL}`,borderLeft:`1px solid ${PL}`,borderRight:`1px solid ${PL}`,boxSizing:'border-box'}}>
          <div className="rv">
            <div style={{fontFamily:MN,fontWeight:300,fontSize:'clamp(40px,5.2vw,80px)',letterSpacing:'0.07em',lineHeight:0.95,color:'#000',whiteSpace:'nowrap'}}>WE BUILD</div>
            <div style={{fontFamily:MN,fontWeight:500,fontSize:'clamp(40px,5.2vw,80px)',letterSpacing:'0.07em',lineHeight:0.95,color:'#000',whiteSpace:'nowrap'}}>AI THAT</div>
            <div style={{fontFamily:MN,fontWeight:700,fontSize:'clamp(40px,5.2vw,80px)',letterSpacing:'0.07em',lineHeight:0.95,whiteSpace:'nowrap',
              background:`linear-gradient(90deg,#000 40%,${L} 60%,#000 80%)`,
              backgroundSize:'200% auto',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
              animation:'shimmer 4s linear infinite'}}>WORKS.</div>
          </div>
          <Tilt int={20} sx={{flexShrink:0}}>
            <div className="hv rv d2" style={{width:96,height:96,borderRadius:26,background:CD,border:`1.5px solid ${L2}`,display:'flex',alignItems:'center',justifyContent:'center',cursor:'none',transition:'background .2s'}}
              onClick={()=>document.getElementById('contact').scrollIntoView({block:'start'})}
              onMouseEnter={e=>e.currentTarget.style.background='rgb(208,245,185)'}
              onMouseLeave={e=>e.currentTarget.style.background=CD}>
              <svg width={38} height={38} viewBox="0 0 40 40" fill="none"><path d="M8 32L32 8M32 8H14M32 8V26" stroke={L2} strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </Tilt>
        </div>
        <div className="rvr" style={{minHeight:220,padding:'40px 28px 40px 18px',borderBottom:`1px solid ${PL}`,boxSizing:'border-box'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14}}>
            <Lbl ch="Services"/>
            <div className="hv" style={{width:20,height:20,borderRadius:5,background:'#000',display:'flex',alignItems:'center',justifyContent:'center',marginTop:-8,transition:'background .2s'}}
              onMouseEnter={e=>e.currentTarget.style.background=L2} onMouseLeave={e=>e.currentTarget.style.background='#000'}>
              <Arr sz={9} cl="#fff" sw={1.8}/>
            </div>
          </div>
          {['AI Strategy Consulting','Custom AI Development','Implementation & Integration','Managed AI Services','Training & Enablement'].map((s,i)=>(
            <div key={s} onMouseEnter={()=>setHovSvc(i)} onMouseLeave={()=>setHovSvc(null)} style={{padding:'8px 0',borderBottom:`1px solid ${PL}`,fontFamily:MN,fontSize:11,fontWeight:500,letterSpacing:'0.04em',color:hovSvc===i?'#000':'rgba(0,0,0,0.45)',display:'flex',alignItems:'center',justifyContent:'space-between',transition:'color .15s,padding-left .2s',paddingLeft:hovSvc===i?8:0}}>
              {s}<span style={{opacity:.25,fontSize:9}}>0{i+1}</span>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="rvl" style={{padding:'36px 18px 36px 28px',display:'flex',flexDirection:'column',justifyContent:'space-between',minHeight:0}}>
          <div>
            <Lbl ch="About"/>
            <div style={{fontFamily:SN,fontWeight:400,fontSize:13,lineHeight:1.8,color:'rgba(0,0,0,0.5)',marginBottom:28}}>
              alien.fi is a full-service partner for organizations looking beyond generic ai consulting firms and searching for a team that can plan, build, deploy, and improve AI systems with measurable business value. We support companies at every stage of AI maturity through ai strategy consulting, custom ai development, implementation, and managed ai services.
            </div>
            <div className="ld" style={{height:1,background:PL,marginBottom:28}}/>
            <Lbl ch="Engagement models"/>
            {['Project-Based','Retainer & Managed','Staff Augmentation','Strategic Advisory'].map(m=>(
              <div key={m} style={{display:'flex',alignItems:'center',gap:10,padding:'9px 0',borderBottom:`1px solid ${PL}`,fontFamily:MN,fontSize:11,fontWeight:500,color:'rgba(0,0,0,0.5)',letterSpacing:'0.04em'}}>
                <div style={{width:5,height:5,borderRadius:'50%',background:L2,flexShrink:0}}/>{m}
              </div>
            ))}
          </div>
          <div style={{marginTop:32}}>
            <Lbl ch="Location"/>
            <div style={{fontFamily:MN,fontSize:12,fontWeight:500,color:'rgba(0,0,0,0.4)',lineHeight:1.8}}>Austin, TX 78701<br/>Operating globally</div>
          </div>
        </div>

        <div style={{display:'flex',flexDirection:'column',position:'relative',minHeight:0,borderLeft:`1px solid ${PL}`,borderRight:`1px solid ${PL}`}}>
          {/* LOGO + COPY — fixed z-index layering */}
          <div style={{flex:1,display:'flex',flexDirection:'column',position:'relative',minHeight:0}}>
            {/* 3D logo — middle-right void between copy card & stats (clears frosted panel, sits above stats) */}
            <div style={{
              position:'absolute',
              left:'max(296px, 34%)',
              right:12,
              top:'5%',
              bottom:tweaks.showStats?96:28,
              zIndex:1,
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              pointerEvents:'none',
              /* visible: Spline height is vh-based and may extend past inset box; UI stays above (z:3) */
              overflow:'visible',
            }}>
              <div style={{
                width:'100%',
                height:'min(720px, max(420px, 48vh))',
                maxHeight:'min(760px, calc(100vh - 240px))',
                pointerEvents:'auto',
                filter:'drop-shadow(0 18px 56px rgba(0,0,0,0.12))',
              }}>
                <SplineHeroLogo />
              </div>
            </div>

            {/* Text — ABOVE logo (z:3) with frosted backing */}
            <div style={{position:'relative',zIndex:3,padding:'32px 52px 0 20px',pointerEvents:'none'}}>
              <div className="rv d1" style={{display:'inline-block',pointerEvents:'all'}}>
                <div style={{fontFamily:SN,fontSize:13.5,lineHeight:1.8,color:'rgba(0,0,0,0.55)',marginBottom:28,maxWidth:320,background:'rgba(243,243,255,0.75)',backdropFilter:'blur(12px)',WebkitBackdropFilter:'blur(12px)',borderRadius:12,padding:'14px 18px',boxShadow:'0 4px 24px rgba(0,0,0,0.06)'}}>
                  <p style={{margin:0}}>alien.fi is one of the ai consulting firms helping businesses turn strategy into production-ready systems through custom ai development, implementation, and managed ai services.</p>
                  <p style={{margin:'14px 0 0'}}>From first roadmap to long-term optimization, our ai strategy consulting and delivery model help organizations improve operations, decision-making, and customer experience with practical AI solutions.</p>
                </div>
              </div>
              <div className="rv d2" style={{display:'flex',gap:12,flexWrap:'wrap',pointerEvents:'all'}}>
                <Link href="/contact" className="hv" style={{display:'inline-flex',alignItems:'center',gap:8,background:'#000',color:'#fff',fontFamily:MN,fontWeight:600,fontSize:11,letterSpacing:'0.07em',padding:'13px 22px',borderRadius:9,textDecoration:'none',transition:'background .2s,transform .15s'}}
                  onMouseMove={e=>window.magnet(e.currentTarget,e,.25)}
                  onMouseLeave={e=>{e.currentTarget.style.background='#000';window.magnetReset(e.currentTarget);}}
                  onMouseEnter={e=>e.currentTarget.style.background=DK}
                >Start a project <Arr sz={9} cl={L} sw={2}/></Link>
                <Link href="/services" className="hv" style={{display:'inline-flex',alignItems:'center',gap:6,fontFamily:MN,fontWeight:500,fontSize:11,letterSpacing:'0.06em',color:'rgba(0,0,0,0.4)',textDecoration:'none',padding:'13px 4px',transition:'color .2s'}}
                  onMouseEnter={e=>e.currentTarget.style.color='#000'} onMouseLeave={e=>e.currentTarget.style.color='rgba(0,0,0,0.4)'}>See services →</Link>
              </div>
              <div className="rv d3" style={{marginTop:20,display:'flex',alignItems:'center',gap:8,fontFamily:MN,fontSize:9,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase',color:'rgba(0,0,0,0.25)',pointerEvents:'all'}}>
                <div style={{width:4,height:4,borderRadius:'50%',background:L2,animation:'dotPulse 1.8s ease-in-out infinite'}}/>Interact with the 3D logo
              </div>
            </div>

            {/* Stats — z:3, always on top */}
            {tweaks.showStats&&(
              <div className="rv d3" style={{marginTop:'auto',position:'relative',zIndex:3,display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:1,background:PL,borderTop:`1px solid ${PL}`,overflow:'hidden'}}>
                <StatCell val="20+" raw={20} lbl="Industries served"/>
                <StatCell val="3.1×" raw={31} lbl="Avg. first-year ROI"/>
                <StatCell val="62%" raw={62} lbl="Faster operations"/>
              </div>
            )}
          </div>
        </div>

        <div className="rvr" style={{padding:'36px 28px 36px 18px',display:'flex',flexDirection:'column',justifyContent:'space-between',minHeight:0}}>
          <div>
            <Lbl ch="Collaborate"/>
            <div style={{fontFamily:SN,fontSize:13,lineHeight:1.8,color:'rgba(0,0,0,0.5)',marginBottom:24}}>Partner with us to build next-generation AI infrastructure for your business.</div>
            <div className="ld" style={{height:1,background:PL,marginBottom:24}}/>
            <Lbl ch="Contact"/>
            <div style={{fontFamily:MN,fontSize:11,fontWeight:500,color:'rgba(0,0,0,0.45)',lineHeight:1.9,letterSpacing:'0.04em'}}>info@alien.fi<br/>sales@alien.fi<br/>+1 (800) 555-2946</div>
          </div>
          <div>
            <Lbl ch="Follow"/>
            <div style={{display:'flex',gap:10}}>
              {['M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25h6.927l4.262 5.613zm-1.161 17.52h1.833L7.084 4.126H5.117z',
                'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z',
                'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z'].map((d,i)=>(
                <div key={i} className="hv" style={{width:34,height:34,borderRadius:8,background:CD,display:'flex',alignItems:'center',justifyContent:'center',transition:'background .2s,transform .2s'}}
                  onMouseEnter={e=>{e.currentTarget.style.background=L;e.currentTarget.style.transform='scale(1.15)rotate(-8deg)';}}
                  onMouseLeave={e=>{e.currentTarget.style.background=CD;e.currentTarget.style.transform='scale(1)rotate(0)';}}>
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="black" opacity={.65}><path d={d}/></svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

/* ── HERO TABLET / MOBILE — edge-to-edge gutters, stacked (Spline + copy rails) ── */
function HeroNarrow({tweaks,layout}:{tweaks:typeof TWEAK_DEFAULTS;layout:"tablet"|"mobile"}){
  const [hovSvc,setHovSvc]=useState<number|null>(null);
  const g=sectionGutter(layout);
  /** Keeps typography off the framed vertical rules without a heavy gutter */
  const frameInset=layout==='mobile'?10:12;
  const headlineFs=layout==='mobile'?'clamp(28px,8vw,44px)':'clamp(34px,5vw,52px)';
  const svc=['AI Strategy Consulting','Custom AI Development','Implementation & Integration','Managed AI Services','Training & Enablement'];
  const socialPaths=['M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25h6.927l4.262 5.613zm-1.161 17.52h1.833L7.084 4.126H5.117z',
    'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z',
    'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z'];

  return(
    <section style={{paddingTop:60,background:`linear-gradient(180deg,${BG} 0%,${BG2} 100%)`,position:'relative'}}>
      <div style={{borderLeft:`1px solid ${PL}`,borderRight:`1px solid ${PL}`,marginLeft:g,marginRight:g,paddingLeft:frameInset,paddingRight:frameInset,boxSizing:'border-box'}}>

        <div className="rv" style={{padding:'30px 0 22px',borderBottom:`1px solid ${PL}`}}>
          <div style={{fontFamily:MN,fontWeight:300,fontSize:headlineFs,letterSpacing:'0.07em',lineHeight:0.98,color:'#000'}}>WE BUILD</div>
          <div style={{fontFamily:MN,fontWeight:500,fontSize:headlineFs,letterSpacing:'0.07em',lineHeight:0.98,color:'#000'}}>AI THAT</div>
          <div style={{fontFamily:MN,fontWeight:700,fontSize:headlineFs,letterSpacing:'0.07em',lineHeight:0.98,
            background:`linear-gradient(90deg,#000 40%,${L} 60%,#000 80%)`,backgroundSize:'200% auto',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
            animation:'shimmer 4s linear infinite'}}>WORKS.</div>
        </div>

        <div style={{padding:'22px 0 8px',borderBottom:`1px solid ${PL}`}}>
          <div style={{width:'100%',maxWidth:layout==='tablet'?560:440,margin:'0 auto',height:layout==='mobile'?'min(38vh,320px)':'min(42vh,380px)',minHeight:236,filter:'drop-shadow(0 14px 40px rgba(0,0,0,0.1))'}}>
            <SplineHeroLogo />
          </div>
        </div>

        <div className="rv d1" style={{padding:'26px 0 28px'}}>
          <div style={{fontFamily:SN,fontSize:13.5,lineHeight:1.8,color:'rgba(0,0,0,0.55)',marginBottom:22,background:'rgba(243,243,255,0.85)',backdropFilter:'blur(12px)',WebkitBackdropFilter:'blur(12px)',borderRadius:14,padding:'16px 18px',boxShadow:'0 4px 24px rgba(0,0,0,0.06)',border:`1px solid ${PL}`}}>
            <p style={{margin:0}}>alien.fi is one of the ai consulting firms helping businesses turn strategy into production-ready systems through custom ai development, implementation, and managed ai services.</p>
            <p style={{margin:'14px 0 0'}}>From first roadmap to long-term optimization, our ai strategy consulting and delivery model help organizations improve operations, decision-making, and customer experience with practical AI solutions.</p>
          </div>
          <div style={{display:'flex',gap:12,flexWrap:'wrap',alignItems:'center'}}>
            <Link href="/contact" className="hv" style={{display:'inline-flex',alignItems:'center',gap:8,background:'#000',color:'#fff',fontFamily:MN,fontWeight:600,fontSize:11,letterSpacing:'0.07em',padding:'13px 20px',borderRadius:10,textDecoration:'none'}}>
              Start a project <Arr sz={9} cl={L} sw={2}/>
            </Link>
            <Link href="/services" className="hv" style={{display:'inline-flex',alignItems:'center',gap:6,fontFamily:MN,fontWeight:500,fontSize:11,letterSpacing:'0.06em',color:'rgba(0,0,0,0.45)',textDecoration:'none',padding:'13px 2px'}}>See services →</Link>
          </div>
          <div style={{marginTop:18,display:'flex',alignItems:'center',gap:8,fontFamily:MN,fontSize:9,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase',color:'rgba(0,0,0,0.25)'}}>
            <div style={{width:4,height:4,borderRadius:'50%',background:L2,animation:'dotPulse 1.8s ease-in-out infinite'}}/>Interact with the 3D logo
          </div>
        </div>

        {tweaks.showStats&&(
          <div className="rv d2" style={{display:'grid',gridTemplateColumns:layout==='mobile'?'1fr':'repeat(3,1fr)',gap:1,background:PL,borderTop:`1px solid ${PL}`,overflow:'hidden'}}>
            <StatCell val="20+" raw={20} lbl="Industries served"/>
            <StatCell val="3.1×" raw={31} lbl="Avg. first-year ROI"/>
            <StatCell val="62%" raw={62} lbl="Faster operations"/>
          </div>
        )}

        <div style={{padding:'28px 0',borderTop:`1px solid ${PL}`}} className="rv d2">
          <Lbl ch="Services"/>
          <div style={{marginTop:4,borderRadius:14,border:`1px solid ${PL}`,overflow:'hidden'}}>
            {svc.map((s,i)=>(
              <Link key={s} href="/services" style={{padding:'12px 14px',borderBottom:i<svc.length-1?`1px solid ${PL}`:'none',fontFamily:MN,fontSize:layout==='mobile'?10:11,fontWeight:500,letterSpacing:'0.03em',
                color:hovSvc===i?'#000':'rgba(0,0,0,0.52)',transition:'background .15s,padding-left .15s',
                paddingLeft:hovSvc===i?18:14,background:hovSvc===i?`rgba(150,238,82,0.12)`:'transparent',display:'flex',justifyContent:'space-between',gap:12,textDecoration:'none'}}
                onTouchStart={()=>setHovSvc(i)} onMouseEnter={()=>setHovSvc(i)} onMouseLeave={()=>setHovSvc(null)}>
                <span>{s}</span><span style={{opacity:.22,fontSize:9,flexShrink:0}}>{String(i+1).padStart(2,'0')}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="rv d3" style={{padding:'26px 0',borderTop:`1px solid ${PL}`,display:'grid',gridTemplateColumns:layout==='tablet'?'1fr 1fr':'1fr',gap:layout==='tablet'?20:26}}>
          <div>
            <Lbl ch="About"/>
            <div style={{fontFamily:SN,fontSize:13,lineHeight:1.75,color:'rgba(0,0,0,0.5)',marginBottom:22}}>
              alien.fi is a full-service partner for organizations looking beyond generic ai consulting firms and searching for a team that can plan, build, deploy, and improve AI systems with measurable business value. We support companies at every stage of AI maturity through ai strategy consulting, custom ai development, implementation, and managed ai services.
            </div>
            <div className="ld" style={{height:1,background:PL,marginBottom:18}}/>
            <Lbl ch="Engagement models"/>
            {['Project-Based','Retainer & Managed','Staff Augmentation','Strategic Advisory'].map(m=>(
              <div key={m} style={{display:'flex',alignItems:'center',gap:10,padding:'8px 0',borderBottom:`1px solid ${PL}`,fontFamily:MN,fontSize:11,fontWeight:500,color:'rgba(0,0,0,0.5)',letterSpacing:'0.04em'}}>
                <div style={{width:5,height:5,borderRadius:'50%',background:L2,flexShrink:0}}/>{m}
              </div>
            ))}
            <div style={{marginTop:22}}>
              <Lbl ch="Location"/>
              <div style={{fontFamily:MN,fontSize:12,fontWeight:500,color:'rgba(0,0,0,0.42)',lineHeight:1.8}}>Austin, TX 78701<br/>Operating globally</div>
            </div>
          </div>
          <div style={{borderTop:layout==='tablet'?'none':`1px solid ${PL}`,paddingTop:layout==='tablet'?0:26}}>
            <Lbl ch="Collaborate"/>
            <div style={{fontFamily:SN,fontSize:13,lineHeight:1.75,color:'rgba(0,0,0,0.5)',marginBottom:22}}>
              Partner with us to build next-generation AI infrastructure for your business.
            </div>
            <div className="ld" style={{height:1,background:PL,marginBottom:18}}/>
            <Lbl ch="Contact"/>
            <div style={{fontFamily:MN,fontSize:11,fontWeight:500,color:'rgba(0,0,0,0.45)',lineHeight:1.9,letterSpacing:'0.04em',marginBottom:22}}>info@alien.fi<br/>sales@alien.fi<br/>+1 (800) 555-2946</div>
            <Lbl ch="Follow"/>
            <div style={{display:'flex',gap:10}}>
              {socialPaths.map((d,i)=>(
                <div key={i} className="hv" style={{width:36,height:36,borderRadius:9,background:CD,border:`1px solid ${PL}`,display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="black" opacity={.6}><path d={d}/></svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Hero({tweaks}:{tweaks:typeof TWEAK_DEFAULTS}){
  const layout=useLandingLayout();
  if(layout==='desktop')return<HeroDesktop tweaks={tweaks}/>;
  return<HeroNarrow tweaks={tweaks} layout={layout}/>;
}

/* ── TICKER ── */
function Ticker(){
  const words=['AI Strategy','Custom ML Models','NLP & LLMs','Computer Vision','MLOps','Managed AI','RAG Systems','Fraud Detection','Predictive Analytics','Knowledge Bases','Responsible AI','End-to-End Delivery'];
  const layout=useLandingLayout();
  const g=sectionGutter(layout);
  return(
    <div style={{overflow:'hidden',borderTop:`1px solid ${PL}`,borderBottom:`1px solid ${PL}`,background:BG,padding:`13px ${g}px`}}>
      <div style={{display:'flex',gap:64,animation:'ticker 32s linear infinite',whiteSpace:'nowrap'}}>
        {[...words,...words].map((w,i)=>(
          <span key={i} style={{fontFamily:MN,fontWeight:500,fontSize:11,letterSpacing:'0.1em',textTransform:'uppercase',opacity:.28,flexShrink:0,display:'flex',alignItems:'center',gap:10}}>
            <span style={{width:5,height:5,borderRadius:'50%',background:L2,display:'inline-block',flexShrink:0}}/>{w}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── SERVICES ── */
function Services(){
  const layout=useLandingLayout();
  const [hov,setHov]=useState(null);
  const gv=sectionGutter(layout);
  const pv=sectionVPad(layout);
  const svcs=[
    {n:'01',href:'/services#strategy-consulting',t:'AI Strategy\nConsulting',d:'Identify high-value use cases, assess readiness, define priorities, and create a roadmap tied to ROI and business goals.',tags:['High-value use cases','Readiness assessment','Priorities & roadmap','ROI & goals']},
    {n:'02',href:'/services#custom-ai-development',t:'Custom AI\nDevelopment',d:'Build tailored machine learning, NLP, LLM, computer vision, predictive analytics, and workflow automation systems for real operational use.',tags:['Machine learning & NLP','LLM & computer vision','Predictive analytics','Workflow automation']},
    {n:'03',href:'/services#implementation-integration',t:'Implementation\n& Integration',d:'Deploy AI into production with APIs, cloud infrastructure, data pipelines, and legacy system integration.',tags:['APIs & cloud','Data pipelines','Legacy integration','Production deploy']},
    {n:'04',href:'/services#managed-ai-services',t:'Managed AI\nServices',d:'Monitor, optimize, retrain, secure, and support production AI systems as data, business needs, and environments change.',tags:['Monitor & optimize','Retrain & secure','Production support','Evolving needs']},
    {n:'05',href:'/services#training-enablement',t:'Training &\nEnablement',d:'Help internal teams adopt AI through workshops, documentation, operational playbooks, and change management support.',tags:['Workshops','Documentation','Operational playbooks','Change management']},
  ];
  return(
    <section id="services" style={{background:`linear-gradient(180deg,${BG2},${BG})`,padding:`${pv}px ${gv}px`,position:'relative',zIndex:2}}>
      <div style={{padding:'0',marginBottom:layout==='mobile'?36:48,display:'flex',flexDirection:layout==='mobile'?'column':'row',alignItems:layout==='mobile'?'flex-start':'flex-end',justifyContent:'space-between',gap:layout==='mobile'?12:0}}>
        <div className="rv"><Link href="/services" className="hv" style={{display:'inline-block',textDecoration:'none'}}><Lbl ch="What we do"/></Link><Ttl ch="SERVICES"/></div>
        <div className="rv d2" style={{fontFamily:SN,fontSize:13,color:'rgba(0,0,0,0.38)',maxWidth:layout==='mobile'?360:280,textAlign:layout==='mobile'?'left':'right',lineHeight:1.6}}>Our services cover the full lifecycle of AI adoption, from ai strategy consulting to custom ai development and long-term managed ai services.</div>
      </div>
      <div className="rv d1" style={{display:'grid',gridTemplateColumns:gridCols(layout,5,2),gap:1,background:PL,borderRadius:layout==='mobile'?16:20,overflow:'hidden',border:`1px solid ${PL}`}}>
        {svcs.map((s,i)=>(
          <Tilt key={s.n} int={8} sx={{height:'100%'}}>
            <div onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)} style={{background:hov===i?`linear-gradient(160deg,rgb(228,244,210),${BG2})`:`linear-gradient(160deg,${BG},${BG2})`,padding:'32px 26px 28px',display:'flex',flexDirection:'column',gap:18,transition:'background .3s',height:'100%',boxShadow:hov===i?'inset 0 0 0 1.5px rgba(150,238,82,0.35)':'none'}}>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <span style={{fontFamily:MN,fontWeight:700,fontSize:10,letterSpacing:'0.12em',color:L2}}>{s.n}</span>
                <Link
                  href={s.href}
                  className="hv"
                  style={{width:20,height:20,borderRadius:5,background:hov===i?'#000':PL,display:'flex',alignItems:'center',justifyContent:'center',transition:'background .2s,transform .2s',transform:hov===i?'rotate(0deg)':'rotate(45deg)',textDecoration:'none'}}
                >
                  <Arr sz={8} cl={hov===i?'#fff':'rgba(0,0,0,0.4)'} sw={1.8}/>
                </Link>
              </div>
              <div style={{fontFamily:MN,fontWeight:600,fontSize:13,letterSpacing:'0.04em',lineHeight:1.45,whiteSpace:'pre-line'}}>{s.t}</div>
              <div style={{fontFamily:SN,fontSize:11.5,lineHeight:1.65,color:'rgba(0,0,0,0.48)',flexGrow:1}}>{s.d}</div>
              <div style={{display:'flex',flexDirection:'column',gap:6}}>
                {s.tags.map(t=>(
                  <Link key={t} href={s.href} className="hv" style={{display:'flex',alignItems:'center',gap:7,fontFamily:MN,fontSize:10,fontWeight:500,letterSpacing:'0.05em',color:'rgba(0,0,0,0.38)',textDecoration:'none'}}>
                    <div style={{width:4,height:4,borderRadius:'50%',background:hov===i?L2:PL,flexShrink:0,transition:'background .2s'}}/>{t}
                  </Link>
                ))}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}

/* ── PROCESS (dark, card stacks under services) ── */
function Process(){
  const layout=useLandingLayout();
  const gv=sectionGutter(layout);
  const pv=sectionVPad(layout);
  const steps=[
    {n:'01',t:'Discover',sub:'',d:'We map goals, workflows, constraints, systems, and data so the right opportunities are clear from the start.',time:''},
    {n:'02',t:'Design',sub:'',d:'We shape the roadmap, solution architecture, delivery plan, and success metrics before major build work begins.',time:''},
    {n:'03',t:'Deploy',sub:'',d:'We deliver custom ai development, testing, integration, and launch with usability, reliability, and governance in mind.',time:''},
    {n:'04',t:'Improve',sub:'',d:'We continue with managed ai services, monitoring, retraining, reporting, and ongoing optimization after go-live.',time:''},
  ];
  return(
    <section id="process" style={{background:DK,padding:`${pv}px ${gv}px`,position:'relative',zIndex:3,borderRadius:'24px 24px 0 0',marginTop:-24}}>
      <div style={{padding:'0'}}>
        <div style={{display:'flex',flexDirection:layout==='mobile'?'column':'row',alignItems:layout==='mobile'?'flex-start':'flex-end',justifyContent:'space-between',marginBottom:layout==='mobile'?36:52,gap:layout==='mobile'?12:0}}>
          <div className="rv"><Lbl ch="How we work" lt/><Ttl ch="THE PROCESS" lt/></div>
          <div className="rv d2" style={{fontFamily:SN,fontSize:13,color:'rgba(255,255,255,0.28)',maxWidth:layout==='mobile'?360:280,textAlign:layout==='mobile'?'left':'right',lineHeight:1.6}}>A four-phase engagement designed to reduce risk, accelerate execution, and make ai consulting firms accountable to real business outcomes.</div>
        </div>
        <div className="rv d1" style={{display:'grid',gridTemplateColumns:gridCols(layout,4,2),gap:1,background:'rgba(255,255,255,0.06)',borderRadius:layout==='mobile'?16:20,overflow:'hidden'}}>
          {steps.map((s,i)=>(
            <Tilt key={s.n} int={6} sx={{height:'100%'}}>
              <div style={{background:'rgb(21,24,43)',padding:layout==='mobile'?'28px 20px':'36px 28px',display:'flex',flexDirection:'column',gap:16,height:'100%'}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                  <span style={{fontFamily:MN,fontWeight:700,fontSize:10,letterSpacing:'0.12em',color:L2}}>{s.n}</span>
                  {s.time?<Chip ch={s.time} bg='rgba(150,238,82,0.12)' cl={L} sx={{fontSize:9}}/>:<span/>}
                </div>
                <div>
                  <div style={{fontFamily:MN,fontWeight:700,fontSize:22,letterSpacing:'0.04em',color:'#fff',lineHeight:1}}>{s.t}</div>
                  {s.sub?<div style={{fontFamily:MN,fontWeight:500,fontSize:11,letterSpacing:'0.06em',color:L2,marginTop:4}}>{s.sub}</div>:null}
                </div>
                <div style={{height:1,background:'rgba(255,255,255,0.06)'}}/>
                <div style={{fontFamily:SN,fontSize:12.5,lineHeight:1.7,color:'rgba(255,255,255,0.42)',flexGrow:1}}>{s.d}</div>
                {i<3&&<div style={{display:'flex',justifyContent:'flex-end',paddingTop:8}}><Arr sz={12} cl='rgba(255,255,255,0.15)' sw={2}/></div>}
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── DIFFERENTIATORS (light, slides over dark) ── */
function Differentiators(){
  const layout=useLandingLayout();
  const gv=sectionGutter(layout);
  const pv=sectionVPad(layout);
  const [hov,setHov]=useState(null);
  const items=[
    {n:'01',t:'Strategy through execution',d:'We combine ai strategy consulting, custom ai development, deployment, and managed ai services in one delivery model.'},
    {n:'02',t:'ROI-first delivery',d:'Every engagement is tied to operational value, measurable outcomes, and clear decision criteria.'},
    {n:'03',t:'Built for complex environments',d:'We support organizations working with legacy systems, fragmented data, compliance requirements, and high-stakes workflows.'},
    {n:'04',t:'Long-term ownership',d:'We stay involved after launch to monitor performance, improve models, and help teams scale AI responsibly.'},
  ];
  return(
    <section id="why-us" style={{background:BG,padding:`${pv}px ${gv}px`,position:'relative',zIndex:4,borderRadius:'24px 24px 0 0',marginTop:-24}}>
      <div style={{padding:'0',marginBottom:layout==='mobile'?36:48,display:'flex',flexDirection:layout==='mobile'?'column':'row',alignItems:layout==='mobile'?'flex-start':'flex-end',justifyContent:'space-between',gap:layout==='mobile'?12:0}}>
        <div className="rv"><Lbl ch="Why alien.fi"/><Ttl ch="WHAT SETS US APART"/></div>
        <div className="rv d2" style={{fontFamily:SN,fontSize:13,color:'rgba(0,0,0,0.38)',maxWidth:layout==='mobile'?360:280,textAlign:layout==='mobile'?'left':'right',lineHeight:1.6}}>Many ai consulting firms can talk about transformation. Fewer can deliver AI that performs reliably inside real business operations.</div>
      </div>
      <div className="rv d1" style={{display:'grid',gridTemplateColumns:gridCols(layout,3,2),gap:1,background:PL,borderRadius:layout==='mobile'?16:20,overflow:'hidden',border:`1px solid ${PL}`}}>
        {items.map((item,i)=>(
          <Tilt key={item.n} int={5} sx={{height:'100%'}}>
            <div onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)} style={{background:hov===i?`linear-gradient(140deg,rgb(220,244,200),${BG2})`:`linear-gradient(140deg,${BG},${BG2})`,padding:'36px 36px',transition:'background .28s',display:'flex',flexDirection:'column',gap:14,height:'100%',boxShadow:hov===i?`inset 0 0 0 1.5px ${L}33`:'none'}}>
              <span style={{fontFamily:MN,fontWeight:700,fontSize:10,letterSpacing:'0.12em',color:L2}}>{item.n}</span>
              <div style={{fontFamily:MN,fontWeight:600,fontSize:14,letterSpacing:'0.04em',lineHeight:1.35,transition:'color .2s',color:hov===i?'#000':'rgba(0,0,0,0.85)'}}>{item.t}</div>
              <div style={{height:1,background:hov===i?L2:PL,transition:'background .3s'}}/>
              <div style={{fontFamily:SN,fontSize:12.5,lineHeight:1.7,color:'rgba(0,0,0,0.48)'}}>{item.d}</div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}

/* ── INDUSTRIES ── */
function Industries(){
  const layout=useLandingLayout();
  const gv=sectionGutter(layout);
  const pv=sectionVPad(layout);
  const [hov,setHov]=useState(null);
  const list=[
    {name:'Healthcare',detail:'Diagnostic AI, EHR integration, patient operations, prior auth automation.'},
    {name:'Financial Services',detail:'Fraud detection, credit risk, AML, underwriting intelligence.'},
    {name:'Insurance',detail:'Claims automation, fraud scoring, policy servicing, document extraction.'},
    {name:'Legal',detail:'Contract analysis, legal research, e-discovery, document workflows.'},
    {name:'Retail & E-commerce',detail:'Personalization, demand forecasting, pricing, inventory optimization.'},
    {name:'Manufacturing',detail:'Predictive maintenance, quality control, scheduling, production visibility.'},
    {name:'Logistics',detail:'Route optimization, fleet intelligence, warehouse automation, ETA prediction.'},
    {name:'Education',detail:'Student success prediction, personalized learning, admissions and admin workflows.'},
    {name:'Real Estate',detail:'Property valuation, lead qualification, market intelligence, client automation.'},
    {name:'Government',detail:'Citizen service automation, infrastructure planning, benefits fraud detection.'},
    {name:'Marketing Agencies',detail:'Campaign analytics, content workflows, lead scoring, attribution support.'},
    {name:'Tech Startups',detail:'Product copilots, churn prediction, growth analytics, internal AI tools.'},
  ];
  return(
    <section id="industries" style={{background:`linear-gradient(180deg,${BG},${BG2})`,padding:`${pv}px ${gv}px`,position:'relative',zIndex:5,borderRadius:'24px 24px 0 0',marginTop:-24}}>
      <div style={{padding:'0',marginBottom:layout==='mobile'?36:48,display:'flex',flexDirection:layout==='mobile'?'column':'row',alignItems:layout==='mobile'?'flex-start':'flex-end',justifyContent:'space-between',gap:layout==='mobile'?12:0}}>
        <div className="rv"><Link href="/industries" className="hv" style={{display:'inline-block',textDecoration:'none'}}><Lbl ch="Who we help"/></Link><Ttl ch="INDUSTRIES"/></div>
        <div className="rv d2" style={{fontFamily:SN,fontSize:13,color:'rgba(0,0,0,0.38)',maxWidth:layout==='mobile'?360:280,textAlign:layout==='mobile'?'left':'right',lineHeight:1.6}}>We support organizations across sectors where speed, accuracy, compliance, and operational efficiency matter most.</div>
      </div>
      <div className="rv d1" style={{display:'grid',gridTemplateColumns:gridCols(layout,4,2),gap:1,background:PL,borderRadius:layout==='mobile'?16:20,overflow:'hidden',border:`1px solid ${PL}`}}>
        {list.map((ind,i)=>(
          <Link key={ind.name} href="/industries" className="hv" onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)}
            style={{background:hov===i?`linear-gradient(135deg,rgb(218,244,200),${BG2})`:`linear-gradient(135deg,${BG},${BG2})`,padding:'24px 28px',transition:'background .22s',position:'relative',zIndex:hov===i?2:1}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:hov===i?10:0}}>
              <div style={{fontFamily:MN,fontWeight:600,fontSize:13,letterSpacing:'0.04em',color:hov===i?'#000':'rgba(0,0,0,0.72)',transition:'color .2s'}}>{ind.name}</div>
              <div style={{width:18,height:18,borderRadius:4,background:'#000',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,opacity:hov===i?1:0,transform:hov===i?'scale(1)':'scale(0.6)',transition:'opacity .2s,transform .2s'}}>
                <Arr sz={8} cl="#fff" sw={1.8}/>
              </div>
            </div>
            <div style={{fontFamily:SN,fontSize:11,lineHeight:1.6,color:'rgba(0,0,0,0.4)',maxHeight:hov===i?60:0,overflow:'hidden',transition:'max-height .32s ease,opacity .28s',opacity:hov===i?1:0}}>{ind.detail}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ── CASE STUDY (dark, stacks over industries) ── */
function CaseStudy(){
  const layout=useLandingLayout();
  const gv=sectionGutter(layout);
  const pv=sectionVPad(layout);
  const metrics=[
    {val:'62%',lbl:'Faster claims processing',sub:'14 days → 5.3 days'},
    {val:'47%',lbl:'Fraud loss reduction',sub:'$3.2M saved annually'},
    {val:'38%',lbl:'CSAT improvement',sub:'Customer satisfaction'},
    {val:'3.1×',lbl:'First-year ROI',sub:'Full deployment in 9 months'},
  ];
  return(
    <section id="case-studies" style={{background:DK,padding:`${pv}px ${gv}px`,position:'relative',zIndex:6,borderRadius:'24px 24px 0 0',marginTop:-24}}>
      <div style={{padding:'0'}}>
        <div style={{display:'flex',flexDirection:layout==='mobile'?'column':'row',alignItems:layout==='mobile'?'flex-start':'flex-end',justifyContent:'space-between',marginBottom:layout==='mobile'?36:52,gap:layout==='mobile'?12:0}}>
          <div className="rv"><Link href="/case-studies" className="hv" style={{display:'inline-block',textDecoration:'none'}}><Lbl ch="Case study" lt/></Link><Ttl ch="REAL RESULTS." lt/></div>
          <div className="rv d2" style={{fontFamily:SN,fontSize:13,color:'rgba(255,255,255,0.28)',maxWidth:layout==='mobile'?360:300,textAlign:layout==='mobile'?'left':'right',lineHeight:1.65}}>Regional insurance company, 500+ employees, 9-month transformation delivered through ai strategy consulting, custom ai development, and managed ai services.</div>
        </div>
        <div className="rv d1" style={{display:'grid',gridTemplateColumns:gridCols(layout,4,2),gap:1,background:'rgba(255,255,255,0.05)',borderRadius:layout==='mobile'?16:20,overflow:'hidden',marginBottom:20}}>
          {metrics.map(m=>(
            <Tilt key={m.val} int={8} sx={{height:'100%'}}>
              <div style={{background:'rgb(21,24,43)',padding:layout==='mobile'?'28px 22px':'36px 28px',height:'100%'}}>
                <div style={{fontFamily:MN,fontWeight:700,fontSize:layout==='mobile'?'clamp(28px,8vw,40px)':52,letterSpacing:'0.02em',color:L,lineHeight:1,marginBottom:10}}>{m.val}</div>
                <div style={{fontFamily:MN,fontWeight:600,fontSize:12,letterSpacing:'0.06em',color:'rgba(255,255,255,0.65)',marginBottom:4}}>{m.lbl}</div>
                <div style={{fontFamily:SN,fontSize:11,color:'rgba(255,255,255,0.28)'}}>{m.sub}</div>
              </div>
            </Tilt>
          ))}
        </div>
        <div className="rv d2" style={{display:'grid',gridTemplateColumns:gridCols(layout,4,2),gap:1,background:'rgba(255,255,255,0.04)',borderRadius:16,overflow:'hidden',marginBottom:20}}>
          {[{p:'Phase 1',n:'Claims Automation',d:'NLP-powered extraction automated 70% of routine claims intake and routing.'},{p:'Phase 2',n:'Fraud Detection AI',d:'Real-time machine learning flagged suspicious patterns before payouts.'},{p:'Phase 3',n:'Customer Experience AI',d:'A conversational assistant handled policy inquiries and status updates 24/7.'},{p:'Phase 4',n:'Unified Data Platform',d:'Siloed systems were integrated into a centralized data pipeline for real-time visibility.'}].map((p,i)=>(
            <div key={p.p} style={{background:'rgba(255,255,255,0.02)',padding:layout==='mobile'?'20px 18px':'24px 24px'}}>
              <Chip ch={p.p} bg='rgba(150,238,82,0.1)' cl={L} sx={{marginBottom:12}}/>
              <div style={{fontFamily:MN,fontWeight:600,fontSize:12,color:'rgba(255,255,255,0.75)',marginBottom:8,letterSpacing:'0.03em',lineHeight:1.35}}>{p.n}</div>
              <div style={{fontFamily:SN,fontSize:11.5,lineHeight:1.65,color:'rgba(255,255,255,0.3)'}}>{p.d}</div>
            </div>
          ))}
        </div>
        <div className="rv d3" style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.06)',borderRadius:16,padding:layout==='mobile'?'28px 22px':layout==='tablet'?'32px 32px':'36px 44px',display:'flex',flexDirection:layout==='mobile'?'column':'row',alignItems:'flex-start',gap:layout==='mobile'?16:32}}>
          <div style={{fontSize:layout==='mobile'?42:56,lineHeight:1,color:L,fontFamily:'Georgia,serif',flexShrink:0,marginTop:-8}}>"</div>
          <div>
            <div style={{fontFamily:MN,fontWeight:400,fontSize:15,lineHeight:1.75,letterSpacing:'0.03em',color:'rgba(255,255,255,0.65)',maxWidth:700}}>The best ai consulting firms do more than launch systems — they create solutions that perform in production, earn trust internally, and improve the numbers that matter.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── SOLUTIONS ── */
function Solutions(){
  const layout=useLandingLayout();
  const gv=sectionGutter(layout);
  const pv=sectionVPad(layout);
  const [hov,setHov]=useState(null);
  const items=[
    {tag:'Customer communication',t:'AI Customer Service Assistant',d:'Handle FAQs, support requests, routing, and customer communication at scale.'},
    {tag:'Forms & contracts',t:'Intelligent Document Processing',d:'Extract, classify, and validate data from forms, contracts, invoices, and records.'},
    {tag:'Forecast outcomes',t:'Predictive Analytics Dashboards',d:'Forecast demand, churn, revenue, and operational outcomes using historical business data.'},
    {tag:'Explainable alerts',t:'Fraud Detection Systems',d:'Detect anomalies and suspicious behavior in real time with explainable alerts.'},
    {tag:'Answer-ready docs',t:'Knowledge Bases & RAG Systems',d:'Turn internal documentation into searchable, answer-ready AI systems.'},
    {tag:'Domain-specific agents',t:'AI Agents & Copilots',d:'Automate multi-step workflows with domain-specific agents embedded into business operations.'},
  ];
  return(
    <section id="solutions" style={{background:`linear-gradient(180deg,${BG2},${BG})`,padding:`${pv}px ${gv}px`,position:'relative',zIndex:7,borderRadius:'24px 24px 0 0',marginTop:-24}}>
      <div style={{padding:'0',marginBottom:layout==='mobile'?36:48,display:'flex',flexDirection:layout==='mobile'?'column':'row',alignItems:layout==='mobile'?'flex-start':'flex-end',justifyContent:'space-between',gap:layout==='mobile'?12:0}}>
        <div className="rv"><Link href="/solutions" className="hv" style={{display:'inline-block',textDecoration:'none'}}><Lbl ch="Ready-to-deploy"/></Link><Ttl ch="SOLUTIONS"/></div>
        <div className="rv d2" style={{fontFamily:SN,fontSize:13,color:'rgba(0,0,0,0.38)',maxWidth:layout==='mobile'?360:280,textAlign:layout==='mobile'?'left':'right',lineHeight:1.6}}>Pre-built AI products for faster time-to-value, plus custom ai development when the use case requires a tailored solution.</div>
      </div>
      <div className="rv d1" style={{display:'grid',gridTemplateColumns:gridCols(layout,4,2),gap:1,background:PL,borderRadius:layout==='mobile'?16:20,overflow:'hidden',border:`1px solid ${PL}`}}>
        {items.map((item,i)=>(
          <Tilt key={item.t} int={7} sx={{height:'100%'}}>
            <div onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)} style={{background:hov===i?`linear-gradient(150deg,rgb(220,244,200),${BG2})`:`linear-gradient(150deg,${BG},${BG2})`,padding:'30px 26px',display:'flex',flexDirection:'column',gap:11,transition:'background .22s',height:'100%',boxShadow:hov===i?`inset 0 0 0 1.5px ${L}44`:'none'}}>
              <Chip ch={item.tag}/>
              <div style={{fontFamily:MN,fontWeight:600,fontSize:12.5,letterSpacing:'0.04em',lineHeight:1.35}}>{item.t}</div>
              <div style={{fontFamily:SN,fontSize:12,lineHeight:1.65,color:'rgba(0,0,0,0.44)',flexGrow:1}}>{item.d}</div>
              <Link href="/solutions" className="hv" style={{display:'flex',alignItems:'center',gap:5,fontFamily:MN,fontSize:10,fontWeight:600,letterSpacing:'0.06em',color:hov===i?L2:'rgba(0,0,0,0.3)',transition:'color .2s',marginTop:4,textDecoration:'none'}}>
                Learn more <Arr sz={8} cl={hov===i?L2:'rgba(0,0,0,0.3)'} sw={1.8}/>
              </Link>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}

/* ── ENGAGEMENT MODELS ── */
function EngagementModels(){
  const layout=useLandingLayout();
  const gv=sectionGutter(layout);
  const pv=sectionVPad(layout);
  const [hov,setHov]=useState(null);
  const models=[
    {t:'Project-Based',r:'$25K – $500K',d:'Clearly scoped projects for businesses that need ai strategy consulting or custom ai development with fixed deliverables and defined success metrics.',f:['Fixed scope & budget','Milestone delivery','2–24 weeks','Clear deliverables']},
    {t:'Retainer & Managed',r:'Monthly retainer',d:'Your dedicated AI team without the cost of building one in-house, ideal for continuous monitoring, reporting, retraining, and managed ai services.',f:['24/7 monitoring','Monthly reporting','Model retraining','Priority support']},
    {t:'Staff Augmentation',r:'Per specialist',d:'Embed AI specialists inside your team for faster execution, smoother collaboration, and hands-on knowledge transfer.',f:['Embedded specialists','Knowledge transfer','Flexible duration','Your tools & process']},
    {t:'Strategic Advisory',r:'$10K – $50K/mo',d:'Senior-level ai strategy consulting for leadership teams shaping AI roadmaps, governance, investment priorities, and risk strategy.',f:['CAIO-level access','Board-ready output','Risk & ethics review','Quarterly sessions']},
  ];
  return(
    <section id="engagements" style={{background:BG,padding:`${pv}px ${gv}px`,position:'relative',zIndex:8,borderRadius:'24px 24px 0 0',marginTop:-24}}>
      <div style={{padding:'0',marginBottom:layout==='mobile'?36:48,display:'flex',flexDirection:layout==='mobile'?'column':'row',alignItems:layout==='mobile'?'flex-start':'flex-end',justifyContent:'space-between',gap:layout==='mobile'?12:0}}>
        <div className="rv"><Link href="/contact#about-you" className="hv" style={{display:'inline-block',textDecoration:'none'}}><Lbl ch="How to work with us"/></Link><Ttl ch="ENGAGEMENT MODELS"/></div>
        <div className="rv d2" style={{fontFamily:SN,fontSize:13,color:'rgba(0,0,0,0.38)',maxWidth:280,textAlign:layout==='mobile'?'left':'right',lineHeight:1.6}}>From a sprint to a multi-year partnership.</div>
      </div>
      <div className="rv d1" style={{display:'grid',gridTemplateColumns:gridCols(layout,4,2),gap:1,background:PL,borderRadius:layout==='mobile'?16:20,overflow:'hidden',border:`1px solid ${PL}`}}>
        {models.map((m,i)=>(
          <div key={m.t} onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)} style={{background:hov===i?DK:`linear-gradient(160deg,${BG},${BG2})`,padding:'36px 28px',display:'flex',flexDirection:'column',gap:16,transition:'background .4s'}}>
            <div>
              <div style={{fontFamily:MN,fontWeight:700,fontSize:16,letterSpacing:'0.04em',color:hov===i?'#fff':'#000',transition:'color .3s'}}>{m.t}</div>
              <div style={{fontFamily:MN,fontWeight:600,fontSize:11,color:hov===i?L2:'rgba(0,0,0,0.35)',letterSpacing:'0.06em',marginTop:4,transition:'color .3s'}}>{m.r}</div>
            </div>
            <div style={{height:1,background:hov===i?'rgba(255,255,255,0.08)':PL,transition:'background .3s'}}/>
            <div style={{fontFamily:SN,fontSize:12,lineHeight:1.7,color:hov===i?'rgba(255,255,255,0.45)':'rgba(0,0,0,0.45)',transition:'color .3s',flexGrow:1}}>{m.d}</div>
            <div style={{display:'flex',flexDirection:'column',gap:7}}>
              {m.f.map(f=>(
                <div key={f} style={{display:'flex',alignItems:'center',gap:8,fontFamily:MN,fontSize:10,fontWeight:500,letterSpacing:'0.05em',color:hov===i?'rgba(255,255,255,0.4)':'rgba(0,0,0,0.38)',transition:'color .3s'}}>
                  <div style={{width:4,height:4,borderRadius:'50%',background:hov===i?L2:PL,flexShrink:0,transition:'background .3s'}}/>{f}
                </div>
              ))}
            </div>
            <Link href="/contact#about-you" className="hv" style={{display:'flex',alignItems:'center',gap:6,fontFamily:MN,fontSize:10,fontWeight:600,letterSpacing:'0.08em',textTransform:'uppercase',color:hov===i?L:'rgba(0,0,0,0.3)',transition:'color .3s',marginTop:4,textDecoration:'none'}}>
              Get started <Arr sz={9} cl={hov===i?L:'rgba(0,0,0,0.3)'} sw={1.8}/>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── CTA ── */
function CTA(){
  const layout=useLandingLayout();
  const gv=sectionGutter(layout);
  const pv=sectionVPad(layout);
  const [hovBtn,setHovBtn]=useState(false);
  const [form,setForm]=useState({name:'',company:'',email:'',budget:'',project:''});
  const [touched,setTouched]=useState({name:false,company:false,email:false,budget:false,project:false});
  const [submitted,setSubmitted]=useState(false);
  const [status,setStatus]=useState('');

  const errors={
    name:!form.name.trim()?'Full name is required.':!/^[A-Za-z][A-Za-z\s'.-]{1,59}$/.test(form.name.trim())?'Use letters only for name (no numbers).':'',
    company:form.company.trim().length<2?'Company name is required.':'',
    email:!form.email.trim()?'Work email is required.':!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())?'Enter a valid email format.':'',
    budget:!form.budget.trim()?'Budget is required.':!/[0-9]/.test(form.budget)?'Budget should include a numeric range.':'',
    project:form.project.trim().length<20?'Please add at least 20 characters about your project.':'',
  };
  const hasErrors=Object.values(errors).some(Boolean);
  const showErr=(k)=>Boolean((submitted||touched[k])&&errors[k]);
  const inp=(k,ph)=>(
    <input
      value={form[k]}
      onChange={e=>setForm(v=>({...v,[k]:e.target.value}))}
      onBlur={()=>setTouched(v=>({...v,[k]:true}))}
      placeholder={ph}
      className="hv"
      style={{width:'100%',padding:'12px 14px',background:'rgba(255,255,255,0.05)',border:`1px solid ${showErr(k)?'rgba(255,110,110,0.9)':'rgba(255,255,255,0.1)'}`,borderRadius:8,outline:'none',fontFamily:MN,fontSize:12,color:'#fff',letterSpacing:'0.03em',transition:'border-color .2s'}}
      onFocus={e=>e.target.style.borderColor=showErr(k)?'rgba(255,110,110,0.9)':'rgba(150,238,82,0.5)'}
    />
  );

  const submit=(e)=>{
    e.preventDefault();
    setSubmitted(true);
    setTouched({name:true,company:true,email:true,budget:true,project:true});
    if(hasErrors){
      setStatus('Please fix highlighted fields before sending.');
      return;
    }
    setStatus('Looks good. Message is ready to send.');
  };
  return(
    <section id="contact" style={{padding:`0 ${gv}px`,position:'relative',zIndex:9}}>
      <div className="rv" style={{background:DK,borderRadius:'20px 20px 0 0',padding:layout==='mobile'?`${Math.max(48,pv-12)}px ${sectionGutter(layout)+4}px`:layout==='tablet'?`${pv}px 36px`:`${pv}px 60px`,display:'grid',gridTemplateColumns:layout==='desktop'?'1fr 1fr':'1fr',gap:layout==='mobile'?40:layout==='tablet'?48:80,alignItems:'start'}}>
        <div>
          <Lbl ch="Let's build together" lt/>
          <div style={{fontFamily:MN,fontWeight:700,fontSize:'clamp(40px,4vw,64px)',letterSpacing:'0.04em',lineHeight:1.0,color:'#fff',marginBottom:24}}>READY TO<br/><span style={{color:L}}>BUILD?</span></div>
          <div style={{fontFamily:SN,fontSize:14,lineHeight:1.75,color:'rgba(255,255,255,0.36)',marginBottom:40,maxWidth:380}}>Whether you need ai strategy consulting, custom ai development, or long-term managed ai services, alien.fi helps businesses move faster with clarity, speed, and accountability. Tell us your goals and we'll recommend the right next step.</div>
          <div style={{display:'flex',flexDirection:'column',gap:16}}>
            {[['Austin, TX 78701'],['info@alien.fi'],['+1 (800) 555-2946']].map(([l])=>(
              <div key={l} style={{display:'flex',alignItems:'center',gap:12,fontFamily:MN,fontSize:12,fontWeight:500,letterSpacing:'0.04em',color:'rgba(255,255,255,0.35)'}}>
                <div style={{width:6,height:6,borderRadius:'50%',background:L2,flexShrink:0}}/>{l}
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:14}}>
          <div style={{display:'grid',gridTemplateColumns:layout==='desktop'?'1fr 1fr':'1fr',gap:12}}>
            {[['name','Full name','Your name'],['company','Company','Company name'],['email','Email','you@company.com'],['budget','Budget','$25K – $500K+']].map(([k,lb,ph])=>(
              <div key={k}>
                <div style={{fontFamily:MN,fontSize:10,fontWeight:600,letterSpacing:'0.1em',textTransform:'uppercase',color:'rgba(255,255,255,0.28)',marginBottom:7}}>{lb}</div>
                {inp(k,ph)}
                {showErr(k)?<div style={{marginTop:6,fontFamily:SN,fontSize:11,color:'rgba(255,130,130,0.95)'}}>{errors[k]}</div>:null}
              </div>
            ))}
          </div>
          <div>
            <div style={{fontFamily:MN,fontSize:10,fontWeight:600,letterSpacing:'0.1em',textTransform:'uppercase',color:'rgba(255,255,255,0.28)',marginBottom:7}}>Tell us about your project</div>
            <textarea rows={4} value={form.project} placeholder="What are you looking to build or improve?" className="hv" style={{width:'100%',padding:'12px 14px',background:'rgba(255,255,255,0.05)',border:`1px solid ${showErr('project')?'rgba(255,110,110,0.9)':'rgba(255,255,255,0.1)'}`,borderRadius:8,outline:'none',resize:'none',fontFamily:MN,fontSize:12,color:'#fff',letterSpacing:'0.03em',transition:'border-color .2s'}}
              onChange={e=>setForm(v=>({...v,project:e.target.value}))}
              onFocus={e=>e.target.style.borderColor=showErr('project')?'rgba(255,110,110,0.9)':'rgba(150,238,82,0.5)'}
              onBlur={()=>setTouched(v=>({...v,project:true}))}/>
            {showErr('project')?<div style={{marginTop:6,fontFamily:SN,fontSize:11,color:'rgba(255,130,130,0.95)'}}>{errors.project}</div>:null}
            <div style={{marginTop:8,fontFamily:SN,fontSize:11,lineHeight:1.55,color:'rgba(255,255,255,0.28)',maxWidth:520}}>Share your company, goals, timeline, and budget, and we'll recommend the best engagement model for your project.</div>
          </div>
          {status?<div style={{fontFamily:SN,fontSize:12,color:hasErrors?'rgba(255,130,130,0.95)':'rgba(177,238,82,0.95)'}}>{status}</div>:null}
          <button type="submit" className="hv" onMouseEnter={()=>setHovBtn(true)} onMouseLeave={()=>setHovBtn(false)}
            onMouseMove={e=>window.magnet(e.currentTarget,e,.2)} onMouseOut={e=>window.magnetReset(e.currentTarget)}
            style={{background:hovBtn?L2:L,color:'#000',border:'none',borderRadius:10,padding:'16px 28px',fontFamily:MN,fontWeight:700,fontSize:12,letterSpacing:'0.08em',textTransform:'uppercase',cursor:'none',display:'flex',alignItems:'center',justifyContent:'center',gap:10,transition:'background .2s,transform .15s',transform:hovBtn?'translateY(-2px)':'none'}}>
            Send message <Arr sz={11} cl="#000" sw={2.5}/>
          </button>
        </form>
      </div>
    </section>
  );
}

/* ── FOOTER ── */
function Footer(){
  const layout=useLandingLayout();
  const gv=sectionGutter(layout);
  return(
    <footer style={{background:DK,padding:`0 ${gv}px`,borderTop:'1px solid rgba(255,255,255,0.05)',position:'relative',zIndex:9}}>
      <div style={{padding:layout==='mobile'?'40px 4px 28px':layout==='tablet'?'44px 12px 36px':'48px 9px 32px',display:'grid',gridTemplateColumns:layout==='desktop'?'1.4fr 1fr 1fr 1fr':layout==='tablet'?'1fr 1fr':'1fr',gap:layout==='mobile'?32:40}}>
        <div>
          <img src="/assets/logo-with-font.svg" alt="Alien.fi" style={{height:18,filter:'invert(1)',marginBottom:16}}/>
          <div style={{fontFamily:SN,fontSize:12,lineHeight:1.7,color:'rgba(255,255,255,0.28)',marginBottom:20}}>A full-service AI consultancy.<br/>Austin, TX — Operating globally.</div>
          <div style={{display:'flex',gap:10}}>
            {['M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25h6.927l4.262 5.613z','M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z'].map((d,i)=>(
              <div key={i} className="hv" style={{width:32,height:32,borderRadius:7,background:'rgba(255,255,255,0.06)',display:'flex',alignItems:'center',justifyContent:'center',transition:'background .2s,transform .2s'}}
                onMouseEnter={e=>{e.currentTarget.style.background='rgba(150,238,82,0.18)';e.currentTarget.style.transform='scale(1.12)';}}
                onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,0.06)';e.currentTarget.style.transform='scale(1)';}}>
                <svg width={13} height={13} viewBox="0 0 24 24" fill="rgba(255,255,255,0.5)"><path d={d}/></svg>
              </div>
            ))}
          </div>
        </div>
        {[{h:'Company',links:['About','Team','Careers','Writing','Case Studies']},{h:'Services',links:['AI Strategy','Custom AI Dev','Implementation','Managed Services','Training']},{h:'Contact',links:['info@alien.fi','sales@alien.fi','support@alien.fi','+1 (800) 555-2946']}].map(({h,links})=>(
          <div key={h}>
            <div style={{fontFamily:MN,fontWeight:700,fontSize:10,letterSpacing:'0.14em',textTransform:'uppercase',color:'rgba(255,255,255,0.2)',marginBottom:18}}>{h}</div>
            {links.map(l=>(
              <div key={l} className="hv" style={{fontFamily:MN,fontSize:12,fontWeight:500,letterSpacing:'0.04em',color:'rgba(255,255,255,0.38)',marginBottom:10,transition:'color .2s,padding-left .18s'}}
                onMouseEnter={e=>{e.currentTarget.style.color='rgba(255,255,255,0.88)';e.currentTarget.style.paddingLeft='6px';}}
                onMouseLeave={e=>{e.currentTarget.style.color='rgba(255,255,255,0.38)';e.currentTarget.style.paddingLeft='0';}}>{l}</div>
            ))}
          </div>
        ))}
      </div>
      <div style={{padding:layout==='mobile'?'18px 4px':layout==='tablet'?'18px 12px':'20px 9px',borderTop:'1px solid rgba(255,255,255,0.05)',display:'flex',flexDirection:layout==='mobile'?'column':'row',alignItems:layout==='mobile'?'flex-start':'center',justifyContent:'space-between',gap:layout==='mobile'?10:0}}>
        <span style={{fontFamily:MN,fontSize:11,fontWeight:500,letterSpacing:'0.04em',color:'rgba(255,255,255,0.18)'}}>© 2024 Alien.fi. All rights reserved.</span>
        <span style={{fontFamily:MN,fontSize:11,fontWeight:500,letterSpacing:'0.08em',color:'rgba(255,255,255,0.18)'}}>alien.fi</span>
      </div>
    </footer>
  );
}

/* ── APP ── */
export default function LandingPageClient(){
  const [loaded,setLoaded]=useState(false);
  useEffect(()=>{
    if(loaded)setTimeout(()=>{window.initRv&&window.initRv();document.querySelectorAll('.rv,.rvl,.rvr,.ld').forEach(el=>{if(el.getBoundingClientRect().top<window.innerHeight*.95)el.classList.add('in');});},120);
  },[loaded]);
  return(
    <>
      <LandingChrome />
      {!loaded&&<Loader onDone={()=>setLoaded(true)}/>}
      <LandingLayoutProvider>
        <div style={{opacity:loaded?1:0,transition:'opacity .5s',pointerEvents:loaded?'all':'none'}}>
          <Nav/><Hero tweaks={TWEAK_DEFAULTS}/><Ticker/>
          <Services/><Process/><Differentiators/><Industries/>
          <CaseStudy/><Solutions/><EngagementModels/><CTA/><Footer/>
        </div>
      </LandingLayoutProvider>
    </>
  );
}
