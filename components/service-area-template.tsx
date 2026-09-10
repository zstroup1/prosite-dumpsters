import type { ServiceArea } from "@/data/site";

import { CTASection } from "./cta-section";
import { DumpsterPricingCards } from "./dumpster-pricing-cards";
import { PageHero } from "./page-hero";
import { SectionHeading } from "./section-heading";

type ServiceAreaTemplateProps = {
  area: ServiceArea;
};

export function ServiceAreaTemplate({ area }: ServiceAreaTemplateProps) {
  return (
    <>
      <PageHero eyebrow="Local service area" title={area.title} description={area.description} />
      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <SectionHeading
              eyebrow="Coverage"
              title={`Projects in ${area.label}`}
              description="ProSite Dumpsters focuses on practical scheduling, reliable delivery windows, and a simple rental experience for work in this local market."
            />
            <ul className="mt-8 space-y-4">
              {area.highlights.map((highlight) => (
                <li key={highlight} className="card-surface flex gap-4 p-5 text-sm leading-7 text-brand-ink/80">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-green" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-surface bg-brand-navy p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-green">
              Why local focus matters
            </p>
            <p className="mt-4 text-base leading-8 text-white/85">
              Limiting coverage to the Destin through Panama City Beach corridor helps keep route
              planning tighter, communication clearer, and project scheduling more dependable.
            </p>
          </div>
        </div>
      </section>
      <section className="section-space bg-brand-mist">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Size options"
            title="Available dumpster pricing"
            description="Compare current 15-yard and 20-yard rental durations, then text us to schedule."
          />
          <div className="mt-10">
            <DumpsterPricingCards />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
