import React from "react";


import Hero from "../Hero";
import CategoryGrid from "../CategoryGrid";
import Collections from "../CollectionsSection";
import WhyChoose from "./WhyChoose";
import TestimonialsSection from "./Testimonials";
import CTABanner from "../CTABanner";

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