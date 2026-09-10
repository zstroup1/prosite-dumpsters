import { DumpsterPricingCards } from "@/components/dumpster-pricing-cards";
import { DumpsterPageHero } from "@/components/dumpster-page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "15 Yard Dumpster Rental | ProSite Dumpsters",
  description:
    "View 15-yard dumpster rental pricing for cleanouts and projects across Florida's Emerald Coast.",
  path: "/dumpster-rentals/15-yard",
});

export default function FifteenYardDumpsterPage() {
  return (
    <>
      <DumpsterPageHero
        eyebrow="Dumpster rental"
        title="15 Yard Dumpster Rental"
        description="A practical dumpster rental option for cleanouts, smaller renovations, and project debris across the Emerald Coast."
        imageSrc="/prosite-15-dumpster.png?v=20260909"
        imageAlt="ProSite 15 yard dumpster with dimensions"
      />
      <section className="py-10 sm:py-12 lg:py-14">
        <div className="container-shell">
          <div>
            <h2 className="font-heading text-3xl uppercase tracking-[0.05em] text-brand-navy sm:text-4xl">
              Rental Options
            </h2>
            <p className="mt-2 text-sm leading-7 text-brand-ink/80 sm:text-base">
              Choose the rental period that fits your project.
            </p>
          </div>
          <div className="mt-6">
            <DumpsterPricingCards sizes={["15 Yard Dumpster"]} showGroupHeading={false} />
          </div>
        </div>
      </section>
    </>
  );
}
