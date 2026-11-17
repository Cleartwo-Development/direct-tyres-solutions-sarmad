import type { Metadata } from "next";
import NantwichPage from "@/components/locations/NantwichPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Nantwich | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Nantwich. Rapid response home, workplace and roadside tyre replacement covering market town routes around the A51 and A500.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-nantwich`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-nantwich" fallback={<LocationJsonLd areaLabel="Nantwich" slug="nantwich" />} />
      <NantwichPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-nantwich", fallbackMetadata);
}
