import Link from "next/link";

export function ContractorCallout() {
  return (
    <section className="section-space pt-0">
      <div className="container-shell">
        <div className="rounded-md bg-brand-navy px-6 py-8 text-white shadow-card sm:px-10">
          <p className="eyebrow">Contractors &amp; Developers</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="font-heading text-4xl uppercase tracking-[0.05em]">Contractors &amp; Developers</h2>
              <p className="mt-3 max-w-3xl text-base leading-8 text-white/85">
                Managing an ongoing project? We can customize pricing and scheduling for recurring
                dumpster service.
              </p>
            </div>
            <Link
              href="/dumpster-rentals/contractors-developers"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand-green px-6 py-3 text-sm font-semibold tracking-wide text-brand-navy hover:bg-brand-green/90 focus-visible:ring-2 focus-visible:ring-brand-green"
            >
              Learn About Contractor Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
