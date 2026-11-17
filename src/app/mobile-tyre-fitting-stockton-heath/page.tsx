import type { Metadata } from "next";
import StocktonHeathPage from "@/components/locations/StocktonHeathPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting Stockton Heath | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Stockton Heath. Rapid response home, workplace and roadside tyre replacement covering routes around M56, A49, A56.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-stockton-heath`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-stockton-heath" fallback={<LocationJsonLd areaLabel="Stockton Heath" slug="stockton-heath" />} />
      <StocktonHeathPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-stockton-heath", fallbackMetadata);
}
