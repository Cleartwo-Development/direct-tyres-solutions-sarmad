import type { Metadata } from "next";
import IrlamPage from "@/components/locations/IrlamPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Irlam | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Irlam. Rapid response home, workplace and roadside tyre replacement covering residential routes around the M60 and A57.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-irlam`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-irlam" fallback={<LocationJsonLd areaLabel="Irlam" slug="irlam" />} />
      <IrlamPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-irlam", fallbackMetadata);
}
