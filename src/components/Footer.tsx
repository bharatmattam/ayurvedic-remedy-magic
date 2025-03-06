
import { Link } from "react-router-dom";
import { Heart, Mail, Github, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-ayurveda-50 border-t border-ayurveda-100">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link
              to="/"
              className="flex items-center gap-2 text-herb-800 mb-4 transition-transform hover:scale-[1.02]"
            >
              <div className="relative w-10 h-10 flex items-center justify-center border-2 border-herb-400 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-herb-50 to-herb-200 opacity-60"></div>
                <span className="text-herb-800 font-medium text-xl relative">A</span>
              </div>
              <span className="text-xl font-serif tracking-tight">Ayurvedic Remedy</span>
            </Link>
            <p className="text-ayurveda-800 max-w-md">
              Discover the ancient wisdom of Ayurveda for natural healing. Our platform 
              provides authentic remedies for common health issues, based on traditional 
              Ayurvedic practices that have been refined over thousands of years.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="#" 
                className="text-ayurveda-700 hover:text-ayurveda-900 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="text-ayurveda-700 hover:text-ayurveda-900 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="mailto:contact@ayurvedicremedy.com" 
                className="text-ayurveda-700 hover:text-ayurveda-900 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links Section 1 */}
          <div className="col-span-1">
            <h3 className="font-medium text-ayurveda-800 mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-ayurveda-700 hover:text-ayurveda-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="text-ayurveda-700 hover:text-ayurveda-900 transition-colors">
                  Consultation
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-ayurveda-700 hover:text-ayurveda-900 transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-ayurveda-700 hover:text-ayurveda-900 transition-colors">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Section 2 */}
          <div className="col-span-1">
            <h3 className="font-medium text-ayurveda-800 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-ayurveda-700 hover:text-ayurveda-900 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-ayurveda-700 hover:text-ayurveda-900 transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-ayurveda-700 hover:text-ayurveda-900 transition-colors">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="text-ayurveda-700 hover:text-ayurveda-900 transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-ayurveda-100 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-ayurveda-700 text-sm">
            © {currentYear} Ayurvedic Remedy. All rights reserved.
          </p>
          <p className="text-ayurveda-700 text-sm flex items-center mt-3 md:mt-0">
            Made with <Heart size={14} className="mx-1 text-red-500" /> for natural healing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
