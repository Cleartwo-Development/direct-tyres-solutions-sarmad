import type { Metadata } from "next";
import WesthoughtonPage from "@/components/locations/WesthoughtonPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Westhoughton | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Westhoughton. Rapid response home, workplace and roadside tyre replacement covering routes around M61, A6, A58.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-westhoughton`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-westhoughton" fallback={<LocationJsonLd areaLabel="Westhoughton" slug="westhoughton" />} />
      <WesthoughtonPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-westhoughton", fallbackMetadata);
}
