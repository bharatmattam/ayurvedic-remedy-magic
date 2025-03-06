
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Add framer-motion dependency
<lov-add-dependency>framer-motion@^10.16.4</lov-add-dependency>

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay to ensure smooth animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center pt-20">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-herb-50 via-white to-ayurveda-50 opacity-70"></div>
      
      {/* Decorative elements */}
      <div className="absolute right-0 top-20 w-64 h-64 bg-gradient-to-br from-herb-100/40 to-herb-200/30 rounded-full blur-3xl"></div>
      <div className="absolute left-10 bottom-20 w-80 h-80 bg-gradient-to-tr from-ayurveda-100/30 to-ayurveda-200/20 rounded-full blur-3xl"></div>
      
      {/* Patterned circle */}
      <div className="absolute -right-24 top-1/3 w-64 h-64 border border-herb-200 rounded-full opacity-30"></div>
      <div className="absolute -left-20 top-1/4 w-80 h-80 border border-ayurveda-200 rounded-full opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h5 className="text-herb-600 font-medium inline-block mb-3 border border-herb-200 bg-herb-50 px-3 py-1 rounded-full text-sm">
              Ancient Wisdom for Modern Wellness
            </h5>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-herb-950 leading-tight mb-6">
              Natural Healing <br />
              <span className="text-herb-700">with Ayurveda</span>
            </h1>
            <p className="text-lg text-herb-700 mb-8 max-w-md">
              Discover time-tested remedies and holistic approaches 
              to common health issues, personalized to your unique constitution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/consultation">
                <Button className="bg-herb-700 hover:bg-herb-800 text-white px-6 py-6 rounded-xl transition-all hover:shadow-lg hover:shadow-herb-100">
                  Get Consultation
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline" className="border-herb-300 text-herb-700 hover:bg-herb-50 px-6 py-6 rounded-xl">
                  Create Account
                </Button>
              </Link>
            </div>
            
            <div className="mt-10 flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-herb-100 border border-herb-200 flex items-center justify-center text-herb-700 text-xs">
                  A
                </div>
                <div className="w-8 h-8 rounded-full bg-ayurveda-100 border border-ayurveda-200 flex items-center justify-center text-ayurveda-700 text-xs">
                  B
                </div>
                <div className="w-8 h-8 rounded-full bg-herb-50 border border-herb-200 flex items-center justify-center text-herb-700 text-xs">
                  C
                </div>
              </div>
              <p className="text-sm text-herb-700">
                <span className="font-medium">500+</span> natural remedies for everyday wellness
              </p>
            </div>
          </motion.div>
          
          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[500px] flex items-center justify-center"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-herb-100/40 to-herb-200/20 rounded-full animate-pulse-slow"></div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[260px] h-[260px] md:w-[360px] md:h-[360px] border border-herb-200 rounded-full"></div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[240px] h-[240px] md:w-[320px] md:h-[320px] bg-white rounded-full shadow-xl overflow-hidden border border-herb-100">
                <img 
                  src="https://images.unsplash.com/photo-1594212699903-ec8a3b477b18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Ayurvedic herbs and ingredients" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-herb-900/40 to-transparent"></div>
                <div className="absolute bottom-6 left-0 w-full text-center">
                  <p className="text-white font-medium text-sm">Personalized Remedies</p>
                </div>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -right-4 top-1/4 w-16 h-16 bg-ayurveda-100 rounded-lg rotate-12 opacity-80 animate-float"></div>
            <div className="absolute left-10 bottom-20 w-12 h-12 bg-herb-200 rounded-full opacity-60 animate-float-slow"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <p className="text-sm text-herb-600 mb-2">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-herb-300 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-herb-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
