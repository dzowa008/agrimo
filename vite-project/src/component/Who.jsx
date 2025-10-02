import React, { useState, useEffect } from "react";
import { FaLeaf, FaTractor } from "react-icons/fa";
import "../styles/who.css";
import farmImage from "../assets/bbf039044044b2e7b8fbee60796133ec7b3a4031.jpg";

// --- New Animated Component ---
const AnimatedStat = ({ finalValue, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const step = finalValue / (duration / 10); // Calculate step for 10ms interval

        const timer = setInterval(() => {
            start += step;

            if (start >= finalValue) {
                clearInterval(timer);
                setCount(finalValue);
            } else {
                setCount(Math.ceil(start)); // Round up for a smooth, integer count
            }
        }, 10);

        // Cleanup function
        return () => clearInterval(timer);
    }, [finalValue, duration]); // Re-run if finalValue or duration changes

    return (
        // The count state is used here instead of the static number
        <>
            {count}+
        </>
    );
};
// -----------------------------

const Who = () => {
    return (
        <section className="who-we-are-section">
            <div className="container">
                <div className="align-items-center">
                    <div className="col-md-6 position-relative">
                        <img src={farmImage} alt="Growing organic food" className="img-fluid rounded main-img" />

                        {/* 🌟 REPLACED STATIC TEXT WITH ANIMATEDSTAT COMPONENT 🌟 */}
                        <div className="stat-card highlight">
                            <h3>
                                <span className="star-icon">*</span>
                                <AnimatedStat finalValue={435} duration={1500} /> 
                            </h3>
                            <p>Growth Tons of Harvest</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="right-content">
                            <div className="badge">Who We Are</div>
                            <h2>Currently we are growing and selling organic food</h2>
                            <p>
                                There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in some form, by
                                injected humour, or randomised words which don't look even.
                            </p>

                            <div className="smarta">
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
            </div>
        </section>
    );
};

export default Who;