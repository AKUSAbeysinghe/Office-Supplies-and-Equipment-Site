import React from 'react';

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
              src="https://images.unsplash.com/photo-1542601906990-b4d3a1a6d3e9" 
              alt="Sustainable workspace" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "92%", label: "Materials sourced responsibly" },
              { number: "68%", label: "Lower carbon footprint than industry average" },
              { number: "15", label: "Years average product lifespan" },
              { number: "8", label: "Countries with ethical partners" }
            ].map((stat, i) => (
              <div key={i} className="bg-[#F9F9FB] p-8 rounded-3xl">
                <div className="text-5xl md:text-6xl font-semibold text-[#0F172A] font-serif">
                  {stat.number}
                </div>
                <p className="mt-3 text-slate-600 text-sm md:text-base leading-tight">{stat.label}</p>
              </div>
            ))}
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
              icon: "🌱"
            },
            {
              title: "Ethical Production",
              desc: "All our partners are audited for fair wages, safe working conditions, and no child labor.",
              icon: "🤝"
            },
            {
              title: "Circular Design",
              desc: "Products designed for longevity, repairability, and eventual recycling or responsible disposal.",
              icon: "♻️"
            },
            {
              title: "Carbon Conscious",
              desc: "We offset 100% of our shipping emissions and invest in reforestation projects.",
              icon: "🌍"
            },
            {
              title: "Transparency",
              desc: "Every product page includes a detailed sustainability profile and supply chain story.",
              icon: "📋"
            },
            {
              title: "Local Impact",
              desc: "Supporting small workshops and artisans in India and across Asia.",
              icon: "🏠"
            }
          ].map((initiative, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-6">{initiative.icon}</div>
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