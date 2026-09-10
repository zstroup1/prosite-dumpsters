type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-brand-sand/80 bg-brand-mist">
      <div className="container-shell py-14 sm:py-18">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-heading text-5xl uppercase leading-[0.94] tracking-[0.05em] text-brand-navy sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-brand-ink/80 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
