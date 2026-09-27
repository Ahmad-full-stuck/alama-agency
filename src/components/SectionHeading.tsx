import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../utils/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  children,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "start";
  tone?: "light" | "dark";
  children?: ReactNode;
  className?: string;
}) {
  const isDark = tone === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-12 flex flex-col gap-5 sm:mb-16",
        align === "center" ? "items-center text-center" : "items-start text-start",
        className
      )}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2
        className={cn(
          "text-balance max-w-3xl font-display text-[2rem] font-extrabold leading-[1.22] sm:text-[2.6rem]",
          isDark ? "text-white" : "text-brand-ink dark:text-brand-off"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed sm:text-lg",
            isDark ? "text-white/70" : "text-brand-mute dark:text-brand-off/60"
          )}
        >
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );
}
