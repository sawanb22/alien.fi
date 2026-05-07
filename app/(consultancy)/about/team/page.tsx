import OurTeamPageClient from "@/components/consultancy/pages/OurTeamPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About alien.fi | AI Consultancy & AI Consulting Experts in USA",
  description:
    "alien.fi is a specialized ai consultancy. Our team of ai consulting experts in usa delivers small, senior-only teams with no handoffs. Meet the team.",
  keywords: [
    "alien.fi AI consultancy",
    "ai consultancy",
    "about alien.fi",
    "ai consulting experts in usa",
  ],
};

export default function OurTeamPage() {
  return <OurTeamPageClient />;
}

