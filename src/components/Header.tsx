import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Languages, ArrowLeft } from "lucide-react";
import { useSite } from "../context/SiteContext";
import { nav, hero } from "../data/content";
import { Logo } from "./Logo";

export function Header() {
  const { lang, isAr, toggleLang } = useSite();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = nav.map((n) => n.href.replace("#", ""));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.5, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-6 sm:pt-5">
      <div
        ref={navRef}
        className={`glass-nav relative flex w-full max-w-6xl items-center justify-between rounded-[1.6rem] px-3 py-2 text-brand-ink transition-all duration-500 sm:rounded-full sm:px-4 dark:text-brand-off ${
          scrolled ? "shadow-[0_18px_46px_-24px_rgba(16,16,16,0.65)]" : ""
        }`}
      >
        <a href="#home" className="text-current" aria-label="Alama Agency">
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-brand-ink/8 bg-white/45 p-1.5 shadow-inner dark:border-white/10 dark:bg-white/5 lg:flex">
          {nav.map((item) => {
            const isActive = active === item.key;
            return (
              <a
                key={item.key}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative rounded-full px-4 py-2 text-[13px] font-semibold transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-brand-ink/65 hover:text-brand-red dark:text-brand-off/65 dark:hover:text-brand-red-soft"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-brand-red to-brand-red-dim shadow-[0_8px_20px_-10px_rgba(227,30,36,0.95)]"
                  />
                )}
                {item.label[lang]}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={toggleLang}
            aria-label="toggle language"
            className="flex h-9 items-center gap-1.5 rounded-full border border-brand-ink/8 bg-white/50 px-3 text-[11px] font-bold text-brand-ink/80 transition-all duration-300 hover:border-brand-red/40 hover:text-brand-red dark:border-white/10 dark:bg-white/5 dark:text-brand-off/80 dark:hover:text-brand-red-soft"
          >
            <Languages size={14} />
            {isAr ? "EN" : "AR"}
          </button>

          <a
            href="#contact"
            className="btn-primary btn-sm hidden sm:inline-flex"
          >
            {hero.ctaPrimary[lang]}
            <ArrowLeft size={15} className="ltr:-scale-x-100" />
          </a>

          <button
            onClick={() => setOpen((p) => !p)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-ink/8 bg-white/50 text-brand-ink lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-brand-off"
            aria-label="menu"
            aria-expanded={open}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="glass absolute inset-x-0 top-[calc(100%+10px)] flex flex-col gap-1 overflow-hidden rounded-3xl p-3 lg:hidden"
            >
              {nav.map((item, i) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${
                    active === item.key
                      ? "bg-brand-red text-white"
                      : "text-brand-ink/80 hover:bg-brand-red/8 hover:text-brand-red dark:text-brand-off/80 dark:hover:bg-white/5"
                  }`}
                >
                  {item.label[lang]}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-1 w-full"
              >
                {hero.ctaPrimary[lang]}
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
