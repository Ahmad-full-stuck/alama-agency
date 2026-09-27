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
    <div className="min-h-screen bg-brand-off text-brand-ink transition-colors duration-500 dark:bg-brand-dark dark:text-brand-off">
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
