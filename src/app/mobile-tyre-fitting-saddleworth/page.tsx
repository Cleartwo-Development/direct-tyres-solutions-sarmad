import type { Metadata } from "next";
import SaddleworthPage from "@/components/locations/SaddleworthPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Saddleworth | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting across Saddleworth's villages and moorland roads. All-terrain vans reaching you in 25–40 minutes.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-saddleworth`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-saddleworth" fallback={<LocationJsonLd areaLabel="Saddleworth" slug="saddleworth" />} />
      <SaddleworthPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-saddleworth", fallbackMetadata);
}
