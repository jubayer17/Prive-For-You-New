import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import TeamCard from '@/components/cards/TeamCard';

const team = [
  {
    name: 'Isabella Martinez',
    role: 'Creative Director',
    specialty: 'Visionary leader with 20+ years in luxury beauty, defining the PrivéforYou aesthetic.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
  },
  {
    name: 'Alexander Chen',
    role: 'Master Stylist',
    specialty: 'Celebrity hairstylist known for transformative cuts and color artistry.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  },
  {
    name: 'Sophia Williams',
    role: 'Lead Makeup Artist',
    specialty: 'Bridal and editorial makeup specialist with global fashion week experience.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80',
  },
  {
    name: 'Emma Richardson',
    role: 'Skincare Specialist',
    specialty: 'Licensed aesthetician specializing in advanced anti-aging treatments.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
  },
  {
    name: 'Michael Park',
    role: 'Spa Director',
    specialty: 'Wellness expert bringing Eastern and Western healing traditions together.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80',
  },
  {
    name: 'Victoria James',
    role: 'Color Specialist',
    specialty: 'Master colorist renowned for natural-looking highlights and balayage.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80',
  },
  {
    name: 'Daniel Kim',
    role: 'Senior Stylist',
    specialty: 'Precision cutting expert with a passion for modern, editorial looks.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80',
  },
  {
    name: 'Olivia Taylor',
    role: 'Nail Artist',
    specialty: 'Nail art innovator creating bespoke designs for fashion shows and celebrities.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80',
  },
];

export default function TeamPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-24 lg:pt-32">
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
              The Artists
            </span>
            <h1 className="mt-4 font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-white">
              Meet Our
              <br />
              <span className="text-white/60">Expert Team</span>
            </h1>
            <p className="mt-6 text-white/50 leading-relaxed">
              Our world-class team of artists, stylists, and wellness experts 
              bring decades of combined experience and an unwavering commitment 
              to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {team.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-24 md:py-32 bg-[#0E0E0E]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
              Careers
            </span>
            <h2 className="mt-4 font-['Playfair_Display'] text-3xl md:text-4xl text-white">
              Join Our Team
            </h2>
            <p className="mt-4 text-white/50 max-w-lg mx-auto">
              We're always looking for talented individuals who share our passion 
              for excellence and artistry.
            </p>
            <Link to={createPageUrl('Careers')}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 px-8 py-4 bg-white text-[#0A0A0A] text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-all"
              >
                View Open Positions
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}