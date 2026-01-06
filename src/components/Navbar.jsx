import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">🧠</div>
        </Link>
        
        <ul className="navbar-links">
          {isAuthenticated ? (
            <li>
              <Link 
                to="/dashboard" 
                className={location.pathname === '/dashboard' ? 'active' : ''}
              >
                Dashboard
              </Link>
            </li>
          ) : (
            <>
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
            </>
          )}
        </ul>
        
        <div className="navbar-actions">
          {isAuthenticated ? (
            <>
              <span className="user-name">Hi, {user?.name || user?.email}</span>
              <motion.button 
                className="btn-logout"
                onClick={logout}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Logout
              </motion.button>
            </>
          ) : (
            <>
              <motion.button 
                className="btn-primary"
                onClick={() => navigate('/login')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Login
              </motion.button>
              <motion.button 
                className="btn-primary"
                onClick={() => navigate('/signup')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

