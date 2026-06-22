import React from 'react';

const collections = [
  {
    title: "Furniture",
    subtitle: "Ergonomic & Timeless",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    link: "/furniture",
    count: "42 products"
  },
  {
    title: "Tech",
    subtitle: "Productivity Tools",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661",
    link: "/tech",
    count: "28 products"
  },
  {
    title: "Writing",
    subtitle: "Precision Instruments",
    image: "https://images.unsplash.com/photo-1513475382585-d6a8c9d4a0e4", // Fixed
    link: "/stationary",
    count: "19 products"
  },
  {
    title: "Solutions",
    subtitle: "For Teams & Offices",
    image: "https://images.unsplash.com/photo-1497366811353-6870744ef2e7", // Fixed
    link: "/solutions",
    count: "35 products"
  }
];

export default function CollectionsSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <span className="bg-[#FDF2E9] text-[#D97706] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
              Discover
            </span>
            <h2 className="font-serif italic text-4xl md:text-5xl text-[#0F172A] mt-4">
              Thoughtfully Curated Collections
            </h2>
          </div>
          <a 
            href="/shop" 
            className="mt-6 md:mt-0 text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all text-slate-600 hover:text-slate-900"
          >
            Browse All Products 
            <span className="text-xl leading-none">→</span>
          </a>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <a 
              key={index}
              href={collection.link}
              className="group relative rounded-3xl overflow-hidden h-[420px] shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <img 
                src={collection.image} 
                alt={collection.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-serif italic text-3xl md:text-4xl tracking-tight">
                      {collection.title}
                    </h3>
                    <p className="text-slate-200 mt-1 text-sm">{collection.subtitle}</p>
                  </div>
                  <span className="text-xs bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                    {collection.count}
                  </span>
                </div>
              </div>

              {/* Hover Indicator */}
              <div className="absolute top-8 right-8 w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}