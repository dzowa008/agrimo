import React from 'react';
import '../styles/LogoStrip.css';

// Placeholder Images - Replace with your actual logo paths
import logoOrganicRice from '../assets/rice.png';
import logoFarm from '../assets/farm.png';
import logoFarmFresh from '../assets/fresh.png';
import logoFood from '../assets/food.png';
import logoEcoProduct from '../assets/eco.png';
import logoTractor from '../assets/tracor.png';

const logos = [
  { src: logoOrganicRice, alt: 'Organic Rice Logo' },
  { src: logoFarm, alt: 'Farm Logo' },
  { src: logoFarmFresh, alt: 'Farm Fresh Logo' },
  { src: logoFood, alt: 'Food Logo' },
  { src: logoEcoProduct, alt: 'Eco Product Logo' },
  { src: logoTractor, alt: 'Tractor Logo' },
  // Optionally, repeat logos to make a longer strip and ensure smooth looping
  { src: logoOrganicRice, alt: 'Organic Rice Logo' },
  { src: logoFarm, alt: 'Farm Logo' },
  { src: logoFarmFresh, alt: 'Farm Fresh Logo' },
  { src: logoFood, alt: 'Food Logo' },
  { src: logoEcoProduct, alt: 'Eco Product Logo' },
  { src: logoTractor, alt: 'Tractor Logo' },
];

const LogoStrip = () => {
  return (
    <section className="logo-strip-section">
      <div className="container py-5">
        <div className="logo-strip-outer">
          <div className="logo-strip-inner">
            {logos.map((logo, index) => (
              <div key={index} className="logo-item">
                <img src={logo.src} alt={logo.alt} className="img-fluid" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;