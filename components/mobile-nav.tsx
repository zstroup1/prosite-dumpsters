"use client";

import Link from "next/link";
import { useState } from "react";

import { dumpsterRentalNavItems, navItems } from "@/data/site";
import { smsHref } from "@/lib/site";

import { ButtonLink } from "./button-link";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRentalsOpen, setIsRentalsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen((value) => !value)}
        className="inline-flex min-h-11 items-center rounded-md border border-brand-sand px-4 py-2 text-sm font-semibold text-brand-navy focus-visible:ring-2 focus-visible:ring-brand-green"
      >
        Menu
      </button>
      {isOpen ? (
        <div
          id="mobile-menu"
          className="absolute inset-x-4 top-full mt-3 rounded-md border border-brand-sand bg-white p-5 shadow-card"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-3">
            <div className="rounded-sm">
              <div className="flex items-center justify-between">
                <Link
                  href="/dumpster-rentals"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 rounded-sm px-2 py-2 text-sm font-semibold text-brand-navy hover:bg-brand-mist"
                >
                  Dumpster Rentals
                </Link>
                <button
                  type="button"
                  aria-expanded={isRentalsOpen}
                  aria-controls="mobile-dumpster-rentals-menu"
                  onClick={() => setIsRentalsOpen((value) => !value)}
                  className="inline-flex min-h-10 min-w-10 items-center justify-center text-brand-navy focus-visible:ring-2 focus-visible:ring-brand-green"
                >
                  <span className="sr-only">Toggle dumpster sizes</span>
                  <svg aria-hidden="true" viewBox="0 0 16 16" className={`h-4 w-4 transition-transform ${isRentalsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m3 6 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              {isRentalsOpen ? (
                <div id="mobile-dumpster-rentals-menu" className="ml-3 border-l border-brand-sand pl-3">
                  {dumpsterRentalNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-sm px-2 py-2 text-sm font-semibold text-brand-ink/80 hover:bg-brand-mist hover:text-brand-navy"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-sm px-2 py-2 text-sm font-semibold text-brand-navy hover:bg-brand-mist"
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href={smsHref()} className="mt-2 w-full" variant="primary">
              Text Us
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
