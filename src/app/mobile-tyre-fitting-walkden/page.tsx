import type { Metadata } from "next";
import WalkdenPage from "@/components/locations/WalkdenPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Walkden | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Walkden. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M61 and A6.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-walkden`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-walkden" fallback={<LocationJsonLd areaLabel="Walkden" slug="walkden" />} />
      <WalkdenPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-walkden", fallbackMetadata);
}
