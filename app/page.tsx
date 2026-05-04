import type { Metadata } from "next";
import LandingPageClient from "./landing/LandingPageClient";
import { LandingRouteShell } from "./landing/LandingRouteShell";

export const metadata: Metadata = {
  title: "Alien.fi — AI Consultancy",
  description:
    "Full-service AI consultancy — strategy, custom development, implementation, and managed services.",
};

export default function HomePage() {
  return (
    <LandingRouteShell>
      <LandingPageClient />
    </LandingRouteShell>
  );
}
