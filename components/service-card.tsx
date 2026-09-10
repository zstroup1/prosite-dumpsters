type ServiceCardProps = {
  title: string;
  description?: string;
};

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="card-surface p-6">
      <div className="mb-4 h-1.5 w-16 bg-brand-green" />
      <h3 className="font-heading text-2xl uppercase tracking-[0.05em] text-brand-navy">{title}</h3>
      {description ? <p className="mt-3 text-sm leading-7 text-brand-ink/80">{description}</p> : null}
    </article>
  );
}
