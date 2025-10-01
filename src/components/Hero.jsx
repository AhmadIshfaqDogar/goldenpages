import React from 'react';
import { motion } from 'framer-motion';
import { Star, Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-primary"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-primary/10 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gold-primary/10 border border-gold-primary/30 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Star className="w-4 h-4 text-gold-primary fill-current" />
              <span className="text-gold-primary text-sm font-semibold">Bestselling Ebook</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Master The Art of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-gold-accent">
                Digital Success
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-text-gray mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Unlock the secrets to digital mastery with our comprehensive guide. Transform your skills and achieve unprecedented success in the digital landscape.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                className="bg-gold-primary text-dark-primary px-8 py-4 rounded-lg font-semibold flex items-center gap-2 group hover:bg-gold-accent transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                className="border border-gold-primary text-gold-primary px-8 py-4 rounded-lg font-semibold hover:bg-gold-primary/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read Sample
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-6 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { number: '10K+', label: 'Downloads' },
                { number: '4.9', label: 'Rating' },
                { number: '500+', label: '5-Star Reviews' },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-gold-primary">{stat.number}</div>
                  <div className="text-text-gray text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Book Cover */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="relative w-80 h-96 mx-auto lg:mx-0"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Book Spine */}
              <div className="absolute left-4 top-4 w-4 h-full bg-gradient-to-r from-gold-primary to-gold-accent rounded-l-lg"></div>
              
              {/* Book Cover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-primary to-gold-accent rounded-lg shadow-2xl">
                <div className="absolute inset-4 bg-dark-primary rounded-lg p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-1 bg-gold-primary mb-4"></div>
                    <h3 className="text-gold-primary font-display text-2xl font-bold mb-2">Digital Mastery</h3>
                    <p className="text-text-gray text-sm">The Complete Guide to Success</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gold-primary text-sm">By John Author</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gold-primary/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;