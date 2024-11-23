import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import { ArrowRight, Brain, GraduationCap } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
                <Brain className="w-5 h-5" />
                <span className="text-sm font-semibold">AI-Powered Learning Platform</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 dark:to-blue-400 bg-clip-text text-transparent animate-gradient"
            >
              Boost your Competitive Skills and clear your Certifications
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Unleash your learning potential and elevate your skills effortlessly with our AI-driven exam engine
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg flex items-center justify-center gap-2 transform hover:scale-105 transition-all group">
                Start Learning
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-dark-lighter dark:bg-white/10 hover:bg-dark-card dark:hover:bg-white/20 text-white rounded-lg transform hover:scale-105 transition-all">
                View Courses
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex items-center gap-6"
            >
              <div className="flex -space-x-4">
                {[...Array(4)].map((_, i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/40?img=${i + 1}`}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-dark"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">1000+</span> professionals
                <br />already learning
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=1000"
                alt="AI Learning Platform"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-dark-card p-4 rounded-xl shadow-lg flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Success Rate</div>
                  <div className="text-2xl font-bold text-primary">98%</div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-primary/30 to-blue-600/30 blur-3xl -z-10 rounded-full"></div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white dark:from-dark to-transparent"></div>
    </div>
  );
}

export default Hero;