import type { Metadata } from "next";
import BirchwoodPage from "@/components/locations/BirchwoodPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Birchwood | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Birchwood. Rapid response home, workplace and roadside tyre replacement covering routes around M62, M6 nearby, A574.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-birchwood`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-birchwood" fallback={<LocationJsonLd areaLabel="Birchwood" slug="birchwood" />} />
      <BirchwoodPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-birchwood", fallbackMetadata);
}
