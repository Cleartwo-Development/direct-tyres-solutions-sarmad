import type { Metadata } from "next";
import PoyntonPage from "@/components/locations/PoyntonPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Poynton | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Poynton. Rapid response home, workplace and roadside tyre replacement covering routes around A555, A523, A5149.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-poynton`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-poynton" fallback={<LocationJsonLd areaLabel="Poynton" slug="poynton" />} />
      <PoyntonPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-poynton", fallbackMetadata);
}
