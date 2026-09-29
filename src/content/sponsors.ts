import config from "@payload-config";
import { getPayload } from "payload";

// Sponsors are edited in the Payload admin at /admin/collections/sponsors.

export type Sponsor = {
  name: string;
  logo: string;
  url: string;
  perk?: string;
};

export async function getSponsors(): Promise<Sponsor[]> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "sponsors",
    pagination: false,
    sort: "_order", // the drag-and-drop order from the admin
    depth: 1,
  });

  return docs.flatMap((doc) =>
    // logos are never cropped, so use the original upload
    typeof doc.logo === "object" && doc.logo.url
      ? [
          {
            name: doc.name,
            logo: doc.logo.url,
            url: doc.url,
            perk: doc.perk || undefined,
          },
        ]
      : [],
  );
}
