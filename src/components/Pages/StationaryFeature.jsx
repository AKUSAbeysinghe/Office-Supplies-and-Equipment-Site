import React, { useState, useEffect } from "react";

const Gaming = () => {
  const [gamingItems, setGamingItems] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const whatsappNumber = "94712345678"; // ← CHANGE TO YOUR REAL NUMBER

  // Fetch Products
  const fetchGamingData = async () => {
    setIsLoading(true);
    setError("");

    try {
      // Fetch Products
      const productRes = await fetch("http://localhost/officestuff_db/api/get_products.php");
      const productData = await productRes.json();

      if (productData.success && Array.isArray(productData.data)) {
        const filteredProducts = productData.data.filter(
          item => Number(item.category_id) === 5  // Gaming Category
        );
        setGamingItems(filteredProducts);
      }

      // Fetch Subcategories for Gaming (category_id = 5)
      const subRes = await fetch("http://localhost/officestuff_db/api/get_subcategories.php?category_id=5");
      const subData = await subRes.json();

      if (subData.success && Array.isArray(subData.data)) {
        setSubcategories(subData.data);
      }

    } catch (e) {
      console.error(e);
      setError("Failed to load gaming products. Please check backend.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGamingData();
  }, []);

  // Group products by subcategory
  const groupedProducts = subcategories.map(sub => ({
    ...sub,
    products: gamingItems.filter(
      item => Number(item.sub_category_id) === Number(sub.id)
    )
  })).filter(group => group.products.length > 0); // Only show sections with products

  const GamingCard = ({ item }) => {
    const whatsappMessage = encodeURIComponent(
      `Hi, I'm interested in "${item.name}" (Rs. ${new Intl.NumberFormat("en-LK").format(item.price)}). Please send more details.`
    );
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
      <div className="group bg-[#0a0f1c] border border-gray-800 rounded-3xl overflow-hidden hover:border-[#4d61fc] transition-all duration-300 hover:-translate-y-1">
        <div className="relative h-72 bg-gradient-to-b from-[#1a2338] to-[#0a0f1c] flex items-center justify-center overflow-hidden">
          <img
            src={
              item.image_url
                ? `http://localhost/officestuff_db/${item.image_url}`
                : "https://via.placeholder.com/600x400?text=Gaming"
            }
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => (e.target.src = "https://via.placeholder.com/600x400?text=No+Image")}
          />

          {item.popular && (
            <div className="absolute top-4 left-4 bg-[#4d61fc] text-white text-xs font-bold px-4 py-1.5 rounded-full">
              Best Seller
            </div>
          )}

          <div className="absolute top-4 right-4 bg-black/80 text-white text-sm font-bold px-4 py-1.5 rounded-full">
            Rs. {new Intl.NumberFormat("en-LK").format(item.price)}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3 group-hover:text-[#4d61fc] transition-colors line-clamp-2">
            {item.name}
          </h3>

          <p className="text-gray-400 text-sm line-clamp-3 mb-5">
            {item.description || "High-performance gaming equipment."}
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 bg-[#4d61fc] hover:bg-[#5a71ff] text-white font-semibold rounded-2xl transition-all flex items-center justify-center gap-2"
          >
            Inquire on WhatsApp →
          </a>
        </div>
      </div>
    );
  };

  const Section = ({ title, subtitle, items }) => (
    <div className="py-16 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            {title}
          </h2>
          {subtitle && <p className="mt-3 text-gray-400 text-lg">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {items.length === 0 ? (
            <p className="col-span-full text-center text-gray-500 py-12">
              No products available yet.
            </p>
          ) : (
            items.map((item) => <GamingCard key={item.id} item={item} />)
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-4">GAMING</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Ultimate gaming gear for performance and victory
          </p>
        </div>
      </section>

      {error && (
        <div className="p-4 bg-red-900/50 text-red-400 text-center">{error}</div>
      )}

      {isLoading && (
        <div className="text-center py-20 text-gray-400 text-xl">
          Loading Gaming Gear...
        </div>
      )}

      {/* Dynamic Subcategory Sections */}
      {!isLoading && groupedProducts.length > 0 ? (
        groupedProducts.map((group) => (
          <Section
            key={group.id}
            title={group.name}
            subtitle={group.description || ""}
            items={group.products}
          />
        ))
      ) : (
        !isLoading && (
          <div className="text-center py-20 text-gray-400">
            No gaming products available at the moment.
          </div>
        )
      )}

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-[#4d61fc] to-[#3b4ed9] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Upgrade Your Setup?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Get personalized recommendations from our gaming experts
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hi,%20I%20want%20gaming%20recommendations!`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black font-semibold px-10 py-4 rounded-2xl hover:bg-gray-100 transition text-lg"
          >
            Get Expert Help →
          </a>
        </div>
      </section>
    </>
  );
};

export default Gaming;