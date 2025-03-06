
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/services/authService";
import { Menu, X, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle logout
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "bg-white/80 backdrop-blur-xl shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo and Brand Name */}
          <Link
            to="/"
            className="flex items-center gap-2 text-herb-800 transition-all hover:scale-[1.02]"
          >
            <div className="relative w-10 h-10 flex items-center justify-center border-2 border-herb-400 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-herb-50 to-herb-200 opacity-60"></div>
              <span className="text-herb-800 font-medium text-xl relative">A</span>
            </div>
            <span className="text-xl font-serif tracking-tight">Ayurvedic Remedy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`text-herb-800 transition-all hover:text-herb-600 ${
                location.pathname === "/" ? "font-medium" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/consultation"
              className={`text-herb-800 transition-all hover:text-herb-600 ${
                location.pathname === "/consultation" ? "font-medium" : ""
              }`}
            >
              Consultation
            </Link>
            
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-herb-200 hover:border-herb-300 hover:bg-herb-50"
                  >
                    <User className="h-4 w-4 mr-2" />
                    {user?.username || "Account"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-500 cursor-pointer">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="border-herb-200 hover:border-herb-300 hover:bg-herb-50"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-herb-600 hover:bg-herb-700 text-white">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-herb-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-3 px-1 rounded-lg bg-white/90 backdrop-blur-sm animate-fade-in border border-gray-100 shadow-sm">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className={`px-3 py-2 ${
                  location.pathname === "/"
                    ? "bg-herb-50 text-herb-700 font-medium rounded-lg"
                    : "text-herb-800"
                }`}
              >
                Home
              </Link>
              <Link
                to="/consultation"
                className={`px-3 py-2 ${
                  location.pathname === "/consultation"
                    ? "bg-herb-50 text-herb-700 font-medium rounded-lg"
                    : "text-herb-800"
                }`}
              >
                Consultation
              </Link>

              {isAuthenticated ? (
                <>
                  <div className="border-t border-gray-100 my-1"></div>
                  <div className="px-3 py-2 text-sm text-gray-500">
                    Signed in as <span className="font-medium text-herb-700">{user?.username}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="px-3 py-2 text-left text-red-500 flex items-center gap-2"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <div className="border-t border-gray-100 my-1"></div>
                  <Link
                    to="/login"
                    className="px-3 py-2 text-herb-800"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="mx-3 py-2 bg-herb-600 hover:bg-herb-700 text-white rounded-lg text-center"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
