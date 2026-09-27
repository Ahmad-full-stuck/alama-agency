import { useSite } from "../context/SiteContext";
import { tickerItems } from "../data/content";

function Row() {
  const { lang } = useSite();
  return (
    <div className="flex shrink-0 items-center gap-8 pe-8 sm:gap-12 sm:pe-12">
      {tickerItems.map((item, i) => (
        <span key={i} className="flex shrink-0 items-center gap-8 sm:gap-12">
          <span className="font-display text-sm font-bold tracking-wide text-brand-off/85 whitespace-nowrap sm:text-base">
            {item[lang]}
          </span>
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red shadow-[0_0_12px_2px_rgba(227,30,36,0.7)]" />
        </span>
      ))}
    </div>
  );
}

export function Ticker() {
  return (
    <div className="relative overflow-hidden border-y border-brand-ink/10 bg-brand-ink py-4 text-brand-off dark:border-white/10 dark:bg-brand-dark3">
      <div className="noise-overlay absolute inset-0" />
      <div className="marquee-mask relative flex w-max">
        <div className="animate-marquee flex w-max">
          <Row />
          <Row />
        </div>
      </div>
    </div>
  );
}
