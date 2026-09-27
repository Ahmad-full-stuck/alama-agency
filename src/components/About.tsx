import { motion } from "framer-motion";
import { Quote, Check } from "lucide-react";
import { useSite } from "../context/SiteContext";
import { about } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const { lang } = useSite();

  return (
    <section id="about" className="sec sec-soft relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid bg-grid-fade absolute inset-0" />
        <div className="absolute -start-24 top-1/3 h-80 w-80 rounded-full bg-brand-red/8 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 lg:order-1"
        >
          <SectionHeading
            align="start"
            eyebrow={about.eyebrow[lang]}
            title={about.title[lang]}
            className="mb-6 sm:mb-7"
          />

          <p className="text-base leading-loose text-brand-mute sm:text-[1.05rem] dark:text-brand-off/65">
            {about.paragraph1[lang]}
          </p>
          <p className="mt-4 text-base leading-loose text-brand-mute sm:text-[1.05rem] dark:text-brand-off/65">
            {about.paragraph2[lang]}
          </p>

          <div className="relative mt-8 overflow-hidden rounded-3xl border border-brand-red/15 bg-white/70 p-6 ps-7 shadow-[0_24px_60px_-40px_rgba(16,16,16,0.6)] dark:bg-white/5">
            <Quote
              className="absolute -top-2 start-5 h-8 w-8 rotate-180 text-brand-red/20"
              fill="currentColor"
            />
            <p className="font-display text-lg font-bold leading-relaxed text-brand-ink sm:text-xl dark:text-brand-off">
              {about.quote[lang]}
            </p>
          </div>

          <ul className="mt-7 flex flex-wrap gap-2.5">
            {about.tags.map((t, i) => (
              <li
                key={i}
                className="flex items-center gap-1.5 rounded-full border border-brand-ink/8 bg-white/70 px-3.5 py-2 text-xs font-semibold text-brand-ink/75 transition-colors duration-300 hover:border-brand-red/35 hover:text-brand-red dark:border-white/10 dark:bg-white/5 dark:text-brand-off/70"
              >
                <Check size={13} className="text-brand-red" strokeWidth={3} />
                {lang === "ar" ? t.ar : t.en}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 lg:order-2"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 shadow-[0_50px_100px_-55px_rgba(16,16,16,0.85)] dark:border-white/10">
            <img
              src="/images/about-visual.jpg"
              alt="Alama Agency"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-transparent to-transparent" />
            <div className="noise-overlay absolute inset-0" />
          </div>

          <div className="glass absolute -bottom-6 -start-4 hidden rounded-2xl px-6 py-4 sm:block">
            <p className="font-display text-2xl font-extrabold text-brand-red">علامة</p>
            <p className="font-latin text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-mute dark:text-brand-off/50">
              Since Day One
            </p>
          </div>

          <div className="glass absolute -top-5 -end-3 hidden rounded-2xl px-5 py-3.5 sm:block">
            <p className="flex items-center gap-2 text-xs font-bold text-brand-ink dark:text-brand-off">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-red opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-red" />
              </span>
              {lang === "ar" ? "فريق كامل لا وسطاء" : "Full team, no middlemen"}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
