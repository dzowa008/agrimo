import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Hero from './component/hero.jsx';
import Features from './component/Featured.jsx';
import Who from './component/who.jsx';
import AnimatedText from './component/animatednames.jsx';
import AgricultureServices from './component/AgricultureServices.jsx';
import ProductCategories from './component/ProductCategories.jsx';
import ImageGallery from './component/images.jsx';
import Testimonials from './component/testinonials.jsx';
import LogoStrip from './component/LogoStrip.jsx';
import FarmSection from './component/what.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Hero />
    <Features />
    <Who />
    <AnimatedText />
    <AgricultureServices />
    <ProductCategories/>
    <ImageGallery />
    <Testimonials />
    <LogoStrip/>
    <FarmSection/>
  </StrictMode>
);
