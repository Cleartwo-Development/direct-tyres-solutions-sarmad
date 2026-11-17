import type { Metadata } from "next";
import AncoatsPage from "@/components/locations/AncoatsPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Ancoats | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Ancoats. On-demand roadside and curbside tyre replacement for apartment residents and businesses in 20–35 minutes.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-ancoats`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-ancoats" fallback={<LocationJsonLd areaLabel="Ancoats" slug="ancoats" />} />
      <AncoatsPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-ancoats", fallbackMetadata);
}
