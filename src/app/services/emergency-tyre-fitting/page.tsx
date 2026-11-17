import ServicePage from "@/components/services/ServicePage";
import { serviceMetadata } from "@/lib/service-metadata";
import { servicePages } from "@/lib/services-data";
import type { Metadata } from "next";
import { cmsMetadata } from "@/lib/cms";

const fallbackMetadata: Metadata = serviceMetadata("emergency-tyre-fitting");

export default function Page() {
  return <ServicePage data={servicePages["emergency-tyre-fitting"]} />;
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/services/emergency-tyre-fitting", fallbackMetadata);
}
