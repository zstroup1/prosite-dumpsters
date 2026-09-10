import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { whyProsite } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About ProSite Dumpsters | Emerald Coast Dumpster Rental",
  description:
    "Learn about ProSite Dumpsters and the local, dependable service approach behind its Emerald Coast dumpster rentals.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ProSite Dumpsters"
        title="Local focus. Dependable service."
        description="ProSite Dumpsters is positioned as a professional local operator serving the Emerald Coast corridor with communication, reliability, and clean equipment at the center of the experience."
      />
      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Brand position"
            title="Premium but approachable"
            description="This site avoids generic SaaS styling in favor of an industrial, coastal, and credible presentation that helps customers feel ready to request a dumpster quickly."
          />
          <div className="space-y-4">
            {whyProsite.map((item) => (
              <div key={item} className="card-surface flex gap-4 p-5 text-sm leading-7 text-brand-ink/80">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-green" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
