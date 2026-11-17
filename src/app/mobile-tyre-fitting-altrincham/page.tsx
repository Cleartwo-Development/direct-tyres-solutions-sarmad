import type { Metadata } from "next";
import AltrinchamPage from "@/components/locations/AltrinchamPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Altrincham | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Altrincham. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the A56 and M56.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-altrincham`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-altrincham" fallback={<LocationJsonLd areaLabel="Altrincham" slug="altrincham" />} />
      <AltrinchamPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-altrincham", fallbackMetadata);
}
