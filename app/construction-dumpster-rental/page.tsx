import { JsonLd } from "@/components/json-ld";
import { ServicePageTemplate } from "@/components/service-page-template";
import { servicePageContent, serviceAreas } from "@/data/site";
import { buildMetadata, buildServiceJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Construction Dumpster Rental Emerald Coast FL | ProSite Dumpsters",
  description:
    "Construction dumpster rentals for contractors and jobsites across Destin, 30A, and Panama City Beach.",
  path: "/construction-dumpster-rental",
});

export default function ConstructionDumpsterRentalPage() {
  const content = servicePageContent.construction;

  return (
    <>
      <JsonLd
        data={buildServiceJsonLd(content.title, content.intro, serviceAreas.map((area) => area.label))}
      />
      <ServicePageTemplate
        eyebrow="Construction services"
        title={content.title}
        description={content.intro}
        bullets={content.bullets}
      />
    </>
  );
}
