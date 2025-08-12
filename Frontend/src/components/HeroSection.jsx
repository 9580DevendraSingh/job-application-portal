import React from 'react';
import Slider from 'react-slick';
import './HeroSection.css';
import img1 from '../components/wallpaper.webp';
import img2 from '../components/hero_image.jpg';
import img3 from '../components/pic3.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };


  return (
    <>
      <div className="hero_container">
        {/* HERO SLIDER */}
        <section className="hero-section">
          <Slider {...settings}>
            <div className="slider-item">
              <img src={img1} alt='img1' />
              <div className="hero-overlay">
                <h1 className="hero-title">Welcome to Our Platform</h1>
                <p className="hero-subtitle">We provide innovative hiring solutions for every industry.</p>
                <button className="hero-button">Get Started</button>
              </div>
            </div>

            <div className="slider-item">
              <img src={img2} alt='img2' />
              <div className="hero-overlay">
                <h1 className="hero-title">Welcome to Our Platform</h1>
                <p className="hero-subtitle">We provide innovative hiring solutions for every industry.</p>
                <button className="hero-button">Get Started</button>
              </div>
            </div>

            <div className="slider-item">
              <img src={img3} alt='img3' />
              <div className="hero-overlay">
                <h1 className="hero-title">Welcome to Our Platform</h1>
                <p className="hero-subtitle">We provide innovative hiring solutions for every industry.</p>
                <button className="hero-button">Get Started</button>
              </div>
            </div>
          </Slider>
        </section>

        {/* CARD SECTION */}
        <section className="card-section">
          <h2 className="card-heading">Our Services</h2>
          <div className="card-container">
            <div className="card">
              <i className="fas fa-laptop-code card-icon"></i>
              <h3>IT Hiring</h3>
              <p>We help you hire skilled developers, engineers, and tech leads.</p>
            </div>

            <div className="card">
              <i className="fas fa-headset card-icon"></i>
              <h3>BPO Solutions</h3>
              <p>End-to-end outsourcing solutions to streamline operations.</p>
            </div>

            <div className="card">
              <i className="fas fa-user-tie card-icon"></i>
              <h3>Consulting</h3>
              <p>Strategic talent consulting for scalable business growth.</p>
            </div>

            <div className="card">
              <i className="fas fa-briefcase card-icon"></i>
              <h3>Freelance Experts</h3>
              <p>On-demand specialists for short-term or project-based work.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroSection;
