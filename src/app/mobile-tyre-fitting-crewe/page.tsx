import type { Metadata } from "next";
import CrewePage from "@/components/locations/CrewePage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Crewe | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Crewe. Rapid response home, workplace and roadside tyre replacement covering railway town routes around the M6 and A534.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-crewe`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-crewe" fallback={<LocationJsonLd areaLabel="Crewe" slug="crewe" />} />
      <CrewePage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-crewe", fallbackMetadata);
}
