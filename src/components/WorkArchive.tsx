import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useSite } from "../context/SiteContext";
import { work, workArchive } from "../data/content";

export function WorkArchive() {
  const { lang } = useSite();

  return (
    <section className="relative overflow-hidden px-6 pb-28 pt-36 sm:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid bg-grid-fade absolute inset-0 opacity-70" />
        <div className="absolute -top-32 start-[20%] h-[26rem] w-[26rem] rounded-full bg-brand-red/16 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 flex flex-col gap-6 sm:mb-20 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <a
              href="#home"
              className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-mute transition-colors hover:text-brand-red dark:text-brand-off/50 dark:hover:text-brand-red-soft"
            >
              <ArrowLeft size={14} className="ltr:-scale-x-100" />
              {workArchive.back[lang]}
            </a>
            <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-[-0.03em] text-brand-ink sm:text-7xl dark:text-white">
              {workArchive.titleA[lang]}{" "}
              <span className="text-gradient text-glow">{workArchive.titleB[lang]}</span>
            </h1>
          </div>
          <p className="max-w-sm text-sm leading-[1.9] text-brand-mute md:text-end dark:text-brand-off/55">
            {workArchive.description[lang]}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {work.map((p, index) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <a href={`#/work/${p.slug}`}>
                <div className="relative mb-6 aspect-[3/4] overflow-hidden rounded-[1.6rem] border border-white/12 bg-brand-dark2">
                  <img
                    src={p.image}
                    alt={lang === "ar" ? p.titleAr : p.titleEn}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-85 transition-all duration-700 group-hover:scale-[1.06] group-hover:opacity-100"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                  />
                  <div className="absolute end-4 top-4 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={18} className="ltr:-scale-x-100" />
                  </div>
                </div>
                <div className="flex items-baseline justify-between gap-3 border-t border-brand-ink/10 pt-4 dark:border-white/10">
                  <div>
                    <h3 className="mb-1 font-display text-lg font-extrabold text-brand-ink transition-colors group-hover:text-brand-red dark:text-white dark:group-hover:text-brand-red-soft">
                      {lang === "ar" ? p.titleAr : p.titleEn}
                    </h3>
                    <p className="text-xs font-medium text-brand-mute dark:text-brand-off/50">
                      {lang === "ar" ? p.categoryAr : p.categoryEn}
                    </p>
                  </div>
                  <span className="shrink-0 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-red dark:text-brand-red-soft">
                    {lang === "ar" ? p.tagAr : p.tagEn}
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
