import React from 'react';

export default function ContactPage() {
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
        <div className="max-w-2xl mx-auto">
          
          {/* Contact Info */}
          <div className="bg-white rounded-3xl p-10 md:p-16 shadow-sm">
            <h2 className="font-serif italic text-4xl text-[#0F172A] mb-10 text-center">
              Get in touch directly
            </h2>
            
            <div className="space-y-10">
              {/* Email */}
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#FDF2E9] text-[#0F172A] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2.01 2.01 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2" />
                  </svg>
                </div>
                <div className="pt-1">
                  <p className="font-medium text-slate-900 text-lg">Email</p>
                  <a href="mailto:hello@moderna.com" className="text-slate-600 hover:text-[#0F172A] transition-colors text-[17px]">
                    hello@moderna.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#FDF2E9] text-[#0F172A] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2 2 2 0 01-2-2 2 2 0 01-2-2 2 2 0 012-2 2 2 0 01-2-2 2 2 0 012-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 4.01V8" />
                  </svg>
                </div>
                <div className="pt-1">
                  <p className="font-medium text-slate-900 text-lg">Phone</p>
                  <a 
                    href="https://wa.me/919876543210" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-600 hover:text-[#0F172A] transition-colors text-[17px]"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Visit Us */}
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#FDF2E9] text-[#0F172A] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314-11.314z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="pt-1">
                  <p className="font-medium text-slate-900 text-lg">Visit Our Studio</p>
                  <p className="text-slate-600 text-[17px]">
                    Studio 12, Design District<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-12 bg-white rounded-3xl p-10 shadow-sm">
            <h4 className="font-medium text-xl mb-6 text-center">Quick Links</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <a href="/about" className="py-4 text-slate-700 hover:text-[#0F172A] transition-colors font-medium">About Us</a>
              <a href="/collections" className="py-4 text-slate-700 hover:text-[#0F172A] transition-colors font-medium">Shop Collections</a>
              <a href="#" className="py-4 text-slate-700 hover:text-[#0F172A] transition-colors font-medium">Track Order</a>
            </div>
          </div>

          {/* WhatsApp Button */}
          <div className="mt-12 flex justify-center">
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#0F172A] text-white px-8 py-5 rounded-3xl hover:bg-slate-800 transition-all duration-300 shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 8a2 2 0 01-2 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2" />
              </svg>
              <div>
                <p className="font-semibold">Chat with us on WhatsApp</p>
                <p className="text-sm opacity-75">Instant responses • Mon–Sat</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}