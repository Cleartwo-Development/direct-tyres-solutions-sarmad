import type { Metadata } from "next";
import ChorleyPage from "@/components/locations/ChorleyPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Chorley | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Chorley. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M61 and M6.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-chorley`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-chorley" fallback={<LocationJsonLd areaLabel="Chorley" slug="chorley" />} />
      <ChorleyPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-chorley", fallbackMetadata);
}
