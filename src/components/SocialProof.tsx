import React from 'react';
import Marquee from 'react-fast-marquee';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Computer Science Professor, Stanford",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    quote: "HydraNode has transformed how we teach advanced computing concepts."
  },
  {
    name: "James Wilson",
    role: "Lead Instructor, Udacity",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    quote: "The AI-driven personalization is simply revolutionary."
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Director of E-Learning, MIT",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
    quote: "A game-changer for interactive online education."
  },
  {
    name: "Michael Chang",
    role: "Senior Developer, Google",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    quote: "The certification tracking system is incredibly effective."
  },
  {
    name: "Dr. Lisa Thompson",
    role: "AI Research Lead, OpenAI",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    quote: "Perfect blend of AI and educational methodology."
  },
  {
    name: "Robert Martinez",
    role: "CTO, EdTech Solutions",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    quote: "HydraNode sets new standards in educational technology."
  }
];

const TestimonialCard = ({ testimonial }) => (
  <div className="mx-4 w-[400px] bg-white dark:bg-dark-card rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-800">
    <div className="flex items-center gap-4">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {testimonial.name}
          </h3>
          <div className="flex items-center text-yellow-400">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
          </div>
        </div>
        <p className="text-sm text-primary">{testimonial.role}</p>
      </div>
    </div>
    <p className="mt-4 text-gray-600 dark:text-gray-400">
      "{testimonial.quote}"
    </p>
  </div>
);

const SocialProof = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 mb-12 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
              Professionals
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Join thousands of professionals and learners who trust HydraNode
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white dark:from-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white dark:from-dark to-transparent z-10" />
        
        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={true}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </Marquee>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default SocialProof;