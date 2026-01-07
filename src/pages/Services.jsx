import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '@/components/cards/ServiceCard';
import BookingModal from '@/components/ui/BookingModal';

const categories = ['All', 'Hair', 'Skincare', 'Makeup', 'Spa', 'Wedding'];

const services = [
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
  {
    title: 'Luxury Spa Ritual',
    category: 'Spa',
    description: 'A full-body rejuvenation experience with aromatherapy, massage, and holistic treatments.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
    price: '$349',
  },
  {
    title: 'Red Carpet Glamour',
    category: 'Makeup',
    description: 'Professional makeup artistry for special events, photoshoots, and red carpet moments.',
    image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80',
    price: '$249',
  },
  {
    title: 'Precision Cut',
    category: 'Hair',
    description: 'Expert haircut tailored to your face shape and personal style by master stylists.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
    price: '$129',
  },
  {
    title: 'Deep Tissue Massage',
    category: 'Spa',
    description: 'Therapeutic massage targeting deep muscle tension and chronic stress relief.',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80',
    price: '$179',
  },
  {
    title: 'Anti-Aging Treatment',
    category: 'Skincare',
    description: 'Advanced rejuvenation protocol using premium serums and cutting-edge technology.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80',
    price: '$289',
  },
  {
    title: 'Bridal Party Package',
    category: 'Wedding',
    description: 'Complete beauty experience for the bride and her closest companions.',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80',
    price: '$1,299',
  },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const filteredServices = activeCategory === 'All'
    ? services
    : services.filter((s) => s.category === activeCategory);

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
              Our Services
            </span>
            <h1 className="mt-4 font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-white">
              Bespoke Beauty
              <br />
              <span className="text-white/60">Experiences</span>
            </h1>
            <p className="mt-6 text-white/50 leading-relaxed">
              Each service is meticulously crafted to deliver exceptional results, 
              combining artistry with the finest products and techniques.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 flex flex-wrap gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-white text-[#0A0A0A]'
                    : 'border border-white/20 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredServices.map((service, index) => (
              <div key={service.title} onClick={() => setIsBookingOpen(true)} className="cursor-pointer">
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-[#0E0E0E]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-white">
              Not Sure What You Need?
            </h2>
            <p className="mt-4 text-white/50">
              Our expert consultants are here to help you discover the perfect 
              treatments for your unique needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsBookingOpen(true)}
              className="mt-8 px-8 py-4 bg-white text-[#0A0A0A] text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-all"
            >
              Book a Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}