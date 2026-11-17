import type { Metadata } from "next";
import BlackburnPage from "@/components/locations/BlackburnPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Blackburn | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Blackburn. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M65 and A666.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-blackburn`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-blackburn" fallback={<LocationJsonLd areaLabel="Blackburn" slug="blackburn" />} />
      <BlackburnPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-blackburn", fallbackMetadata);
}
