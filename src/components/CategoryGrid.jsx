import React from 'react';
import Seating from "../assets/Mains/Seating.jpg";
import TeachStuff from "../assets/Mains/TechStuff.jpg";
import Stationary from "../assets/Mains/Stationary.jpg";

const categories = [
  {
    id: 1,
    title: 'Executive Seating',
    count: '128 Products',
    imageUrl: Seating,
    alt: 'Modern ergonomic office chair'
  },
  {
    id: 2,
    title: 'Desktop Essentials',
    count: '42 Products',
    imageUrl: TeachStuff,
    alt: 'Mechanical keyboard and mouse'
  },
  {
    id: 3,
    title: 'Precision Writing',
    count: '86 Products',
    imageUrl: Stationary,
    alt: 'Premium fountain pens stacked on notebooks'
  }
];

export default function CategoryGrid() {
  return (
    <section className="w-full bg-white px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group cursor-pointer flex flex-col space-y-4">
              
              {/* Card Image Container */}
              <div className="w-full aspect-square overflow-hidden rounded-2xl bg-slate-50">
                <img
                  src={category.imageUrl}
                  alt={category.alt}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Card Meta Content */}
              <div className="flex flex-col space-y-0.5 px-1">
                <h3 className="text-[#0F172A] font-semibold text-base tracking-tight group-hover:text-slate-700 transition-colors">
                  {category.title}
                </h3>
                <p className="text-slate-400 text-xs font-normal">
                  {category.count}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}