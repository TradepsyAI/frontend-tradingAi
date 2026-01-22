import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import Navbar from './Navbar';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="dashboard-page">
      <Navbar />
      <section className="dashboard-section">
        <div className="container">
          <motion.div
            className="dashboard-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="dashboard-header">
              <div>
                <h1 className="dashboard-title">
                  Welcome back, {user?.name || 'Trader'}! 👋
                </h1>
                <p className="dashboard-subtitle">
                  Here's your trading overview
                </p>
              </div>
              <button className="btn-logout" onClick={logout}>
                Logout
              </button>
            </div>

            <div className="dashboard-stats">
              <motion.div
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="stat-icon">📊</div>
                <div className="stat-content">
                  <h3 className="stat-label">Total Trades</h3>
                  <p className="stat-value">0</p>
                </div>
              </motion.div>

              <motion.div
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="stat-icon">📈</div>
                <div className="stat-content">
                  <h3 className="stat-label">Win Rate</h3>
                  <p className="stat-value">--</p>
                </div>
              </motion.div>

              <motion.div
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="stat-icon">💰</div>
                <div className="stat-content">
                  <h3 className="stat-label">Total P&L</h3>
                  <p className="stat-value">$0.00</p>
                </div>
              </motion.div>

              <motion.div
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="stat-icon">🎯</div>
                <div className="stat-content">
                  <h3 className="stat-label">Best Setup</h3>
                  <p className="stat-value">--</p>
                </div>
              </motion.div>
            </div>

            <div className="dashboard-actions">
              <motion.div
                className="action-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="action-title">Get Started</h3>
                <p className="action-description">
                  Connect your broker account or upload your trading data to start tracking your performance.
                </p>
                <motion.button
                  className="btn-action"
                  onClick={() => navigate('/brokers')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Connect Broker
                </motion.button>
              </motion.div>

              <motion.div
                className="action-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="action-title">Upload Trade History</h3>
                <p className="action-description">
                  Import your historical trades from CSV or Excel files to get instant insights.
                </p>
                <motion.button
                  className="btn-action"
                  onClick={() => navigate('/brokers')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Upload File
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;




