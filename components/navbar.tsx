import Image from "next/image";
import Link from "next/link";

import { navItems } from "@/data/site";
import { siteConfig, smsHref } from "@/lib/site";

import { ButtonLink } from "./button-link";
import { DesktopRentalsMenu } from "./desktop-rentals-menu";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-sand/80 bg-white/95 backdrop-blur">
      <div className="container-shell relative flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="inline-flex shrink-0" aria-label={siteConfig.businessName}>
          <Image
            src="/prosite-dumpsters-logo.png"
            alt={`${siteConfig.businessName} logo`}
            width={1536}
            height={1024}
            priority
            className="h-16 w-auto object-contain lg:h-20"
          />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          <DesktopRentalsMenu />
          {navItems.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-brand-navy hover:text-brand-green"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <div className="rounded-md border border-brand-sand px-4 py-2 text-right">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-brand-ink/60">
              Fastest scheduling option
            </p>
            <p className="text-sm font-semibold text-brand-navy">Text {siteConfig.phoneDisplay}</p>
          </div>
          <ButtonLink href={smsHref()}>
            <MessageIcon />
            <span className="ml-2">Text Us</span>
          </ButtonLink>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}

function MessageIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.8 9.8 0 0 1-4-.9L3 21l1.7-4.2A8 8 0 0 1 3 11.5a8.4 8.4 0 0 1 9-8.5 8.4 8.4 0 0 1 9 8.5Z" />
    </svg>
  );
}
