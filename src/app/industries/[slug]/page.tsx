import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailedIndustryPage from "@/components/DetailedIndustryPage";
import { getIndustry, industries } from "@/lib/industries";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return { title: industry.name, description: industry.tagline };
}

export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();
  return <DetailedIndustryPage industry={industry} />;
}
