import React from 'react';
import '../styles/AgriculturalBanner.css'; // Assuming you save the CSS in this file

const AgriculturalBanner = () => {
  return (
    <div className="agricultural-banner-container">
      <div className="agricultural-banner-overlay">
        <div className="agricultural-banner-content">
          <div className="agricultural-banner-icon">
            {/* You can replace this with an actual SVG icon for a plant/hand */}
            🌱
          </div>
          <div className="agricultural-banner-text">
            <p>We're popular leader in</p>
            <p>agriculture market globally</p>
          </div>
          <button className="agricultural-banner-button">
            Discover More <span>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgriculturalBanner;