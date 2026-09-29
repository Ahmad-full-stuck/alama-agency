import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useSite } from "../context/SiteContext";
import { work, workDetail } from "../data/content";

export function WorkDetail({ slug }: { slug: string }) {
  const { lang } = useSite();
  const index = work.findIndex((p) => p.slug === slug);
  const project = index >= 0 ? work[index] : undefined;

  if (!project) {
    return (
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 text-center">
        <h1 className="font-display text-4xl font-extrabold text-brand-ink dark:text-white">
          {workDetail.notFound[lang]}
        </h1>
        <a href="#/work" className="btn-glass btn-sm mt-6">
          {workDetail.viewAll[lang]}
        </a>
      </section>
    );
  }

  const next = work[(index + 1) % work.length];

  return (
    <section className="relative overflow-hidden px-6 pb-28 pt-36 sm:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid bg-grid-fade absolute inset-0 opacity-70" />
        <div className="absolute -top-32 end-[15%] h-[26rem] w-[26rem] rounded-full bg-brand-red/16 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <a
          href="#/work"
          className="mb-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-mute transition-colors hover:text-brand-red dark:text-brand-off/50 dark:hover:text-brand-red-soft"
        >
          <ArrowLeft size={14} className="ltr:-scale-x-100" />
          {workDetail.back[lang]}
        </a>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-brand-ink sm:text-6xl lg:text-7xl dark:text-white">
              {lang === "ar" ? project.titleAr : project.titleEn}
            </h1>
            <span className="shrink-0 text-sm font-bold text-brand-red md:mb-2 dark:text-brand-red-soft">
              {lang === "ar" ? project.tagAr : project.tagEn} —{" "}
              {lang === "ar" ? project.categoryAr : project.categoryEn}
            </span>
          </div>

          <div className="edge-light overflow-hidden rounded-[1.9rem] border border-white/12 bg-brand-dark2 shadow-[0_44px_90px_-50px_rgba(0,0,0,0.95)]">
            <img
              src={project.image}
              alt={lang === "ar" ? project.titleAr : project.titleEn}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid gap-12 md:grid-cols-[1fr_2fr]"
        >
          <div className="space-y-8">
            <div>
              <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-brand-mute dark:text-brand-off/45">
                {workDetail.serviceLabel[lang]}
              </span>
              <p className="font-display text-lg font-bold text-brand-ink dark:text-white">
                {lang === "ar" ? project.categoryAr : project.categoryEn}
              </p>
            </div>
            <div>
              <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-brand-mute dark:text-brand-off/45">
                {workDetail.typeLabel[lang]}
              </span>
              <p className="font-display text-lg font-bold text-brand-ink dark:text-white">
                {lang === "ar" ? project.tagAr : project.tagEn}
              </p>
            </div>
          </div>

          <div>
            <p className="text-xl leading-[2] text-brand-ink/80 sm:text-2xl dark:text-brand-off/75">
              {lang === "ar" ? project.descAr : project.descEn}
            </p>

            <div className="glass-card edge-light mt-10 flex flex-col items-center gap-5 rounded-[1.6rem] p-8 text-center sm:flex-row sm:justify-between sm:text-start">
              <div>
                <h3 className="font-display text-lg font-extrabold text-brand-ink dark:text-white">
                  {workDetail.ctaTitle[lang]}
                </h3>
                <p className="mt-1 text-sm text-brand-mute dark:text-brand-off/55">
                  {workDetail.cta[lang]}
                </p>
              </div>
              <a href="#contact" className="btn-primary btn-sm w-full sm:w-auto">
                {workDetail.cta[lang]}
                <ArrowLeft size={15} className="ltr:-scale-x-100" />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-20 border-t border-brand-ink/10 pt-14 text-center dark:border-white/10">
          <a href={`#/work/${next.slug}`} className="group inline-flex flex-col items-center gap-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-mute dark:text-brand-off/45">
              {workDetail.next[lang]}
            </span>
            <span className="inline-flex items-center gap-3 font-display text-4xl font-extrabold tracking-[-0.02em] text-brand-ink transition-colors group-hover:text-brand-red sm:text-6xl dark:text-white dark:group-hover:text-brand-red-soft">
              {lang === "ar" ? next.titleAr : next.titleEn}
              <ArrowUpRight
                size={30}
                className="transition-transform duration-300 group-hover:-translate-y-1 ltr:-scale-x-100"
              />
            </span>
          </a>
          <a href="#/work" className="btn-glass btn-sm mt-8">
            {workDetail.viewAll[lang]}
          </a>
        </div>
      </div>
    </section>
  );
}
