import type { Metadata } from "next";
import WinsfordPage from "@/components/locations/WinsfordPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Winsford | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Winsford. Rapid response home, workplace and roadside tyre replacement covering routes around A54, A530, A533.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-winsford`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-winsford" fallback={<LocationJsonLd areaLabel="Winsford" slug="winsford" />} />
      <WinsfordPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-winsford", fallbackMetadata);
}
