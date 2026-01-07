import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

export default function PackageCard({ pkg, index, featured = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className={`group relative ${featured ? 'lg:-mt-4' : ''}`}
    >
      <div className={`relative h-full bg-[#0E0E0E] light:bg-white border overflow-hidden transition-all duration-500 ${
        featured 
          ? 'border-white/30 light:border-black/30 shadow-xl shadow-white/10 light:shadow-black/10' 
          : 'border-white/10 light:border-black/10 group-hover:border-white/20 light:group-hover:border-black/20'
      }`}>
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-0 left-0 right-0 bg-white light:bg-black py-2">
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-3 h-3 text-[#0A0A0A] light:text-white" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#0A0A0A] light:text-white font-medium">
                Most Popular
              </span>
            </div>
          </div>
        )}

        <div className={`p-8 md:p-10 ${featured ? 'pt-14' : ''}`}>
          {/* Package Name */}
          <span className="text-[10px] tracking-[0.3em] text-white/40 light:text-black/40 uppercase">
            {pkg.tier}
          </span>
          <h3 className="mt-2 font-['Playfair_Display'] text-2xl md:text-3xl text-white light:text-black">
            {pkg.name}
          </h3>

          {/* Price */}
          <div className="mt-6 flex items-baseline gap-2">
            <span className="font-['Playfair_Display'] text-4xl md:text-5xl text-white light:text-black">
              {pkg.price}
            </span>
            <span className="text-sm text-white/40 light:text-black/40">/ {pkg.duration}</span>
          </div>

          <p className="mt-4 text-sm text-white/50 light:text-black/50 leading-relaxed">
            {pkg.description}
          </p>

          {/* Features */}
          <ul className="mt-8 space-y-4">
            {pkg.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-white/10 light:bg-black/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white/80 light:text-black/80" />
                </div>
                <span className="text-sm text-white/60 light:text-black/60">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`mt-10 w-full py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
              featured
                ? 'bg-white light:bg-black text-[#0A0A0A] light:text-white hover:bg-white/90 light:hover:bg-black/90'
                : 'bg-transparent border border-white/20 light:border-black/20 text-white light:text-black hover:bg-white light:hover:bg-black hover:text-[#0A0A0A] light:hover:text-white'
            }`}
          >
            Select Package
          </motion.button>
        </div>

        {/* Subtle glow for featured */}
        {featured && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -inset-1 bg-white/5 light:bg-black/5 blur-xl" />
          </div>
        )}
      </div>
    </motion.div>
  );
}