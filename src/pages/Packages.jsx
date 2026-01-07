import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PackageCard from '@/components/cards/PackageCard';
import BookingModal from '@/components/ui/BookingModal';

const packages = [
  {
    tier: 'Essential',
    name: 'Pure Refresh',
    price: '$199',
    duration: 'session',
    description: 'Perfect introduction to our luxury treatments with essential services.',
    features: [
      'Signature facial treatment',
      'Classic manicure & pedicure',
      'Scalp massage',
      'Refreshments included',
      '2-hour experience',
    ],
  },
  {
    tier: 'Signature',
    name: 'Radiant Glow',
    price: '$399',
    duration: 'session',
    description: 'Our most popular package combining beauty and relaxation for complete rejuvenation.',
    features: [
      'Advanced facial with LED therapy',
      'Full body massage (60 min)',
      'Luxury manicure & pedicure',
      'Hair treatment & blowout',
      'Complimentary champagne',
      '4-hour experience',
    ],
  },
  {
    tier: 'Ultimate',
    name: 'Total Transformation',
    price: '$799',
    duration: 'session',
    description: 'The ultimate luxury experience for complete head-to-toe transformation.',
    features: [
      'Everything in Radiant Glow',
      'Hair color & styling',
      'Professional makeup application',
      'Body scrub & wrap',
      'Personal concierge service',
      'Take-home luxury gift set',
      'Full day experience',
    ],
  },
];

const addons = [
  { name: 'Lash Extensions', price: '$149' },
  { name: 'Keratin Treatment', price: '$199' },
  { name: 'Hot Stone Add-on', price: '$59' },
  { name: 'Aromatherapy Upgrade', price: '$39' },
];

export default function PackagesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-24 lg:pt-32">
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
              Curated Packages
            </span>
            <h1 className="mt-4 font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-white">
              Luxury Experiences
              <br />
              <span className="text-white/60">Bundled for You</span>
            </h1>
            <p className="mt-6 text-white/50 max-w-xl mx-auto leading-relaxed">
              Our carefully curated packages combine our finest treatments 
              for an elevated experience at exceptional value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {packages.map((pkg, index) => (
              <PackageCard 
                key={pkg.name} 
                pkg={pkg} 
                index={index}
                featured={index === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-24 md:py-32 bg-[#0E0E0E]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
              Enhance Your Experience
            </span>
            <h2 className="mt-4 font-['Playfair_Display'] text-3xl md:text-4xl text-white">
              Premium Add-ons
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {addons.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-center justify-between p-6 bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <span className="text-white group-hover:text-white/80 transition-colors">
                  {addon.name}
                </span>
                <span className="text-white/60 font-['Playfair_Display'] text-lg">
                  {addon.price}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-white">
              Need a Custom Package?
            </h2>
            <p className="mt-4 text-white/50 max-w-lg mx-auto">
              Our team can create a bespoke package tailored to your specific needs and preferences.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsBookingOpen(true)}
              className="mt-8 px-8 py-4 bg-white text-[#0A0A0A] text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-all"
            >
              Contact Concierge
            </motion.button>
          </motion.div>
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}