import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LovePhase = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const diaryEntries = [
    "Today I saw her smile... my world stopped.",
    "Her name echoes in my mind - Zara.",
    "What if my love becomes her burden?",
    "Every prayer now has her name in it."
  ];

  return (
    <section 
      ref={ref}
      className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"
    >
      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute text-xl text-red-400"
            style={{
              left: `${Math.random() * 100}%`,
            }}
          >
            ❤
          </motion.div>
        ))}
      </div>

      <motion.div
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-white mb-12"
        >
          The Hope Phase
        </motion.h2>

        <div className="space-y-6">
          {diaryEntries.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 1 + index * 0.5 
              }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-lg text-left max-w-2xl mx-auto text-white"
            >
              {entry}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default LovePhase;