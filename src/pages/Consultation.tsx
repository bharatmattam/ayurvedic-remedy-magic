
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useAuth } from "../services/authService";
import { toast } from "sonner";

const Consultation = () => {
  const [symptoms, setSymptoms] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!symptoms.trim()) {
      toast.error("Please describe your symptoms");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock response based on symptoms
      let response;
      const lowerSymptoms = symptoms.toLowerCase();
      
      if (lowerSymptoms.includes("headache") || lowerSymptoms.includes("head pain")) {
        response = "For headaches, Ayurveda recommends: \n\n• Ginger tea with honey\n• Coriander seed decoction\n• Massage temples with diluted lavender oil\n• Rest in a dark, quiet room\n• Stay hydrated with warm water\n\nAvoid caffeine and processed foods until symptoms subside.";
      } 
      else if (lowerSymptoms.includes("cold") || lowerSymptoms.includes("cough") || lowerSymptoms.includes("congestion")) {
        response = "For cold and cough, try these Ayurvedic remedies: \n\n• Turmeric milk (Golden milk) before bed\n• Ginger, tulsi (holy basil), and honey tea\n• Steam inhalation with eucalyptus\n• Gargle with warm salt water\n• Black pepper and honey mixture\n\nGet plenty of rest and stay warm.";
      }
      else if (lowerSymptoms.includes("stomach") || lowerSymptoms.includes("digest") || lowerSymptoms.includes("nausea")) {
        response = "For digestive issues, Ayurveda suggests: \n\n• Cumin, coriander, and fennel tea\n• Ginger slices with lemon and salt\n• Plain yogurt with cumin powder\n• Avoid heavy, oily foods temporarily\n• Small meals throughout the day\n\nTry a gentle abdominal massage with warm sesame oil.";
      }
      else if (lowerSymptoms.includes("stress") || lowerSymptoms.includes("anxiety") || lowerSymptoms.includes("sleep")) {
        response = "For stress and sleep issues, Ayurveda recommends: \n\n• Ashwagandha herb (as supplement or tea)\n• Brahmi tea before bed\n• Warm milk with cardamom and nutmeg\n• Oil massage with sesame or coconut oil\n• Meditation and pranayama breathing\n\nEstablish a regular sleep schedule and avoid digital screens before bed.";
      }
      else if (lowerSymptoms.includes("skin") || lowerSymptoms.includes("rash") || lowerSymptoms.includes("itch")) {
        response = "For skin issues, try these Ayurvedic remedies: \n\n• Neem paste applied to affected areas\n• Aloe vera gel application\n• Turmeric and sandalwood paste\n• Coconut oil with a drop of lavender\n• Triphala herb internally\n\nAvoid spicy foods and increase water intake.";
      }
      else {
        response = "Based on your symptoms, Ayurveda would suggest: \n\n• Maintain regular eating and sleeping habits\n• Drink warm ginger tea with honey\n• Use warming spices like cumin, coriander and turmeric in your diet\n• Oil massage with sesame oil before bathing\n• Practice gentle yoga and meditation daily\n\nConsider consulting with an Ayurvedic practitioner for personalized advice.";
      }
      
      setResult(response);
      toast.success("Ayurvedic remedies generated!");
    } catch (error) {
      toast.error("Failed to generate remedies. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-emerald-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-green-800 mb-2">Ayurvedic Consultation</h1>
          <p className="text-gray-600">Describe your symptoms for personalized Ayurvedic remedies</p>
        </div>
        
        <Card className="mb-8 border-green-100 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl text-green-700">Describe Your Condition</CardTitle>
            <CardDescription>
              Please provide details about your symptoms, how long you've had them, and any other relevant information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Textarea 
                placeholder="Example: I've been experiencing headaches for the past 3 days, mostly in the afternoon. I also feel tired and have trouble focusing."
                className="min-h-32 text-base"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
              />
              <Button 
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Analyzing your symptoms..." : "Get Ayurvedic Remedies"}
              </Button>
            </form>
          </CardContent>
        </Card>
        
        {result && (
          <Card className="border-green-100 shadow-md bg-white/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-xl text-green-700">Recommended Ayurvedic Remedies</CardTitle>
              <CardDescription>
                Based on the symptoms you described, here are some Ayurvedic remedies that may help:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-green-50 p-4 rounded-md border border-green-200">
                <pre className="whitespace-pre-wrap text-gray-700 font-sans">{result}</pre>
              </div>
              <div className="mt-6 text-sm text-gray-500">
                <p className="font-medium">Important Note:</p>
                <p>These are general Ayurvedic suggestions. If symptoms persist or worsen, please consult with a healthcare professional or certified Ayurvedic practitioner.</p>
              </div>
            </CardContent>
          </Card>
        )}
        
        <div className="mt-8 text-center">
          <Button variant="outline" onClick={() => navigate("/")} className="text-green-700 border-green-200">
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
