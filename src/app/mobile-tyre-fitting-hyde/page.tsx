import type { Metadata } from "next";
import HydePage from "@/components/locations/HydePage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Hyde | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Hyde. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M67 and A560.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-hyde`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-hyde" fallback={<LocationJsonLd areaLabel="Hyde" slug="hyde" />} />
      <HydePage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-hyde", fallbackMetadata);
}
