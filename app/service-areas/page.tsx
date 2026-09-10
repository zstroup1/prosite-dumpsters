import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceAreaCard } from "@/components/service-area-card";
import { serviceAreas } from "@/data/site";
import { buildMetadata, buildServiceJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Dumpster Rentals Across the Emerald Coast | ProSite Dumpsters",
  description:
    "Roll-off dumpster rentals across Okaloosa, Walton, and Bay counties from Destin through Panama City Beach.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd
        data={buildServiceJsonLd(
          "Emerald Coast Dumpster Rental Service Area",
          "Roll-off dumpster rental coverage across Okaloosa, Walton, and Bay counties from Destin through Panama City Beach.",
          serviceAreas.map((area) => area.label),
        )}
      />
      <PageHero
        eyebrow="Service area"
        title="Dumpster Rentals Across the Emerald Coast"
        description="ProSite Dumpsters provides roll-off dumpster rentals throughout Okaloosa, Walton, and Bay counties, serving homeowners, contractors, developers, and construction projects from Destin through Panama City Beach."
      />
      <section className="border-b border-brand-sand bg-white">
        <div className="container-shell grid gap-3 py-6 sm:grid-cols-3">
          {['Okaloosa County', 'Walton County', 'Bay County'].map((county) => (
            <div key={county} className="rounded-md border border-brand-sand bg-brand-mist px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.16em] text-brand-navy">
              {county}
            </div>
          ))}
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Emerald Coast coverage"
            title="Most Popular Service Areas"
            description="Serving residential, contractor, and construction projects across the Emerald Coast."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {serviceAreas.map((area) => (
              <ServiceAreaCard key={area.href} area={area} showLink={false} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
