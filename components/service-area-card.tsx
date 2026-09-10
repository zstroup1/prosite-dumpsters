import Link from "next/link";

import type { ServiceArea } from "@/data/site";

type ServiceAreaCardProps = {
  area: ServiceArea;
  showLink?: boolean;
};

export function ServiceAreaCard({ area, showLink = true }: ServiceAreaCardProps) {
  return (
    <article className="card-surface flex h-full flex-col p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-green">
        Service area
      </p>
      <h3 className="mt-3 font-heading text-3xl uppercase tracking-[0.05em] text-brand-navy">
        {area.label}
      </h3>
      <p className="mt-4 text-sm leading-7 text-brand-ink/80">{area.description}</p>
      <ul className="mt-5 space-y-2 text-sm text-brand-ink/80">
        {area.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-brand-green" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
      {showLink ? (
        <Link
          href={area.href}
          className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-brand-navy hover:text-brand-green"
        >
          Explore {area.label}
        </Link>
      ) : null}
    </article>
  );
}
