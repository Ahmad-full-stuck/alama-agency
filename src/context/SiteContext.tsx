import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "ar" | "en";

interface SiteContextValue {
  lang: Lang;
  toggleLang: () => void;
  isAr: boolean;
}

const SiteContext = createContext<SiteContextValue | null>(null);

function urlParam(key: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    return new URLSearchParams(window.location.search).get(key);
  } catch {
    return null;
  }
}

function readLang(): Lang {
  if (typeof window === "undefined") return "ar";
  const forced = urlParam("lang");
  if (forced === "ar" || forced === "en") return forced;
  try {
    const stored = window.localStorage.getItem("alama-lang");
    if (stored === "ar" || stored === "en") return stored;
  } catch {
    /* ignore */
  }
  return document.documentElement.getAttribute("dir") === "ltr" ? "en" : "ar";
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(readLang);

  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
    try {
      window.localStorage.setItem("alama-lang", lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", "#0a0a0f");
    try {
      window.localStorage.removeItem("alama-theme");
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(
    () => ({
      lang,
      isAr: lang === "ar",
      toggleLang: () => setLang((p) => (p === "ar" ? "en" : "ar")),
    }),
    [lang]
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
}
