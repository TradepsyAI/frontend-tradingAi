import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import Navbar from './Navbar';
import './OnboardingQuiz.css';

const OnboardingQuiz = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showIntro, setShowIntro] = useState(true);

  const questions = [
    {
      id: 1,
      question: 'How long have you been trading?',
      options: [
        { 
          value: 'newbie', 
          label: 'Newbie', 
          description: '< 1 year',
          icon: '👶'
        },
        { 
          value: 'climbing', 
          label: 'Climbing Ranks', 
          description: '1-3 years',
          icon: '👩‍💼'
        },
        { 
          value: 'ninja', 
          label: 'Ninja Level', 
          description: '3-5 years',
          icon: '🥷'
        },
        { 
          value: 'monk', 
          label: 'Monk Mode', 
          description: '5+ years',
          icon: '🧘'
        }
      ]
    },
    {
      id: 2,
      question: 'Who is your primary broker?',
      type: 'broker',
      options: [
        { value: 'interactive-brokers', label: 'Interactive Brokers' },
        { value: 'td-ameritrade', label: 'TD Ameritrade' },
        { value: 'charles-schwab', label: 'Charles Schwab' },
        { value: 'etrade', label: 'E*TRADE' },
        { value: 'fidelity', label: 'Fidelity' },
        { value: 'robinhood', label: 'Robinhood' },
        { value: 'other', label: 'Other' }
      ]
    },
    {
      id: 3,
      question: 'What is your primary trading style?',
      options: [
        { 
          value: 'day-trading', 
          label: 'Day Trading',
          description: 'Open and close positions within the same day'
        },
        { 
          value: 'swing-trading', 
          label: 'Swing Trading',
          description: 'Hold positions for days to weeks'
        },
        { 
          value: 'scalping', 
          label: 'Scalping',
          description: 'Very short-term, seconds to minutes'
        },
        { 
          value: 'position-trading', 
          label: 'Position Trading',
          description: 'Long-term holds, weeks to months'
        }
      ]
    },
    {
      id: 4,
      question: 'What markets do you trade?',
      options: [
        { value: 'stocks', label: 'Stocks' },
        { value: 'forex', label: 'Forex' },
        { value: 'futures', label: 'Futures' },
        { value: 'crypto', label: 'Crypto' },
        { value: 'options', label: 'Options' },
        { value: 'multiple', label: 'Multiple Markets' }
      ]
    }
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers({
      ...answers,
      [questionId]: value
    });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleContinue = () => {
    setShowIntro(false);
  };

  const handleComplete = () => {
    // Save onboarding data
    const onboardingData = {
      ...answers,
      completed: true,
      completedAt: new Date().toISOString()
    };
    localStorage.setItem('onboardingData', JSON.stringify(onboardingData));
    
    // Mark onboarding as complete in user data
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    userData.onboardingCompleted = true;
    localStorage.setItem('userData', JSON.stringify(userData));
    
    navigate('/dashboard');
  };

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;
  const canProceed = answers[currentQuestion?.id] !== undefined;

  if (showIntro) {
    return (
      <div className="onboarding-page">
        <Navbar />
        <section className="onboarding-section">
          <div className="container">
            <div className="onboarding-content">
              {/* Progress Bar */}
              <div className="progress-container">
                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: '33%' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Intro Card */}
              <motion.div
                className="intro-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="intro-icon">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 30 L50 20 L80 30 L80 70 L50 80 L20 70 Z" stroke="url(#gradient)" strokeWidth="3" fill="none"/>
                    <path d="M30 40 L40 50 L30 60" stroke="url(#gradient)" strokeWidth="2" fill="none"/>
                    <path d="M50 40 L60 50 L50 60" stroke="url(#gradient)" strokeWidth="2" fill="none"/>
                    <path d="M70 40 L70 60" stroke="url(#gradient)" strokeWidth="2"/>
                    <circle cx="75" cy="45" r="3" fill="url(#gradient)"/>
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF8C42" />
                        <stop offset="100%" stopColor="#FFD700" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <h2 className="intro-title">
                  BEFORE WE BEGIN , LET'S START
                </h2>
                <h3 className="intro-subtitle">
                  PERSONALITY & STRATEGY QUIZ
                </h3>
                <p className="intro-description">
                  Personality and strategy quiz for Ai insights
                </p>

                <motion.button
                  className="btn-continue"
                  onClick={handleContinue}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Continue
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="onboarding-page">
      <Navbar />
      <section className="onboarding-section">
        <div className="container">
          <div className="onboarding-content">
            {/* Progress Bar */}
            <div className="progress-container">
              <div className="progress-bar">
                <motion.div
                  className="progress-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Question Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                className="question-card"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                {currentQuestion.type === 'broker' ? (
                  <>
                    <div className="broker-illustration">
                      <div className="illustration-bars">
                        {[...Array(12)].map((_, i) => (
                          <div 
                            key={i} 
                            className="bar"
                            style={{ 
                              height: `${30 + Math.random() * 40}%`,
                              animationDelay: `${i * 0.1}s`
                            }}
                          />
                        ))}
                      </div>
                      <div className="illustration-chart">
                        <div className="chart-line"></div>
                      </div>
                    </div>
                    <h2 className="question-title">{currentQuestion.question}</h2>
                    <p className="question-hint">Select only one</p>
                    <div className="broker-select-wrapper">
                      <select
                        className="broker-select"
                        value={answers[currentQuestion.id] || ''}
                        onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
                      >
                        <option value="">Select broker</option>
                        {currentQuestion.options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="question-title">{currentQuestion.question}</h2>
                    <div className="options-grid">
                      {currentQuestion.options.map((option, index) => (
                        <motion.button
                          key={option.value}
                          className={`option-button ${
                            answers[currentQuestion.id] === option.value ? 'selected' : ''
                          }`}
                          onClick={() => handleAnswer(currentQuestion.id, option.value)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {option.icon && (
                            <span className="option-icon">{option.icon}</span>
                          )}
                          <div className="option-content">
                            <span className="option-label">{option.label}</span>
                            {option.description && (
                              <span className="option-description">{option.description}</span>
                            )}
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="onboarding-actions">
              {currentStep > 0 && (
                <motion.button
                  className="btn-back"
                  onClick={handleBack}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back
                </motion.button>
              )}
              <motion.button
                className="btn-next"
                onClick={handleNext}
                disabled={!canProceed}
                whileHover={{ scale: canProceed ? 1.05 : 1 }}
                whileTap={{ scale: canProceed ? 0.95 : 1 }}
              >
                {currentStep === questions.length - 1 ? 'Complete' : 'Continue'}
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnboardingQuiz;
