import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, BookOpen, PenTool, Globe } from 'lucide-react';

const AuthorPage = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const authorInfo = {
    name: "Ahmad Ishfaq",
    bio: "A passionate writer from Pakistan who believes in the power of words to heal and connect souls. Through 'The Words I Never Said,' I share a piece of my heart - a story that lived within me for years before finding its way to paper.",
    inspiration: "This story was born from personal experience and the silent battles many of us fight with unspoken emotions. It's a tribute to every heart that has loved silently and every soul that has found strength in letting go.",
    philosophy: "I believe that the most powerful stories are those that speak the truth of our hearts, even when that truth is painful. Writing, for me, is not just about telling stories - it's about healing, understanding, and connecting.",
    social: {
      email: "ahmadishfaqdogar@gmail.com",
      
    }
  };

  const stats = [
    { icon: BookOpen, label: "Stories Written", value: "12+" },
    { icon: Heart, label: "Hearts Touched", value: "50K+" },
    { icon: PenTool, label: "Years Writing", value: "5+" },
    { icon: Globe, label: "Readers Worldwide", value: "100+" }
  ];

  return (
    <section ref={ref} className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255,255,255,0.2) 2%, transparent 0%)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Floating Writing Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            className="absolute text-2xl text-white/30"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i * 10) % 70}%`,
            }}
          >
            ✍️
          </motion.div>
        ))}
      </div>

      <motion.div
        className="relative z-10 px-4 max-w-6xl mx-auto w-full"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Author Image & Basic Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center md:text-left"
          >
            {/* Author Avatar */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-48 h-48 mx-auto md:mx-0 mb-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1"
            >
              <div className="w-full h-full  rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-4xl">📖</span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              {authorInfo.name}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-xl text-gray-300 mb-6"
            >
              Storyteller • Dreamer • Healer
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.9 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Author Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-6 pt-5"
          >
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Heart className="w-6 h-6 text-red-400 mr-3" />
                About the Author
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {authorInfo.bio}
              </p>
            </motion.div>

            {/* Inspiration */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <PenTool className="w-6 h-6 text-green-400 mr-3" />
                Inspiration Behind the Story
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {authorInfo.inspiration}
              </p>
            </motion.div>

            {/* Writing Philosophy */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <BookOpen className="w-6 h-6 text-yellow-400 mr-3" />
                Writing Philosophy
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {authorInfo.philosophy}
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.3 }}
              className="pt-4 border-t border-white/10"
            >
              <h3 className="text-xl font-semibold text-white mb-3">Connect with Me</h3>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center text-gray-300">
                  <span className="font-medium mr-2 ">Email:</span>
                  <div className='text-green-500'>
                    {authorInfo.social.email}

                  </div>
                  
                </div>
               
              </div>
            </motion.div>

           
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AuthorPage;