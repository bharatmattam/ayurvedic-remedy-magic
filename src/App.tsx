
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Consultation from "./pages/Consultation";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./services/authService";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating loading time for animations
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-background">
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 border-4 border-herb-200 rounded-full animate-pulse-slow"></div>
          <div className="absolute inset-2 border-4 border-herb-300 rounded-full animate-rotate-slow"></div>
          <div className="absolute inset-4 border-4 border-herb-400 rounded-full opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-herb-700 text-sm font-medium animate-pulse">Ayurveda</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/consultation" element={<Consultation />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
