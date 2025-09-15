import { Button } from "@/components/ui/button";
import homeShapes from "@/assets/home-shapes-full.svg";
import jivePhones from "@/assets/jive-phones.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-3 sm:px-4 md:px-8 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img 
          src={homeShapes} 
          alt="" 
          className="w-full h-full object-cover object-center opacity-30"
          aria-hidden="true"
        />
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center safe-width">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-6 sm:space-y-8 w-full overflow-hidden">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight drop-shadow-lg mobile-text-balance text-wrap-safe">
            Daily 30-Minute Opportunity – घर बैठे discover करें कुछ नया
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-md text-wrap-safe">
            हज़ारों लोग जुड़कर हर दिन free time को smart तरीके से use कर रहे हैं।
            <br />
            आप भी जान सकते हैं कैसे।
          </p>
          
          {/* Short Bullets */}
          <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-gray-700 w-full overflow-hidden">
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="text-xl sm:text-2xl flex-shrink-0">🕒</span>
              <span className="text-wrap-safe">सिर्फ़ <strong>30 min daily</strong></span>
            </div>
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="text-xl sm:text-2xl flex-shrink-0">🚀</span>
              <span className="text-wrap-safe">हर दिन <strong>fresh opportunity</strong></span>
            </div>
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="text-xl sm:text-2xl flex-shrink-0">🤝</span>
              <span className="text-wrap-safe">एक <strong>exclusive private group</strong> जहाँ सब साथ grow कर रहे हैं</span>
            </div>
          </div>
          
          {/* Social Proof */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200 shadow-lg w-full overflow-hidden">
            <p className="text-sm sm:text-base md:text-lg text-gray-800 font-medium text-wrap-safe leading-relaxed">
              Already <strong className="text-blue-600">10,000+</strong> लोग जुड़ चुके हैं और daily updates ले रहे हैं।
              <br />
              अब आपकी बारी है।
            </p>
          </div>
          
          <div className="pt-2 sm:pt-4">
            <Button 
              size="lg"
              className="bg-jive-heading text-white hover:bg-jive-heading/90 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium w-full sm:w-auto"
              onClick={() => window.open('https://t.me/your_telegram_group', '_blank')}
            >
              Join Our Private Telegram Group Now
            </Button>
          </div>
        </div>
        
        {/* Phone Mockups */}
        <div className="flex justify-center lg:justify-end mt-8 lg:mt-0 overflow-hidden">
          <img 
            src={jivePhones} 
            alt="Jive app on mobile phones showing QR code and messaging interface"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;