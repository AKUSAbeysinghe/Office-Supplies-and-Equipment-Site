import React from 'react';
import AboutPic from "../../assets/Mains/Work & Weave.jpg";

export default function AboutPage() {
  return (
    <div className="bg-[#F9F9FB] min-h-screen">
      {/* About Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <span className="bg-[#FDF2E9] text-[#D97706] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded">
            Our Story
          </span>
          
          <h1 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-[#0F172A] leading-[1.05] mt-6 max-w-4xl mx-auto">
            Creating spaces where <span className="not-italic font-medium">work feels human again.</span>
          </h1>
          
          <p className="mt-8 text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Moderna. was founded on the belief that beautiful, thoughtful design can transform how we work.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8">
            <h2 className="font-serif italic text-4xl md:text-5xl text-[#0F172A] leading-tight">
              From a small studio<br />to a movement.
            </h2>
            
            <div className="space-y-6 text-slate-600 leading-relaxed text-[17px]">
              <p>
                In 2022, we started with one simple question: Why does most workplace equipment feel cold, 
                impersonal, and uninspiring?
              </p>
              <p>
                We believe work should feel good. That’s why we curate and design furniture, tools, and 
                technology that combine exceptional ergonomics with timeless aesthetics.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="rounded-3xl overflow-hidden shadow-sm aspect-[4/3] lg:aspect-square bg-gray-200">
            <img 
              src={AboutPic}
              alt="Modern minimalist studio" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="font-serif italic text-4xl md:text-5xl text-[#0F172A]">Our Principles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Thoughtful Craftsmanship",
                desc: "Every product is selected or designed with obsessive attention to material quality and human experience."
              },
              {
                title: "Timeless Aesthetics",
                desc: "We design for decades, not trends. Clean lines, natural materials, and quiet confidence define our collection."
              },
              {
                title: "Human First",
                desc: "Ergonomics and wellbeing are at the center of everything we do. Beautiful tools that support your best work."
              }
            ].map((value, i) => (
              <div key={i} className="bg-[#F9F9FB] p-8 rounded-3xl">
                <div className="w-12 h-12 bg-[#0F172A] text-white rounded-2xl flex items-center justify-center text-xl font-semibold mb-6">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-semibold text-[#0F172A] mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Closing */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24">
        <div className="bg-[#0F172A] text-white rounded-3xl p-12 md:p-20 text-center">
          <h2 className="font-serif italic text-4xl md:text-5xl leading-tight max-w-3xl mx-auto">
            We don't just sell furniture.<br />
            We help you build a better way of working.
          </h2>
          
          <button className="mt-12 bg-white text-[#0F172A] font-medium px-10 py-4 rounded-full hover:bg-slate-100 transition-colors">
            Explore Our Collection
          </button>
        </div>
      </section>
    </div>
  );
}