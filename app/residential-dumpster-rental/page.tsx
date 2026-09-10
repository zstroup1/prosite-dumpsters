import { JsonLd } from "@/components/json-ld";
import { ServicePageTemplate } from "@/components/service-page-template";
import { servicePageContent, serviceAreas } from "@/data/site";
import { buildMetadata, buildServiceJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Residential Dumpster Rental Emerald Coast FL | ProSite Dumpsters",
  description:
    "Residential dumpster rentals for cleanouts, remodels, and property projects from Destin to Panama City Beach.",
  path: "/residential-dumpster-rental",
});

export default function ResidentialDumpsterRentalPage() {
  const content = servicePageContent.residential;

  return (
    <>
      <JsonLd
        data={buildServiceJsonLd(content.title, content.intro, serviceAreas.map((area) => area.label))}
      />
      <ServicePageTemplate
        eyebrow="Residential services"
        title={content.title}
        description={content.intro}
        bullets={content.bullets}
      />
    </>
  );
}
