import PlatformAlienCarePageClient from "@/components/consultancy/pages/PlatformAlienCarePageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare AI Platform | Clinical AI Platform | AlienCare",
  description:
    "AlienCare is a healthcare AI platform and clinical ai platform for hospitals and health systems. HIPAA-ready modules, fast deployment, and fixed-fee rollout.",
};

export default function PlatformAlienCarePage() {
  return <PlatformAlienCarePageClient />;
}

