"use client";

import Link from "next/link";
import { useState } from "react";

import { dumpsterRentalNavItems } from "@/data/site";

export function DesktopRentalsMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setIsOpen(false);
        }
      }}
    >
      <Link href="/dumpster-rentals" className="text-sm font-semibold text-brand-navy hover:text-brand-green">
        Dumpster Rentals
      </Link>
      <button
        type="button"
        aria-label="Toggle Dumpster Rentals menu"
        aria-expanded={isOpen}
        aria-controls="desktop-dumpster-rentals-menu"
        onClick={() => setIsOpen((value) => !value)}
        className="ml-1 inline-flex h-8 w-6 items-center justify-center text-brand-navy hover:text-brand-green focus-visible:ring-2 focus-visible:ring-brand-green"
      >
        <svg aria-hidden="true" viewBox="0 0 16 16" className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m3 6 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {isOpen ? (
        <div
          id="desktop-dumpster-rentals-menu"
          className="absolute left-0 top-full z-50 w-56 rounded-md border border-brand-sand bg-white p-2 shadow-card"
        >
          {dumpsterRentalNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-sm px-3 py-2.5 text-sm font-semibold text-brand-navy hover:bg-brand-mist hover:text-brand-green"
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
