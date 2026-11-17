import type { Metadata } from "next";
import LymmPage from "@/components/locations/LymmPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Lymm | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Lymm. Rapid response home, workplace and roadside tyre replacement covering routes around M6, M56, A56.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-lymm`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-lymm" fallback={<LocationJsonLd areaLabel="Lymm" slug="lymm" />} />
      <LymmPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-lymm", fallbackMetadata);
}
