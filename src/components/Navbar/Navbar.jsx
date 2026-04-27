import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <i className="ri-briefcase-4-fill"></i> Garuda Career
      </div>


      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li>
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/features" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Features
          </NavLink>
        </li>
        <li>
          <NavLink to="/explore" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Explore
          </NavLink>
        </li>
        <li>
          <NavLink to="/connect" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Connect
          </NavLink>
        </li>
        <li>
          <NavLink to="/contactnav" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active-link' : '')}>
            About Us
          </NavLink>
        </li>
      </ul>
      <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <a href="#download" className="btn-primary" style={{ padding: '10px 24px', textDecoration: 'none', borderRadius: '30px', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
          <i className="ri-download-cloud-2-line"></i> Get The Application
        </a>
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
