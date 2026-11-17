import type { Metadata } from "next";
import TraffordParkPage from "@/components/locations/TraffordParkPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Trafford Park | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Trafford Park. Rapid home, workplace and roadside tyre replacement covering industrial routes around the M60 and M602.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-trafford-park`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-trafford-park" fallback={<LocationJsonLd areaLabel="Trafford Park" slug="trafford-park" />} />
      <TraffordParkPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-trafford-park", fallbackMetadata);
}
