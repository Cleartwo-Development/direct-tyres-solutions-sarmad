import type { Metadata } from "next";
import WilmslowPage from "@/components/locations/WilmslowPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Wilmslow | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Wilmslow. Rapid response home, workplace and roadside tyre replacement covering town centre routes around the A34 and A538.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-wilmslow`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-wilmslow" fallback={<LocationJsonLd areaLabel="Wilmslow" slug="wilmslow" />} />
      <WilmslowPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-wilmslow", fallbackMetadata);
}
