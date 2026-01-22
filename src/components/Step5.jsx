import { motion } from 'framer-motion';
import './Step5.css';

const Step5 = () => {
  const stats = [
    { icon: '🚀', label: 'Learning Curve', value: 'Collapsed', color: 'gold' },
    { icon: '📈', label: 'Path to Profit', value: 'Accelerated', color: 'gold' },
    { icon: '🎯', label: 'Traders by 2030', value: '100,000+', color: 'gold' }
  ];

  const benefits = [
    { icon: '⚡', text: 'Stop the break-even trap' },
    { icon: '🧠', text: 'AI-powered analysis' },
    { icon: '💎', text: 'Achieve consistent profitability' },
    { icon: '🏆', text: 'Join the movement' }
  ];

  return (
    <section className="step5">
      <div className="container">
        <div className="step5-content">
          <motion.div
            className="step-number-large"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            5
          </motion.div>
          
          <div className="step5-main">
            <motion.div
              className="step5-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="step5-icon">⚡</div>
              <h2 className="step5-title">
                Velocity to{' '}
                <span className="title-highlight">Profitability</span>
              </h2>
              <p className="step5-description">
                It is finally time to stop spending years in the 'break-even' trap. Let TradePsyAI collapse your learning curve and accelerate your path to the profit-threshold. Our AI-nalysis has predicted that we will be helping over 100,000 traders achieve consistent profitability by 2030.
              </p>
              <motion.div
                className="urgency-badge"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                ⏰ Time is running out. Join the movement
              </motion.div>
            </motion.div>
            
            <div className="step5-visual-content">
              <motion.div
                className="stats-grid"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="stat-wrapper"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <motion.div
                      className="stat-card"
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <div className="stat-icon">{stat.icon}</div>
                      <div className="stat-label">{stat.label}</div>
                    </motion.div>
                    <div className="stat-value">{stat.value}</div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="benefits-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="benefits-title">Your Path Forward</h3>
                <div className="benefits-list">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="benefit-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      <span className="benefit-icon">{benefit.icon}</span>
                      <span className="benefit-text">{benefit.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step5;

