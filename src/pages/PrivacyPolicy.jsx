import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Users } from 'lucide-react';

const highlights = [
  { icon: Shield, title: 'Data Protection', text: 'Your information is encrypted and securely stored' },
  { icon: Eye, title: 'Transparency', text: 'We are clear about what data we collect and why' },
  { icon: Lock, title: 'Your Control', text: 'You have full control over your personal information' },
  { icon: Users, title: 'No Selling', text: 'We never sell your data to third parties' },
];

const sections = [
  {
    title: '1. Information We Collect',
    content: 'We collect information you provide directly, including name, email, phone number, appointment preferences, and payment information. We also collect usage data when you interact with our website and services, including IP address, browser type, and pages visited.',
  },
  {
    title: '2. How We Use Your Information',
    content: 'We use your information to provide and improve our services, process bookings and payments, communicate with you about appointments and promotions, personalize your experience, and ensure the security of our platform. We may also use aggregated data for analytics.',
  },
  {
    title: '3. Information Sharing',
    content: 'We do not sell your personal information. We may share information with service providers who help us operate our business (payment processors, email services), with your consent for specific purposes, when required by law, or to protect our rights and safety.',
  },
  {
    title: '4. Cookies and Tracking',
    content: 'We use cookies and similar technologies to remember your preferences, analyze site traffic, and improve functionality. You can control cookie settings in your browser, though some features may not work properly if cookies are disabled.',
  },
  {
    title: '5. Data Security',
    content: 'We implement industry-standard security measures including encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
  },
  {
    title: '6. Your Rights',
    content: 'You have the right to access, correct, or delete your personal information. You can opt out of marketing communications, request data portability, and object to certain processing. Contact us to exercise these rights.',
  },
  {
    title: '7. Data Retention',
    content: 'We retain your information for as long as your account is active or as needed to provide services. We may retain certain information for legal or business purposes even after account closure.',
  },
  {
    title: '8. Children\'s Privacy',
    content: 'Our services are not intended for individuals under 18. We do not knowingly collect information from children. If we become aware of such collection, we will delete it promptly.',
  },
  {
    title: '9. Third-Party Links',
    content: 'Our website may contain links to third-party sites. We are not responsible for their privacy practices. We encourage you to read their privacy policies before providing any information.',
  },
  {
    title: '10. California Privacy Rights',
    content: 'California residents have additional rights under CCPA including the right to know what personal information is collected, the right to deletion, and the right to opt out of sales (we do not sell personal information).',
  },
  {
    title: '11. International Users',
    content: 'If you are accessing our services from outside the United States, please note that your information may be transferred to and stored in the U.S. By using our services, you consent to such transfer.',
  },
  {
    title: '12. Changes to This Policy',
    content: 'We may update this privacy policy periodically. Changes will be posted on this page with an updated date. Continued use of our services after changes constitutes acceptance of the updated policy.',
  },
];

export default function PrivacyPolicyPage() {
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
              Your Privacy Matters
            </span>
            <h1 className="mt-4 font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-white">
              Privacy Policy
            </h1>
            <p className="mt-6 text-white/60 leading-relaxed">
              Last updated: January 6, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto bg-white/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white/60" />
                </div>
                <h3 className="text-white text-sm font-medium mb-2">{item.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-white/70 leading-relaxed">
              At PrivéforYou, we respect your privacy and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
            </p>
          </motion.div>

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
            <h3 className="text-white text-lg mb-4">Questions About Privacy?</h3>
            <p className="text-white/60 mb-4">
              If you have questions or concerns about our privacy practices, please contact us:
            </p>
            <div className="text-white/80 space-y-2">
              <p>Email: privacy@priveforyou.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Address: 123 Luxury Avenue, Beverly Hills, CA 90210</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}