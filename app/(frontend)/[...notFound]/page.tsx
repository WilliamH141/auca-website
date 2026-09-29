import { notFound } from "next/navigation";

// With Payload's admin in its own route group there is no top-level layout,
// so unmatched URLs are routed here to render the site's not-found page.
export default function CatchAll() {
  notFound();
}
