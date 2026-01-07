import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "PrivéforYou transformed my entire outlook on self-care. The attention to detail and personalized approach made me feel truly special.",
    author: "Alexandra Chen",
    role: "Fashion Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
  },
  {
    quote: "The most luxurious beauty experience I've ever had. From the moment I walked in, every detail was perfect.",
    author: "Sophia Williams",
    role: "Art Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
  },
  {
    quote: "Their bridal package exceeded all expectations. My wedding day look was absolutely flawless.",
    author: "Emma Richardson",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80"
  }
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-24 md:py-32 bg-[#0E0E0E] light:bg-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Quote Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 border border-white/20 light:border-black/20 mb-12">
            <Quote className="w-6 h-6 text-white/40 light:text-black/40" />
          </div>

          {/* Testimonial Content */}
          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <p className="font-['Playfair_Display'] text-xl md:text-2xl lg:text-3xl text-white/90 light:text-black/90 leading-relaxed max-w-3xl italic">
                  "{testimonials[current].quote}"
                </p>

                <div className="mt-10 flex items-center gap-4">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].author}
                    className="w-14 h-14 rounded-full object-cover grayscale"
                  />
                  <div className="text-left">
                    <p className="text-white light:text-black font-medium">
                      {testimonials[current].author}
                    </p>
                    <p className="text-xs tracking-[0.15em] text-white/40 light:text-black/40 uppercase">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="w-12 h-12 border border-white/20 light:border-black/20 flex items-center justify-center text-white/60 light:text-black/60 hover:bg-white light:hover:bg-black hover:text-[#0A0A0A] light:hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current ? 'bg-white light:bg-black w-6' : 'bg-white/30 light:bg-black/30'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="w-12 h-12 border border-white/20 light:border-black/20 flex items-center justify-center text-white/60 light:text-black/60 hover:bg-white light:hover:bg-black hover:text-[#0A0A0A] light:hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}