import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Signup from './components/Signup';
import Login from './components/Login';
import OnboardingQuiz from './components/OnboardingQuiz';
import Brokers from './components/Brokers';
import Dashboard from './components/Dashboard';
import './App.css';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
      <Pricing />
      <Testimonials />
      <FAQ />
    </>
  );
}

// Protected route - redirects to onboarding if quiz not completed, or dashboard if completed
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  
  // Backend authentication is required - block all unauthenticated access
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  // If authenticated but quiz not completed, redirect to quiz
  const hasCompletedQuiz = localStorage.getItem('onboardingQuiz');
  if (isAuthenticated && !hasCompletedQuiz) {
    return <Navigate to="/onboarding" replace />;
  }
  
  return children;
}

// AuthRequired route - blocks onboarding unless authenticated
function AuthRequiredRoute({ children }) {
  const { isAuthenticated } = useAuth();
  
  // Backend authentication is required - block all unauthenticated access
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes - accessible without login */}
          <Route path="/" element={<Home />} />
          <Route path="/brokers" element={<Brokers />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          
          {/* Protected routes - require authentication */}
          <Route 
            path="/onboarding" 
            element={
              <AuthRequiredRoute>
                <OnboardingQuiz />
              </AuthRequiredRoute>
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
