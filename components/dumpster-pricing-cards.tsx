import { dumpsterPricing, includedTonnageNotice } from "@/data/site";
import { smsHref } from "@/lib/site";

import { ButtonLink } from "./button-link";

type DumpsterPricingCardsProps = {
  sizes?: string[];
  showGroupHeading?: boolean;
};

export function DumpsterPricingCards({ sizes, showGroupHeading = true }: DumpsterPricingCardsProps) {
  const pricingGroups = sizes
    ? dumpsterPricing.filter((dumpster) => sizes.includes(dumpster.size))
    : dumpsterPricing;

  return (
    <div>
      <div className="space-y-8">
        {pricingGroups.map((dumpster) => (
          <section
            key={dumpster.size}
            aria-labelledby={showGroupHeading ? `${toId(dumpster.size)}-rentals` : undefined}
          >
            {showGroupHeading ? (
              <h3
                id={`${toId(dumpster.size)}-rentals`}
                className="font-heading text-4xl uppercase tracking-[0.05em] text-brand-navy sm:text-5xl"
              >
                {dumpster.size} Rentals
              </h3>
            ) : null}
            <div className={showGroupHeading ? "mt-4 space-y-4" : "space-y-4"}>
              {dumpster.durations.map((duration) => {
                const dumpsterSize = dumpster.size.replace(" Dumpster", "");
                const smsMessage = `Hi ProSite, I'd like to schedule a ${dumpsterSize.toLowerCase().replace(" yard", "-yard")} dumpster for ${duration.label.toLowerCase()}. My delivery address is: `;

                return (
                  <article key={duration.label} className="overflow-hidden rounded-md border border-brand-sand bg-white shadow-card">
                    <h4 className="bg-brand-navy px-5 py-2 font-heading text-lg uppercase tracking-[0.05em] text-white sm:px-6 sm:text-xl">
                      {dumpster.size} — {duration.cardTitle}
                    </h4>
                    <div className="grid bg-brand-mist lg:grid-cols-[minmax(0,1fr)_auto] lg:items-stretch">
                      <div className="flex flex-col justify-center px-5 py-4 text-center lg:px-6 lg:py-3 lg:text-left">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink/65">
                          Rental price
                        </p>
                        <p className="mt-0.5 font-heading text-4xl font-normal leading-none tracking-[0.04em] text-brand-navy sm:text-5xl lg:text-5xl">
                          {duration.price}
                        </p>
                      </div>
                      <div className="flex items-center justify-center border-t border-brand-sand px-5 py-4 lg:border-l lg:border-t-0 lg:px-6 lg:py-3">
                        <ButtonLink href={smsHref(smsMessage)} className="min-h-11 w-full px-5 text-sm lg:w-52">
                          Text to Schedule
                        </ButtonLink>
                      </div>
                    </div>
                    <dl className="grid border-t border-brand-sand sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                      <Detail label="Dumpster Size" value={dumpsterSize} />
                      <Detail label="Rental Time" value={duration.label} />
                      <Detail label="Included Tonnage" value={dumpster.includedTonnage} />
                      <Detail label="Additional Days" value="$18/day" />
                      <Detail label="Extra Weight" value="$85/ton" />
                    </dl>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
      <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-7 text-brand-ink/75">
        {includedTonnageNotice}
      </p>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-brand-sand px-3 py-2 last:border-b-0 sm:[&:nth-child(odd)]:border-r md:[&:nth-child(3n)]:border-r-0 lg:border-b-0 lg:border-r lg:[&:nth-child(3n)]:border-r lg:last:border-r-0">
      <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-brand-ink/60">{label}</dt>
      <dd className="mt-0.5 text-sm font-semibold text-brand-navy">{value}</dd>
    </div>
  );
}

function toId(value: string) {
  return value.toLowerCase().replaceAll(" ", "-");
}
