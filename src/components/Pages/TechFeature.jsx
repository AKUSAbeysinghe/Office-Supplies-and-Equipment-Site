import React, { useState, useEffect } from "react";
import TechBanner from "../../assets/Mains/Tech/TechBanner.jpg";

const SUBCATEGORY_IDS = {
  COMPUTERS_LAPTOPS: 6,
  PRINTERS_SCANNERS: 7,
  COMMUNICATION_DEVICES: 8,
  NETWORKING_EQUIPMENT: 9,
  OFFICE_ACCESSORIES: 10,
};

const TechPage = () => {
  const [techItems, setTechItems] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const whatsappNumber = "94712345678"; // ← CHANGE THIS TO YOUR ACTUAL WHATSAPP NUMBER (without +)

  const fetchTechItems = async () => {
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost/officestuff_db/api/get_products.php");
      const data = await res.json();

      if (data.success && Array.isArray(data.data)) {
        const officeItems = data.data.filter(
          item => Number(item.category_id) === 2
        );
        setTechItems(officeItems);
      } else {
        setError("Could not load tech products");
      }
    } catch (e) {
      console.error(e);
      setError("Failed to fetch items. Please check if the backend is running.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTechItems();
  }, []);

  // Filter by subcategory
  const computersLaptops = techItems.filter(item => item.sub_category_id === SUBCATEGORY_IDS.COMPUTERS_LAPTOPS);
  const printersScanners = techItems.filter(item => item.sub_category_id === SUBCATEGORY_IDS.PRINTERS_SCANNERS);
  const communicationDevices = techItems.filter(item => item.sub_category_id === SUBCATEGORY_IDS.COMMUNICATION_DEVICES);
  const networkingEquipment = techItems.filter(item => item.sub_category_id === SUBCATEGORY_IDS.NETWORKING_EQUIPMENT);
  const officeAccessories = techItems.filter(item => item.sub_category_id === SUBCATEGORY_IDS.OFFICE_ACCESSORIES);

  const TechCard = ({ item }) => {
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
                : "https://via.placeholder.com/600x400?text=Tech+Product"
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
            {item.description || "Premium technology solution for modern workspaces"}
          </p>

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
          items.map((item) => <TechCard key={item.id} item={item} />)
        )}
      </div>
    </div>
  );

  // WhatsApp link for Book Showroom
  const bookShowroomWhatsApp = `https://wa.me/${whatsappNumber}?text=Hi,%20I%20would%20like%20to%20book%20a%20showroom%20visit.%20Please%20let%20me%20know%20available%20times.`;

  return (
    <div className="bg-[#fdfaf6]">
      {error && (
        <div className="p-4 bg-red-100 text-red-700 text-center font-medium">
          {error}
        </div>
      )}

      {isLoading && (
        <div className="text-center py-20 text-gray-600">Loading Tech Collection...</div>
      )}

      {/* Premium Editorial Hero */}
      <section className="w-full min-h-[500px] bg-[#F9F9FB] flex items-center justify-center px-6 py-12 md:px-16 lg:px-24">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col items-start space-y-6 max-w-xl">
            <span className="bg-[#FDF2E9] text-[#D97706] text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
              Technology
            </span>

            <h2 className="font-serif text-5xl md:text-6xl text-[#0F172A] leading-[1.1] font-semibold tracking-tight">
              The desktop,<br />
              <span>refined.</span>
            </h2>

            <p className="text-slate-500 text-sm md:text-base leading-relaxed font-normal max-w-md">
              Mechanical keyboards, precision mice, ultrawide monitors, and enterprise-grade networking — every device curated for maximum output.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="#tech-collections"
                className="px-8 py-4 bg-[#0F172A] text-white font-semibold rounded-full hover:bg-slate-800 transition"
              >
                Shop Collection
              </a>
              <a
                href={bookShowroomWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-[#0F172A] text-[#0F172A] font-semibold rounded-full hover:bg-[#0F172A] hover:text-white transition"
              >
                Book Showroom
              </a>
            </div>
          </div>

          <div className="w-full h-[350px] sm:h-[450px] lg:h-[520px] rounded-3xl overflow-hidden bg-slate-100">
            <img
              src={TechBanner}
              alt="Premium tech setup with mechanical keyboard and ultrawide monitor"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Product Sections */}
      <Section
        title="Computers & Laptops"
        subtitle="Desktop Computers - Laptops - Mini PCs - Workstations"
        items={computersLaptops}
        id="tech-collections"
        bgColor="bg-[#fdfaf6]"
      />

      <Section
        title="Printers & Scanners"
        subtitle="Inkjet Printers - Laser Printers - All-in-One Printers"
        items={printersScanners}
        bgColor="bg-white"
      />

      <Section
        title="Communication Devices"
        subtitle="IP Phones - Conference Phones - Headsets - Webcams"
        items={communicationDevices}
        bgColor="bg-[#fdfaf6]"
      />

      <Section
        title="Networking Equipment"
        subtitle="Routers - Switches - Access Points - Network Cables"
        items={networkingEquipment}
        bgColor="bg-white"
      />

      <Section
        title="Office Accessories & Peripherals"
        subtitle="Monitors - Keyboards - Mice - External Storage - UPS & Power Solutions"
        items={officeAccessories}
        bgColor="bg-[#fdfaf6]"
      />

      {/* Why Choose Tech Section */}
      <div className="bg-[#fdfaf6] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose Our Tech Solutions?
          </h2>
          <p className="mt-3 text-gray-600">Enterprise-grade performance for modern workspaces</p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Premium Performance", description: "Latest processors, high-refresh displays, and responsive peripherals" },
              { title: "Enterprise Reliability", description: "Durable hardware backed by solid warranties" },
              { title: "Seamless Integration", description: "Compatible with existing office infrastructure" },
              { title: "Expert Support", description: "Dedicated technical assistance and setup guidance" },
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
              Get enterprise pricing, custom configurations, dedicated support, and bulk deployment assistance.
            </p>
            
            <div className="pt-3 flex flex-col sm:flex-row gap-4">
              <a 
                href={bookShowroomWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
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

export default TechPage;