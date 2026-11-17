import type { Metadata } from "next";
import RuncornPage from "@/components/locations/RuncornPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Runcorn | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Runcorn. Rapid response home, workplace and roadside tyre replacement covering routes around M56, A533, A557.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-runcorn`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-runcorn" fallback={<LocationJsonLd areaLabel="Runcorn" slug="runcorn" />} />
      <RuncornPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-runcorn", fallbackMetadata);
}
