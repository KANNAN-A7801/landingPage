import React, { useState, useEffect } from 'react';
import './Home.css';
import SEO from '../SEO/SEO';
import phone1 from '../../assets/phone4.png';
import phone2 from '../../assets/phone2.png';
import phone3 from '../../assets/phone3.png';
import ContactPage from '../ContactPage/ContactPage';
import Footer from '../Footer/Footer';
import avatarOne from '../../assets/testimonials/cartoon_female_1.png';
import avatarTwo from '../../assets/testimonials/cartoon_female_2.png';
import avatarThree from '../../assets/testimonials/cartoon_male_1.png';
import avatarFour from '../../assets/testimonials/cartoon_male_2.png';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const grid = document.querySelector('.features-grid');
      if (grid) {
        const cards = grid.querySelectorAll('.feature-card-new');
        cards.forEach(card => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty('--x', `${x}px`);
          card.style.setProperty('--y', `${y}px`);
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const AnimatedNumber = ({ value, duration = 2000 }) => {
    const [count, setCount] = React.useState(1);

    React.useEffect(() => {
      let start = 1;
      const endMatch = value.match(/[0-9.]+/);
      if (!endMatch) return;

      const end = parseFloat(endMatch[0]);
      if (isNaN(end)) return;

      const isFloat = value.includes('.');
      const suffix = value.replace(/[0-9.]/g, '');

      let timer = setInterval(() => {
        start += (end / 50); // Divide into 50 steps
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(isFloat ? start.toFixed(1) : Math.floor(start));
        }
      }, duration / 50);

      return () => clearInterval(timer);
    }, [value, duration]);

    return <span>{count}{value.replace(/[0-9.]/g, '')}</span>;
  };

  const handleSmartDownload = (e) => {
    if (e) e.preventDefault();
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    let targetUrl = "https://apps.microsoft.com/home"; // Default Desktop

    if (/android/i.test(userAgent)) {
      targetUrl = "https://play.google.com/store/apps";
    } else if (/iPad|iPhone|iPod/.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
      targetUrl = "https://www.apple.com/app-store/";
    }

    window.location.href = targetUrl;
  };

  return (
    <div className="app-container">
      <SEO
        title="Find Your Dream Job | Garuda Career – Jobs for Freshers & Professionals"
        description="Search thousands of job openings across India. Apply to full-time, part-time, remote & government jobs. Upload your resume & get hired today on Garuda Career."
        canonical="/"
        schema={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://garudacareer.com/" }
          ]
        }}
      />
      {/* Hero Section - Ditto Alignment */}
      <header className="hero">
        <div className="hero-content-top">
          {/* Float Elements moved here for alignment with title */}
          <div className="social-proof-float">
            <h3>5k+</h3>
            <p>Active Users</p>
            <div className="avatar-group">
              <img src={avatarOne} alt="Female job seeker using Garuda Career app" className="avatar" />
              <img src={avatarTwo} alt="Professional woman finding remote jobs online" className="avatar" />
              <img src={avatarThree} alt="Male professional exploring career opportunities" className="avatar" />
              <img src={avatarFour} alt="Job seeker who got hired through Garuda Career" className="avatar" />
              <div className="avatar-plus">+</div>
            </div>
          </div>

          <div className="trust-badge-float">
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#111827', marginBottom: '4px' }}>10k+</h3>
              <p style={{ color: '#6b7280', fontSize: '1rem', marginBottom: '1rem' }}>Top Companies</p>
              <div style={{ display: 'flex', color: '#fbbf24', fontSize: '1.5rem', letterSpacing: '2px' }}>
                ★★★★★
              </div>
            </div>
          </div>

          <div className="sub-headline-container">
            <div className="headline-divider"></div>
            <span className="sub-headline">THE BEST JOB FINDING MOBILE APP</span>
          </div>
          <h1 className="main-headline">
            Match Your Skills to <br />
            the <span className="highlight-underline">Perfect Job</span>
          </h1>
        </div>

        <div className="hero-visual-wrapper">
          {/* Overlapping Phones */}
          <div className="phones-display">
            <div className="phone-wrapper p-left-wrap">
              <img src={phone1} alt="Garuda Career mobile app job listings screen" className="phone-mock p-side" />
            </div>
            <div className="phone-wrapper p-center-wrap">
              <img src={phone2} alt="Garuda Career app home screen with job search" className="phone-mock p-center" />
            </div>
            <div className="phone-wrapper p-right-wrap">
              <img src={phone3} alt="Garuda Career in-app chat with recruiters" className="phone-mock p-side" />
            </div>
          </div>
        </div>
      </header>

      {/* Dark Bottom Section - Boundary Overlap Alignment */}
      <section className="dark-section">
        <div className="dark-grid">
          <div className="cta-left">
            <h2 className="cta-title">
              Download <span style={{ color: '#3b44f6' }}>Our Garuda Career</span> <br />
              Mobile App Now
            </h2>
            <p style={{ color: '#94a3b8', margin: '1.5rem 0', minWidth: '400px', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Accelerate your career journey with Garuda Career. Our platform connects ambitious professionals with top-tier global companies, providing personalized matches and expert guidance every step of the way.
            </p>

            <div className="stats-row" style={{ marginTop: '1rem', paddingTop: '1rem', gap: '2rem' }}>
              <div className="stat-item">
                <h4>1M+</h4>
                <p>Active Users</p>
              </div>
              <div className="stat-item">
                <h4>3M+</h4>
                <p>Jobs Listed</p>
              </div>
              <div className="stat-item">
                <h4>800+</h4>
                <p>Companies</p>
              </div>
            </div>
          </div>

          <div className="cards-flex">
            {/* iOS Card */}
            <div className="card-custom" style={{
              background: '#2d2d35',
              padding: '1.5rem',
              borderRadius: '20px',
              width: '240px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 15px 30px rgba(0,0,0,0.3)'
            }}>
              <div className="card-top" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                <h3 style={{ color: 'white', fontSize: '1.3rem', fontWeight: '100', marginBottom: '0.2rem' }}>For iOS download</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>iOS 15.6+ </p>
              </div>

              <button
                onClick={() => window.open("https://www.apple.com/app-store/", "_blank")}
                className="btn-download"
                style={{
                  background: '#3b44f6',
                  color: 'white',
                  border: 'none',
                  padding: '0.7rem 1.5rem',
                  borderRadius: '10px',
                  fontWeight: '600',
                  fontSize: '0.85rem',
                  marginBottom: '2rem',
                  cursor: 'pointer',
                  width: '100%'
                }}
              >
                Download App
              </button>

              <div className="card-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="rating-mini" style={{ background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '12px', width: '60%' }}>
                  <div style={{ color: '#fbbf24', fontSize: '1rem', marginBottom: '0.1rem' }}>★★★★★</div>
                  <div style={{ color: 'white', fontWeight: '700', fontSize: '1.2rem' }}>4.9/5</div>
                </div>

                <div className="logo-circle" style={{
                  background: '#1a1b21',
                  width: '65px',
                  height: '65px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="35" height="35" viewBox="0 0 384 512" fill="white"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
                </div>
              </div>
            </div>

            {/* Android Card */}
            <div className="card-custom" style={{
              background: '#2d2d35',
              padding: '1.5rem',
              borderRadius: '20px',
              width: '240px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 15px 30px rgba(0,0,0,0.3)'
            }}>
              <div className="card-top" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                <h3 style={{ color: 'white', fontSize: '1.1rem', fontWeight: '100', marginBottom: '0.2rem' }}>For Android download</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Android 8.0+</p>
              </div>

              <button
                onClick={() => window.open("https://play.google.com/store/apps", "_blank")}
                className="btn-download"
                style={{
                  background: '#3b44f6',
                  color: 'white',
                  border: 'none',
                  padding: '0.7rem 1.5rem',
                  borderRadius: '10px',
                  fontWeight: '600',
                  fontSize: '0.85rem',
                  marginBottom: '2rem',
                  cursor: 'pointer',
                  width: '100%'
                }}
              >
                Download App
              </button>

              <div className="card-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="rating-mini" style={{ background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '12px', width: '60% ' }}>
                  <div style={{ color: '#fbbf24', fontSize: '1rem', marginBottom: '0.1rem' }}>★★★★★</div>
                  <div style={{ color: 'white', fontWeight: '700', fontSize: '1.1rem' }}>4.9/5</div>
                </div>

                <div className="logo-circle" style={{
                  background: '#3ddc84',
                  width: '65px',
                  height: '65px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="35" height="35" viewBox="0 0 576 512" fill="white"><path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10l-48.5,83.93a242.13,242.13,0,0,0-246.64,0l-48.5-83.93a10,10,0,1,0-17.27,10l47.94,83A240.79,240.79,0,0,0,64,316.62H512a240.79,240.79,0,0,0-52.85-159.17" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Steps Section */}
      <section className="steps-section">
        <div className="steps-left">
          <h4 style={{ color: '#3b44f6', fontWeight: '700', fontSize: '1.2rem', marginBottom: '0.8rem' }}>How it Works</h4>
          <h2 style={{ fontSize: '4rem', fontWeight: '800', lineHeight: '1.1' }}>Quick <span className="blue-text">Steps</span> To <br /> Getting A Job</h2>
          <p style={{ color: '#64748b', fontSize: '1.15rem', lineHeight: '1.7', maxWidth: '500px', marginTop: '1.5rem' }}>
            A simple 3-step process to help you find and apply for your dream career without any hassle. <br /><br />
            Whether you are looking for remote opportunities or a corporate role, our platform streamlines your application journey. Connect with top recruiters and stand out from the crowd effortlessly.
          </p>
        </div>
        <div className="steps-list">
          <div className="step-card">
            <div className="step-icon" style={{ background: '#14b8a6' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
            </div>
            <div className="step-info">
              <h3>Create Account</h3>
              <p>Sign up in seconds and start your journey with a personalized experience. Join thousands of professionals discovering top-tier opportunities every single day.</p>
            </div>
          </div>
          <div className="step-card">
            <div className="step-icon" style={{ background: '#a855f7' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <div className="step-info">
              <h3>Completed Your Profile</h3>
              <p>Add your skills and experience to get the most relevant job matches. Highlight your unique achievements to stand out to global recruiters instantly.</p>
            </div>
          </div>
          <div className="step-card">
            <div className="step-icon" style={{ background: '#ef4444' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            </div>
            <div className="step-info">
              <h3>Finding Jobs</h3>
              <p>Explore thousands of listings and apply to the ones that fit you best. Use our smart AI matching to secure your dream role faster and easier.</p>
            </div>
          </div>
        </div>
      </section>

      <ContactPage />

      {/* Start Your Job Search Today Section */}
      <section className="search-today-section">
        <div className="search-today-top">
          <div className="search-today-header">
            <h4 style={{ color: '#3b44f6', fontWeight: '700', fontSize: '1.2rem', marginBottom: '0.8rem' }}>About Us</h4>
            <h2>Start Your <br className="mobile-break" /><span style={{ color: '#3b44f6' }}>Job Search</span> Today</h2>
          </div>
          <div className="search-today-desc">
            <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '500px' }}>
              We are on a mission to revolutionize how talented individuals discover and connect with their dream careers. Our platform leverages cutting-edge
            </p>
          </div>
        </div>
        <div className="search-visual">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Team of professionals collaborating on career growth strategies" className="main-search-img" />
          <div className="vision-mission-cards">
            <div className="vm-card card-blue">
              <h3>Our Vision</h3>
              <p>To empower every individual with the tools and opportunities to build a fulfilling and successful career path.</p>
            </div>
            <div className="vm-card card-orange">
              <h3>Our Mission</h3>
              <p>Connecting talent with innovation by bridging the gap between ambitious job seekers and top-tier global companies.</p>
            </div>
          </div>
        </div>
        <div className="search-stats">
          <div className="search-stat"><h3><AnimatedNumber value="500k+" /></h3><p>Job Listings</p></div>
          <div className="search-stat"><h3><AnimatedNumber value="150+" /></h3><p>Job Categories</p></div>
          <div className="search-stat"><h3><AnimatedNumber value="300+" /></h3><p>Success Stories</p></div>
          <div className="search-stat"><h3><AnimatedNumber value="2.2k" /></h3><p>Daily Active Jobs</p></div>
        </div>
      </section>

      {/* Trust Our Expertise Section */}
      <section className="expertise-section">
        <div className="expertise-top">
          <div className="expertise-header">
            <h4 style={{ color: '#3b44f6', fontWeight: '700', fontSize: '1.2rem', marginBottom: '0.8rem' }}>What We Offer</h4>
            <h2>Trust Our <span style={{ color: '#3b44f6' }}>Expertise</span></h2>
          </div>
          <div className="expertise-desc">
            <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: '1.8', maxWidth: '480px' }}>
              Our expertise lies in understanding the modern job market. We combine intelligent technology with human insight to offer tailored career solutions that truly make a difference.
            </p>
          </div>
        </div>
        <div className="expertise-grid">
          <div className="expertise-card">
            <div className="expertise-img-wrapper">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="AI-powered job recommendation engine matching skills to career opportunities" className="expertise-img" />
            </div>
            <h3>Job Recommendation</h3>
            <p>Get personalized job suggestions based on your profile, search history, and career preferences, powered by our advanced AI matching engine.</p>
            <button className="btn-learn-more">Learn More</button>
          </div>
          <div className="expertise-card">
            <div className="expertise-img-wrapper">
              <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Professional building a resume and profile for job applications" className="expertise-img" />
            </div>
            <h3>Create & Build Profile</h3>
            <p>Build a professional profile that stands out to recruiters. Showcase your achievements, skills, and portfolio in a modern, interactive way.</p>
            <button className="btn-learn-more">Learn More</button>
          </div>
        </div>
      </section>

      {/* Most Recent Jobs Section - Localized for India */}
      <section className="jobs-section">
        <div className="jobs-top">
          <div className="jobs-header">
            <h4 style={{ color: '#3b44f6', fontWeight: '700', fontSize: '1.2rem', marginBottom: '0.8rem' }}>Latest Jobs</h4>
            <h2 style={{ fontSize: '3rem', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>Most <span style={{ color: '#3b44f6' }}>Recent Jobs</span></h2>
          </div>
          <div className="jobs-desc">
            <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: '1.8', maxWidth: '480px' }}>
              Explore the latest opportunities from top companies across India. We curate these listings daily to ensure you have access to the best career paths available today.
            </p>
          </div>
        </div>

        <div className="jobs-grid-v4">
          {[
            { title: "Marketing Manager", company: "Hindustan Unilever", icon: "ri-megaphone-line", location: "Mumbai, India", salary: "₹18L - ₹25L", type: "Full Time", desc: "Lead regional marketing campaigns and drive brand awareness through innovative digital strategies." },
            { title: "Sales Director", company: "Reliance Industries", icon: "ri-briefcase-line", location: "Mumbai, India", salary: "₹25L - ₹40L", type: "Full Time", desc: "Oversee national sales operations and build strategic partnerships with key enterprise clients." },
            { title: "Human Resources Lead", company: "Tata Motors", icon: "ri-user-settings-line", location: "Pune, India", salary: "₹15L - ₹22L", type: "Hybrid", desc: "Manage talent acquisition and implement employee engagement programs across multiple plants." },
            { title: "Financial Analyst", company: "HDFC Bank", icon: "ri-bank-line", location: "Mumbai, India", salary: "₹12L - ₹18L", type: "Full Time", desc: "Perform detailed financial modeling and provide actionable insights for investment banking divisions." },
            { title: "Content Strategist", company: "Zomato", icon: "ri-edit-box-line", location: "Gurgaon, India", salary: "₹10L - ₹15L", type: "Remote", desc: "Create compelling brand stories and manage cross-platform content delivery for food tech ecosystems." },
            { title: "Operations Manager", company: "Flipkart", icon: "ri-settings-4-line", location: "Bangalore, India", salary: "₹16L - ₹24L", type: "Full Time", desc: "Optimize supply chain logistics and improve delivery efficiency across south Indian fulfillment centers." },
            { title: "Product Manager", company: "Paytm", icon: "ri-rocket-line", location: "Noida, India", salary: "₹20L - ₹30L", type: "Full Time", desc: "Drive product lifecycle from concept to launch, focusing on user experience and market competitiveness." },
            { title: "Data Scientist", company: "Swiggy", icon: "ri-database-2-line", location: "Bangalore, India", salary: "₹18L - ₹28L", type: "Hybrid", desc: "Apply machine learning algorithms to optimize delivery routes and enhance user personalization." }
          ].map((job, idx) => (
            <div key={idx} className="job-card-v4" onClick={handleSmartDownload}>
              <div className="jc-content-v4">
                <div className="jc-top-v4">
                  <div className="jc-icon-v4">
                    <i className={job.icon}></i>
                  </div>
                  <div className="jc-status-v4">
                    <span className="status-dot"></span>
                    Active recruiting
                  </div>
                </div>
                
                <div className="jc-body-v4">
                  <span className="jc-company-v4">{job.company}</span>
                  <h3 className="jc-title-v4">{job.title}</h3>
                  <div className="jc-meta-v4">
                    <span><i className="ri-map-pin-line"></i> {job.location}</span>
                    <span><i className="ri-time-line"></i> {job.type}</span>
                  </div>
                  <p className="jc-desc-v4">{job.desc}</p>
                </div>
              </div>

              <div className="jc-footer-v4">
                <div className="jc-salary-v4">
                  <small>STARTING AT</small>
                  <h4>{job.salary}</h4>
                </div>
                <button className="jc-apply-v4">
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Career Tips Carousel Section */}
      <section className="tips-carousel-section">
        <div className="tips-top">
          <div className="tips-header" style={{ textAlign: 'left' }}>
            <h4 style={{ color: '#3b44f6', fontWeight: '700', fontSize: '1.2rem', marginBottom: '0.8rem' }}>Career Advice</h4>
            <h2 style={{ fontSize: '4rem', fontWeight: '800', fontFamily: 'var(--font-heading)', textAlign: 'left' }}>Job Search <span style={{ color: '#3b44f6' }}>Tips</span></h2>
          </div>
          <div className="tips-desc">
            <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: '1.8', maxWidth: '480px' }}>
              Success in the job market requires more than just skills. We provide actionable advice to help you refine your presentation and networking strategy.
            </p>
          </div>
        </div>

        <div className="carousel-container">
          <button className="carousel-btn prev-btn" onClick={prevSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <div className="carousel-viewport">
            <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              <div className="carousel-page">
                <div className="carousel-item">
                  <div className="tip-category">
                    <h3>Resume Building</h3>
                    <ul className="tips-list">
                      <li>Use action verbs and quantify achievements</li>
                      <li>Tailor your resume for each application</li>
                      <li>Include keywords from job descriptions</li>
                      <li>Keep it concise and focused (1-2 pages)</li>
                    </ul>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="tip-category">
                    <h3>Interview Prep</h3>
                    <ul className="tips-list">
                      <li>Research the company and role thoroughly</li>
                      <li>Practice common interview questions</li>
                      <li>Prepare thoughtful questions to ask</li>
                      <li>Follow up with a thank-you email</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="carousel-page">
                <div className="carousel-item">
                  <div className="tip-category">
                    <h3>Networking</h3>
                    <ul className="tips-list">
                      <li>Attend industry events and meetups</li>
                      <li>Connect with professionals on LinkedIn</li>
                      <li>Request informational interviews</li>
                      <li>Build genuine relationships</li>
                    </ul>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="tip-category">
                    <h3>Personal Brand</h3>
                    <ul className="tips-list">
                      <li>Optimize your LinkedIn profile</li>
                      <li>Share industry-relevant content</li>
                      <li>Engage with leaders in your field</li>
                      <li>Build a professional portfolio site</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="carousel-page">
                <div className="carousel-item">
                  <div className="tip-category">
                    <h3>Skill Mastery</h3>
                    <ul className="tips-list">
                      <li>Take certified online courses</li>
                      <li>Work on real-world projects</li>
                      <li>Learn emerging tech in your niche</li>
                      <li>Attend workshops and webinars</li>
                    </ul>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="tip-category">
                    <h3>Follow-up Strategy</h3>
                    <ul className="tips-list">
                      <li>Send a personalized thank-you note</li>
                      <li>Reiterate your interest in the role</li>
                      <li>Ask about next steps in the process</li>
                      <li>Maintain a positive, patient attitude</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-btn next-btn" onClick={nextSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

        <div className="carousel-dots">
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* Industry Insights Section */}
      <section className="insights-section">
        <div className="insights-top">
          <div className="insights-header" style={{ textAlign: 'left' }}>
            <h4 style={{ color: '#3b44f6', fontWeight: '700', fontSize: '1.2rem', marginBottom: '0.8rem' }}>Market Insights</h4>
            <h2 style={{ fontSize: '3rem', fontWeight: '800', fontFamily: 'var(--font-heading)', textAlign: 'left' }}>Industry <span style={{ color: '#3b44f6' }}>Expertise</span></h2>
          </div>
          <div className="insights-desc">
            <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: '1.8', maxWidth: '480px' }}>
              Stay ahead with data-driven insights into the current employment landscape. We track hiring trends and skill demands to keep you informed.
            </p>
          </div>
        </div>

        <div className="insights-content">
          <div className="insights-left">
            <div className="insight-card">
              <div className="insight-stat">
                <h3>87%</h3>
                <p>of recruiters use AI to screen candidates</p>
              </div>
              <div className="insight-detail">
                <p>
                  Optimize your profile with keywords that match your target roles to get noticed by automated systems.
                  Understanding how AI parses resumes can give you a significant advantage in the initial screening phase of your application.
                </p>
              </div>
            </div>
            <div className="insight-card">
              <div className="insight-stat">
                <h3>42%</h3>
                <p>higher salary with data-driven negotiation</p>
              </div>
              <div className="insight-detail">
                <p>
                  Candidates who research market data and leverage insights negotiate significantly better compensation packages.
                  Being prepared with industry standards and your personal value proposition is key to securing the best possible offer from employers.
                </p>
              </div>
            </div>
          </div>
          <div className="insights-right">
            <div className="trending-topics">
              <h3>In-Demand Skills</h3>
              <div className="skills-tags">
                <span className="skill-tag">Communication</span>
                <span className="skill-tag">Problem Solving</span>
                <span className="skill-tag">Leadership</span>
                <span className="skill-tag">Teamwork</span>
                <span className="skill-tag">Time Management</span>
                <span className="skill-tag">Adaptability</span>
              </div>
            </div>
            <div className="market-trends">
              <h3>Market Trends</h3>
              <ul className="trends-list">
                <li>Remote work opportunities increased by 156%</li>
                <li>Tech sector seeing 23% growth in Q2 2026</li>
                <li>Sales and Marketing roles in highest demand</li>
                <li>Hybrid work models becoming standard</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section - Redesigned to match "Exclusive Services" Style */}
      <section className="features-section-new">
        <div className="features-dark-banner">
          <div className="banner-content">
            <div className="banner-text">
              <div className="badge-mini">
                <span className="dot"></span> Benefits
              </div>
              <h2>Why Choose <span className="highlight-text">Garuda Career?</span></h2>
            </div>
            <div className="banner-desc-top">
              <p>We provide the best tools to help you land your next big career move with confidence and speed. Our platform is designed to automate the hard parts of job hunting so you can focus on your interview performance.</p>
            </div>
          </div>
        </div>

        <div className="marquee-container-new">
          <div className="marquee-content-new">
            {[
              {
                title: "Fast Applications",
                desc: "Apply to multiple jobs with one click using our streamlined profile system and instant resume matching. Our one-tap application process significantly increases your outreach efficiency in the modern competitive market.",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>,
                accent: "#3b44f6"
              },
              {
                title: "Smart Matching",
                desc: "Our AI-driven algorithms match your skills with the perfect opportunities, ensuring the best fit for your career. We analyze thousands of data points to find roles that align perfectly with your unique professional strengths.",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
                accent: "#6366f1"
              },
              {
                title: "Expert Guidance",
                desc: "Get career advice and industry expertise from professionals who know what it takes to succeed in the job market. Our mentorship network provides insider tips on salary negotiation, personal branding, and portfolio development.",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M18 20V10"></path><path d="M12 20V4"></path><path d="M6 20v-6"></path></svg>,
                accent: "#8b5cf6"
              },
              /* Duplicating for seamless marquee */
              { title: "Fast Applications", desc: "Apply to multiple jobs with one click using our streamlined profile system and instant resume matching. Our one-tap application process significantly increases your outreach efficiency in the modern competitive market.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>, accent: "#3b44f6" },
              { title: "Smart Matching", desc: "Our AI-driven algorithms match your skills with the perfect opportunities, ensuring the best fit for your career. We analyze thousands of data points to find roles that align perfectly with your unique professional strengths.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>, accent: "#6366f1" },
              { title: "Expert Guidance", desc: "Get career advice and industry expertise from professionals who know what it takes to succeed in the job market. Our mentorship network provides insider tips on salary negotiation, personal branding, and portfolio development.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M18 20V10"></path><path d="M12 20V4"></path><path d="M6 20v-6"></path></svg>, accent: "#8b5cf6" }
            ].map((feature, idx) => (
              <div key={idx} className="service-card-v2">
                <div className="service-icon-floating" style={{ backgroundColor: feature.accent }}>
                  {feature.icon}
                </div>
                <div className="service-card-body">
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />

      {/* Hidden SVG for mathematically perfect smooth curved clipPath */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
        <defs>
          <clipPath id="smooth-curved-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 
                     L 0.55,0 
                     C 0.58,0 0.60,0.02 0.62,0.12 
                     C 0.64,0.22 0.67,0.24 0.72,0.24 
                     L 1,0.24 
                     L 1,1 
                     L 0,1 
                     Z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default Home;
