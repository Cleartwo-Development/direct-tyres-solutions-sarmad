import type { Metadata } from "next";
import ShawPage from "@/components/locations/ShawPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Shaw | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Shaw. Local emergency tyre fitting dispatched to your doorstep or roadside within 20–35 minutes.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-shaw`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-shaw" fallback={<LocationJsonLd areaLabel="Shaw" slug="shaw" />} />
      <ShawPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-shaw", fallbackMetadata);
}
