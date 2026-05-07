import type { Metadata } from "next";
import PlatformAlienSupplyPageClient from "@/components/consultancy/pages/PlatformAlienSupplyPageClient";

export const metadata: Metadata = {
  title:
    "Manufacturing AI Platform | Predictive Maintenance AI | AI for Manufacturing | AlienSupply",
  description:
    "AlienSupply is a manufacturing AI platform for industrial teams. Deploy predictive maintenance AI, quality, planning, and operations modules in weeks.",
};

export default function PlatformAlienSupplyPage() {
  return <PlatformAlienSupplyPageClient />;
}

