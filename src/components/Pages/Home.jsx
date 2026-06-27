import React from "react";


import Hero from "../Hero.jsx";
import CategoryGrid from "../CategoryGrid.jsx";
import Collections from "../CollectionsSection.jsx";
import WhyChoose from "./WhyChoose.jsx";
import TestimonialsSection from "./Testimonials.jsx";
import CTABanner from "../CTABanner.jsx";

const Home = () => {
  return (
    <>
      <Hero/>
      <CategoryGrid/>
      <Collections/>
      <WhyChoose/>
      <TestimonialsSection/>
      <CTABanner/>
      
    </>
  );
};

export default Home;