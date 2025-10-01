import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Hero from './component/hero.jsx';
import Features from './component/Featured.jsx';
import Who from './component/who.jsx';
import AnimatedText from './component/animatednames.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Hero />
    <Features />
    <Who />
    <AnimatedText />
  </StrictMode>
);
