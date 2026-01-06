import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const faqData = [
  {
    id: 1,
    question: 'Does AITrador trade for me?',
    answer: 'No, AITrador does not trade for you. AITrador is a trading journal and psychology coaching platform that helps you analyze your trading performance, understand your psychology, and build consistency. You make all trading decisions yourself, and AITrador provides the insights and tools to help you improve.'
  },
  {
    id: 2,
    question: 'How will AITrador help me as a trader?',
    answer: 'AITrador helps you by providing AI-powered insights into your trading patterns, psychology, and performance. It tracks your trades, identifies what works and what doesn\'t, offers personalized coaching, and helps you build consistency. With features like unlimited backtesting, playbooks, and mentor invites, you\'ll have all the tools needed to understand your edge and improve your trading discipline.'
  },
  {
    id: 3,
    question: 'How secure is AITrador?',
    answer: 'AITrador takes security seriously. We use industry-standard encryption to protect your data, secure data storage with regular backups, and follow best practices for data protection. Your trading data is stored securely and is only accessible by you. We never share your information with third parties and comply with all relevant data protection regulations.'
  },
  {
    id: 4,
    question: 'How long does it take to gain access to AITrador?',
    answer: 'Once you sign up and choose a plan, you\'ll gain immediate access to AITrador. The setup process is quick and straightforward - simply connect your broker accounts or upload your trading data, and you can start using all the features right away. There\'s no waiting period or approval process required.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <motion.div
          className="faq-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="faq-title">Frequently Asked Questions</h2>
        </motion.div>

        <div className="faq-list">
          {faqData.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="question-text">{faq.question}</span>
                <motion.span
                  className="faq-icon"
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

