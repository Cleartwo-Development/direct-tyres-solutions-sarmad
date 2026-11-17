import type { Metadata } from "next";
import PrestonPage from "@/components/locations/PrestonPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Preston | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Preston. Rapid response home, workplace and roadside tyre replacement covering city routes around the M6, M55 and M61.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-preston`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-preston" fallback={<LocationJsonLd areaLabel="Preston" slug="preston" />} />
      <PrestonPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-preston", fallbackMetadata);
}
