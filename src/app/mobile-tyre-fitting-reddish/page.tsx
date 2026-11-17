import type { Metadata } from "next";
import ReddishPage from "@/components/locations/ReddishPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Reddish | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Reddish. Rapid response home, workplace and roadside tyre replacement covering routes around M60 nearby, A57, A6017.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-reddish`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-reddish" fallback={<LocationJsonLd areaLabel="Reddish" slug="reddish" />} />
      <ReddishPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-reddish", fallbackMetadata);
}
