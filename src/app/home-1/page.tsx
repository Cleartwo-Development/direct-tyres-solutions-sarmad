import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { cmsMetadata } from "@/lib/cms";

const fallbackMetadata: Metadata = {
  title: "Tyre Assist 24/7 - Mobile Tyre Fitting",
  description:
    "24/7 mobile tyre fitting that comes to you. Emergency call-outs, home & work fitting, puncture repair and battery jumpstarts across the UK.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <HomePage />;
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/home-1", fallbackMetadata);
}
