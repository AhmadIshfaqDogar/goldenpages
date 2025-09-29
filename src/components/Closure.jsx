import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Closure = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700">
      {/* Floating Geometric Shapes */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -50, 0],
            rotate: 360,
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.5
          }}
          className={`absolute w-12 h-12 border-2 border-white/30 ${
            i % 2 === 0 ? 'rounded-full' : 'rounded-lg'
          }`}
          style={{
            left: `${10 + i * 8}%`,
            top: `${20 + (i * 7) % 60}%`,
          }}
        />
      ))}

      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 2 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-6xl font-light text-white mb-12"
        >
          Peace Found
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1, type: "spring" }}
          className="bg-white/5 backdrop-blur-xl p-8 md:p-16 rounded-3xl border border-white/10 max-w-3xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-xl md:text-2xl text-white mb-8 leading-relaxed"
          >
            "The heart that once carried the weight of unsaid words now learned to fly. 
            In letting go, he found himself. In silence, he found peace."
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 2 }}
            className="text-lg text-gray-300 italic"
          >
            Sometimes the greatest love story is the one where you learn to love yourself.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Closure;