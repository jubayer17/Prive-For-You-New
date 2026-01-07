import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Calendar } from 'lucide-react';

export default function TeamCard({ member, index }) {
  const memberSlug = member.name.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <Link to={createPageUrl('TeamMemberProfile') + '?member=' + memberSlug}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        className="group relative cursor-pointer"
      >
      <div className="relative overflow-hidden">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-[#0E0E0E] light:bg-gray-100">
          <motion.img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] light:from-white via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          
          {/* Social Links - Appear on Hover */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="w-10 h-10 bg-white/10 light:bg-black/10 backdrop-blur-sm flex items-center justify-center text-white light:text-black hover:bg-white light:hover:bg-black hover:text-[#0A0A0A] light:hover:text-white transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="w-10 h-10 bg-white/10 light:bg-black/10 backdrop-blur-sm flex items-center justify-center text-white light:text-black hover:bg-white light:hover:bg-black hover:text-[#0A0A0A] light:hover:text-white transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>
          </div>
        </div>

        {/* Info */}
        <div className="mt-6 text-center">
          <h3 className="font-['Playfair_Display'] text-xl text-white light:text-black group-hover:text-white/80 light:group-hover:text-black/80 transition-colors">
            {member.name}
          </h3>
          <p className="mt-1 text-xs tracking-[0.2em] text-white/40 light:text-black/40 uppercase">
            {member.role}
          </p>
          <p className="mt-3 text-sm text-white/50 light:text-black/50 line-clamp-2">
            {member.specialty}
          </p>
        </div>
      </div>
    </motion.div>
    </Link>
  );
}