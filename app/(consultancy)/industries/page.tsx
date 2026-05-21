import IndustriesPageClient from "@/components/consultancy/pages/IndustriesPageClient";
import { Suspense } from "react";

export default function IndustriesPage() {
  return (
    <Suspense fallback={null}>
      <IndustriesPageClient />
    </Suspense>
  );
}
