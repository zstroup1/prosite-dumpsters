import { AdditionalFees } from "@/components/additional-fees";
import { ContractorCallout } from "@/components/contractor-callout";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { RentalOverviewCard } from "@/components/rental-overview-card";
import { SectionHeading } from "@/components/section-heading";
import { dumpsterRentalOptions, serviceAreas } from "@/data/site";
import { buildMetadata, buildServiceJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Dumpster Rentals Emerald Coast FL | ProSite Dumpsters",
  description:
    "Roll-off dumpster rentals for residential, construction, and commercial projects from Destin to Panama City Beach.",
  path: "/dumpster-rentals",
});

export default function DumpsterRentalsPage() {
  const title = "Dumpster Rentals Across the Emerald Coast";
  const description =
    "ProSite Dumpsters provides 15-yard, 20-yard, and 30-yard dumpster rentals for home projects, job sites, and larger cleanups between Destin and Panama City Beach.";

  return (
    <>
      <JsonLd
        data={buildServiceJsonLd(title, description, serviceAreas.map((area) => area.label))}
      />
      <PageHero
        eyebrow="Dumpster rental overview"
        title={title}
        description={description}
      />
      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Choose your dumpster"
            title="Find the right rental for your project"
            description="Select a dumpster size to see its details and current pricing where available."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {dumpsterRentalOptions.map((option) => (
              <RentalOverviewCard key={option.href} option={option} />
            ))}
          </div>
        </div>
      </section>
      <ContractorCallout />
      <AdditionalFees />
    </>
  );
}
