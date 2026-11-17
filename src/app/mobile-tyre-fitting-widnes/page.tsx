import type { Metadata } from "next";
import WidnesPage from "@/components/locations/WidnesPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Widnes | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Widnes. Rapid response home, workplace and roadside tyre replacement covering routes around M62, A557, A562.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-widnes`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-widnes" fallback={<LocationJsonLd areaLabel="Widnes" slug="widnes" />} />
      <WidnesPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-widnes", fallbackMetadata);
}
