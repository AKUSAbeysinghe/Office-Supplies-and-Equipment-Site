import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-gray-100 px-6 py-16 md:px-16 lg:px-24">
      <div className="max-w-7xl w-full mx-auto flex flex-col space-y-12 md:flex-row md:space-y-0 md:justify-between items-start">
        
        {/* Left Section: Brand & Copyright */}
        <div className="flex flex-col space-y-3 max-w-sm">
          {/* Logo */}
          <span className="font-serif italic text-2xl font-semibold tracking-wide text-slate-900">
            Moderna.
          </span>
          {/* Copyright Tagline */}
          <p className="text-slate-400 text-[13px] leading-relaxed font-normal">
            Providing the foundations for modern work <br className="hidden sm:block" />
            since 2024. All rights reserved.
          </p>
        </div>

        {/* Right Section: Navigation Links Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-10 md:gap-x-16 lg:gap-x-24">
          
          {/* Column 1: Catalog */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[#0F172A] font-bold text-xs uppercase tracking-widest">
              Catalog
            </h4>
            <ul className="flex flex-col space-y-3 text-[14px] text-slate-400 font-normal">
              <li><a href="/furniture" className="hover:text-slate-900 transition-colors">Furniture</a></li>
              <li><a href="/tech" className="hover:text-slate-900 transition-colors">Tech</a></li>
              <li><a href="/stationary" className="hover:text-slate-900 transition-colors">Writing</a></li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[#0F172A] font-bold text-xs uppercase tracking-widest">
              Company
            </h4>
            <ul className="flex flex-col space-y-3 text-[14px] text-slate-400 font-normal">
              <li><a href="/solutions" className="hover:text-slate-900 transition-colors">Solutions</a></li>
              <li><a href="/Sustainability" className="hover:text-slate-900 transition-colors">Sustainability</a></li>
              <li><a href="/Careers" className="hover:text-slate-900 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="flex flex-col space-y-4 col-span-2 sm:col-span-1">
            <h4 className="text-[#0F172A] font-bold text-xs uppercase tracking-widest">
              Support
            </h4>
            <ul className="flex flex-col space-y-3 text-[14px] text-slate-400 font-normal">
              <li><a href="/privacy-policy" className="hover:text-slate-900 transition-colors">Privacy</a></li>
              <li><a href="/about" className="hover:text-slate-900 transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-slate-900 transition-colors">Contact</a></li>
            </ul>
          </div>

        </div>

      </div>
    </footer>
  );
}