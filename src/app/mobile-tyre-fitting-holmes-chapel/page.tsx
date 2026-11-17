import type { Metadata } from "next";
import HolmesChapelPage from "@/components/locations/HolmesChapelPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Holmes Chapel | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Holmes Chapel. Rapid response home, workplace and roadside tyre replacement covering village routes around the M6 and A54.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-holmes-chapel`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-holmes-chapel" fallback={<LocationJsonLd areaLabel="Holmes Chapel" slug="holmes-chapel" />} />
      <HolmesChapelPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-holmes-chapel", fallbackMetadata);
}
