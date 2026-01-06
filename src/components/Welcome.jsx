import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import Navbar from './Navbar';
import './Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    // Automatically redirect to quiz page after 2 seconds
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="welcome-page">
      <Navbar />
      <section className="welcome-section">
        <div className="container">
          <motion.div
            className="welcome-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="welcome-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              WELCOME TO
            </motion.h1>
            
            <motion.h1
              className="welcome-title"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            >
              <span className="title-trader">TRADER</span>{' '}
              <span className="title-ai">AI</span>
            </motion.h1>
            
            <motion.p
              className="welcome-tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Track your performance, understand your psychology, and build consistency with AI-powered insights.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
