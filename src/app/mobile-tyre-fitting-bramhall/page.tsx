import type { Metadata } from "next";
import BramhallPage from "@/components/locations/BramhallPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Bramhall | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Bramhall. Rapid response home, workplace and roadside tyre replacement covering routes around A555, A5102, A34.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-bramhall`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-bramhall" fallback={<LocationJsonLd areaLabel="Bramhall" slug="bramhall" />} />
      <BramhallPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-bramhall", fallbackMetadata);
}
