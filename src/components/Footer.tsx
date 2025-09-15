const Footer = () => {
  return (
    <footer className="bg-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-center mb-8">
          <span className="text-2xl font-bold text-jive-heading italic">jive</span>
        </div>
        
        {/* Tagline */}
        <div className="text-center mb-8">
          <p className="text-jive-text">
            Get connected and start jiving.
          </p>
        </div>
        
        {/* Links */}
        <div className="flex justify-center gap-8 mb-8">
          <a href="#" className="text-jive-text hover:text-jive-heading transition-colors">
            About
          </a>
          <a href="#" className="text-jive-text hover:text-jive-heading transition-colors">
            Privacy
          </a>
          <a href="#" className="text-jive-text hover:text-jive-heading transition-colors">
            Terms
          </a>
          <a href="#" className="text-jive-text hover:text-jive-heading transition-colors">
            Contact
          </a>
        </div>
        
        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-jive-text-light">
            © 2024, Jive by Prem Saini ventures.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;