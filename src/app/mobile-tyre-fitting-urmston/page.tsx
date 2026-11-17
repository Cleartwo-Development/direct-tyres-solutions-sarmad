import type { Metadata } from "next";
import UrmstonPage from "@/components/locations/UrmstonPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Urmston | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Urmston. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M60 and A56.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-urmston`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-urmston" fallback={<LocationJsonLd areaLabel="Urmston" slug="urmston" />} />
      <UrmstonPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-urmston", fallbackMetadata);
}
