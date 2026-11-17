import type { Metadata } from "next";
import HorwichPage from "@/components/locations/HorwichPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Horwich | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Horwich. Rapid response home, workplace and roadside tyre replacement covering routes around M61, A673, A6.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-horwich`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-horwich" fallback={<LocationJsonLd areaLabel="Horwich" slug="horwich" />} />
      <HorwichPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-horwich", fallbackMetadata);
}
