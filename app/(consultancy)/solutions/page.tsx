import SolutionsPageClient from "@/components/consultancy/pages/SolutionsPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise AI Solutions | AI Solutions for Business and Custom AI Solutions | alien.fi",
  description:
    "alien.fi delivers enterprise AI solutions for business. Configure proven AI products in weeks with managed operations or custom AI solutions. Fixed-fee.",
  keywords: ["enterprise AI solutions", "AI solutions for business", "custom AI solutions"],
};

export default function SolutionsPage() {
  return <SolutionsPageClient />;
}
