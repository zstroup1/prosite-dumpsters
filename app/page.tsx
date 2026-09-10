import { CTASection } from "@/components/cta-section";
import { DumpsterPricingCards } from "@/components/dumpster-pricing-cards";
import { FAQ } from "@/components/faq";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { JsonLd } from "@/components/json-ld";
import { QuoteForm } from "@/components/quote-form";
import { SectionHeading } from "@/components/section-heading";
import { ServiceAreaCard } from "@/components/service-area-card";
import { ServiceCard } from "@/components/service-card";
import {
  audiences,
  faqs,
  projectTypes,
  serviceAreas,
  valueProps,
  whyProsite,
} from "@/data/site";
import { buildLocalBusinessJsonLd, buildServiceJsonLd } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildLocalBusinessJsonLd()} />
      <JsonLd
        data={buildServiceJsonLd(
          "Dumpster Rental",
          "Roll-off dumpster rentals for residential, construction, and commercial projects across Florida's Emerald Coast.",
          serviceAreas.map((area) => area.label),
        )}
      />
      <Hero />
      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="How easy it is"
            title="Dumpster Rental Made Simple"
            description="No complicated booking process. Send us a text and we&apos;ll take it from there."
            align="center"
          />
          <div className="mt-10">
            <HowItWorks />
          </div>
        </div>
      </section>
      <section className="section-space bg-brand-mist">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Why crews and homeowners choose ProSite"
            title="Professional dumpster service, made easy"
            description="Dependable roll-off dumpster rental for projects across the Emerald Coast."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {valueProps.map((item) => (
              <ServiceCard key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-space bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Dumpster sizes"
            title="Dumpster Rental Pricing"
            description="Straightforward rates for 15-yard and 20-yard dumpster rentals. Text us to schedule your delivery."
          />
          <div className="mt-10">
            <DumpsterPricingCards />
          </div>
        </div>
      </section>
      <section className="section-space bg-brand-mist">
        <div className="container-shell grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Who we serve"
              title="Support for homes, jobsites, and business properties"
              description="Different project types have different logistics, so the site speaks directly to the audiences most likely to book."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {audiences.map((audience) => (
                <ServiceCard key={audience} title={audience} />
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Project types"
              title="Common reasons to rent a dumpster"
              description="Examples stay broad and practical to avoid inventing project-specific company policies."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {projectTypes.map((project) => (
                <div key={project} className="card-surface px-5 py-4 text-sm font-semibold text-brand-navy">
                  {project}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Serving Florida's Emerald Coast"
            title="Coverage between Destin and Panama City Beach"
            description="ProSite Dumpsters provides fast, reliable dumpster rental service across the Emerald Coast, with coverage from Destin to Panama City Beach and the communities in between."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {serviceAreas.map((area) => (
              <ServiceAreaCard key={area.href} area={area} showLink={false} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-space bg-brand-mist">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="Why ProSite Dumpsters"
              title="Reliability and local knowledge first"
              description="Positioning centers on dependable service, clear communication, and professional equipment rather than generic marketing language."
            />
            <div className="mt-8 space-y-4">
              {whyProsite.map((item) => (
                <div key={item} className="card-surface flex gap-4 p-5 text-sm leading-7 text-brand-ink/80">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-green" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
      <CTASection />
      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Answers clients usually need before booking"
            description="FAQ language stays neutral where operating policies have not been provided yet."
          />
          <FAQ items={faqs} />
        </div>
      </section>
    </>
  );
}
