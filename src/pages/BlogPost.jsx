import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Calendar, Clock, Share2, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const blogData = {
  'winter-skincare-routine': {
    title: 'Your Ultimate Winter Skincare Routine',
    author: 'Elena Rodriguez',
    date: 'January 5, 2026',
    readTime: '5 min read',
    category: 'Beauty Tips',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80',
    content: `
Winter can be harsh on your skin, but with the right routine, you can maintain a healthy, glowing complexion all season long. As a licensed aesthetician with over 10 years of experience, I'm sharing my top tips for winter skincare.

## Understanding Winter Skin Challenges

The cold weather, indoor heating, and low humidity levels can strip your skin of its natural moisture, leading to dryness, flakiness, and sensitivity. Your summer routine won't cut it anymore—it's time to adjust.

## Step 1: Gentle Cleansing

Switch to a creamy, hydrating cleanser that won't strip your skin. Avoid hot water, which can further dry out your complexion. Lukewarm water is your friend during winter months.

## Step 2: Layer Your Hydration

Think of hydration like layering clothing—you need multiple layers to stay protected. Start with a hydrating toner, follow with a serum containing hyaluronic acid, and seal it all in with a rich moisturizer.

## Step 3: Don't Skip SPF

Yes, even in winter! UV rays are present year-round and can penetrate clouds. Use a broad-spectrum SPF 30 or higher daily.

## Step 4: Add a Facial Oil

Facial oils are game-changers in winter. They create a protective barrier and lock in moisture. Apply a few drops over your moisturizer at night.

## Step 5: Treat Your Lips and Hands

These areas are often neglected but suffer the most. Keep a rich lip balm and hand cream with you at all times, and reapply throughout the day.

## Professional Treatments

Consider monthly hydrating facials to give your skin an extra boost. Our signature winter facial includes deep hydration, gentle exfoliation, and a nourishing mask.

Remember, consistency is key. Give your new routine at least 2-3 weeks to show results, and your skin will thank you!
    `,
  },
  'bridal-beauty-timeline': {
    title: 'The Complete Bridal Beauty Timeline',
    author: 'Sophia Anderson',
    date: 'January 3, 2026',
    readTime: '8 min read',
    category: 'Expert Advice',
    image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=1200&q=80',
    content: `
Planning your wedding beauty routine doesn't have to be stressful. With over 12 years of bridal beauty experience, I've created the ultimate timeline to help you look absolutely radiant on your big day.

## 12 Months Before

Start thinking about your overall look. Create a Pinterest board, schedule consultations with potential stylists, and begin a consistent skincare routine. If you're considering any major changes (like growing out your hair), start now.

## 6 Months Before

Book your hair and makeup artist. The best professionals book up quickly! Schedule your trial session and start treatments for any skin concerns. This is also the time to begin regular facials.

## 3 Months Before

Have your hair and makeup trial. Take photos in different lighting to ensure you love the look. Consider teeth whitening if desired, and maintain your skincare routine religiously.

## 2 Months Before

Schedule your final dress fitting to coordinate with your beauty team. Get any necessary hair treatments (color, deep conditioning). Book your pre-wedding facial series.

## 1 Month Before

Finalize all details with your beauty team. Have a final skincare consultation and stick to tried-and-true products—no experimenting! Get your brows shaped professionally.

## 2 Weeks Before

Final hair appointment for color touch-ups if needed. Get a gentle facial (nothing too aggressive). Drink plenty of water and get good sleep.

## 1 Week Before

Light exfoliation and hydrating masks. No new products or treatments! Start limiting salt intake to reduce any puffiness.

## 1-2 Days Before

Relaxing facial massage, final manicure and pedicure. Get plenty of rest and stay hydrated.

## Wedding Day

Trust your professionals and enjoy being pampered. You've prepared well—now just relax and soak in the moment!

Your wedding day beauty is about enhancing your natural beauty and feeling confident. With proper planning, you'll look and feel absolutely amazing.
    `,
  },
};

const relatedPosts = [
  {
    id: 'makeup-trends-2026',
    title: '2026 Makeup Trends',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80',
  },
  {
    id: 'hair-color-maintenance',
    title: 'Hair Color Maintenance',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80',
  },
  {
    id: 'skin-prep-for-makeup',
    title: 'Skin Prep for Makeup',
    image: 'https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=400&q=80',
  },
];

export default function BlogPostPage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('id') || 'winter-skincare-routine';
  const post = blogData[postId] || blogData['winter-skincare-routine'];

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-24 lg:pt-32">
      {/* Hero */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to={createPageUrl('Blogs')} className="text-white/40 text-xs tracking-[0.2em] uppercase hover:text-white/60 transition-colors">
              ← Back to Blog
            </Link>
            <div className="mt-8">
              <span className="px-4 py-2 bg-white/10 text-white/60 text-xs uppercase tracking-wider">
                {post.category}
              </span>
              <h1 className="mt-6 font-['Playfair_Display'] text-4xl md:text-5xl text-white">
                {post.title}
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-6 text-white/60 text-sm">
                <span>By {post.author}</span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-[21/9] overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_300px] gap-16">
            {/* Article */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="prose prose-invert prose-lg max-w-none"
            >
              <div className="text-white/70 leading-relaxed space-y-6">
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="font-['Playfair_Display'] text-2xl text-white mt-12 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  return <p key={index}>{paragraph}</p>;
                })}
              </div>

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <span className="text-white/60 text-sm">Share this article:</span>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 border border-white/20 text-white/60 hover:bg-white/10 transition-all flex items-center justify-center">
                      <Facebook className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 border border-white/20 text-white/60 hover:bg-white/10 transition-all flex items-center justify-center">
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 border border-white/20 text-white/60 hover:bg-white/10 transition-all flex items-center justify-center">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 border border-white/20 text-white/60 hover:bg-white/10 transition-all flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white/5 border border-white/10 p-6"
              >
                <h3 className="font-['Playfair_Display'] text-xl text-white mb-3">
                  Stay Updated
                </h3>
                <p className="text-white/60 text-sm mb-4">
                  Get beauty tips and exclusive content delivered to your inbox.
                </p>
                {subscribed ? (
                  <div className="text-center py-4">
                    <p className="text-white/80 text-sm">✓ You're subscribed!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-3">
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="bg-white/5 border-white/20 text-white"
                      required
                    />
                    <Button type="submit" className="w-full bg-white text-[#0A0A0A] hover:bg-white/90">
                      Subscribe
                    </Button>
                  </form>
                )}
              </motion.div>

              {/* Related Posts */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="font-['Playfair_Display'] text-xl text-white mb-6">
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map((related) => (
                    <Link key={related.id} to={createPageUrl('BlogPost') + '?id=' + related.id}>
                      <div className="group cursor-pointer flex gap-4">
                        <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                          <img
                            src={related.image}
                            alt={related.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white text-sm group-hover:text-white/80 transition-colors">
                            {related.title}
                          </h4>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}