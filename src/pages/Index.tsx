import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background mobile-no-scroll no-horizontal-scroll safe-width">
      <Header />
      <HeroSection />
      <HowItWorksSection />
    </div>
  );
};

export default Index;
