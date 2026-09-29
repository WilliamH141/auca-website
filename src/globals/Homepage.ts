import { revalidatePath } from "next/cache";
import type { GlobalConfig } from "payload";

export const Homepage: GlobalConfig = {
  slug: "homepage",
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      ({ context }) => {
        if (!context.disableRevalidate) revalidatePath("/");
      },
    ],
  },
  fields: [
    {
      name: "heroImages",
      label: "Hero photos",
      type: "upload",
      relationTo: "media",
      hasMany: true,
      admin: {
        description:
          "Photos that fade between each other behind the homepage heading. Drag to reorder. Landscape photos work best.",
      },
    },
  ],
};
