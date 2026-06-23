import React from 'react';
import CTA from "../assets/Mains/CTA.png";

export default function CorporateSupply() {
  return (
    <section className="w-full bg-[#0B1220] flex items-center justify-center px-6 py-16 md:px-16 lg:px-24">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Image Showcase */}
        <div className="w-full h-[320px] sm:h-[400px] lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={CTA}
            alt="Premium leather desk mat with corporate devices setup" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Right Side: Content Block */}
        <div className="flex flex-col items-start space-y-6 max-w-xl lg:pl-4">
          {/* Heading */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.15] font-light tracking-wide">
            Corporate Supply <br />
            <span className="italic font-normal">Reimagined.</span>
          </h2>

          {/* Subtext description */}
          <p className="text-slate-400 text-sm md:text-base leading-relaxed font-normal max-w-md">
            Unlock trade pricing, dedicated account management, and automated replenishment for your entire headquarters.
          </p>

          {/* Premium Animated Call To Action Link */}
          <div className="pt-4">
            <a 
              href="/about" 
              className="group inline-flex items-center space-x-2 text-[#E26D34] text-sm font-medium border-b-2 border-[#E26D34] pb-1 hover:text-[#f2824b] hover:border-[#f2824b] transition-all"
            >
              <span>Learn about Moderna for Business</span>
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}