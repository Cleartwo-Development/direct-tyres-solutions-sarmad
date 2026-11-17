import type { Metadata } from "next";
import HandforthPage from "@/components/locations/HandforthPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Handforth | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Handforth. Rapid home, workplace and roadside tyre replacement covering business park routes around the A34 and A555.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-handforth`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-handforth" fallback={<LocationJsonLd areaLabel="Handforth" slug="handforth" />} />
      <HandforthPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-handforth", fallbackMetadata);
}
