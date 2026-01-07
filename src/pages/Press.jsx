import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Download, Calendar } from 'lucide-react';

const pressReleases = [
  {
    date: 'December 15, 2025',
    title: 'PrivéforYou Launches Exclusive Membership Program',
    excerpt: 'Introducing a new tier of luxury with our membership benefits designed for our most discerning clients.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
  },
  {
    date: 'October 8, 2025',
    title: 'Named Best Luxury Salon by LA Beauty Awards',
    excerpt: 'We are honored to receive this recognition for our commitment to excellence in beauty services.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
  },
  {
    date: 'August 20, 2025',
    title: 'Expanding Our Team with Master Stylists',
    excerpt: 'Welcoming internationally trained professionals to bring even more expertise to our clients.',
    image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80',
  },
  {
    date: 'June 5, 2025',
    title: 'PrivéforYou Partners with Premium Beauty Brands',
    excerpt: 'Exclusive partnerships bringing the finest products and treatments to Beverly Hills.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
  },
];

const coverage = [
  { outlet: 'Vogue', title: 'The Best Kept Secret in Beverly Hills Beauty', link: '#' },
  { outlet: 'Harper\'s Bazaar', title: 'Where Celebrities Get Camera-Ready', link: '#' },
  { outlet: 'Los Angeles Magazine', title: 'Luxury Redefined: Inside PrivéforYou', link: '#' },
  { outlet: 'Forbes', title: 'The Business of Beauty Excellence', link: '#' },
  { outlet: 'Elle', title: 'Bridal Beauty Perfection', link: '#' },
];

export default function PressPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-24 lg:pt-32">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
              Media & Press
            </span>
            <h1 className="mt-4 font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-white">
              Press & Media
            </h1>
            <p className="mt-6 text-white/60 leading-relaxed">
              Latest news and media coverage about PrivéforYou
            </p>
          </motion.div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Playfair_Display'] text-3xl text-white mb-12"
          >
            Press Releases
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {pressReleases.map((release, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden mb-6">
                  <img
                    src={release.image}
                    alt={release.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-2 text-white/40 text-xs mb-3">
                  <Calendar className="w-3 h-3" />
                  {release.date}
                </div>
                <h3 className="font-['Playfair_Display'] text-xl text-white mb-3 group-hover:text-white/80 transition-colors">
                  {release.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {release.excerpt}
                </p>
                <button className="text-white text-xs tracking-[0.2em] uppercase flex items-center gap-2 hover:gap-3 transition-all">
                  Read More
                  <ExternalLink className="w-3 h-3" />
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-24 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-['Playfair_Display'] text-3xl text-white mb-4">
              In the Media
            </h2>
            <p className="text-white/60">Featured stories from leading publications</p>
          </motion.div>

          <div className="space-y-4">
            {coverage.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between p-6 border border-white/10 hover:bg-white/5 transition-all group"
              >
                <div className="flex-1">
                  <span className="text-white/40 text-xs tracking-[0.2em] uppercase">
                    {item.outlet}
                  </span>
                  <h3 className="text-white text-lg mt-2 group-hover:text-white/80 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-white/60 transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-['Playfair_Display'] text-3xl text-white mb-6">
              Press Kit
            </h2>
            <p className="text-white/60 mb-8">
              Download our media assets and brand information
            </p>
            <button className="px-8 py-4 bg-white text-[#0A0A0A] text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-all inline-flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Press Kit
            </button>
          </motion.div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-16 bg-[#0E0E0E]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h3 className="text-white text-lg mb-4">Media Inquiries</h3>
          <p className="text-white/60">
            For press inquiries, please contact us at{' '}
            <a href="mailto:press@priveforyou.com" className="text-white hover:text-white/80 transition-colors">
              press@priveforyou.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}