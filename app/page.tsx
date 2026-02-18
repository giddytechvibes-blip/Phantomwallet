
import Header from "./components/layout/Header";
import HeroSection from "./components/sections/HeroSection";
import StatsSection from "./components/sections/StatsSection";
import SecuritySection from "./components/sections/SecuritySection";
import PhantomCashSection from "./components/sections/PhantomCashSection";
import TradingSection from "./components/sections/TradingSection";
import Footer from "./components/layout/Footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <SecuritySection />
        <PhantomCashSection />
        <TradingSection />
      </main>
      <Footer />
    </div>
  );
}
