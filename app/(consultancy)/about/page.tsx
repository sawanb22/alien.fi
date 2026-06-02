import AboutPageClient from "@/components/consultancy/pages/AboutPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About alien.fi | AI Consultancy That Ships",
  description:
    "Founded in 2018, alien.fi is an AI consultancy that leaves clients more capable — not more dependent. Outcomes over optics, senior teams, honest about hard.",
  keywords: [
    "alien.fi AI consultancy",
    "about alien.fi",
    "ai consultancy",
    "ai consulting experts in usa",
  ],
};

export default function AboutPage() {
  return <AboutPageClient />;
}
