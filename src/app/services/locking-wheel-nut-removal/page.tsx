import ServicePage from "@/components/services/ServicePage";
import { serviceMetadata } from "@/lib/service-metadata";
import { servicePages } from "@/lib/services-data";
import type { Metadata } from "next";
import { cmsMetadata } from "@/lib/cms";

const fallbackMetadata: Metadata = serviceMetadata("locking-wheel-nut-removal");

export default function Page() {
  return <ServicePage data={servicePages["locking-wheel-nut-removal"]} />;
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/services/locking-wheel-nut-removal", fallbackMetadata);
}
