import type { Metadata } from "next";
import BredburyPage from "@/components/locations/BredburyPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Bredbury | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Bredbury. Rapid home, workplace and roadside tyre replacement covering industrial routes around the M60 and A560.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-bredbury`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-bredbury" fallback={<LocationJsonLd areaLabel="Bredbury" slug="bredbury" />} />
      <BredburyPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-bredbury", fallbackMetadata);
}
