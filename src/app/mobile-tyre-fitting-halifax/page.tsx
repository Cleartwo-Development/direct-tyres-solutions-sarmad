import type { Metadata } from "next";
import HalifaxPage from "@/components/locations/HalifaxPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Halifax | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Halifax. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M62 and A58.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-halifax`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-halifax" fallback={<LocationJsonLd areaLabel="Halifax" slug="halifax" />} />
      <HalifaxPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-halifax", fallbackMetadata);
}
