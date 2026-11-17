import type { Metadata } from "next";
import CheadleHulmePage from "@/components/locations/CheadleHulmePage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Cheadle Hulme | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Cheadle Hulme. Rapid response home, workplace and roadside tyre replacement covering routes around A34, A555, M60 nearby.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-cheadle-hulme`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-cheadle-hulme" fallback={<LocationJsonLd areaLabel="Cheadle Hulme" slug="cheadle-hulme" />} />
      <CheadleHulmePage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-cheadle-hulme", fallbackMetadata);
}
