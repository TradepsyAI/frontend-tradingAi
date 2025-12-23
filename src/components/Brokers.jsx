import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import './Brokers.css';

const Brokers = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="brokers-page">
      <Navbar />
      <section className="brokers-section">
        <div className="container">
          <motion.div
            className="brokers-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="brokers-title">
              Brokers &{' '}
              <span className="title-highlight">Integrations</span>
            </h1>
            
            <div className="brokers-illustration">
              <div className="illustration-placeholder">
                <div className="illustration-elements">
                  <div className="illustration-worker">👷</div>
                  <div className="illustration-buildings">🏢</div>
                  <div className="illustration-gears">⚙️</div>
                  <div className="illustration-arrow">↗️</div>
                  <div className="illustration-dollar">💰</div>
                </div>
              </div>
            </div>
            
            <div className="brokers-search">
              <label className="search-label">Search your broker, here:</label>
              <input
                type="text"
                className="search-input"
                placeholder="Type broker name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Brokers;

