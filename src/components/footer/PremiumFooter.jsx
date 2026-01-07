import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function PremiumFooter() {
  const footerLinks = {
    experience: [
      { name: 'Our Services', page: 'Services' },
      { name: 'Packages', page: 'Packages' },
      { name: 'Membership', page: 'Membership' },
      { name: 'Gift Cards', page: 'GiftCards' },
    ],
    company: [
      { name: 'Our Story', page: 'OurStory' },
      { name: 'Our Team', page: 'Team' },
      { name: 'Careers', page: 'Careers' },
      { name: 'Press', page: 'Press' },
      { name: 'Blog', page: 'Blogs' },
    ],
    support: [
      { name: 'Contact Us', page: 'Support' },
      { name: 'FAQs', page: 'FAQ' },
      { name: 'Terms of Service', page: 'TermsOfService' },
      { name: 'Privacy Policy', page: 'PrivacyPolicy' },
    ],
  };

  const socials = [
    { icon: Instagram, href: '#' },
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to={createPageUrl('Home')}>
              <span className="font-['Playfair_Display'] text-2xl text-white">
                Privé<span className="text-white/60">forYou</span>
              </span>
            </Link>
            <p className="mt-6 text-sm text-white/50 leading-relaxed max-w-sm">
              Where luxury meets artistry. Experience the finest in beauty and 
              wellness services, crafted for the modern connoisseur.
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4 text-white/30" />
                <span>123 Luxury Avenue, Beverly Hills, CA 90210</span>
              </div>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <Phone className="w-4 h-4 text-white/30" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <Mail className="w-4 h-4 text-white/30" />
                <span>hello@priveforyou.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-4">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  href={social.href}
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:bg-white hover:text-[#0A0A0A] transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] text-white/40 uppercase mb-6">
              Experience
            </h4>
            <ul className="space-y-3">
              {footerLinks.experience.map((link) => (
                <li key={link.name}>
                  <Link
                    to={createPageUrl(link.page)}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.3em] text-white/40 uppercase mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={createPageUrl(link.page)}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.3em] text-white/40 uppercase mb-6">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={createPageUrl(link.page)}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs text-white/40">
            <p>© 2026 PrivéforYou. All rights reserved.</p>
            <span>•</span>
            <p>
              Developed by{' '}
              <a 
                href="https://geekssort.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                GeekSSort
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link to={createPageUrl('TermsOfService')} className="text-xs text-white/40 hover:text-white/60 transition-colors">
              Terms
            </Link>
            <Link to={createPageUrl('PrivacyPolicy')} className="text-xs text-white/40 hover:text-white/60 transition-colors">
              Privacy
            </Link>
            <Link to={createPageUrl('Support')} className="text-xs text-white/40 hover:text-white/60 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}