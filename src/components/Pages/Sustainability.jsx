import React from 'react';
import Sustainability from "../../assets/Mains/About.jpg";

export default function SustainabilityPage() {
  return (
    <div className="bg-[#F9F9FB] min-h-screen">
      {/* Hero Header */}
      <section className="pt-24 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <span className="bg-[#FDF2E9] text-[#D97706] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded">
            Our Commitment
          </span>
          
          <h1 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-[#0F172A] leading-[1.05] mt-6">
            Beautiful work,<br />responsible tomorrow.
          </h1>
          
          <p className="mt-8 text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
            We believe luxury and sustainability are not opposites — they are inseparable.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8">
            <h2 className="font-serif italic text-4xl md:text-5xl text-[#0F172A] leading-tight">
              Design with conscience.
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-[17px]">
              <p>
                At Moderna., sustainability is not a marketing claim — it's the foundation of how we select, 
                design, and deliver every product.
              </p>
              <p>
                We partner with makers who share our values: responsible sourcing, ethical production, 
                and long-lasting quality that reduces consumption.
              </p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-sm aspect-[16/10] bg-gray-200">
            <img 
              src={Sustainability}
              alt="Sustainable workspace" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24">
        <div className="text-center mb-16">
          <h2 className="font-serif italic text-4xl md:text-5xl text-[#0F172A]">
            How We Make a Difference
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Responsible Materials",
              desc: "We prioritize FSC-certified wood, recycled aluminum, organic cotton, and low-VOC finishes.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-11 h-11 text-[#0F172A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.5v12m-6-9h12m-9 9h6" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 3.5l5 5 5-5" />
                </svg>
              )
            },
            {
              title: "Ethical Production",
              desc: "All our partners are audited for fair wages, safe working conditions, and no child labor.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-11 h-11 text-[#0F172A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 01-5.356-1.857M17 20H7m5-2v2m-4-4v4m8-4v4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                </svg>
              )
            },
            {
              title: "Circular Design",
              desc: "Products designed for longevity, repairability, and eventual recycling or responsible disposal.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-11 h-11 text-[#0F172A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.058 11H1M12 3v2m9 9H15m-6 0H4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7 7-7" />
                </svg>
              )
            },
            {
              title: "Carbon Conscious",
              desc: "We offset 100% of our shipping emissions and invest in reforestation projects.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-11 h-11 text-[#0F172A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1v-5m10-10l2 2m-2-2v10a1 1 0 01-1 1v-5" />
                  <circle cx="12" cy="12" r="3" strokeWidth={1.6} />
                </svg>
              )
            },
            {
              title: "Transparency",
              desc: "Every product page includes a detailed sustainability profile and supply chain story.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-11 h-11 text-[#0F172A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2 2 2 0 01-2-2 2 2 0 012-2 2 2 0 01-2-2 2 2 0 012-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6" />
                </svg>
              )
            },
            {
              title: "Local Impact",
              desc: "Supporting small workshops and artisans in India and across Asia.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-11 h-11 text-[#0F172A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 01-2-2H7a2 2 0 01-2 2v16m14 0h2m-2 0h-5m-4 0H3" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v-4m0 0L8 9m4-2l4 2" />
                </svg>
              )
            }
          ].map((initiative, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl hover:shadow-lg transition-all duration-300 group">
              <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-2xl bg-[#F9F9FB] group-hover:bg-[#F1F1F5] transition-colors">
                {initiative.icon}
              </div>
              <h3 className="text-2xl font-semibold text-[#0F172A] mb-3">{initiative.title}</h3>
              <p className="text-slate-600 leading-relaxed">{initiative.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Statement */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-24">
        <div className="bg-[#0F172A] text-white rounded-3xl p-12 md:p-20 text-center">
          <h2 className="font-serif italic text-4xl md:text-5xl leading-tight max-w-3xl mx-auto">
            We don't just create beautiful workspaces.<br />
            We create them with respect for the planet.
          </h2>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/collections" 
              className="bg-white text-[#0F172A] font-medium px-10 py-4 rounded-full hover:bg-slate-100 transition-colors"
            >
              Shop Sustainable Collection
            </a>
            <a 
              href="/about" 
              className="border border-white/50 text-white font-medium px-10 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              Our Story
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}