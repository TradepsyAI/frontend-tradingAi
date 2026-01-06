import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import Navbar from './Navbar';
import './Brokers.css';

const brokersData = [
  {
    id: 1,
    name: 'Alpha Futures (Alpha Ticks)',
    types: ['Futures'],
    syncTypes: ['file-upload']
  },
  {
    id: 2,
    name: 'Bybit',
    types: ['Futures'],
    syncTypes: ['auto-sync']
  },
  {
    id: 3,
    name: 'CQG Desktop',
    types: ['Futures'],
    syncTypes: ['file-upload']
  },
  {
    id: 4,
    name: 'Charles Schwab',
    types: ['Stocks', 'Options', 'Futures'],
    syncTypes: ['auto-sync']
  },
  {
    id: 5,
    name: 'CoinBase',
    types: ['Crypto'],
    syncTypes: ['file-upload']
  },
  {
    id: 6,
    name: 'CoinBase Pro',
    types: ['Crypto'],
    syncTypes: ['file-upload']
  },
  {
    id: 7,
    name: 'Ctrader',
    types: ['Futures'],
    syncTypes: ['file-upload']
  },
  {
    id: 8,
    name: 'DXtrade',
    types: ['Futures'],
    syncTypes: ['file-upload']
  },
  {
    id: 9,
    name: 'Das Trader Pro',
    types: ['Futures'],
    syncTypes: ['file-upload']
  },
  {
    id: 10,
    name: 'Generic',
    types: ['Stocks', 'Options', 'Forex', 'Futures', 'Crypto'],
    syncTypes: []
  },
  {
    id: 11,
    name: 'Interactive Brokers',
    types: ['Stocks', 'Options', 'Futures'],
    syncTypes: ['file-upload', 'auto-sync']
  },
  {
    id: 12,
    name: 'Light Speed',
    types: ['Stocks', 'Options'],
    syncTypes: ['file-upload']
  },
  {
    id: 13,
    name: 'Match-Trader',
    types: ['Stocks', 'Forex', 'Futures', 'Crypto'],
    syncTypes: ['file-upload']
  },
  {
    id: 14,
    name: 'MetaTrader 4',
    types: ['Stocks', 'Forex', 'Futures', 'Crypto'],
    syncTypes: ['file-upload', 'auto-sync']
  },
  {
    id: 15,
    name: 'MetaTrader 5',
    types: ['Stocks', 'Forex', 'Futures', 'Crypto'],
    syncTypes: ['file-upload', 'auto-sync']
  },
  {
    id: 16,
    name: 'MotiveWave',
    types: ['Stocks', 'Futures'],
    syncTypes: ['file-upload']
  },
  {
    id: 17,
    name: 'NinjaTrader',
    types: ['Stocks', 'Forex', 'Futures'],
    syncTypes: ['file-upload', 'auto-sync']
  },
  {
    id: 18,
    name: 'Oanda',
    types: ['Forex'],
    syncTypes: ['file-upload']
  },
  {
    id: 19,
    name: 'Power E Trade',
    types: ['Stocks', 'Options', 'Futures'],
    syncTypes: ['file-upload']
  },
  {
    id: 20,
    name: 'Project X',
    types: ['Futures'],
    syncTypes: ['file-upload']
  },
  {
    id: 21,
    name: 'Quantower',
    types: ['Futures', 'Crypto'],
    syncTypes: ['file-upload']
  },
  {
    id: 22,
    name: 'Questrade',
    types: ['Stocks', 'Options', 'Forex', 'Futures'],
    syncTypes: ['file-upload']
  },
  {
    id: 23,
    name: 'Refinitiv Redi',
    types: ['Stocks', 'Options', 'Futures'],
    syncTypes: ['file-upload']
  },
  {
    id: 24,
    name: 'Rithmic R Trader',
    types: ['Futures'],
    syncTypes: ['file-upload']
  }
];

