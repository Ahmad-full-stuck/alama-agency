import { Send, Mail, ArrowUp } from "lucide-react";
import { useSite } from "../context/SiteContext";
import { nav, services, footer } from "../data/content";
import { Logo } from "./Logo";

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

const socials = [
  { href: "https://instagram.com/alama.agency", label: "Instagram", icon: InstagramIcon },
  { href: "mailto:hello@alama.agency", label: "Email", icon: Mail },
  { href: "#contact", label: "Contact", icon: Send },
];

export function Footer() {
  const { lang } = useSite();

  return (
    <footer className="relative overflow-hidden bg-brand-dark px-5 pb-8 pt-16 text-brand-off sm:px-8 sm:pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-mesh-ink absolute inset-0 opacity-70" />
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="noise-overlay absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo className="text-brand-off" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-brand-off/60">
              {footer.blurb[lang]}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={s.label}
                    className="glass-dark flex h-11 w-11 items-center justify-center rounded-full text-brand-off/80 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/50 hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
              <a
                href="#home"
                aria-label="Back to top"
                className="glass-dark ms-auto flex h-11 w-11 items-center justify-center rounded-full text-brand-off/70 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/50 hover:text-white sm:ms-0"
              >
                <ArrowUp size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold text-brand-red-soft">{footer.linksTitle[lang]}</h4>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-brand-off/60 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-brand-red transition-all duration-300 group-hover:w-4" />
                    {item.label[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold text-brand-red-soft">
              {footer.servicesTitle[lang]}
            </h4>
            <ul className="space-y-3">
              {services.map((s, i) => (
                <li key={i} className="text-sm text-brand-off/60">
                  {lang === "ar" ? s.titleAr : s.titleEn}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-8 sm:flex-row">
          <p className="text-xs text-brand-off/50">
            © {new Date().getFullYear()} {lang === "ar" ? "وكالة علامة" : "Alama Agency"} —{" "}
            {footer.rights[lang]}
          </p>
          <p className="font-latin text-xs font-semibold uppercase tracking-[0.2em] text-brand-off/35">
            Bold. Sharp. Alama.
          </p>
        </div>
      </div>
    </footer>
  );
}
