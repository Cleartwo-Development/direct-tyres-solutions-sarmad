import ServicePage from "@/components/services/ServicePage";
import { serviceMetadata } from "@/lib/service-metadata";
import { servicePages } from "@/lib/services-data";
import type { Metadata } from "next";
import { cmsMetadata } from "@/lib/cms";

const fallbackMetadata: Metadata = serviceMetadata("tyre-replacement");

export default function Page() {
  return <ServicePage data={servicePages["tyre-replacement"]} />;
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/services/tyre-replacement", fallbackMetadata);
}
