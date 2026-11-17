import type { Metadata } from "next";
import CheadlePage from "@/components/locations/CheadlePage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Cheadle | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Cheadle. Rapid response home, workplace and roadside tyre replacement covering routes around M60, M56, A34.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-cheadle`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-cheadle" fallback={<LocationJsonLd areaLabel="Cheadle" slug="cheadle" />} />
      <CheadlePage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-cheadle", fallbackMetadata);
}
