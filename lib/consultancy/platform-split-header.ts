import type { CSSProperties } from "react";
import type { LandingLayoutMode } from "@/lib/landing-layout-context";
import { SN } from "@/lib/consultancy/tokens";

/** Row: title block left, supporting copy right (desktop), stacked on mobile. Avoids 320px + 1fr grid overlap on large `Ttl` headings. */
export function platformSplitHeaderRow(layout: LandingLayoutMode, marginBottom: number): CSSProperties {
  return {
    marginBottom,
    display: "flex",
    flexDirection: layout === "mobile" ? "column" : "row",
    justifyContent: "space-between",
    alignItems: layout === "mobile" ? "flex-start" : "flex-end",
    gap: layout === "mobile" ? 20 : 40,
    width: "100%",
    boxSizing: "border-box",
  };
}

export function platformSplitHeaderTitleCol(layout: LandingLayoutMode): CSSProperties {
  return {
    flex: layout === "desktop" ? "1 1 45%" : "1 1 auto",
    minWidth: 0,
    maxWidth: layout === "desktop" ? "min(52%, 560px)" : "100%",
  };
}

export function platformSplitHeaderBlurbCol(
  layout: LandingLayoutMode,
  tone: "onDark" | "onLight",
  options?: { maxWidthPx?: number; fontSize?: number; color?: string },
): CSSProperties {
  const cap = options?.maxWidthPx ?? 440;
  const fs = options?.fontSize ?? 14;
  const defaultColor = tone === "onDark" ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.55)";
  return {
    flex: layout === "desktop" ? `0 1 ${cap}px` : "1 1 auto",
    minWidth: 0,
    maxWidth: layout === "desktop" ? cap : "100%",
    fontFamily: SN,
    fontSize: fs,
    lineHeight: 1.7,
    color: options?.color ?? defaultColor,
    textAlign: layout === "mobile" ? "left" : "right",
    alignSelf: layout === "mobile" ? "stretch" : "flex-end",
  };
}
