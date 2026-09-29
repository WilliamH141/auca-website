import { revalidatePath } from "next/cache";
import type { GlobalConfig, TextFieldSingleValidation } from "payload";

const validateUrl: TextFieldSingleValidation = (value) =>
  /^https?:\/\//.test(value ?? "")
    ? true
    : "Must be a full link starting with https://";

function linkField(name: string, label: string) {
  return {
    name,
    label,
    type: "text" as const,
    required: true,
    validate: validateUrl,
  };
}

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Site Settings",
  admin: {
    description:
      "Contact details and links used across the whole site (footer, Join, Contact, About and more).",
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      ({ context }) => {
        // these appear in the footer, so every page needs refreshing
        if (!context.disableRevalidate) revalidatePath("/", "layout");
      },
    ],
  },
  fields: [
    {
      name: "email",
      label: "Club email",
      type: "email",
      required: true,
    },
    {
      ...linkField("membershipFormUrl", "Membership sign-up form"),
      admin: {
        description: "Used by the Sign up buttons. Update this each year.",
      },
    },
    linkField("discordUrl", "Discord invite"),
    linkField("instagramUrl", "Instagram"),
    linkField("facebookUrl", "Facebook"),
    linkField("lichessUrl", "Lichess team"),
    linkField("chessComUrl", "Chess.com club"),
  ],
};
