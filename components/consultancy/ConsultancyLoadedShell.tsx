"use client";

import { useState, type ReactNode } from "react";
import { MiniLoader } from "@/components/consultancy/consultancy-ui";

export function ConsultancyLoadedShell({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && (
        <MiniLoader onDone={() => setLoaded(true)} label={label} />
      )}
      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity .5s",
          pointerEvents: loaded ? "all" : "none",
        }}
      >
        {children}
      </div>
    </>
  );
}
