import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service | ProSite Dumpsters",
  description: "Placeholder terms page for ProSite Dumpsters.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Terms placeholder"
        description="Add your final rental terms, prohibited materials language, and legal disclosures here when they are available."
      />
    </>
  );
}
