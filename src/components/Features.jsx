import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Features.css';

const features = [
  {
    icon: '🤖',
    title: 'Data driven AI Mentorship',
    description: 'Harness the computational power of a digital mentor to decipher your unique market edge through neural analytics that expose hidden blind spots with mathematical precision.'
  },
  {
    icon: '🧠',
    title: 'Understand your psychological Shortfalls',
    description: 'Go beyond retrospective logging with an intelligent coaching engine that transforms deep data into a predictive roadmap, identifying your edge while proactively neutralizing your most costly trading biases.'
  },
  {
    icon: '⚖️',
    title: 'Automated Accountability',
    description: 'Integrate a 24/7 accountability patrol that scans your trade execution for lack of discipline, providing the friction-less oversight needed to bridge the gap between knowing your rules and actually following them.'
  },
  {
    icon: '📊',
    title: 'Build consistency with your AI coach',
    description: 'Consistency isn\'t a feeling—it\'s a data-driven result. TradePsyAI will help you consistenly overcome the disconnection between your trading plan and your actual execution'
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

