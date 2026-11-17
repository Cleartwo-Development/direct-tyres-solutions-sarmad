import type { Metadata } from "next";
import DidsburyPage from "@/components/locations/DidsburyPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Didsbury | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Didsbury, Manchester. Premium on-driveway and roadside tyre replacement within 20–35 minutes.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-didsbury`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-didsbury" fallback={<LocationJsonLd areaLabel="Didsbury" slug="didsbury" />} />
      <DidsburyPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-didsbury", fallbackMetadata);
}
