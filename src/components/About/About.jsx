import React from 'react';
import './About.css';
import aboutUsImg from '../../assets/aboutus.jpeg';
import Footer from '../Footer/Footer';

// Core Strength SVG Icons — Blue theme
const AIIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
    <circle cx="28" cy="28" r="28" fill="#DBEAFE" />
    <path d="M20 28C20 23.582 23.582 20 28 20C32.418 20 36 23.582 36 28C36 32.418 32.418 36 28 36" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
    <circle cx="28" cy="28" r="3" fill="#2563EB" />
    <path d="M28 18V16M28 40V38M18 28H16M40 28H38" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
    <path d="M21.515 21.515L20.1 20.1M35.9 35.9L34.485 34.485M21.515 34.485L20.1 35.9M35.9 20.1L34.485 21.515" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const GlobalIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
    <circle cx="28" cy="28" r="28" fill="#DBEAFE" />
    <circle cx="28" cy="28" r="11" stroke="#2563EB" strokeWidth="2" />
    <path d="M28 17C28 17 24 22 24 28C24 34 28 39 28 39" stroke="#2563EB" strokeWidth="2" />
    <path d="M28 17C28 17 32 22 32 28C32 34 28 39 28 39" stroke="#2563EB" strokeWidth="2" />
    <path d="M17 28H39" stroke="#2563EB" strokeWidth="2" />
    <path d="M18 23H38M18 33H38" stroke="#2563EB" strokeWidth="1.5" />
  </svg>
);

const SecureIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
    <circle cx="28" cy="28" r="28" fill="#DBEAFE" />
    <path d="M28 16L19 20V28C19 33.25 22.9 38.15 28 39.5C33.1 38.15 37 33.25 37 28V20L28 16Z" stroke="#2563EB" strokeWidth="2" fill="none" />
    <path d="M23.5 28L26.5 31L32.5 25" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FlexibleIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
    <circle cx="28" cy="28" r="28" fill="#DBEAFE" />
    <rect x="18" y="18" width="8" height="8" rx="2" stroke="#2563EB" strokeWidth="2" />
    <rect x="30" y="18" width="8" height="8" rx="2" stroke="#2563EB" strokeWidth="2" />
    <rect x="18" y="30" width="8" height="8" rx="2" stroke="#2563EB" strokeWidth="2" />
    <rect x="30" y="30" width="8" height="8" rx="2" stroke="#2563EB" strokeWidth="2" />
  </svg>
);

// User card icons — Blue theme
const JobSeekerCardIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
    <rect width="40" height="40" rx="10" fill="#DBEAFE" />
    <circle cx="20" cy="16" r="4" stroke="#2563EB" strokeWidth="2" />
    <path d="M12 30C12 26.686 15.582 24 20 24C24.418 24 28 26.686 28 30" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const RecruiterCardIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
    <rect width="40" height="40" rx="10" fill="#DBEAFE" />
    <circle cx="16" cy="16" r="3.5" stroke="#2563EB" strokeWidth="2" />
    <circle cx="24" cy="16" r="3.5" stroke="#2563EB" strokeWidth="2" />
    <path d="M10 30C10 27.239 12.686 25 16 25" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
    <path d="M30 30C30 27.239 27.314 25 24 25C22.348 25 20.849 25.624 19.778 26.636" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const AdminCardIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
    <rect width="40" height="40" rx="10" fill="#DBEAFE" />
    <path d="M20 12L22.8 17.4L29 18.3L24.5 22.6L25.6 29L20 26L14.4 29L15.5 22.6L11 18.3L17.2 17.4L20 12Z" stroke="#2563EB" strokeWidth="2" fill="none" strokeLinejoin="round" />
  </svg>
);

