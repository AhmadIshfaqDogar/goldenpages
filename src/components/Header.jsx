import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, BookOpen } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock effect
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMobileMenuOpen]);

  // Improved smooth scroll function
  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80;
        const elementTop = element.offsetTop - headerHeight;
        
        try {
          window.scrollTo({
            top: elementTop,
            behavior: 'smooth'
          });
        } catch (error) {
          window.scrollTo(0, elementTop);
        }
      }
    }, 150);
  };

  const navItems = [
    { name: 'Home', section: 'home' },
    { name: 'About', section: 'about' },
    { name: 'Features', section: 'features' },
    { name: 'Author', section: 'author' },
    { name: 'Books', section: 'books' },
    { name: 'Testimonials', section: 'testimonials' },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-dark-primary/95 backdrop-blur-md border-b border-gold-primary/30 shadow-lg' 
          : 'py-4 bg-dark-primary/95 backdrop-blur-md border-b border-gold-primary/20'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.button
            className="flex items-center gap-2 text-gold-primary font-display text-2xl font-bold cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400 }}
            onClick={() => scrollToSection('home')}
          >
            <BookOpen className="w-6 h-6" />
            <span>GoldenPages</span>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.section)}
                className="text-text-light hover:text-gold-primary transition-colors duration-300 font-medium relative group"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-primary transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            className="hidden md:block bg-gold-primary text-dark-primary px-6 py-2 rounded-lg font-semibold hover:bg-gold-accent transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('books')}
          >
            Get Ebook
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-text-light p-2 z-60 bg-gold-primary/10 hover:bg-gold-primary/20 rounded-lg transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu with Blur Background */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Blur Backdrop */}
            <motion.div
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu Content */}
            <motion.div
              className="md:hidden fixed top-0 right-0 h-full w-80 max-w-full bg-dark-primary/95 backdrop-blur-md border-l border-gold-primary/20 z-50"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {/* Close button at top */}
              <div className="flex justify-between items-center p-6 border-b border-gold-primary/20">
                <div className="flex items-center gap-2 text-gold-primary font-display text-xl font-bold">
                  <BookOpen className="w-5 h-5" />
                  <span>GoldenPages</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-text-light p-2 hover:text-gold-primary transition-colors bg-gold-primary/10 hover:bg-gold-primary/20 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Menu Content */}
              <div className="flex flex-col p-6 space-y-3  bg-dark-primary/100 backdrop-blur-md ">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.section)}
                    className="w-full text-left text-lg font-medium text-text-light hover:text-gold-primary hover:bg-gold-primary/10 py-4 px-4 rounded-lg transition-all duration-300 border border-gold-primary/10 hover:border-gold-primary/30"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                
                {/* CTA Button */}
                <motion.button
                  className="w-full bg-gold-primary text-dark-primary py-4 rounded-lg font-semibold text-lg mt-4 hover:bg-gold-accent transition-all duration-300 shadow-lg"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('books')}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Get Ebook
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;