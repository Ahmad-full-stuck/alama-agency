import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import { useSite } from "../context/SiteContext";
import { finalCta } from "../data/content";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function FinalCta() {
  const { lang } = useSite();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-[#ff4a4f] via-brand-red to-[#8f1216] px-5 py-24 sm:px-8 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-30" />
        <div className="absolute -start-16 -top-16 h-72 w-72 animate-float-slow rounded-full bg-white/15 blur-[90px]" />
        <div className="absolute -end-10 bottom-0 h-64 w-64 animate-float-slower rounded-full bg-brand-ink/30 blur-[100px]" />
        <div className="noise-overlay absolute inset-0" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="glass-dark relative mx-auto flex max-w-4xl flex-col items-center rounded-[2.5rem] px-6 py-14 text-center sm:px-16 sm:py-16"
      >
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white/85">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          {lang === "ar" ? "متاحين لمشروعك" : "Open for new projects"}
        </span>

        <h2 className="text-balance font-display text-[2rem] font-extrabold leading-[1.2] text-white sm:text-5xl">
          {finalCta.title[lang]}
        </h2>
        <p className="mt-5 max-w-lg text-white/80 sm:text-lg">{finalCta.subtitle[lang]}</p>

        <div className="mt-9 flex w-full flex-col items-center gap-3.5 sm:w-auto sm:flex-row">
          <a
            href="https://instagram.com/alama.agency"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-brand-red shadow-[0_18px_40px_-18px_rgba(0,0,0,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-18px_rgba(0,0,0,0.85)] sm:w-auto sm:text-base"
          >
            {finalCta.cta[lang]}
            <ArrowLeft size={17} className="ltr:-scale-x-100 transition-transform group-hover:-translate-x-0.5" />
          </a>
          <a
            href="mailto:hello@alama.agency"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/20 sm:w-auto sm:text-base"
          >
            <Mail size={16} />
            hello@alama.agency
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-white/70">
          <span className="flex items-center gap-1.5">
            <InstagramIcon size={14} />
            @alama.agency
          </span>
          <span className="flex items-center gap-1.5">
            <Phone size={14} />
            {lang === "ar" ? "رد خلال ساعة" : "Reply within an hour"}
          </span>
        </div>
      </motion.div>
    </section>
  );
}