const Brokers = () => {
  const { isAuthenticated, login, signup } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBroker, setSelectedBroker] = useState(null);
  const [showFileModal, setShowFileModal] = useState(false);
  const [showSyncModal, setShowSyncModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'
  const [uploading, setUploading] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [notification, setNotification] = useState(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState('');
  const [authForm, setAuthForm] = useState({
    email: '',
    password: '',
    name: ''
  });
  const fileInputRef = useRef(null);

  const filteredBrokers = brokersData.filter(broker =>
    broker.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // File Upload Handler - Ready for backend integration
  const handleFileUpload = async (broker) => {
    setSelectedBroker(broker);
    setShowFileModal(true);
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleFileSubmit = async () => {
    if (!uploadedFile) {
      setNotification({ type: 'error', message: 'Please select a file first' });
      setTimeout(() => setNotification(null), 3000);
      return;
    }

    setUploading(true);
    
    try {
      // TODO: Replace with actual backend API call
      // Example: await uploadBrokerFile(selectedBroker.id, uploadedFile);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setNotification({ 
        type: 'success', 
        message: `File uploaded successfully for ${selectedBroker.name}` 
      });
      
      setShowFileModal(false);
      setUploadedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      
      setTimeout(() => setNotification(null), 3000);
    } catch (error) {
      setNotification({ 
        type: 'error', 
        message: 'Failed to upload file. Please try again.' 
      });
      setTimeout(() => setNotification(null), 3000);
    } finally {
      setUploading(false);
    }
  };

  // Auto Sync Handler - Ready for backend integration
  const handleAutoSync = async (broker) => {
    // Check if user is authenticated
    if (!isAuthenticated) {
      setSelectedBroker(broker);
      setShowAuthModal(true);
      setAuthMode('login');
      return;
    }
    
    // User is authenticated, proceed with auto sync
    setSelectedBroker(broker);
    setShowSyncModal(true);
  };

  // Handle authentication form submission
  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError('');

    try {
      let result;
      if (authMode === 'login') {
        result = await login(authForm.email, authForm.password);
      } else {
        result = await signup(authForm.email, authForm.password, authForm.name);
      }

      if (result.success) {
        setShowAuthModal(false);
        setAuthForm({ email: '', password: '', name: '' });
        setNotification({
          type: 'success',
          message: authMode === 'login' ? 'Successfully logged in!' : 'Account created successfully!'
        });
        setTimeout(() => setNotification(null), 3000);
        
        // After successful auth, open sync modal
        if (selectedBroker) {
          setShowSyncModal(true);
        }
      } else {
        setAuthError(result.error || 'Authentication failed. Please try again.');
      }
    } catch (error) {
      setAuthError('An error occurred. Please try again.');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleSyncConfirm = async () => {
    setSyncing(true);
    
    try {
      // TODO: Replace with actual backend API call
      // Example: await enableAutoSync(selectedBroker.id);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setNotification({ 
        type: 'success', 
        message: `Auto sync enabled for ${selectedBroker.name}` 
      });
      
      setShowSyncModal(false);
      setTimeout(() => setNotification(null), 3000);
    } catch (error) {
      setNotification({ 
        type: 'error', 
        message: 'Failed to enable auto sync. Please try again.' 
      });
      setTimeout(() => setNotification(null), 3000);
    } finally {
      setSyncing(false);
    }
  };

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

            <div className="brokers-list-section">
              <h2 className="brokers-list-title">All Brokers and Integrations</h2>
              <div className="brokers-grid">
                {filteredBrokers.map((broker, index) => (
                  <motion.div
                    key={broker.id}
                    className="broker-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="broker-name">{broker.name}</h3>
                    <div className="broker-sync-buttons">
                      {broker.syncTypes.length > 0 ? (
                        broker.syncTypes.map((syncType, idx) => (
                          <button
                            key={idx}
                            className={`broker-sync-btn ${syncType}`}
                            onClick={() => 
                              syncType === 'file-upload' 
                                ? handleFileUpload(broker) 
                                : handleAutoSync(broker)
                            }
                          >
                            {syncType === 'file-upload' ? 'File Upload' : 'Auto sync'}
                          </button>
                        ))
                      ) : (
                        <span className="no-sync-available">No sync available</span>
                      )}
                    </div>
                    <div className="broker-types">
                      {broker.types.map((type, idx) => (
                        <div key={idx} className="broker-type-item">
                          <span className="type-checkmark">✓</span>
                          <span className="type-name">{type}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* File Upload Modal */}
      <AnimatePresence>
        {showFileModal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !uploading && setShowFileModal(false)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h2>Upload File for {selectedBroker?.name}</h2>
                <button
                  className="modal-close"
                  onClick={() => !uploading && setShowFileModal(false)}
                  disabled={uploading}
                >
                  ×
                </button>
              </div>
              
              <div className="modal-body">
                <div className="file-upload-area">
                  <input
                    ref={fileInputRef}
                    type="file"
                    id="file-input"
                    className="file-input"
                    onChange={handleFileSelect}
                    accept=".csv,.xlsx,.xls,.txt"
                    disabled={uploading}
                  />
                  <label htmlFor="file-input" className="file-label">
                    {uploadedFile ? (
                      <div className="file-selected">
                        <span className="file-icon">📄</span>
                        <span className="file-name">{uploadedFile.name}</span>
                        <span className="file-size">
                          {(uploadedFile.size / 1024).toFixed(2)} KB
                        </span>
                      </div>
                    ) : (
                      <div className="file-placeholder">
                        <span className="file-icon">📁</span>
                        <span>Click to select file or drag and drop</span>
                        <span className="file-hint">CSV, XLSX, XLS, TXT</span>
                      </div>
                    )}
                  </label>
                </div>
              </div>
              
              <div className="modal-footer">
                <button
                  className="btn-cancel"
                  onClick={() => setShowFileModal(false)}
                  disabled={uploading}
                >
                  Cancel
                </button>
                <button
                  className="btn-submit"
                  onClick={handleFileSubmit}
                  disabled={uploading || !uploadedFile}
                >
                  {uploading ? 'Uploading...' : 'Upload File'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Auto Sync Modal */}
      <AnimatePresence>
        {showSyncModal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !syncing && setShowSyncModal(false)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h2>Enable Auto Sync for {selectedBroker?.name}</h2>
                <button
                  className="modal-close"
                  onClick={() => !syncing && setShowSyncModal(false)}
                  disabled={syncing}
                >
                  ×
                </button>
              </div>
              
              <div className="modal-body">
                <div className="sync-info">
                  <div className="sync-icon">🔄</div>
                  <p>
                    Auto sync will automatically import your trading data from {selectedBroker?.name} 
                    on a regular basis. You'll need to connect your account to enable this feature.
                  </p>
                  <div className="sync-features">
                    <div className="feature-item">✓ Automatic data updates</div>
                    <div className="feature-item">✓ Real-time synchronization</div>
                    <div className="feature-item">✓ Secure API connection</div>
                  </div>
                </div>
              </div>
              
              <div className="modal-footer">
                <button
                  className="btn-cancel"
                  onClick={() => setShowSyncModal(false)}
                  disabled={syncing}
                >
                  Cancel
                </button>
                <button
                  className="btn-submit"
                  onClick={handleSyncConfirm}
                  disabled={syncing}
                >
                  {syncing ? 'Enabling...' : 'Enable Auto Sync'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Auth Modal (Login/Signup) */}
      <AnimatePresence>
        {showAuthModal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !authLoading && setShowAuthModal(false)}
          >
            <motion.div
              className="modal-content auth-modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h2>{authMode === 'login' ? 'Login' : 'Sign Up'}</h2>
                <button
                  className="modal-close"
                  onClick={() => !authLoading && setShowAuthModal(false)}
                  disabled={authLoading}
                >
                  ×
                </button>
              </div>
              
              <div className="modal-body">
                <div className="auth-info">
                  <p className="auth-message">
                    {authMode === 'login' 
                      ? 'Please login to enable auto sync for your broker.'
                      : 'Create an account to enable auto sync for your broker.'}
                  </p>
                  
                  <form onSubmit={handleAuthSubmit} className="auth-form">
                    {authMode === 'signup' && (
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          value={authForm.name}
                          onChange={(e) => setAuthForm({ ...authForm, name: e.target.value })}
                          placeholder="Enter your name"
                          required
                          disabled={authLoading}
                        />
                      </div>
                    )}
                    
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        value={authForm.email}
                        onChange={(e) => setAuthForm({ ...authForm, email: e.target.value })}
                        placeholder="Enter your email"
                        required
                        disabled={authLoading}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        value={authForm.password}
                        onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })}
                        placeholder="Enter your password"
                        required
                        disabled={authLoading}
                        minLength={6}
                      />
                    </div>
                    
                    {authError && (
                      <div className="auth-error">{authError}</div>
                    )}
                    
                    <button
                      type="submit"
                      className="btn-submit auth-submit"
                      disabled={authLoading}
                    >
                      {authLoading 
                        ? (authMode === 'login' ? 'Logging in...' : 'Signing up...')
                        : (authMode === 'login' ? 'Login' : 'Sign Up')}
                    </button>
                  </form>
                  
                  <div className="auth-switch">
                    <p>
                      {authMode === 'login' ? "Don't have an account? " : 'Already have an account? '}
                      <button
                        type="button"
                        className="auth-switch-btn"
                        onClick={() => {
                          setAuthMode(authMode === 'login' ? 'signup' : 'login');
                          setAuthError('');
                        }}
                        disabled={authLoading}
                      >
                        {authMode === 'login' ? 'Sign Up' : 'Login'}
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notification Toast */}
      <AnimatePresence>
        {notification && (
          <motion.div
            className={`notification ${notification.type}`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <span className="notification-icon">
              {notification.type === 'success' ? '✓' : '✕'}
            </span>
            <span className="notification-message">{notification.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Brokers;

