import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Clock, CheckCircle, Play, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import BookingModal from '@/components/ui/BookingModal';

const serviceData = {
  'Bridal Elegance': {
    name: 'Bridal Makeup Artistry',
    category: 'Wedding Services',
    rating: 4.9,
    reviews: 156,
    price: '$599',
    duration: '3-4 hours',
    location: 'Beverly Hills, CA',
    description: 'Transform into the radiant bride you have always dreamed of being. Our expert bridal makeup artists specialize in creating timeless, elegant looks that photograph beautifully and last throughout your special day.',
    hero: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=1920&q=80',
    features: ['HD & Airbrush Makeup', 'Professional Hair Styling', 'Pre-Wedding Consultation', 'Complimentary Touch-ups', 'Premium Products Only', 'On-Location Service']
  },
  'Signature Facial': {
    name: 'Signature Facial Treatment',
    category: 'Skincare',
    rating: 4.8,
    reviews: 203,
    price: '$189',
    duration: '60-90 minutes',
    location: 'Beverly Hills, CA',
    description: 'Advanced skincare treatment combining cutting-edge technology with pure botanical ingredients. Our signature facial deeply cleanses, exfoliates, and nourishes your skin for a radiant, youthful glow.',
    hero: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80',
    features: ['Deep Cleansing', 'Exfoliation & Extraction', 'Custom Face Mask', 'LED Light Therapy', 'Facial Massage', 'Premium Serums']
  },
  'Hair Transformation': {
    name: 'Complete Hair Makeover',
    category: 'Hair Services',
    rating: 4.9,
    reviews: 187,
    price: '$299',
    duration: '2-3 hours',
    location: 'Beverly Hills, CA',
    description: 'Complete hair makeover with color, cut, and styling by our master stylists. We create personalized looks that enhance your natural beauty and suit your lifestyle.',
    hero: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=80',
    features: ['Professional Consultation', 'Color & Highlights', 'Precision Cut', 'Deep Conditioning', 'Blow Dry & Style', 'Aftercare Products']
  }
};

export default function ServiceDetailPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const urlParams = new URLSearchParams(window.location.search);
  const serviceName = urlParams.get('service') || 'Bridal Elegance';
  const service = serviceData[serviceName] || serviceData['Bridal Elegance'];

  const gallery = [
    'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80',
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
    'https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=800&q=80',
  ];

  const videos = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=400&q=80',
      url: 'https://videos.pexels.com/video-files/3018488/3018488-uhd_2560_1440_24fps.mp4',
      title: 'Bridal Transformation'
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80',
      url: 'https://videos.pexels.com/video-files/3997846/3997846-uhd_2560_1440_25fps.mp4',
      title: 'Wedding Day Makeup'
    },
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80',
      url: 'https://videos.pexels.com/video-files/3018488/3018488-uhd_2560_1440_24fps.mp4',
      title: 'Hair & Makeup Process'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      date: 'Dec 2024',
      text: 'Absolutely stunning work! The makeup lasted the entire day and looked flawless in all our photos. The team was professional, punctual, and made me feel so beautiful on my wedding day.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80'
    },
    {
      name: 'Emily Chen',
      rating: 5,
      date: 'Nov 2024',
      text: 'Best bridal makeup experience! They listened to exactly what I wanted and delivered beyond my expectations. My skin looked perfect and natural, not cakey at all.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80'
    },
    {
      name: 'Maria Garcia',
      rating: 5,
      date: 'Oct 2024',
      text: 'I felt like a princess! The attention to detail was incredible and the team made sure everything was perfect. Would absolutely recommend to any bride.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80'
    }
  ];



  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-24 lg:pt-32">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={service.hero}
          alt={service.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
      </section>

      {/* Service Info */}
      <section className="relative -mt-32 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#0E0E0E] border border-white/10 p-8 lg:p-12"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
              <div className="flex-1">
                <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
                  {service.category}
                </span>
                <h1 className="mt-2 font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl text-white">
                  {service.name}
                </h1>
                
                <div className="mt-6 flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <span className="text-white font-medium">{service.rating}</span>
                    <span className="text-white/40 text-sm">({service.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{service.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                </div>

                <p className="mt-6 text-white/60 leading-relaxed max-w-2xl">
                  {service.description}
                </p>

                <div className="mt-8 grid sm:grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-white/60" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-80 bg-white/5 border border-white/10 p-6">
                <div className="text-center">
                  <span className="text-white/40 text-xs uppercase tracking-wider">Starting From</span>
                  <div className="mt-2 font-['Playfair_Display'] text-4xl text-white">{service.price}</div>
                </div>
                <Button
                  onClick={() => setIsBookingOpen(true)}
                  className="mt-6 w-full bg-white text-[#0A0A0A] hover:bg-white/90 py-6 text-xs tracking-[0.2em] uppercase"
                >
                  Book Now
                </Button>
                <p className="mt-4 text-center text-white/40 text-xs">
                  Free consultation • Flexible scheduling
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl text-white mb-8">
            Our Work
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="aspect-square overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Reels */}
      <section className="py-24 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl text-white mb-8">
            Behind The Scenes
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative aspect-[9/16] overflow-hidden bg-black cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-medium">{video.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl text-white mb-8">
            Client Love
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                    <p className="text-white/40 text-xs">{testimonial.date}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/60 hover:text-white"
            onClick={() => setSelectedVideo(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full max-w-2xl aspect-[9/16]" onClick={(e) => e.stopPropagation()}>
            <video
              src={selectedVideo.url}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} selectedService={service.name} />
    </div>
  );
}