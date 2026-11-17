import type { Metadata } from "next";
import SandbachPage from "@/components/locations/SandbachPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Sandbach | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Sandbach. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the M6 and A534.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-sandbach`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-sandbach" fallback={<LocationJsonLd areaLabel="Sandbach" slug="sandbach" />} />
      <SandbachPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-sandbach", fallbackMetadata);
}
