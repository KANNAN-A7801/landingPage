import React, { useState } from 'react';
import './Features.css';
import SEO from '../SEO/SEO';
import hero1Image from '../../assets/phone5.png';
import phone3 from '../../assets/phone5.png';
import phone4 from '../../assets/phone5.png';
import Footer from '../Footer/Footer';

const Features = () => {
  const allJobsPool = [
    {
      id: 1, title: "React Developer", company: "Anywhere Inc.", logo: "A.", logoBg: "#FDE047", logoColor: "#1C1C1E",
      tags: ["Full Time", "On-Site", "Mid-Senior Level"], applicants: "53+ Applicants", salary: "$102k - $140k/yr",
      faces: ["J", "K"], experience: "Mid-Senior Level", model: "On-Site"
    },
    {
      id: 2, title: "Accountant", company: "Quality Software", logo: "Q.", logoBg: "#1C1C1E", logoColor: "#fff",
      tags: ["Full Time", "On-Site", "Mid-Senior Level"], applicants: "21+ Applicants", salary: "$80k - $110k/yr",
      faces: ["T", "S"], experience: "Mid-Senior Level", model: "On-Site"
    },
    {
      id: 3, title: "UX/UI Designer", company: "Visual Arts Corp", logo: "V.", logoBg: "var(--primary)", logoColor: "#fff",
      tags: ["Contract", "Remote", "Mid-Senior Level"], applicants: "150+ Applicants", salary: "$90k - $120k/yr",
      faces: ["W", "M"], experience: "Mid-Senior Level", model: "Remote"
    },
    {
      id: 4, title: "Product Manager", company: "Innovate Hub", logo: "I.", logoBg: "#6366f1", logoColor: "#fff",
      tags: ["Full Time", "Remote", "Senior Level"], applicants: "42+ Applicants", salary: "$130k - $180k/yr",
      faces: ["L", "P"], experience: "Senior Level", model: "Remote"
    },
    {
      id: 5, title: "Data Analyst", company: "Metric Insights", logo: "M.", logoBg: "#10b981", logoColor: "#fff",
      tags: ["Full Time", "Hybrid", "Junior Level"], applicants: "89+ Applicants", salary: "$70k - $95k/yr",
      faces: ["D", "A"], experience: "Junior Level", model: "Hybrid"
    },
    {
      id: 6, title: "Marketing Specialist", company: "Growth Labs", logo: "G.", logoBg: "#f43f5e", logoColor: "#fff",
      tags: ["Part Time", "Remote", "Entry Level"], applicants: "12+ Applicants", salary: "$45k - $65k/yr",
      faces: ["S", "H"], experience: "Entry Level", model: "Remote"
    },
    {
      id: 7, title: "Head Nurse", company: "City Hospital", logo: "N.", logoBg: "#ef4444", logoColor: "#fff",
      tags: ["Full Time", "On-Site", "Senior Level"], applicants: "34+ Applicants", salary: "$95k - $130k/yr",
      faces: ["C", "R"], experience: "Senior Level", model: "On-Site"
    },
    {
      id: 8, title: "Executive Chef", company: "Azure Dining", logo: "C.", logoBg: "#f59e0b", logoColor: "#fff",
      tags: ["Full Time", "On-Site", "Senior Level"], applicants: "15+ Applicants", salary: "$85k - $115k/yr",
      faces: ["M", "B"], experience: "Senior Level", model: "On-Site"
    },
    {
      id: 9, title: "Delivery Driver", company: "QuickLogix", logo: "D.", logoBg: "#8b5cf6", logoColor: "#fff",
      tags: ["Full Time", "On-Site", "Entry Level"], applicants: "200+ Applicants", salary: "$40k - $55k/yr",
      faces: ["K", "Z"], experience: "Entry Level", model: "On-Site"
    }
  ];

  const [jobs, setJobs] = useState(allJobsPool.slice(0, 3));
  const [experience, setExperience] = useState("Mid-Senior Level");
  const [workingModel, setWorkingModel] = useState("On-Site");

  const handleSearch = () => {
    const filtered = allJobsPool.filter(job =>
      job.experience === experience && job.model === workingModel
    );

    let displayJobs = [...filtered];

    // Ensure variety by shuffling the remaining jobs that aren't already matched
    if (displayJobs.length < 3) {
      const remaining = allJobsPool
        .filter(j => !displayJobs.find(dj => dj.id === j.id))
        .sort(() => Math.random() - 0.5); // Shuffle remaining pool

      displayJobs = [...displayJobs, ...remaining.slice(0, 3 - displayJobs.length)];
    }

    setJobs(displayJobs.slice(0, 3));
  };

  const handleSmartDownload = (e) => {
    if (e) e.preventDefault();
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    let targetUrl = "https://apps.microsoft.com/home";

    if (/android/i.test(userAgent)) {
      targetUrl = "https://play.google.com/store/apps";
    } else if (/iPad|iPhone|iPod/.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
      targetUrl = "https://www.apple.com/app-store/";
    }

    window.location.href = targetUrl;
  };

  const handleSeeAllJobs = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.dispatchEvent(new CustomEvent('highlightGetApp'));
  };

  return (
    <>
      <SEO
        title="Job Search Features – AI-Powered Matching & Smart Filters | Garuda Career"
        description="Discover powerful job search features on Garuda Career. AI-powered matching, smart filters, real-time job tracking, and instant applications. Find IT, engineering, finance & healthcare jobs faster."
        canonical="/features"
        schema={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://garudacareer.com/" },
            { "@type": "ListItem", "position": 2, "name": "Features", "item": "https://garudacareer.com/features" }
          ]
        }}
      />
      {/* Section 1: Hero - Redesigned to 3-Column Showcase */}
      <header className="lpf-hero-v2">
        <div className="lpf-hero-content-v2">
          <div className="lpf-badge-v2">
            <span className="lpf-badge-dot"></span> Your Career, Fully Optimised
          </div>
          <h1 className="lpf-hero-title-v2">Redefining the way <br />you land jobs</h1>
          <p className="lpf-hero-text-v2">
            Take control of your career with real-time job tracking and intuitive tools designed to grow your professional life effortlessly.
          </p>
          <div className="lpf-hero-actions-v2">
            <button onClick={handleSmartDownload} className="lpf-btn-primary">Get Started</button>
            <button className="lpf-btn-text">
              <i className="ri-search-line"></i> Explore Jobs Now
            </button>
          </div>
          <div className="lpf-hero-stats-v2">
            <div className="lpf-stat-v2">
              <h3>12M+</h3>
              <p>Applications</p>
            </div>
            <div className="lpf-stat-v2">
              <h3>1200+</h3>
              <p>Active Users</p>
            </div>
            <div className="lpf-stat-v2">
              <h3>99.9%</h3>
              <p>Success Rate</p>
            </div>
          </div>
        </div>

        <div className="lpf-hero-visual-v2">
          <div className="lpf-phone-wrapper-v2">
            <img src={hero1Image} alt="Garuda App" className="lpf-hero-phone-v2" />
            {/* Floating Top Referrals Card */}
            <div className="lpf-floating-referrals">
              <div className="lpf-fr-header">
                <span>Top Referrals</span>
              </div>
              <div className="lpf-fr-avatars">
                <span className="lpf-fr-av lpf-av-1">SA</span>
                <span className="lpf-fr-av lpf-av-2">JA</span>
                <span className="lpf-fr-av lpf-av-3">AL</span>
                <span className="lpf-fr-av lpf-av-4">BO</span>
              </div>
            </div>
          </div>
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
          <p>
            We use advanced algorithms to keep your job search optimized and your personal information protected. 
            Our platform continuously analyzes market trends and your unique profile to ensure you are always ahead 
            of the competition with the most relevant opportunities delivered straight to your dashboard.
          </p>
        </div>

        <div className="lpf-features-grid">
          <div className="lpf-box lpf-large-feature">
            <h3>Easy To Manage Your Profile</h3>
            <p>Save time without thinking. Set application goals and let the system match you automatically weekly or monthly.</p>

            <div className="lpf-mockups-container">
              <div className="lpf-mockup-inner lpf-mockup-compact">
                <div className="lpf-mockup-row">
                  <span><strong>Interviews</strong></span>
                  <span>3 Total</span>
                </div>
                <div className="lpf-mockup-row">
                  <span><strong>Active</strong></span>
                  <span style={{ color: 'var(--primary)' }}>54 Jobs</span>
                </div>
                <div className="lpf-mockup-chart">
                  <h4 style={{ fontSize: '0.75rem' }}>Offers Pipeline</h4>
                  <h2 style={{ color: 'var(--primary)', marginTop: '4px', fontSize: '1.2rem' }}>4 Pending</h2>
                  <div className="lpf-chart-bars">
                    <div className="lpf-bar" style={{ height: '40%' }}></div>
                    <div className="lpf-bar lpf-active" style={{ height: '100%' }}></div>
                    <div className="lpf-bar" style={{ height: '60%' }}></div>
                  </div>
                </div>
              </div>

              <div className="lpf-mockup-inner lpf-mockup-compact">
                <div className="lpf-mockup-row">
                  <span><strong>Skills</strong></span>
                  <span>Advanced</span>
                </div>
                <div className="lpf-mockup-row">
                  <span><strong>Match</strong></span>
                  <span style={{ color: '#22c55e' }}>98% Fit</span>
                </div>
                <div className="lpf-mockup-chart">
                  <h4 style={{ fontSize: '0.75rem' }}>Growth Index</h4>
                  <h2 style={{ color: '#22c55e', marginTop: '4px', fontSize: '1.2rem' }}>Top 5%</h2>
                  <div className="lpf-chart-bars">
                    <div className="lpf-bar" style={{ height: '70%', background: '#22c55e' }}></div>
                    <div className="lpf-bar" style={{ height: '90%', background: '#22c55e' }}></div>
                    <div className="lpf-bar" style={{ height: '60%', background: '#22c55e' }}></div>
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
            <h2>Our <span style={{ color: 'var(--primary)' }}>Featured Jobs</span></h2>
          </div>

          <div className="lpf-fj-search-bar">
            <div className="lpf-fj-input">
              <i className="ri-search-line"></i>
              <span>Job Title<br /><strong>All</strong></span>
            </div>
            <div className="lpf-fj-divider"></div>
            <div className="lpf-fj-input">
              <i className="ri-bar-chart-box-line"></i>
              <span>Level of Experience<br />
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  style={{ background: 'transparent', border: 'none', fontWeight: 'bold', color: 'inherit', outline: 'none', cursor: 'pointer' }}
                >
                  <option>Entry Level</option>
                  <option>Junior Level</option>
                  <option>Mid-Senior Level</option>
                  <option>Senior Level</option>
                </select>
              </span>
            </div>
            <div className="lpf-fj-divider"></div>
            <div className="lpf-fj-input">
              <i className="ri-map-pin-line"></i>
              <span>Working Model<br />
                <select
                  value={workingModel}
                  onChange={(e) => setWorkingModel(e.target.value)}
                  style={{ background: 'transparent', border: 'none', fontWeight: 'bold', color: 'inherit', outline: 'none', cursor: 'pointer' }}
                >
                  <option>On-Site</option>
                  <option>Remote</option>
                  <option>Hybrid</option>
                </select>
              </span>
            </div>
            <button onClick={handleSearch} className="lpf-btn-primary lpf-fj-btn">Search</button>
          </div>

          <div className="lpf-fj-grid">
            {jobs?.map((job) => (
              <div key={job?.id} onClick={handleSmartDownload} className="lpf-job-card" style={{ cursor: 'pointer' }}>
                <div className="lpf-jc-top">
                  <div className="lpf-jc-logo" style={{ background: job?.logoBg, color: job?.logoColor }}>{job?.logo}</div>
                  <div className="lpf-jc-title">
                    <h5>{job?.title}</h5>
                    <p>{job?.company}</p>
                  </div>
                </div>
                <div className="lpf-jc-tags">
                  {job?.tags?.map((tag, i) => <span key={i}>{tag}</span>)}
                </div>
                <div className="lpf-jc-bottom">
                  <div className="lpf-jc-faces">
                    {job?.faces?.map((face, i) => (
                      <img key={i} src={`https://ui-avatars.com/api/?name=${face}&background=random`} alt="face" />
                    ))}
                    <small>{job?.applicants}</small>
                  </div>
                  <div className="lpf-jc-salary">{job?.salary}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Advanced Profile Analytics */}
        <section className="lpf-analytics-section">
          <div className="lpf-an-content">
            <div className="lpf-section-label">
              <i className="ri-pie-chart-line"></i> Deep Insights
            </div>
            <h2>Unlock Your Career <br /> Analytics</h2>
            <p>Monitor your performance across every submitted application. Track what works, refine your resume, and negotiate better packages using data-driven insights tailored to your industry.</p>
            <div className="lpf-an-stats-grid">
              <div className="lpf-an-stat-box">
                <div className="lpf-an-stat-top">
                  <h4>98%</h4>
                  <i className="ri-checkbox-circle-line"></i>
                </div>
                <p>Response Rate</p>
              </div>
              <div className="lpf-an-stat-box">
                <div className="lpf-an-stat-top">
                  <h4>3x</h4>
                  <i className="ri-rocket-line"></i>
                </div>
                <p>Faster Hiring</p>
              </div>
              <div className="lpf-an-stat-box">
                <div className="lpf-an-stat-top">
                  <h4>32%</h4>
                  <i className="ri-arrow-up-circle-line"></i>
                </div>
                <p>Profile Lift</p>
              </div>
              <div className="lpf-an-stat-box">
                <div className="lpf-an-stat-top">
                  <h4>2.5k</h4>
                  <i className="ri-briefcase-line"></i>
                </div>
                <p>Job Matches</p>
              </div>
            </div>
          </div>
          <div className="lpf-an-visual-v2">
            {/* Live Indicator Badge */}
            <div className="lpf-an-live-badge">
              <span className="lpf-live-dot"></span> Live Insights
            </div>

            <div className="lpf-an-dashboard-v2">
              {/* Card 1: Performance Pulse */}
              <div className="lpf-an-glass-card">
                <div className="lpf-ang-header">
                  <div className="lpf-ang-icon"><i className="ri-flashlight-line"></i></div>
                  <div className="lpf-ang-title">
                    <span>Success Rate</span>
                    <h4>98.4%</h4>
                  </div>
                  <div className="lpf-ang-trend">+2.4%</div>
                </div>
                <div className="lpf-an-pulse-container">
                  <div className="lpf-an-pulse-line"></div>
                  <div className="lpf-an-pulse-dot"></div>
                </div>
              </div>

              {/* Card 2: Scanning Speed */}
              <div className="lpf-an-glass-card">
                <div className="lpf-ang-header">
                  <div className="lpf-ang-icon"><i className="ri-speed-up-line"></i></div>
                  <div className="lpf-ang-title">
                    <span>Response Time</span>
                    <h4>Ultra Fast</h4>
                  </div>
                </div>
                <div className="lpf-an-scanner">
                  <div className="lpf-an-scan-bar"></div>
                  <div className="lpf-an-scan-glow"></div>
                </div>
              </div>

              {/* Card 3: Growth Funnel */}
              <div className="lpf-an-glass-card">
                <div className="lpf-ang-header">
                  <div className="lpf-ang-icon"><i className="ri-bubble-chart-line"></i></div>
                  <div className="lpf-ang-title">
                    <span>Total Conversion</span>
                    <h4>82,400</h4>
                  </div>
                </div>
                <div className="lpf-an-neon-funnel">
                  <div className="lpf-neon-step" style={{ width: '100%' }}></div>
                  <div className="lpf-neon-step active" style={{ width: '75%' }}></div>
                  <div className="lpf-neon-step" style={{ width: '50%' }}></div>
                </div>
              </div>
            </div>
            
            {/* Background Grid for Tech Look */}
            <div className="lpf-an-grid-overlay"></div>
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
            <h2>Find Your Perfect <span style={{ color: 'var(--primary)' }}>Dream Job</span> Today</h2>
            <p>
              Search through thousands of opportunities across every industry and sector. Our platform connects you with verified employers 
              and provides real-time updates on your application status, ensuring you never miss a career-defining opportunity.
            </p>
          </div>

          <div className="lpf-aj-search-grid">
            <div className="lpf-search-feature">
              <div className="lpf-search-visual">
                <div className="lpf-search-metrics">
                  <div className="lpf-metric-item">
                    <span className="lpf-metric-value">50K+</span>
                    <span className="lpf-metric-label">All Jobs</span>
                  </div>
                  <div className="lpf-metric-item">
                    <span className="lpf-metric-value">1000+</span>
                    <span className="lpf-metric-label">Companies</span>
                  </div>
                  {/* Moved here from right */}
                  <div className="lpf-metric-item sm">
                    <span className="lpf-metric-value">Category</span>
                    <span className="lpf-metric-label">Filters</span>
                  </div>
                  <div className="lpf-metric-item sm">
                    <span className="lpf-metric-value">Location</span>
                    <span className="lpf-metric-label">Based</span>
                  </div>
                </div>
              </div>
              <div className="lpf-search-details">
                <h4>Smart Job Search <i className="ri-search-2-line lpf-h-icon"></i></h4>
                <p>
                  Search through thousands of roles across every sector including Healthcare, Education, Logistics, Finance, Retail, Hospitality, and more. 
                  Our advanced filters help you find exactly what you're looking for by analyzing your specific career requirements and preferences.
                  Experience a seamless search process that connects you with the most relevant opportunities in your field.
                  Our platform ensures you are always presented with verified listings that match your unique professional trajectory.
                </p>
              </div>
            </div>

            <div className="lpf-search-feature">
              <div className="lpf-search-visual">
                <div className="lpf-search-metrics">
                  <div className="lpf-metric-item">
                    <span className="lpf-metric-value">150+</span>
                    <span className="lpf-metric-label">Job Sectors</span>
                  </div>
                  <div className="lpf-metric-item">
                    <span className="lpf-metric-value">Real-time</span>
                    <span className="lpf-metric-label">Matching</span>
                  </div>
                  <div className="lpf-metric-item sm">
                    <span className="lpf-metric-value">Experience</span>
                    <span className="lpf-metric-label">Matching</span>
                  </div>
                  <div className="lpf-metric-item sm">
                    <span className="lpf-metric-value">Certification</span>
                    <span className="lpf-metric-label">Check</span>
                  </div>
                </div>
              </div>
              <div className="lpf-search-details">
                <h4>Skill & Experience Matching <i className="ri-user-heart-line lpf-h-icon"></i></h4>
                <p>
                  Get matched with jobs based on your unique skills and experience - whether you're a Teacher, Nurse, Sales Professional, or Engineer. 
                  Our AI analyzes your background and profile to find the perfect career fit, ensuring you only apply to roles where you are highly qualified.
                  Stay ahead of the curve with intelligent matching that evolves as your professional profile grows and your experience expands.
                  We bridge the gap between your current expertise and your future career aspirations.
                </p>
              </div>
            </div>

            <div className="lpf-search-feature">
              <div className="lpf-search-visual">
                <div className="lpf-search-metrics">
                  <div className="lpf-metric-item">
                    <span className="lpf-metric-value">Instant</span>
                    <span className="lpf-metric-label">Apply</span>
                  </div>
                  <div className="lpf-metric-item">
                    <span className="lpf-metric-value">One-click</span>
                    <span className="lpf-metric-label">Easy Apply</span>
                  </div>
                  <div className="lpf-metric-item sm">
                    <span className="lpf-metric-value">Quick</span>
                    <span className="lpf-metric-label">Apply</span>
                  </div>
                  <div className="lpf-metric-item sm">
                    <span className="lpf-metric-value">Profile</span>
                    <span className="lpf-metric-label">Builder</span>
                  </div>
                </div>
              </div>
              <div className="lpf-search-details">
                <h4>Quick Job Applications <i className="ri-rocket-2-line lpf-h-icon"></i></h4>
                <p>
                  Apply to multiple jobs instantly with our one-click application system. Your profile is automatically optimized for each job type, increasing your chances of getting hired faster.
                  Stop wasting time on repetitive forms and let our platform handle the submission process across thousands of compatible job openings.
                  Track your application status in real-time and receive instant updates as soon as recruiters interact with your submitted profile.
                  Leverage our automation to focus on what truly matters: preparing for your next successful interview.
                </p>
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
            <p>
              Access real-time job market data, salary trends, and industry analysis. Stay ahead of the competition with live 
              performance insights and data. Our comprehensive market reports help you make informed decisions. 
            </p>
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
                  <div className="lpf-trend-item">
                    <div className="lpf-trend-indicator lpf-up">
                      <i className="ri-arrow-up-line"></i> +15%
                    </div>
                    <div className="lpf-trend-info">
                      <span className="lpf-trend-title">Digital Marketing</span>
                      <span className="lpf-trend-desc">Increased demand for SEO and social media strategy</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lpf-data-card">
                <h4>Salary Ranges by Role</h4>
                <div className="lpf-salary-grid">
                  {/* <div className="lpf-salary-item">
                    <span className="lpf-salary-role">Registered Nurse</span>
                    <span className="lpf-salary-range">$75k - $120k</span>
                    <span className="lpf-salary-trend lpf-positive">+ 10% YoY</span>
                  </div>
                  <div className="lpf-salary-item">
                    <span className="lpf-salary-role">Secondary Teacher</span>
                    <span className="lpf-salary-range">$60k - $95k</span>
                    <span className="lpf-salary-trend lpf-positive">+ 7% YoY</span>
                  </div> */}
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
                  <div className="lpf-salary-item">
                    <span className="lpf-salary-role">Software Engineer</span>
                    <span className="lpf-salary-range">$95k - $160k</span>
                    <span className="lpf-salary-trend lpf-positive">+ 15% YoY</span>
                  </div>
                  <div className="lpf-salary-item">
                    <span className="lpf-salary-role">Project Manager</span>
                    <span className="lpf-salary-range">$80k - $130k</span>
                    <span className="lpf-salary-trend lpf-positive">+ 8% YoY</span>
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

              <div className="lpf-insight-card">
                <h4>Hiring Activity Pulse</h4>
                <div className="lpf-pulse-list">
                  <div className="lpf-pulse-item">
                    <div className="lpf-pulse-info">
                      <span className="lpf-pulse-label">Healthcare</span>
                      <span className="lpf-pulse-val">High</span>
                    </div>
                    <div className="lpf-pulse-bar">
                      <div className="lpf-pulse-fill" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="lpf-pulse-item">
                    <div className="lpf-pulse-info">
                      <span className="lpf-pulse-label">Logistics</span>
                      <span className="lpf-pulse-val">Steady</span>
                    </div>
                    <div className="lpf-pulse-bar">
                      <div className="lpf-pulse-fill" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div className="lpf-pulse-item">
                    <div className="lpf-pulse-info">
                      <span className="lpf-pulse-label">Education</span>
                      <span className="lpf-pulse-val">Increasing</span>
                    </div>
                    <div className="lpf-pulse-bar">
                      <div className="lpf-pulse-fill" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div className="lpf-pulse-item">
                    <div className="lpf-pulse-info">
                      <span className="lpf-pulse-label">Technology</span>
                      <span className="lpf-pulse-val">Surging</span>
                    </div>
                    <div className="lpf-pulse-bar">
                      <div className="lpf-pulse-fill" style={{ width: '80%' }}></div>
                    </div>
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