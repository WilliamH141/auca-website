import config from "@payload-config";
import { getPayload } from "payload";
import { cache } from "react";

// Edited in the Payload admin under Globals → Site Settings / Homepage.

// cached per request: the footer and the page both need these
export const getSiteSettings = cache(async () => {
  const payload = await getPayload({ config });
  return payload.findGlobal({ slug: "site-settings" });
});

export async function getHeroImages(): Promise<string[]> {
  const payload = await getPayload({ config });
  const homepage = await payload.findGlobal({ slug: "homepage", depth: 1 });
  return (homepage.heroImages ?? []).flatMap((image) =>
    typeof image === "object" && image.url
      ? [image.sizes?.large?.url || image.url]
      : [],
  );
}
