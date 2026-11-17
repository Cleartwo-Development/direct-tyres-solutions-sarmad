import type { Metadata } from "next";
import { createCmsClient, mergeMetadata, toMetadata, createSchemaComponents } from "@cleartwo/cms-sdk";

const apiUrl = process.env.CMS_API_URL;
const apiKey = process.env.CMS_API_KEY;

/** Stays null until CMS_API_URL and CMS_API_KEY are set — the site then just uses its own metadata. */
export const cms = apiUrl && apiKey ? createCmsClient({ apiUrl, apiKey }) : null;

/**
 * Site-wide metadata that every CMS-driven page should keep. A page's own openGraph object replaces
 * the one in layout.tsx (Next.js does not merge them), so these repeat the fields set there.
 */
const siteDefaults: Metadata = {
  openGraph: { type: "website", locale: "en_GB", siteName: "Direct Tyre Solutions" },
};

/**
 * Metadata for a page: the CMS value layered over `fallback` (the metadata written in the code).
 * If the CMS has nothing for the page, or can't be reached, `fallback` is used unchanged.
 */
export async function cmsMetadata(path: string, fallback: Metadata): Promise<Metadata> {
  if (!cms) return fallback;
  const seo = await cms.getSeo(path);
  if (!seo) return fallback;
  return mergeMetadata(mergeMetadata(siteDefaults, fallback), toMetadata(seo));
}

/** Renders CMS-managed schema (JSON-LD); the site's own component is the fallback until the CMS manages the page. */
export const { PageJsonLd, SiteJsonLd } = createSchemaComponents(cms);
