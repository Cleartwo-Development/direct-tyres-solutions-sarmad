import type { Metadata } from "next";
import WhitefieldPage from "@/components/locations/WhitefieldPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Whitefield | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Whitefield. Rapid response home, workplace and roadside tyre replacement covering routes around the M60 and M66.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-whitefield`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-whitefield" fallback={<LocationJsonLd areaLabel="Whitefield" slug="whitefield" />} />
      <WhitefieldPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-whitefield", fallbackMetadata);
}
