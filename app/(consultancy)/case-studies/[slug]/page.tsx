import { CaseStudyTemplatePage } from "@/components/consultancy/case-study/CaseStudyTemplatePage";
import { MeridianCaseStudyPage } from "@/components/consultancy/case-study/MeridianCaseStudyPage";
import { CASE_STUDY_TEMPLATES, CASE_STUDY_TEMPLATE_SLUGS } from "@/lib/consultancy/studies";
import { notFound } from "next/navigation";

const ALL_SLUGS = ["meridian-insurance", ...CASE_STUDY_TEMPLATE_SLUGS];

export function generateStaticParams() {
  return ALL_SLUGS.map((slug) => ({ slug }));
}

export default async function CaseStudySlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug === "meridian-insurance") {
    return <MeridianCaseStudyPage />;
  }
  const study = CASE_STUDY_TEMPLATES[slug];
  if (!study) {
    notFound();
  }
  return <CaseStudyTemplatePage study={study} />;
}
