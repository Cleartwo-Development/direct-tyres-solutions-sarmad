import type { Metadata } from "next";
import BlackleyPage from "@/components/locations/BlackleyPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Blackley | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Blackley, North Manchester. Emergency roadside and doorstep tyre replacement within 20–35 minutes.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-blackley`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-blackley" fallback={<LocationJsonLd areaLabel="Blackley" slug="blackley" />} />
      <BlackleyPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-blackley", fallbackMetadata);
}
