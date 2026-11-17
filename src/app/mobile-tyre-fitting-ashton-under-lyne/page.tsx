import type { Metadata } from "next";
import AshtonUnderLynePage from "@/components/locations/AshtonUnderLynePage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting Ashton-under-Lyne | DTS",
  description:
    "24/7 mobile tyre fitting in Ashton-under-Lyne. Rapid home, workplace and roadside tyre replacement covering the M60 and A635.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-ashton-under-lyne`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-ashton-under-lyne" fallback={<LocationJsonLd areaLabel="Ashton-under-Lyne" slug="ashton-under-lyne" />} />
      <AshtonUnderLynePage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-ashton-under-lyne", fallbackMetadata);
}
