import React from 'react';
import WorkWave from "../assets/Mains/Work & Weave.jpg";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-[#F9F9FB] flex items-center justify-center px-6 py-12 md:px-16 lg:px-24">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="flex flex-col items-start space-y-6 max-w-xl">
          {/* Tag */}
          <span className="bg-[#FDF2E9] text-[#D97706] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
            The New Professional
          </span>

          {/* Main Heading */}
          <h1 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-[#0F172A] leading-[1.1] font-semibold tracking-tight">
            Work better, <br />
            <span className="not-italic font-medium">beautifully.</span>
          </h1>

          {/* Subtext */}
          <p className="text-slate-500 text-base md:text-lg leading-relaxed font-normal">
            Curated equipment for high-performance teams. From ergonomic seating to precision writing instruments.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4 pt-4 w-full sm:w-auto">
            {/* Shop Collection - Navigates to Collections Page */}
            <a 
              href="/collections" 
              className="bg-[#0F172A] text-white font-medium text-sm px-8 py-3.5 rounded-full hover:bg-slate-800 transition-colors shadow-sm whitespace-nowrap inline-block"
            >
              Shop Collection
            </a>

            {/* For Business - Opens WhatsApp */}
            <a 
              href="https://wa.me/1234567890" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-slate-200 text-[#0F172A] font-medium text-sm px-8 py-3.5 rounded-full hover:bg-slate-50 transition-colors whitespace-nowrap inline-block"
            >
              For Business
            </a>
          </div>
        </div>

        {/* Right Side: Showcase Image */}
        <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-sm">
          <img 
            src={WorkWave}
            alt="Modern minimal workspace setup" 
            className="w-full h-full object-cover object-center"
          />
        </div>

      </div>
    </section>
  );
}