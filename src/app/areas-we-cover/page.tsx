import type { Metadata } from "next";
import AreasWeCoverPage from "@/components/AreasWeCoverPage";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata } from "@/lib/cms";

const title = "Areas We Cover | Direct Tyre Solutions";
const description =
  "Direct Tyre Solutions provides 24/7 mobile tyre fitting across 100 towns in Greater Manchester, Cheshire, Lancashire and West Yorkshire. Find your area.";
const url = `${SITE_URL}/areas-we-cover`;

const fallbackMetadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
  },
  twitter: {
    title,
    description,
  },
};

export default function Page() {
  return <AreasWeCoverPage />;
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/areas-we-cover", fallbackMetadata);
}
