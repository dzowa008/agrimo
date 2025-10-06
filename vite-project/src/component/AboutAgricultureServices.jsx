import React from 'react';
import { FaPlane } from 'react-icons/fa'; // Ensure react-icons is installed
import '../styles/AboutAgricultureServices.css'; // The path you specified

const AboutAgri = () => {
  const services = [
    {
      image: '../src/assets/firstabout.jpg', // Replace with actual image path
      category: 'FERTILIZER',
      title: 'Harvest Concepts',
      icon: <FaPlane />
    },
    {
      image: '../src/assets/secondabout.jpg', // Replace with actual image path
      category: 'FRUITS',
      title: 'Farming Products',
      icon: <FaPlane />
    },
    {
      image: '../src/assets/thirdabout.jpg', // Replace with actual image path
      category: 'FERTILIZER',
      title: 'Soil fertilization',
      icon: <FaPlane />
    },
    {
      image: '../src/assets/forthabout.jpg', // Replace with actual image path
      category: 'FRUITS',
      title: 'Fresh vegetables',
      icon: <FaPlane />
    },
  ];

  return (
    <section className="agriculture-services-section">
      <div className="container">
        <p className="who-we-are">Who We Are</p>
        <h2 className="section-title">Best Agriculture Services</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <div className="service-image-wrapper">
                <img src={service.image} alt={service.title} className="service-image" />
              </div>
              <p className="service-category">{service.category}</p>
              <h3 className="service-title">{service.title}</h3>
            </div>
          ))}
        </div>

        <div className="pagination-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
};

export default AboutAgri;