const About = () => {
  const handleDownload = (e) => {
    if (e) e.preventDefault();
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      window.open("https://play.google.com/store/apps", "_blank");
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.open("https://www.apple.com/app-store/", "_blank");
    } else if (/windows/i.test(userAgent)) {
      window.open("https://apps.microsoft.com/home", "_blank");
    } else {
      // Default to Play Store if unknown
      window.open("https://play.google.com/store/apps", "_blank");
    }
  };

  return (
    <div className="about-page-v2">

      {/* ─────────────── HERO SECTION ─────────────── */}
      <section className="about-hero-v2">
        <div className="about-hero-inner-v2">

          {/* LEFT COLUMN */}
          <div className="about-hero-left">
            <span className="about-us-label">ABOUT US</span>
            <h1 className="about-hero-heading">
              Get The Best<br />
              Career Path Here
            </h1>
            <p className="about-hero-desc">
              Find unbeatable opportunities and save more on your career journey with our expert guidance. Where every professional milestone becomes an unforgettable success.
            </p>
            <button className="discover-more-btn" onClick={handleDownload}>Explore More →</button>
          </div>

          {/* RIGHT COLUMN — Achievements Card */}
          <div className="about-hero-right">
            <div className="about-achievements-card">
              <div className="about-achievements-header">
                <h3>Our Achievements</h3>
                <p>Building the future of recruitment</p>
              </div>
              <div className="about-achievements-grid">
                <div className="about-stat-item">
                  <div className="about-stat-icon">
                    <JobSeekerCardIcon />
                  </div>
                  <div>
                    <span className="about-stat-num">30k+</span>
                    <span className="about-stat-label">Active Job Seekers</span>
                  </div>
                </div>
                <div className="about-stat-item">
                  <div className="about-stat-icon">
                    <RecruiterCardIcon />
                  </div>
                  <div>
                    <span className="about-stat-num">5k+</span>
                    <span className="about-stat-label">Partner Companies</span>
                  </div>
                </div>
                <div className="about-stat-item">
                  <div className="about-stat-icon">
                    <AdminCardIcon />
                  </div>
                  <div>
                    <span className="about-stat-num">15k</span>
                    <span className="about-stat-label">Successful Placements</span>
                  </div>
                </div>
                <div className="about-stat-item">
                  <div className="about-stat-icon">
                    <GlobalIcon />
                  </div>
                  <div>
                    <span className="about-stat-num">10k</span>
                    <span className="about-stat-label">Worldwide Users</span>
                  </div>
                </div>
              </div>
              <button className="about-join-btn" onClick={handleDownload}>Join Our Community →</button>
            </div>
          </div>

        </div>
        {/* Map background at bottom */}
        <div className="about-hero-map-bg"></div>
      </section>

      {/* ─────────────── USER TYPE CARDS ─────────────── */}
      <section className="about-cards-v2">
        <div className="about-cards-inner">

          <div className="about-user-card">
            <div className="user-card-icon-wrap">
              <JobSeekerCardIcon />
            </div>
            <div className="user-card-text">
              <h3>Empowering Job Seekers</h3>
              <p>Access personalized career tools and seamless application tracking.</p>
            </div>
          </div>

          <div className="about-user-card">
            <div className="user-card-icon-wrap">
              <RecruiterCardIcon />
            </div>
            <div className="user-card-text">
              <h3>Enabling Recruiters</h3>
              <p>Advanced job listings, candidate management, and smart insights.</p>
            </div>
          </div>

          <div className="about-user-card">
            <div className="user-card-icon-wrap">
              <AdminCardIcon />
            </div>
            <div className="user-card-text">
              <h3>Supporting Admins</h3>
              <p>Secure role-based access and enterprise-grade platform control.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────── CORE STRENGTHS ─────────────── */}
      <section className="core-strengths-v2">
        <div className="core-strengths-inner">
          <h2 className="core-strengths-title">Our Core Strengths</h2>

          <div className="strengths-grid">
            <div className="strength-item">
              <div className="strength-icon"><AIIcon /></div>
              <h4>AI-Powered</h4>
              <p>Smart and intelligent recruitment automation.</p>
            </div>

            <div className="strength-item">
              <div className="strength-icon"><GlobalIcon /></div>
              <h4>Global &amp; Scalable</h4>
              <p>Built for international markets and industries.</p>
            </div>

            <div className="strength-item">
              <div className="strength-icon"><SecureIcon /></div>
              <h4>Secure &amp; Reliable</h4>
              <p>Data integrity, privacy, and role-based access.</p>
            </div>

            <div className="strength-item">
              <div className="strength-icon"><FlexibleIcon /></div>
              <h4>Flexible &amp; Powerful</h4>
              <p>Subscription-based with integrated payments.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
