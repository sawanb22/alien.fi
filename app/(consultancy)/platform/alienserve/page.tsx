import PlatformAlienServePageClient from "@/components/consultancy/pages/PlatformAlienServePageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retail AI Platform | Hospitality AI Solutions | Restaurant AI | AlienServe",
  description:
    "AlienServe is a retail AI platform for stores, hospitality groups, and restaurant operators. Deploy personalization, demand, service, and operations modules in weeks.",
  keywords: ["retail AI platform", "hospitality AI solutions", "restaurant AI"],
};

export default function PlatformAlienServePage() {
  return <PlatformAlienServePageClient />;
}
