import type { Metadata } from "next";
import HaslingdenPage from "@/components/locations/HaslingdenPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Haslingden | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Haslingden. Rapid response home, workplace and roadside tyre replacement covering Pennine hillside routes around the M65 and A56.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-haslingden`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-haslingden" fallback={<LocationJsonLd areaLabel="Haslingden" slug="haslingden" />} />
      <HaslingdenPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-haslingden", fallbackMetadata);
}
