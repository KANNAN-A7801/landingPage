import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <i className="ri-briefcase-4-fill"></i> Garuda Career
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/features" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Features
          </NavLink>
        </li>
        <li>
          <NavLink to="/explore" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Explore
          </NavLink>
        </li>
        <li>
          <NavLink to="/connect" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Connect
          </NavLink>
        </li>
        <li>
          <NavLink to="/contactnav" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            About Us
          </NavLink>
        </li>
      </ul>
      <div className="nav-actions">
        <a href="#download" className="btn-primary" style={{ padding: '10px 24px', textDecoration: 'none', borderRadius: '30px', fontSize: '0.9rem' }}>
          <i className="ri-download-cloud-2-line"></i> Get The Application
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
