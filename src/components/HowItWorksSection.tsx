import { Button } from "@/components/ui/button";
import feature1 from "@/assets/feature-1.svg";
import feature2 from "@/assets/feature-2.svg";
import feature3 from "@/assets/feature-3.svg";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: feature1,
      title: "Join Our Telegram Group",
      description: "Click the button above to join our exclusive Telegram group where all opportunities are shared daily."
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-jive-heading mb-3 sm:mb-4">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-jive-text">
            Simple steps to start your earning journey
          </p>
        </div>

        {/* About Growth Sphere */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 sm:p-10 md:p-12 mb-12 sm:mb-16 md:mb-20 border-2 border-blue-200 shadow-xl">
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Growth Sphere 🌍✨
            </h3>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 mb-6 font-medium">
              Your daily hub for personal growth, money mindset, and smart opportunities.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6">
              Here, we break down:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left max-w-4xl mx-auto">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔹</span>
                <span className="text-lg sm:text-xl font-medium text-gray-800">Actionable finance tips</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔹</span>
                <span className="text-lg sm:text-xl font-medium text-gray-800">Mindset shifts for success</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔹</span>
                <span className="text-lg sm:text-xl font-medium text-gray-800">Side hustles & online opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔹</span>
                <span className="text-lg sm:text-xl font-medium text-gray-800">Life hacks to grow smarter every day</span>
              </div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-6 font-medium">
              Join the community of learners & doers who believe in upgrading every area of life. 🚀
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium">
              👉 Start your growth journey now — because your future self is waiting inside the Growth Sphere.
            </p>
          </div>
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
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-jive-heading break-words">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-jive-text leading-relaxed max-w-xs mx-auto break-words">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 rounded-full px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-bold w-full sm:w-auto shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            onClick={() => window.open('https://t.me/GrowthSpheree', '_blank')}
          >
            <span className="flex items-center gap-3">
              <span>🚀</span>
              <span>Join Our Exclusive Telegram Group</span>
              <span>→</span>
            </span>
          </Button>
          <p className="text-center mt-3 text-base sm:text-lg text-gray-600 font-medium">
            (Abhi Join Kare) - Exclusive Telegram Group
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;