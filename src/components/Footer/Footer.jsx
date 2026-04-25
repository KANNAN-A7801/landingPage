import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-logo">
              <i className="ri-briefcase-4-fill"></i>
              <span>Garuda Career</span>
            </div>
            <p className="brand-tagline">Find your dream job with AI-powered matching</p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><i className="ri-facebook-fill"></i></a>
              <a href="#" aria-label="Instagram"><i className="ri-instagram-fill"></i></a>
              <a href="#" aria-label="Twitter"><i className="ri-twitter-fill"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="ri-linkedin-fill"></i></a>
            </div>
          </div>

          <div className="footer-sections">
            <div className="footer-section">
              <h5>Platform</h5>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#explore">Explore Jobs</a></li>
                <li><a href="#connect">Connect</a></li>
                <li><a href="#jobs">Featured Jobs</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h5>Resources</h5>
              <ul>
                <li><a href="#">Career Guide</a></li>
                <li><a href="#">Resume Tips</a></li>
                <li><a href="#">Interview Prep</a></li>
                <li><a href="#">Salary Insights</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h5>Company</h5>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h5>Download App</h5>
              <p>Get the Garuda Career app</p>
              <div className="app-buttons">
                <a href="#" className="app-btn">
                  <i className="ri-google-play-fill"></i>
                  <span>Google Play</span>
                </a>
                <a href="#" className="app-btn">
                  <i className="ri-apple-fill"></i>
                  <span>App Store</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2026 Garuda Career. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
