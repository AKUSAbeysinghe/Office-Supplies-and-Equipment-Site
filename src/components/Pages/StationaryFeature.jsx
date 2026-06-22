import React from 'react';
import StationaryBanner from "../../assets/Mains/Stationary/Stationary.jpg";

const stationeryProducts = [
  {
    id: 1,
    name: 'Montblanc Meisterstück',
    description: 'Platinum-plated fountain pen, resin barrel.',
    price: '$435',
    imageUrl: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=800',
    alt: 'Montblanc Meisterstück fountain pen'
  },
  {
    id: 2,
    name: 'Leatherbound Journal',
    description: 'Italian full-grain leather, 192 pages.',
    price: '$68',
    imageUrl: 'https://images.unsplash.com/photo-1544947958-9e3b4b0f1f1e?auto=format&fit=crop&q=80&w=800',
    alt: 'Premium leather notebook journal'
  },
  {
    id: 3,
    name: 'Rhodia Dot Pad',
    description: 'Premium 80gsm paper, dot grid, A5.',
    price: '$18',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800',
    alt: 'Rhodia dot grid notepad on wooden desk'
  }
];

export default function StationeryFeature() {
  return (
    <>
      {/* Feature Section */}
      <section className="w-full min-h-[500px] bg-[#F9F9FB] flex items-center justify-center px-6 py-12 md:px-16 lg:px-24">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <div className="flex flex-col items-start space-y-6 max-w-xl">
            {/* Accent Badge */}
            <span className="bg-[#FDF2E9] text-[#D97706] text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
              Stationery
            </span>

            {/* Title Header */}
            <h2 className="font-serif text-5xl md:text-6xl text-[#0F172A] leading-[1.1] font-semibold tracking-tight">
              A page worth writing <br />
              <span>on.</span>
            </h2>

            {/* Description Copy */}
            <p className="text-slate-500 text-sm md:text-base leading-relaxed font-normal max-w-md">
              Precision-engineered writing instruments and the paper goods, ink, and accessories that complete the set.
            </p>
          </div>

          {/* Right Side: Media Framing */}
          <div className="w-full h-[350px] sm:h-[450px] lg:h-[520px] rounded-3xl overflow-hidden bg-slate-100">
            <img 
              src={StationaryBanner}
              alt="Premium fountain pens stacked cleanly on physical journals" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="w-full bg-white px-6 py-12 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="flex items-baseline justify-between border-b border-gray-100 pb-6 mb-8">
            <h2 className="font-serif text-3xl font-medium text-[#0F172A] tracking-tight">
              All Products
            </h2>
            <span className="text-slate-400 text-xs font-normal">
              6 items
            </span>
          </div>

          {/* 3-Column Product Catalog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12 lg:gap-x-8">
            {stationeryProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer flex flex-col">
                
                {/* Product Image Window */}
                <div className="w-full aspect-[4/3] sm:aspect-square overflow-hidden rounded-2xl bg-slate-50 mb-4">
                  <img
                    src={product.imageUrl}
                    alt={product.alt}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                {/* Product Info Metadata */}
                <div className="flex flex-col space-y-1 px-1">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-[#0F172A] font-semibold text-[15px] tracking-tight group-hover:text-slate-700 transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-[#0F172A] font-semibold text-[15px]">
                      {product.price}
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs font-normal leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-white px-6 py-12 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="w-full bg-[#F8F9FA] rounded-[32px] py-16 px-6 flex flex-col items-center justify-center text-center space-y-5">
            
            <h2 className="font-serif text-3xl md:text-4xl text-[#0F172A] font-normal tracking-tight">
              Bulk orders for your team?
            </h2>
            
            <p className="text-slate-400 text-sm md:text-base font-normal max-w-md leading-relaxed">
              Custom engraving, branded notebooks, and corporate gifting solutions.
            </p>
            
            <div className="pt-3">
              <button className="bg-[#0F172A] text-white font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-slate-800 transition-colors shadow-sm whitespace-nowrap">
                Explore Business Solutions
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}