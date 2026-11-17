import type { Metadata } from "next";
import HuddersfieldPage from "@/components/locations/HuddersfieldPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Huddersfield | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Huddersfield. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M62 and A62.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-huddersfield`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-huddersfield" fallback={<LocationJsonLd areaLabel="Huddersfield" slug="huddersfield" />} />
      <HuddersfieldPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-huddersfield", fallbackMetadata);
}
