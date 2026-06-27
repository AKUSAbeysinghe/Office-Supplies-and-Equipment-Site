import React, { useState, useEffect } from "react";
import FurnitureBanner from "../../assets/Mains/Furniture/seating.jpg";

const SUBCATEGORY_IDS = {
  OFFICE_CHAIRS: 1,
  OFFICE_DESKS: 2,
  STORAGE_FILING: 3,
  CONFERENCE_MEETING: 4,
  RECEPTION_LOUNGE: 5,
};

const OfficeFurniture = () => {
  const [furnitureItems, setFurnitureItems] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchOfficeItems = async () => {
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost/officestuff_db/api/get_products.php");
      const data = await res.json();

      if (data.success && Array.isArray(data.data)) {
        const officeItems = data.data.filter(
          item => Number(item.category_id) === 1
        );
        setFurnitureItems(officeItems);
      } else {
        setError("Could not load office items");
      }
    } catch (e) {
      console.error(e);
      setError("Failed to fetch items. Please check if the backend is running.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOfficeItems();
  }, []);

  // Filtered sections
  const officeChairs = furnitureItems.filter(item => item.sub_category_id === SUBCATEGORY_IDS.OFFICE_CHAIRS);
  const officeDesks = furnitureItems.filter(item => item.sub_category_id === SUBCATEGORY_IDS.OFFICE_DESKS);
  const storageFiling = furnitureItems.filter(item => item.sub_category_id === SUBCATEGORY_IDS.STORAGE_FILING);
  const conferenceMeeting = furnitureItems.filter(item => item.sub_category_id === SUBCATEGORY_IDS.CONFERENCE_MEETING);
  const receptionLounge = furnitureItems.filter(item => item.sub_category_id === SUBCATEGORY_IDS.RECEPTION_LOUNGE);

  const OfficeCard = ({ item }) => {
    const whatsappNumber = "94712345678"; // ← Change this to your actual WhatsApp number (without +)
    
    const whatsappMessage = encodeURIComponent(
      `Hi, I'm interested in "${item.name}" (Rs. ${new Intl.NumberFormat("en-LK").format(item.price)}). Please send me more details.`
    );

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
        <div className="relative">
          <img
            src={
              item.image_url
                ? `http://localhost/officestuff_db/${item.image_url}`
                : "https://via.placeholder.com/600x400?text=Office+Furniture"
            }
            alt={item.name}
            className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/600x400?text=No+Image";
            }}
          />
          {item.popular && (
            <div className="absolute top-3 left-3 bg-[#8bb174] text-white text-xs font-semibold px-3 py-1 rounded-full">
              Best Seller
            </div>
          )}
          <div className="absolute top-3 right-3 bg-gray-900 bg-opacity-80 text-white text-sm font-bold px-4 py-1.5 rounded-full">
            Rs. {new Intl.NumberFormat("en-LK").format(item.price)}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
          <p className="mt-2 text-gray-600 text-sm line-clamp-2">
            {item.description || "Professional office furniture built for performance and comfort"}
          </p>

          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full py-3.5 px-6 
                       bg-[#0F172A] hover:bg-slate-800 
                       text-white font-semibold 
                       rounded-2xl transition-all duration-300 
                       flex items-center justify-center gap-2
                       shadow-sm hover:shadow-md active:scale-[0.985]"
          >
            View Details on WhatsApp
            <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    );
  };

  const Section = ({ title, subtitle, items, bgColor = "bg-[#fdfaf6]", id }) => (
    <div className={`${bgColor} py-16 px-4 sm:px-6 lg:px-8`} id={id}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
        {subtitle && <p className="mt-3 text-gray-600">{subtitle}</p>}
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.length === 0 ? (
          <p className="text-center text-gray-600 col-span-3 py-12">
            No items available in this category yet.
          </p>
        ) : (
          items.map((item) => <OfficeCard key={item.id} item={item} />)
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-[#fdfaf6]">
      {error && (
        <div className="p-4 bg-red-100 text-red-700 text-center font-medium">
          {error}
        </div>
      )}

      {isLoading && (
        <div className="text-center py-20 text-gray-600">Loading Office Collection...</div>
      )}

      {/* Hero Section */}
      <section className="w-full min-h-[500px] bg-[#F9F9FB] flex items-center justify-center px-6 py-12 md:px-16 lg:px-24">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col items-start space-y-6 max-w-xl">
            <span className="bg-[#FDF2E9] text-[#D97706] text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
              Furniture Collection
            </span>
           
            <h2 className="font-serif text-5xl md:text-6xl text-[#0F172A] leading-[1.1] font-semibold tracking-tight">
              Built to outlast <br />
              <span>deadlines.</span>
            </h2>
           
            <p className="text-slate-500 text-sm md:text-base leading-relaxed font-normal max-w-md">
              Ergonomic seating, height-adjustable desks, and modular storage designed for long days and longer careers.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="#office-collections"
                className="px-8 py-4 bg-[#0F172A] text-white font-semibold rounded-full hover:bg-slate-800 transition"
              >
                Shop Collection
              </a>
              <a
                href="/book-showroom"
                className="px-8 py-4 border border-[#0F172A] text-[#0F172A] font-semibold rounded-full hover:bg-[#0F172A] hover:text-white transition"
              >
                Book Showroom
              </a>
            </div>
          </div>

          <div className="w-full h-[350px] sm:h-[450px] lg:h-[520px] rounded-3xl overflow-hidden bg-slate-100">
            <img
              src={FurnitureBanner}
              alt="Premium office furniture collection"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Product Sections */}
      <Section
        title="Office Chairs"
        subtitle="Executive Chairs - Ergonomic Chairs - Task Chairs"
        items={officeChairs}
        id="office-collections"
        bgColor="bg-[#fdfaf6]"
      />

      <Section
        title="Office Desks"
        subtitle="Executive Desks - Computer Desks - Standing Desks"
        items={officeDesks}
        bgColor="bg-white"
      />

      <Section
        title="Storage & Filing"
        subtitle="Filing Cabinets - Bookcases - Storage Cabinets"
        items={storageFiling}
        bgColor="bg-[#fdfaf6]"
      />

      <Section
        title="Conference & Meeting Furniture"
        subtitle="Conference Tables - Meeting Chairs - Training Tables"
        items={conferenceMeeting}
        bgColor="bg-white"
      />

      <Section
        title="Reception & Lounge Furniture"
        subtitle="Reception Desks - Waiting Area Chairs - Sofas & Coffee Tables"
        items={receptionLounge}
        bgColor="bg-[#fdfaf6]"
      />

      {/* Why Choose Section */}
      <div className="bg-[#fdfaf6] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose Our Office Collection?
          </h2>
          <p className="mt-3 text-gray-600">Create a workspace that inspires productivity and professionalism</p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Ergonomic Design", description: "Furniture engineered to support long hours with maximum comfort and posture" },
              { title: "Professional Aesthetics", description: "Sleek, modern designs that enhance your workspace image" },
              { title: "Durable Construction", description: "Built with premium materials to withstand daily office use" },
              { title: "5-Year Warranty", description: "Long-term reliability and peace of mind for your business" },
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all text-center">
                <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
                <p className="mt-3 text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bulk Order CTA */}
      <section className="w-full bg-white px-6 py-12 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="w-full bg-[#F8F9FA] rounded-[32px] py-16 px-6 flex flex-col items-center justify-center text-center space-y-5">
            <h2 className="font-serif text-3xl md:text-4xl text-[#0F172A] font-normal tracking-tight">
              Bulk orders for your team?
            </h2>
           
            <p className="text-slate-400 text-sm md:text-base font-normal max-w-md leading-relaxed">
              Unlock trade pricing, dedicated account management, and custom workspace planning.
            </p>
           
            <div className="pt-3 flex flex-col sm:flex-row gap-4">
              <a 
                href="/book-showroom"
                className="bg-[#0F172A] text-white font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-slate-800 transition-colors shadow-sm whitespace-nowrap"
              >
                Book Showroom Visit
              </a>
              <a 
                href="tel:+94112345678"
                className="border border-[#0F172A] text-[#0F172A] font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-[#0F172A] hover:text-white transition-colors"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfficeFurniture;