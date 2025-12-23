import { motion } from 'framer-motion';
import './Step1.css';

const Step1 = () => {
  const steps = [
    {
      number: 1,
      icon: '📤',
      title: 'Connect Your Broker',
      description: 'Link your trading account or upload trade history in seconds. We support all major brokers.'
    },
    {
      number: 2,
      icon: '🤖',
      title: 'AI Analyzes Performance',
      description: 'Our AI engine processes your trades, identifies patterns, and evaluates your trading psychology.'
    },
    {
      number: 3,
      icon: '📊',
      title: 'Get Actionable Insights',
      description: 'Receive personalized recommendations and coaching to refine your strategy and improve consistency.'
    }
  ];

  return (
    <section className="step1" id="how-it-works">
      <div className="container">
        <div className="step1-content">
          <motion.div
            className="step-number-large"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            1
          </motion.div>
          
          <div className="step1-main">
            <motion.div
              className="step1-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="step1-title">
                Powerful and Automated{' '}
                <span className="title-highlight">Trade Journaling</span>
              </h2>
              <p className="step1-description">
                You focus on trading while we focus on helping you get better. With automated journaling, we do the heavy lifting for you.
              </p>
            </motion.div>
            
            <div className="step1-cards">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="step-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="step-badge">{step.number}</div>
                  <div className="step-icon">{step.icon}</div>
                  <h3 className="step-card-title">{step.title}</h3>
                  <p className="step-card-description">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step1;

