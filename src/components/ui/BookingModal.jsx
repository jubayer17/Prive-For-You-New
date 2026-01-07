import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Calendar, Clock, User, CreditCard, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const steps = ['Service', 'Date & Time', 'Details', 'Payment'];

export default function BookingModal({ isOpen, onClose, selectedService }) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    service: selectedService || '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
  });
  const [isComplete, setIsComplete] = useState(false);

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleClose = () => {
    setStep(0);
    setIsComplete(false);
    setFormData({
      service: '',
      date: '',
      time: '',
      name: '',
      email: '',
      phone: '',
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-xl bg-[#0E0E0E] border border-white/10 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Success State */}
          {isComplete ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-12 text-center"
            >
              <div className="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl text-white mb-4">
                Booking Confirmed
              </h3>
              <p className="text-white/60 text-sm mb-8">
                Thank you for choosing PrivéforYou. A confirmation has been sent to your email.
              </p>
              <Button
                onClick={handleClose}
                className="bg-white text-[#0A0A0A] hover:bg-white/90 px-8"
              >
                Close
              </Button>
            </motion.div>
          ) : (
            <>
              {/* Header */}
              <div className="p-8 pb-0">
                <h3 className="font-['Playfair_Display'] text-2xl text-white">
                  Book Your Experience
                </h3>
                <p className="mt-2 text-sm text-white/50">
                  Complete the steps below to secure your appointment
                </p>

                {/* Progress Steps */}
                <div className="mt-8 flex items-center gap-2">
                  {steps.map((s, i) => (
                    <React.Fragment key={s}>
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs transition-all ${
                          i <= step 
                            ? 'bg-white text-[#0A0A0A]' 
                            : 'bg-white/10 text-white/40'
                        }`}>
                          {i < step ? <Check className="w-4 h-4" /> : i + 1}
                        </div>
                        <span className={`hidden sm:block text-xs ${
                          i <= step ? 'text-white' : 'text-white/40'
                        }`}>
                          {s}
                        </span>
                      </div>
                      {i < steps.length - 1 && (
                        <div className={`flex-1 h-[1px] ${
                          i < step ? 'bg-white' : 'bg-white/10'
                        }`} />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <AnimatePresence mode="wait">
                  {step === 0 && (
                    <motion.div
                      key="service"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <Label className="text-white/60 text-xs uppercase tracking-wider">
                        Select Service
                      </Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                      >
                        <SelectTrigger className="bg-white/5 border-white/20 text-white hover:bg-white/10">
                          <SelectValue placeholder="Choose a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1A1A1A] border-white/20">
                          <SelectItem value="bridal" className="text-white hover:bg-white/10 focus:bg-white/10 focus:text-white">Bridal Elegance</SelectItem>
                          <SelectItem value="facial" className="text-white hover:bg-white/10 focus:bg-white/10 focus:text-white">Signature Facial</SelectItem>
                          <SelectItem value="hair" className="text-white hover:bg-white/10 focus:bg-white/10 focus:text-white">Hair Transformation</SelectItem>
                          <SelectItem value="spa" className="text-white hover:bg-white/10 focus:bg-white/10 focus:text-white">Luxury Spa Day</SelectItem>
                          <SelectItem value="makeup" className="text-white hover:bg-white/10 focus:bg-white/10 focus:text-white">Glamour Makeup</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>
                  )}

                  {step === 1 && (
                    <motion.div
                      key="datetime"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <Label className="text-white/80 text-sm font-medium">
                        Select Date & Time
                      </Label>
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div className="text-xs text-white/50 font-medium">Choose Date</div>
                          <div className="grid grid-cols-7 gap-1.5">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                              <div key={day} className="text-center text-xs text-white/40 font-medium py-1">
                                {day}
                              </div>
                            ))}
                            {Array.from({ length: 35 }, (_, i) => {
                              const date = i + 1;
                              const isSelected = formData.date === `2026-01-${String(date).padStart(2, '0')}`;
                              return date <= 31 ? (
                                <button
                                  key={i}
                                  onClick={() => setFormData({ ...formData, date: `2026-01-${String(date).padStart(2, '0')}` })}
                                  className={`aspect-square rounded-lg text-sm transition-all ${
                                    isSelected
                                      ? 'bg-white text-[#0A0A0A] font-medium'
                                      : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                                  }`}
                                >
                                  {date}
                                </button>
                              ) : (
                                <div key={i} />
                              );
                            })}
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="text-xs text-white/50 font-medium">Available Times</div>
                          <div className="grid grid-cols-2 gap-2">
                            {['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'].map((time) => {
                              const isSelected = formData.time === time;
                              const label = parseInt(time) < 12 ? `${time} AM` : `${parseInt(time) - 12 || 12}:00 PM`;
                              return (
                                <button
                                  key={time}
                                  onClick={() => setFormData({ ...formData, time })}
                                  className={`py-2.5 rounded-lg text-sm transition-all ${
                                    isSelected
                                      ? 'bg-white text-[#0A0A0A] font-medium'
                                      : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                                  }`}
                                >
                                  {label}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="details"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="space-y-2">
                        <Label className="text-white/60 text-xs uppercase tracking-wider flex items-center gap-2">
                          <User className="w-4 h-4" /> Full Name
                        </Label>
                        <Input
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-white/60 text-xs uppercase tracking-wider">
                          Email
                        </Label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-white/60 text-xs uppercase tracking-wider">
                          Phone
                        </Label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                        />
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="payment"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="p-4 bg-white/5 border border-white/10 space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">Service</span>
                          <span className="text-white capitalize">{formData.service || 'Not selected'}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">Date</span>
                          <span className="text-white">{formData.date || 'Not selected'}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">Time</span>
                          <span className="text-white">{formData.time || 'Not selected'}</span>
                        </div>
                        <div className="pt-3 border-t border-white/10 flex justify-between">
                          <span className="text-white/60">Deposit Required</span>
                          <span className="text-white font-medium">$50.00</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-white/60 text-xs uppercase tracking-wider flex items-center gap-2">
                          <CreditCard className="w-4 h-4" /> Card Number (Demo)
                        </Label>
                        <Input
                          placeholder="4242 4242 4242 4242"
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-white/60 text-xs uppercase tracking-wider">
                            Expiry
                          </Label>
                          <Input
                            placeholder="MM/YY"
                            className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-white/60 text-xs uppercase tracking-wider">
                            CVC
                          </Label>
                          <Input
                            placeholder="123"
                            className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-white/40 text-xs">
                        <Shield className="w-4 h-4" />
                        <span>Secure payment powered by SSL encryption</span>
                      </div>

                      {/* Payment Logos */}
                      <div className="flex items-center justify-center gap-4 pt-4 border-t border-white/10">
                        <div className="text-white/40 text-xs">Accepted:</div>
                        <div className="flex items-center gap-3">
                          <span className="text-white/60 text-sm font-medium">PayPal</span>
                          <span className="text-white/60 text-sm font-medium">SSLCommerz</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="p-8 pt-0 flex items-center justify-between gap-4">
                {step > 0 ? (
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Back
                  </Button>
                ) : (
                  <div />
                )}
                <Button
                  onClick={handleNext}
                  className="bg-white text-[#0A0A0A] hover:bg-white/90 px-8"
                >
                  {step === steps.length - 1 ? 'Confirm Booking' : 'Continue'}
                </Button>
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}