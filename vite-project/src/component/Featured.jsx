import React from "react";
import { FaTractor, FaCarrot, FaSeedling, FaCheckCircle } from "react-icons/fa";
import "../styles/Featured.css";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <FaTractor />,
      title: "Professional Farmers",
      text: "Nullam porta velit et velit convallis, eget laoreet odio ultrices.",
    },
    {
      id: 2,
      icon: <FaCarrot />,
      title: "Fresh Vegetables",
      text: "Nullam porta velit et velit convallis, eget laoreet odio ultrices.",
    },
    {
      id: 3,
      icon: <FaSeedling />,
      title: "Agriculture Products",
      text: "Nullam porta velit et velit convallis, eget laoreet odio ultrices.",
    },
    {
      id: 4,
      icon: <FaCheckCircle />,
      title: "100% Guaranteed",
      text: "Nullam porta velit et velit convallis, eget laoreet odio ultrices.",
    },
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        {features.map((item) => (
          <div key={item.id} className="feature-card">
            <div className="feature-icon">{item.icon}</div>
            <h3 className="feature-title">{item.title}</h3>
            <p className="feature-text">{item.text}</p>
            <div className="feature-arrow">↗</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
