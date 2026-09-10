import { JsonLd } from "@/components/json-ld";
import { ServiceAreaTemplate } from "@/components/service-area-template";
import { serviceAreas } from "@/data/site";
import { buildMetadata, buildServiceJsonLd } from "@/lib/seo";

const area = serviceAreas[2];

export const metadata = buildMetadata({
  title: "Dumpster Rental Santa Rosa Beach FL | ProSite Dumpsters",
  description: area.description,
  path: area.href,
});

export default function SantaRosaBeachPage() {
  return (
    <>
      <JsonLd data={buildServiceJsonLd(area.title, area.description, [area.label])} />
      <ServiceAreaTemplate area={area} />
    </>
  );
}
