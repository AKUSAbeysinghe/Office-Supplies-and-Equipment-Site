import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (API call, emailjs, etc.)
    alert("Thank you! We'll get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-[#F9F9FB] min-h-screen">
      {/* Hero Header */}
      <section className="pt-24 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <span className="bg-[#FDF2E9] text-[#D97706] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded">
            Get In Touch
          </span>
          
          <h1 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-[#0F172A] leading-[1.05] mt-6">
            Let's start a conversation
          </h1>
          
          <p className="mt-6 text-slate-600 text-lg max-w-xl mx-auto">
            Have questions about our products or need help building your ideal workspace? 
            We're here to help.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <h2 className="font-serif italic text-3xl text-[#0F172A] mb-8">Send us a message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 bg-slate-50 border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 bg-slate-50 border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 bg-slate-50 border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all"
                  placeholder="Product Inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-5 py-4 bg-slate-50 border border-transparent rounded-3xl focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all resize-y"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0F172A] text-white font-medium py-4 rounded-2xl hover:bg-slate-800 transition-colors text-base mt-4"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="font-serif italic text-2xl text-[#0F172A] mb-6">Get in touch directly</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FDF2E9] text-[#D97706] rounded-2xl flex items-center justify-center text-xl">✉️</div>
                  <div>
                    <p className="font-medium text-slate-900">Email</p>
                    <a href="mailto:hello@moderna.com" className="text-slate-600 hover:text-slate-900 transition-colors">hello@moderna.com</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FDF2E9] text-[#D97706] rounded-2xl flex items-center justify-center text-xl">📞</div>
                  <div>
                    <p className="font-medium text-slate-900">Phone</p>
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FDF2E9] text-[#D97706] rounded-2xl flex items-center justify-center text-xl">📍</div>
                  <div>
                    <p className="font-medium text-slate-900">Visit Us</p>
                    <p className="text-slate-600">
                      Studio 12, Design District<br />
                      Mumbai, Maharashtra 400001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-3xl p-8">
              <h4 className="font-medium text-lg mb-5">Quick Links</h4>
              <div className="space-y-4">
                <a href="/about" className="block text-slate-700 hover:text-[#0F172A] transition-colors">→ About Us</a>
                <a href="/collections" className="block text-slate-700 hover:text-[#0F172A] transition-colors">→ Shop Collections</a>
                <a href="#" className="block text-slate-700 hover:text-[#0F172A] transition-colors">→ Track Your Order</a>
              </div>
            </div>

            {/* WhatsApp Floating Style */}
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-600 text-white px-6 py-4 rounded-2xl hover:bg-green-700 transition-colors w-fit"
            >
              <span className="text-2xl">💬</span>
              <div>
                <p className="font-medium">Chat on WhatsApp</p>
                <p className="text-sm opacity-90">Instant Support</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}