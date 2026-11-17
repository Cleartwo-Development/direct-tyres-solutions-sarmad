import type { Metadata } from "next";
import EcclesPage from "@/components/locations/EcclesPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Eccles | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Eccles. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M602 and A57.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-eccles`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-eccles" fallback={<LocationJsonLd areaLabel="Eccles" slug="eccles" />} />
      <EcclesPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-eccles", fallbackMetadata);
}
