import type { Metadata } from "next";
import PlatformAlienvaultPageClient from "@/components/consultancy/pages/PlatformAlienvaultPageClient";

export const metadata: Metadata = {
  title: "Finance AI Platform | Banking AI Platform | AlienVault",
  description:
    "AlienVault is a finance AI platform and banking AI platform for regulated teams. Deploy secure modules for fraud, credit, compliance, and operations.",
};

export default function PlatformAlienvaultPage() {
  return <PlatformAlienvaultPageClient />;
}
