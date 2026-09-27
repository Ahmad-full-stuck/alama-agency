import { motion } from "framer-motion";
import { Megaphone, Camera, Radar, Fingerprint, TrendingUp, ArrowLeft } from "lucide-react";
import { useSite } from "../context/SiteContext";
import { services } from "../data/content";
import { SectionHeading } from "./SectionHeading";

const iconMap = {
  megaphone: Megaphone,
  camera: Camera,
  trend: Radar,
  identity: Fingerprint,
  growth: TrendingUp,
};

export function Services() {
  const { lang } = useSite();

  return (
    <section id="services" className="sec sec-plain relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-brand-red/7 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={lang === "ar" ? "خدماتنا" : "What We Do"}
          title={
            lang === "ar" ? "شغلنا يغطي كل جوانب البراند" : "We cover every side of your brand"
          }
          description={
            lang === "ar"
              ? "من الفكرة إلى التنفيذ، كل خدمة نسويها إلها هدف واضح يخدم براندك."
              : "From idea to execution, every service we offer has a clear purpose that serves your brand."
          }
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            const feature = i === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={
                  feature
                    ? "group relative overflow-hidden rounded-[1.9rem] bg-gradient-to-br from-brand-red via-brand-red to-brand-red-dim p-7 text-white shadow-[0_34px_70px_-38px_rgba(227,30,36,0.95)] sm:col-span-2 lg:col-span-2"
                    : "glass-card group relative overflow-hidden rounded-[1.9rem] p-7"
                }
              >
                {feature && (
                  <>
                    <span className="sheen absolute inset-0 overflow-hidden" />
                    <span className="absolute -end-10 -top-10 h-40 w-40 rounded-full bg-white/12 blur-3xl" />
                    <span className="bg-grid absolute inset-0 opacity-40" />
                  </>
                )}

                <div
                  className={`relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 ${
                    feature
                      ? "bg-white/15 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] group-hover:scale-110"
                      : "bg-brand-tint text-brand-red group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white dark:bg-white/8 dark:text-brand-red-soft dark:group-hover:bg-brand-red"
                  }`}
                >
                  <Icon size={22} strokeWidth={2.1} />
                </div>

                <h3
                  className={`relative mb-2.5 font-display text-xl font-bold ${
                    feature ? "text-white" : "text-brand-ink dark:text-brand-off"
                  }`}
                >
                  {lang === "ar" ? s.titleAr : s.titleEn}
                </h3>
                <p
                  className={`relative max-w-md text-sm leading-relaxed ${
                    feature ? "text-white/80" : "text-brand-mute dark:text-brand-off/55"
                  }`}
                >
                  {lang === "ar" ? s.descAr : s.descEn}
                </p>

                <div
                  className={`relative mt-5 flex items-center gap-1.5 text-xs font-bold transition-all duration-300 ${
                    feature
                      ? "text-white opacity-100"
                      : "text-brand-red opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {lang === "ar" ? "اكتشف اكثر" : "Learn more"}
                  <ArrowLeft size={14} className="ltr:-scale-x-100" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
