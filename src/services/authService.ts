
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from "sonner";

// Define user type
interface User {
  id: string;
  username: string;
  email: string;
}

// Define context type
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (username: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: async () => false,
  signup: async () => false,
  logout: () => {},
});

// User database (in-memory for demo)
// In a real app, you would use a database
const USERS_KEY = 'ayurveda_users';
const CURRENT_USER_KEY = 'ayurveda_current_user';

// Helper to initialize users from localStorage or create default array
const initializeUsers = (): Record<string, { username: string, email: string, password: string }> => {
  const storedUsers = localStorage.getItem(USERS_KEY);
  if (storedUsers) {
    return JSON.parse(storedUsers);
  }
  // Create initial user
  const initialUsers = {
    'demo@example.com': {
      username: 'demo',
      email: 'demo@example.com',
      password: 'password123'
    }
  };
  localStorage.setItem(USERS_KEY, JSON.stringify(initialUsers));
  return initialUsers;
};

// Auth Provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<Record<string, any>>(initializeUsers);
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Initialize auth state from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem(CURRENT_USER_KEY);
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsAuthenticated(true);
    }
  }, []);

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const userRecord = users[email];
      
      if (!userRecord) {
        toast.error("User not found");
        return false;
      }
      
      if (userRecord.password !== password) {
        toast.error("Invalid password");
        return false;
      }
      
      // Create user object (without password)
      const authenticatedUser = {
        id: Date.now().toString(),
        username: userRecord.username,
        email: userRecord.email,
      };
      
      // Save to state and localStorage
      setUser(authenticatedUser);
      setIsAuthenticated(true);
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(authenticatedUser));
      
      toast.success(`Welcome back, ${userRecord.username}!`);
      return true;
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed");
      return false;
    }
  };

  // Signup function
  const signup = async (username: string, email: string, password: string): Promise<boolean> => {
    try {
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 800));
      
      if (users[email]) {
        toast.error("Email already in use");
        return false;
      }
      
      // Create new user
      const newUser = { username, email, password };
      
      // Update users record
      const updatedUsers = { ...users, [email]: newUser };
      setUsers(updatedUsers);
      localStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));
      
      // Create user object (without password)
      const authenticatedUser = {
        id: Date.now().toString(),
        username,
        email,
      };
      
      // Save to state and localStorage
      setUser(authenticatedUser);
      setIsAuthenticated(true);
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(authenticatedUser));
      
      toast.success("Account created successfully!");
      return true;
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Signup failed");
      return false;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem(CURRENT_USER_KEY);
    toast.info("You have been logged out");
  };

  // Provider value
  const value = {
    user,
    isAuthenticated,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);
