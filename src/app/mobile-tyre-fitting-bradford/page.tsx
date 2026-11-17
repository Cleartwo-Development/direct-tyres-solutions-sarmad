import type { Metadata } from "next";
import BradfordPage from "@/components/locations/BradfordPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Bradford | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Bradford. Rapid response home, workplace and roadside tyre replacement covering city routes around the M606, M62 and A650.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-bradford`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-bradford" fallback={<LocationJsonLd areaLabel="Bradford" slug="bradford" />} />
      <BradfordPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-bradford", fallbackMetadata);
}
