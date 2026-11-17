import type { Metadata } from "next";
import CheethamHillPage from "@/components/locations/CheethamHillPage";
import LocationJsonLd from "@/components/LocationJsonLd";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata, PageJsonLd } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Mobile Tyre Fitting in Cheetham Hill | Direct Tyre Solutions",
  description:
    "24/7 mobile tyre fitting in Cheetham Hill, Manchester. Emergency roadside and driveway tyre fitting within 20–35 minutes.",
  alternates: {
    canonical: `${SITE_URL}/mobile-tyre-fitting-cheetham-hill`,
  },
};

export default function Page() {
  return (
    <>
      <PageJsonLd path="/mobile-tyre-fitting-cheetham-hill" fallback={<LocationJsonLd areaLabel="Cheetham Hill" slug="cheetham-hill" />} />
      <CheethamHillPage />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/mobile-tyre-fitting-cheetham-hill", fallbackMetadata);
}
