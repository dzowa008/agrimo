import React from "react";
import "../styles/HistoryHero.css";
import logo from "../assets/logo-white.svg.png";
import { FaSearch } from "react-icons/fa";
import '../index.css';

const HistoryHero = () => {
    // The dropdown functionality is not needed for the "About Us" page's hero banner as per the image
    // const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);

    return (
        <section className="hero-about-us"> {/* ✅ New class for specific styling */}
            <div className="main-nav">
                {/* --- Navbar Section --- */}
                <nav className="navbar-container">
                    {/* Logo and Navigation Links */}
                    <div className="navbar-main">
                        <div className="navbar-logo">
                            {/* Image of Agrimo logo white on green background */}
                            <img src={logo} alt="Agrimo logo" className="logo-image" />
                        </div>

                        <ul className="navbar-links">
                            {/* The "HOME" link is still an example, remove the dropdown logic */}
                            <li className="nav-item">
                                <a href="#home" className="nav-link">
                                    <span className="text-white group-hover:text-green-400">• </span>
                                    HOME
                                </a>
                            </li>
                            {/* The "PAGES" link is the active one in the image's structure */}
                            <li className="nav-item">
                                <a href="#pages" className="nav-link nav-active">
                                    <span className="text-white group-hover:text-green-400">• </span>
                                    PAGES
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#services" className="nav-link">
                                    <span className="text-white group-hover:text-green-400">• </span>
                                    SERVICES
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#portfolio" className="nav-link">
                                    <span className="text-white group-hover:text-green-400">• </span>
                                    PORTFOLIO
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#blog" className="nav-link">
                                    <span className="text-white group-hover:text-green-400">•</span>
                                    BLOG
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link">
                                    <span className="text-white group-hover:text-green-400">•</span>
                                    CONTACT US
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Search (Simplified to match the image's layout) */}
                    <div className="icons">
                        <div className="call-info">
                            <h3 className="call-us-now">Call Us Now</h3>
                            <h3 className="phone-number">+(263) 78 763 2090</h3>
                        </div>
                        <div className="search-icon">
                            <FaSearch />
                        </div>
                    </div>
                </nav>
                <div className="button-container">
                    <div className="btn-get">
                        <button className="navbar-cta-btn">Get In Touch</button>
                    </div>
                </div>
            </div>

            <div className="hero-overlay-about-us"> {/* ✅ New overlay class */}
                <div className="hero-content-about-us"> {/* ✅ New content container */}
                    <h1 className="about-us-title">History</h1>
                    <div className="breadcrumb">
                        <a href="#home">AGRIMO</a>
                        <span>•</span>
                        <span>OUR History</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HistoryHero;