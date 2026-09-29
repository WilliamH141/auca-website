import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      admin: {
        description: "Short description for screen readers (optional).",
      },
    },
  ],
  upload: {
    mimeTypes: ["image/*"],
    // phone photos can be 10MB+; the site uses this small square version
    imageSizes: [
      {
        name: "square",
        width: 600,
        height: 600,
        position: "centre",
        formatOptions: { format: "webp", options: { quality: 80 } },
      },
    ],
  },
};
