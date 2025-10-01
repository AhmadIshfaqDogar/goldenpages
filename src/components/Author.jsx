import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Linkedin, Twitter } from 'lucide-react';

const Author = () => {
  const stats = [
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: Users, number: '50K+', label: 'Students Taught' },
    { icon: BookOpen, number: '12', label: 'Published Books' }
  ];

  return (
    <section id="author" className="py-20 bg-dark-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            About The <span className="text-gold-primary">Author</span>
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Meet the expert behind this transformative guide to digital success
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Author Image & Stats */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative inline-block mb-8">
              <motion.div
                className="w-80 h-80 mx-auto bg-gradient-to-br from-gold-primary to-gold-accent rounded-full p-1"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-full h-full bg-dark-primary rounded-full overflow-hidden border-4 border-dark-secondary">
                  <div className="w-full h-full bg-gradient-to-br from-gold-primary/20 to-gold-accent/10 flex items-center justify-center">
                    <div className="text-gold-primary text-6xl font-bold">JA</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gold-primary text-dark-primary px-4 py-2 rounded-full font-semibold text-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Bestselling Author
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-dark-primary rounded-lg border border-gold-primary/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <stat.icon className="w-8 h-8 text-gold-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gold-primary">{stat.number}</div>
                  <div className="text-text-gray text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Author Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-display font-bold mb-6">
              John Author
            </h3>
            <p className="text-text-gray text-lg mb-6">
              With over 15 years of experience in digital transformation and online business development, 
              John has helped thousands of professionals and entrepreneurs achieve remarkable success in 
              the digital landscape.
            </p>
            <p className="text-text-gray text-lg mb-6">
              His expertise spans across digital marketing, e-commerce strategy, and online business 
              development. John's previous works have been featured in major publications and have 
              helped over 50,000 students transform their careers.
            </p>
            <p className="text-text-gray text-lg mb-8">
              In this comprehensive guide, John shares his proven strategies and insider knowledge to 
              help you master the art of digital success.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              <motion.a
                href="#"
                className="w-12 h-12 bg-dark-primary border border-gold-primary/20 rounded-lg flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-dark-primary transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-12 h-12 bg-dark-primary border border-gold-primary/20 rounded-lg flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-dark-primary transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>

            {/* Signature */}
            <motion.div
              className="text-gold-primary font-display text-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              John Author
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Author;