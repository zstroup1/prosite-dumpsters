import Image from "next/image";
import Link from "next/link";

import { navItems, serviceAreas } from "@/data/site";
import { siteConfig, smsHref, telHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-brand-sand bg-brand-mist">
      <div className="container-shell grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Image
            src="/prosite-dumpsters-logo.png"
            alt={`${siteConfig.businessName} logo`}
            width={1536}
            height={1024}
            className="h-20 w-auto max-w-full object-contain"
          />
          <p className="mt-4 max-w-md text-sm leading-7 text-brand-ink/80">
            Premium but approachable dumpster rental service for projects along Florida&apos;s
            Emerald Coast corridor from Destin to Panama City Beach.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-navy">
            Navigation
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-brand-ink/80 hover:text-brand-navy">
                {item.label}
              </Link>
            ))}
            <Link href="/privacy-policy" className="text-brand-ink/80 hover:text-brand-navy">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-brand-ink/80 hover:text-brand-navy">
              Terms
            </Link>
          </div>
          <div className="mt-6 text-sm">
            <a href={smsHref()} className="font-semibold text-brand-navy hover:text-brand-green">
              Text Us: {siteConfig.phoneDisplay}
            </a>
            <a href={telHref()} className="mt-2 block text-brand-ink/80 hover:text-brand-navy">
              Call ProSite
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-navy">
            Service areas
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            {serviceAreas.map((area) => (
              <Link key={area.href} href={area.href} className="text-brand-ink/80 hover:text-brand-navy">
                {area.label}
              </Link>
            ))}
            <Link href="/contact" className="text-brand-ink/80 hover:text-brand-navy">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-brand-sand/70">
        <div className="container-shell flex flex-col gap-3 py-5 text-sm text-brand-ink/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {siteConfig.businessName}. All rights reserved.</p>
          <p>{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
