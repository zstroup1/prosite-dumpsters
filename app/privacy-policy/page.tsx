import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy | ProSite Dumpsters",
  description: "Placeholder privacy policy page for ProSite Dumpsters.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy policy"
        title="Privacy policy placeholder"
        description="Add approved privacy language here when your final contact workflows, tracking setup, and data-handling policies are ready."
      />
    </>
  );
}
