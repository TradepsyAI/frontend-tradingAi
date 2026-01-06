import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Pricing.css';

const Pricing = () => {
  const navigate = useNavigate();
  const [billingPeriod, setBillingPeriod] = useState('monthly'); // 'monthly' or 'yearly'

  const plans = {
    essential: {
      name: 'ESSENTIAL',
      description: 'Best for beginner traders',
      monthlyPrice: 24,
      yearlyPrice: 288,
      features: [
        { text: 'Can add up to 1 accounts', included: true },
        { text: '1GB of secure data storage', included: true },
        { text: 'Create up to 3 Playbooks', included: true },
        { text: '5 Mentor Invites', included: true },
        { text: 'Unlimited Backtesting', included: true },
        { text: 'Trade Replay', included: false }
      ]
    },
    pro: {
      name: 'PRO',
      description: 'Best for advanced traders',
      monthlyPrice: 33,
      yearlyPrice: 399,
      saveAmount: 189,
      features: [
        { text: 'Connect UNLIMITED accounts', included: true },
        { text: '5GB of secure data storage', included: true },
        { text: 'Unlimited Playbooks', included: true },
        { text: 'Unlimited Mentor Invites', included: true },
        { text: 'Unlimited Backtesting', included: true },
        { text: 'Sessions Trade Replay', included: true }
      ]
    }
  };

  const getPrice = (plan) => {
    return billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getBilledAmount = (plan) => {
    if (billingPeriod === 'monthly') {
      return `billed $${plan.yearlyPrice} / year`;
    }
    return `billed $${plan.yearlyPrice} / year`;
  };

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <motion.div
          className="pricing-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="pricing-title">
            Everything you need for{' '}
            <span className="title-gradient">consistent profitability</span>
          </h2>
          <p className="pricing-question">
            HOW MUCH WILL YOU INVEST IN YOUR TRADING SUCCESS TODAY?
          </p>
        </motion.div>

        <motion.div
          className="pricing-toggle-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="pricing-toggle">
            <button
              className={`toggle-option ${billingPeriod === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingPeriod('monthly')}
            >
              Pay monthly
            </button>
            <button
              className={`toggle-option ${billingPeriod === 'yearly' ? 'active' : ''}`}
              onClick={() => setBillingPeriod('yearly')}
            >
              Pay yearly
            </button>
          </div>
        </motion.div>

        <div className="pricing-plans">
          {/* ESSENTIAL Plan */}
          <motion.div
            className="pricing-card essential"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="plan-header">
              <h3 className="plan-name">{plans.essential.name}</h3>
              <p className="plan-description">{plans.essential.description}</p>
            </div>
            
            <div className="plan-pricing">
              <div className="price-amount">
                <span className="currency">$</span>
                <span className="price-number">{getPrice(plans.essential)}</span>
                <span className="price-period">/Month</span>
              </div>
              <p className="billing-info">{getBilledAmount(plans.essential)}</p>
            </div>

            <motion.button
              className="plan-cta essential-cta"
              onClick={() => navigate('/signup')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>

            <div className="plan-features">
              {plans.essential.features.map((feature, index) => (
                <div key={index} className={`feature-item ${feature.included ? '' : 'not-included'}`}>
                  {feature.included ? (
                    <span className="feature-icon">✓</span>
                  ) : (
                    <span className="feature-icon">✕</span>
                  )}
                  <span className="feature-text">{feature.text}</span>
                </div>
              ))}
            </div>

            <a href="#" className="plan-breakdown">See full breakdown →</a>
          </motion.div>

          {/* PRO Plan */}
          <motion.div
            className="pricing-card pro"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            {billingPeriod === 'yearly' && plans.pro.saveAmount && (
              <div className="save-badge">SAVE ${plans.pro.saveAmount}</div>
            )}
            
            <div className="plan-header">
              <h3 className="plan-name pro-name">{plans.pro.name}</h3>
              <p className="plan-description">{plans.pro.description}</p>
            </div>
            
            <div className="plan-pricing">
              <div className="price-amount">
                <span className="currency">$</span>
                <span className="price-number">{getPrice(plans.pro)}</span>
                <span className="price-period">/Month</span>
              </div>
              <p className="billing-info">{getBilledAmount(plans.pro)}</p>
            </div>

            <motion.button
              className="plan-cta pro-cta"
              onClick={() => navigate('/signup')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>

            <div className="plan-features">
              {plans.pro.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">{feature.text}</span>
                </div>
              ))}
            </div>

            <a href="#" className="plan-breakdown">See full breakdown →</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

