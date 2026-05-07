import type { Metadata } from "next";
import ServiceManagedAIPageClient from "@/components/consultancy/pages/ServiceManagedAIPageClient";

export const metadata: Metadata = {
  title:
    "Managed AI Services | AI Model Monitoring and AI Maintenance | alien.fi",
  description:
    "alien.fi's managed ai services cover 24/7 ai model monitoring, ai maintenance, model retraining, and performance optimization. Monthly retainer. Fixed SLA.",
};

export default function ServiceManagedAIPage() {
  return <ServiceManagedAIPageClient />;
}

