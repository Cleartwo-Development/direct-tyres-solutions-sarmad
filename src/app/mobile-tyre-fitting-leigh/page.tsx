import type { Metadata } from "next";
import LeighPage from "@/components/locations/LeighPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Leigh | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Leigh. Rapid response home, workplace and roadside tyre replacement covering town centre and routes around the A580 and A579.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-leigh`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-leigh" fallback={<LocationJsonLd areaLabel="Leigh" slug="leigh" />} />
      <LeighPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-leigh", fallbackMetadata);
}
