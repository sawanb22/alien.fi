"use client";

import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { OT } from "@/lib/consultancy/tokens";

export type LandingLayoutMode = "desktop" | "tablet" | "mobile";

function readLandingLayout(): LandingLayoutMode {
  const iw = window.innerWidth;
  if (iw >= 1120) return "desktop";
  if (iw >= 768) return "tablet";
  return "mobile";
}

const LandingLayoutContext = createContext<LandingLayoutMode>("desktop");

/** SSR and first client paint use desktop; real breakpoint applies after mount to avoid hydration mismatches. */
export function LandingLayoutProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<LandingLayoutMode>("desktop");

  useEffect(() => {
    const update = () => setMode(readLandingLayout());
    update();
    const m1 = window.matchMedia("(min-width: 1120px)");
    const m2 = window.matchMedia("(min-width: 768px)");
    m1.addEventListener("change", update);
    m2.addEventListener("change", update);
    return () => {
      m1.removeEventListener("change", update);
      m2.removeEventListener("change", update);
    };
  }, []);

  return <LandingLayoutContext.Provider value={mode}>{children}</LandingLayoutContext.Provider>;
}

export function useLandingLayout() {
  return useContext(LandingLayoutContext);
}

export function sectionGutter(mode: LandingLayoutMode) {
  return mode === "desktop" ? OT : mode === "tablet" ? 28 : 16;
}

export function sectionVPad(mode: LandingLayoutMode) {
  return mode === "mobile" ? 56 : mode === "tablet" ? 68 : 80;
}

export function gridCols(mode: LandingLayoutMode, desktopCols: number, tabletCols: number) {
  if (mode === "desktop") return `repeat(${desktopCols},1fr)`;
  if (mode === "tablet") return `repeat(${tabletCols},1fr)`;
  return "1fr";
}
