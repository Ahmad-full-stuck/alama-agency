import { type ReactNode } from "react";
import { cn } from "../utils/cn";

export function GlassCard({
  children,
  className,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass-card relative rounded-[1.75rem]",
        hover && "group",
        className
      )}
    >
      {children}
    </div>
  );
}
