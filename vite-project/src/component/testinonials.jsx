import React from 'react';
import { FaStar } from 'react-icons/fa';
import '../styles/Testimonials.css';

// Placeholder Images
import clientImg1 from '../assets/client1.jpg'; 
import clientImg2 from '../assets/clients2.jpg';
import clientImg3 from '../assets/client3.jpg';

const testimonialData = [
  {
    id: 1,
    rating: 5,
    quote: '"I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!"',
    name: 'Martin Bailey',
    title: 'SUPERVISOR',
    img: clientImg1,
  },
  {
    id: 2,
    rating: 4,
    quote: '"I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!"',
    name: 'Emma Greed',
    title: 'CUSTOMER',
    img: clientImg2,
  },
  {
    id: 3,
    rating: 5,
    quote: '"I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. They are great to work with and are excellent trainers. Thank you all!"',
    name: 'Daniel Craig',
    title: 'CO-FOUNDER',
    img: clientImg3,
  },
];

// Helper component for rating stars
const RatingStars = ({ count }) => {
  return (
    <div className="testimonial-rating-stars">
      {[...Array(count)].map((_, i) => (
        <FaStar key={i} className="testimonial-star-icon" />
      ))}
    </div>
  );
};

// Placeholder component for the quote icon graphic
const QuoteIcon = () => (
    <span className="testimonial-quote-icon-container">“</span>
);


const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonial-container"> {/* Renamed for specificity */}
        <div className="testimonial-header-row"> {/* Renamed */}
          <div className="testimonial-title-group"> {/* Renamed */}
            <p className="testimonial-subtitle">Testimonial</p>
            <h2 className="testimonial-title">What our customers say</h2>
          </div>
          <div className="testimonial-navigation-buttons"> {/* Renamed */}
            <button className="testimonial-nav-btn testimonial-nav-btn-left"> {/* Renamed and added direction class */}
              &lt;
            </button>
            <button className="testimonial-nav-btn testimonial-nav-btn-right"> {/* Renamed and added direction class */}
              &gt;
            </button>
          </div>
        </div>

        <div className="testimonial-cards-row"> {/* Renamed */}
          {testimonialData.map((t) => (
            <div key={t.id} className="testimonial-col"> {/* Renamed for specificity, replace Bootstrap col-lg-4, etc. */}
              <div className="testimonial-card">
                <QuoteIcon />
                <RatingStars count={t.rating} />
                <p className="testimonial-quote">{t.quote}</p>
                
                <div className="testimonial-client-info">
                  <div className="testimonial-client-image-wrapper">
                    <img src={t.img} alt={t.name} className="testimonial-client-img" />
                  </div>
                  <div className="testimonial-client-details">
                    <p className="testimonial-client-name">{t.name}</p>
                    <p className="testimonial-client-title">{t.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;