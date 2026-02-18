import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HomePrinciplesSection from "@/components/HomePrinciplesSection";
import QuotesSection from "@/components/QuotesSection";
import FeaturesSection from "@/components/FeaturesSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <HeroSection />
      <ProblemSection />
      <QuotesSection />
      <HomePrinciplesSection />
      <FeaturesSection />
      <CtaSection />
    </main>
    <Footer />
  </div>
);

export default Index;
