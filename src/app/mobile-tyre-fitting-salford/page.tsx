import type { Metadata } from "next";
import SalfordPage from "@/components/locations/SalfordPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Salford | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Salford. Rapid response home, workplace and roadside tyre replacement covering city routes around the M602, M60 and A6.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-salford`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-salford" fallback={<LocationJsonLd areaLabel="Salford" slug="salford" />} />
      <SalfordPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-salford", fallbackMetadata);
}
