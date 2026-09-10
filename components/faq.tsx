"use client";

import { useState } from "react";

import type { FAQItem } from "@/data/site";
import { cn } from "@/lib/utils";

type FAQProps = {
  items: FAQItem[];
};

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article key={item.question} className="card-surface overflow-hidden">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="font-semibold text-brand-navy">{item.question}</span>
              <span
                className={cn(
                  "text-2xl font-light text-brand-green transition-transform",
                  isOpen && "rotate-45",
                )}
              >
                +
              </span>
            </button>
            {isOpen ? (
              <div className="border-t border-brand-sand/80 px-6 py-5 text-sm leading-7 text-brand-ink/80">
                {item.answer}
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
