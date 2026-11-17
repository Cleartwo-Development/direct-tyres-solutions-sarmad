import type { Metadata } from "next";
import MostonPage from "@/components/locations/MostonPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Moston | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Moston, North Manchester. On-demand mobile tyre fitting within 20–35 minutes.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-moston`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-moston" fallback={<LocationJsonLd areaLabel="Moston" slug="moston" />} />
      <MostonPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-moston", fallbackMetadata);
}
