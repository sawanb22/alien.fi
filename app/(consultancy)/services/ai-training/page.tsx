import type { Metadata } from "next";
import ServiceAITrainingPageClient from "@/components/consultancy/pages/ServiceAITrainingPageClient";

export const metadata: Metadata = {
  title: "AI Training Services | AI Workforce Training and Executive AI Workshop | alien.fi",
  description:
    "alien.fi delivers hands-on ai training, ai workforce training, enterprise executive ai workshop programs, and ai upskilling programs for teams at every level. Fixed-fee.",
};

export default function ServiceAITrainingPage() {
  return <ServiceAITrainingPageClient />;
}
