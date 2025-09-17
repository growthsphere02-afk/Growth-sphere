const Footer = () => {
  return (
    <footer className="bg-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-center mb-8">
          <span className="text-3xl font-bold text-jive-heading">Growth Sphere 🌍✨</span>
        </div>
        
        {/* Tagline */}
        <div className="text-center mb-8">
          <p className="text-lg text-jive-text font-medium">
            Your daily hub for personal growth, money mindset, and smart opportunities.
          </p>
        </div>
        
        {/* Links */}
        <div className="flex justify-center gap-8 mb-8">
          <a href="https://t.me/GrowthSpheree" target="_blank" rel="noopener noreferrer" className="text-jive-text hover:text-jive-heading transition-colors font-medium">
            Join Telegram
          </a>
          <a href="#" className="text-jive-text hover:text-jive-heading transition-colors">
            About
          </a>
          <a href="#" className="text-jive-text hover:text-jive-heading transition-colors">
            Privacy
          </a>
          <a href="#" className="text-jive-text hover:text-jive-heading transition-colors">
            Terms
          </a>
        </div>
        
        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-jive-text-light">
            © 2024, Growth Sphere. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;