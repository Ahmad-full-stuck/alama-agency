import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpLeft } from "lucide-react";
import { useSite } from "../context/SiteContext";
import { work, workCategories } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function Portfolio() {
  const { lang } = useSite();
  const [filter, setFilter] = useState("all");

  const visible = filter === "all" ? work : work.filter((w) => w.cat === filter);

  return (
    <section id="work" className="sec sec-soft relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid bg-grid-fade absolute inset-0" />
        <div className="absolute end-[10%] top-10 h-72 w-72 rounded-full bg-brand-red/8 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          align="start"
          eyebrow={lang === "ar" ? "أعمالنا" : "Our Work"}
          title={lang === "ar" ? "شغلنا يحچي عننا" : "Our work speaks for us"}
          description={
            lang === "ar"
              ? "مختارات من مشاريع اشتغلنا عليها بمختلف المجالات — من الهوية للحملة للتصوير."
              : "A selection of projects across different fields — from identity to campaign to photography."
          }
        >
          <div className="mt-2 flex flex-wrap gap-2.5">
            {workCategories.map((c) => (
              <button
                key={c.key}
                onClick={() => setFilter(c.key)}
                aria-pressed={filter === c.key}
                className={`chip ${filter === c.key ? "active" : ""}`}
              >
                {lang === "ar" ? c.ar : c.en}
              </button>
            ))}
          </div>
        </SectionHeading>

        <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((w, i) => (
              <motion.article
                key={w.titleEn}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-[1.9rem] border border-white/70 bg-white shadow-[0_34px_70px_-45px_rgba(16,16,16,0.8)] transition-shadow duration-500 hover:shadow-[0_44px_80px_-42px_rgba(227,30,36,0.6)] dark:border-white/10 dark:bg-brand-dark3"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={w.image}
                    alt={lang === "ar" ? w.titleAr : w.titleEn}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/85 via-brand-ink/20 to-transparent" />

                  <span className="absolute top-4 start-4 rounded-full bg-brand-red px-3.5 py-1.5 text-[11px] font-bold text-white shadow-[0_10px_24px_-12px_rgba(227,30,36,1)]">
                    {lang === "ar" ? w.tagAr : w.tagEn}
                  </span>
                </div>

                <div className="absolute inset-x-4 bottom-4 rounded-3xl p-5 glass-dark transition-all duration-500 group-hover:translate-y-[-4px] sm:inset-x-5 sm:bottom-5">
                  <h3 className="mb-1 font-display text-lg font-bold text-white">
                    {lang === "ar" ? w.titleAr : w.titleEn}
                  </h3>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs text-white/65">
                      {lang === "ar" ? w.categoryAr : w.categoryEn}
                    </p>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 group-hover:border-brand-red group-hover:bg-brand-red">
                      <ArrowUpLeft size={15} className="ltr:-scale-x-100" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
