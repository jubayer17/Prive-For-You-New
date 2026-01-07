import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Clock, ChevronRight, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const positions = [
  {
    title: 'Senior Hair Stylist',
    department: 'Hair Services',
    type: 'Full-time',
    location: 'Beverly Hills, CA',
    description: 'Join our team of master stylists and bring your creative vision to life. We seek talented professionals who are passionate about hair artistry.',
    requirements: ['5+ years experience', 'Advanced color certification', 'Client portfolio', 'Passion for luxury beauty'],
  },
  {
    title: 'Makeup Artist',
    department: 'Makeup Services',
    type: 'Full-time / Part-time',
    location: 'Beverly Hills, CA',
    description: 'Looking for skilled makeup artists specializing in bridal, editorial, and special events. Must have a keen eye for detail and color.',
    requirements: ['3+ years experience', 'Bridal makeup expertise', 'Professional kit', 'Portfolio required'],
  },
  {
    title: 'Licensed Aesthetician',
    department: 'Skincare',
    type: 'Full-time',
    location: 'Beverly Hills, CA',
    description: 'Passionate about skincare? Join our spa team and help clients achieve radiant, healthy skin through personalized treatments.',
    requirements: ['State license required', '2+ years experience', 'Facial treatment expertise', 'Product knowledge'],
  },
  {
    title: 'Salon Coordinator',
    department: 'Operations',
    type: 'Full-time',
    location: 'Beverly Hills, CA',
    description: 'Be the face of our salon, managing client experience, appointments, and day-to-day operations with grace and efficiency.',
    requirements: ['Customer service experience', 'Scheduling software proficiency', 'Professional demeanor', 'Multitasking ability'],
  },
];

const perks = [
  'Competitive compensation',
  'Continuing education support',
  'Product discounts',
  'Flexible scheduling',
  'Creative freedom',
  'Collaborative environment',
];

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('');

  const handleApply = (title) => {
    setSelectedPosition(title);
    setShowApplicationForm(true);
  };

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
              Join Our Team
            </span>
            <h1 className="mt-4 font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-white">
              Careers at PrivéforYou
            </h1>
            <p className="mt-6 text-white/60 leading-relaxed text-lg">
              Build your career with a team that values artistry, excellence, and growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-[#0E0E0E]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-['Playfair_Display'] text-3xl text-white mb-6">
                Why Work With Us
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                At PrivéforYou, we believe our team is our greatest asset. We foster a culture of creativity, collaboration, and continuous learning. Join a workplace where your talent is celebrated and your growth is supported.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {perks.map((perk, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                    <span className="text-white/80 text-sm">{perk}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
                  alt="Our Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-['Playfair_Display'] text-3xl text-white mb-4">
              Open Positions
            </h2>
            <p className="text-white/60">
              Explore opportunities to join our team
            </p>
          </motion.div>

          <div className="space-y-4">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedJob(expandedJob === index ? null : index)}
                  className="w-full p-6 flex items-start justify-between hover:bg-white/5 transition-colors text-left"
                >
                  <div className="flex-1">
                    <h3 className="font-['Playfair_Display'] text-xl text-white mb-3">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-white/60">
                      <span className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-white/40 transition-transform flex-shrink-0 ml-4 ${
                      expandedJob === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {expandedJob === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 space-y-4 border-t border-white/10 pt-6">
                        <p className="text-white/60 leading-relaxed">
                          {position.description}
                        </p>
                        <div>
                          <h4 className="text-white text-sm font-medium mb-3">Requirements:</h4>
                          <ul className="space-y-2">
                            {position.requirements.map((req, i) => (
                              <li key={i} className="text-white/60 text-sm flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button
                          onClick={() => handleApply(position.title)}
                          className="bg-white text-[#0A0A0A] hover:bg-white/90 mt-4"
                        >
                          Apply for this position
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {showApplicationForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowApplicationForm(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0E0E0E] border border-white/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"
            >
              <h3 className="font-['Playfair_Display'] text-2xl text-white mb-6">
                Apply for {selectedPosition}
              </h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                alert('Application submitted successfully! We will contact you soon.');
                setShowApplicationForm(false);
              }} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white/60 text-xs uppercase tracking-wider mb-2 block">
                      First Name
                    </Label>
                    <Input className="bg-white/5 border-white/20 text-white" />
                  </div>
                  <div>
                    <Label className="text-white/60 text-xs uppercase tracking-wider mb-2 block">
                      Last Name
                    </Label>
                    <Input className="bg-white/5 border-white/20 text-white" />
                  </div>
                </div>
                <div>
                  <Label className="text-white/60 text-xs uppercase tracking-wider mb-2 block">
                    Email
                  </Label>
                  <Input type="email" className="bg-white/5 border-white/20 text-white" />
                </div>
                <div>
                  <Label className="text-white/60 text-xs uppercase tracking-wider mb-2 block">
                    Phone
                  </Label>
                  <Input type="tel" className="bg-white/5 border-white/20 text-white" />
                </div>
                <div>
                  <Label className="text-white/60 text-xs uppercase tracking-wider mb-2 block">
                    Cover Letter
                  </Label>
                  <Textarea className="bg-white/5 border-white/20 text-white min-h-[150px]" />
                </div>
                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowApplicationForm(false)}
                    className="flex-1 border-white/20 text-white hover:bg-white/10"
                  >
                    Cancel
                  </Button>
                  <Button className="flex-1 bg-white text-[#0A0A0A] hover:bg-white/90">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Application
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}