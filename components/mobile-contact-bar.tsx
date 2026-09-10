import { smsHref, telHref } from "@/lib/site";

export function MobileContactBar() {
  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-brand-sand bg-white/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-10px_30px_-20px_rgba(15,39,71,0.5)] backdrop-blur lg:hidden"
    >
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a
          href={smsHref()}
          className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand-green px-4 text-sm font-semibold text-brand-navy focus-visible:ring-2 focus-visible:ring-brand-green"
        >
          Text Us
        </a>
        <a
          href={telHref()}
          className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand-navy px-4 text-sm font-semibold text-white focus-visible:ring-2 focus-visible:ring-brand-navy"
        >
          Call
        </a>
      </div>
    </aside>
  );
}
