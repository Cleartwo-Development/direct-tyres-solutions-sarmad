import type { Metadata } from "next";
import StockportPage from "@/components/locations/StockportPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Stockport | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Stockport. Rapid response home, workplace and roadside tyre replacement covering routes around M60, A6, A34.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-stockport`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-stockport" fallback={<LocationJsonLd areaLabel="Stockport" slug="stockport" />} />
      <StockportPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-stockport", fallbackMetadata);
}
