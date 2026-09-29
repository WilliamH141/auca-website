import { revalidatePath } from "next/cache";
import type { CollectionConfig } from "payload";

function revalidateSponsorsPage({
  context,
}: {
  context: Record<string, unknown>;
}) {
  if (context.disableRevalidate) return;
  revalidatePath("/sponsors");
}

export const Sponsors: CollectionConfig = {
  slug: "sponsors",
  // drag rows in the admin list to change the order on the Sponsors page
  orderable: true,
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "logo", "perk"],
    description:
      "Sponsors shown on the Sponsors page. Drag rows to reorder; the first 3 go in the top row.",
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateSponsorsPage],
    afterDelete: [revalidateSponsorsPage],
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "Transparent PNG works best. It is never cropped.",
      },
    },
    {
      name: "url",
      label: "Website",
      type: "text",
      required: true,
      validate: (value: unknown) =>
        /^https?:\/\//.test(String(value ?? ""))
          ? true
          : "Must be a full link starting with https://",
    },
    {
      name: "perk",
      label: "Member perk",
      type: "text",
      admin: {
        placeholder: "15% off for members.",
        description: "Optional. Shown under the logo.",
      },
    },
  ],
};
