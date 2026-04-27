import React from 'react';
import './AboutPage.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import worldMap from '../../assets/world image.jpg';
import ourValueImg from '../../assets/our value image.jpg';

const AboutPage = () => {
  const partners = [
    { name: 'Google', icon: 'ri-google-fill' },
    { name: 'Amazon', icon: 'ri-amazon-fill' },
    { name: 'Microsoft', icon: 'ri-microsoft-fill' },
    { name: 'Netflix', icon: 'ri-netflix-fill' },
    { name: 'Meta', icon: 'ri-facebook-circle-fill' },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Esther Howard',
      role: 'Product Designer',
      text: 'Garuda Career helped me find my dream job within weeks. The interface is so intuitive and the community support is unmatched. Highly recommend to anyone looking for a career change!',
      rating: 4.7,
      reviews: 2098,
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400'
    }
  ];

  const communityMembers = [
    'https://i.pravatar.cc/150?u=1',
    'https://i.pravatar.cc/150?u=2',
    'https://i.pravatar.cc/150?u=3',
    'https://i.pravatar.cc/150?u=4',
    'https://i.pravatar.cc/150?u=5',
    'https://i.pravatar.cc/150?u=6',
    'https://i.pravatar.cc/150?u=7',
    'https://i.pravatar.cc/150?u=8',
    'https://i.pravatar.cc/150?u=9',
    'https://i.pravatar.cc/150?u=10',
  ];

  return (
    <div className="about-page">
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="ab-hero">
        <div className="ab-container">
          <div className="ab-hero-grid">
            <div className="ab-hero-left">
              <span className="ab-tag">ABOUT US</span>
              <h1 className="ab-hero-title">Get The Best <br /> Career Path Here</h1>
              <p className="ab-hero-subtitle">
                Find unbeatable opportunities and save more on your career journey with our expert guidance.
                Where every professional milestone becomes an unforgettable success.
              </p>
              <button className="ab-btn-outline">Explore More <i className="ri-arrow-right-line"></i></button>
            </div>

            <div className="ab-hero-right">
              <div className="ab-stats-card">
                <div className="ab-stats-header">
                  <h3>Our Achievements</h3>
                  <p>Building the future of recruitment</p>
                </div>

                <div className="ab-stats-grid">
                  <div className="ab-stat-box">
                    <div className="ab-stat-icon"><i className="ri-team-line"></i></div>
                    <div className="ab-stat-info">
                      <h4>30k+</h4>
                      <span>Active Job Seekers</span>
                    </div>
                  </div>

                  <div className="ab-stat-box">
                    <div className="ab-stat-icon"><i className="ri-building-line"></i></div>
                    <div className="ab-stat-info">
                      <h4>5k+</h4>
                      <span>Partner Companies</span>
                    </div>
                  </div>

                  <div className="ab-stat-box">
                    <div className="ab-stat-icon"><i className="ri-briefcase-line"></i></div>
                    <div className="ab-stat-info">
                      <h4>15k</h4>
                      <span>Successful Placements</span>
                    </div>
                  </div>

                  <div className="ab-stat-box">
                    <div className="ab-stat-icon"><i className="ri-global-line"></i></div>
                    <div className="ab-stat-info">
                      <h4>10k</h4>
                      <span>worldwide users</span>
                    </div>
                  </div>
                </div>

                <div className="ab-stats-footer">
                  <button className="ab-btn-join-now">Join Our Community <i className="ri-arrow-right-line"></i></button>
                </div>
              </div>
            </div>
          </div>

          <div className="ab-map-visual">
            {/* World Map Image */}
            <img src={worldMap} alt="World Map" className="ab-world-map" />

            {/* Pop-up Pins - Repositioned for standard map layout */}
            <div className="ab-pin pin-1" style={{ top: '30%', left: '15%' }}>
              <div className="ab-dot"></div>
              <div className="ab-tooltip">
                <i className="ri-briefcase-line"></i>
                <span>10k+ Tech Jobs</span>
              </div>
            </div>

            <div className="ab-pin pin-2" style={{ top: '25%', left: '50%' }}>
              <div className="ab-dot"></div>
              <div className="ab-tooltip">
                <i className="ri-community-line"></i>
                <span>Global Network</span>
              </div>
            </div>

            <div className="ab-pin pin-3 pin-featured" style={{ top: '45%', left: '72%' }}>
              <div className="ab-dot"></div>
              <div className="ab-tooltip">
                <i className="ri-line-chart-line"></i>
                <span>Career Growth</span>
              </div>
              <div className="ab-badge">Top Rated</div>
            </div>

            <div className="ab-pin pin-4" style={{ top: '65%', left: '30%' }}>
              <div className="ab-dot"></div>
              <div className="ab-tooltip">
                <i className="ri-home-4-line"></i>
                <span>Remote Jobs</span>
              </div>
            </div>

            <div className="ab-pin pin-5" style={{ top: '55%', left: '52%' }}>
              <div className="ab-dot"></div>
              <div className="ab-tooltip">
                <i className="ri-user-star-line"></i>
                <span>Expert Mentors</span>
              </div>
            </div>

            <div className="ab-pin pin-6" style={{ top: '75%', left: '85%' }}>
              <div className="ab-dot"></div>
              <div className="ab-tooltip">
                <i className="ri-building-4-line"></i>
                <span>Top Companies</span>
              </div>
            </div>

            <div className="ab-pin pin-7" style={{ top: '30%', left: '80%' }}>
              <div className="ab-dot"></div>
              <div className="ab-tooltip">
                <i className="ri-verified-badge-line"></i>
                <span>Verified Profiles</span>
              </div>
            </div>

            {/* Connection Lines */}
            <svg className="ab-map-lines">
              <path d="M100,260 Q250,150 450,220" stroke="rgba(255,107,43,0.2)" fill="none" strokeDasharray="5,5" />
              <path d="M450,220 Q650,350 850,120" stroke="rgba(255,107,43,0.2)" fill="none" strokeDasharray="5,5" />
            </svg>
          </div>
        </div>


      </section>

      {/* Why Join Us (Replacing Testimonials with same UI) */}
      <section className="ab-testimonials">
        <div className="ab-container">
          <div className="ab-test-header">
            <span className="ab-tag">Our Value</span>
            <div className="ab-header-row">
              <h2>Why Job Seekers <br /> Choose Garuda</h2>
              <div className="ab-trust-header">
                <div className="ab-trust-top">
                  <i className="ri-medal-line"></i> Excellence
                </div>
                <div className="ab-trust-stars">
                  <h3>Certified</h3>
                  <div className="ab-stars-row">
                    {[1, 2, 3, 4, 5].map(s => <i key={s} className="ri-checkbox-circle-fill"></i>)}
                  </div>
                </div>
                <p>Verified by 500+ Industry Experts</p>
              </div>
            </div>
          </div>

          <div className="ab-test-content">
            <div className="ab-test-image">
              <img src={ourValueImg} alt="Our Values" />
            </div>
            <div className="ab-test-details">
              <div className="ab-reviews-meta">
                <span>Core Mission</span>
                <div className="ab-stars-gold">
                  <i className="ri-heart-fill"></i>
                  <span>User Centric</span>
                </div>
              </div>

              <div className="ab-quote-card">
                <i className="ri-focus-3-line"></i>
                <p>Our mission is to bridge the gap between talent and opportunity. We provide a seamless, AI-driven experience that empowers you to take control of your career journey and reach heights you never thought possible.</p>
                <div className="ab-quote-user">
                  <strong>Career Empowerment</strong>
                  <span>Since 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: Our Global Impact */}
      <section className="ab-impact">
        <div className="ab-container">
          <div className="ab-impact-grid">
            <div className="ab-impact-left">
              <span className="ab-tag">Our Impact</span>
              <h2>Making a Difference <br /> Across the Globe</h2>
              <p>We've helped thousands of professionals find their dream jobs and hundreds of companies build their ideal teams. Our platform is more than just a job board; it's a launchpad for careers.</p>
              <div className="ab-impact-stats">
                <div className="i-stat">
                  <h3>95%</h3>
                  <span>Placement Rate</span>
                </div>
                <div className="i-stat">
                  <h3>4.8/5</h3>
                  <span>User Satisfaction</span>
                </div>
              </div>
            </div>
            <div className="ab-impact-right">
              <div className="ab-impact-cards">
                <div className="impact-card">
                  <i className="ri-user-smile-line"></i>
                  <h4>User First</h4>
                  <p>Personalized job matching tailored to your unique skills.</p>
                </div>
                <div className="impact-card active">
                  <i className="ri-flashlight-line"></i>
                  <h4>Fast Growth</h4>
                  <p>Accelerate your career with exclusive insights and tools.</p>
                </div>
                <div className="impact-card">
                  <i className="ri-shield-check-line"></i>
                  <h4>Trust & Security</h4>
                  <p>Your data and privacy are our top priorities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section (Full Width) */}
      <section className="ab-community">
        <div className="ab-community-orange">
          {/* Floating Avatars */}
          <img className="av av-1" src="https://i.pravatar.cc/150?u=1" alt="user" />
          <img className="av av-2" src="https://i.pravatar.cc/150?u=2" alt="user" />
          <img className="av av-3" src="https://i.pravatar.cc/150?u=3" alt="user" />
          <img className="av av-4" src="https://i.pravatar.cc/150?u=4" alt="user" />
          <img className="av av-5" src="https://i.pravatar.cc/150?u=5" alt="user" />
          <img className="av av-6" src="https://i.pravatar.cc/150?u=6" alt="user" />
          <img className="av av-7" src="https://i.pravatar.cc/150?u=7" alt="user" />
          <img className="av av-8" src="https://i.pravatar.cc/150?u=8" alt="user" />

          <div className="ab-community-center">
            <div className="ab-polaroid p-left">
              <div className="p-img">
                <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=400" alt="Event" />
              </div>
              <div className="p-content">
                <h4>Design Portfolio <br /> Workshop</h4>
                <div className="p-meta">
                  <span><i className="ri-map-pin-line"></i> London, UK</span>
                  <div className="p-users">
                    <img src="https://i.pravatar.cc/50?u=10" alt="u" />
                    <img src="https://i.pravatar.cc/50?u=11" alt="u" />
                    <img src="https://i.pravatar.cc/50?u=12" alt="u" />
                  </div>
                </div>
              </div>
            </div>

            <div className="ab-polaroid p-right">
              <div className="p-img">
                <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=400" alt="Event" />
              </div>
              <div className="p-content">
                <h4>Global Career <br /> Networking</h4>
                <div className="p-meta">
                  <span><i className="ri-map-pin-line"></i> Bengaluru, IN</span>
                  <div className="p-users">
                    <img src="https://i.pravatar.cc/50?u=20" alt="u" />
                    <img src="https://i.pravatar.cc/50?u=21" alt="u" />
                    <img src="https://i.pravatar.cc/50?u=22" alt="u" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ab-community-footer">
            <h2>Meet Our Community</h2>
            <p>Experience the best in career growth beyond your imagination.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
