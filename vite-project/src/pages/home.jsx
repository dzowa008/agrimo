// src/pages/HomePage.jsx
import React from "react";
import Hero from "../component/hero.jsx";
import Features from "../component/Featured.jsx";
import Who from "../component/who.jsx";
import AnimatedText from "../component/animatednames.jsx";
import AgricultureServices from "../component/AgricultureServices.jsx";
import ProductCategories from "../component/ProductCategories.jsx";
import ImageGallery from "../component/images.jsx";
import Testimonials from "../component/testinonials.jsx";
import LogoStrip from "../component/LogoStrip.jsx";
import FarmSection from "../component/what.jsx";
import Farming from "../component/farming.jsx";
import AgriculturalBanner from "../component/smarta.jsx";
import BlogSection from "../component/BlogPostsSection.jsx";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Who />
      <AnimatedText />
      <AgricultureServices />
      <ProductCategories />
      <ImageGallery />
      <Testimonials />
      <LogoStrip />
      <FarmSection />
      <Farming />
      <AgriculturalBanner />
      <BlogSection />
    </div>
  );
};

export default HomePage;
