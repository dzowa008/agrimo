import React from 'react';
import { CheckCircleFill } from 'react-bootstrap-icons';
import '../styles/FarmAboutUs.css'; 

const FarmAboutUs = () => {
  // Replace with your actual image path or use an import
  const imageUrl = "../src/assets/Aboutusimgae.jpg";

  return (
    <div className="farm-about-us-section">
      
      {/* Main Flex Container */}
      <div className="farm-about-us-container">
        
        {/* Left Column (Image) */}
        <div className="image-column">
          <img
            src={imageUrl}
            alt="Happy farmers"
            className="farm-hero-image"
          />
        </div>
        
        {/* Right Column (Content) */}
        <div className="content-column">
          <div className="about-us-content">
            
            {/* "About Us" Tag */}
            <div className="about-us-tag">
              <span className="tag-icon"></span> About Us
            </div>
            
            {/* Section Title */}
            <h2 className="section-title">
              We're Best Agriculture & Organic Farms
            </h2>
            
            {/* Description */}
            <p className="section-description">
              There are many variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration in some form, by injected humour, or randomised words
              which don't look even.
            </p>
            
            {/* Features Grid (Flex Container) */}
            <div className="features-grid">
              
              {/* Feature List 1 */}
              <div className="feature-list">
                {/* Each item uses display: flex for alignment */}
                <div className="feature-item"><CheckCircleFill className="check-icon" /> Garlic Farming</div>
                <div className="feature-item"><CheckCircleFill className="check-icon" /> Lavender Farming</div>
                <div className="feature-item"><CheckCircleFill className="check-icon" /> Gourmet Mushrooms</div>
              </div>
              
              {/* Feature List 2 */}
              <div className="feature-list">
                <div className="feature-item"><CheckCircleFill className="check-icon" /> Fertilizer Distribution</div>
                <div className="feature-item"><CheckCircleFill className="check-icon" /> Poultry Farming</div>
                <div className="feature-item"><CheckCircleFill className="check-icon" /> Organic Fertilizer</div>
              </div>
            </div>
            
            {/* "Know More" Button */}
            <div className="know-more-btn-wrapper">
              <a href="#!" className="know-more-btn">
                Know More <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmAboutUs;