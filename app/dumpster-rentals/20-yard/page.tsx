import { DumpsterPricingCards } from "@/components/dumpster-pricing-cards";
import { DumpsterPageHero } from "@/components/dumpster-page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "20 Yard Dumpster Rental | ProSite Dumpsters",
  description:
    "View 20-yard dumpster rental pricing for remodeling, roofing, and project debris across Florida's Emerald Coast.",
  path: "/dumpster-rentals/20-yard",
});

export default function TwentyYardDumpsterPage() {
  return (
    <>
      <DumpsterPageHero
        eyebrow="Dumpster rental"
        title="20 Yard Dumpster Rental"
        description="A larger dumpster rental option for cleanouts, roofing, remodeling, and construction debris across the Emerald Coast."
        imageSrc="/prosite-20-dumpster.png"
        imageAlt="ProSite 20 yard dumpster with dimensions"
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
            <DumpsterPricingCards sizes={["20 Yard Dumpster"]} showGroupHeading={false} />
          </div>
        </div>
      </section>
    </>
  );
}
