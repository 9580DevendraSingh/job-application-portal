import React from "react";
import './Footer.css';
import yt from '../components/hero_image.jpg';
function Footer(){
    return(
        <div className="footer_container">
            <div className="element_container">
                <div className="row">
                    <div className="col-lg-1">
                        <div>
                            <img src={yt} alt="logo"/>
                            <p className="para">
                                <strong>symbol of a good beginning</strong>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-1">
                        <h4>Om Mekhlin Networks</h4>
                        <p className="para">
                            <i className="fa-solid fa-location-dot"></i>
                            B-606. Sujjan Vihar, Sector-43, Gurugram, Haryana - 122002
                        </p>
                        <p className="para">
                            <i className="fa-solid fa-envelope"></i>
                            hr@ommehklin.com
                        </p>
                        <div className="footer_logo">
                            <a href="#">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-1">
                        <h5>Quick Links</h5>
                        <a href="#">About Us</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Our Services</a>
                        <a href="#">Terms & Condition</a>
                    </div>
                    <div className="col-lg-1">
                        <h5>newsletter</h5>
                        <p>Suscribe our Newsletter programs.</p>
                        <div className="position">
                            <input type="text" placeholder="Your Email" />
                            <button type="button">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fluid_container">
                <div className="container">
                    <div className="row1">
                        "logo"
                        <div>
                            <a href="#">Mekhlin Human capital Consulting</a>
                            ",All Right Reserved"
                        </div>
                        <div>
                            " Designed By "
                            <a href="#">
                                Devendra singh
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;