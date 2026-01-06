import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Check if user is logged in on mount (from localStorage or token)
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('userData');
    
    if (token && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const login = async (email, password) => {
    try {
      // TODO: Replace with actual backend API call
      // Example: const response = await fetch('/api/auth/login', { ... });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data
      const userData = {
        id: 1,
        email: email,
        name: email.split('@')[0]
      };
      
      const token = 'mock-token-' + Date.now();
      
      localStorage.setItem('authToken', token);
      localStorage.setItem('userData', JSON.stringify(userData));
      
      setIsAuthenticated(true);
      setUser(userData);
      
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const signup = async (email, password, name) => {
    try {
      // TODO: Replace with actual backend API call
      // Example: const response = await fetch('/api/auth/signup', { ... });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data
      const userData = {
        id: 1,
        email: email,
        name: name || email.split('@')[0]
      };
      
      const token = 'mock-token-' + Date.now();
      
      localStorage.setItem('authToken', token);
      localStorage.setItem('userData', JSON.stringify(userData));
      
      setIsAuthenticated(true);
      setUser(userData);
      
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const socialLogin = async (provider, userData) => {
    try {
      // TODO: Replace with actual social auth API calls
      // Example: const response = await fetch(`/api/auth/${provider}`, { ... });
      
      const token = `${provider}-token-${Date.now()}`;
      
      localStorage.setItem('authToken', token);
      localStorage.setItem('userData', JSON.stringify(userData));
      
      setIsAuthenticated(true);
      setUser(userData);
      
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, signup, socialLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

