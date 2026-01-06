import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import Navbar from './Navbar';
import './Signup.css';

const Signup = () => {
  const { signup, socialLogin, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGoogleSignup = async () => {
    setLoading(true);
    setError('');
    
    try {
      const result = await socialLogin('google', {});
      
      if (!result.success) {
        setError(result.error || 'Backend authentication is under development. Please try again later.');
      }
    } catch (err) {
      setError('Backend authentication is under development. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleAppleSignup = async () => {
    setLoading(true);
    setError('');
    
    try {
      const result = await socialLogin('apple', {});
      
      if (!result.success) {
        setError(result.error || 'Backend authentication is under development. Please try again later.');
      }
    } catch (err) {
      setError('Backend authentication is under development. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      const result = await signup(formData.email, formData.password, formData.name);
      
      if (result.success) {
        // Always redirect to onboarding for new users
        localStorage.removeItem('onboardingQuiz');
        navigate('/onboarding');
      } else {
        setError(result.error || 'Backend authentication is under development. Please try again later.');
      }
    } catch (err) {
      setError('Backend authentication is under development. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <Navbar />
      <section className="signup-section">
        <div className="container">
          <motion.div
            className="signup-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="signup-header">
              <h1 className="signup-title">Create Your Account</h1>
              <p className="signup-subtitle">
                Start your journey to consistent trading success
              </p>
            </div>

            <div className="social-login">
              <motion.button
                type="button"
                className="social-btn google-btn"
                onClick={handleGoogleSignup}
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
              >
                <svg className="social-icon" viewBox="0 0 24 24" width="20" height="20">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </motion.button>
              
              <motion.button
                type="button"
                className="social-btn apple-btn"
                onClick={handleAppleSignup}
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
              >
                <svg className="social-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Continue with Apple
              </motion.button>
            </div>

            <div className="divider">
              <span className="divider-line"></span>
              <span className="divider-text">or</span>
              <span className="divider-line"></span>
            </div>

            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password (min. 6 characters)"
                  required
                  minLength={6}
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                  disabled={loading}
                />
              </div>

              {error && (
                <div className="form-error">{error}</div>
              )}

              <motion.button
                type="submit"
                className="btn-signup"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </motion.button>
            </form>

            <div className="signup-footer">
              <p>
                Already have an account?{' '}
                <Link to="/login" className="login-link">Login</Link>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Signup;

