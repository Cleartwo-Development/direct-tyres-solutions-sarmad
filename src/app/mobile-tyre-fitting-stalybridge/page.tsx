import type { Metadata } from "next";
import StalybridgePage from "@/components/locations/StalybridgePage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Stalybridge | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Stalybridge. Rapid home, workplace and roadside tyre replacement covering valley routes around the A635 and A6018.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-stalybridge`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-stalybridge" fallback={<LocationJsonLd areaLabel="Stalybridge" slug="stalybridge" />} />
      <StalybridgePage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-stalybridge", fallbackMetadata);
}
