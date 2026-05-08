import CaseStudiesPageClient from "@/components/consultancy/pages/CaseStudiesPageClient";
import { Suspense } from 'react';

export default function CaseStudiesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CaseStudiesPageClient />
    </Suspense>
  );
}
