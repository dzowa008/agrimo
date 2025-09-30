import { useState } from 'react';
import './App.css';
import { FaPhoneAlt, FaSearch, FaBars, FaTimes } from "react-icons/fa";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section className="hero-ection">
       <div className="na-container">
         <nav className="navbar">
          {/* Logo */}
          <div className="logo">
            <img src="../src/assets/logo-white.svg.png" alt="Logo" />
          </div>

          {/* Links */}
          <div className={`links ${menuOpen ? "active" : ""}`}>
            <a href="#">HOME</a>
            <a href="#">PAGES</a>
            <a href="#">SERVICES</a>
            <a href="#">PORTFOLIO</a>
            <a href="#">BLOGS</a>
            <a href="#">CONTACT US</a>
          </div>

          {/* Icons */}
          <div className="icons">
            <div className="phone-icon">
              <FaPhoneAlt />
            </div>
            <div className="flex-icons">
              <h3>Call Us Now</h3>
              <h3>+(263) 78 763 2090</h3>
            </div>
            <div className="search-icon">
              <FaSearch />
            </div>
          </div>
        </nav>
        <div className="btn-get-in"><button className="btn-get">Get In Touch</button></div>
       </div>

       
        <div className="hero-content">
          <h4>BELIEVE IN QUALITY</h4>
          <h1>Quality TRUST : <br />Direct to the Farm</h1>
          <h3>We all need a little space to grow. Give yourself the space you need to find your inner you.</h3>
          <buttton className="btn-contact">Contact Us</buttton>
        </div>
        
      </section>
    </>
  );
}

export default App;
