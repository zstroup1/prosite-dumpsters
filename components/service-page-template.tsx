import Link from "next/link";

import { serviceAreas } from "@/data/site";

import { CTASection } from "./cta-section";
import { DumpsterPricingCards } from "./dumpster-pricing-cards";
import { PageHero } from "./page-hero";
import { SectionHeading } from "./section-heading";

type ServicePageTemplateProps = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
};

export function ServicePageTemplate({
  eyebrow,
  title,
  description,
  bullets,
}: ServicePageTemplateProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <SectionHeading
              eyebrow="Overview"
              title="Built for organized projects"
              description={description}
            />
            <ul className="mt-8 space-y-4">
              {bullets.map((bullet) => (
                <li key={bullet} className="card-surface flex gap-4 p-5 text-sm leading-7 text-brand-ink/80">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-green" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="card-surface bg-brand-mist p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-navy">
              Areas served
            </p>
            <div className="mt-5 flex flex-col gap-4">
              {serviceAreas.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="rounded-md border border-brand-sand bg-white px-4 py-4 text-sm font-semibold text-brand-navy hover:border-brand-green"
                >
                  {area.label}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
      <section className="section-space bg-brand-mist">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Container sizes"
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
