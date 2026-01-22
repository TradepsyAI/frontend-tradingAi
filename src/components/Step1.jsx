import { motion } from 'framer-motion';
import './Step1.css';

const Step1 = () => {
  const steps = [
    {
      number: 1,
      icon: '⚡',
      title: 'Automated Extraction',
      description: 'Your trades are instantly synced from your broker, providing TradePsyAI with the raw data, timing, and price action needed for a surgical review.'
    },
    {
      number: 2,
      icon: '🔍',
      title: 'Strategy Cross-Examination',
      description: 'Leveraging deep-learning diagnostics, PsyAI cross examines documented strategy parameters against raw execution data.'
    },
    {
      number: 3,
      icon: '💬',
      title: 'Interactive Debrief',
      description: 'For each trade PsyAI highlights key misses and "A-ha" moments, allowing you to converse with your data to uncover exactly how to optimize your next session'
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
                AI-based{' '}
                <span className="title-highlight">trade journaling</span>
              </h2>
              <p className="step1-description">
                Forget manual logging—meet the first journal that talks back. TradePsyAI conducts a deep-tissue scan of every execution, cross-referencing your live entries against your documented strategy in real-time. It doesn't just record what happened; it identifies the critical technical and psychological nuances you missed while you were in the heat of the trade.
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

