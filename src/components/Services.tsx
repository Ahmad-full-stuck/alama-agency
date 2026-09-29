import { motion } from "framer-motion";
import { Flame, Camera, Radar, FileText } from "lucide-react";
import { useSite } from "../context/SiteContext";
import { services, servicesHeading } from "../data/content";
import { SectionHeading } from "./SectionHeading";

const iconMap = {
  flame: Flame,
  camera: Camera,
  chart: Radar,
  pen: FileText,
};

export function Services() {
  const { lang } = useSite();

  return (
    <section id="services" className="sec sec-soft relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid bg-grid-fade absolute inset-0" />
        <div className="absolute end-[10%] top-10 h-72 w-72 rounded-full bg-brand-red/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={servicesHeading.eyebrow[lang]}
          title={
            <>
              {servicesHeading.titleA[lang]}
              <span className="text-gradient text-glow">{servicesHeading.titleB[lang]}</span>
              {servicesHeading.titleC[lang]}
            </>
          }
          description={servicesHeading.description[lang]}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <motion.div
                key={s.titleEn}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card edge-light group relative overflow-hidden rounded-[1.6rem] p-7 text-center"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-red/20 bg-brand-red/10 text-brand-red transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white dark:bg-brand-red/12 dark:text-brand-red-soft dark:group-hover:text-white">
                  <Icon size={28} strokeWidth={2} />
                </div>
                <h3 className="mb-3 font-display text-xl font-extrabold text-brand-ink dark:text-white">
                  {lang === "ar" ? s.titleAr : s.titleEn}
                </h3>
                <p className="text-sm leading-[1.85] text-brand-mute dark:text-brand-off/55">
                  {lang === "ar" ? s.descAr : s.descEn}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
