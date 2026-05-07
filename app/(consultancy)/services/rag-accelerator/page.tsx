import type { Metadata } from "next";
import ServiceRAGAcceleratorPageClient from "@/components/consultancy/pages/ServiceRAGAcceleratorPageClient";

export const metadata: Metadata = {
  title:
    "RAG Development Services | Custom RAG Development and RAG Application Development | alien.fi",
  description:
    "alien.fi's RAG development services take you from zero to production-grade RAG in 4 to 8 weeks. Custom RAG development, rag application development services, fixed-fee.",
};

export default function ServiceRAGAcceleratorPage() {
  return <ServiceRAGAcceleratorPageClient />;
}

