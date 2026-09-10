import { JsonLd } from "@/components/json-ld";
import { ServicePageTemplate } from "@/components/service-page-template";
import { servicePageContent, serviceAreas } from "@/data/site";
import { buildMetadata, buildServiceJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Commercial Dumpster Rental Emerald Coast FL | ProSite Dumpsters",
  description:
    "Commercial dumpster rentals for businesses, property managers, and facility projects along Florida's Emerald Coast.",
  path: "/commercial-dumpster-rental",
});

export default function CommercialDumpsterRentalPage() {
  const content = servicePageContent.commercial;

  return (
    <>
      <JsonLd
        data={buildServiceJsonLd(content.title, content.intro, serviceAreas.map((area) => area.label))}
      />
      <ServicePageTemplate
        eyebrow="Commercial services"
        title={content.title}
        description={content.intro}
        bullets={content.bullets}
      />
    </>
  );
}
