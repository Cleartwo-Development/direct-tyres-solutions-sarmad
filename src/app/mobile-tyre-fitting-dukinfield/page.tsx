import type { Metadata } from "next";
import DukinfieldPage from "@/components/locations/DukinfieldPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Dukinfield | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Dukinfield. Rapid home, workplace and roadside tyre replacement covering residential routes around the M67 and A57.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-dukinfield`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-dukinfield" fallback={<LocationJsonLd areaLabel="Dukinfield" slug="dukinfield" />} />
      <DukinfieldPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-dukinfield", fallbackMetadata);
}
