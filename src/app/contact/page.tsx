import type { Metadata } from "next";
import ContactUsPage3 from "@/components/home3/ContactUsPage3";
import { SITE_URL } from "@/lib/seo";
import { cmsMetadata } from "@/lib/cms";

const title = "Contact Us | Direct Tyre Solutions";
const description =
  "Call our 24/7 emergency line, message us on WhatsApp, or request a callback for mobile tyre fitting anywhere across the North West.";
const url = `${SITE_URL}/contact`;

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
  return <ContactUsPage3 />;
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/contact", fallbackMetadata);
}
