import type { Metadata } from "next";
import BurnleyPage from "@/components/locations/BurnleyPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Burnley | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Burnley. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M65 and A56.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-burnley`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-burnley" fallback={<LocationJsonLd areaLabel="Burnley" slug="burnley" />} />
      <BurnleyPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-burnley", fallbackMetadata);
}
