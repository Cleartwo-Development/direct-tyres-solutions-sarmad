import type { Metadata } from "next";
import NorthwichPage from "@/components/locations/NorthwichPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Northwich | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Northwich. Rapid response home, workplace and roadside tyre replacement covering routes around M56, A556, A533.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-northwich`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-northwich" fallback={<LocationJsonLd areaLabel="Northwich" slug="northwich" />} />
      <NorthwichPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-northwich", fallbackMetadata);
}
