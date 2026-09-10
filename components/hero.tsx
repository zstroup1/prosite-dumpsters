import Image from "next/image";

import { siteConfig, smsHref, telHref } from "@/lib/site";

import { ButtonLink } from "./button-link";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden border-b border-white/15 bg-brand-navy text-white">
      <div className="absolute inset-y-0 right-0 hidden w-[50%] lg:block">
        <Image
          src="/hero-image.png"
          alt=""
          fill
          priority
          sizes="50vw"
          className="object-cover object-[68%_55%]"
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[44%] bg-gradient-to-r from-brand-navy via-brand-navy/70 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-navy/10 via-transparent to-brand-navy/[0.06]" />
      </div>
      <div className="container-shell relative z-10">
        <div className="relative py-16 lg:flex lg:min-h-[calc(100svh-5rem)] lg:w-[55%] lg:flex-col lg:justify-center lg:py-12 lg:pr-8 xl:pr-12">
          <div className="absolute inset-y-0 left-[-12%] hidden w-56 rounded-full bg-brand-green/10 blur-3xl lg:block" />
          <p className="eyebrow">The easiest way to rent a dumpster on the Emerald Coast</p>
          <h1 className="mt-4 max-w-4xl font-heading text-5xl uppercase leading-[0.96] tracking-[0.05em] text-balance sm:text-6xl lg:text-6xl xl:text-[4.25rem]">
            Need a Dumpster? Just Text Us.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
            Dumpster rental shouldn&apos;t be complicated. Text ProSite Dumpsters your location and
            what you need, and we&apos;ll get your delivery scheduled fast.
          </p>
          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={smsHref()} className="min-h-14 px-7 text-base">
              <MessageIcon />
              <span className="ml-2">Text to Schedule</span>
            </ButtonLink>
            <ButtonLink
              href={telHref()}
              variant="ghost"
              className="min-h-14 border-white/25 bg-white/[0.04] px-7 text-base text-white/85 shadow-none hover:bg-white/[0.08]"
            >
              Call Us
            </ButtonLink>
          </div>
          <p className="mt-5 hidden text-sm font-semibold text-white/80 lg:block">
            Prefer to text from your phone? Text us at {siteConfig.phoneDisplay}
          </p>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-white/75 lg:whitespace-nowrap lg:text-[0.625rem] lg:tracking-[0.08em] xl:text-[0.7rem] xl:tracking-[0.1em]">
            Serving {siteConfig.serviceAreas.join(" • ")}
          </p>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.24em] text-brand-green">
            {siteConfig.tagline}
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden lg:hidden">
          <Image
            src="/hero-image.png"
            alt="ProSite dumpster at a coastal home"
            width={1448}
            height={1086}
            priority
            className="h-full w-full object-cover object-[68%_center]"
          />
        </div>
      </div>
    </section>
  );
}

function MessageIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.8 9.8 0 0 1-4-.9L3 21l1.7-4.2A8 8 0 0 1 3 11.5a8.4 8.4 0 0 1 9-8.5 8.4 8.4 0 0 1 9 8.5Z" />
      <path d="M8 12h.01M12 12h.01M16 12h.01" />
    </svg>
  );
}
