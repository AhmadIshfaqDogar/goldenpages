import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Users, TrendingUp, Shield, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Learning',
      description: 'Accelerate your learning curve with our streamlined approach to complex topics.',
      benefits: ['Quick start guides', 'Bite-sized lessons', 'Rapid skill acquisition']
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join thousands of learners in our exclusive community for support and networking.',
      benefits: ['Private forums', 'Expert Q&A', 'Networking events']
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Follow strategies that have helped thousands achieve their digital goals.',
      benefits: ['Case studies', 'Success metrics', 'Real-world applications']
    },
    {
      icon: Shield,
      title: 'Lifetime Access',
      description: 'Get lifetime updates and access to all future content and improvements.',
      benefits: ['Free updates', 'New content', 'Continuous learning']
    },
    {
      icon: Clock,
      title: 'Self-Paced Learning',
      description: 'Learn at your own pace with flexible scheduling and on-demand resources.',
      benefits: ['24/7 access', 'Mobile friendly', 'Progress tracking']
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
    <section id="features" className="py-20 bg-dark-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Powerful <span className="text-gold-primary">Features</span>
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Packed with everything you need to succeed in the digital world. Our ebook offers comprehensive features designed for maximum impact.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group bg-dark-secondary rounded-2xl p-8 border border-gold-primary/10 hover:border-gold-primary/30 transition-all duration-500"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 40px rgba(212, 175, 55, 0.15)'
              }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gold-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-gold-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 group-hover:text-gold-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-text-gray mb-6">
                {feature.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <motion.li
                    key={benefit}
                    className="flex items-center gap-3 text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + benefitIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-4 h-4 text-gold-primary flex-shrink-0" />
                    <span className="text-text-gray">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="mt-20 bg-dark-secondary rounded-2xl p-8 border border-gold-primary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '95%', label: 'Success Rate' },
              { number: '24/7', label: 'Support' },
              { number: '30-Day', label: 'Money Back' },
              { number: '10K+', label: 'Students' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-gold-primary mb-2">{stat.number}</div>
                <div className="text-text-gray font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;