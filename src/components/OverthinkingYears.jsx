import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const OverthinkingYears = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const thoughts = [
    "What if she says no?",
    "What will people say?",
    "Maybe I'm not good enough",
    "She deserves better",
    "I'll ruin our friendship",
    "The timing isn't right",
    "Maybe tomorrow...",
    "What if she hates me?",
    "I should wait for a sign",
    "It's not meant to be"
  ];

  return (
    <section ref={ref} className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{
          background: [
            'linear-gradient(45deg, #1a1a2e, #16213e, #0f3460)',
            'linear-gradient(135deg, #16213e, #0f3460, #1a1a2e)',
          ]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
        className="absolute inset-0"
      />

      {/* Floating Thoughts */}
      <div className="absolute inset-0 pointer-events-none">
        {thoughts.map((thought, index) => (
          <motion.div
            key={index}
            initial={{ 
              opacity: 0, 
              scale: 0,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50
            }}
            animate={inView ? { 
              opacity: [0, 0.7, 0],
              scale: [0, 1, 0],
              rotate: [0, Math.random() * 360 - 180]
            } : {}}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute font-bold pointer-events-none"
            style={{
              color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`,
              fontSize: `${Math.random() * 16 + 14}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {thought}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 2 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent"
        >
          The Years of Doubt
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          "Two years lost in a maze of what-ifs and maybes. 
          Every thought a chain, every fear a wall."
        </motion.p>
      </motion.div>
    </section>
  );
};

export default OverthinkingYears;