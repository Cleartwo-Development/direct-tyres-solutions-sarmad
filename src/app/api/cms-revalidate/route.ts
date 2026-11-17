import { createRevalidateHandler } from "@cleartwo/cms-sdk";

// Called by the CMS dashboard (signed with CMS_REVALIDATE_SECRET) after someone saves a page.
export const POST = createRevalidateHandler({
  secret: process.env.CMS_REVALIDATE_SECRET ?? "",
});
