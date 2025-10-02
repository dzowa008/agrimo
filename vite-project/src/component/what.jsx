import React from 'react';
import '../styles/what.css'; 

// Update the path to your actual image file
import farmerImage from '../assets/farm-image.jpg'; 

const FarmSection = () => {
  return (
    // Parent container with no image background
    <div className="farm-section-container">
      
      {/* Left Column: Farmer Image is applied here */}
      <div 
        className="farm-col farm-image-col" 
        style={{ backgroundImage: `url(${farmerImage})` }} 
      >
        {/* This column is purely for the visual background */}
      </div>

      {/* Right Column: Yellow background with the new image layered behind the content */}
      <div className="farm-col farm-content-col">
        {/* "What We Do" header */}
        <p className="farm-subheading">
          <span className="arrow-icon">▶</span> What We Do
        </p>

        {/* Main Heading */}
        <h2 className="farm-heading">Healthy life with fresh products</h2>

        {/* Description Paragraph */}
        <p className="farm-description">
          There are many variations of passages of Lorem Ipsum available, but the
          majority have suffered alteration in some form, by injected humour, or
          randomised words which don't look even.
        </p>

        {/* Progress Circles / Stats */}
        <div className="farm-stats">
          <div className="farm-stat-item">
            <div className="farm-circle">
              <span className="farm-percentage">90%</span>
            </div>
            <p className="farm-stat-text">Eco Farms Worldwide</p>
          </div>

          <div className="farm-stat-item">
            <div className="farm-circle">
              <span className="farm-percentage">78%</span>
            </div>
            <p className="farm-stat-text">Special Equipment</p>
          </div>
        </div>
        {/* REMOVED: <img src="../src/assets/41e72d508dbe3529a5075a33b856453c8849a64c.png" alt="hoy" className="hoyo-img" /> */}
      </div>
    </div>
  );
};

export default FarmSection;