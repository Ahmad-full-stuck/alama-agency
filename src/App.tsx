import { useEffect } from "react";
import { SiteProvider } from "./context/SiteContext";
import { routeKey, useHashRoute } from "./router";
import { ScrollProgress } from "./components/ScrollProgress";
import { BackToTop } from "./components/BackToTop";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { FinalCta } from "./components/FinalCta";
import { WorkArchive } from "./components/WorkArchive";
import { WorkDetail } from "./components/WorkDetail";
import { Footer } from "./components/Footer";

function Page() {
  const route = useHashRoute();
  const key = routeKey(route);

  useEffect(() => {
    if (route.name !== "home") {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    const anchor = route.anchor;
    const id = window.setTimeout(() => {
      if (anchor) {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        else window.scrollTo({ top: 0, behavior: "auto" });
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    }, 70);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return (
    <div className="relative min-h-screen text-brand-ink transition-colors duration-500 dark:text-brand-off">
      {/* Fixed color field so glass surfaces have something to blur */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-brand-off transition-colors duration-500 dark:bg-brand-dark" />
        <div className="bg-mesh-light absolute inset-0" />
        <div className="absolute -top-40 -start-40 h-[30rem] w-[30rem] animate-float-slow rounded-full bg-brand-red/15 blur-[130px] dark:bg-brand-red/30" />
        <div className="absolute top-[38%] -end-44 h-[32rem] w-[32rem] animate-float-slower rounded-full bg-brand-red-soft/17 blur-[140px] dark:bg-brand-red/22" />
        <div className="absolute bottom-[6%] start-[6%] h-[26rem] w-[26rem] animate-floaty rounded-full bg-brand-red/10 blur-[130px] dark:bg-brand-red/16" />
        <div className="absolute bottom-[-14%] end-[22%] h-[24rem] w-[24rem] animate-float-slow rounded-full bg-brand-ink/6 blur-[130px] dark:bg-white/7" />
        <div className="absolute inset-0 bg-grid opacity-80" />
        <div className="noise-overlay absolute inset-0" />
      </div>

      <ScrollProgress />
      <Header />
      <main>
        {route.name === "work" ? (
          <WorkArchive />
        ) : route.name === "project" ? (
          <WorkDetail slug={route.slug} />
        ) : (
          <>
            <Hero />
            <Services />
            <Portfolio />
            <FinalCta />
          </>
        )}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <SiteProvider>
      <Page />
    </SiteProvider>
  );
}
