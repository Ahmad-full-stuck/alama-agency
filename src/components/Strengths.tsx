import { motion } from "framer-motion";
import { Lightbulb, Clock, Radar, LineChart } from "lucide-react";
import { useSite } from "../context/SiteContext";
import { strengths } from "../data/content";

const icons = [Lightbulb, Clock, Radar, LineChart];

export function Strengths() {
  const { lang } = useSite();

  return (
    <section className="relative z-10 -mt-4 px-5 pb-4 sm:-mt-8 sm:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {strengths.map((s, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card group relative overflow-hidden rounded-[1.75rem] p-6"
            >
              <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-brand-red/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-tint text-brand-red transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white dark:bg-white/8 dark:text-brand-red-soft dark:group-hover:bg-brand-red dark:group-hover:text-white">
                <Icon size={19} strokeWidth={2.2} />
              </div>
              <h3 className="mb-1.5 font-display text-base font-bold text-brand-ink dark:text-brand-off">
                {lang === "ar" ? s.titleAr : s.titleEn}
              </h3>
              <p className="text-[13.5px] leading-relaxed text-brand-mute dark:text-brand-off/55">
                {lang === "ar" ? s.descAr : s.descEn}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
