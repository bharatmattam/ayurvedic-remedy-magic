
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/services/authService";
import { analyzeCondition, ConditionMatchResult } from "@/services/remedyService";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ConsultationForm = () => {
  const [condition, setCondition] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [results, setResults] = useState<ConditionMatchResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      toast.error("Please login to get a consultation", {
        description: "Create an account or login to access consultations",
        action: {
          label: "Login",
          onClick: () => navigate("/login")
        }
      });
      return;
    }
    
    if (!condition.trim()) {
      toast.warning("Please describe your condition");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulating API call delay
    setTimeout(() => {
      // Analyze the condition using our service
      const analysisResults = analyzeCondition(condition);
      setResults(analysisResults);
      setShowResults(true);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="condition" className="block text-herb-800 font-medium">
            Describe your condition
          </label>
          <Textarea
            id="condition"
            placeholder="Please describe your symptoms or health concern in detail. For example: I've had a sore throat and runny nose for the past 2 days, with mild fever."
            rows={6}
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            className="w-full rounded-xl border-herb-200 focus:border-herb-300 focus:ring focus:ring-herb-100 resize-none"
          />
          <p className="text-sm text-herb-500">
            The more details you provide, the more accurate our recommendations will be.
          </p>
        </div>

        <Button
          type="submit"
          className="w-full bg-herb-700 hover:bg-herb-800 text-white py-6 rounded-xl transition-all disabled:opacity-70"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Analyzing...
            </span>
          ) : (
            "Get Ayurvedic Recommendations"
          )}
        </Button>
      </form>

      {showResults && results.length > 0 && (
        <div className="mt-10 space-y-6 animate-fade-in">
          <div className="border-t border-herb-100 pt-8">
            <h3 className="text-2xl font-serif text-herb-900 mb-6">
              Your Ayurvedic Consultation Results
            </h3>

            {results.map((result, index) => (
              <div
                key={result.remedyData.id}
                className={`bg-white rounded-xl border border-herb-100 shadow-sm p-6 mb-6 ${
                  index === 0 ? "ring-1 ring-herb-200" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-medium text-herb-900">
                    {result.remedyData.condition}
                  </h4>
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-full ${
                      result.matchPercentage > 80
                        ? "bg-green-50 text-green-800"
                        : result.matchPercentage > 50
                        ? "bg-amber-50 text-amber-800"
                        : "bg-blue-50 text-blue-800"
                    }`}
                  >
                    {result.matchPercentage}% Match
                  </span>
                </div>

                <p className="text-herb-700 mb-4">{result.remedyData.description}</p>

                <div className="mb-6">
                  <h5 className="text-herb-800 font-medium mb-2">Common Symptoms:</h5>
                  <div className="flex flex-wrap gap-2">
                    {result.remedyData.symptoms.map((symptom) => (
                      <span
                        key={symptom}
                        className="bg-herb-50 text-herb-700 px-3 py-1 rounded-full text-sm"
                      >
                        {symptom}
                      </span>
                    ))}
                  </div>
                </div>

                <h5 className="text-herb-800 font-medium mb-3">Recommended Remedies:</h5>
                <div className="space-y-4">
                  {result.remedyData.remedies.map((remedy) => (
                    <div
                      key={remedy.title}
                      className="bg-herb-50/50 border border-herb-100 rounded-lg p-4"
                    >
                      <h6 className="text-herb-900 font-medium mb-2">{remedy.title}</h6>
                      
                      <div className="mb-3">
                        <span className="text-sm font-medium text-herb-700">Ingredients:</span>
                        <ul className="list-disc pl-5 mt-1 text-herb-700 text-sm">
                          {remedy.ingredients.map((ingredient, i) => (
                            <li key={i}>{ingredient}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-3">
                        <span className="text-sm font-medium text-herb-700">Preparation:</span>
                        <p className="text-herb-700 text-sm mt-1">{remedy.preparation}</p>
                      </div>
                      
                      <div className="mb-3">
                        <span className="text-sm font-medium text-herb-700">Usage:</span>
                        <p className="text-herb-700 text-sm mt-1">{remedy.usage}</p>
                      </div>
                      
                      <div>
                        <span className="text-sm font-medium text-herb-700">Notes:</span>
                        <p className="text-herb-700 text-sm mt-1">{remedy.notes}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <h5 className="text-herb-800 font-medium mb-2">Lifestyle Recommendations:</h5>
                  <ul className="list-disc pl-5 space-y-1 text-herb-700">
                    {result.remedyData.lifestyle.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h5 className="text-herb-800 font-medium mb-2">Prevention Tips:</h5>
                  <ul className="list-disc pl-5 space-y-1 text-herb-700">
                    {result.remedyData.prevention.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 bg-amber-50 border border-amber-100 rounded-lg p-4 text-amber-800 text-sm">
                  <p className="font-medium mb-1">Disclaimer:</p>
                  <p>{result.remedyData.disclaimer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsultationForm;
