import type { Metadata } from "next";
import ServiceAICopilotDevelopmentPageClient from "@/components/consultancy/pages/ServiceAICopilotDevelopmentPageClient";

export const metadata: Metadata = {
  title:
    "AI Copilot Development Services | Enterprise AI Copilot and Custom AI Copilot | alien.fi",
  description:
    "alien.fi builds custom ai copilot development services for enterprises. Purpose-engineered enterprise ai copilot systems embedded into Teams, Slack, and your workflows. Fixed-fee.",
  keywords: [
    "ai copilot development services",
    "enterprise ai copilot",
    "custom ai copilot development services",
  ],
};

export default function ServiceAICopilotDevelopmentPage() {
  return <ServiceAICopilotDevelopmentPageClient />;
}
