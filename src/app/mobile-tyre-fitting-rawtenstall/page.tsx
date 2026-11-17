import type { Metadata } from "next";
import RawtenstallPage from "@/components/locations/RawtenstallPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Rawtenstall | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Rawtenstall. Rapid response home, workplace and roadside tyre replacement covering valley routes around the M66 and A56.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-rawtenstall`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-rawtenstall" fallback={<LocationJsonLd areaLabel="Rawtenstall" slug="rawtenstall" />} />
      <RawtenstallPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-rawtenstall", fallbackMetadata);
}
