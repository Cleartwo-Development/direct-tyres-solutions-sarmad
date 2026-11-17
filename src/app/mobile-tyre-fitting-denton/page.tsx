import type { Metadata } from "next";
import DentonPage from "@/components/locations/DentonPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Denton | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Denton. Rapid response home, workplace and roadside tyre replacement covering routes around M60, M67, A57.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-denton`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-denton" fallback={<LocationJsonLd areaLabel="Denton" slug="denton" />} />
      <DentonPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-denton", fallbackMetadata);
}
