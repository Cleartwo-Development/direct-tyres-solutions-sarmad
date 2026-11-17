import type { Metadata } from "next";
import HomePage2 from "@/components/home2/HomePage2";
import { cmsMetadata } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Rapid Response Tyres | 24/7 Mobile Tyre Fitting",
  description:
    "Fast, professional mobile tyre assistance near you. We bring the garage to your location, day or night, across the North West.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <HomePage2 />;
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/home-2", fallbackMetadata);
}
