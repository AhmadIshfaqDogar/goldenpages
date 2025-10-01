import React from 'react';
import { motion } from 'framer-motion';
import { Download, Shield, Clock, Award } from 'lucide-react';

const CTA = () => {
  const guarantees = [
    {
      icon: Shield,
      title: '30-Day Money Back',
      description: 'Full refund if not satisfied'
    },
    {
      icon: Clock,
      title: 'Lifetime Updates',
      description: 'Free updates forever'
    },
    {
      icon: Award,
      title: 'Premium Support',
      description: '24/7 expert assistance'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-dark-primary to-dark-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gold-primary/10 border border-gold-primary/30 rounded-full px-6 py-3 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-primary font-semibold">Limited Time Offer</span>
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Start Your <span className="text-gold-primary">Digital Journey</span> Today
          </h2>

          <p className="text-xl text-text-gray mb-8 max-w-2xl mx-auto">
            Join thousands of successful professionals who have transformed their careers with this comprehensive guide to digital mastery.
          </p>

          {/* Pricing */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-baseline justify-center gap-4 mb-4">
              <span className="text-5xl font-bold text-gold-primary">$49</span>
              <span className="text-text-gray line-through text-xl">$99</span>
              <span className="bg-gold-primary text-dark-primary px-3 py-1 rounded-full text-sm font-semibold">
                50% OFF
              </span>
            </div>
            <p className="text-text-gray">One-time payment • Lifetime access</p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-gold-primary text-dark-primary px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 hover:bg-gold-accent transition-all duration-300 group"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 0 40px rgba(212, 175, 55, 0.5)' 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download Now
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </motion.button>

            <motion.button
              className="border border-gold-primary text-gold-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-primary/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read Free Sample
            </motion.button>
          </motion.div>

          {/* Guarantees */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={guarantee.title}
                className="flex items-center gap-4 p-4 bg-dark-primary/50 rounded-lg border border-gold-primary/10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <div className="w-12 h-12 bg-gold-primary/10 rounded-lg flex items-center justify-center">
                  <guarantee.icon className="w-6 h-6 text-gold-primary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-text-light">{guarantee.title}</div>
                  <div className="text-text-gray text-sm">{guarantee.description}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="mt-12 pt-8 border-t border-gold-primary/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-text-gray mb-6">Trusted by professionals at</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              {['Google', 'Microsoft', 'Amazon', 'Netflix', 'Apple'].map((company, index) => (
                <motion.div
                  key={company}
                  className="text-text-gray font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;