import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import VideoHero from '@/components/hero/VideoHero';
import FeaturedSection from '@/components/sections/FeaturedSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import ServiceCard from '@/components/cards/ServiceCard';
import BookingModal from '@/components/ui/BookingModal';

const featuredServices = [
  {
    title: 'Bridal Elegance',
    category: 'Wedding',
    description: 'A complete bridal transformation experience with personalized styling, luxury makeup, and hair artistry.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    price: '$599',
  },
  {
    title: 'Signature Facial',
    category: 'Skincare',
    description: 'Advanced skincare treatment combining cutting-edge technology with pure botanical ingredients.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    price: '$189',
  },
  {
    title: 'Hair Transformation',
    category: 'Hair',
    description: 'Complete hair makeover with color, cut, and styling by our master stylists.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    price: '$299',
  },
];

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* Hero Section */}
      <VideoHero />

      {/* Services Preview */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          >
            <div>
              <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
                Our Expertise
              </span>
              <h2 className="mt-4 font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl text-white">
                Signature Experiences
              </h2>
            </div>
            <Link
              to={createPageUrl('Services')}
              className="group flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <FeaturedSection />

      {/* Video Showcase Section */}
      <section className="py-24 md:py-32 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
                The Experience
              </span>
              <h2 className="mt-4 font-['Playfair_Display'] text-3xl md:text-4xl text-white leading-tight">
                Crafted for Those Who
                <br />
                <span className="text-white/60">Appreciate Excellence</span>
              </h2>
              <p className="mt-6 text-white/50 leading-relaxed">
                Every visit to PrivéforYou is a journey through refined luxury. 
                From our curated environments to our bespoke treatments, 
                we create moments that transcend the ordinary.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsBookingOpen(true)}
                className="mt-8 px-8 py-4 bg-white text-[#0A0A0A] text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-all"
              >
                Book Your Experience
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video"
            >
              <div className="absolute inset-0 bg-[#0A0A0A] overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-80"
                  poster="https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=1200&q=80"
                >
                  <source 
                    src="https://videos.pexels.com/video-files/3018488/3018488-uhd_2560_1440_24fps.mp4" 
                    type="video/mp4" 
                  />
                </video>
                <div className="absolute inset-0 bg-[#0A0A0A]/30" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer border border-white/20"
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
              Begin Your Journey
            </span>
            <h2 className="mt-4 font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl text-white">
              Ready to Experience
              <br />
              <span className="text-white/60">True Luxury?</span>
            </h2>
            <p className="mt-6 text-white/50 max-w-xl mx-auto">
              Join the exclusive community of those who understand that beauty 
              is not just about appearance—it's about the experience.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsBookingOpen(true)}
                className="px-8 py-4 bg-white text-[#0A0A0A] text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-all min-w-[200px]"
              >
                Book Now
              </motion.button>
              <Link to={createPageUrl('Membership')}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border border-white/20 text-white text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-all min-w-[200px]"
                >
                  Join Membership
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}