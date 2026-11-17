import type { Metadata } from "next";
import MiddlewichPage from "@/components/locations/MiddlewichPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Middlewich | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Middlewich. Rapid response home, workplace and roadside tyre replacement covering routes around M6 nearby, A54, A530.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-middlewich`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-middlewich" fallback={<LocationJsonLd areaLabel="Middlewich" slug="middlewich" />} />
      <MiddlewichPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-middlewich", fallbackMetadata);
}
