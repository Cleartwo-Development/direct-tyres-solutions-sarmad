import { createRedirectProxy } from "@cleartwo/cms-sdk/proxy";

// Redirects managed in the CMS. Does nothing until CMS_API_URL and CMS_API_KEY are set, and keeps
// working from the last known list if the CMS is briefly unreachable.
export const proxy = createRedirectProxy({
  apiUrl: process.env.CMS_API_URL ?? "",
  apiKey: process.env.CMS_API_KEY ?? "",
});

// Run on every page request, but not on Next.js internals or API routes.
export const config = { matcher: ["/((?!_next/|api/).*)"] };
