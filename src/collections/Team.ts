import { revalidatePath } from "next/cache";
import type { CollectionConfig } from "payload";

function revalidateTeamPage({ context }: { context: Record<string, unknown> }) {
  if (context.disableRevalidate) return;
  revalidatePath("/team");
}

export const Team: CollectionConfig = {
  slug: "team",
  labels: { singular: "Team Member", plural: "Team" },
  // drag rows in the admin list to change the order on the Team page
  orderable: true,
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "role", "photo"],
    description:
      "Committee members shown on the Team page. Drag rows to reorder them.",
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateTeamPage],
    afterDelete: [revalidateTeamPage],
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "role",
      type: "text",
      required: true,
      admin: { placeholder: "Events Executive" },
    },
    {
      name: "photo",
      type: "upload",
      relationTo: "media",
      admin: {
        description:
          "Square photos look best. Without a photo, their initials are shown.",
      },
    },
  ],
};
