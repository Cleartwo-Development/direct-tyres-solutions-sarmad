import type { Metadata } from "next";
import LittleboroughPage from "@/components/locations/LittleboroughPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Littleborough | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Littleborough. Rapid response rural and A-road tyre replacement covering routes around the A58 and A6033.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-littleborough`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-littleborough" fallback={<LocationJsonLd areaLabel="Littleborough" slug="littleborough" />} />
      <LittleboroughPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-littleborough", fallbackMetadata);
}
