import { siteConfig, smsHref, telHref } from "@/lib/site";

import { ButtonLink } from "./button-link";

export function CTASection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="rounded-md bg-brand-navy px-6 py-10 text-white shadow-card sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <p className="eyebrow">Need a dumpster?</p>
            <h2 className="mt-3 font-heading text-4xl uppercase tracking-[0.05em]">
              No complicated booking. Just text us.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/80">
              Tell us where you need a dumpster and what you&apos;re working on. We&apos;ll take it from
              there. {siteConfig.tagline}
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <ButtonLink href={smsHref()}>Text Us</ButtonLink>
            <ButtonLink href={telHref()} variant="ghost">Call Us</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
