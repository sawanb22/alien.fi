"use client";

import type { ReactNode } from "react";
import { createContext, useContext, useSyncExternalStore } from "react";
import { OT } from "@/lib/consultancy/tokens";

export type LandingLayoutMode = "desktop" | "tablet" | "mobile";

function subscribeLandingLayout(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};
  const w = () => onStoreChange();
  const m1 = window.matchMedia("(min-width: 1120px)");
  const m2 = window.matchMedia("(min-width: 768px)");
  m1.addEventListener("change", w);
  m2.addEventListener("change", w);
  return () => {
    m1.removeEventListener("change", w);
    m2.removeEventListener("change", w);
  };
}

function getLandingLayoutSnapshot(): LandingLayoutMode {
  if (typeof window === "undefined") return "desktop";
  const iw = window.innerWidth;
  if (iw >= 1120) return "desktop";
  if (iw >= 768) return "tablet";
  return "mobile";
}

const LandingLayoutContext = createContext<LandingLayoutMode>("desktop");

export function LandingLayoutProvider({ children }: { children: ReactNode }) {
  const mode = useSyncExternalStore(subscribeLandingLayout, getLandingLayoutSnapshot, () => "desktop");
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
