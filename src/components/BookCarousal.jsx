import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BookCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample book images - replace with your actual book cover images
  const bookImages = [
    {
      id: 1,
      image: "/api/placeholder/280/360",
      title: "Digital Mastery"
    },
    {
      id: 2,
      image: "/api/placeholder/280/360",
      title: "Web Design Pro"
    },
    {
      id: 3,
      image: "/api/placeholder/280/360",
      title: "Marketing Genius"
    },
    {
      id: 4,
      image: "/api/placeholder/280/360",
      title: "Code Mastery"
    },
    {
      id: 5,
      image: "/api/placeholder/280/360",
      title: "Business Strategy"
    },
    {
      id: 6,
      image: "/api/placeholder/280/360",
      title: "Data Science"
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bookImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [bookImages.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % bookImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + bookImages.length) % bookImages.length);
  };

  // Calculate positions for zig-zag pattern
  const getBookPosition = (index) => {
    const position = (index - currentIndex + bookImages.length) % bookImages.length;
    //comment
    switch (position) {
      case 0: // Center
        return {
          scale: 1,
          x: 0,
          y: 0,
          zIndex: 30,
          opacity: 1,
          rotateY: 0
        };
      case 1: // Right side
        return {
          scale: 0.85,
          x: 300,
          y: -40,
          zIndex: 20,
          opacity: 0.8,
          rotateY: -15
        };
      case 2: // Far right
        return {
          scale: 0.75,
          x: 500,
          y: 20,
          zIndex: 10,
          opacity: 0.6,
          rotateY: -25
        };
      case bookImages.length - 1: // Left side
        return {
          scale: 0.85,
          x: -300,
          y: -40,
          zIndex: 20,
          opacity: 0.8,
          rotateY: 15
        };
      case bookImages.length - 2: // Far left
        return {
          scale: 0.75,
          x: -500,
          y: 20,
          zIndex: 10,
          opacity: 0.6,
          rotateY: 25
        };
      default: // Hidden
        return {
          scale: 0.6,
          x: position > currentIndex ? 700 : -700,
          y: 0,
          zIndex: 0,
          opacity: 0,
          rotateY: 0
        };
    }
  };

  return (
    <section id="books" className="py-20 bg-dark-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Minimal */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
            Book <span className="text-gold-primary">Collection</span>
          </h2>
          <div className="w-24 h-1 bg-gold-primary mx-auto mb-6"></div>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            Explore our bestselling ebook covers
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative h-96 flex items-center justify-center">
          {/* Navigation Buttons */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 z-40 w-12 h-12 bg-dark-secondary/90 backdrop-blur-md border border-gold-primary/40 rounded-full flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-dark-primary transition-all duration-300 shadow-2xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-4 z-40 w-12 h-12 bg-dark-secondary/90 backdrop-blur-md border border-gold-primary/40 rounded-full flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-dark-primary transition-all duration-300 shadow-2xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Books Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              {bookImages.map((book, index) => {
                const position = getBookPosition(index);
                
                return (
                  <motion.div
                    key={book.id}
                    className="absolute cursor-pointer group"
                    initial={false}
                    animate={position}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.6
                    }}
                    whileHover={{
                      scale: position.scale * 1.08,
                      y: position.y - 15,
                      transition: { duration: 0.3 }
                    }}
                    onClick={() => setCurrentIndex(index)}
                  >
                    {/* Book Image Container */}
                    <div className="relative">
                      {/* Book Cover Image */}
                      <motion.div 
                        className="relative w-64 h-80 rounded-xl shadow-2xl overflow-hidden border-4 border-white/5 group-hover:border-gold-primary/30 transition-all duration-500"
                        style={{
                          transformStyle: 'preserve-3d',
                          perspective: '1000px'
                        }}
                      >
                        {/* Book Spine Effect */}
                        <div className="absolute -left-2 top-4 w-3 h-72 bg-gradient-to-b from-black/40 to-black/20 rounded-l-lg backdrop-blur-sm z-10"></div>
                        
                        {/* Main Book Image */}
                        <div className="w-full h-full bg-gradient-to-br from-gold-primary/20 to-gold-accent/10 flex items-center justify-center relative">
                          {/* Placeholder for actual image - Replace this div with img tag */}
                          <div className="w-full h-full bg-dark-secondary flex items-center justify-center">
                            <div className="text-gold-primary text-2xl font-display font-bold text-center px-4">
                              {book.title}
                            </div>
                          </div>
                          
                          {/* Replace above div with this when you have actual images: */}
                          {/* <img 
                            src={book.image} 
                            alt={book.title}
                            className="w-full h-full object-cover"
                          /> */}
                          
                          {/* Golden Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/10 to-gold-accent/5 mix-blend-overlay"></div>
                          
                          {/* Shine Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        </div>

                        {/* 3D Book Edge */}
                        <div className="absolute right-0 top-0 w-2 h-full bg-gradient-to-r from-black/30 to-black/10 transform translate-x-full"></div>
                      </motion.div>

                      {/* Glow Effect for Center Book */}
                      {position.scale === 1 && (
                        <motion.div
                          className="absolute inset-0 rounded-xl bg-gold-primary/30 blur-2xl -z-10"
                          animate={{ 
                            opacity: [0.3, 0.6, 0.3],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      )}

                      {/* Shadow */}
                      <motion.div 
                        className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-4 bg-black/30 blur-md rounded-full"
                        animate={{ 
                          opacity: position.scale === 1 ? 0.4 : 0.2 * position.scale,
                          scale: position.scale
                        }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Minimal Dots Indicator */}
        <div className="flex justify-center gap-3 mt-20">
          {bookImages.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gold-primary scale-125' 
                  : 'bg-gold-primary/30 hover:bg-gold-primary/50'
              }`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookCarousel;