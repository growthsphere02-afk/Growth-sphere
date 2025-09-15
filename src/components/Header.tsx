import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.PNG";

const Header = () => {
  return (
    <header className="relative z-10 w-full py-4 sm:py-6 px-3 sm:px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between safe-width">
        <div className="flex items-center gap-2 sm:gap-3">
          <img 
            src={logo} 
            alt="Growth Sphere Logo" 
            className="h-10 w-auto sm:h-12 md:h-14 lg:h-16"
          />
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Growth Sphere</span>
        </div>
        
        <div className="flex items-center gap-4 sm:gap-6">
          <a 
            href="#about" 
            className="text-sm sm:text-base text-jive-text hover:text-jive-heading transition-colors"
          >
            About
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;