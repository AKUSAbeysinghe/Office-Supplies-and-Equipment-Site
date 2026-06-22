import React from 'react';

export default function WhyModernaSection() {
  return (
    <section className="w-full bg-[#F9F9FB] py-20 md:py-28 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif italic text-4xl md:text-5xl text-[#0F172A]">
            Designed differently.
          </h2>
          <p className="text-slate-600 mt-4 text-lg">Here’s what sets us apart.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 01-2 2H7a2 2 0 01-2 2v16m14 0h-4m-6 0H5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v6m0 0l-3-3m3 3l3-3" />
                </svg>
              ),
              title: "Timeless Design",
              desc: "Pieces that will look as good in 10 years as they do today."
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2" />
                </svg>
              ),
              title: "Ergonomic Excellence",
              desc: "Thoughtfully engineered for comfort during long work sessions."
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ),
              title: "Sustainable Craft",
              desc: "Responsibly sourced materials and ethical production."
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2" />
                </svg>
              ),
              title: "Built to Last",
              desc: "Repairable, modular, and made with premium materials."
            }
          ].map((item, i) => (
            <div key={i} className="text-center group">
              <div className="mx-auto w-20 h-20 flex items-center justify-center text-[#0F172A] mb-6 transition-transform group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}