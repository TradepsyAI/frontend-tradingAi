import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import Navbar from './Navbar';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const { login, socialLogin } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    try {
      // Demo account only
      if (formData.email !== 'demo@gmail.com' || formData.password !== 'demo1123') {
        setError('Invalid credentials. Please use demo account: demo@gmail.com / demo1123');
        setLoading(false);
        return;
      }

      const result = await login(formData.email, formData.password);
      
      if (result.success) {
        // Check if user has completed onboarding
        const userData = JSON.parse(localStorage.getItem('userData') || '{}');
        if (userData.onboardingCompleted) {
          navigate('/dashboard');
        } else {
          navigate('/welcome');
        }
      } else {
        setError(result.error || 'Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    setLoading(true);
    setError('');

    try {
      // Mock social login data
      const mockUserData = {
        id: Date.now(),
        email: `user@${provider}.com`,
        name: `${provider} User`
      };

      const result = await socialLogin(provider, mockUserData);
      
      if (result.success) {
        navigate('/welcome');
      } else {
        setError(result.error || 'Social login failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <Navbar />
      <section className="login-section">
        <div className="container">
          <motion.div
            className="login-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="login-header">
              <h1 className="login-title">Welcome Back</h1>
              <p className="login-subtitle">Sign in to your account to continue</p>
              <div className="backend-notice">
                <span className="notice-icon">⚠️</span>
                <span className="notice-text">Backend is under development. Please use demo account.</span>
              </div>
            </div>

            <div className="demo-credentials">
              <p className="demo-label">Demo Account Credentials:</p>
              <div className="demo-info">
                <span className="demo-email">Email: <strong>demo@gmail.com</strong></span>
                <span className="demo-password">Password: <strong>demo1123</strong></span>
              </div>
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
              {error && (
                <div className="form-error">{error}</div>
              )}

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
                  placeholder="Enter your password"
                  required
                  disabled={loading}
                  minLength={6}
                />
              </div>

              <motion.button
                type="submit"
                className="btn-login-submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </motion.button>
            </form>

            <div className="login-footer">
              <p>
                Don't have an account?{' '}
                <Link to="/signup" className="signup-link">
                  Sign up
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Login;
