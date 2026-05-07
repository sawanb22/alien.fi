import type { Metadata } from "next";
import { LandingRouteShell } from "./LandingRouteShell";

export const metadata: Metadata = {
  title:
    "AI Consulting Firms | Custom AI Development & AI Strategy Consulting | alien.fi",
  description:
    "alien.fi is one of the ai consulting firms helping businesses with ai strategy consulting, custom ai development, implementation, and managed ai services across healthcare, finance, legal, retail, logistics, and more.",
};

export default function LandingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <LandingRouteShell>{children}</LandingRouteShell>;
}
