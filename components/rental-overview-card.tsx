import Link from "next/link";

type RentalOverviewCardProps = {
  option: {
    href: string;
    size: string;
    description: string;
    pricing: string[] | null;
  };
};

export function RentalOverviewCard({ option }: RentalOverviewCardProps) {
  return (
    <article className="card-surface flex h-full flex-col p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-green">Dumpster rental</p>
      <h2 className="mt-3 font-heading text-3xl uppercase tracking-[0.05em] text-brand-navy">
        {option.size}
      </h2>
      <p className="mt-4 text-sm leading-7 text-brand-ink/80">{option.description}</p>
      {option.pricing ? (
        <ul className="mt-5 space-y-2 border-y border-brand-sand py-4 text-sm font-semibold text-brand-navy">
          {option.pricing.map((rate) => (
            <li key={rate}>{rate}</li>
          ))}
        </ul>
      ) : (
        <p className="mt-5 border-y border-brand-sand py-4 text-sm font-semibold leading-6 text-brand-navy">
          Pricing available by request.
        </p>
      )}
      <Link
        href={option.href}
        className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-brand-green px-5 py-3 text-sm font-semibold tracking-wide text-brand-navy hover:bg-brand-green/90 focus-visible:ring-2 focus-visible:ring-brand-green"
      >
        View {option.size}
      </Link>
    </article>
  );
}
