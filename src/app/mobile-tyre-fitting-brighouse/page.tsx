import type { Metadata } from "next";
import BrighousePage from "@/components/locations/BrighousePage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Brighouse | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Brighouse. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M62 and A644.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-brighouse`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-brighouse" fallback={<LocationJsonLd areaLabel="Brighouse" slug="brighouse" />} />
      <BrighousePage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-brighouse", fallbackMetadata);
}
