// src/pages/HomePage.jsx
import React from "react";
import Hero from "../component/Faqhero.jsx";
// import Features from "../component/Featured.jsx";
import Who from "../component/who.jsx";
import AnimatedText from "../component/animatednames.jsx";
import AboutAgri from '../component/AboutAgricultureServices.jsx';
import AgricultureSmarta from "../component/AgricultureSmarta.jsx";
// import AgricultureServices from "../component/AgricultureServices.jsx";
// import ProductCategories from "../component/ProductCategories.jsx";
// import ImageGallery from "../component/images.jsx";
import Testimonials from "../component/testinonials.jsx";
import Farming from "../component/farming.jsx";
import AgriculturalBanner from "../component/smarta.jsx";
import FAQSection from "../component/faqask.jsx";

const FaqPage = () => {
    return (
        <div>
            <Hero />
            {/* <Who />
            <AnimatedText />
            <AboutAgri />
            <AgricultureSmarta/>
            <Farming/>
            <AgriculturalBanner/>
            <Testimonials/> */}
            <FAQSection/>
        </div>
    );
};

export default FaqPage;
