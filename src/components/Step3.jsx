import { motion } from 'framer-motion';
import './Step3.css';

const Step3 = () => {
  return (
    <section className="step3">
      <div className="container">
        <div className="step3-content">
          <motion.div
            className="step-number-large"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            3
          </motion.div>
          
          <div className="step3-main">
            <motion.div
              className="step3-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="step3-icon">📄</div>
              <h2 className="step3-title">
                Document your{' '}
                <span className="title-highlight">Strategies</span>
              </h2>
              <p className="step3-description">
                Document your trading strategies and let AI help you refine them. Track which setups work best, get suggestions for improvements, and ensure you're following your rules.
              </p>
            </motion.div>
            
            <motion.div
              className="strategy-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="strategy-header">
                <span className="strategy-icon">📄</span>
                <h3 className="strategy-title">Strategy Document</h3>
              </div>
              
              <div className="strategy-content">
                <div className="strategy-section">
                  <strong className="section-label">Markets:</strong>
                  <span className="section-value">ES, NQ Futures</span>
                </div>
                
                <div className="strategy-section">
                  <strong className="section-label">Entry Rules:</strong>
                  <ul className="strategy-list">
                    <li>Wait for pullback to 20 EMA</li>
                    <li>RSI must be below 40 or above 60</li>
                    <li>Confirm with volume spike</li>
                  </ul>
                </div>
                
                <div className="strategy-section">
                  <strong className="section-label">Risk Management:</strong>
                  <ul className="strategy-list">
                    <li>Max 2% per trade, 6% daily limit</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="win-rate-display"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="win-rate-label">Win rate with this strategy</span>
              <span className="win-rate-value">72.3%</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step3;

