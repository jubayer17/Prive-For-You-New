import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Users, Sparkles } from 'lucide-react';

const milestones = [
  { year: '2015', title: 'The Beginning', description: 'Founded in Beverly Hills with a vision to redefine luxury beauty' },
  { year: '2017', title: 'Expanding Services', description: 'Introduced our signature facial treatments and spa services' },
  { year: '2019', title: 'Award Recognition', description: 'Named Best Luxury Salon by Beverly Hills Magazine' },
  { year: '2021', title: 'Team Growth', description: 'Expanded our team of master stylists and artists' },
  { year: '2023', title: 'Innovation', description: 'Launched our exclusive membership program' },
  { year: '2025', title: 'Today', description: 'Serving over 10,000 clients with excellence' },
];

const values = [
  { icon: Award, title: 'Excellence', description: 'We never compromise on quality, using only premium products and techniques' },
  { icon: Heart, title: 'Care', description: 'Every client is treated with personalized attention and genuine warmth' },
  { icon: Users, title: 'Community', description: 'Building lasting relationships with our clients and team members' },
  { icon: Sparkles, title: 'Innovation', description: 'Continuously evolving with the latest in beauty and wellness' },
];

export default function OurStoryPage() {
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
              Our Journey
            </span>
            <h1 className="mt-4 font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-white">
              The PrivéforYou Story
            </h1>
            <p className="mt-6 text-white/60 leading-relaxed text-lg">
              A decade of passion, dedication, and the pursuit of beauty excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16 md:py-24 bg-[#0E0E0E]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
                  alt="Our Story"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-['Playfair_Display'] text-3xl text-white">
                Where Luxury Meets Artistry
              </h2>
              <p className="text-white/60 leading-relaxed">
                Founded in 2015, PrivéforYou was born from a simple belief: that everyone deserves to experience luxury beauty services that make them feel extraordinary. What started as a small boutique salon in Beverly Hills has grown into a destination for those who appreciate the finer things in life.
              </p>
              <p className="text-white/60 leading-relaxed">
                Our founder, with over 20 years of experience in the beauty industry, envisioned a space where artistry, expertise, and genuine care converge. Today, we continue that vision with a team of master stylists and artists who are passionate about their craft.
              </p>
              <p className="text-white/60 leading-relaxed">
                Every service we offer is a reflection of our commitment to excellence. We believe beauty is personal, and our approach is always tailored to celebrate your unique essence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-white">
              Our Journey
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="text-white/40 text-sm tracking-[0.3em] mb-4">
                    {milestone.year}
                  </div>
                  <h3 className="font-['Playfair_Display'] text-xl text-white mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-white">
              Our Values
            </h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-white/60" />
                </div>
                <h3 className="font-['Playfair_Display'] text-xl text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}