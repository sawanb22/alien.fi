import { redirect } from "next/navigation";

/** Canonical home is `/`; keep route for bookmarks. */
export default function LandingLegacyRedirectPage() {
  redirect("/");
}
