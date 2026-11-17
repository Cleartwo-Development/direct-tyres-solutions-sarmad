import type { Metadata } from "next";
import WarringtonPage from "@/components/locations/WarringtonPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Warrington | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Warrington. Rapid response home, workplace and roadside tyre replacement covering routes around M6, M62, M56.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-warrington`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-warrington" fallback={<LocationJsonLd areaLabel="Warrington" slug="warrington" />} />
      <WarringtonPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-warrington", fallbackMetadata);
}
