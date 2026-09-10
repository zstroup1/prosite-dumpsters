import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { smsHref, telHref } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Dumpster Solutions for Contractors & Developers | ProSite Dumpsters",
  description:
    "Coordinate ongoing dumpster service, recurring rentals, and project-specific pricing with ProSite Dumpsters across the Emerald Coast.",
  path: "/dumpster-rentals/contractors-developers",
});

const benefits = [
  "Customized pricing based on project needs",
  "Recurring dumpster service",
  "Multiple container coordination",
  "Priority swap-out scheduling",
  "Flexible delivery and pickup coordination",
  "Support for longer-term projects",
  "One point of contact for ongoing jobs",
];

const projectDetails = [
  "Project location",
  "Expected project duration",
  "Dumpster size needed",
  "Estimated number of containers",
  "Expected swap frequency",
  "Preferred delivery schedule",
];

export default function ContractorsDevelopersPage() {
  return (
    <>
      <PageHero
        eyebrow="Ongoing project service"
        title="Dumpster Solutions for Contractors & Developers"
        description="Need dumpsters on an ongoing basis? ProSite works with contractors, developers, builders, and property managers to create flexible rental arrangements based on project volume, scheduling needs, and frequency of service."
      />
      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <SectionHeading
              eyebrow="Built around the job"
              title="Coordinated dumpster service for active projects"
              description="Custom pricing may be available for customers with ongoing projects, recurring dumpster needs, multiple simultaneous containers, or frequent swap-outs."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="card-surface flex items-start gap-3 p-4 text-sm font-semibold leading-6 text-brand-navy">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-green" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <aside className="rounded-md bg-brand-mist p-6 sm:p-8">
            <p className="eyebrow">What to send us</p>
            <h2 className="mt-3 font-heading text-3xl uppercase tracking-[0.05em] text-brand-navy">
              Project information
            </h2>
            <p className="mt-4 text-sm leading-7 text-brand-ink/80">
              A few details help us coordinate the right service plan for your project.
            </p>
            <ul className="mt-6 space-y-3">
              {projectDetails.map((detail) => (
                <li key={detail} className="flex gap-3 text-sm font-semibold text-brand-navy">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-green" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
      <section className="section-space bg-brand-navy text-white">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-4xl">
            <p className="eyebrow">Custom pricing</p>
            <h2 className="mt-3 font-heading text-4xl uppercase tracking-[0.05em] sm:text-5xl">
              Need Ongoing Dumpster Service?
            </h2>
            <p className="mt-5 text-base leading-8 text-white/85">
              If your project requires consistent dumpster service, we&apos;ll work with you to build
              a rental plan around your schedule, container volume, and service frequency.
            </p>
            <p className="mt-4 text-sm font-semibold text-brand-green">
              Special pricing is evaluated based on project requirements and ongoing service needs.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink
              href={smsHref("Hi ProSite, I'm interested in ongoing dumpster service for a project. Here's what we need: ")}
              className="min-h-12 whitespace-nowrap px-6 text-base"
            >
              Text Us About Your Project
            </ButtonLink>
            <ButtonLink href={telHref()} variant="ghost" className="min-h-12 whitespace-nowrap px-6 text-base">
              Call Us
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
