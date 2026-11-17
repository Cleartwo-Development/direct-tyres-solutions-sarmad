import type { Metadata } from "next";
import GortonPage from "@/components/locations/GortonPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Gorton | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Gorton, East Manchester. Fast roadside and doorstep tyre replacement within 20–35 minutes.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-gorton`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-gorton" fallback={<LocationJsonLd areaLabel="Gorton" slug="gorton" />} />
      <GortonPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-gorton", fallbackMetadata);
}
