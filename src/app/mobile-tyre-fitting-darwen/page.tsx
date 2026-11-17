import type { Metadata } from "next";
import DarwenPage from "@/components/locations/DarwenPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Darwen | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Darwen. Rapid response home, workplace and roadside tyre replacement covering moorland routes around the M65 and A666.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-darwen`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-darwen" fallback={<LocationJsonLd areaLabel="Darwen" slug="darwen" />} />
      <DarwenPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-darwen", fallbackMetadata);
}
