import type { Metadata } from "next";
import RadcliffePage from "@/components/locations/RadcliffePage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Radcliffe | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Radcliffe. Rapid response home, workplace and roadside tyre replacement covering routes around the M60 and A665.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-radcliffe`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-radcliffe" fallback={<LocationJsonLd areaLabel="Radcliffe" slug="radcliffe" />} />
      <RadcliffePage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-radcliffe", fallbackMetadata);
}
