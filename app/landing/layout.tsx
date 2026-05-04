import type { Metadata } from "next";
import { LandingRouteShell } from "./LandingRouteShell";

export const metadata: Metadata = {
  title: "Alien.fi — AI Consultancy",
  description:
    "Full-service AI consultancy — strategy, custom development, implementation, and managed services.",
};

export default function LandingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <LandingRouteShell>{children}</LandingRouteShell>;
}
