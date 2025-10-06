import React from "react";
import "../styles/AgricultureServices.css";
// Keep FaArrowRight for the diagonal arrow (rotated in CSS)
import { FaArrowRight } from "react-icons/fa";

import img1 from "../assets/first.png";
import img2 from "../assets/second.png";
import img3 from "../assets/third.png";

const AgricultureServices = () => {
    // Simple Read More link component for reuse
    const ReadMoreLink = () => (
        <a href="#" className="service-card__read-more">Read More</a>
    );

    return (
        <section className="agriculture-services">
            <div className="agriculture-services__header">
                <span className="agriculture-services__tag">Our Services</span>
                <div className="agriculture-services__header-row">
                    <h2 className="agriculture-services__title">Best Agriculture Services</h2>
                    <div className="agriculture-services__nav">
                        <button className="agriculture-services__nav-btn">&lt;</button>
                        <button className="agriculture-services__nav-btn">&gt;</button>
                    </div>
                </div>
            </div>

            <div className="agriculture-services__grid">

                {/* CARD 1: Harvest Concepts */}
                <div className="service-card">
                    {/* Wrap image in link for clickability */}
                    <a href="#">
                        <img src={img1} alt="Harvest Concepts" className="service-card__image" />
                    </a>
                    <div className="service-card__content">
                        <span className="service-card__category"><span>•</span> Fertilizer</span>
                        <h3 className="service-card__title">Harvest Concepts</h3>
                        <p className="service-card__description">
                            Farming and animal husbandry and discuss with farmers and scientists.
                            {/* <ReadMoreLink /> Add Read More link */}
                        </p>
                    </div>
                    <div className="service-card__footer">
                        <span className="service-card__action-btn"><FaArrowRight /></span>
                    </div>
                </div>

                {/* CARD 2: Farming Products */}
                <div className="service-card">
                    <a href="#">
                        <img src={img2} alt="Farming Products" className="service-card__image" />
                    </a>
                    <div className="service-card__content">
                        <span className="service-card__category"><span>•</span> Fruits</span>
                        <h3 className="service-card__title">Farming Products</h3>
                        <p className="service-card__description">
                            Farming and animal husbandry and discuss with farmers and scientists.
                            {/* <ReadMoreLink /> */}
                        </p>
                    </div>
                    <div className="service-card__footer">
                        <span className="service-card__action-btn"><FaArrowRight /></span>
                    </div>
                </div>

                {/* CARD 3: Soil Fertilization */}
                <div className="service-card">
                    <a href="#">
                        <img src={img3} alt="Soil Fertilization" className="service-card__image" />
                    </a>
                    <div className="service-card__content">
                        <span className="service-card__category"><span>•</span> Fertilizer</span>
                        <h3 className="service-card__title">Soil Fertilization</h3>
                        <p className="service-card__description">
                            Farming and animal husbandry and discuss with farmers and scientists.
                            {/* <ReadMoreLink /> */}
                        </p>
                    </div>
                    <div className="service-card__footer">
                        <span className="service-card__action-btn"><FaArrowRight /></span>
                    </div>
                </div>
            </div>

            <div className="agriculture-services__background">
                <img src="../src/assets/9def0b192a60805926bcd75e87784eb16107b3a6.png" alt="bg" />
            </div>
        </section>
    );
};

export default AgricultureServices;