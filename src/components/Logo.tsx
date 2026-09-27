export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-red via-brand-red to-brand-red-dim shadow-[0_8px_22px_-8px_rgba(227,30,36,0.95)] ring-1 ring-white/25">
        <span className="font-display text-lg font-extrabold leading-none text-white">ع</span>
        <span className="absolute -bottom-1 -end-1 h-2.5 w-2.5 rounded-full bg-white ring-2 ring-brand-red" />
      </div>
      <div className="flex flex-col leading-none">
        <span dir="rtl" className="font-display text-lg font-extrabold tracking-tight text-current">
          علامة
        </span>
        <span dir="ltr" className="font-latin text-[9px] font-semibold uppercase tracking-[0.28em] text-brand-red dark:text-brand-red-soft">
          Alama Agency
        </span>
      </div>
    </div>
  );
}
