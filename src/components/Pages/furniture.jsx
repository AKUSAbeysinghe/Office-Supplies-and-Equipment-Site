// import React, { useState, useEffect } from 'react';
// import FurnitureBanner from "../../assets/Mains/Furniture/seating.jpg";

// const SUBCATEGORY_IDS = {
//   OFFICE_CHAIRS: 10,
//   OFFICE_DESKS: 11,
//   STORAGE_FILING: 12,
//   CONFERENCE_MEETING: 13,
//   RECEPTION_LOUNGE: 14,
// };

// const OfficeFurnitureLanding = () => {
//   const [furnitureItems, setFurnitureItems] = useState([]);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   const [activeFilter, setActiveFilter] = useState("all");

//   const fetchOfficeItems = async () => {
//     setIsLoading(true);
//     setError("");

//     try {
//       const res = await fetch("http://localhost/home_furniture/api/get_products.php");
//       const data = await res.json();

//       if (data.success && Array.isArray(data.data)) {
//         const officeItems = data.data.filter(item => item.category_id === 1); // Office category
//         setFurnitureItems(officeItems);
//       } else {
//         setError("Could not load office items");
//       }
//     } catch (e) {
//       console.error(e);
//       setError("Failed to fetch items. Please check if the backend is running.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchOfficeItems();
//   }, []);

//   // Filter items based on active filter
//   const filteredItems = activeFilter === "all" 
//     ? furnitureItems 
//     : furnitureItems.filter(item => {
//         if (activeFilter === "chairs") return item.sub_category_id === SUBCATEGORY_IDS.OFFICE_CHAIRS;
//         if (activeFilter === "desks") return item.sub_category_id === SUBCATEGORY_IDS.OFFICE_DESKS;
//         if (activeFilter === "storage") return item.sub_category_id === SUBCATEGORY_IDS.STORAGE_FILING;
//         if (activeFilter === "conference") return item.sub_category_id === SUBCATEGORY_IDS.CONFERENCE_MEETING;
//         if (activeFilter === "reception") return item.sub_category_id === SUBCATEGORY_IDS.RECEPTION_LOUNGE;
//         return true;
//       });

//   const subcategoryFilters = [
//     { id: "all", label: "All Products" },
//     { id: "chairs", label: "Office Chairs" },
//     { id: "desks", label: "Desks" },
//     { id: "storage", label: "Storage & Filing" },
//     { id: "conference", label: "Conference & Meeting" },
//     { id: "reception", label: "Reception & Lounge" },
//   ];

//   return (
//     <>
//       {/* Error Message */}
//       {error && (
//         <div className="p-4 bg-red-100 text-red-700 text-center font-medium">
//           {error}
//         </div>
//       )}

//       {/* Feature / Hero Section */}
//       <section className="w-full min-h-[500px] bg-[#F9F9FB] flex items-center justify-center px-6 py-12 md:px-16 lg:px-24">
//         <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* Left Side: Editorial Copy */}
//           <div className="flex flex-col items-start space-y-6 max-w-xl">
//             <span className="bg-[#FDF2E9] text-[#D97706] text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
//               Furniture Collection
//             </span>
            
//             <h2 className="font-serif text-5xl md:text-6xl text-[#0F172A] leading-[1.1] font-semibold tracking-tight">
//               Built to outlast <br />
//               <span>deadlines.</span>
//             </h2>
            
//             <p className="text-slate-500 text-sm md:text-base leading-relaxed font-normal max-w-md">
//               Ergonomic seating, height-adjustable desks, and modular storage designed for long days and longer careers.
//             </p>

//             <div className="flex gap-4 pt-4">
//               <a
//                 href="#products"
//                 className="px-8 py-4 bg-[#0F172A] text-white font-semibold rounded-full hover:bg-slate-800 transition"
//               >
//                 Shop Collection
//               </a>
//               <a
//                 href="/book-showroom"
//                 className="px-8 py-4 border border-[#0F172A] text-[#0F172A] font-semibold rounded-full hover:bg-[#0F172A] hover:text-white transition"
//               >
//                 Book Showroom
//               </a>
//             </div>
//           </div>

//           {/* Right Side: Banner Image */}
//           <div className="w-full h-[350px] sm:h-[450px] lg:h-[520px] rounded-3xl overflow-hidden bg-slate-100">
//             <img
//               src={FurnitureBanner}
//               alt="Premium office furniture collection"
//               className="w-full h-full object-cover object-center"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Product Grid Section */}
//       <section id="products" className="w-full bg-white px-6 py-12 md:px-12 lg:px-24">
//         <div className="max-w-7xl mx-auto">
//           {/* Header + Filters */}
//           <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-6 mb-8 gap-6">
//             <div>
//               <h2 className="font-serif text-3xl font-medium text-[#0F172A] tracking-tight">
//                 Office Furniture
//               </h2>
//               <p className="text-slate-500 mt-1">Premium workspace solutions</p>
//             </div>

//             {/* Subcategory Filter Tabs */}
//             <div className="flex flex-wrap gap-2">
//               {subcategoryFilters.map((filter) => (
//                 <button
//                   key={filter.id}
//                   onClick={() => setActiveFilter(filter.id)}
//                   className={`px-5 py-2 text-sm font-medium rounded-full transition-colors whitespace-nowrap ${
//                     activeFilter === filter.id
//                       ? "bg-[#0F172A] text-white"
//                       : "bg-gray-100 text-slate-600 hover:bg-gray-200"
//                   }`}
//                 >
//                   {filter.label}
//                 </button>
//               ))}
//             </div>

