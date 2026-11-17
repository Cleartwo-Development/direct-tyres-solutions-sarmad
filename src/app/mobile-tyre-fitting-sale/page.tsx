import type { Metadata } from "next";
import SalePage from "@/components/locations/SalePage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Sale | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Sale. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M60 and A56.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-sale`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-sale" fallback={<LocationJsonLd areaLabel="Sale" slug="sale" />} />
      <SalePage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-sale", fallbackMetadata);
}
