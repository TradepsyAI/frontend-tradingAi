import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import Navbar from './Navbar';
import './OnboardingQuiz.css';

const tradingExperienceOptions = [
  {
    id: 'newbie',
    label: 'Newbie',
    description: '< 1 year',
    icon: '👷'
  },
  {
    id: 'climbing',
    label: 'Climbing Ranks',
    description: '1-3 years',
    icon: '👔'
  },
  {
    id: 'ninja',
    label: 'Ninja Level',
    description: '3-5 years',
    icon: '🥷'
  },
  {
    id: 'monk',
    label: 'Monk Mode',
    description: '5+ years',
    icon: '🧘'
  }
];

const brokersList = [
  'Alpha Futures (Alpha Ticks)',
  'Bybit',
  'CQG Desktop',
  'Charles Schwab',
  'CoinBase',
  'CoinBase Pro',
  'Ctrader',
  'DXtrade',
  'Das Trader Pro',
  'Generic',
  'Interactive Brokers',
  'Light Speed',
  'Match-Trader',
  'MetaTrader 4',
  'MetaTrader 5',
  'MotiveWave',
  'NinjaTrader',
  'Oanda',
  'Power E Trade',
  'Project X',
  'Quantower',
  'Questrade',
  'Refinitiv Redi',
  'Rithmic R Trader'
];

const OnboardingQuiz = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [quizData, setQuizData] = useState({
    tradingExperience: null,
    primaryBroker: ''
  });
  const [showBrokerDropdown, setShowBrokerDropdown] = useState(false);

  // Block access if not authenticated - redirect to login
  // Since backend auth is disabled, this will always redirect
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  // Don't render quiz if not authenticated
  if (!isAuthenticated) {
    return null;
  }

  const totalSteps = 4; // Welcome, Quiz Intro, Trading Experience, Broker Selection

  const handleExperienceSelect = (experienceId) => {
    setQuizData({ ...quizData, tradingExperience: experienceId });
  };

  const handleBrokerSelect = (broker) => {
    setQuizData({ ...quizData, primaryBroker: broker });
    setShowBrokerDropdown(false);
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handleComplete = async () => {
    // TODO: Save quiz data to backend
    // Example: await saveQuizData(quizData);
    
    // Save to localStorage for now
    localStorage.setItem('onboardingQuiz', JSON.stringify(quizData));
    
    // Navigate to dashboard after quiz completion
    navigate('/dashboard');
  };

  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="quiz-page">
      <Navbar />
      <div className="quiz-container">
        <div className="progress-bar-container">
          <div className="progress-bar">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {currentStep === 0 && (
            <motion.div
              key="welcome"
              className="quiz-step welcome-screen"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="welcome-title">
                <span className="welcome-text">WELCOME TO</span>
                <span className="welcome-brand">TRADER AI</span>
              </h1>
              <p className="welcome-tagline">
                Track your performance, understand your psychology, and build consistency with AI-powered insights.
              </p>
              <motion.button
                className="quiz-button"
                onClick={handleNext}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Continue
              </motion.button>
            </motion.div>
          )}

          {currentStep === 1 && (
            <motion.div
              key="quiz-intro"
              className="quiz-step"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="quiz-icon">
                <svg viewBox="0 0 100 100" width="120" height="120">
                  <rect x="10" y="20" width="80" height="60" rx="5" fill="none" stroke="currentColor" strokeWidth="3"/>
                  <line x1="20" y1="50" x2="30" y2="50" stroke="currentColor" strokeWidth="2"/>
                  <line x1="20" y1="40" x2="35" y2="40" stroke="currentColor" strokeWidth="2"/>
                  <line x1="20" y1="60" x2="28" y2="60" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="50" cy="50" r="3" fill="currentColor"/>
                  <circle cx="60" cy="45" r="3" fill="currentColor"/>
                  <circle cx="70" cy="50" r="3" fill="currentColor"/>
                  <line x1="50" y1="50" x2="60" y2="45" stroke="currentColor" strokeWidth="2"/>
                  <line x1="60" y1="45" x2="70" y2="50" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="75" cy="35" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <line x1="79" y1="39" x2="85" y2="45" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h1 className="quiz-title">
                Before we begin, Let's Start Personality & Strategy Quiz
              </h1>
              <p className="quiz-subtitle">
                Personality and strategy quiz for AI insights
              </p>
              <motion.button
                className="quiz-button"
                onClick={handleNext}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Continue
              </motion.button>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="experience"
              className="quiz-step"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="quiz-question">How long have you been trading?</h2>
              <div className="experience-options">
                {tradingExperienceOptions.map((option) => (
                  <motion.button
                    key={option.id}
                    className={`experience-option ${
                      quizData.tradingExperience === option.id ? 'selected' : ''
                    }`}
                    onClick={() => handleExperienceSelect(option.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="option-icon">{option.icon}</span>
                    <div className="option-content">
                      <span className="option-label">{option.label}</span>
                      <span className="option-description">{option.description}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
              <motion.button
                className="quiz-button"
                onClick={handleNext}
                disabled={!quizData.tradingExperience}
                whileHover={{ scale: quizData.tradingExperience ? 1.02 : 1 }}
                whileTap={{ scale: quizData.tradingExperience ? 0.98 : 1 }}
              >
                Next
              </motion.button>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="broker"
              className="quiz-step"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="broker-illustration">
                <div className="chart-visualization">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="chart-bar"
                      style={{
                        height: `${Math.random() * 60 + 20}%`,
                        left: `${i * 4.5}%`
                      }}
                    />
                  ))}
                  <div className="chart-platform">
                    <div className="chart-line"></div>
                    <div className="chart-pointer"></div>
                  </div>
                </div>
              </div>
              <h2 className="quiz-question">Who is your primary broker?</h2>
              <p className="quiz-instruction">Select only one.</p>
              <div className="broker-select-container">
                <button
                  className="broker-select"
                  onClick={() => setShowBrokerDropdown(!showBrokerDropdown)}
                >
                  <span className={quizData.primaryBroker ? 'selected-broker' : 'placeholder'}>
                    {quizData.primaryBroker || 'Select broker'}
                  </span>
                  <span className="dropdown-arrow">▼</span>
                </button>
                {showBrokerDropdown && (
                  <div className="broker-dropdown">
                    {brokersList.map((broker) => (
                      <button
                        key={broker}
                        className="broker-option"
                        onClick={() => handleBrokerSelect(broker)}
                      >
                        {broker}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <motion.button
                className="quiz-button"
                onClick={handleComplete}
                disabled={!quizData.primaryBroker}
                whileHover={{ scale: quizData.primaryBroker ? 1.02 : 1 }}
                whileTap={{ scale: quizData.primaryBroker ? 0.98 : 1 }}
              >
                Continue
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OnboardingQuiz;


