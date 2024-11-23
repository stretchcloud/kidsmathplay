import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  {
    name: 'Microsoft',
    description: 'Azure AI Infrastructure',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png',
  },
  {
    name: 'OpenAI',
    description: 'Advanced AI Models',
    logoLight: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1024px-OpenAI_Logo.svg.png',
    logoDark: 'https://seeklogo.com/images/O/open-ai-logo-8B9BFEDC26-seeklogo.com.png',
  },
  {
    name: 'Hugging Face',
    description: 'Model Hub Integration',
    logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
  },
  {
    name: 'NVIDIA',
    description: 'GPU Acceleration',
    logoLight: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/2560px-Nvidia_logo.svg.png',
    logoDark: 'https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/01-nvidia-logo-vert-500x200-2c50-d@2x.png',
  },
];

const TechnologyScroll = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-transparent to-gray-50 dark:to-dark-lighter overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-center text-2xl font-semibold text-gray-600 dark:text-gray-400">
          Powered by Industry Leaders
        </h2>
      </div>
      
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white dark:from-dark to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white dark:from-dark to-transparent z-10"></div>
        
        {/* Single Scrolling Row */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{
              x: [0, -100 * technologies.length],
            }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="flex gap-16 py-8 whitespace-nowrap"
          >
            {[...technologies, ...technologies, ...technologies].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex items-center gap-4 bg-white dark:bg-dark-card px-8 py-4 rounded-xl shadow-md min-w-[280px] group hover:scale-105 transition-transform"
              >
                <div className="w-16 h-16 flex items-center justify-center p-2">
                  {'logo' in tech ? (
                    <img
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform"
                    />
                  ) : (
                    <>
                      <img
                        src={tech.logoLight}
                        alt={`${tech.name} logo`}
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform dark:hidden"
                      />
                      <img
                        src={tech.logoDark}
                        alt={`${tech.name} logo`}
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform hidden dark:block"
                      />
                    </>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{tech.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyScroll;