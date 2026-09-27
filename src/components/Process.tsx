import { motion } from "framer-motion";
import { useSite } from "../context/SiteContext";
import { process } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  const { lang } = useSite();

  return (
    <section className="sec sec-plain relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-brand-red/6 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={lang === "ar" ? "طريقة العمل" : "Our Process"}
          title={lang === "ar" ? "أربع خطوات ووصلنا للهدف" : "Four steps to reach the goal"}
          description={
            lang === "ar"
              ? "منهجية واضحة من أول اتصال إلى آخر تقرير — تعرف وين وصلت في أي لحظة."
              : "A clear methodology from the first call to the final report — you always know where things stand."
          }
        />

        <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-16 hidden h-px w-full bg-gradient-to-r from-transparent via-brand-red/35 to-transparent lg:block" />
          {process.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card group relative rounded-[1.75rem] p-7"
            >
              <span className="absolute -top-3 start-7 flex h-7 w-7 items-center justify-center rounded-full border border-brand-red/25 bg-white text-[10px] font-bold text-brand-red shadow-[0_8px_18px_-10px_rgba(227,30,36,0.9)] transition-all duration-500 group-hover:bg-brand-red group-hover:text-white dark:bg-brand-dark2 dark:group-hover:bg-brand-red">
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
              </span>

              <span className="font-latin block bg-gradient-to-br from-brand-red to-brand-red-dim bg-clip-text text-4xl font-extrabold leading-none text-transparent">
                {p.num}
              </span>
              <h3 className="mt-4 mb-2 font-display text-xl font-bold text-brand-ink dark:text-brand-off">
                {lang === "ar" ? p.titleAr : p.titleEn}
              </h3>
              <p className="text-sm leading-relaxed text-brand-mute dark:text-brand-off/55">
                {lang === "ar" ? p.descAr : p.descEn}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
