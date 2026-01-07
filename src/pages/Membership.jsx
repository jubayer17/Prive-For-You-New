import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Crown, Star, Gem } from 'lucide-react';
import BookingModal from '@/components/ui/BookingModal';

const memberships = [
  {
    tier: 'Silver',
    icon: Star,
    price: '$99',
    period: 'month',
    description: 'Perfect for regular beauty maintenance with exclusive member benefits.',
    features: [
      '10% off all services',
      'Priority booking',
      'Birthday special treatment',
      'Member-only events',
      'Complimentary beverages',
    ],
    color: 'from-gray-400 to-gray-600',
  },
  {
    tier: 'Gold',
    icon: Crown,
    price: '$199',
    period: 'month',
    description: 'Elevated benefits for the discerning beauty enthusiast.',
    features: [
      '20% off all services',
      'Same-day booking priority',
      'Monthly complimentary treatment',
      'Exclusive product previews',
      'Personal beauty consultant',
      'VIP event access',
      'Complimentary parking',
    ],
    featured: true,
    color: 'from-amber-400 to-amber-600',
  },
  {
    tier: 'Platinum',
    icon: Gem,
    price: '$399',
    period: 'month',
    description: 'The ultimate membership for those who demand only the finest.',
    features: [
      '30% off all services',
      'Instant booking anytime',
      'Weekly complimentary treatment',
      'Private suite access',
      'Dedicated personal stylist',
      'House call services',
      'Luxury gift quarterly',
      'Global partner access',
      '24/7 concierge support',
    ],
    color: 'from-slate-300 to-slate-500',
  },
];

const perks = [
  {
    title: 'Exclusive Access',
    description: 'Be the first to experience new treatments and products',
  },
  {
    title: 'Rewards Program',
    description: 'Earn points on every visit redeemable for services',
  },
  {
    title: 'Referral Benefits',
    description: 'Share the luxury and earn complimentary services',
  },
  {
    title: 'Flexible Plans',
    description: 'Pause or upgrade your membership anytime',
  },
];

export default function MembershipPage() {
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
              Exclusive Membership
            </span>
            <h1 className="mt-4 font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-white">
              Join the Inner Circle
            </h1>
            <p className="mt-6 text-white/50 max-w-xl mx-auto leading-relaxed">
              Experience beauty without limits. Our membership programs offer 
              unparalleled access and exclusive benefits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {memberships.map((membership, index) => (
              <motion.div
                key={membership.tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`group relative ${membership.featured ? 'lg:-mt-4' : ''}`}
              >
                <div className={`relative h-full bg-[#0E0E0E] border overflow-hidden transition-all duration-500 ${
                  membership.featured 
                    ? 'border-white/30' 
                    : 'border-white/10 hover:border-white/20'
                }`}>
                  {/* Featured Badge */}
                  {membership.featured && (
                    <div className="absolute top-0 left-0 right-0 bg-white py-2">
                      <div className="flex items-center justify-center gap-2">
                        <Crown className="w-3 h-3 text-[#0A0A0A]" />
                        <span className="text-[10px] tracking-[0.3em] uppercase text-[#0A0A0A] font-medium">
                          Most Popular
                        </span>
                      </div>
                    </div>
                  )}

                  <div className={`p-8 md:p-10 ${membership.featured ? 'pt-14' : ''}`}>
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${membership.color} flex items-center justify-center mb-6`}>
                      <membership.icon className="w-6 h-6 text-[#0A0A0A]" />
                    </div>

                    {/* Tier Name */}
                    <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
                      {membership.tier} Membership
                    </span>
                    
                    {/* Price */}
                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="font-['Playfair_Display'] text-4xl md:text-5xl text-white">
                        {membership.price}
                      </span>
                      <span className="text-sm text-white/40">/ {membership.period}</span>
                    </div>

                    <p className="mt-4 text-sm text-white/50 leading-relaxed">
                      {membership.description}
                    </p>

                    {/* Features */}
                    <ul className="mt-8 space-y-4">
                      {membership.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-0.5 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-white/80" />
                          </div>
                          <span className="text-sm text-white/60">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsBookingOpen(true)}
                      className={`mt-10 w-full py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                        membership.featured
                          ? 'bg-white text-[#0A0A0A] hover:bg-white/90'
                          : 'bg-transparent border border-white/20 text-white hover:bg-white hover:text-[#0A0A0A]'
                      }`}
                    >
                      Join Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Perks */}
      <section className="py-24 md:py-32 bg-[#0E0E0E]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
              Member Benefits
            </span>
            <h2 className="mt-4 font-['Playfair_Display'] text-3xl md:text-4xl text-white">
              More Than Just Savings
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, index) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <h3 className="font-['Playfair_Display'] text-lg text-white mb-3">
                  {perk.title}
                </h3>
                <p className="text-sm text-white/50">
                  {perk.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}