import React from 'react';
import { BsChatDots } from 'react-icons/bs';
// Icons are kept here in case you want to use them for other purposes, 
// but the visible design relies on CSS for the numbers/style.
import { FaRegCalendarAlt, FaHandsHelping, FaUserTie, FaShoppingBasket } from 'react-icons/fa';

import '../styles/agri.css'; 

const AgricultureSmarta = () => {
  return (
    <section className="agriculture-section">
      <div className="agri-container"> 
        
        {/* Header Row */}
        <div className="header-row">
          <div className="col-left"> 
            <div className="text-content">
              <div className="btn-get-to-know-us"> 
                Get To Know Us
              </div>
              <h1 className="section-title">Agriculture matters to the future of development</h1>
            </div>
          </div>
          <div className="col-right"> 
            <p className="section-description">
              There are many variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration in some form, by injected humour, or randomised words
              which don't look even.
            </p>
          </div>
        </div>

        {/* Content Row: Image and Steps (Main two-column flex) */}
        <div className="content-row">
          {/* Image Column */}
          <div className="col-left image-column">
            <div className="image-container">
              {/* Image set via CSS background-image */}
            </div>
            {/* Floating Chat Icon */}
            <div className="chat-icon-overlay">
              <BsChatDots size={30} className="text-white" />
            </div>
          </div>
          
          {/* Steps Column */}
          <div className="col-right steps-column">
            <div className="steps-container">
              
              {/* Step 01 - ACTIVE STEP (Solid White) */}
              <div className="step-card step-card-active">
                {/* Flex is used here for alignment: Number | Title | Description */}
                <div className="step-card-body">
                  <div className="step-number-wrapper">
                    <span className="step-number">01</span>
                  </div>
                  <div className="step-text-content">
                    <div className="step-title-col">
                        <h5 className="step-title">Schedule Your Experience</h5>
                    </div>
                    <div className="step-description-col">
                        <p className="step-description">Quisque Tell Us Risus Adips Viera Bibe Um Urna.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 02 - INACTIVE STEP (Transparent) */}
              <div className="step-card">
                <div className="step-card-body">
                  <div className="step-number-wrapper">
                    <span className="step-number">02</span>
                  </div>
                  <div className="step-text-content">
                    <div className="step-title-col">
                        <h5 className="step-title">Get Professional Advice</h5>
                    </div>
                    <div className="step-description-col">
                        <p className="step-description">Quisque Tell Us Risus Adips Viera Bibe Um Urna.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 03 - INACTIVE STEP (Transparent) */}
              <div className="step-card">
                <div className="step-card-body">
                  <div className="step-number-wrapper">
                    <span className="step-number">03</span>
                  </div>
                  <div className="step-text-content">
                    <div className="step-title-col">
                        <h5 className="step-title">Meet Our Expert Farmer</h5>
                    </div>
                    <div className="step-description-col">
                        <p className="step-description">Quisque Tell Us Risus Adips Viera Bibe Um Urna.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 04 - INACTIVE STEP (Transparent) */}
              <div className="step-card">
                <div className="step-card-body">
                  <div className="step-number-wrapper">
                    <span className="step-number">04</span>
                  </div>
                  <div className="step-text-content">
                    <div className="step-title-col">
                        <h5 className="step-title">Now Get A Best Products</h5>
                    </div>
                    <div className="step-description-col">
                        <p className="step-description">Quisque Tell Us Risus Adips Viera Bibe Um Urna.</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgricultureSmarta;