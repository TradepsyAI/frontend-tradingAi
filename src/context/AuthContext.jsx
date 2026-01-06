import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Dummy email for testing
  const DUMMY_EMAIL = 'demo@traderai.com';
  const DUMMY_PASSWORD = 'demo123';

  // Check if user is logged in on mount (from localStorage)
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('userData');
    
    if (token && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const login = async (email, password) => {
    // Dummy email check for testing
    if (email === DUMMY_EMAIL && password === DUMMY_PASSWORD) {
      const userData = {
        id: 1,
        email: email,
        name: 'Demo User'
      };
      
      const token = 'dummy-token-' + Date.now();
      
      localStorage.setItem('authToken', token);
      localStorage.setItem('userData', JSON.stringify(userData));
      
      setIsAuthenticated(true);
      setUser(userData);
      
      return { success: true };
    }
    
    // Backend authentication is not implemented yet
    return { 
      success: false, 
      error: 'Backend authentication is under development. Please try again later.' 
    };
  };

  const signup = async (email, password, name) => {
    // Dummy email check for testing
    if (email === DUMMY_EMAIL && password === DUMMY_PASSWORD) {
      const userData = {
        id: 1,
        email: email,
        name: name || 'Demo User'
      };
      
      const token = 'dummy-token-' + Date.now();
      
      localStorage.setItem('authToken', token);
      localStorage.setItem('userData', JSON.stringify(userData));
      
      setIsAuthenticated(true);
      setUser(userData);
      
      return { success: true };
    }
    
    // Backend authentication is not implemented yet
    return { 
      success: false, 
      error: 'Backend authentication is under development. Please try again later.' 
    };
  };

  const socialLogin = async (provider, userData) => {
    // Backend authentication is not implemented yet
    return { 
      success: false, 
      error: 'Backend authentication is under development. Please try again later.' 
    };
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    localStorage.removeItem('onboardingQuiz');
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

