"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";

export const SPLINE_HERO_SCENE =
  "https://prod.spline.design/sPlzj4eFQNILyF-a/scene.splinecode";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: 180,
        background: "rgba(243,243,255,0.45)",
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 10,
        letterSpacing: "normal",
        textTransform: "uppercase",
        color: "rgba(0,0,0,0.32)",
      }}
    >
      Loading 3D…
    </div>
  ),
});

/** Spline-hosted 3D; `Scene 1` ref for optional future use only. */
export function SplineHeroLogo() {
  const sceneObjectRef = useRef(null);

  const onLoad = (spline: { findObjectByName?: (name: string) => unknown }) => {
    try {
      const o = spline?.findObjectByName?.("Scene 1");
      sceneObjectRef.current = o ?? null;
    } catch {
      sceneObjectRef.current = null;
    }
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Spline scene={SPLINE_HERO_SCENE} onLoad={onLoad} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
