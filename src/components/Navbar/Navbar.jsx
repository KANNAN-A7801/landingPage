import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/garuda-logo.jpeg';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleGetApp = (e) => {
    e.preventDefault();
    const ua = navigator.userAgent || navigator.vendor || window.opera;

    let url = '#download';

    // iOS (iPhone / iPad / iPod)
    if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
      url = 'https://apps.apple.com'; // Replace with your actual App Store link
    }
    // Android
    else if (/android/i.test(ua)) {
      url = 'https://play.google.com/store'; // Replace with your actual Play Store link
    }
    // Windows Desktop or Windows Phone
    else if (/windows phone/i.test(ua) || /Win/.test(navigator.platform)) {
      url = 'https://www.microsoft.com/store/apps'; // Replace with your actual MS Store link
    }
    // macOS / Linux fallback
    else {
      url = '#download';
    }

    if (url !== '#download') {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      const el = document.getElementById('download');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar-v7">
      <div className="nav-container-v7">
        <div className="nav-logo-v7">
          <Link to="/" className="nav-brand-v7">
            <img src={logo} alt="Garuda Career Logo" className="nav-logo-img" />
          </Link>
        </div>

        <ul className={`nav-links-v7 ${toggle ? 'active' : ''}`}>
          {[
            { name: "Home", path: "/" },
            { name: "Features", path: "/features" },
            { name: "Explore", path: "/explore" },
            { name: "Connect", path: "/connect" },
            { name: "Contact Us", path: "/contactnav" },
            { name: "About Us", path: "/about" }
          ].map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) => isActive ? "active" : ""}
                onClick={() => setToggle(false)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-actions-v7">
          <a href="#download" className="btn-v7-solid" onClick={handleGetApp}>
            <i className="ri-download-cloud-2-line"></i>
            <span>Get The Application</span>
          </a>
          <div className="mobile-toggle-v7" onClick={() => setToggle(!toggle)}>
            <i className={toggle ? "ri-close-line" : "ri-menu-line"}></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
