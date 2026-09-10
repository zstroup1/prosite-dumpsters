import { JsonLd } from "@/components/json-ld";
import { ServiceAreaTemplate } from "@/components/service-area-template";
import { serviceAreas } from "@/data/site";
import { buildMetadata, buildServiceJsonLd } from "@/lib/seo";

const area = serviceAreas[3];

export const metadata = buildMetadata({
  title: "Dumpster Rental 30A FL | ProSite Dumpsters",
  description: area.description,
  path: area.href,
});

export default function ThirtyAPage() {
  return (
    <>
      <JsonLd data={buildServiceJsonLd(area.title, area.description, [area.label])} />
      <ServiceAreaTemplate area={area} />
    </>
  );
}
