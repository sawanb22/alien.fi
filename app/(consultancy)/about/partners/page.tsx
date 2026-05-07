import PartnersPageClient from "@/components/consultancy/pages/PartnersPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners | alien.fi AI Consultancy",
  description:
    "alien.fi is an ai consultancy built on deep ecosystem partnerships. Meet the platforms, cloud providers, and research partners behind our work.",
  keywords: [
    "alien.fi AI consultancy",
    "ai consultancy",
    "about alien.fi",
    "ai consulting experts in usa",
  ],
};

export default function PartnersPage() {
  return <PartnersPageClient />;
}

