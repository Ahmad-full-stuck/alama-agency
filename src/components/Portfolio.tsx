import { motion } from "framer-motion";
import { ArrowUpLeft } from "lucide-react";
import { useSite } from "../context/SiteContext";
import { work, workHeading } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function Portfolio() {
  const { lang } = useSite();

  return (
    <section id="work" className="sec sec-plain relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-brand-red/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={workHeading.eyebrow[lang]}
          title={<span className="text-gradient text-glow">{workHeading.title[lang]}</span>}
          description={workHeading.description[lang]}
        >
          <a href="#/work" className="btn-glass btn-sm mt-1">
            {workHeading.viewAll[lang]}
            <ArrowUpLeft size={15} className="ltr:-scale-x-100" />
          </a>
        </SectionHeading>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {work.map((w, i) => (
            <motion.a
              key={w.slug}
              href={`#/work/${w.slug}`}
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative block aspect-[4/3] overflow-hidden rounded-[1.7rem] border border-white/12 bg-brand-dark2 shadow-[0_34px_70px_-45px_rgba(0,0,0,0.9)] transition-all duration-500 hover:border-brand-red/45 hover:shadow-[0_44px_80px_-42px_rgba(227,30,36,0.55)]"
            >
              <img
                src={w.image}
                alt={lang === "ar" ? w.titleAr : w.titleEn}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"
              />

              <span className="absolute start-4 top-4 rounded-full bg-brand-red px-3.5 py-1.5 text-[11px] font-bold text-white shadow-[0_10px_24px_-12px_rgba(227,30,36,1)]">
                {lang === "ar" ? w.tagAr : w.tagEn}
              </span>

              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                <div>
                  <p className="mb-1 text-xs font-medium text-white/55">
                    {lang === "ar" ? w.categoryAr : w.categoryEn}
                  </p>
                  <h3 className="font-display text-lg font-extrabold text-white">
                    {lang === "ar" ? w.titleAr : w.titleEn}
                  </h3>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-brand-red group-hover:bg-brand-red">
                  <ArrowUpLeft size={16} className="ltr:-scale-x-100" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
