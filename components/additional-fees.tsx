import { additionalFees } from "@/data/site";

export function AdditionalFees() {
  return (
    <section className="section-space bg-brand-mist">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Rental details</p>
          <h2 className="mt-3 font-heading text-4xl uppercase tracking-[0.04em] text-brand-navy sm:text-5xl">
            Additional Fees
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {additionalFees.map((fee) => (
            <article key={fee.label} className="rounded-md border border-brand-sand bg-white p-5">
              <h3 className="text-sm font-semibold leading-6 text-brand-navy">{fee.label}</h3>
              <p className="mt-3 text-sm font-semibold text-brand-ink/75">{fee.detail}</p>
            </article>
          ))}
          <article className="rounded-md border border-brand-sand bg-white p-5 md:col-span-2 xl:col-span-3">
            <h3 className="text-sm font-semibold leading-6 text-brand-navy">Mid-rental swap/dump</h3>
            <p className="mt-2 text-sm text-brand-ink/75">Monthly tier only</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <p className="rounded-sm bg-brand-mist px-4 py-3 text-sm font-semibold text-brand-navy">
                15 Yard: $150 per swap
              </p>
              <p className="rounded-sm bg-brand-mist px-4 py-3 text-sm font-semibold text-brand-navy">
                20 Yard: $175 per swap
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
