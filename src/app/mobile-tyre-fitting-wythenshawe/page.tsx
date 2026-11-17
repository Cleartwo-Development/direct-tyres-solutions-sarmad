import type { Metadata } from "next";
import WythenshawePage from "@/components/locations/WythenshawePage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Wythenshawe | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Wythenshawe. Rapid roadside and home tyre replacement covering Manchester Airport and routes around the M56.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-wythenshawe`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-wythenshawe" fallback={<LocationJsonLd areaLabel="Wythenshawe" slug="wythenshawe" />} />
      <WythenshawePage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-wythenshawe", fallbackMetadata);
}
