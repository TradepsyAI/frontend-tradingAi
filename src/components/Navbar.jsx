import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">🧠</div>
        </Link>
        
        <ul className="navbar-links">
          <li><a href="/#features">Features</a></li>
          <li><a href="/#how-it-works">How It Works</a></li>
          <li>
            <Link 
              to="/brokers" 
              className={location.pathname === '/brokers' ? 'active' : ''}
            >
              Supported Brokers
            </Link>
          </li>
          <li><a href="/#pricing">Pricing</a></li>
          <li><a href="/#faq">FAQ</a></li>
          <li><a href="/#resources">Resources</a></li>
        </ul>
        
        <div className="navbar-actions">
          <button className="btn-login">Login</button>
          <motion.button 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

