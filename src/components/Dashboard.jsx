import { useAuth } from '../context/AuthContext';
import Navbar from './Navbar';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard-page">
      <Navbar />
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Welcome to Your Dashboard</h1>
          <p className="dashboard-subtitle">Hello, {user?.name || user?.email}!</p>
        </div>

        <div className="dashboard-grid">
          {/* Stats Cards */}
          <div className="dashboard-card stats-card">
            <h3 className="card-title">Trading Statistics</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-label">Win Rate</span>
                <span className="stat-value">68.5%</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Total Trades</span>
                <span className="stat-value">247</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Profit/Loss</span>
                <span className="stat-value positive">+$12,450</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Best Day</span>
                <span className="stat-value">Tuesday</span>
              </div>
            </div>
          </div>

          {/* AI Insights */}
          <div className="dashboard-card insights-card">
            <h3 className="card-title">AI Insights</h3>
            <div className="insights-list">
              <div className="insight-item">
                <div className="insight-icon">💡</div>
                <div className="insight-content">
                  <p className="insight-text">You tend to over-trade on Tuesdays. Consider reducing position size.</p>
                  <span className="insight-date">2 days ago</span>
                </div>
              </div>
              <div className="insight-item">
                <div className="insight-icon">📊</div>
                <div className="insight-content">
                  <p className="insight-text">Your win rate increases by 15% when trading in the morning session.</p>
                  <span className="insight-date">5 days ago</span>
                </div>
              </div>
              <div className="insight-item">
                <div className="insight-icon">🎯</div>
                <div className="insight-content">
                  <p className="insight-text">You're most consistent with EUR/USD pairs. Focus on these for better results.</p>
                  <span className="insight-date">1 week ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="dashboard-card activity-card">
            <h3 className="card-title">Recent Activity</h3>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon">✅</div>
                <div className="activity-content">
                  <p className="activity-text">Trade logged successfully</p>
                  <span className="activity-time">2 hours ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">📝</div>
                <div className="activity-content">
                  <p className="activity-text">Journal entry updated</p>
                  <span className="activity-time">5 hours ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">🔄</div>
                <div className="activity-content">
                  <p className="activity-text">Broker sync completed</p>
                  <span className="activity-time">1 day ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="dashboard-card actions-card">
            <h3 className="card-title">Quick Actions</h3>
            <div className="actions-grid">
              <button className="action-btn">
                <span className="action-icon">➕</span>
                <span className="action-label">Log Trade</span>
              </button>
              <button className="action-btn">
                <span className="action-icon">📊</span>
                <span className="action-label">View Reports</span>
              </button>
              <button className="action-btn">
                <span className="action-icon">📝</span>
                <span className="action-label">Write Journal</span>
              </button>
              <button className="action-btn">
                <span className="action-icon">⚙️</span>
                <span className="action-label">Settings</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

