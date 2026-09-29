import {
  BoldFeature,
  InlineToolbarFeature,
  ItalicFeature,
  lexicalEditor,
  LinkFeature,
  ParagraphFeature,
  UnderlineFeature,
} from "@payloadcms/richtext-lexical";
import { revalidatePath } from "next/cache";
import type { CollectionConfig } from "payload";

function revalidateFaqPage({ context }: { context: Record<string, unknown> }) {
  if (context.disableRevalidate) return;
  revalidatePath("/faq");
}

export const Faqs: CollectionConfig = {
  slug: "faqs",
  labels: { singular: "FAQ", plural: "FAQ" },
  // drag rows in the admin list to change the order on the FAQ page
  orderable: true,
  admin: {
    useAsTitle: "question",
    defaultColumns: ["question"],
    description: "Questions on the FAQ page. Drag rows to reorder them.",
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateFaqPage],
    afterDelete: [revalidateFaqPage],
  },
  fields: [
    {
      name: "question",
      type: "text",
      required: true,
    },
    {
      name: "answer",
      type: "richText",
      required: true,
      admin: {
        description: "Select text to make it bold or add a link.",
      },
      // just the basics; answers are short
      editor: lexicalEditor({
        features: [
          ParagraphFeature(),
          BoldFeature(),
          ItalicFeature(),
          UnderlineFeature(),
          LinkFeature({ enabledCollections: [] }),
          InlineToolbarFeature(),
        ],
      }),
    },
  ],
};
