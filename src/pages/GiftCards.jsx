import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Heart, Sparkles, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const giftAmounts = [100, 200, 300, 500, 750, 1000];

const occasions = [
  { icon: Heart, name: 'Birthday', color: 'text-pink-400' },
  { icon: Sparkles, name: 'Anniversary', color: 'text-amber-400' },
  { icon: Gift, name: 'Thank You', color: 'text-blue-400' },
  { icon: Send, name: 'Just Because', color: 'text-purple-400' },
];

export default function GiftCardsPage() {
  const [selectedAmount, setSelectedAmount] = useState(200);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedOccasion, setSelectedOccasion] = useState('Birthday');
  const [formData, setFormData] = useState({
    recipientName: '',
    recipientEmail: '',
    senderName: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmount = (value) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount;

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
              The Gift of Luxury
            </span>
            <h1 className="mt-4 font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-white">
              Gift Cards
            </h1>
            <p className="mt-6 text-white/50 max-w-xl mx-auto leading-relaxed">
              Give the gift of self-care. Our digital gift cards are the perfect 
              way to share the PrivéforYou experience with someone special.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gift Card Builder */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          {isSubmitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
              onClick={() => setIsSubmitted(false)}
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-[#0E0E0E] border border-white/20 rounded-2xl p-12 max-w-md mx-4 text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="w-20 h-20 mx-auto bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center mb-6"
                >
                  <Gift className="w-12 h-12 text-white" />
                </motion.div>
                <h3 className="font-['Playfair_Display'] text-3xl text-white mb-4">
                  Perfect!
                </h3>
                <p className="text-white/60 leading-relaxed mb-8">
                  Your ${finalAmount} luxury gift card has been sent to<br />
                  <span className="text-white/90">{formData.recipientEmail}</span>
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="w-full bg-white text-[#0A0A0A] hover:bg-white/90 py-6"
                >
                  Send Another Gift Card
                </Button>
              </motion.div>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Preview Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="order-2 lg:order-1"
              >
                <div className="sticky top-32">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl border border-white/20 p-8 lg:p-12 relative overflow-hidden shadow-2xl">
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
                      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                      
                      <div className="relative">
                        <div className="flex items-start justify-between mb-8">
                          <div>
                            <div className="font-['Playfair_Display'] text-sm text-white/60 tracking-[0.3em] uppercase">
                              Luxury Gift Card
                            </div>
                            <h3 className="font-['Playfair_Display'] text-3xl text-white mt-2">
                              PrivéforYou
                            </h3>
                          </div>
                          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <div className="w-10 h-10 bg-white/20 rounded-full" />
                          </div>
                        </div>

                        <div className="mb-12">
                          <div className="font-['Playfair_Display'] text-6xl text-white font-light">
                            ${finalAmount || 0}
                          </div>
                          <div className="text-white/40 text-xs tracking-[0.2em] uppercase mt-2">
                            Gift Value
                          </div>
                        </div>

                        <div className="space-y-3 mb-8">
                          <div className="flex items-center gap-3">
                            <div className="text-white/40 text-xs tracking-wider uppercase w-20">To:</div>
                            <div className="text-white/80 text-sm">{formData.recipientName || 'Recipient Name'}</div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="text-white/40 text-xs tracking-wider uppercase w-20">From:</div>
                            <div className="text-white/80 text-sm">{formData.senderName || 'Your Name'}</div>
                          </div>
                          {selectedOccasion && (
                            <div className="flex items-center gap-3">
                              <div className="text-white/40 text-xs tracking-wider uppercase w-20">For:</div>
                              <div className="text-white/80 text-sm">{selectedOccasion}</div>
                            </div>
                          )}
                        </div>

                        <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                          <div className="text-white/40 text-xs">
                            Valid for all services
                          </div>
                          <div className="text-white/40 text-xs">
                            No expiration
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-center text-sm text-white/40">
                    Preview of your gift card
                  </p>
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="order-1 lg:order-2"
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Amount Selection */}
                  <div>
                    <Label className="text-white text-sm mb-4 block">Select Amount</Label>
                    <div className="grid grid-cols-3 gap-3">
                      {giftAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => handleAmountSelect(amount)}
                          className={`py-4 text-sm transition-all duration-300 ${
                            selectedAmount === amount
                              ? 'bg-white text-[#0A0A0A]'
                              : 'border border-white/20 text-white/60 hover:bg-white/10'
                          }`}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Input
                        type="number"
                        placeholder="Custom amount"
                        value={customAmount}
                        onChange={(e) => handleCustomAmount(e.target.value)}
                        className="bg-transparent border-white/20 text-white placeholder:text-white/30"
                      />
                    </div>
                  </div>

                  {/* Occasion Selection */}
                  <div>
                    <Label className="text-white text-sm mb-4 block">Select Occasion</Label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {occasions.map((occasion) => (
                        <button
                          key={occasion.name}
                          type="button"
                          onClick={() => setSelectedOccasion(occasion.name)}
                          className={`py-4 flex flex-col items-center gap-2 transition-all duration-300 ${
                            selectedOccasion === occasion.name
                              ? 'bg-white text-[#0A0A0A]'
                              : 'border border-white/20 text-white/60 hover:bg-white/10'
                          }`}
                        >
                          <occasion.icon className={`w-5 h-5 ${
                            selectedOccasion === occasion.name ? 'text-[#0A0A0A]' : occasion.color
                          }`} />
                          <span className="text-xs">{occasion.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Recipient Info */}
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-white/60 text-xs uppercase tracking-wider mb-2 block">
                          Recipient Name
                        </Label>
                        <Input
                          value={formData.recipientName}
                          onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
                          placeholder="Their name"
                          className="bg-transparent border-white/20 text-white placeholder:text-white/30"
                        />
                      </div>
                      <div>
                        <Label className="text-white/60 text-xs uppercase tracking-wider mb-2 block">
                          Recipient Email
                        </Label>
                        <Input
                          type="email"
                          value={formData.recipientEmail}
                          onChange={(e) => setFormData({ ...formData, recipientEmail: e.target.value })}
                          placeholder="their@email.com"
                          className="bg-transparent border-white/20 text-white placeholder:text-white/30"
                        />
                      </div>
                    </div>
                    <div>
                      <Label className="text-white/60 text-xs uppercase tracking-wider mb-2 block">
                        Your Name
                      </Label>
                      <Input
                        value={formData.senderName}
                        onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                        placeholder="Your name"
                        className="bg-transparent border-white/20 text-white placeholder:text-white/30"
                      />
                    </div>
                    <div>
                      <Label className="text-white/60 text-xs uppercase tracking-wider mb-2 block">
                        Personal Message (Optional)
                      </Label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Add a personal message..."
                        className="bg-transparent border-white/20 text-white placeholder:text-white/30 min-h-[100px]"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isProcessing}
                    whileHover={{ scale: isProcessing ? 1 : 1.02 }}
                    whileTap={{ scale: isProcessing ? 1 : 0.98 }}
                    className="w-full py-4 bg-white text-[#0A0A0A] text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#0A0A0A]/20 border-t-[#0A0A0A] rounded-full animate-spin" />
                        Processing Payment...
                      </>
                    ) : (
                      `Purchase Gift Card — $${finalAmount || 0}`
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}