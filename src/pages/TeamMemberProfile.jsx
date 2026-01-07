import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Award, Instagram, Calendar, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import BookingModal from '@/components/ui/BookingModal';

const teamMembers = {
  'sophia-anderson': {
    name: 'Sophia Anderson',
    role: 'Master Stylist & Colorist',
    specialty: 'Bridal & Color Transformation',
    rating: 4.9,
    reviews: 234,
    experience: '12+ Years',
    location: 'Beverly Hills, CA',
    image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80',
    bio: 'Sophia is a renowned hair and makeup artist specializing in bridal beauty. With over a decade of experience, she has transformed countless brides into the best version of themselves. Her signature style combines timeless elegance with modern techniques.',
    certifications: ['Master Colorist Certified', 'Bridal Specialist', 'Advanced Makeup Artistry'],
    services: ['Bridal Makeup & Hair', 'Color Transformation', 'Special Event Styling', 'Makeup Lessons'],
    gallery: [
      'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80',
      'https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=600&q=80',
      'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&q=80'
    ],
    testimonials: [
      {
        name: 'Jennifer Martinez',
        rating: 5,
        text: 'Sophia made me feel like an absolute queen on my wedding day! Her attention to detail is impeccable.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80'
      },
      {
        name: 'Amanda Wilson',
        rating: 5,
        text: 'Best stylist I have ever worked with. She truly understands what works for each person.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80'
      }
    ]
  },
  'marcus-chen': {
    name: 'Marcus Chen',
    role: 'Celebrity Makeup Artist',
    specialty: 'Editorial & Fashion',
    rating: 5.0,
    reviews: 189,
    experience: '15+ Years',
    location: 'Beverly Hills, CA',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    bio: 'Marcus brings international editorial experience to every client. Having worked with top fashion magazines and celebrities, he creates bold, artistic looks that push creative boundaries while maintaining wearable elegance.',
    certifications: ['Fashion Editorial Certified', 'Celebrity Makeup Pro', 'Advanced Airbrush Specialist'],
    services: ['Editorial Makeup', 'Special Events', 'Photo Shoot Styling', 'Artistic Looks'],
    gallery: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
      'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&q=80',
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80',
      'https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=600&q=80',
      'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&q=80'
    ],
    testimonials: [
      {
        name: 'Lisa Thompson',
        rating: 5,
        text: 'Marcus is a true artist! His creativity and skill are unmatched. Perfect for my photoshoot.',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80'
      }
    ]
  },
  'elena-rodriguez': {
    name: 'Elena Rodriguez',
    role: 'Senior Aesthetician',
    specialty: 'Skincare & Facial Treatments',
    rating: 4.9,
    reviews: 312,
    experience: '10+ Years',
    location: 'Beverly Hills, CA',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    bio: 'Elena is passionate about helping clients achieve their best skin. Specializing in advanced facial treatments and skincare, she creates personalized treatment plans that deliver visible, lasting results.',
    certifications: ['Licensed Aesthetician', 'Advanced Skincare Therapist', 'Chemical Peel Specialist'],
    services: ['Signature Facials', 'Anti-Aging Treatments', 'Acne Solutions', 'Skin Analysis'],
    gallery: [
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
      'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&q=80',
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80',
      'https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=600&q=80',
      'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&q=80'
    ],
    testimonials: [
      {
        name: 'Rachel Green',
        rating: 5,
        text: 'Elena transformed my skin! Her facials are the best I have ever experienced.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80'
      }
    ]
  }
};

export default function TeamMemberProfilePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  const urlParams = new URLSearchParams(window.location.search);
  const memberId = urlParams.get('member') || 'sophia-anderson';
  const member = teamMembers[memberId] || teamMembers['sophia-anderson'];

  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-24 lg:pt-32">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
                {member.role}
              </span>
              <h1 className="mt-4 font-['Playfair_Display'] text-4xl md:text-5xl text-white">
                {member.name}
              </h1>
              
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="text-white font-medium">{member.rating}</span>
                  <span className="text-white/40 text-sm">({member.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{member.location}</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <Award className="w-4 h-4" />
                  <span className="text-sm">{member.experience}</span>
                </div>
              </div>

              <p className="mt-6 text-white/60 leading-relaxed">
                {member.bio}
              </p>

              <div className="mt-8 space-y-4">
                <h3 className="text-white/80 text-sm font-medium uppercase tracking-wider">
                  Specializes In
                </h3>
                <div className="flex flex-wrap gap-2">
                  {member.services.map((service) => (
                    <span
                      key={service}
                      className="px-4 py-2 bg-white/5 border border-white/10 text-white/80 text-xs"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-white/80 text-sm font-medium uppercase tracking-wider">
                  Certifications
                </h3>
                <div className="space-y-2">
                  {member.certifications.map((cert) => (
                    <div key={cert} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-white/60" />
                      <span className="text-sm text-white/80">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex gap-4">
                <Button
                  onClick={() => setIsBookingOpen(true)}
                  className="flex-1 bg-white text-[#0A0A0A] hover:bg-white/90 py-6 text-xs tracking-[0.2em] uppercase"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book with {member.name.split(' ')[0]}
                </Button>
                <button className="w-14 h-14 border border-white/20 text-white/60 hover:bg-white/10 transition-all flex items-center justify-center">
                  <Instagram className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-24 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl text-white mb-8">
            Portfolio
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {member.gallery.map((image, index) => (
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
                  alt={`Work ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl text-white mb-8">
            Client Reviews
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {member.testimonials.map((testimonial, index) => (
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
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        selectedService={`Session with ${member.name}`}
      />
    </div>
  );
}