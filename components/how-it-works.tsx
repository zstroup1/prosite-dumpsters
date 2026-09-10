import { howItWorksSteps } from "@/data/site";
import { smsHref } from "@/lib/site";

import { ButtonLink } from "./button-link";

export function HowItWorks() {
  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-3">
        {howItWorksSteps.map((step, index) => (
          <article key={step.title} className="card-surface p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-green">
              0{index + 1}
            </p>
            <h3 className="mt-3 font-heading text-3xl uppercase tracking-[0.05em] text-brand-navy">
              {step.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-brand-ink/80">{step.description}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 text-center">
        <ButtonLink href={smsHref()} className="min-h-14 px-7 text-base">
          Text ProSite Now
        </ButtonLink>
      </div>
    </div>
  );
}
