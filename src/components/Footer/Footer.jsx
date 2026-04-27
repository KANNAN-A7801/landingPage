import React from 'react';
import './Footer.css';

const Footer = () => {
  const handleSmartDownload = (e) => {
    e.preventDefault();
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      window.open("https://play.google.com/store/apps", "_blank");
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.open("https://www.apple.com/app-store/", "_blank");
    } else {
      // For desktop, go to Microsoft Store
      window.open("https://apps.microsoft.com/home", "_blank");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Top Section */}
        <div className="footer-top">
          {/* Left Column: Brand & Social */}
          <div className="footer-brand-area">
            <div className="brand-logo">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7H4C2.9 7 2 7.9 2 9V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V9C22 7.9 21.1 7 20 7Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M16 21V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V21" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M12 7V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span>Garuda Career</span>
            </div>
            <p className="brand-tagline">Find your dream job with AI-powered matching</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M16 11.37C16.1234 12.2022 15.9812 13.0522 15.5937 13.799C15.2062 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.908 12.2384 16.0396 11.4077 15.9059C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1903 8.22768 13.4229 8.09406 12.5922C7.96044 11.7616 8.09202 10.9099 8.47028 10.1584C8.84854 9.40685 9.45418 8.7938 10.201 8.4063C10.9478 8.0188 11.7978 7.87662 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95371C12.2577 5.71302 11.9897 6.6123 12.007 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60509 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 21V13.5C22 11.5 20.5 10 18.5 10C16.5 10 15 11.5 15 13.5V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 5C5.10457 5 6 4.10457 6 3C6 1.89543 5.10457 1 4 1C2.89543 1 2 1.89543 2 3C2 4.10457 2.89543 5 4 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Columns: Links & App Download */}
          <div className="footer-links-container">
            <div className="footer-links-group">
              <h4>PLATFORM</h4>
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Explore Jobs</a></li>
                <li><a href="#">Connect</a></li>
                <li><a href="#">Featured Jobs</a></li>
              </ul>
            </div>

            <div className="footer-links-group">
              <h4>RESOURCES</h4>
              <ul>
                <li><a href="#">Career Guide</a></li>
                <li><a href="#">Resume Tips</a></li>
                <li><a href="#">Interview Prep</a></li>
                <li><a href="#">Salary Insights</a></li>
              </ul>
            </div>

            <div className="footer-links-group">
              <h4>COMPANY</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>

            <div className="footer-links-group">
              <h4>DOWNLOAD APP</h4>
              <p className="app-download-text">
                <a href="#" onClick={handleSmartDownload} style={{ textDecoration: 'none', color: 'inherit' }}>
                  Get the Garuda app
                </a>
              </p>
              <div className="app-buttons">
                <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer" className="app-store-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 3L15.5 12L4.5 21V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M19.5 9L15.5 12L19.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Google Play</span>
                </a>
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="app-store-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4C10 2 6.5 2.5 4.5 5.5C3 7.5 3 12 3 12C3 12 3 16.5 4.5 18.5C6.5 21.5 10 22 12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M12 4C14 2 17.5 2.5 19.5 5.5C21 7.5 21 12 21 12C21 12 21 16.5 19.5 18.5C17.5 21.5 14 22 12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <span>App Store</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>© 2026 Garuda Career. All rights reserved.</p>
            <div className="footer-legal-links">
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