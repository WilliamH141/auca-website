import config from "@payload-config";
import { getPayload } from "payload";

// FAQs are edited in the Payload admin at /admin/collections/faqs.

export async function getFaqs() {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "faqs",
    pagination: false,
    sort: "_order", // the drag-and-drop order from the admin
  });
  return docs.map(({ question, answer }) => ({ question, answer }));
}
