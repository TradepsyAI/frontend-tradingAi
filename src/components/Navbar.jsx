import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleAnchorClick = (e, sectionId) => {
    e.preventDefault();
    closeMobileMenu();
    
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      // Wait for navigation, then scroll
      setTimeout(() => {
        const scrollToSection = () => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            // Retry if element not found yet
            setTimeout(scrollToSection, 50);
          }
        };
        scrollToSection();
      }, 200);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <div className="logo-icon">🧠</div>
        </Link>
        
        <ul className="navbar-links">
          <li><a href="/#features" onClick={(e) => handleAnchorClick(e, 'features')}>Features</a></li>
          <li><a href="/#how-it-works" onClick={(e) => handleAnchorClick(e, 'how-it-works')}>How It Works</a></li>
          <li>
            <Link 
              to="/brokers" 
              className={location.pathname === '/brokers' ? 'active' : ''}
            >
              Supported Brokers
            </Link>
          </li>
          <li><a href="/#pricing" onClick={(e) => handleAnchorClick(e, 'pricing')}>Pricing</a></li>
          <li><a href="/#faq" onClick={(e) => handleAnchorClick(e, 'faq')}>FAQ</a></li>
        </ul>
        
        <div className="navbar-actions">
          <Link to="/login">
            <button className="btn-login">Login</button>
          </Link>
          <Link to="/signup">
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </Link>
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
              <li><a href="/#features" onClick={(e) => handleAnchorClick(e, 'features')}>Features</a></li>
              <li><a href="/#how-it-works" onClick={(e) => handleAnchorClick(e, 'how-it-works')}>How It Works</a></li>
              <li>
                <Link 
                  to="/brokers" 
                  className={location.pathname === '/brokers' ? 'active' : ''}
                  onClick={closeMobileMenu}
                >
                  Supported Brokers
                </Link>
              </li>
              <li><a href="/#pricing" onClick={(e) => handleAnchorClick(e, 'pricing')}>Pricing</a></li>
              <li><a href="/#faq" onClick={(e) => handleAnchorClick(e, 'faq')}>FAQ</a></li>
            </ul>
            <div className="mobile-menu-actions">
              <Link to="/login" onClick={closeMobileMenu}>
                <button className="btn-login">Login</button>
              </Link>
              <Link to="/signup" onClick={closeMobileMenu}>
                <motion.button 
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

