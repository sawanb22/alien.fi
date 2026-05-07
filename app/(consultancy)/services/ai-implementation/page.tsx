import type { Metadata } from "next";
import ServiceAIImplementationPageClient from "@/components/consultancy/pages/ServiceAIImplementationPageClient";

export const metadata: Metadata = {
  title:
    "AI Implementation Services | API Deployment & AI Integration | alien.fi",
  description:
    "alien.fi delivers end-to-end AI implementation services including API deployment, ai system integration, and legacy system ai integration. Production-ready. Fixed-fee.",
};

export default function ServiceAIImplementationPage() {
  return <ServiceAIImplementationPageClient />;
}

