import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar } from 'lucide-react';
import BookingModal from '@/components/ui/BookingModal';

export default function ServiceCard({ service, index }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        className="group relative"
      >
      <div className="relative bg-[#0E0E0E] light:bg-white border border-white/10 light:border-black/10 overflow-hidden transition-all duration-500 group-hover:border-white/20 light:group-hover:border-black/20 group-hover:shadow-2xl group-hover:shadow-white/5 light:group-hover:shadow-black/5">
        {/* Image */}
        <div className="relative h-64 md:h-72 overflow-hidden">
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] light:from-white via-transparent to-transparent opacity-60" />
        </div>

        {/* Content */}
        <div className="relative p-6 md:p-8">
          <Link to={createPageUrl('ServiceDetail') + '?service=' + encodeURIComponent(service.title)}>
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] tracking-[0.3em] text-white/40 light:text-black/40 uppercase">
                  {service.category}
                </span>
                <h3 className="mt-2 font-['Playfair_Display'] text-xl md:text-2xl text-white light:text-black group-hover:text-white/90 light:group-hover:text-black/90 transition-colors">
                  {service.title}
                </h3>
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 flex items-center justify-center border border-white/20 light:border-black/20 text-white/60 light:text-black/60 group-hover:bg-white light:group-hover:bg-black group-hover:text-[#0A0A0A] light:group-hover:text-white transition-all duration-300"
              >
                <ArrowUpRight className="w-4 h-4" />
              </motion.div>
            </div>

            <p className="mt-4 text-sm text-white/50 light:text-black/50 leading-relaxed line-clamp-2">
              {service.description}
            </p>
          </Link>

          <div className="mt-6 pt-6 border-t border-white/10 light:border-black/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs tracking-[0.2em] text-white/40 light:text-black/40 uppercase">
                From {service.price}
              </span>
            </div>
            <div className="flex gap-2">
              <Link to={createPageUrl('ServiceDetail') + '?service=' + encodeURIComponent(service.title)} className="flex-1">
                <button className="w-full py-3 border border-white/20 text-white text-xs tracking-[0.15em] uppercase hover:bg-white/10 transition-all">
                  View Details
                </button>
              </Link>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsBookingOpen(true);
                }}
                className="flex-1 py-3 bg-white text-[#0A0A0A] text-xs tracking-[0.15em] uppercase hover:bg-white/90 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-3 h-3" />
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-white/5 light:from-black/5 to-transparent" />
        </div>
      </div>
      </motion.div>
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} selectedService={service.title} />
    </>
  );
}