import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';

const categories = ['All', 'Beauty Tips', 'Trends', 'Behind the Scenes', 'Expert Advice'];

const blogPosts = [
  {
    id: 'winter-skincare-routine',
    title: 'Your Ultimate Winter Skincare Routine',
    excerpt: 'Discover how to keep your skin glowing and hydrated during the cold winter months with our expert-approved tips.',
    category: 'Beauty Tips',
    author: 'Elena Rodriguez',
    date: 'January 5, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    featured: true,
  },
  {
    id: 'bridal-beauty-timeline',
    title: 'The Complete Bridal Beauty Timeline',
    excerpt: 'Plan your pre-wedding beauty routine with our comprehensive month-by-month guide to looking flawless on your big day.',
    category: 'Expert Advice',
    author: 'Sophia Anderson',
    date: 'January 3, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80',
    featured: true,
  },
  {
    id: 'makeup-trends-2026',
    title: '2026 Makeup Trends You Need to Know',
    excerpt: 'From bold lips to natural brows, explore the biggest makeup trends taking over this year.',
    category: 'Trends',
    author: 'Marcus Chen',
    date: 'December 28, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
  },
  {
    id: 'hair-color-maintenance',
    title: 'How to Maintain Your Hair Color Between Appointments',
    excerpt: 'Keep your color vibrant and beautiful with these professional tips for at-home maintenance.',
    category: 'Beauty Tips',
    author: 'Sophia Anderson',
    date: 'December 20, 2025',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
  },
  {
    id: 'behind-the-scenes-bridal',
    title: 'Behind the Scenes: A Day in Bridal Beauty',
    excerpt: 'Take a peek into what goes into creating the perfect bridal look from start to finish.',
    category: 'Behind the Scenes',
    author: 'Team PrivéforYou',
    date: 'December 15, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
  },
  {
    id: 'skin-prep-for-makeup',
    title: 'The Art of Skin Prep for Flawless Makeup',
    excerpt: 'Learn the professional techniques that ensure your makeup looks perfect and lasts all day.',
    category: 'Expert Advice',
    author: 'Marcus Chen',
    date: 'December 10, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=800&q=80',
  },
];

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-24 lg:pt-32">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
              Insights & Inspiration
            </span>
            <h1 className="mt-4 font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-white">
              Beauty Blog
            </h1>
            <p className="mt-6 text-white/60 max-w-2xl mx-auto leading-relaxed">
              Expert tips, trends, and stories from the world of luxury beauty
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {activeCategory === 'All' && (
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="w-5 h-5 text-white/60" />
              <h2 className="text-white text-sm tracking-[0.2em] uppercase">Featured</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <Link key={post.id} to={createPageUrl('BlogPost') + '?id=' + post.id}>
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-[16/10] overflow-hidden mb-6">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="flex items-center gap-4 text-white/40 text-xs mb-3">
                      <span className="px-3 py-1 bg-white/10 text-white/60 uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-['Playfair_Display'] text-2xl text-white mb-3 group-hover:text-white/80 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/40 text-xs">By {post.author}</span>
                      <span className="text-white text-xs tracking-[0.2em] uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-[#0E0E0E] sticky top-24 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-xs tracking-[0.2em] uppercase whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? 'bg-white text-[#0A0A0A]'
                    : 'border border-white/20 text-white/60 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Link key={post.id} to={createPageUrl('BlogPost') + '?id=' + post.id}>
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex items-center gap-3 text-white/40 text-xs mb-3">
                    <span className="text-white/60">{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-['Playfair_Display'] text-xl text-white mb-2 group-hover:text-white/80 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed line-clamp-2 mb-3">
                    {post.excerpt}
                  </p>
                  <span className="text-white/40 text-xs">{post.date}</span>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}