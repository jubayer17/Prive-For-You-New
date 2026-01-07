import React from 'react';
import { motion } from 'framer-motion';

export default function FeaturedSection() {
  const stats = [
    { value: '15+', label: 'Years of Excellence' },
    { value: '50K+', label: 'Happy Clients' },
    { value: '200+', label: 'Expert Stylists' },
    { value: '25', label: 'Premium Locations' },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#0A0A0A] light:bg-[#F8F8F8] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] tracking-[0.3em] text-white/40 light:text-black/40 uppercase">
              Why Choose Us
            </span>
            <h2 className="mt-4 font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl text-white light:text-black leading-tight">
              Where Luxury Meets
              <br />
              <span className="text-white/60 light:text-black/60">Artistry</span>
            </h2>
            <p className="mt-6 text-white/50 light:text-black/50 leading-relaxed max-w-lg">
              At PrivéforYou, we believe beauty is an art form. Our world-class 
              team of stylists and aestheticians are dedicated to crafting 
              personalized experiences that celebrate your unique elegance.
            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <span className="font-['Playfair_Display'] text-3xl md:text-4xl text-white light:text-black">
                    {stat.value}
                  </span>
                  <p className="mt-1 text-xs tracking-[0.15em] text-white/40 light:text-black/40 uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80"
                    alt="Luxury salon"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="aspect-square overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80"
                    alt="Beauty treatment"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&q=80"
                    alt="Spa experience"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&q=80"
                    alt="Makeup artistry"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-white/10 light:border-black/10" />
            <div className="absolute -top-8 -right-8 w-24 h-24 border border-white/10 light:border-black/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}