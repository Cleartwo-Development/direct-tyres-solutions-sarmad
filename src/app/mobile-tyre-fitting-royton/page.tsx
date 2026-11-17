import type { Metadata } from "next";
import RoytonPage from "@/components/locations/RoytonPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Royton | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Royton. Workshop-grade mobile tyre changes direct to your location within 20–35 minutes.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-royton`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-royton" fallback={<LocationJsonLd areaLabel="Royton" slug="royton" />} />
      <RoytonPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-royton", fallbackMetadata);
}
