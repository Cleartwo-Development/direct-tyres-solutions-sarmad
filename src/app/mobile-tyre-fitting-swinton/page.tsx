import type { Metadata } from "next";
import SwintonPage from "@/components/locations/SwintonPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Swinton | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Swinton. Rapid home, workplace and roadside tyre replacement covering residential routes around the M60 and A580.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-swinton`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-swinton" fallback={<LocationJsonLd areaLabel="Swinton" slug="swinton" />} />
      <SwintonPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-swinton", fallbackMetadata);
}
