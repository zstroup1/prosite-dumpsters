import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { SectionHeading } from "@/components/section-heading";
import { serviceAreas } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact ProSite Dumpsters | Get a Quote",
  description:
    "Request a dumpster quote for projects from Destin to Panama City Beach with ProSite Dumpsters.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact and quote"
        title="Dumpster Rental Quote Request"
        description="Text ProSite for the fastest way to schedule a dumpster rental, or use the form below to request a traditional quote."
      />
      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Service coverage"
              title="Destin to Panama City Beach"
              description="Current coverage is intentionally limited to the Emerald Coast corridor listed on this site."
            />
            <div className="card-surface p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-navy">
                Included areas
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-brand-ink/80">
                {serviceAreas.map((area) => (
                  <li key={area.href} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand-green" />
                    <span>{area.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
