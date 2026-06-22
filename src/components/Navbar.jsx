import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 px-6 py-4 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Section: Logo & Nav Links */}
        <div className="flex items-center space-x-10">
          {/* Logo */}
          <a href="/" className="font-serif italic text-2xl font-semibold tracking-wide text-slate-900">
            Moderna.
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-[15px] font-medium text-slate-500">
            <a href="/furniture" className="hover:text-slate-900 transition-colors">Furniture</a>
            <a href="/tech" className="hover:text-slate-900 transition-colors">Tech</a>
            <a href="/stationary" className="hover:text-slate-900 transition-colors">Writing</a>
            <a href="/solutions" className="hover:text-slate-900 transition-colors">Solutions</a>
          </div>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <a 
            href="https://instagram.com/moderna" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 transition-colors"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.07 3.355.245 1.068 2.533.893 6.231.837 7.51.818 8.016.818 12c0 3.984.019 4.49.075 5.769.175 3.698 2.462 5.986 6.16 6.161 1.28.057 1.69.072 4.949.072 3.259 0 3.668-.014 4.948-.072 3.698-.175 5.986-2.462 6.161-6.161.057-1.28.072-1.69.072-4.949 0-3.259-.014-3.668-.072-4.948-.175-3.698-2.462-5.986-6.161-6.161C15.668.014 15.259 0 12 0z"/>
              <path d="M12 5.838c-3.403 0-6.162 2.76-6.162 6.162 0 3.403 2.76 6.163 6.162 6.163 3.403 0 6.162-2.76 6.162-6.163 0-3.403-2.76-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4 2.21 0 4 1.791 4 4 0 2.21-1.79 4-4 4z"/>
              <circle cx="18" cy="6" r="1.5"/>
            </svg>
          </a>

          <a 
            href="https://linkedin.com/company/moderna" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 transition-colors"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          <a 
            href="https://facebook.com/moderna" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 transition-colors"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          <a 
            href="https://x.com/moderna" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 transition-colors"
            aria-label="X (Twitter)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25l-7.584 8.467-7.584-8.467H2.25l9.18 12.21L2.25 21.75h3.78l6.36-7.512 6.36 7.512h3.78L12.75 12.21 21.75 2.25z"/>
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-100 space-y-4 flex flex-col text-slate-600 font-medium">
          <a href="/furniture" className="hover:text-slate-900">Furniture</a>
          <a href="/tech" className="hover:text-slate-900">Tech</a>
          <a href="/stationary" className="hover:text-slate-900">Writing</a>
          <a href="/solutions" className="hover:text-slate-900">Solutions</a>

          <hr className="border-gray-100" />

          {/* Social Icons in Mobile Menu */}
          <div className="flex items-center justify-center gap-8 pt-4">
            <a href="https://instagram.com/moderna" target="_blank" rel="noopener noreferrer">IG</a>
            <a href="https://linkedin.com/company/moderna" target="_blank" rel="noopener noreferrer">LI</a>
            <a href="https://facebook.com/moderna" target="_blank" rel="noopener noreferrer">FB</a>
            <a href="https://x.com/moderna" target="_blank" rel="noopener noreferrer">X</a>
          </div>
        </div>
      )}
    </nav>
  );
}