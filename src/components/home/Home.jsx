import React, { useState } from 'react';
import './Home.css';
import phone1 from '../../assets/phone1.png';
import phone2 from '../../assets/phone2.png';
import phone3 from '../../assets/phone3.png';
import buildProfile from '../../assets/Create & Build Profile.jpg';
import ContactPage from '../ContactPage/ContactPage';
import Footer from '../Footer/Footer';

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
      {/* Hero Section - Ditto Alignment */}
      <header className="hero">
        <div className="hero-content-top">
          {/* Float Elements moved here for alignment with title */}
          <div className="social-proof-float">
            <h3>1M+</h3>
            <p>Active Users</p>
            <div className="avatar-group">
              <img src="https://i.pravatar.cc/150?u=1" alt="A1" className="avatar" />
              <img src="https://i.pravatar.cc/150?u=2" alt="A2" className="avatar" />
              <img src="https://i.pravatar.cc/150?u=3" alt="A3" className="avatar" />
              <img src="https://i.pravatar.cc/150?u=4" alt="A4" className="avatar" />
              <div className="avatar-plus">+</div>
            </div>
          </div>

          <div className="trust-badge-float">
            <div className="badge-circle">
               <div className="badge-inner">
                  <i className="ri-award-fill"></i>
                  <span>BEST APPLICATION</span>
                  <small>100% Quality</small>
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
              <img src={phone1} alt="Listing" className="phone-mock p-side" />
            </div>
            <div className="phone-wrapper p-center-wrap">
              <img src={phone2} alt="Home" className="phone-mock p-center" />
            </div>
            <div className="phone-wrapper p-right-wrap">
              <img src={phone3} alt="Chat" className="phone-mock p-side" />
            </div>
          </div>
        </div>
      </header>

      {/* Dark Bottom Section - Boundary Overlap Alignment */}
      <section className="dark-section">
        <div className="dark-grid">
          <div className="cta-left">
            <h2 className="cta-title">
              Download <span className="yellow">Our Garuda Career</span> <br />
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
              width: '280px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 15px 30px rgba(0,0,0,0.3)'
            }}>
              <div className="card-top" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.2rem' }}>For iOS</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>iOS 15.6+</p>
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
                  marginBottom: '2.5rem',
                  cursor: 'pointer'
                }}
              >
                Download App
              </button>

              <div className="card-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div className="rating-mini" style={{ background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '12px' }}>
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
                  justifyContent: 'center',
                  marginRight: '-0.5rem',
                  marginBottom: '-0.5rem'
                }}>
                  <svg width="32" height="32" viewBox="0 0 384 512" fill="white"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
                </div>
              </div>
            </div>

            {/* Android Card */}
            <div className="card-custom" style={{
              background: '#2d2d35',
              padding: '1.5rem',
              borderRadius: '20px',
              width: '280px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 15px 30px rgba(0,0,0,0.3)'
            }}>
              <div className="card-top" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.2rem' }}>For Android</h3>
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
                  marginBottom: '2.5rem',
                  cursor: 'pointer'
                }}
              >
                Download App
              </button>

              <div className="card-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div className="rating-mini" style={{ background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '12px' }}>
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
                  justifyContent: 'center',
                  marginRight: '-0.5rem',
                  marginBottom: '-0.5rem'
                }}>
                  <svg width="32" height="32" viewBox="0 0 576 512" fill="white"><path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10l-48.5,83.93a242.13,242.13,0,0,0-246.64,0l-48.5-83.93a10,10,0,1,0-17.27,10l47.94,83A240.79,240.79,0,0,0,64,316.62H512a240.79,240.79,0,0,0-52.85-159.17" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Steps Section */}
      <section className="steps-section">
        <div className="steps-left">
          <h4 style={{ color: '#3b44f6', fontWeight: '700', fontSize: '2rem', marginBottom: '1rem' }}>How it Works</h4>
          <h2>Quick <span className="blue-text">Steps</span> To <br /> Getting A Job</h2>
          <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.6', maxWidth: '450px' }}>
            A simple 3-step process to help you find and apply for your dream career without any hassle.
          </p>
        </div>
        <div className="steps-list">
          <div className="step-card">
            <div className="step-icon icon-pink">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <div className="step-info">
              <h3>Create Account</h3>
              <p>Sign up in seconds and start your journey with a personalized experience.</p>
            </div>
          </div>
          <div className="step-card">
            <div className="step-icon icon-blue">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
            </div>
            <div className="step-info">
              <h3>Completed Your Profile</h3>
              <p>Add your skills and experience to get the most relevant job matches.</p>
            </div>
          </div>
          <div className="step-card">
            <div className="step-icon icon-yellow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <div className="step-info">
              <h3>Finding Jobs</h3>
              <p>Explore thousands of listings and apply to the ones that fit you best.</p>
            </div>
          </div>
        </div>
      </section>

      <ContactPage />

      {/* Start Your Job Search Today Section */}
      <section className="search-today-section">
        <div className="search-today-header">
          <h4 style={{ color: '#3b44f6', fontWeight: '700', fontSize: '2rem', marginBottom: '1rem' }}>About Us</h4>
          <h2>Start Your <span style={{ color: '#3b44f6' }}>Job Search</span> Today</h2>
        </div>
        <div className="search-visual">
          <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Professional Workspace" className="main-search-img" />
          <div className="vision-mission-cards">
            <div className="vm-card card-blue">
              <h3>Our Vision</h3>
              <p>To empower every individual with the tools and opportunities to build a fulfilling and successful career path.</p>
            </div>
            <div className="vm-card card-pink">
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
        <div className="expertise-header">
          <h4 style={{ color: '#3b44f6', fontWeight: '700', fontSize: '2rem', marginBottom: '1rem' }}>What We Offer</h4>
          <h2>Trust Our <span style={{ color: '#3b44f6' }}>Expertise</span></h2>
        </div>
        <div className="expertise-grid">
          <div className="expertise-card">
            <div className="expertise-img-wrapper">
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Job Recommendation" className="expertise-img" />
            </div>
            <h3>Job Recommendation</h3>
            <p>Get personalized job suggestions based on your profile, search history, and career preferences, powered by our advanced AI matching engine.</p>
            <button className="btn-learn-more">Learn More</button>
          </div>
          <div className="expertise-card">
            <div className="expertise-img-wrapper">
              <img src={buildProfile} alt="Profile Building" className="expertise-img" />
            </div>
            <h3>Create & Build Profile</h3>
            <p>Build a professional profile that stands out to recruiters. Showcase your achievements, skills, and portfolio in a modern, interactive way.</p>
            <button className="btn-learn-more">Learn More</button>
          </div>
        </div>
      </section>

      {/* Most Recent Jobs Section - Localized for India */}
      <section className="jobs-section">
        <div className="jobs-header">
          <h4 style={{ color: '#3b44f6', fontWeight: '700', fontSize: '2rem', marginBottom: '1rem' }}>Latest Jobs</h4>
          <h2 style={{ fontSize: '3rem', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>Most <span style={{ color: '#3b44f6' }}>Recent Jobs</span></h2>
        </div>

        <div className="jobs-grid">
          {[
            { title: "Marketing Manager", company: "Hindustan Unilever", logo: "H", location: "Mumbai, India", salary: "₹18L - ₹25L", type: "Full Time" },
            { title: "Sales Director", company: "Reliance Industries", logo: "R", location: "Mumbai, India", salary: "₹25L - ₹40L", type: "Full Time" },
            { title: "Human Resources Lead", company: "Tata Motors", logo: "T", location: "Pune, India", salary: "₹15L - ₹22L", type: "Hybrid" },
            { title: "Financial Analyst", company: "HDFC Bank", logo: "H", location: "Mumbai, India", salary: "₹12L - ₹18L", type: "Full Time" },
            { title: "Content Strategist", company: "Zomato", logo: "Z", location: "Gurgaon, India", salary: "₹10L - ₹15L", type: "Remote" },
            { title: "Operations Manager", company: "Flipkart", logo: "F", location: "Bangalore, India", salary: "₹16L - ₹24L", type: "Full Time" }
          ].map((job, idx) => (
            <div key={idx} className="job-card">
              <div className="job-card-top">
                <div className="company-logo">{job.logo}</div>
                <div className="job-tags">
                  <span className="tag tag-blue">{job.type}</span>
                  <span className="tag tag-gray">Hot</span>
                </div>
              </div>
              <h3>{job.title}</h3>
              <div className="job-meta">
                <span><i className="fa-solid fa-location-dot" style={{ color: '#3b44f6' }}></i> {job.location}</span>
                <span><i className="fa-solid fa-building" style={{ color: '#3b44f6' }}></i> {job.company}</span>
              </div>
              <div className="job-card-footer">
                <span className="salary">{job.salary}</span>
                <button onClick={handleSmartDownload} className="btn-apply">Apply Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Career Tips Carousel Section */}
      <section className="tips-carousel-section">
        <div className="tips-header">
          <h4 style={{ color: '#3b44f6', fontWeight: '700', fontSize: '2rem', marginBottom: '1rem' }}>Career Advice</h4>
          <h2 style={{ fontSize: '4rem', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>Job Search <span style={{ color: '#3b44f6' }}>Tips</span></h2>
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
        <div className="insights-header">
          <h4 style={{ color: '#3b44f6', fontWeight: '700', fontSize: '2rem', marginBottom: '1rem' }}>Market Insights</h4>
          <h2 style={{ fontSize: '3rem', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>Industry <span style={{ color: '#3b44f6' }}>Expertise</span></h2>
        </div>

        <div className="insights-content">
          <div className="insights-left">
            <div className="insight-card">
              <div className="insight-stat">
                <h3>87%</h3>
                <p>of recruiters use AI to screen candidates</p>
              </div>
              <div className="insight-detail">
                <p>Optimize your profile with keywords that match your target roles to get noticed by automated systems.</p>
              </div>
            </div>
            <div className="insight-card">
              <div className="insight-stat">
                <h3>42%</h3>
                <p>higher salary with data-driven negotiation</p>
              </div>
              <div className="insight-detail">
                <p>Candidates who research market data and leverage insights negotiate significantly better compensation packages.</p>
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

      {/* Why Choose Section - Marquee UI */}
      <section className="features-section">
        <div className="features-header">
          <h2>Why Choose Garuda Career?</h2>
          <p>We provide the best tools to help you land your next big role with confidence and ease.</p>
        </div>

        <div className="marquee-container">
          <div className="marquee-content">
            <div className="feature-card">
              <div className="feature-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
              </div>
              <h3>Fast Applications</h3>
              <p>Apply to multiple jobs with one click using our streamlined profile system and instant resume matching.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3>Smart Matching</h3>
              <p>Our AI-driven algorithms match your skills with the perfect opportunities, ensuring the best fit for your career.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10"></path><path d="M12 20V4"></path><path d="M6 20v-6"></path></svg>
              </div>
              <h3>Expert Guidance</h3>
              <p>Get career advice and industry expertise from professionals who know what it takes to succeed in the job market.</p>
            </div>
            {/* Duplicating for seamless marquee */}
            <div className="feature-card">
              <div className="feature-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
              </div>
              <h3>Fast Applications</h3>
              <p>Apply to multiple jobs with one click using our streamlined profile system and instant resume matching.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3>Smart Matching</h3>
              <p>Our AI-driven algorithms match your skills with the perfect opportunities, ensuring the best fit for your career.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10"></path><path d="M12 20V4"></path><path d="M6 20v-6"></path></svg>
              </div>
              <h3>Expert Guidance</h3>
              <p>Get career advice and industry expertise from professionals who know what it takes to succeed in the job market.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
