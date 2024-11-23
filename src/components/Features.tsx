import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Target,
  LineChart,
  FlaskConical,
  Users,
  TrendingUp,
  CheckCircle2,
  UserPlus,
  Laptop,
  GraduationCap,
  Award,
  BookOpen
} from 'lucide-react';

const TabButton = ({ isActive, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
      isActive 
        ? 'bg-primary text-white shadow-lg shadow-primary/25'
        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-card'
    }`}
  >
    {children}
  </button>
);

const features = [
  {
    Icon: Target,
    title: 'Certification Roadmaps',
    description: 'Clear, structured paths to certification success. Our AI analyzes your experience and goals to create a personalized learning journey.',
    diagram: (
      <div className="relative h-48 p-4">
        <div className="absolute inset-0 flex items-center justify-between px-8">
          <div className="absolute h-[2px] bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 w-full top-1/2 -translate-y-1/2" />
          {['Beginner', 'Intermediate', 'Expert'].map((level, index) => (
            <motion.div
              key={level}
              className="relative z-10 flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                animate={{
                  y: [0, -5, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }
                }}
              >
                {index === 0 && <BookOpen className="w-5 h-5 text-primary" />}
                {index === 1 && <Laptop className="w-5 h-5 text-primary" />}
                {index === 2 && <Award className="w-5 h-5 text-primary" />}
              </motion.div>
              <motion.div
                className="w-32 h-16 bg-primary/5 rounded-lg flex flex-col items-center justify-center p-2"
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(0, 163, 255, 0)",
                    "0 0 0 10px rgba(0, 163, 255, 0.1)",
                    "0 0 0 0 rgba(0, 163, 255, 0)"
                  ],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }
                }}
              >
                <span className="text-sm font-medium text-primary">{level}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Certification</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  },
  {
    Icon: LineChart,
    title: 'Study Progress Tracking',
    description: 'Monitor your learning journey with detailed analytics. Track completion rates, test scores, and identify areas for improvement.',
    diagram: (
      <div className="relative h-48 p-4">
        <div className="absolute inset-0 grid grid-cols-5 gap-4 px-8 items-end">
          {[65, 75, 85, 90, 95].map((height, index) => (
            <motion.div
              key={index}
              className="relative h-full flex flex-col justify-end"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div
                className="w-full bg-gradient-to-t from-primary/10 to-primary/30 rounded-t-lg"
                style={{ height: `${height}%` }}
                whileHover={{ scale: 1.1 }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }
                }}
              >
                <motion.div
                  className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm font-medium text-primary"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {height}%
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary/20"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    )
  },
  {
    Icon: FlaskConical,
    title: 'Practice Exam Simulations',
    description: 'Experience real exam conditions with our advanced simulation engine. Get detailed feedback and performance analytics.',
    diagram: (
      <div className="relative h-48 p-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-full max-w-sm bg-primary/5 rounded-lg p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              {[85, 92, 78].map((score, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="flex justify-between text-sm mb-1">
                    <span>Practice Test {index + 1}</span>
                    <motion.span
                      className="text-primary font-medium"
                      animate={{
                        scale: [1, 1.1, 1],
                        transition: {
                          duration: 1.5,
                          repeat: Infinity,
                          delay: index * 0.3
                        }
                      }}
                    >
                      {score}%
                    </motion.span>
                  </div>
                  <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-blue-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${score}%` }}
                      transition={{ delay: index * 0.2, duration: 1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    Icon: Users,
    title: 'Expert Mentorship',
    description: 'Connect with industry professionals for personalized guidance. Get expert insights and practical advice for your certification journey.',
    diagram: (
      <div className="relative h-48 p-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center z-20"
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 0 0 rgba(0, 163, 255, 0)",
                  "0 0 0 20px rgba(0, 163, 255, 0.1)",
                  "0 0 0 0 rgba(0, 163, 255, 0)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            >
              <GraduationCap className="w-8 h-8 text-primary" />
            </motion.div>
            
            {[0, 72, 144, 216, 288].map((degree, index) => (
              <motion.div
                key={degree}
                className="absolute w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center"
                style={{
                  transform: `rotate(${degree}deg) translate(60px) rotate(-${degree}deg)`
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2 }}
              >
                <UserPlus className="w-5 h-5 text-primary" />
              </motion.div>
            ))}
            
            <motion.div
              className="absolute inset-0 border-2 border-primary/10 rounded-full w-32 h-32 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        </div>
      </div>
    )
  },
  {
    Icon: TrendingUp,
    title: 'Career Advancement Paths',
    description: 'Visualize your career progression with our advanced career pathing tools. Map your journey from certification to career success.',
    diagram: (
      <div className="relative h-48 p-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-sm">
            <motion.div
              className="absolute left-0 right-0 h-2 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 top-1/2 -translate-y-1/2"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="relative flex justify-between">
              {['Junior', 'Mid-Level', 'Senior', 'Lead'].map((level, index) => (
                <motion.div
                  key={level}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <motion.div
                    className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mb-2 z-10"
                    whileHover={{ scale: 1.2 }}
                    animate={{
                      y: [0, -5, 0],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }
                    }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </motion.div>
                  <motion.span
                    className="text-sm font-medium text-primary"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }
                    }}
                  >
                    {level}
                  </motion.span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {`Level ${index + 1}`}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
];

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const ActiveIcon = features[activeTab].Icon;

  return (
    <section className="py-24 relative" id="features">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50 dark:via-dark-lighter to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="max-w-7xl mx-auto"
        >
          {/* Main Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block text-primary font-semibold mb-4"
            >
              Your Path to Success
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Accelerate Your IT Career with Expert Certification Prep
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
              Comprehensive preparation tools and resources designed for your certification success
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {features.map((feature, index) => (
                <TabButton
                  key={index}
                  isActive={activeTab === index}
                  onClick={() => setActiveTab(index)}
                >
                  {feature.title}
                </TabButton>
              ))}
            </div>
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 p-8 bg-white/50 dark:bg-dark-card/50 backdrop-blur-sm"
            >
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1 relative">
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 blur-2xl" />
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <ActiveIcon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {features[activeTab].title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {features[activeTab].description}
                  </p>
                </div>
                <motion.div 
                  className="flex-1"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-white dark:bg-dark-card rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-colors duration-300">
                    {features[activeTab].diagram}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-24 text-center"
          >
            <button className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Start Your Certification Journey
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;