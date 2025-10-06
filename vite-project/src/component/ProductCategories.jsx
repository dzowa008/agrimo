import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSeedling, FaCarrot, FaLeaf, FaHandsHelping } from 'react-icons/fa';
import chibage from '../assets/d0e4b16b588f2e0b54e31cefa5a519faf6c74bd5.png';
import '../styles/ProductCategories.css';

const ProductCategories = () => {
    const backgroundColor = '#fcf8f0';
    const headerColor = '#5e685f';

    return (
        // Changed min-height from 80vh to 95vh
        <section className="d-flex align-items-center position-relative" style={{ backgroundColor: backgroundColor, minHeight: '95vh', width:'100vw'}}>

            {/* Container wrapper for content and vertical centering */}
            <div className="container py-4">

                {/* Header (Remains standard flow) */}
                <div className="text-center mb-5">
                    <p className="text-muted mb-1 small" style={{ color: headerColor, opacity: 0.7 }}>
                        <FaSeedling className="me-2" style={{ color: '#88b259' }} /> Grow Naturally
                    </p>
                    <h2 className="display-5 fw-bold mb-3" style={{ color: headerColor, fontSize: '2.5rem' }}>
                        Choose What's Perfect <br /> For Your Field
                    </h2>
                </div>

                {/* --- ABSOLUTE POSITIONING CONTAINER --- */}
                <div className="position-relative d-flex justify-content-center" style={{ minHeight: '450px' }}>

                    {/* Left Feature Group (ABSOLUTE) */}
                    <div className="features-left-group">

                        {/* Agriculture Products */}
                        <div className="d-flex align-items-center mb-5">
                            <div className="icon-wrapper me-3">
                                <FaHandsHelping className="category-icon" />
                            </div>
                            <div>
                                <h5 className="fw-bold" style={{ color: headerColor }}>Agriculture Products</h5>
                                <p className="text-muted mb-0 small">Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.</p>
                            </div>
                        </div>

                        {/* Quality Products */}
                        <div className="d-flex align-items-center">
                            <div className="icon-wrapper me-3">
                                <FaSeedling className="category-icon" /> 
                            </div>
                            <div>
                                <h5 className="fw-bold" style={{ color: headerColor }}>Quality Products</h5>
                                <p className="text-muted mb-0 small">Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Central Image (Shifted up with negative margin-top) */}
                    <div className="text-center corn-image-wrapper">
                        <img
                            src={chibage}
                            alt="Chibage Illustration"
                            className="img-fluid"
                            style={{ maxHeight: '450px', width: 'auto', objectFit: 'contain' }} 
                        />
                    </div>

                    {/* Right Feature Group (ABSOLUTE) */}
                    <div className="features-right-group">

                        {/* Fresh Vegetables */}
                        <div className="d-flex align-items-center flex-row-reverse mb-5">
                            <div className="icon-wrapper ms-3">
                                <FaCarrot className="category-icon" />
                            </div>
                            <div>
                                <h5 className="fw-bold" style={{ color: headerColor }}>Fresh Vegetables</h5>
                                <p className="text-muted mb-0 small">Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.</p>
                            </div>
                        </div>

                        {/* Pure & Organic */}
                        <div className="d-flex align-items-center flex-row-reverse">
                            <div className="icon-wrapper ms-3">
                                <FaLeaf className="category-icon" />
                            </div>
                            <div>
                                <h5 className="fw-bold" style={{ color: headerColor }}>Pure & Organic</h5>
                                <p className="text-muted mb-0 small">Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ProductCategories;