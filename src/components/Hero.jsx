import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  const [chatInput, setChatInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle chat submission
    console.log('Chat submitted:', chatInput);
    setChatInput('');
  };

  return (
    <section className="hero">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="hero-title">
            The future of trading{' '}
            <span className="title-highlight">Mentorship is here</span>
          </h1>
          
          <p className="hero-description">
            Searching for answers in spreadsheets and old school journals is in the past. 
            With TradePsyAi, Receive expert guidance in real time.
            Trade PsyAi transforms your raw data into a personalised coaching experience bridging the gap between where you are and where you want to be.
          </p>
          
          <form className="hero-chatbox" onSubmit={handleSubmit}>
            <input
              type="text"
              className="chat-input"
              placeholder="How to turn my trading data into actionable intelligence?"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
            />
            <motion.button
              type="submit"
              className="chat-submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Submit question"
            >
              ↑
            </motion.button>
          </form>
          
          <div className="hero-actions">
            <motion.button
              className="btn-get-started"
              onClick={() => navigate('/signup')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Free
            </motion.button>
            <motion.button
              className="btn-view-demo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Demo
            </motion.button>
          </div>
          
          <div className="hero-audience">
            <motion.span 
              className="audience-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Day Traders
            </motion.span>
            <motion.span 
              className="audience-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              Scalpers
            </motion.span>
            <motion.span 
              className="audience-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              Crypto Traders
            </motion.span>
            <motion.span 
              className="audience-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              Swing Traders
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

