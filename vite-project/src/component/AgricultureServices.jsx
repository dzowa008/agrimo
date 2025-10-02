import React from "react";
import "../styles/AgricultureServices.css";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

import img1 from "../assets/first.png";
import img2 from "../assets/second.png";
import img3 from "../assets/third.png";

const AgricultureServices = () => {
  return (
    <section className="agriculture-section">
      <div className="agriculture-header">
        <span className="section-tag">Our Services</span>
        <div className="full-cont">
          <h2 className="section-title">Best Agriculture Services</h2>
          <div className="nav-buttons">
            <button className="nav-btn"><FaArrowLeft /></button>
            <button className="nav-btn"><FaArrowRight /></button>
          </div>
        </div>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <img src={img1} alt="Harvest Concepts" className="service-img" />
          <div className="service-content">
            <span className="service-category"><span>•</span> Fertilizer</span>
            <h3 className="service-title">Harvest Concepts</h3>
            <p className="service-desc">
              Farming and animal husbandry and discuss with farmers and scientists.
            </p>
          </div>
          <div className="card-footer">
            <span className="circle-btn"><FaTimes /></span>
          </div>
        </div>

        <div className="service-card">
          <img src={img2} alt="Farming Products" className="service-img" />
          <div className="service-content">
            <span className="service-category"><span>•</span> Fruits</span>
            <h3 className="service-title">Farming Products</h3>
            <p className="service-desc">
              Farming and animal husbandry and discuss with farmers and scientists.
            </p>
          </div>
          <div className="card-footer">
            <span className="circle-btn"><FaTimes /></span>
          </div>
        </div>

        <div className="service-card">
          <img src={img3} alt="Soil Fertilization" className="service-img" />
          <div className="service-content">
            <span className="service-category"><span>•</span> Fertilizer</span>
            <h3 className="service-title">Soil Fertilization</h3>
            <p className="service-desc">
              Farming and animal husbandry and discuss with farmers and scientists.
            </p>
          </div>
          <div className="card-footer">
            <span className="circle-btn"><FaTimes /></span>
          </div>
        </div>
      </div>

      <div className="bg-image">
        <img src="../src/assets/9def0b192a60805926bcd75e87784eb16107b3a6.png" alt="bg" />
      </div>
    </section>
  );
};

export default AgricultureServices;
