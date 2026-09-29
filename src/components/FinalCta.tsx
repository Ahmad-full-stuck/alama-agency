import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Clock, Sparkles } from "lucide-react";
import { useSite } from "../context/SiteContext";
import { finalCta } from "../data/content";

const chipIcons = {
  pin: MapPin,
  clock: Clock,
  spark: Sparkles,
};

export function FinalCta() {
  const { lang } = useSite();

  return (
    <section id="contact" className="sec relative overflow-hidden">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card edge-light relative overflow-hidden rounded-[2.25rem] px-6 py-14 text-center sm:px-16 sm:py-16"
        >
          {/* Red radial glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[2.25rem]"
            style={{
              background:
                "radial-gradient(ellipse at 50% 100%, rgba(227,30,36,0.16) 0%, transparent 65%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -start-16 -top-16 h-72 w-72 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10">
            <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand-red/30 bg-brand-red/12 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-red dark:text-brand-red-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-red opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-red" />
              </span>
              {finalCta.available[lang]}
            </span>

            <h2 className="text-balance font-display text-[2rem] font-extrabold leading-[1.25] tracking-[-0.02em] text-brand-ink sm:text-5xl dark:text-white">
              {finalCta.titleA[lang]}
              <span className="text-gradient text-glow">{finalCta.titleHighlight[lang]}</span>
              {finalCta.titleB[lang]}
            </h2>

            <p className="mt-4 font-display text-xl font-bold text-brand-ink dark:text-white sm:text-2xl">
              {finalCta.lead[lang]}
            </p>

            <p className="mx-auto mt-6 max-w-xl text-base leading-[1.95] text-brand-mute sm:text-lg dark:text-brand-off/55">
              {finalCta.paragraph[lang]}
            </p>

            <div className="mt-9 flex justify-center">
              <a href="https://instagram.com/alama.agency" target="_blank" rel="noreferrer" className="btn-primary">
                {finalCta.cta[lang]}
                <ArrowLeft size={17} className="ltr:-scale-x-100" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {finalCta.chips.map((c) => {
                const Icon = chipIcons[c.icon];
                return (
                  <span
                    key={c.ar}
                    className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-brand-ink/70 dark:text-brand-off/65"
                  >
                    <Icon size={15} className="text-brand-red dark:text-brand-red-soft" />
                    {lang === "ar" ? c.ar : c.en}
                  </span>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
