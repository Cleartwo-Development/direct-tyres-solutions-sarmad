import type { Metadata } from "next";
import CongletonPage from "@/components/locations/CongletonPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Congleton | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Congleton. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the A34 and A536.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-congleton`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-congleton" fallback={<LocationJsonLd areaLabel="Congleton" slug="congleton" />} />
      <CongletonPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-congleton", fallbackMetadata);
}
