"use client";

import { useEffect } from "react";

export function LandingChrome() {
  useEffect(() => {
    const dot = document.getElementById("c-dot");
    const ring = document.getElementById("c-ring");
    if (!dot || !ring) {
      return;
    }

    let mx = -200;
    let my = -200;
    let rx = -200;
    let ry = -200;
    const lp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = `${mx}px`;
      dot.style.top = `${my}px`;
    };
    const onDown = () => document.body.classList.add("cc");
    const onUp = () => document.body.classList.remove("cc");
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (t?.closest("a,button,[role=button],input,textarea,.hv")) {
        document.body.classList.add("ch");
      } else {
        document.body.classList.remove("ch");
      }
    };

    let raf = 0;
    const animR = () => {
      rx = lp(rx, mx, 0.1);
      ry = lp(ry, my, 0.1);
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      raf = requestAnimationFrame(animR);
    };

    const obs = new IntersectionObserver(
      (en) => {
        en.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -40px 0px" },
    );

    window.initRv = () => {
      document.querySelectorAll(".rv,.rvl,.rvr,.ld").forEach((el) => obs.observe(el));
    };

    window.magnet = (el: HTMLElement, e: MouseEvent, strength = 0.35) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      el.style.transform = `translate(${dx}px,${dy}px)`;
    };

    window.magnetReset = (el: HTMLElement | null) => {
      if (el) el.style.transform = "translate(0,0)";
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(animR);

    const onLoad = () => setTimeout(() => window.initRv?.(), 500);
    window.addEventListener("load", onLoad);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      window.removeEventListener("load", onLoad);
      cancelAnimationFrame(raf);
      delete window.initRv;
      delete window.magnet;
      delete window.magnetReset;
    };
  }, []);

  return (
    <>
      <div id="c-dot" />
      <div id="c-ring" />
    </>
  );
}
