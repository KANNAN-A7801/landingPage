import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ConnectPage.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const ConnectPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFeature, setActiveFeature] = useState(null);
  const [activeDashTab, setActiveDashTab] = useState('Dashboard');
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);
  const navigate = useNavigate();

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

  // Feature Data for the new explorer section
  const featuresData = [
    {
      id: 1,
      number: "01",
      title: "Smart Connection Discovery",
      desc: "Our AI analyzes 50+ data points to suggest the most relevant professionals in your niche.",
      cardTitle: "AI Suggested Matches",
      stats: [
        { label: "AI Accuracy", value: "98%", color: "#3b44f6" },
        { label: "New Leads", value: "24", color: "#ec4899" }
      ],
      users: [
        { name: "Sarah Chen", role: "Product Lead @ Google", tag: "98% Match", img: "https://i.pravatar.cc/150?u=sarah" },
        { name: "Marcus Wright", role: "Staff Engineer", tag: "95% Match", img: "https://i.pravatar.cc/150?u=marcus" }
      ]
    },
    {
      id: 2,
      number: "02",
      title: "Predictive Career Insights",
      desc: "Stay ahead of the curve with AI-driven market trends and skill demand forecasting.",
      cardTitle: "Market Trends 2026",
      stats: [
        { label: "Tech Growth", value: "+42%", color: "#3b44f6" },
        { label: "Remote Jobs", value: "+156%", color: "#10b981" }
      ],
      content: (
        <div className="cn-trend-preview">
          <div className="cn-trend-bar"><div className="fill" style={{ width: '80%' }}></div><span>React/Next.js</span></div>
          <div className="cn-trend-bar"><div className="fill" style={{ width: '65%' }}></div><span>AI Engineering</span></div>
          <div className="cn-trend-bar"><div className="fill" style={{ width: '45%' }}></div><span>Product Mgmt</span></div>
        </div>
      )
    },
    {
      id: 3,
      number: "03",
      title: "Automated Mentor Matching",
      desc: "Get paired with industry veterans through our neural matching algorithm.",
      cardTitle: "Top Mentors for You",
      stats: [
        { label: "Available", value: "12", color: "#3b44f6" },
        { label: "Top Rated", value: "5", color: "#f59e0b" }
      ],
      users: [
        { name: "David Miller", role: "CTO @ Fintech", tag: "Expert", img: "https://i.pravatar.cc/150?u=david" },
        { name: "Elena Rossi", role: "Design Director", tag: "Available", img: "https://i.pravatar.cc/150?u=elena" }
      ]
    },
    {
      id: 4,
      number: "04",
      title: "Personalized Skill Roadmaps",
      desc: "AI-generated learning paths tailored specifically to your target role.",
      cardTitle: "Your Career Path",
      stats: [
        { label: "Progress", value: "65%", color: "#3b44f6" },
        { label: "Next Step", value: "Certify", color: "#8b5cf6" }
      ],
      content: (
        <div className="cn-roadmap-preview">
          <div className="cn-step active"><span>1</span> Profile Optimized</div>
          <div className="cn-step active"><span>2</span> Network Built</div>
          <div className="cn-step"><span>3</span> Interview Prep</div>
        </div>
      )
    }
  ];

  // Intersection Observer for scroll-reveal animations
  useEffect(() => {
    // Reset visible cards when tab changes to re-trigger animations
    setVisibleCards(new Set());

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.idx);
            setVisibleCards((prev) => new Set([...prev, idx]));
          }
        });
      },
      { threshold: 0.15 }
    );

    // Filter out nulls and observe
    cardRefs.current.filter(Boolean).forEach((el) => {
      observer.observe(el);
    });

    return () => {
      cardRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, [activeTab]);

  const membersByCategory = [
    // Industry Peers (Tab 0)
    [
      { name: 'Amit Verma', role: 'Full Stack Dev at TCS', avatar: 'https://i.pravatar.cc/150?u=peer1', connections: 1200 },
      { name: 'Sonal Singh', role: 'UI/UX Designer at Infosys', avatar: 'https://i.pravatar.cc/150?u=peer2', connections: 850 },
      { name: 'Ravi Teja', role: 'QA Engineer at Wipro', avatar: 'https://i.pravatar.cc/150?u=peer3', connections: 920 },
      { name: 'Neha Kapoor', role: 'DevOps at Accenture', avatar: 'https://i.pravatar.cc/150?u=peer4', connections: 1100 },
      { name: 'Vikram Das', role: 'Backend Dev at HCL', avatar: 'https://i.pravatar.cc/150?u=peer5', connections: 740 },
      { name: 'Pooja Bhatt', role: 'Frontend Dev at TechM', avatar: 'https://i.pravatar.cc/150?u=peer6', connections: 1300 },
    ],
    // Mentors (Tab 1)
    [
      { name: 'Dr. Aris Thorne', role: 'Lead Architect at Google', avatar: 'https://i.pravatar.cc/150?u=mentor1', connections: '5K+' },
      { name: 'Meera Iyer', role: 'Engineering Manager at Meta', avatar: 'https://i.pravatar.cc/150?u=mentor2', connections: '3K+' },
      { name: 'David Miller', role: 'Principal Designer at Airbnb', avatar: 'https://i.pravatar.cc/150?u=mentor3', connections: '8K+' },
      { name: 'Sarah Chen', role: 'Product VP at Salesforce', avatar: 'https://i.pravatar.cc/150?u=mentor4', connections: '4K+' },
      { name: 'James Wilson', role: 'Data Science Head at Netflix', avatar: 'https://i.pravatar.cc/150?u=mentor5', connections: '6K+' },
      { name: 'Elena Rodriguez', role: 'UX Director at Adobe', avatar: 'https://i.pravatar.cc/150?u=mentor6', connections: '2K+' },
    ],
    // Recruiters (Tab 2)
    [
      { name: 'John Doe', role: 'Senior Recruiter at Amazon', avatar: 'https://i.pravatar.cc/150?u=rec1', connections: '10K+' },
      { name: 'Jane Smith', role: 'Talent Acquisition at Microsoft', avatar: 'https://i.pravatar.cc/150?u=rec2', connections: '12K+' },
      { name: 'Mike Ross', role: 'HR Manager at Google', avatar: 'https://i.pravatar.cc/150?u=rec3', connections: '7K+' },
      { name: 'Rachel Zane', role: 'Tech Recruiter at Uber', avatar: 'https://i.pravatar.cc/150?u=rec4', connections: '9K+' },
      { name: 'Harvey Specter', role: 'Executive Search at Tesla', avatar: 'https://i.pravatar.cc/150?u=rec5', connections: '15K+' },
      { name: 'Donna Paulsen', role: 'HR Director at Oracle', avatar: 'https://i.pravatar.cc/150?u=rec6', connections: '11K+' },
    ],
    // Entrepreneurs (Tab 3)
    [
      { name: 'Elon Reeve', role: 'Founder of SpaceX', avatar: 'https://i.pravatar.cc/150?u=ent1', connections: '1M+' },
      { name: 'Mark Z.', role: 'Founder of Meta', avatar: 'https://i.pravatar.cc/150?u=ent2', connections: '2M+' },
      { name: 'Jeff B.', role: 'Founder of Blue Origin', avatar: 'https://i.pravatar.cc/150?u=ent3', connections: '500K+' },
      { name: 'Deepinder G.', role: 'CEO at Zomato', avatar: 'https://i.pravatar.cc/150?u=ent4', connections: '100K+' },
      { name: 'Kunal S.', role: 'Founder of CRED', avatar: 'https://i.pravatar.cc/150?u=ent5', connections: '80K+' },
      { name: 'Nithin K.', role: 'Founder of Zerodha', avatar: 'https://i.pravatar.cc/150?u=ent6', connections: '90K+' },
    ]
  ];

  const currentMembers = membersByCategory[activeTab] || [];

  const networkingBenefits = [
    {
      title: "Hidden Job Market",
      desc: "Access 70-80% of jobs that are never posted publicly but filled through internal referrals.",
      icon: <i className="fa-solid fa-eye-slash"></i>,
      color: "#3b44f6"
    },
    {
      title: "Insider Knowledge",
      desc: "Get first-hand information about company culture, interview processes, and team dynamics.",
      icon: <i className="fa-solid fa-lightbulb"></i>,
      color: "#ec4899"
    },
    {
      title: "Faster Career Growth",
      desc: "Mentorship and peer guidance can accelerate your professional journey by 3x-5x.",
      icon: <i className="fa-solid fa-chart-line"></i>,
      color: "#f59e0b"
    }
  ];



  const networkingCategories = [
    { label: 'Industry Peers', count: '25K+', icon: <i className="fa-solid fa-building"></i> },
    { label: 'Mentors', count: '5K+', icon: <i className="fa-solid fa-graduation-cap"></i> },
    { label: 'Recruiters', count: '8K+', icon: <i className="fa-solid fa-clipboard-check"></i> },
    { label: 'Entrepreneurs', count: '3K+', icon: <i className="fa-solid fa-rocket"></i> },
  ];

  return (
    <div className="connect-page-wrapper">
      <Navbar />

      {/* ====== SECTION 1: Hero Section ====== */}
      <header className="cn-hero" id="connect">
        <div className="cn-hero-content">
          <div className="cn-hero-badge-wrap">
            <div className="cn-hero-badge-icon">
              <i className="fa-solid fa-play"></i>
            </div>
            <span className="cn-hero-badge-text">Inclusive workplaces for all.</span>
          </div>

          <h1 className="cn-hero-title">
            Connect With Your <br />
            <span className="cn-blue-text">Dream Career</span>
          </h1>

          <p className="cn-hero-subtitle">
            Find meaningful professional connections in organizations prioritizing growth and inclusion that align with your values.
          </p>

          <div className="cn-search-bar">
            <button onClick={handleSmartDownload} className="cn-search-btn">
              Find Your Path <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <div className="cn-search-inputs">
              <input type="text" placeholder="ex. Graphic Designer" />
              <div className="cn-input-divider"></div>
              <div className="cn-location-select">
                <span>Industry</span>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </div>

          <div className="cn-social-proof">
            <div className="cn-proof-main">
              <span className="cn-proof-count">100k+ People Join</span>
              <div className="cn-proof-avatars">
                <img src="https://i.pravatar.cc/100?u=1" alt="User" />
                <img src="https://i.pravatar.cc/100?u=2" alt="User" />
                <img src="https://i.pravatar.cc/100?u=3" alt="User" />
                <img src="https://i.pravatar.cc/100?u=4" alt="User" />
              </div>
              <div className="cn-proof-rating">
                <span>5.0</span>
                <div className="cn-stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cn-hero-visual-wrapper">
          <div className="cn-hero-blue-box">
            <div className="cn-blue-grid"></div>
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
              alt="Networking Professionals"
              className="cn-hero-main-img"
            />

            {/* Floating Glass UI Elements */}
            <div className="cn-glass-card cn-glass-resume">
              <p>Optimize <strong>Profile</strong></p>
              <button>Edit Now</button>
            </div>

            <div className="cn-glass-card cn-glass-status">
              <div className="cn-status-icon">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <span>Network ready</span>
            </div>

            <div className="cn-glass-popup">
              <img src="https://i.pravatar.cc/100?u=professional_mentor" alt="Mentor" />
              <div className="cn-popup-check">
                <i className="fa-solid fa-check"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section - Integrated into Hero Bottom */}
        <div className="cn-hero-partners">
          <p>Trusted by 1000+ companies find best professionals</p>

        </div>
      </header>

      {/* ====== SECTION 2: Networking Stats Bar ====== */}
      <section className="cn-stats-bar">
        <div className="cn-stats-inner">
          {[
            { value: '50K+', label: 'Professionals', icon: <i className="fa-solid fa-users"></i> },
            { value: '12K+', label: 'Connections Daily', icon: <i className="fa-solid fa-link"></i> },
            { value: '8K+', label: 'Companies', icon: <i className="fa-solid fa-building"></i> },
            { value: '95%', label: 'Satisfaction Rate', icon: <i className="fa-solid fa-star"></i> },
          ].map((stat, idx) => (
            <div key={idx} className="cn-stat-item">
              <span className="cn-stat-icon">{stat.icon}</span>
              <h3 className="cn-stat-value">{stat.value}</h3>
              <p className="cn-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====== SECTION 3: Simple Steps to Get a Job ====== */}
      <section className="cn-simple-steps">
        <div className="cn-paper-edge cn-paper-edge-top"></div>

        <div className="cn-steps-header">
          <h2>Simple steps to get a job</h2>
          <p>Share your CV with your network and connections and get offers in one place</p>
        </div>

        <div className="cn-simple-steps-grid">
          {/* Step 1 */}
          <div className="cn-simple-step cn-step-1">
            <div className="cn-step-top">
              <div className="cn-step-index">
                1
                <div className="cn-geom cn-geom-dot"></div>
              </div>
              <div className="cn-step-title-box">
                <h3>Upload CV</h3>
              </div>
            </div>
            <div className="cn-step-divider"></div>
            <p>Simply attach a CV and create your beautiful profile in a minute.</p>
          </div>

          {/* Step 2 */}
          <div className="cn-simple-step cn-step-2">
            <div className="cn-step-top">
              <div className="cn-step-index">
                2
                <div className="cn-geom cn-geom-sq"></div>
              </div>
              <div className="cn-step-title-box">
                <h3>Share</h3>
              </div>
            </div>
            <div className="cn-step-divider"></div>
            <p>Share your custom profile link to your social media and appeal to your connections.</p>
          </div>

          {/* Step 3 */}
          <div className="cn-simple-step cn-step-3">
            <div className="cn-step-top">
              <div className="cn-step-index">
                3
                <div className="cn-geom cn-geom-tri"></div>
              </div>
              <div className="cn-step-title-box">
                <h3>Get offers</h3>
              </div>
            </div>
            <div className="cn-step-divider"></div>
            <p>Employers can "get in touch" with a message to your email inbox.</p>
          </div>
        </div>

        <div className="cn-paper-edge cn-paper-edge-bottom"></div>
      </section>

      {/* ====== SECTION 4: Community Highlights ====== */}
      {/* <section className="cn-community">
        <div className="cn-section-header">
          <span className="cn-section-tag">Our Community</span>
          <h2 className="cn-section-title">
            Connect With Top Professionals
          </h2>
          <p className="cn-section-desc">
            Our growing community includes professionals from the world's leading companies, ready to share insights and opportunities.
          </p>
        </div>

        <div className="cn-category-tabs">
          {networkingCategories.map((cat, idx) => (
            <button
              key={idx}
              className={`cn-tab ${activeTab === idx ? 'cn-tab-active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              <span className="cn-tab-icon">{cat.icon}</span>
              <span className="cn-tab-label">{cat.label}</span>
              <span className="cn-tab-count">{cat.count}</span>
            </button>
          ))}
        </div>

        <div className="cn-members-grid">
          {currentMembers.map((member, idx) => (
            <div
              key={`${activeTab}-${idx}`}
              className={`cn-member-card ${visibleCards.has(idx + 10) ? 'cn-visible' : ''}`}
              ref={(el) => (cardRefs.current[idx + 10] = el)}
              data-idx={idx + 10}
            >
              <div className="cn-member-header">
                <img src={member.avatar} alt={member.name} className="cn-member-avatar" />
                <div className="cn-member-status"></div>
              </div>
              <h4 className="cn-member-name">{member.name}</h4>
              <p className="cn-member-role">{member.role}</p>
              <div className="cn-member-stats">
                <div className="cn-member-connections">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <span>{member.connections} connections</span>
                </div>
              </div>
              <button onClick={() => navigate('/contactnav')} className="cn-btn-connect">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Connect
              </button>
            </div>
          ))}
        </div>
      </section> */}

      {/* ====== SECTION 5: Networking Benefits ====== */}
      <section className="cn-benefits">
        <div className="cn-section-header">
          <span className="cn-section-tag">Why Network?</span>
          <h2 className="cn-section-title">
            The Power of <span className="cn-gradient-text">Connections</span>
          </h2>
          <p className="cn-section-desc">
            Networking isn't just about finding jobs; it's about building a community that supports your long-term success.
          </p>
        </div>
        <div className="cn-benefits-grid">
          {networkingBenefits.map((b, idx) => (
            <div key={idx} className="cn-benefit-card" style={{ borderBottom: `6px solid ${b.color}` }}>
              <div className="cn-benefit-icon-wrap" style={{ background: `${b.color}15`, color: b.color }}>
                {b.icon}
              </div>
              <h3 className="cn-benefit-title">{b.title}</h3>
              <p className="cn-benefit-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====== SECTION 5.5: Features Explorer ====== */}
      <section className="cn-features-explorer" style={{ background: '#f0f4ff' }}>
        <div className="cn-features-header">
          <div className="cn-features-title-group">
            <span className="cn-sub-label" style={{ color: '#3b44f6' }}>AI Features</span>
            <h2>ALL-IN-ONE AI PLATFORM FOR CAREER GROWTH</h2>
          </div>
          <p className="cn-features-desc">
            Simplify your professional journey with AI-driven insights and automated networking tools.
          </p>
        </div>

        <div className="cn-features-content">
          {featuresData.map((feature, idx) => (
            <div
              key={feature.id}
              className="cn-feature-item"
              onMouseEnter={() => setActiveFeature(idx)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <span className="cn-feature-number">{feature.number}</span>
              <h3 className="cn-feature-title">{feature.title}</h3>
              <div className="cn-feature-arrow">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          ))}

          {/* Floating Card that changes based on activeFeature */}
          <div className={`cn-floating-preview ${activeFeature !== null ? 'visible' : ''}`}>
            {activeFeature !== null && (
              <div className="cn-preview-inner">
                <div className="cn-preview-header">
                  <h4>{featuresData[activeFeature].cardTitle}</h4>
                  <div className="cn-preview-stats">
                    {featuresData[activeFeature].stats.map((s, i) => (
                      <div key={i} className="cn-stat-pill">
                        <span className="dot" style={{ background: s.color }}></span> {s.label}: {s.value}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="cn-preview-body">
                  {featuresData[activeFeature].users ? (
                    <div className="cn-preview-list">
                      {featuresData[activeFeature].users.map((user, i) => (
                        <div key={i} className="cn-preview-user">
                          <img src={user.img} alt={user.name} />
                          <div className="cn-user-info">
                            <h5>{user.name}</h5>
                            <span>{user.role}</span>
                          </div>
                          <div className={`cn-preview-tag ${user.tag.includes('%') ? 'active' : ''}`}>{user.tag}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    featuresData[activeFeature].content
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ====== SECTION 5.8: Global Networking Analytics ====== */}
      <section className="cn-analytics-dashboard">
        <div className="cn-dashboard-header">
          <div className="cn-dash-title">
            <span className="cn-sub-label">Platform Impact</span>
            <h2>Global Talent & Connection Ecosystem</h2>
          </div>
          <div className="cn-dash-tabs">
            {['Statistics', 'Overview', 'Dashboard', 'Analytics'].map(tab => (
              <span 
                key={tab} 
                className={activeDashTab === tab ? 'active' : ''}
                onClick={() => setActiveDashTab(tab)}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>

        <div className="cn-dashboard-main">
          {/* Left Side Metrics */}
          <div className="cn-dash-left">
            <div className="cn-dash-card">
              <div className="cn-card-head">
                <span className="label">Active Connections</span>
                <h3>12,450 <span className="trend up"><i className="fa-solid fa-arrow-up"></i> 12%</span></h3>
                <span className="sub-text">Compared to last month</span>
              </div>
              <div className="cn-bubble-chart">
                <div className="bubble b1"></div>
                <div className="bubble b2"></div>
                <div className="bubble b3"></div>
                <div className="bubble b4"></div>
                <div className="bubble b5"></div>
              </div>
              <div className="cn-card-progress">
                <div className="prog-item"><span className="dot tech"></span> Tech <span>68%</span></div>
                <div className="prog-item"><span className="dot design"></span> Design <span>42%</span></div>
                <div className="prog-item"><span className="dot mgmt"></span> Management <span>35%</span></div>
              </div>
            </div>

            <div className="cn-dash-card">
              <div className="cn-card-head">
                <span className="label">Response Rate</span>
                <h3>92.4% <span className="trend up"><i className="fa-solid fa-arrow-up"></i> 5%</span></h3>
              </div>
              <div className="cn-mini-graph">
                <svg viewBox="0 0 200 60" preserveAspectRatio="none">
                  <path d="M0,50 Q40,45 80,30 T160,20 T200,10" fill="none" stroke="#3b44f6" strokeWidth="3" />
                </svg>
              </div>
              <div className="cn-card-stats-list">
                <div className="list-item"><span>Mentorship</span> <strong>+12%</strong></div>
                <div className="list-item"><span>Referrals</span> <strong>+24%</strong></div>
              </div>
            </div>
          </div>

          {/* Central Map Area */}
          <div className="cn-dash-center">
            <div className="cn-map-container">
              <div className="cn-map-bg"></div>

              {/* Connection Arches (SVG) */}
              <svg className="cn-map-arches" viewBox="0 0 800 400">
                {/* Original Paths */}
                <path d="M200,200 Q400,50 600,200" fill="none" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M150,250 Q400,100 650,250" fill="none" stroke="rgba(59, 68, 246, 0.4)" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M300,300 Q500,150 700,300" fill="none" stroke="rgba(236, 72, 153, 0.4)" strokeWidth="2" strokeDasharray="5,5" />

                {/* New Paths to fill empty space */}
                <path d="M100,150 Q300,0 500,150" fill="none" stroke="rgba(59, 68, 246, 0.3)" strokeWidth="1.5" strokeDasharray="8,8" />
                <path d="M400,350 Q600,200 800,350" fill="none" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1.5" strokeDasharray="6,6" />
                <path d="M50,300 Q200,100 450,250" fill="none" stroke="rgba(236, 72, 153, 0.2)" strokeWidth="1" strokeDasharray="4,4" />
                <path d="M500,100 Q650,-20 750,150" fill="none" stroke="rgba(59, 68, 246, 0.2)" strokeWidth="1" strokeDasharray="10,10" />
                <path d="M150,380 Q450,250 750,380" fill="none" stroke="rgba(236, 72, 153, 0.2)" strokeWidth="1.5" strokeDasharray="12,12" />
              </svg>

              <div className="cn-map-total">
                <span className="label">Total Network Reach</span>
                <h2>4,542,240</h2>
                <div className="cn-time-filters">
                  <span>1M</span><span>3M</span><span>6M</span><span className="active">1Y</span><span>All</span>
                </div>
              </div>

              {/* Map Floating Nodes */}
              <div className="cn-map-node node-1" style={{ top: '30%', left: '20%' }}>
                <span className="icon">S</span>
                <div className="info"><strong>Software</strong><span>1,235,545</span></div>
              </div>
              <div className="cn-map-node node-2" style={{ top: '20%', left: '70%' }}>
                <span className="icon">D</span>
                <div className="info"><strong>Design</strong><span>855,344</span></div>
              </div>
              <div className="cn-map-node node-3" style={{ top: '60%', left: '40%' }}>
                <span className="icon">M</span>
                <div className="info"><strong>Marketing</strong><span>655,255</span></div>
              </div>
              <div className="cn-map-node node-4" style={{ top: '70%', left: '80%' }}>
                <span className="icon">P</span>
                <div className="info"><strong>Product</strong><span>935,545</span></div>
              </div>
              <div className="cn-map-node node-5" style={{ top: '45%', left: '55%' }}>
                <span className="icon">R</span>
                <div className="info"><strong>Recruitment</strong><span>420,120</span></div>
              </div>
              <div className="cn-map-node node-6" style={{ top: '15%', left: '45%' }}>
                <span className="icon">H</span>
                <div className="info"><strong>Mentorship</strong><span>312,450</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="cn-dashboard-footer">
          <div className="cn-footer-metric">
            <div className="metric-circle" style={{ flexShrink: 0 }}>
              <svg viewBox="0 0 60 60" width="60" height="60" style={{ overflow: 'visible' }}>
                <circle cx="30" cy="30" r="24" fill="none" stroke="#f1f5f9" strokeWidth="6"></circle>
                <circle className="metric-progress-ring" cx="30" cy="30" r="24" fill="none" stroke="#3b44f6" strokeWidth="6" strokeLinecap="round" pathLength="100" style={{ strokeDasharray: '72 100', strokeDashoffset: 0, transform: 'rotate(-90deg)', transformOrigin: '30px 30px' }}></circle>
              </svg>
              <span>72%</span>
            </div>
            <div className="metric-info"><strong>Growth Rate</strong><span>+15% this year</span></div>
          </div>
          <div className="cn-footer-metric pink">
            <div className="metric-circle" style={{ flexShrink: 0 }}>
              <svg viewBox="0 0 60 60" width="60" height="60" style={{ overflow: 'visible' }}>
                <circle cx="30" cy="30" r="24" fill="none" stroke="#f1f5f9" strokeWidth="6"></circle>
                <circle className="metric-progress-ring" cx="30" cy="30" r="24" fill="none" stroke="#ec4899" strokeWidth="6" strokeLinecap="round" pathLength="100" style={{ strokeDasharray: '58 100', strokeDashoffset: 0, transform: 'rotate(-90deg)', transformOrigin: '30px 30px' }}></circle>
              </svg>
              <span>58%</span>
            </div>
            <div className="metric-info"><strong>Success Matching</strong><span>4.8k matches</span></div>
          </div>
          <div className="cn-footer-metric orange">
            <div className="metric-circle" style={{ flexShrink: 0 }}>
              <svg viewBox="0 0 60 60" width="60" height="60" style={{ overflow: 'visible' }}>
                <circle cx="30" cy="30" r="24" fill="none" stroke="#f1f5f9" strokeWidth="6"></circle>
                <circle className="metric-progress-ring" cx="30" cy="30" r="24" fill="none" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" pathLength="100" style={{ strokeDasharray: '45 100', strokeDashoffset: 0, transform: 'rotate(-90deg)', transformOrigin: '30px 30px' }}></circle>
              </svg>
              <span>45%</span>
            </div>
            <div className="metric-info"><strong>Global Reach</strong><span>120+ Countries</span></div>
          </div>
          <div className="cn-footer-metric green">
            <div className="metric-circle" style={{ flexShrink: 0 }}>
              <svg viewBox="0 0 60 60" width="60" height="60" style={{ overflow: 'visible' }}>
                <circle cx="30" cy="30" r="24" fill="none" stroke="#f1f5f9" strokeWidth="6"></circle>
                <circle className="metric-progress-ring" cx="30" cy="30" r="24" fill="none" stroke="#10b981" strokeWidth="6" strokeLinecap="round" pathLength="100" style={{ strokeDasharray: '88 100', strokeDashoffset: 0, transform: 'rotate(-90deg)', transformOrigin: '30px 30px' }}></circle>
              </svg>
              <span>88%</span>
            </div>
            <div className="metric-info"><strong>Mentor Rating</strong><span>Top 1% Experts</span></div>
          </div>
        </div>
      </section>

      {/* ====== SECTION 6: CTA Section ====== */}
      <section className="cn-cta-section">
        <div className="cn-cta-bg-pattern"></div>
        <div className="cn-cta-content">
          <h2 className="cn-cta-title">
            Ready to Grow Your <br />
            <span className="cn-cta-highlight">Professional Network?</span>
          </h2>
          <p className="cn-cta-subtitle">
            Join 50,000+ professionals who are already building meaningful career connections on Garuda Career.
          </p>
          <div className="cn-cta-actions">
            <button onClick={() => navigate('/contactnav')} className="cn-btn-cta-primary">
              Get Started Free
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button className="cn-btn-cta-secondary">Learn More</button>
          </div>
          <div className="cn-cta-trust">
            <div className="cn-cta-avatars">
              <img src="https://i.pravatar.cc/60?u=50" alt="User" />
              <img src="https://i.pravatar.cc/60?u=51" alt="User" />
              <img src="https://i.pravatar.cc/60?u=52" alt="User" />
              <img src="https://i.pravatar.cc/60?u=53" alt="User" />
            </div>
            <p><strong>4,200+</strong> professionals joined this month</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ConnectPage;
