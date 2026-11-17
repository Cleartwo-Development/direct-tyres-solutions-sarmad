import type { Metadata } from "next";
import RochdalePage from "@/components/locations/RochdalePage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Rochdale | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Rochdale & M62 corridor. Emergency roadside and home driveway tyre fitting within 20–35 minutes.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-rochdale`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-rochdale" fallback={<LocationJsonLd areaLabel="Rochdale" slug="rochdale" />} />
      <RochdalePage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-rochdale", fallbackMetadata);
}
