"use client";

import type { ReactNode } from "react";
import { LandingLayoutProvider } from "@/lib/landing-layout-context";

export function ConsultancyResponsiveProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <LandingLayoutProvider>{children}</LandingLayoutProvider>;
}
