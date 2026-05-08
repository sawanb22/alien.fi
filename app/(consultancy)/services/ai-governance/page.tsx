import type { Metadata } from "next";
import ServiceAIGovernancePageClient from "@/components/consultancy/pages/ServiceAIGovernancePageClient";

export const metadata: Metadata = {
  title: "AI Governance Consulting | Enterprise AI Governance and AI Risk Management Framework | alien.fi",
  description:
    "alien.fi delivers ai governance consulting for enterprises. Build your enterprise ai governance program and ai risk management framework before regulators build it for you. Fixed-fee.",
};

export default function ServiceAIGovernancePage() {
  return <ServiceAIGovernancePageClient />;
}
