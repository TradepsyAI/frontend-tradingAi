import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import './Step5.css';

const Step5 = () => {
  const monthlyData = [
    { month: 'Jan', value: 2300 },
    { month: 'Feb', value: 1300 },
    { month: 'Mar', value: 3600 },
    { month: 'Apr', value: 3900 },
    { month: 'May', value: 4900 }
  ];

  const metrics = [
    { label: 'Win Rate', value: '68.5%' },
    { label: 'Profit Factor', value: '2.3' },
    { label: 'Avg R', value: '1.8R' }
  ];

  return (
    <section className="step5">
      <div className="container">
        <div className="step5-content">
          <motion.div
            className="step-number-large"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            5
          </motion.div>
          
          <div className="step5-main">
            <motion.div
              className="step5-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="step5-title">
                Trade Journal &{' '}
                <span className="title-highlight">Advanced Analytics</span>
              </h2>
              <p className="step5-description">
                Every metric you need to understand your trading edge. From basic P&L to advanced statistics like expectancy, profit factor, and risk-adjusted returns.
              </p>
            </motion.div>
            
            <motion.div
              className="performance-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="performance-header">
                <h3 className="performance-title">Monthly Performance</h3>
                <div className="performance-value">+18.3%</div>
              </div>
              
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.2} />
                    <XAxis 
                      dataKey="month" 
                      stroke="#888"
                      tick={{ fill: '#888', fontSize: 12 }}
                    />
                    <YAxis 
                      stroke="#888"
                      tick={{ fill: '#888', fontSize: 12 }}
                      domain={[0, 6000]}
                      ticks={[0, 1500, 3000, 4500, 6000]}
                    />
                    <Bar 
                      dataKey="value" 
                      fill="#FFA500"
                      radius={[8, 8, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="metrics-grid">
                {metrics.map((metric, index) => (
                  <div key={index} className="metric-item">
                    <div className="metric-label">{metric.label}</div>
                    <div className="metric-value">{metric.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step5;

