import type { Metadata } from "next";
import ServicesIndexPage from "@/components/services/ServicesIndexPage";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata } from "@/lib/cms";

const title = "Our Services | Direct Tyre Solutions";
const description =
  "Mobile tyre fitting, puncture repairs, tyre replacement and 24/7 emergency call-outs — we bring the workshop to you, wherever you are.";
const url = `${SITE_URL}/services`;

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
  return <ServicesIndexPage />;
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/services", fallbackMetadata);
}
