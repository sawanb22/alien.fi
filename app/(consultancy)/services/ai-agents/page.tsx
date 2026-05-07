import type { Metadata } from "next";
import ServiceAIAgentsPageClient from "@/components/consultancy/pages/ServiceAIAgentsPageClient";

export const metadata: Metadata = {
  title: "AI Agent Development Services | AI Agents for Business | alien.fi",
  description:
    "alien.fi builds custom ai agent development services and pre-built ai agents for business processes. Autonomous, production-grade ai agents for business. Fixed-fee.",
  keywords: [
    "ai agent development services",
    "ai agents for business",
    "ai agents for business processes",
    "ai agent development",
    "pre-built ai agents",
  ],
};

export default function ServiceAIAgentsPage() {
  return <ServiceAIAgentsPageClient />;
}
