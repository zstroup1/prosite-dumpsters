import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { smsHref } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "30 Yard Dumpster Rental | ProSite Dumpsters",
  description:
    "Coordinate a 30-yard dumpster rental for larger projects across Florida's Emerald Coast with ProSite Dumpsters.",
  path: "/dumpster-rentals/30-yard",
});

const projectUses = ["Large cleanouts", "Construction projects", "Contractor-led jobsites", "Major renovation debris"];

export default function ThirtyYardDumpsterPage() {
  return (
    <>
      <PageHero
        eyebrow="Larger project rentals"
        title="30 Yard Dumpster"
        description="A larger dumpster option for coordinated cleanouts, construction work, and contractor-led projects across the Emerald Coast."
      />
      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="flex min-h-64 items-center justify-center rounded-md border border-dashed border-brand-sand bg-brand-mist p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-ink/60">
              Equipment photo coming soon
            </p>
          </div>
          <div>
            <SectionHeading
              eyebrow="Built for larger projects"
              title="Coordinate your rental with ProSite"
              description="30-yard dumpster pricing is available by request. Text ProSite and we&apos;ll help coordinate the right rental for your project."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {projectUses.map((use) => (
                <li key={use} className="rounded-md border border-brand-sand bg-white px-4 py-3 text-sm font-semibold text-brand-navy">
                  {use}
                </li>
              ))}
            </ul>
            <ButtonLink
              href={smsHref("Hi ProSite, I'd like to coordinate a 30-yard dumpster. My delivery address is: ")}
              className="mt-8 min-h-12 px-6 text-base"
            >
              Text Us About a 30 Yard Dumpster
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
