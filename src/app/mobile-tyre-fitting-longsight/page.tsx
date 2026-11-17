import type { Metadata } from "next";
import LongsightPage from "@/components/locations/LongsightPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Longsight | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Longsight, South Manchester. Rapid on-demand mobile tyre fitting within 20–35 minutes.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-longsight`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-longsight" fallback={<LocationJsonLd areaLabel="Longsight" slug="longsight" />} />
      <LongsightPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-longsight", fallbackMetadata);
}
