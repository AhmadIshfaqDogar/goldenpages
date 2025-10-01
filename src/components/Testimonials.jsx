import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Digital Marketing Manager',
      content: 'This ebook completely transformed my approach to digital strategy. The actionable insights helped me increase our conversion rates by 300% in just three months!',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Startup Founder',
      content: 'As a founder with limited resources, this book provided exactly what I needed. The step-by-step guides are practical and easy to implement. Worth every penny!',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Freelance Designer',
      content: 'I\'ve read many books on digital success, but this one stands out. The author\'s expertise shines through every chapter. The community access alone is invaluable.',
      rating: 5,
      avatar: 'ER'
    },
    {
      name: 'David Thompson',
      role: 'E-commerce Specialist',
      content: 'The advanced strategies in this book helped me scale my business to 7 figures. The ROI was almost immediate. Highly recommended for serious entrepreneurs.',
      rating: 5,
      avatar: 'DT'
    },
    {
      name: 'Lisa Wang',
      role: 'Content Creator',
      content: 'Finally, a comprehensive guide that covers everything from basics to advanced techniques. The exercises and worksheets make implementation so much easier.',
      rating: 5,
      avatar: 'LW'
    },
    {
      name: 'James Wilson',
      role: 'Product Manager',
      content: 'This book bridges the gap between theory and practice perfectly. I\'ve already recommended it to my entire team. The insights are game-changing.',
      rating: 5,
      avatar: 'JW'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-dark-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            What Readers <span className="text-gold-primary">Say</span>
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Discover why thousands of professionals trust this guide to transform their digital journey
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-dark-secondary rounded-2xl p-6 border border-gold-primary/10 hover:border-gold-primary/30 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.1)' }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-gold-primary/50 group-hover:text-gold-primary transition-colors duration-300" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-gold-primary fill-current"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-text-gray mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-primary to-gold-accent rounded-full flex items-center justify-center text-dark-primary font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-text-light">{testimonial.name}</div>
                  <div className="text-text-gray text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Overall Rating */}
        <motion.div
          className="text-center mt-16 bg-dark-secondary rounded-2xl p-8 border border-gold-primary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-gold-primary mb-2">4.9</div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-gold-primary fill-current"
                  />
                ))}
              </div>
              <div className="text-text-gray">Average Rating</div>
            </div>
            
            <div className="h-16 w-px bg-gold-primary/30 hidden md:block"></div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-gold-primary mb-2">10K+</div>
              <div className="text-text-gray">Happy Readers</div>
            </div>
            
            <div className="h-16 w-px bg-gold-primary/30 hidden md:block"></div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-gold-primary mb-2">98%</div>
              <div className="text-text-gray">Would Recommend</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;