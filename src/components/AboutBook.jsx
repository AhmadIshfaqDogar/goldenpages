import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Target, Award } from 'lucide-react';

const AboutBook = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Content',
      description: '300+ pages of in-depth knowledge and practical strategies'
    },
    {
      icon: Clock,
      title: 'Time-Saving Tips',
      description: 'Learn efficient methods that save you hours of trial and error'
    },
    {
      icon: Target,
      title: 'Actionable Strategies',
      description: 'Step-by-step guides you can implement immediately'
    },
    {
      icon: Award,
      title: 'Expert Insights',
      description: 'Proven techniques from industry leaders and successful professionals'
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
    <section id="about" className="py-20 bg-dark-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gold-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-accent rounded-full blur-3xl"></div>
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
            About The <span className="text-gold-primary">Book</span>
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Discover the ultimate guide to mastering digital skills and achieving unprecedented success in today's competitive landscape.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-display font-bold mb-6">
              Transform Your Digital Journey
            </h3>
            <p className="text-text-gray text-lg mb-6">
              This comprehensive ebook is your roadmap to digital excellence. Packed with proven strategies, real-world examples, and actionable insights, it's designed to help you navigate the complexities of the digital world with confidence.
            </p>
            <p className="text-text-gray text-lg mb-8">
              Whether you're a beginner looking to build foundational skills or an experienced professional seeking advanced techniques, this book provides the tools and knowledge you need to succeed.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '300+', label: 'Pages' },
                { value: '15', label: 'Chapters' },
                { value: '50+', label: 'Exercises' },
                { value: 'Lifetime', label: 'Updates' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-dark-primary rounded-lg border border-gold-primary/20"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(212, 175, 55, 0.5)' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl font-bold text-gold-primary">{stat.value}</div>
                  <div className="text-text-gray">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="flex items-start gap-4 p-6 bg-dark-primary rounded-lg border border-gold-primary/10 hover:border-gold-primary/30 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(212, 175, 55, 0.1)' }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gold-primary/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-gold-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                  <p className="text-text-gray">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutBook;