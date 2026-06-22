import React from 'react';

const testimonials = [
  {
    quote: "Moderna. transformed our entire office. The quality and attention to detail is unmatched.",
    name: "Priya Sharma",
    role: "CEO, Lumora Studio",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    quote: "Finally found furniture that looks beautiful and actually supports long working hours.",
    name: "Arjun Rao",
    role: "Founder, Vertex",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  },
  {
    quote: "The writing instruments feel like an extension of my thought process. Obsessed.",
    name: "Meera Nair",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-white py-20 md:py-28 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-[#FDF2E9] text-[#D97706] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
            Voices
          </span>
          <h2 className="font-serif italic text-4xl md:text-5xl text-[#0F172A] mt-4">
            Loved by those who create.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-[#F9F9FB] p-8 md:p-10 rounded-3xl"
            >
              <div className="text-5xl text-slate-300 mb-6">“</div>
              
              <p className="text-slate-700 text-[17px] leading-relaxed mb-8">
                {testimonial.quote}
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-2xl object-cover"
                />
                <div>
                  <p className="font-medium text-[#0F172A]">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}