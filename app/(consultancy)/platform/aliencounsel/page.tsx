import type { Metadata } from "next";
import PlatformAlienCounselPageClient from "@/components/consultancy/pages/PlatformAlienCounselPageClient";

export const metadata: Metadata = {
  title: "Legal AI Platform | AI for Law Firms | AlienCounsel",
  description:
    "AlienCounsel is a legal AI platform for law firms and in-house teams. Secure legal AI for research, drafting, review, and legal workflows.",
};

export default function PlatformAlienCounselPage() {
  return <PlatformAlienCounselPageClient />;
}

