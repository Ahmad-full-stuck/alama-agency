import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.85 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="glass fixed bottom-6 end-6 z-50 flex h-12 w-12 items-center justify-center rounded-full text-brand-ink transition-colors duration-300 hover:border-brand-red/40 hover:text-brand-red dark:text-brand-off dark:hover:text-brand-red-soft"
        >
          <ArrowUp size={18} />
          <span className="absolute inset-0 -z-10 rounded-full border border-brand-red/30 animate-pulse-ring" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
