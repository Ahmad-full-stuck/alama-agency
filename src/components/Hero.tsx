import { motion } from "framer-motion";
import { ArrowLeft, PlayCircle } from "lucide-react";
import { useSite } from "../context/SiteContext";
import { hero, stats } from "../data/content";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 34 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export function Hero() {
  const { lang } = useSite();

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-32 text-center"
    >
      {/* Concentric rings + pulse */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-ink/5 dark:border-white/5"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-ink/8 dark:border-white/8"
      />
      <div
        aria-hidden="true"
        className="animate-pulse-ring pointer-events-none absolute top-1/2 left-1/2 h-[19rem] w-[19rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-red/45"
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div {...rise(0)} className="mb-9 flex justify-center">
          <span className="glass inline-flex items-center gap-2.5 rounded-full px-5 py-2 text-sm font-medium text-brand-ink/70 dark:text-brand-off/70">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-red opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-red" />
            </span>
            {hero.eyebrow[lang]}
          </span>
        </motion.div>

        <motion.h1
          {...rise(0.08)}
          className="font-display text-[2.5rem] font-extrabold leading-[1.14] tracking-[-0.025em] sm:text-6xl lg:text-[4.6rem]"
        >
          <span className="text-brand-ink dark:text-white">{hero.titleLine1[lang]}</span>{" "}
          <span className="text-gradient text-glow">{hero.titleHighlight[lang]}</span>
          <br />
          <span className="text-brand-ink dark:text-white">{hero.titleLine2[lang]}</span>
        </motion.h1>

        <motion.p
          {...rise(0.16)}
          className="mx-auto mt-6 max-w-2xl text-base leading-[1.9] text-brand-mute sm:text-lg dark:text-brand-off/55"
        >
          {hero.subtitle[lang]}
        </motion.p>

        <motion.div
          {...rise(0.24)}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#contact" className="btn-primary w-full sm:w-auto">
            {hero.ctaPrimary[lang]}
            <ArrowLeft size={17} className="ltr:-scale-x-100" />
          </a>
          <a href="#work" className="btn-glass w-full sm:w-auto">
            <PlayCircle size={17} />
            {hero.ctaSecondary[lang]}
          </a>
        </motion.div>

        <motion.dl
          {...rise(0.34)}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-16"
        >
          {stats.map((s) => (
            <div key={s.value} className="text-center">
              <dd className="text-glow font-display text-3xl font-extrabold tracking-tight text-brand-red sm:text-4xl">
                {s.value}
              </dd>
              <dt className="mt-1.5 text-xs font-medium text-brand-mute dark:text-brand-off/45 sm:text-sm">
                {lang === "ar" ? s.labelAr : s.labelEn}
              </dt>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-9 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-mute/70 dark:text-brand-off/30">
          {hero.scrollHint[lang]}
        </span>
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-brand-ink/12 pt-1.5 dark:border-white/15">
          <motion.span
            className="h-2 w-1 rounded-full bg-brand-red"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
