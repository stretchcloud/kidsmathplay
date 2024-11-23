import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import ParticleBackground from './ParticleBackground';

const MissionVision = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative min-h-screen flex items-center py-24 overflow-hidden" id="mission">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - 3D Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 animate-float">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
                alt="Digital Learning Illustration"
                className="w-full max-w-md mx-auto rounded-2xl"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md">
              <div className="w-full h-full bg-gradient-to-r from-primary/30 to-blue-600/30 blur-3xl rounded-full"></div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-5xl font-bold mb-6"
            >
              Our Vision & <span className="text-primary">Mission</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
            >
              We envision a future where education and professional development are democratized, accessible, and rewarding for all. We aim to empower a global community of learners and professionals to acquire, improve, and share their skills in a collaborative and mutually beneficial environment, leveraging the power of AI and blockchain technology to create a decentralized skill marketplace that fosters innovation, progress, and economic growth.
            </motion.p>

            <Link to="/about-us">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Learn More
              </motion.button>
            </Link>

            {/* Background Decorative Elements */}
            <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-dark to-transparent"></div>
    </section>
  );
};

export default MissionVision;