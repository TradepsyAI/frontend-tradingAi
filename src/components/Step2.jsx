import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './Step2.css';

const Step2 = () => {
  const psychologyData = [
    { subject: 'Discipline', value: 70 },
    { subject: 'Patience', value: 85 },
    { subject: 'Risk Mgmt', value: 80 },
    { subject: 'Consistency', value: 65 },
    { subject: 'Planning', value: 55 }
  ];

  const features = [
    'Identify revenge trading patterns',
    'Detect overtrading and fatigue',
    'Get personalized coaching tips',
    'Track emotional state per trade'
  ];

  return (
    <section className="step2">
      <div className="container">
        <div className="step2-content">
          <motion.div
            className="step-number-large"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            2
          </motion.div>
          
          <div className="step2-main">
            <motion.div
              className="step2-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="step2-icon-small">🧠</div>
              <h2 className="step2-title">
                Your Personal{' '}
                <span className="title-highlight">AI Psychology Coach</span>
              </h2>
              <p className="step2-description">
                Your personal AI coach analyzes every trade, identifies emotional patterns, and provides personalized feedback. Learn why you make certain decisions and how to improve your discipline.
              </p>
            </motion.div>
            
            <div className="step2-body">
              <div className="step2-left">
                <div className="step2-features">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="feature-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="check-icon">✓</div>
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="step2-icon-large">🧠</div>
              </div>
              
              <div className="step2-right">
                <div className="psychology-report">
                  <div className="report-header">
                    <span className="report-icon">📁</span>
                    <h3 className="report-title">Psychology Report</h3>
                  </div>
                  
                  <div className="radar-chart-container">
                    <ResponsiveContainer width="100%" height={300}>
                      <RadarChart data={psychologyData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#4a4a4a', fontSize: 12 }} />
                        <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} />
                        <Radar
                          name="Psychology"
                          dataKey="value"
                          stroke="#FFA500"
                          fill="#FFA500"
                          fillOpacity={0.6}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="key-insight">
                    <strong>Key Insight:</strong> You tend to over-leverage after 2 consecutive losses. Consider implementing a max trade limit after losing streaks.
                  </div>
                </div>
              </div>
            </div>
            
            <div className="step2-audience">
              <span className="audience-item">For day traders</span>
              <span className="audience-separator">•</span>
              <span className="audience-item">Funded traders</span>
              <span className="audience-separator">•</span>
              <span className="audience-item">Scalpers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step2;

