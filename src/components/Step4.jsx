import { motion } from 'framer-motion';
import './Step4.css';

const Step4 = () => {
  const brokers = [
    {
      name: 'TD Ameritrade',
      trades: '142 trades synced',
      status: 'Connected',
      connected: true
    },
    {
      name: 'Interactive Brokers',
      trades: '89 trades synced',
      status: 'Connected',
      connected: true
    },
    {
      name: 'TradeStation',
      trades: '',
      status: 'Ready to connect',
      connected: false
    }
  ];

  return (
    <section className="step4">
      <div className="container">
        <div className="step4-content">
          <motion.div
            className="step-number-large"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            4
          </motion.div>
          
          <div className="step4-main">
            <motion.div
              className="step4-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="step4-title">
                Broker Sync{' '}
                <span className="title-highlight">& Trade Calendar</span>
              </h2>
              <p className="step4-description">
                Document your trading strategies and let AI help you refine them. Track which setups work best, get suggestions for improvements, and ensure you're following your rules.
              </p>
            </motion.div>
            
            <motion.div
              className="connected-brokers"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="brokers-header">
                <span className="brokers-icon">💾</span>
                <h3 className="brokers-title">Connected Brokers</h3>
              </div>
              
              <div className="brokers-list">
                {brokers.map((broker, index) => (
                  <motion.div
                    key={index}
                    className="broker-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="broker-info">
                      <div className="broker-name">{broker.name}</div>
                      {broker.trades && (
                        <div className="broker-trades">{broker.trades}</div>
                      )}
                    </div>
                    <button className={`broker-status ${broker.connected ? 'connected' : 'ready'}`}>
                      {broker.status}
                    </button>
                  </motion.div>
                ))}
              </div>
              
              <div className="last-sync">
                <span>Last sync</span>
                <span>2 minutes</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step4;

