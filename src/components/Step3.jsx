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
              <div className="step3-icon">🎯</div>
              <h2 className="step3-title">
                The End of One-Size-Fits-All{' '}
                <span className="title-highlight">Trading.</span>
              </h2>
              <p className="step3-description">
                Most traders fail because they try to copy a "pro" whose personality (risk tolerance, patience, schedule) is the opposite of theirs. 
                Incompatible systems is the #1 reason for unprofitable traders. 
                That's where TradePsyAI comes in.
                It will analyze your psychological profile and life constraints to architect a bespoke trading blueprint. By aligning a strategy with your natural personality, it eliminates friction and hard-codes a sustainable path to long term consistency.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step3;

