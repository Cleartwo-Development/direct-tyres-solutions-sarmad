import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { seoFiles } from "@/lib/cms";

function fallbackRobots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/home-1", "/home-2"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

export default async function robots() {
  return seoFiles.robots(() => fallbackRobots());
}
