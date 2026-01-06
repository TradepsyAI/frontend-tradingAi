import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Features.css';

const features = [
  {
    icon: '🎯',
    title: 'Understand your Edge',
    description: 'Deep analytics on your strategies, setups, and what actually works for your trading style.'
  },
  {
    icon: '🧠',
    title: 'Track your psychology',
    description: 'AI-powered insights into your emotional patterns, discipline issues, and behavioral habits.'
  },
  {
    icon: '📈',
    title: 'Refine your strategy with AI',
    description: 'Let AI analyze thousands of data points to help you identify patterns and optimize your approach.'
  },
  {
    icon: '⚡',
    title: 'Build consistency',
    description: 'Daily coaching and personalized feedback to help you stick to your rules and trading plan.'
  }
];

const Features = () => {
  const navigate = useNavigate();
  
  return (
    <section className="features" id="features">
      <div className="container">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="features-title">
            Everything you need{' '}
            <span className="title-gradient">to become a consistent trader</span>
          </h2>
          <p className="features-description">
            Stop trading blindly. TraderAI gives you the insights and coaching you need to understand what's working, what's not, and how to improve.
          </p>
        </motion.div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="features-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            className="btn-cta"
            onClick={() => navigate('/signup')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GET STARTED NOW
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

