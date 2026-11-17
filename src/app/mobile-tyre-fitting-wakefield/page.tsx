import type { Metadata } from "next";
import WakefieldPage from "@/components/locations/WakefieldPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Wakefield | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Wakefield. Rapid response home, workplace and roadside tyre replacement covering routes around M1, M62, A638.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-wakefield`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-wakefield" fallback={<LocationJsonLd areaLabel="Wakefield" slug="wakefield" />} />
      <WakefieldPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-wakefield", fallbackMetadata);
}
