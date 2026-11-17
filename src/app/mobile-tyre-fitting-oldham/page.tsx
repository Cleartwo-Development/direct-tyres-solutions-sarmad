import type { Metadata } from "next";
import OldhamPage from "@/components/locations/OldhamPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Oldham | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Oldham. Rapid response mobile workshops dispatched within 20–35 minutes to your home, workplace, or roadside.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-oldham`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-oldham" fallback={<LocationJsonLd areaLabel="Oldham" slug="oldham" />} />
      <OldhamPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-oldham", fallbackMetadata);
}
