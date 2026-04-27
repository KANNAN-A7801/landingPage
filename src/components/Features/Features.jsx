import React from 'react';
import './Features.css';
import hero1Image from '../../assets/hero1.png';
import Footer from '../Footer/Footer';

const Features = () => {
  return (
    <>
      {/* Section 1: Hero */}
      <header className="lpf-hero">
        <div className="lpf-hero-content">
          <div className="lpf-hero-badge">
            <span></span> Your Career, Fully Optimised
          </div>
          <h1 className="lpf-hero-title">Redefining the way<br />you land jobs</h1>
          <p>
            Take control of your career with real-time job tracking and intuitive tools designed to grow your professional life effortlessly.
          </p>
          <div className="lpf-hero-actions">
            <button className="lpf-btn-primary">Get Started</button>
            <button className="lpf-btn-secondary">
              <i className="ri-search-line"></i> Explore Jobs Now
            </button>
          </div>
          <div className="lpf-hero-stats">
            <div className="lpf-stat-item">
              <h3>12M+</h3>
              <p>Applications</p>
            </div>
            <div className="lpf-stat-item">
              <h3>1200+</h3>
              <p>Active Users</p>
            </div>
            <div className="lpf-stat-item">
              <h3>99.9%</h3>
              <p>Success Rate</p>
            </div>
          </div>
        </div>

        <div className="lpf-hero-visual">
          <div className="lpf-hero-decor">
            <h4>Top Referrals</h4>
            <div className="lpf-decor-faces">
              <img src="https://ui-avatars.com/api/?name=Sam&background=0066ff&color=fff" alt="User" />
              <img src="https://ui-avatars.com/api/?name=Jane&background=66a3ff&color=fff" alt="User" />
              <img src="https://ui-avatars.com/api/?name=Alex&background=00b2ff&color=fff" alt="User" />
              <img src="https://ui-avatars.com/api/?name=Bob&background=0b1120&color=fff" alt="User" />
            </div>
          </div>
          <img src={hero1Image} alt="App Mockup" className="lpf-hero-mockup" />
        </div>
      </header>

      {/* Section 2: Publications / Partners */}
      <section className="lpf-pubs-section">
        <h3>Recognized by Top Career Publications</h3>
        <div className="lpf-pubs-logos">
          <div className="lpf-pub-item lpf-pub-1"><i className="ri-blaze-fill"></i> Ephemeral</div>
          <div className="lpf-pub-item lpf-pub-2"><i className="ri-flight-takeoff-line"></i> Wildcrafted</div>
          <div className="lpf-pub-item lpf-pub-3"><i className="ri-code-box-fill"></i> Codecraft_</div>
          <div className="lpf-pub-item lpf-pub-4"><i className="ri-asterisk"></i> Convergence</div>
          <div className="lpf-pub-item lpf-pub-5"><i className="ri-compass-3-fill"></i> ImgComp</div>
        </div>
      </section>

      {/* Section 3: Smart Features Grid */}
      <section id="features" className="lpf-features-container">
        <div className="lpf-section-label">
          <i className="ri-fire-fill"></i> How It Works
        </div>
        <div className="lpf-features-header">
          <h2>Smart features for <br /> Job Seekers</h2>
          <p>We use advanced algorithms to keep your job search optimized and your personal information protected.</p>
        </div>

        <div className="lpf-features-grid">
          <div className="lpf-box lpf-large-feature">
            <h3>Easy To Manage Your Profile</h3>
            <p>Save time without thinking. Set application goals and let the system match you automatically weekly or monthly.</p>

            <div className="lpf-mockup-inner">
              <div className="lpf-avatar">
                <div className="lpf-mockup-row">
                  <span><strong>Interviews</strong></span>
                  <span>3 upcoming</span>
                </div>
                <div className="lpf-mockup-row">
                  <span><strong>Applications</strong></span>
                  <span style={{ color: 'var(--primary)' }}>54 Active</span>
                </div>
                <div className="lpf-mockup-row">
                  <span><strong>Profile Score</strong></span>
                  <span>92/100</span>
                </div>
                <div className="lpf-mockup-chart">
                  <h4>Offers Pipeline</h4>
                  <h2 style={{ color: 'var(--primary)', marginTop: '8px' }}>4 Pending</h2>
                  <div className="lpf-chart-bars">
                    <div className="lpf-bar" style={{ height: '30%' }}></div>
                    <div className="lpf-bar" style={{ height: '50%' }}></div>
                    <div className="lpf-bar lpf-active" style={{ height: '100%' }}></div>
                    <div className="lpf-bar" style={{ height: '70%' }}></div>
                    <div className="lpf-bar" style={{ height: '40%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lpf-small-cards">
            <div className="lpf-feature-sm">
              <div className="lpf-feature-icon"><i className="ri-compass-discover-line"></i></div>
              <h4>Smart Job Discovery</h4>
              <p>Find the best jobs based on your skills and experience seamlessly.</p>
            </div>

            <div className="lpf-feature-sm">
              <div className="lpf-feature-icon"><i className="ri-line-chart-line"></i></div>
              <h4>Progress Analytics</h4>
              <p>Track your applications, interview hit rates, and overall job hunting progress.</p>
            </div>

            <div className="lpf-feature-sm">
              <div className="lpf-feature-icon"><i className="ri-lock-2-line"></i></div>
              <h4>Secure & Encrypted</h4>
              <p>Your data and career goals are always safe. We use bank-grade security to keep your details private.</p>
            </div>

            <div className="lpf-feature-sm">
              <div className="lpf-feature-icon"><i className="ri-global-line"></i></div>
              <h4>Global Opportunities</h4>
              <p>Set location preferences, get alerts, and find remote roles globally automatically.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Featured Jobs */}
      <div className="lpf-container">
        <section id="jobs" className="lpf-featured-jobs-section">
          <div className="lpf-fj-header">
            <div>
              <h2>Our <span style={{ color: 'var(--primary)' }}>Featured Jobs</span></h2>
            </div>
            <a href="#" className="lpf-see-all">See All Jobs</a>
          </div>

          <div className="lpf-fj-search-bar">
            <div className="lpf-fj-input">
              <i className="ri-search-line"></i>
              <span>Job Title<br /><strong>All</strong></span>
            </div>
            <div className="lpf-fj-divider"></div>
            <div className="lpf-fj-input">
              <i className="ri-bar-chart-box-line"></i>
              <span>Level of Experience<br /><strong>Mid-Senior Level</strong></span>
              <i className="ri-arrow-down-s-line lpf-ml-auto"></i>
            </div>
            <div className="lpf-fj-divider"></div>
            <div className="lpf-fj-input">
              <i className="ri-map-pin-line"></i>
              <span>Working Model<br /><strong>On-Site</strong></span>
              <i className="ri-arrow-down-s-line lpf-ml-auto"></i>
            </div>
            <button className="lpf-btn-primary lpf-fj-btn">Search</button>
          </div>

          <div className="lpf-fj-grid">
            <div className="lpf-job-card">
              <div className="lpf-jc-top">
                <div className="lpf-jc-logo" style={{ background: '#FDE047', color: '#1C1C1E' }}>A.</div>
                <div className="lpf-jc-title">
                  <h5>React Developer</h5>
                  <p>Anywhere Inc.</p>
                </div>
              </div>
              <div className="lpf-jc-tags">
                <span>Full Time</span>
                <span>On-Site</span>
                <span>Mid-Senior Level</span>
              </div>
              <div className="lpf-jc-bottom">
                <div className="lpf-jc-faces">
                  <img src="https://ui-avatars.com/api/?name=J&background=random" alt="face" />
                  <img src="https://ui-avatars.com/api/?name=K&background=random" alt="face" />
                  <small>53+ Applicants</small>
                </div>
                <div className="lpf-jc-salary">$102k - $140k/yr</div>
              </div>
            </div>

            <div className="lpf-job-card">
              <div className="lpf-jc-top">
                <div className="lpf-jc-logo" style={{ background: '#1C1C1E', color: '#fff' }}>Q.</div>
                <div className="lpf-jc-title">
                  <h5>Accountant</h5>
                  <p>Quality Software</p>
                </div>
              </div>
              <div className="lpf-jc-tags">
                <span>Full Time</span>
                <span>On-Site</span>
                <span>Mid-Senior Level</span>
              </div>
              <div className="lpf-jc-bottom">
                <div className="lpf-jc-faces">
                  <img src="https://ui-avatars.com/api/?name=T&background=random" alt="face" />
                  <img src="https://ui-avatars.com/api/?name=S&background=random" alt="face" />
                  <small>21+ Applicants</small>
                </div>
                <div className="lpf-jc-salary">$80k - $110k/yr</div>
              </div>
            </div>

            <div className="lpf-job-card">
              <div className="lpf-jc-top">
                <div className="lpf-jc-logo" style={{ background: 'var(--primary)', color: '#fff' }}>V.</div>
                <div className="lpf-jc-title">
                  <h5>UX/UI Designer</h5>
                  <p>Visual Arts Corp</p>
                </div>
              </div>
              <div className="lpf-jc-tags">
                <span>Contract</span>
                <span>Remote</span>
                <span>Mid-Senior Level</span>
              </div>
              <div className="lpf-jc-bottom">
                <div className="lpf-jc-faces">
                  <img src="https://ui-avatars.com/api/?name=W&background=random" alt="face" />
                  <img src="https://ui-avatars.com/api/?name=M&background=random" alt="face" />
                  <small>150+ Applicants</small>
                </div>
                <div className="lpf-jc-salary">$90k - $120k/yr</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Advanced Profile Analytics */}
        <section className="lpf-analytics-section">
          <div className="lpf-an-content">
            <div className="lpf-section-label">
              <i className="ri-pie-chart-line"></i> Deep Insights
            </div>
            <h2>Unlock Your <br />Career Analytics</h2>
            <p>Monitor your performance across every submitted application. Track what works, refine your resume, and negotiate better packages using data-driven insights tailored to your industry.</p>
            <div className="lpf-an-stats-grid">
              <div className="lpf-an-stat-box">
                <h4>98%</h4>
                <p>Response Rate</p>
              </div>
              <div className="lpf-an-stat-box">
                <h4>3x</h4>
                <p>Faster Hiring</p>
              </div>
            </div>
          </div>
          <div className="lpf-an-visual">
            <div className="lpf-an-chart-card">
              <div className="lpf-anc-top">
                <h5>Application Success Rate</h5>
                <span className="lpf-badge-green">+14.5%</span>
              </div>
              <div className="lpf-anc-graph">
                <div className="lpf-anc-line" style={{ height: '30%' }}></div>
                <div className="lpf-anc-line" style={{ height: '50%' }}></div>
                <div className="lpf-anc-line" style={{ height: '80%' }}></div>
                <div className="lpf-anc-line" style={{ height: '60%' }}></div>
                <div className="lpf-anc-line" style={{ height: '100%', background: 'var(--primary)' }}></div>
                <div className="lpf-anc-line" style={{ height: '90%' }}></div>
                <div className="lpf-anc-line" style={{ height: '70%' }}></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Section 7: All Jobs Search Platform */}
      <section id="explore-hub" className="lpf-all-jobs-section">
        <div className="lpf-container">
          <div className="lpf-section-label">
            <i className="ri-briefcase-line"></i> Jobs Hub
          </div>
          <div className="lpf-aj-header">
            <h2>Find Your <span style={{ color: 'var(--primary)' }}>Perfect Job</span></h2>
            <p>Discover thousands of opportunities across all industries - from Healthcare and Education to Finance and Technology. Search, filter, and apply to your dream job in minutes.</p>
          </div>

          <div className="lpf-aj-search-grid">
            <div className="lpf-search-feature">
              <div className="lpf-search-visual">
                <div className="lpf-search-icon-large">
                  <i className="ri-search-2-line"></i>
                </div>
                <div className="lpf-search-metrics">
                  <div className="lpf-metric-item">
                    <span className="lpf-metric-value">50K+</span>
                    <span className="lpf-metric-label">All Jobs</span>
                  </div>
                  <div className="lpf-metric-item">
                    <span className="lpf-metric-value">1000+</span>
                    <span className="lpf-metric-label">Companies</span>
                  </div>
                </div>
              </div>
              <div className="lpf-search-details">
                <h4>Smart Job Search</h4>
                <p>Search through thousands of roles across every sector including Healthcare, Education, Logistics, Finance, Retail, Hospitality, and more. Our advanced filters help you find exactly what you're looking for.</p>
                <div className="lpf-search-highlights">
                  <span><i className="ri-check-line"></i> Category Filters</span>
                  <span><i className="ri-check-line"></i> Location Based</span>
                  <span><i className="ri-check-line"></i> Salary Range</span>
                </div>
              </div>
            </div>

            <div className="lpf-search-feature">
              <div className="lpf-search-visual">
                <div className="lpf-search-icon-large">
                  <i className="ri-user-heart-line"></i>
                </div>
                <div className="lpf-search-metrics">
                  <div className="lpf-metric-item">
                    <span className="lpf-metric-value">150+</span>
                    <span className="lpf-metric-label">Job Sectors</span>
                  </div>
                  <div className="lpf-metric-item">
                    <span className="lpf-metric-value">Real-time</span>
                    <span className="lpf-metric-label">Matching</span>
                  </div>
                </div>
              </div>
              <div className="lpf-search-details">
                <h4>Skill & Experience Matching</h4>
                <p>Get matched with jobs based on your unique skills and experience - whether you're a Teacher, Nurse, Sales Professional, or Engineer. Our AI analyzes your background and profile to find the perfect career fit.</p>
                <div className="lpf-search-highlights">
                  <span><i className="ri-check-line"></i> Experience Matching</span>
                  <span><i className="ri-check-line"></i> Certification Check</span>
                  <span><i className="ri-check-line"></i> Local Preferences</span>
                </div>
              </div>
            </div>

            <div className="lpf-search-feature">
              <div className="lpf-search-visual">
                <div className="lpf-search-icon-large">
                  <i className="ri-rocket-2-line"></i>
                </div>
                <div className="lpf-search-metrics">
                  <div className="lpf-metric-item">
                    <span className="lpf-metric-value">Instant</span>
                    <span className="lpf-metric-label">Apply</span>
                  </div>
                  <div className="lpf-metric-item">
                    <span className="lpf-metric-value">One-click</span>
                    <span className="lpf-metric-label">Easy Apply</span>
                  </div>
                </div>
              </div>
              <div className="lpf-search-details">
                <h4>Quick Job Applications</h4>
                <p>Apply to multiple jobs instantly with our one-click application system. Your profile is automatically optimized for each job type, increasing your chances of getting hired faster.</p>
                <div className="lpf-search-highlights">
                  <span><i className="ri-check-line"></i> Quick Apply</span>
                  <span><i className="ri-check-line"></i> Profile Builder</span>
                  <span><i className="ri-check-line"></i> Status Tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Job Market Insights */}
      <section className="lpf-job-insights-section">
        <div className="lpf-container">
          <div className="lpf-section-label">
            <i className="ri-bar-chart-box-line"></i> Job Market Data
          </div>
          <div className="lpf-ji-header">
            <h2>Stay Ahead with <span style={{ color: 'var(--primary)' }}>Job Insights</span></h2>
            <p>Access real-time job market data, salary trends, and industry analysis across all sectors to make informed career decisions.</p>
          </div>

          <div className="lpf-ji-content">
            <div className="lpf-ji-main-data">
              <div className="lpf-data-card">
                <h4>Current Job Trends</h4>
                <div className="lpf-trend-list">
                  <div className="lpf-trend-item">
                    <div className="lpf-trend-indicator lpf-up">
                      <i className="ri-arrow-up-line"></i> +24%
                    </div>
                    <div className="lpf-trend-info">
                      <span className="lpf-trend-title">Healthcare Professionals</span>
                      <span className="lpf-trend-desc">High demand for specialized nursing and clinical care</span>
                    </div>
                  </div>
                  <div className="lpf-trend-item">
                    <div className="lpf-trend-indicator lpf-up">
                      <i className="ri-arrow-up-line"></i> +18%
                    </div>
                    <div className="lpf-trend-info">
                      <span className="lpf-trend-title">Education Specialists</span>
                      <span className="lpf-trend-desc">Growing need for online learning and special education</span>
                    </div>
                  </div>
                  <div className="lpf-trend-item">
                    <div className="lpf-trend-indicator lpf-up">
                      <i className="ri-arrow-up-line"></i> +21%
                    </div>
                    <div className="lpf-trend-info">
                      <span className="lpf-trend-title">Logistics & Supply Chain</span>
                      <span className="lpf-trend-desc">Rapid expansion in e-commerce and global distribution</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lpf-data-card">
                <h4>Salary Ranges by Role</h4>
                <div className="lpf-salary-grid">
                  <div className="lpf-salary-item">
                    <span className="lpf-salary-role">Registered Nurse</span>
                    <span className="lpf-salary-range">$75k - $120k</span>
                    <span className="lpf-salary-trend lpf-positive">+ 10% YoY</span>
                  </div>
                  <div className="lpf-salary-item">
                    <span className="lpf-salary-role">Secondary Teacher</span>
                    <span className="lpf-salary-range">$60k - $95k</span>
                    <span className="lpf-salary-trend lpf-positive">+ 7% YoY</span>
                  </div>
                  <div className="lpf-salary-item">
                    <span className="lpf-salary-role">Operations Manager</span>
                    <span className="lpf-salary-range">$85k - $140k</span>
                    <span className="lpf-salary-trend lpf-positive">+ 12% YoY</span>
                  </div>
                  <div className="lpf-salary-item">
                    <span className="lpf-salary-role">Financial Analyst</span>
                    <span className="lpf-salary-range">$70k - $115k</span>
                    <span className="lpf-salary-trend lpf-positive">+ 9% YoY</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lpf-ji-side-data">
              <div className="lpf-insight-card">
                <h4>Popular Job Categories</h4>
                <div className="lpf-skills-cloud">
                  <span className="lpf-skill-tag">Nurse</span>
                  <span className="lpf-skill-tag">Designer</span>
                  <span className="lpf-skill-tag">Accountant</span>
                  <span className="lpf-skill-tag">Vendor</span>
                  <span className="lpf-skill-tag">Driver</span>
                  <span className="lpf-skill-tag">Chef</span>
                  <span className="lpf-skill-tag">Sales Strategy</span>
                  <span className="lpf-skill-tag">Data Analysis</span>
                </div>
              </div>

              <div className="lpf-insight-card">
                <h4>Job Market Forecast</h4>
                <div className="lpf-forecast-list">
                  <div className="lpf-forecast-item">
                    <div className="lpf-forecast-year">2024</div>
                    <div className="lpf-forecast-desc">Service industry jobs see 20% growth nationwide</div>
                  </div>
                  <div className="lpf-forecast-item">
                    <div className="lpf-forecast-year">2025</div>
                    <div className="lpf-forecast-desc">Healthcare and education sectors expand significantly</div>
                  </div>
                  <div className="lpf-forecast-item">
                    <div className="lpf-forecast-year">2026</div>
                    <div className="lpf-forecast-desc">Remote and flexible work options increase across all industries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Features;
