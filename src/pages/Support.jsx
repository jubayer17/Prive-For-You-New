import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ChevronDown, Send, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const faqs = [
  {
    question: 'How do I book an appointment?',
    answer: 'You can book through our website, mobile app, or by calling our concierge team. Members enjoy priority booking with same-day availability.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We require 24 hours notice for cancellations. Late cancellations may incur a 50% service fee. Members receive more flexible cancellation terms.',
  },
  {
    question: 'Do you offer bridal packages?',
    answer: 'Yes! We offer comprehensive bridal packages including trials, day-of services, and packages for the entire bridal party. Contact our bridal coordinator for custom quotes.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and gift cards. Members can also charge services to their account.',
  },
  {
    question: 'Are your products cruelty-free?',
    answer: 'Absolutely. We are committed to using only cruelty-free, ethically sourced products from premium brands.',
  },
  {
    question: 'Can I purchase gift cards online?',
    answer: 'Yes, digital gift cards can be purchased through our Gift Cards page and are delivered instantly via email.',
  },
];

const contactInfo = [
  { icon: MapPin, label: 'Address', value: '123 Luxury Avenue, Beverly Hills, CA 90210' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
  { icon: Mail, label: 'Email', value: 'hello@priveforyou.com' },
  { icon: Clock, label: 'Hours', value: 'Mon-Sat: 9AM-8PM | Sun: 10AM-6PM' },
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-24 lg:pt-32">
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
              We're Here to Help
            </span>
            <h1 className="mt-4 font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-white">
              Support & Contact
            </h1>
            <p className="mt-6 text-white/50 max-w-xl mx-auto leading-relaxed">
              Have questions? Our dedicated support team is available to assist 
              you with anything you need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-[#0E0E0E] border border-white/10 text-center hover:bg-white/5 hover:border-white/20 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 mx-auto bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-all">
                  <info.icon className="w-5 h-5 text-white/60" />
                </div>
                <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
                  {info.label}
                </span>
                <p className="mt-2 text-sm text-white/80">
                  {info.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQs */}
      <section className="py-16 md:py-24 bg-[#0E0E0E]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl text-white mb-8">
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-['Playfair_Display'] text-xl text-white mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-white/60 text-sm mb-6">
                    We'll get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-white/60 text-xs uppercase tracking-wider mb-2 block">
                        Your Name
                      </Label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Full name"
                        className="bg-transparent border-white/20 text-white placeholder:text-white/30"
                      />
                    </div>
                    <div>
                      <Label className="text-white/60 text-xs uppercase tracking-wider mb-2 block">
                        Email
                      </Label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="bg-transparent border-white/20 text-white placeholder:text-white/30"
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="text-white/60 text-xs uppercase tracking-wider mb-2 block">
                      Subject
                    </Label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) => setFormData({ ...formData, subject: value })}
                    >
                      <SelectTrigger className="bg-transparent border-white/20 text-white">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0E0E0E] border-white/20">
                        <SelectItem value="booking">Booking Inquiry</SelectItem>
                        <SelectItem value="services">Services Question</SelectItem>
                        <SelectItem value="membership">Membership</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-white/60 text-xs uppercase tracking-wider mb-2 block">
                      Message
                    </Label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help?"
                      className="bg-transparent border-white/20 text-white placeholder:text-white/30 min-h-[150px]"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-white text-[#0A0A0A] text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl text-white mb-8">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-white/10 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                    >
                      <span className="text-white pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-white/40 transition-transform flex-shrink-0 ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-5 text-sm text-white/50 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl text-white">
              Visit Our Flagship Location
            </h2>
            <p className="mt-4 text-white/50">
              Experience luxury in person at our Beverly Hills salon
            </p>
          </motion.div>

          <div className="aspect-[21/9] bg-[#0E0E0E] border border-white/10 overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.0897366648!2d-118.40148168478373!3d34.073516980601894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1635959562000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}