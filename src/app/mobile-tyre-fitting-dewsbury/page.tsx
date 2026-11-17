import type { Metadata } from "next";
import DewsburyPage from "@/components/locations/DewsburyPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Dewsbury | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Dewsbury. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M1 and A644.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-dewsbury`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-dewsbury" fallback={<LocationJsonLd areaLabel="Dewsbury" slug="dewsbury" />} />
      <DewsburyPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-dewsbury", fallbackMetadata);
}
