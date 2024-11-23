import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ParticleBackground from '../components/ParticleBackground';
import { Check, X, Zap, Users, Crown, Brain } from 'lucide-react';

const PricingPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const plans = [
    {
      name: 'Starter',
      icon: Brain,
      description: 'Perfect for individual learners',
      price: 29,
      features: [
        'Access to basic courses',
        'AI-powered study plans',
        'Practice tests',
        'Basic analytics',
        'Email support',
        'Mobile app access'
      ],
      notIncluded: [
        'Advanced AI features',
        'Mentorship sessions',
        'Custom learning paths',
        'Team collaboration',
        'API access'
      ]
    },
    {
      name: 'Professional',
      icon: Zap,
      description: 'Ideal for serious learners',
      price: 49,
      popular: true,
      features: [
        'Everything in Starter',
        'Advanced AI features',
        'Personalized feedback',
        'Priority support',
        'Advanced analytics',
        'Custom learning paths',
        'Certification prep',
        'Unlimited practice tests'
      ],
      notIncluded: [
        'Team collaboration',
        'API access'
      ]
    },
    {
      name: 'Enterprise',
      icon: Crown,
      description: 'For teams and organizations',
      price: 999,
      lifetime: true,
      features: [
        'Everything in Professional',
        'Team collaboration',
        'Custom integrations',
        'API access',
        'Dedicated support',
        'Custom reporting',
        'SSO integration',
        'Volume licensing',
        'Custom contracts',
        'Lifetime updates',
        'Priority feature access',
        'Custom AI model training'
      ]
    }
  ];

  return (
    <div className="relative min-h-screen pt-20">
      <ParticleBackground />

      {/* Header Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Simple,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Transparent
              </span>{' '}
              Pricing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-400 mb-12"
            >
              Choose the perfect plan for your learning journey. From individual learners to enterprise teams.
            </motion.p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white dark:bg-dark-card rounded-2xl shadow-xl overflow-hidden ${
                  plan.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                {plan.lifetime && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                    Lifetime Access
                  </div>
                )}

                <div className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <plan.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {plan.lifetime ? ' one-time' : '/month'}
                    </span>
                  </div>
                  <button className={`w-full py-3 px-6 rounded-lg font-medium mb-8 transition-all duration-300 ${
                    plan.popular || plan.lifetime
                      ? 'bg-primary hover:bg-primary-dark text-white'
                      : 'bg-gray-100 dark:bg-dark-lighter hover:bg-gray-200 dark:hover:bg-dark-card'
                  }`}>
                    Get Started
                  </button>

                  <div className="space-y-4">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded?.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 opacity-50">
                        <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "What's included in the Lifetime Access?",
                  a: "Lifetime Access includes all current and future features, priority support, and unlimited updates for life. Once you purchase, you'll never have to pay again."
                },
                {
                  q: "Can I switch plans later?",
                  a: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade to Lifetime Access, your monthly subscription will be cancelled automatically."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers."
                },
                {
                  q: "Is there a free trial?",
                  a: "Yes, all plans come with a 14-day free trial. No credit card required."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-white dark:bg-dark-card rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default PricingPage;