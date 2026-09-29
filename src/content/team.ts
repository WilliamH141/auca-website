import config from "@payload-config";
import { getPayload } from "payload";

// Team members are edited in the Payload admin at /admin/collections/team.

export type CommitteeMember = {
  name: string;
  role: string;
  image?: string; // optional profile image url
};

export async function getTeam(): Promise<CommitteeMember[]> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "team",
    pagination: false,
    sort: "_order", // the drag-and-drop order from the admin
    depth: 1,
  });

  return docs.map((doc) => {
    const photo = typeof doc.photo === "object" ? doc.photo : null;
    return {
      name: doc.name,
      role: doc.role,
      image: photo?.sizes?.square?.url || photo?.url || undefined,
    };
  });
}
