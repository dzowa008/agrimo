import React from "react";
import "../styles/animatednames.css";

const AnimatedText = () => {
  return (
    <div className="scroll-container">
      <div className="scroll-text">
        <span>Agriculture</span>
        <span className="star">✱</span>
        <span>Farming</span>
        <span className="star">✱</span>
        <span>Organic</span>
        <span className="star">✱</span>
        <span>Vegetables</span>
        <span className="star">✱</span>
        <span>Healthy</span>
        <span className="star">✱</span>
        <span>Agriculture</span>
        <span className="star">✱</span>
        <span>Farming</span>
      </div>
    </div>
  );
};

export default AnimatedText;