//             <span className="text-slate-400 text-xs font-normal self-end md:self-auto">
//               {filteredItems.length} items
//             </span>
//           </div>

//           {/* Loading State */}
//           {isLoading && (
//             <div className="text-center py-20 text-gray-600">Loading premium office collection...</div>
//           )}

//           {/* Product Grid */}
//           {!isLoading && (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 lg:gap-x-8">
//               {filteredItems.length === 0 ? (
//                 <p className="col-span-3 text-center py-12 text-slate-500">
//                   No products found in this category.
//                 </p>
//               ) : (
//                 filteredItems.map((item) => (
//                   <div key={item.id} className="group cursor-pointer flex flex-col">
//                     {/* Product Image */}
//                     <div className="w-full aspect-[4/3] sm:aspect-square overflow-hidden rounded-2xl bg-slate-50 mb-4 relative">
//                       <img
//                         src={
//                           item.image_url
//                             ? `http://localhost/home_furniture/${item.image_url}`
//                             : "https://via.placeholder.com/600x400?text=Office+Furniture"
//                         }
//                         alt={item.name}
//                         className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
//                         onError={(e) => {
//                           e.target.src = "https://via.placeholder.com/600x400?text=No+Image";
//                         }}
//                       />
//                       {item.popular && (
//                         <div className="absolute top-3 left-3 bg-[#8bb174] text-white text-xs font-semibold px-3 py-1 rounded-full">
//                           Best Seller
//                         </div>
//                       )}
//                     </div>

//                     {/* Product Info */}
//                     <div className="flex flex-col space-y-1 px-1">
//                       <div className="flex justify-between items-baseline">
//                         <h3 className="text-[#0F172A] font-semibold text-[15px] tracking-tight group-hover:text-slate-700 transition-colors">
//                           {item.name}
//                         </h3>
//                         <span className="text-[#0F172A] font-semibold text-[15px]">
//                           Rs. {new Intl.NumberFormat("en-LK").format(item.price)}
//                         </span>
//                       </div>
//                       <p className="text-slate-400 text-xs font-normal leading-relaxed line-clamp-2">
//                         {item.description || "Professional office furniture built for performance and comfort"}
//                       </p>
//                     </div>

//                     {/* View Details Button */}
//                     <a
//                       href={`/product/${item.id}`}
//                       className="mt-4 text-xs font-medium text-[#0F172A] hover:underline inline-flex items-center gap-1 self-start"
//                     >
//                       View Details →
//                     </a>
//                   </div>
//                 ))
//               )}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Bulk Order CTA */}
//       <section className="w-full bg-white px-6 py-12 md:px-12 lg:px-24">
//         <div className="max-w-7xl mx-auto">
//           <div className="w-full bg-[#F8F9FA] rounded-[32px] py-16 px-6 flex flex-col items-center justify-center text-center space-y-5">
//             <h2 className="font-serif text-3xl md:text-4xl text-[#0F172A] font-normal tracking-tight">
//               Bulk orders for your team?
//             </h2>
            
//             <p className="text-slate-400 text-sm md:text-base font-normal max-w-md leading-relaxed">
//               Unlock trade pricing, dedicated account management, and custom workspace planning.
//             </p>
            
//             <div className="pt-3 flex flex-col sm:flex-row gap-4">
//               <a 
//                 href="/book-showroom"
//                 className="bg-[#0F172A] text-white font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-slate-800 transition-colors shadow-sm whitespace-nowrap"
//               >
//                 Book Showroom Visit
//               </a>
//               <a 
//                 href="tel:+94112345678"
//                 className="border border-[#0F172A] text-[#0F172A] font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-[#0F172A] hover:text-white transition-colors"
//               >
//                 Get Free Consultation
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default OfficeFurnitureLanding;



import React, { useState, useEffect } from "react";
import FurnitureBanner from "../../assets/Mains/Furniture/seating.jpg";

const SUBCATEGORY_IDS = {
  OFFICE_CHAIRS: 10,
  OFFICE_DESKS: 11,
  STORAGE_FILING: 12,
  CONFERENCE_MEETING: 13,
  RECEPTION_LOUNGE: 14,
};

const OfficeFurniture = () => {
  const [furnitureItems, setFurnitureItems] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchOfficeItems = async () => {
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost/home_furniture/api/get_products.php");
      const data = await res.json();

      if (data.success && Array.isArray(data.data)) {
        const officeItems = data.data.filter(item => item.category_id === 1);
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

  const OfficeCard = ({ item }) => (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
      <div className="relative">
        <img
          src={
            item.image_url
              ? `http://localhost/home_furniture/${item.image_url}`
              : "https://via.placeholder.com/600x400?text=Office+Furniture"
          }
          alt={item.name}
          className="w-full h-72 object-cover"
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
        <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
        <p className="mt-2 text-gray-600 text-sm line-clamp-2">
          {item.description || "Professional office furniture built for performance and comfort"}
        </p>
        <a
          href={`/product/${item.id}`}
          className="mt-6 w-full py-3.5 bg-[#8bb174] hover:bg-[#6fa85e] text-white font-semibold rounded-xl transition duration-300 block text-center"
        >
          View Details
        </a>
      </div>
    </div>
  );

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

      {/* === Rich Editorial Hero (from first version) === */}
      <section className="w-full min-h-[500px] bg-[#F9F9FB] flex items-center justify-center px-6 py-12 md:px-16 lg:px-24">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side: Editorial Copy */}
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

          {/* Right Side: Banner Image */}
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
            {/* Benefits cards remain the same */}
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

      {/* Bulk Order CTA (from first version) */}
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