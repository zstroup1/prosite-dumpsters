import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variantClasses = {
  primary:
    "bg-brand-green text-brand-navy hover:bg-brand-green/90 focus-visible:ring-brand-green",
  secondary:
    "bg-brand-navy text-white hover:bg-brand-navy/92 focus-visible:ring-brand-navy",
  ghost:
    "border border-brand-sand bg-white/10 text-white hover:bg-white/15 focus-visible:ring-white",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold tracking-wide shadow-sm ring-2 ring-transparent",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
