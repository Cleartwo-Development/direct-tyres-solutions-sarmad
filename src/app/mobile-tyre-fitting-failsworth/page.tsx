import type { Metadata } from "next";
import FailsworthPage from "@/components/locations/FailsworthPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Failsworth | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Failsworth. Professional mobile tyre replacement fitted on your drive or roadside within 20–30 minutes.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-failsworth`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-failsworth" fallback={<LocationJsonLd areaLabel="Failsworth" slug="failsworth" />} />
      <FailsworthPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-failsworth", fallbackMetadata);
}
