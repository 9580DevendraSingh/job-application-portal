import React from 'react';
import './Header.css';
import logo from '../components/hero_image.jpg';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">

      {/* Logo + Marquee in one line */}
      <div className="top-bar">
        <img src={logo} alt="Logo" className="logo" />
        <div className="marquee-container">
          <p className="marquee-text">We provide innovative</p>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="nav-bar">
        <div className="nav-item">Home</div>
        <div className="nav-item">About us</div>
        <div className="nav-item">IT Hiring</div>
        <div className="nav-item">
          <select name="services" id="services">
            <option value="Service">Service</option>
            <option value="Blue Collar">Blue Collar</option>
            <option value="BPO">BPO</option>
            <option value="White Collar">White Collar</option>
            <option value="Consultant">Consultant</option>
            <option value="Freelance">Freelance</option>
          </select>
        </div>
        <div className="nav-item">Blog</div>
        <div className="nav-item">Content</div>
        <Link to="/job">
          <button className="apply-button">Apply Now</button>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
