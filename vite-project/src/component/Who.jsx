import React from "react";
import { FaLeaf, FaTractor } from "react-icons/fa";
import "../styles/who.css";
import farmImage from "../assets/bbf039044044b2e7b8fbee60796133ec7b3a4031.jpg";

const Who = () => {
  return (
    <section className="who-we-are-section container">
      <div className="row align-items-center ">
        {/* Left Image with Card */}
        <div className="col-md-6 position-relative">
          <img src={farmImage} alt="Growing organic food" className="img-fluid rounded main-img" />

          {/* Overlay card */}
          <div className="stat-card highlight">
            <h3><span className="star-icon">*</span>435+</h3>
            <p>Growth Tons of Harvest</p>
          </div>
        </div>

        {/* Right Content */}
        <div className="col-md-6">
          <div className="right-content">
            <div className="badge">Who We Are</div>
            <h2>Currently we are growing and selling organic food</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even.
            </p>

            <div className="row g-4 smarta">
              <div className="col-md-6">
                <div className="stat-card">
                  <FaLeaf className="icon" />
                  <div>
                    <h4>Eco Farms Worldwide</h4>
                    <p>Ages of lorem ipsum available majority have suffered.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="stat-card">
                  <FaTractor className="icon" />
                  <div>
                    <h4>Special Equipment</h4>
                    <p>Ages of lorem ipsum available majority have suffered.</p>
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

export default Who;
