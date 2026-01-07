import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Scissors, Flower2, Crown, Wind } from 'lucide-react';

const services = [
  {
    icon: Crown,
    name: 'Bridal Elegance',
    description: 'Complete bridal transformation',
    page: 'Services',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Sparkles,
    name: 'Makeup Artistry',
    description: 'Professional makeup services',
    page: 'Services',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Scissors,
    name: 'Hair Styling',
    description: 'Expert hair transformation',
    page: 'Services',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Flower2,
    name: 'Spa & Wellness',
    description: 'Luxury spa experiences',
    page: 'Services',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Heart,
    name: 'Skincare',
    description: 'Advanced facial treatments',
    page: 'Services',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Wind,
    name: 'Nail Services',
    description: 'Manicure & pedicure',
    page: 'Services',
    color: 'from-indigo-500 to-purple-500'
  }
];

export default function MegaMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed top-20 lg:top-24 left-0 right-0 bg-[#0E0E0E] border-t border-white/10 shadow-2xl z-40"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={createPageUrl(service.page)}
                onClick={onClose}
                className="group block p-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-['Playfair_Display'] text-lg text-white group-hover:text-white/90 transition-colors">
                      {service.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/50 group-hover:text-white/70 transition-colors">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
          <div>
            <p className="text-white/40 text-sm">Can't find what you're looking for?</p>
            <p className="mt-1 text-white/60 text-xs">Our team is here to help you</p>
          </div>
          <Link to={createPageUrl('Support')}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-white text-[#0A0A0A] text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-all"
              onClick={onClose}
            >
              Contact Us
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}