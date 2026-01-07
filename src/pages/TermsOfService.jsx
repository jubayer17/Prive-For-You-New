import React from 'react';
import { motion } from 'framer-motion';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing and using PrivéforYou services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.',
  },
  {
    title: '2. Services',
    content: 'PrivéforYou provides luxury beauty services including hair styling, makeup artistry, skincare treatments, and related services. All services are subject to availability and may be modified or discontinued at any time.',
  },
  {
    title: '3. Booking and Cancellations',
    content: 'Appointments must be booked in advance through our website, app, or by phone. Cancellations require 24 hours notice to avoid fees. Same-day cancellations or no-shows will incur the full service charge. Members may have different cancellation terms based on their membership tier.',
  },
  {
    title: '4. Payment Terms',
    content: 'Payment is due at the time of service unless you are a member with account privileges. We accept major credit cards, PayPal, and gift cards. All prices are subject to change without notice. Gratuities are at your discretion.',
  },
  {
    title: '5. Membership',
    content: 'Membership benefits and terms are outlined in your membership agreement. Memberships renew automatically unless cancelled with 30 days notice. Unused service credits expire according to the terms of your specific membership tier.',
  },
  {
    title: '6. Client Conduct',
    content: 'We expect all clients to treat our staff and facilities with respect. We reserve the right to refuse service to anyone who is disruptive, abusive, or violates our policies. Clients must be on time for appointments as late arrivals may result in shortened service time.',
  },
  {
    title: '7. Health and Safety',
    content: 'Please inform us of any allergies, sensitivities, or medical conditions that may affect your service. While we use professional products and techniques, individual results may vary. We are not liable for adverse reactions to products or services.',
  },
  {
    title: '8. Intellectual Property',
    content: 'All content on our website, app, and marketing materials is the property of PrivéforYou and protected by copyright laws. You may not reproduce, distribute, or create derivative works without our written permission.',
  },
  {
    title: '9. Liability',
    content: 'PrivéforYou is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the amount paid for the specific service in question.',
  },
  {
    title: '10. Photography and Marketing',
    content: 'We may photograph services for marketing purposes. By using our services, you consent to such use unless you explicitly opt out in writing. We respect your privacy and will not use images that identify you without your permission.',
  },
  {
    title: '11. Modifications to Terms',
    content: 'We reserve the right to modify these terms at any time. Changes will be posted on our website and are effective immediately upon posting. Continued use of our services constitutes acceptance of modified terms.',
  },
  {
    title: '12. Governing Law',
    content: 'These terms are governed by the laws of the State of California. Any disputes shall be resolved in the courts of Los Angeles County, California.',
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-24 lg:pt-32">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
              Legal
            </span>
            <h1 className="mt-4 font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-white">
              Terms of Service
            </h1>
            <p className="mt-6 text-white/60 leading-relaxed">
              Last updated: January 6, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-white/10 pb-8 last:border-0"
              >
                <h2 className="font-['Playfair_Display'] text-xl text-white mb-4">
                  {section.title}
                </h2>
                <p className="text-white/60 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-white/5 border border-white/10"
          >
            <h3 className="text-white text-lg mb-4">Questions About Our Terms?</h3>
            <p className="text-white/60 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="text-white/80 space-y-2">
              <p>Email: legal@priveforyou.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Address: 123 Luxury Avenue, Beverly Hills, CA 90210</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}