import type { Metadata } from "next";
import KnutsfordPage from "@/components/locations/KnutsfordPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Knutsford | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Knutsford. Rapid response home, workplace and roadside tyre replacement covering market town routes around the A50 and M6.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-knutsford`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-knutsford" fallback={<LocationJsonLd areaLabel="Knutsford" slug="knutsford" />} />
      <KnutsfordPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-knutsford", fallbackMetadata);
}
