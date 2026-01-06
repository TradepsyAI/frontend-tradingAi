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
            <span className="title-part1">AI-powered trading</span>{' '}
            <span className="title-part2">journal & psychology</span>{' '}
            <span className="title-highlight">coach</span>
          </h1>
          
          <p className="hero-description">
            Track your performance, understand your psychology, and build consistency with AI-powered insights.
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
            <span className="audience-item">For day traders</span>
            <span className="audience-separator">•</span>
            <span className="audience-item">Funded traders</span>
            <span className="audience-separator">•</span>
            <span className="audience-item">Scalpers</span>
          </div>
          
          <div className="hero-insights">
            <div className="insight-card">
              <span className="insight-label">Win Rate</span>
              <span className="insight-value">68.5%</span>
            </div>
            <div className="insight-card">
              <span className="insight-label">AI Insight</span>
              <span className="insight-value">Over-traded on Tuesday</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

