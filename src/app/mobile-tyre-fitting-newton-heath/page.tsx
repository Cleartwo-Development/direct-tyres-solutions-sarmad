import type { Metadata } from "next";
import NewtonHeathPage from "@/components/locations/NewtonHeathPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Newton Heath | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Newton Heath, Manchester. On-demand mobile tyre fitting within 20–35 minutes.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-newton-heath`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-newton-heath" fallback={<LocationJsonLd areaLabel="Newton Heath" slug="newton-heath" />} />
      <NewtonHeathPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-newton-heath", fallbackMetadata);
}
