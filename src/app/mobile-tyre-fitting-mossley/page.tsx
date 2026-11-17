import type { Metadata } from "next";
import MossleyPage from "@/components/locations/MossleyPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Mossley | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Mossley. Rapid response home, workplace and roadside tyre replacement covering Pennine hillside routes around the A635 and A670.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-mossley`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-mossley" fallback={<LocationJsonLd areaLabel="Mossley" slug="mossley" />} />
      <MossleyPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-mossley", fallbackMetadata);
}
