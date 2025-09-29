import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Eye, Brain, Heart, Sparkles } from 'lucide-react';

const Realization = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const realizations = [
    {
      icon: Eye,
      title: "The Illusion Faded",
      description: "The perfect image I had created of her was just that - an image. The real person was a stranger I had never truly known.",
      delay: 0.3
    },
    {
      icon: Brain,
      title: "The Truth Emerged",
      description: "My fear wasn't of rejection, but of facing my own inadequacies. The prison was built by my own hands.",
      delay: 0.6
    },
    {
      icon: Heart,
      title: "The Weight Lifted",
      description: "In accepting that she was never mine to lose, I found freedom. The burden of expectation dissolved.",
      delay: 0.9
    },
    {
      icon: Sparkles,
      title: "The Clarity Came",
      description: "True love shouldn't require you to sacrifice your peace. What I felt was obsession, not love.",
      delay: 1.2
    }
  ];

  const powerfulQuotes = [
    "The moment I stopped loving the idea of her, I started loving myself.",
    "Two years of silence taught me more about myself than any conversation ever could.",
    "The greatest loss wasn't her rejection, but the time I lost loving a ghost.",
    "In the silence of her absence, I finally heard my own voice."
  ];

  return (
    <section ref={ref} className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating abstract shapes */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(20px)',
            }}
          />
        ))}
      </div>

      {/* Central Sun/Moon of Realization */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
          rotate: 360,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-32 h-32 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full shadow-2xl shadow-yellow-400/50"
        style={{
          top: '20%',
          left: '10%',
        }}
      />

      <motion.div
        className="relative z-10 px-4 max-w-7xl mx-auto w-full py-20"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2
            animate={inView ? { 
              scale: [0.9, 1.1, 1],
              opacity: [0, 1, 1]
            } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
          >
            The Awakening
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-2xl md:text-3xl text-gray-300 italic max-w-4xl mx-auto leading-relaxed"
          >
            "After years in darkness, the truth arrived not as a whisper, but as a sunrise that burned away all illusions."
          </motion.p>
        </motion.div>

        {/* Realization Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {realizations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: item.delay, type: "spring" }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-500 group"
            >
              <motion.div
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-2xl group-hover:shadow-yellow-400/25 transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Powerful Quotes Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-white/10"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-8">
            Moments of Clarity
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {powerfulQuotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.8 + index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300"
              >
                <p className="text-lg text-gray-200 italic leading-relaxed">
                  "{quote}"
                </p>
                <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mt-4"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final Realization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 2.5, type: "spring" }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-yellow-400/10 via-orange-500/10 to-red-500/10 rounded-3xl border border-yellow-400/20"
        >
          <motion.p
            animate={inView ? { 
              opacity: [0.5, 1, 0.5],
              scale: [0.95, 1, 0.95]
            } : {}}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-2xl md:text-3xl font-bold text-white mb-4"
          >
            The Ultimate Truth
          </motion.p>
          <p className="text-xl md:text-2xl text-yellow-300 leading-relaxed max-w-4xl mx-auto">
            "I wasn't in love with her. I was in love with the person I became when I imagined she loved me back."
          </p>
        </motion.div>
      </motion.div>

      {/* Floating particles of enlightenment */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -200, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Realization;