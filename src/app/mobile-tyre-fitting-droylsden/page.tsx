import type { Metadata } from "next";
import DroylsdenPage from "@/components/locations/DroylsdenPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Droylsden | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Droylsden. Rapid response home, workplace and roadside tyre replacement covering routes around A662, A635, M60 nearby.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-droylsden`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-droylsden" fallback={<LocationJsonLd areaLabel="Droylsden" slug="droylsden" />} />
      <DroylsdenPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-droylsden", fallbackMetadata);
}
