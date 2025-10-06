// src/pages/HomePage.jsx
import React from "react";
import Hero from "../component/AboutHero.jsx";
// import Features from "../component/Featured.jsx";
import Who from "../component/who.jsx";
import AnimatedText from "../component/animatednames.jsx";
import AboutAgri from '../component/AboutAgricultureServices.jsx';
import AgricultureSmarta from "../component/AgricultureSmarta.jsx";
// import AgricultureServices from "../component/AgricultureServices.jsx";
// import ProductCategories from "../component/ProductCategories.jsx";
// import ImageGallery from "../component/images.jsx";
import Testimonials from "../component/testinonials.jsx";
// import LogoStrip from "../component/LogoStrip.jsx";
// import FarmSection from "../component/what.jsx";
import Farming from "../component/farming.jsx";
import AgriculturalBanner from "../component/smarta.jsx";
// import BlogSection from "../component/BlogPostsSection.jsx";

const AboutPage = () => {
    return (
        <div>
            <Hero />
            <Who />
            <AnimatedText />
            <AboutAgri />
            <AgricultureSmarta/>
            <Farming/>
            <AgriculturalBanner/>
            <Testimonials/>
        </div>
    );
};

export default AboutPage;
