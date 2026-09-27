import { SiteProvider } from "./context/SiteContext";
import { ScrollProgress } from "./components/ScrollProgress";
import { BackToTop } from "./components/BackToTop";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Strengths } from "./components/Strengths";
import { Ticker } from "./components/Ticker";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Process } from "./components/Process";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";

function Page() {
  return (
    <div className="relative min-h-screen text-brand-ink transition-colors duration-500 dark:text-brand-off">
      {/* Fixed color field so glass surfaces have something to blur */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-brand-off transition-colors duration-500 dark:bg-brand-dark" />
        <div className="bg-mesh-light absolute inset-0" />
        <div className="absolute -top-40 -start-40 h-[30rem] w-[30rem] animate-float-slow rounded-full bg-brand-red/15 blur-[130px] dark:bg-brand-red/28" />
        <div className="absolute top-[38%] -end-44 h-[32rem] w-[32rem] animate-float-slower rounded-full bg-brand-red-soft/17 blur-[140px] dark:bg-brand-red/20" />
        <div className="absolute bottom-[6%] start-[6%] h-[26rem] w-[26rem] animate-floaty rounded-full bg-brand-red/10 blur-[130px] dark:bg-brand-red/14" />
        <div className="absolute bottom-[-14%] end-[22%] h-[24rem] w-[24rem] animate-float-slow rounded-full bg-brand-ink/6 blur-[130px] dark:bg-white/7" />
        <div className="absolute inset-0 bg-grid opacity-80" />
        <div className="noise-overlay absolute inset-0" />
      </div>

      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Strengths />
        <Ticker />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <FinalCta />
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
