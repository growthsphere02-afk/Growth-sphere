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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight drop-shadow-lg mobile-text-balance text-wrap-safe">
            Daily 30-Minute Opportunity – घर बैठे Discover करें कुछ नया
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-md text-wrap-safe">
            हज़ारों लोग जुड़कर हर दिन Free Time को Smart तरीके से Use कर रहे हैं।
            <br />
            आप भी जान सकते हैं कैसे।
          </p>
          
          {/* Short Bullets */}
          <div className="space-y-4 sm:space-y-5 text-base sm:text-lg md:text-xl text-gray-700 w-full overflow-hidden">
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="text-xl sm:text-2xl flex-shrink-0">🕒</span>
              <span className="text-wrap-safe">सिर्फ़ <strong>30 Min Daily</strong></span>
            </div>
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="text-xl sm:text-2xl flex-shrink-0">🚀</span>
              <span className="text-wrap-safe">हर दिन <strong>Fresh Opportunity</strong></span>
            </div>
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="text-xl sm:text-2xl flex-shrink-0">🤝</span>
              <span className="text-wrap-safe">एक <strong>Exclusive Group</strong> जहाँ सब साथ Grow कर रहे हैं</span>
            </div>
          </div>
          
          {/* Social Proof */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm rounded-xl p-5 sm:p-6 md:p-7 border-2 border-blue-200 shadow-xl w-full overflow-hidden">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-900 font-bold text-wrap-safe leading-relaxed">
              Already <strong className="text-blue-700 bg-yellow-200 px-2 py-1 rounded-lg">10,000+</strong> लोग जुड़ चुके हैं
              <br />
              और <strong className="text-purple-700 bg-green-200 px-2 py-1 rounded-lg">Daily Updates</strong> ले रहे हैं।
              <br />
              <strong className="text-green-700">अब आपकी बारी है।</strong>
            </p>
          </div>
          
          {/* Daily Wealth Text */}
          <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-4 sm:p-5 rounded-lg shadow-lg">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
              Daily Wealth Bana Rahe hai 💰
            </p>
          </div>
          
          <div className="pt-2 sm:pt-4">
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
        
        {/* Phone Mockups */}
        <div className="flex justify-center lg:justify-end mt-8 lg:mt-0 overflow-hidden">
          <a 
            href="https://t.me/GrowthSpheree" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <img 
              src={jivePhones} 
              alt="Growth Sphere app on mobile phones showing QR code and messaging interface"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;