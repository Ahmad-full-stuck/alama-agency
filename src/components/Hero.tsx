import { motion } from "framer-motion";
import { ArrowLeft, PlayCircle, Sparkles, TrendingUp, Megaphone, Star } from "lucide-react";
import { useSite } from "../context/SiteContext";
import { hero, stats } from "../data/content";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  const { lang } = useSite();

  return (
    <section id="home" className="relative overflow-hidden pb-14 pt-32 sm:pb-20 sm:pt-40">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-mesh-light absolute inset-0" />
        <div className="bg-grid bg-grid-fade absolute inset-0" />
        <div className="absolute -top-32 start-[15%] h-[26rem] w-[26rem] animate-float-slow rounded-full bg-brand-red/15 blur-[130px]" />
        <div className="absolute bottom-0 end-[8%] h-[22rem] w-[22rem] animate-float-slower rounded-full bg-brand-red/10 blur-[120px]" />
        <div className="noise-overlay absolute inset-0" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* Copy */}
        <div className="text-center lg:text-start">
          <motion.div {...rise(0)} className="eyebrow mb-6">
            <Sparkles size={13} />
            {hero.eyebrow[lang]}
          </motion.div>

          <motion.h1
            {...rise(0.08)}
            className="text-balance font-display text-[2.35rem] font-extrabold leading-[1.2] text-brand-ink sm:text-6xl sm:leading-[1.15] lg:text-[4.1rem] dark:text-brand-off"
          >
            {hero.titleLine1[lang]}{" "}
            <span className="text-gradient">{hero.titleHighlight[lang]}</span>
            <br />
            {hero.titleLine2[lang]}
          </motion.h1>

          <motion.p
            {...rise(0.16)}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-brand-mute sm:text-lg lg:mx-0 dark:text-brand-off/65"
          >
            {hero.subtitle[lang]}
          </motion.p>

          <motion.div
            {...rise(0.24)}
            className="mt-8 flex flex-col items-center gap-3.5 sm:flex-row lg:justify-start"
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

          {/* Stats */}
          <motion.dl
            {...rise(0.34)}
            className="glass mt-10 grid grid-cols-2 gap-x-4 gap-y-5 rounded-3xl px-5 py-5 sm:grid-cols-4 sm:gap-2 sm:px-6"
          >
            {stats.map((s) => (
              <div key={s.value} className="flex flex-col items-center gap-1 sm:items-start">
                <dt className="order-2 text-[11px] font-semibold leading-tight text-brand-mute dark:text-brand-off/55">
                  {lang === "ar" ? s.labelAr : s.labelEn}
                </dt>
                <dd className="order-1 font-latin text-2xl font-extrabold tracking-tight text-brand-red sm:text-[1.7rem]">
                  {s.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/70 shadow-[0_44px_90px_-45px_rgba(16,16,16,0.75)] dark:border-white/10">
            <img
              src="images/hero-visual.jpg"
              alt={lang === "ar" ? "حملة إبداعية من تنفيذ علامة" : "A creative campaign by Alama"}
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/5]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/75 via-brand-ink/10 to-transparent" />
            <div className="noise-overlay absolute inset-0" />

            {/* Floating rating chip */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="glass-dark absolute top-5 start-5 flex items-center gap-2 rounded-2xl px-4 py-3"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-red text-white">
                <Star size={14} fill="currentColor" />
              </span>
              <span className="text-start leading-tight">
                <span className="block font-display text-sm font-bold text-white">
                  {lang === "ar" ? "نتائج تُقاس" : "Measurable results"}
                </span>
                <span className="font-latin text-[10px] font-medium uppercase tracking-[0.18em] text-white/60">
                  +218% reach
                </span>
              </span>
            </motion.div>

            {/* Bottom glass panel */}
            <div className="absolute inset-x-4 bottom-4 rounded-3xl p-4 glass-dark sm:inset-x-5 sm:bottom-5 sm:p-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-xs font-bold text-white/80">
                  <TrendingUp size={14} className="text-brand-red-soft" />
                  {lang === "ar" ? "أداء الحملة" : "Campaign performance"}
                </span>
                <span className="font-latin rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white/70">
                  LIVE
                </span>
              </div>
              <div className="flex h-16 items-end gap-1.5 sm:h-20" aria-hidden="true">
                {[38, 52, 44, 68, 58, 82, 74, 96].map((h, i) => (
                  <motion.span
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.7, delay: 0.5 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-brand-red/40 to-brand-red"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Floating tag */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="glass absolute -top-5 -end-5 z-10 hidden items-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-bold text-brand-ink sm:flex dark:text-brand-off"
          >
            <Megaphone size={16} className="text-brand-red" />
            {hero.floatingTag1[lang]}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
