import type { Metadata } from "next";
import ServiceCustomAIDevelopmentPageClient from "@/components/consultancy/pages/ServiceCustomAIDevelopmentPageClient";

export const metadata: Metadata = {
  title:
    "Custom AI Development Company | ML & NLP Development Services | alien.fi",
  description:
    "alien.fi is a leading custom ai development company building machine learning, NLP, and computer vision solutions. Fixed-fee. Production-ready. Measurable ROI.",
};

export default function ServiceCustomAIDevelopmentPage() {
  return <ServiceCustomAIDevelopmentPageClient />;
}

