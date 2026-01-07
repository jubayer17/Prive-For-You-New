import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";

const categories = [
  {
    name: 'Booking & Appointments',
    faqs: [
      {
        question: 'How do I book an appointment?',
        answer: 'You can book through our website by clicking "Book Now" on any service, or call our concierge team at (555) 123-4567. Members also have access to our mobile app for priority booking.',
      },
      {
        question: 'What is your cancellation policy?',
        answer: 'We require 24 hours notice for cancellations to avoid a 50% service fee. Same-day cancellations will incur the full service charge. Members receive more flexible cancellation terms.',
      },
      {
        question: 'Can I request a specific stylist or artist?',
        answer: 'Absolutely! When booking, you can select your preferred team member. We recommend booking in advance as our specialists often have full schedules.',
      },
      {
        question: 'Do you offer same-day appointments?',
        answer: 'While we recommend booking in advance, we do accommodate same-day appointments based on availability. Members receive priority for last-minute bookings.',
      },
    ],
  },
  {
    name: 'Services & Pricing',
    faqs: [
      {
        question: 'What services do you offer?',
        answer: 'We offer a comprehensive range of services including hair styling and coloring, makeup artistry, skincare treatments, bridal packages, and specialized spa services. Each service is customized to your needs.',
      },
      {
        question: 'Do you offer bridal packages?',
        answer: 'Yes! We specialize in bridal beauty with packages that include trials, day-of services, and options for bridal parties. Contact our bridal coordinator for custom quotes.',
      },
      {
        question: 'What products do you use?',
        answer: 'We exclusively use premium, cruelty-free products from leading luxury brands. All products are carefully selected for quality and performance.',
      },
      {
        question: 'Are consultations included?',
        answer: 'Yes, complimentary consultations are included with most services to ensure we understand your vision and create the perfect look for you.',
      },
    ],
  },
  {
    name: 'Membership',
    faqs: [
      {
        question: 'What are the membership benefits?',
        answer: 'Members enjoy priority booking, exclusive discounts, complimentary services, flexible cancellations, and access to members-only events and products.',
      },
      {
        question: 'How much does membership cost?',
        answer: 'We offer three tiers: Silver ($199/month), Gold ($399/month), and Platinum ($799/month). Each tier includes different benefits and service credits.',
      },
      {
        question: 'Can I cancel my membership?',
        answer: 'Yes, memberships can be cancelled at any time with 30 days notice. Unused service credits are valid for 90 days after cancellation.',
      },
    ],
  },
  {
    name: 'Policies & Information',
    faqs: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, PayPal, and gift cards. Members can also charge services to their account.',
      },
      {
        question: 'Do you offer gift cards?',
        answer: 'Yes! Digital gift cards can be purchased online and are delivered instantly via email. Perfect for any occasion.',
      },
      {
        question: 'What is your parking situation?',
        answer: 'We offer complimentary valet parking for all clients at our Beverly Hills location. Street parking is also available nearby.',
      },
      {
        question: 'Are your services suitable for all hair types?',
        answer: 'Absolutely. Our team is trained in working with all hair types and textures. We celebrate diversity and specialize in personalized approaches.',
      },
    ],
  },
];

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (categoryIndex, faqIndex) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenFaq(openFaq === key ? null : key);
  };

  const filteredCategories = categories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.faqs.length > 0);

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
              Questions & Answers
            </span>
            <h1 className="mt-4 font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-white">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-white/60 leading-relaxed">
              Find answers to common questions about our services, policies, and more
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12"
          >
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
              <Input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/40 pl-12 py-6"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="font-['Playfair_Display'] text-2xl text-white mb-6">
                {category.name}
              </h2>

              <div className="space-y-3">
                {category.faqs.map((faq, faqIndex) => {
                  const key = `${categoryIndex}-${faqIndex}`;
                  const isOpen = openFaq === key;

                  return (
                    <div
                      key={faqIndex}
                      className="border border-white/10 overflow-hidden hover:border-white/20 transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(categoryIndex, faqIndex)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                      >
                        <span className="text-white pr-4 font-medium">{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-white/60 transition-transform flex-shrink-0 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-5 text-white/60 leading-relaxed border-t border-white/10 pt-5">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/60">No results found for "{searchQuery}"</p>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-24 bg-[#0E0E0E]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-['Playfair_Display'] text-3xl text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-white/60 mb-8">
            Our team is here to help. Contact us anytime.
          </p>
          <a
            href="/Support"
            className="inline-block px-8 py-4 bg-white text-[#0A0A0A] text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-all"
          >
            Contact Support
          </a>
        </div>
      </section>
    </div>
  );
}