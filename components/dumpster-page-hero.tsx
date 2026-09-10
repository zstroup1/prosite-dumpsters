import Image from "next/image";

type DumpsterPageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export function DumpsterPageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
}: DumpsterPageHeroProps) {
  return (
    <section className="border-b border-brand-sand/80 bg-brand-mist">
      <div className="container-shell grid items-center gap-8 py-8 sm:py-10 lg:grid-cols-2 lg:gap-10 lg:py-10">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-heading text-5xl uppercase leading-[0.94] tracking-[0.05em] text-brand-navy sm:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-brand-ink/80 sm:text-lg">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1536}
            height={1024}
            priority
            className="block h-auto w-auto max-w-full rounded-sm border-[3px] border-brand-navy object-contain shadow-[0_12px_30px_rgba(15,39,68,0.14)] lg:max-h-[20rem]"
          />
        </div>
      </div>
    </section>
  );
}
