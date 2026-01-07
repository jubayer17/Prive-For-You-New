import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import MegaMenu from './MegaMenu';

const leftNavLinks = [
  { name: 'Home', page: 'Home' },
  { name: 'Discover', page: 'Services', hasMega: true },
  { name: 'Packages', page: 'Packages' },
];

const rightNavLinks = [
  { name: 'Membership', page: 'Membership' },
  { name: 'Gift Cards', page: 'GiftCards' },
  { name: 'Our Team', page: 'Team' },
];

export default function PremiumNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#0A0A0A] border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24 relative">
            {/* Left Nav */}
            <div className="hidden lg:flex items-center gap-8 flex-1">
              {leftNavLinks.map((link) => (
                link.hasMega ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setMegaMenuOpen(true)}
                  >
                    <button className="group relative text-[11px] tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-1">
                      {link.name}
                      <ChevronDown className="w-3 h-3" />
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
                    </button>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={createPageUrl(link.page)}
                    className="group relative text-[11px] tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
                  </Link>
                )
              ))}
            </div>

            {/* Logo - Centered */}
            <Link 
              to={createPageUrl('Home')} 
              className="relative group lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <span className="font-['Playfair_Display'] text-2xl lg:text-3xl text-white tracking-wider">
                  Privé
                </span>
                <span className="font-['Playfair_Display'] text-2xl lg:text-3xl text-white/60 tracking-wider">
                  forYou
                </span>
              </motion.div>
            </Link>

            {/* Right Nav */}
            <div className="hidden lg:flex items-center gap-8 flex-1 justify-end">
              {rightNavLinks.map((link) => (
                <Link
                  key={link.name}
                  to={createPageUrl(link.page)}
                  className="group relative text-[11px] tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileOpen(true)}
                className="text-white p-2"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mega Menu */}
      <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0A0A0A]"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-6 h-20">
                <span className="font-['Playfair_Display'] text-2xl text-white">
                  Privé<span className="text-white/60">forYou</span>
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-white p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex-1 flex flex-col justify-center px-6">
                {[...leftNavLinks, ...rightNavLinks, { name: 'Support', page: 'Support' }].map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={createPageUrl(link.page)}
                      onClick={() => setMobileOpen(false)}
                      className="block py-4 text-2xl font-['Playfair_Display'] text-white/80 hover:text-white transition-colors border-b border-white/10"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="px-6 pb-8">
                <Link
                  to={createPageUrl('Support')}
                  onClick={() => setMobileOpen(false)}
                  className="block w-full py-4 text-center bg-white text-[#0A0A0A] text-sm tracking-[0.15em] uppercase transition-colors"
                >
                  Book a Session
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}