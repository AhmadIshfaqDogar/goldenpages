import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, BookOpen } from 'lucide-react';

const PDFSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <motion.div
        className="relative z-10 text-center px-4 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
          className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
          >
            <BookOpen size={64} className="text-white mx-auto mb-8" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Read the Complete Story
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.4 }}
            className="text-lg text-gray-300 mb-8 leading-relaxed"
          >
            Download the full PDF version of "The Words I Never Said" to experience 
            the complete emotional journey with all its chapters and lessons.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none px-8 py-4 text-lg rounded-full cursor-pointer flex items-center gap-3 mx-auto font-bold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
            onClick={() => {
              // Add your PDF download logic here
              alert('PDF download functionality would be implemented here');
            }}
          >
            <Download size={20} />
            Download PDF
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PDFSection;