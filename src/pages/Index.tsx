import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "../services/authService";

const Index = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();

  const features = [
    {
      title: "Personalized Remedies",
      description: "Get customized Ayurvedic solutions tailored to your unique health needs and dosha type.",
      icon: "🌿"
    },
    {
      title: "Ancient Wisdom",
      description: "Access remedies backed by 5,000+ years of Ayurvedic traditional knowledge and practices.",
      icon: "📜"
    },
    {
      title: "Natural Ingredients",
      description: "All remedies use 100% natural herbs, spices, and ingredients found in most kitchens.",
      icon: "🌱"
    },
    {
      title: "Holistic Approach",
      description: "Address the root cause of health issues, not just the symptoms for true wellness.",
      icon: "⚕️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6 leading-tight">
            Natural Healing from <span className="text-amber-700">Ayurvedic Tradition</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Discover time-tested remedies from ancient Ayurvedic wisdom to solve everyday health problems, using ingredients from your kitchen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate("/consultation")} 
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-6 text-lg"
            >
              Get Consultation
            </Button>
            {!isAuthenticated ? (
              <Button 
                onClick={() => navigate("/login")} 
                variant="outline" 
                className="border-green-600 text-green-700 hover:bg-green-50 px-8 py-6 text-lg"
              >
                Login
              </Button>
            ) : (
              <Button 
                onClick={() => navigate("/profile")} 
                variant="outline" 
                className="border-green-600 text-green-700 hover:bg-green-50 px-8 py-6 text-lg"
              >
                My Profile
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Welcome Message for Logged In Users */}
      {isAuthenticated && user && (
        <section className="px-4 py-6 bg-green-100/60">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-medium text-green-800">
              Welcome back, <span className="font-bold">{user.username}</span>!
            </h2>
            <p className="text-gray-700 mt-2">
              Continue your wellness journey with personalized Ayurvedic remedies.
            </p>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="px-4 py-16 bg-white/70">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            Natural Remedies, Powered by Ancient Wisdom
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/80 border-green-100 transition-all-300 hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-bold text-xl mb-2 text-green-700">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 bg-gradient-to-r from-green-100 to-emerald-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            Start Your Healing Journey Today
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Describe your symptoms and get personalized Ayurvedic remedies instantly.
          </p>
          <Button 
            onClick={() => navigate("/consultation")} 
            size="lg" 
            className="bg-amber-600 hover:bg-amber-700 px-8 py-6 text-lg"
          >
            Get Your Personalized Remedy
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 bg-green-900 text-green-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ayurvedic Remedy Magic</h2>
          <p className="mb-6">Ancient wisdom for modern wellness</p>
          <div className="flex justify-center space-x-6 mb-6">
            {!isAuthenticated ? (
              <>
                <Button variant="link" onClick={() => navigate("/login")} className="text-green-200 hover:text-white">
                  Login
                </Button>
                <Button variant="link" onClick={() => navigate("/signup")} className="text-green-200 hover:text-white">
                  Sign Up
                </Button>
              </>
            ) : (
              <Button variant="link" onClick={() => navigate("/consultation")} className="text-green-200 hover:text-white">
                Get Consultation
              </Button>
            )}
          </div>
          <p className="text-sm text-green-300">
            © {new Date().getFullYear()} Ayurvedic Remedy Magic. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
