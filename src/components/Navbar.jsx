import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
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

        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-menu-links">
              <li><a href="/#features" onClick={closeMobileMenu}>Features</a></li>
              <li><a href="/#how-it-works" onClick={closeMobileMenu}>How It Works</a></li>
              <li>
                <Link 
                  to="/brokers" 
                  className={location.pathname === '/brokers' ? 'active' : ''}
                  onClick={closeMobileMenu}
                >
                  Supported Brokers
                </Link>
              </li>
              <li><a href="/#pricing" onClick={closeMobileMenu}>Pricing</a></li>
              <li><a href="/#faq" onClick={closeMobileMenu}>FAQ</a></li>
              <li><a href="/#resources" onClick={closeMobileMenu}>Resources</a></li>
            </ul>
            <div className="mobile-menu-actions">
              <button className="btn-login" onClick={closeMobileMenu}>Login</button>
              <motion.button 
                className="btn-primary"
                onClick={closeMobileMenu}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

