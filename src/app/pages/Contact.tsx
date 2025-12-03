"use client";
import { useState, useRef, useEffect } from "react";
import { FaEnvelope, FaPhone, FaCalendarAlt, FaPaperPlane, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (!formRef.current) return;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_company: formData.company,
        from_phone: formData.phone,
        message: formData.message,
        to_email: 'info@theeentity.co.ke',
        reply_to: formData.email
      };

      // Send email using EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateParams
      );

      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: ""
      });

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen w-full py-16 px-4 relative overflow-hidden" id="contact">
      {/* Minimal Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Contact Our Team
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          </div>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Discuss your project with our solutions team. We'll respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-4">
            {/* Contact Card */}
            <div className="backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 bg-gradient-to-b from-white/5 to-transparent">
              <h3 className="text-lg font-semibold text-white mb-4">Contact Details</h3>
              
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center gap-3 p-3 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                  <div className="w-8 h-8 bg-blue-500/10 rounded flex items-center justify-center">
                    <FaEnvelope className="text-blue-400 text-sm" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Email</p>
                    <p className="text-white text-sm font-medium">info@theeentity.co.ke</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 p-3 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                  <div className="w-8 h-8 bg-blue-500/10 rounded flex items-center justify-center">
                    <FaPhone className="text-blue-400 text-sm" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Phone</p>
                    <p className="text-white text-sm font-medium">+254 708 889016</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                  <div className="w-8 h-8 bg-blue-500/10 rounded flex items-center justify-center">
                    <FaMapMarkerAlt className="text-blue-400 text-sm" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Location</p>
                    <p className="text-white text-sm font-medium">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 bg-gradient-to-b from-white/5 to-transparent text-center">
              <h3 className="text-base font-semibold text-white mb-2">Quick Connect</h3>
              <p className="text-gray-400 text-xs mb-4">
                Schedule a 30-minute discovery call with our team
              </p>
              <button 
                onClick={scrollToContact}
                className="w-full bg-blue-900 text-white font-medium py-2.5 rounded-lg hover:bg-blue-800 transition-all duration-300 border border-blue-600 text-sm"
              >
                <div className="flex items-center justify-center gap-2">
                  <FaCalendarAlt className="text-blue-400 text-sm" />
                  <span>Book Call</span>
                </div>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 bg-gradient-to-b from-white/5 to-transparent">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-500/10 rounded flex items-center justify-center border border-blue-500/20">
                  <FaPaperPlane className="text-blue-400 text-sm" />
                </div>
                <h3 className="text-lg font-semibold text-white">Project Inquiry</h3>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500/30">
                  <p className="text-green-400 text-sm font-medium">
                    ✓ Message sent successfully. We'll respond within 24 hours.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30">
                  <p className="text-red-400 text-sm font-medium">
                    ✗ Failed to send message. Please try again or email us directly.
                  </p>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-white text-xs font-medium mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full name"
                      className="w-full px-3 py-2.5 bg-white/5 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-blue-500/40 focus:bg-white/10 transition-all duration-300"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-white text-xs font-medium mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="work@email.com"
                      className="w-full px-3 py-2.5 bg-white/5 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-blue-500/40 focus:bg-white/10 transition-all duration-300"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {/* Company Field */}
                  <div>
                    <label className="block text-white text-xs font-medium mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="w-full px-3 py-2.5 bg-white/5 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-blue-500/40 focus:bg-white/10 transition-all duration-300"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-white text-xs font-medium mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                      className="w-full px-3 py-2.5 bg-white/5 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-blue-500/40 focus:bg-white/10 transition-all duration-300"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-white text-xs font-medium mb-1.5">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project requirements, timeline, and goals..."
                    rows={4}
                    className="w-full px-3 py-2.5 bg-white/5 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-blue-500/40 focus:bg-white/10 transition-all duration-300 resize-none"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-medium py-2.5 rounded-lg transition-all duration-300 text-sm border ${
                    isSubmitting 
                      ? 'bg-blue-900/50 text-blue-400 border-blue-600/30 cursor-not-allowed'
                      : 'bg-blue-900 text-white hover:bg-blue-800 border-blue-600'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-3 h-3 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <FaPaperPlane className="text-sm" />
                      </>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Stats Footer */}
        <div className="text-center mt-12">
          <div className="border-t border-blue-500/20 pt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { value: "24h", label: "Response Time", color: "blue-400" },
                { value: "100%", label: "Confidential", color: "blue-300" },
                { value: "50+", label: "Projects", color: "blue-400" },
                { value: "∞", label: "Support", color: "blue-300" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-xl font-semibold text-${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-6">
              We'll work closely with you to develop the optimal solution for your business
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}