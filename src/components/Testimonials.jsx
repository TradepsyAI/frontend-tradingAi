import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    text: "If you're a trader, having a quality journal is absolutely necessary especially if you're in the beginning stages. I used this journal for a year and it's well worth the money.",
    rating: 5
  },
  {
    id: 2,
    text: "This platform has completely transformed my trading approach. The AI insights are incredibly accurate and have helped me identify patterns I never noticed before.",
    rating: 5
  },
  {
    id: 3,
    text: "The psychology coaching feature is a game-changer. It's like having a personal trading coach available 24/7. My consistency has improved dramatically since using this tool.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <div className="container">
        <motion.h2
          className="testimonials-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why thousands of traders are switching to{' '}
          <span className="title-gradient">AITrador</span>
        </motion.h2>

        <div className="testimonial-container">
          <button
            className="testimonial-nav prev"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="testimonial-card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <div className="testimonial-stars">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              
              <div className="testimonial-quote">
                <p className="testimonial-text">
                  {testimonials[currentIndex].text}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            className="testimonial-nav next"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

