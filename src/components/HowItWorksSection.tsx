import { Button } from "@/components/ui/button";
import feature1 from "@/assets/feature-1.svg";
import feature2 from "@/assets/feature-2.svg";
import feature3 from "@/assets/feature-3.svg";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: feature1,
      title: "Join Our Telegram Group",
      description: "Click the button above to join our exclusive private Telegram group where all opportunities are shared daily."
    },
    {
      icon: feature2,
      title: "Spend 30 Minutes Daily", 
      description: "Dedicate just 30 minutes of your free time each day to explore the fresh opportunities we share."
    },
    {
      icon: feature3,
      title: "Start Earning & Growing",
      description: "Follow the simple steps shared in the group and start earning while growing with our community."
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-8 bg-white overflow-hidden">
      <div className="w-full max-w-7xl mx-auto safe-width">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-jive-heading mb-3 sm:mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-jive-text">
            Simple steps to start your earning journey
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16 w-full">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4 sm:space-y-6 w-full overflow-hidden">
              <div className="flex justify-center">
                <img 
                  src={step.icon} 
                  alt={`Step ${index + 1}: ${step.title}`}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-jive-heading break-words">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-jive-text leading-relaxed max-w-xs mx-auto break-words">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-jive-heading text-white hover:bg-jive-heading/90 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium w-full sm:w-auto"
            onClick={() => window.open('https://t.me/your_telegram_group', '_blank')}
          >
            Join Our Private Telegram Group Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;