import type { Metadata } from "next";
import ManchesterPage from "@/components/locations/ManchesterPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Manchester | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting across Greater Manchester. Emergency roadside and driveway tyre replacement in 20–35 minutes.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-manchester`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-manchester" fallback={<LocationJsonLd areaLabel="Manchester" slug="manchester" />} />
      <ManchesterPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-manchester", fallbackMetadata);
}
