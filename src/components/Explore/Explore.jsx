import './Explore.css';
import heroImage from '../../assets/hero-job-search.png';
import headerImg from '../../assets/HEADER.png';
import garudaAppImg from '../../assets/garudaapp.png';
import Footer from '../Footer/Footer';
import { FaBell, FaCalendarCheck, FaChartLine, FaUserTie, FaBuilding, FaUsers, FaBriefcase, FaSearch } from 'react-icons/fa';
const Explore = () => {
    const handleSmartDownload = (e) => {
        if (e) e.preventDefault();
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        let targetUrl = "https://apps.microsoft.com/home"; // Default Desktop

        // Detect Android
        if (/android/i.test(userAgent)) {
            targetUrl = "https://play.google.com/store/apps";
        }
        // Detect iOS (including newer iPadOS which reports as Macintosh)
        else if (/iPad|iPhone|iPod/.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
            targetUrl = "https://www.apple.com/app-store/";
        }

        // Use location.href for more reliable navigation (less likely to be blocked as a popup)
        window.location.href = targetUrl;
    };

    return (
        <div className="explore-container">
            {/* 1. Hero Section (Full Width Version) */}
            <section className="explore-hero">
                <div className="hero-main-container">
                    <div className="hero-content">
                        <h1>It's Easy to Find <br />Your <span>Dream Job</span></h1>
                        <p className="hero-desc">
                            Explore thousands of jobs in one place and get the job of your dreams.
                        </p>
                        <div className="hero-search">
                            <div className="search-field">
                                <label>Select Job type</label>
                                <div className="field-inner">
                                    <select className="professional-select">
                                        <option>All Professions</option>
                                        <option>Software Engineer</option>
                                        <option>Data Analyst</option>
                                        <option>Project Manager</option>
                                        <option>UX/UI Designer</option>
                                        <option>Business Consultant</option>
                                    </select>
                                    <i className="ri-arrow-down-s-line"></i>
                                </div>
                            </div>
                            <div className="search-field">
                                <label>Location</label>
                                <div className="field-inner">
                                    <select className="professional-select">
                                        <option>CA, Los Angeles</option>
                                        <option>NY, New York</option>
                                        <option>London, UK</option>
                                        <option>Dubai, UAE</option>
                                        <option>Singapore</option>
                                    </select>
                                    <i className="ri-arrow-down-s-line"></i>
                                </div>
                            </div>
                            <button onClick={handleSmartDownload} className="search-btn">Explore Now</button>
                        </div>
                        <svg className="hero-wave" width="300" height="100" viewBox="0 0 300 100" fill="none">
                            <path d="M10 80 Q 70 20, 150 60 T 290 80" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="5 5" />
                        </svg>
                    </div>
                    <div className="hero-visual-new">
                        <img src={headerImg} alt="AI Job Search" className="hero-header-img" />
                    </div>
                </div>
                <div className="hero-stats-bar">
                    <div className="h-stat-item">
                        <div className="h-stat-icon yellow"><FaBriefcase /></div>
                        <div className="h-stat-info">
                            <h3>50K +</h3>
                            <p>Job vacancy</p>
                        </div>
                    </div>
                    <div className="h-stat-item">
                        <div className="h-stat-icon blue"><FaUsers /></div>
                        <div className="h-stat-info">
                            <h3>20K +</h3>
                            <p>People Got Hired</p>
                        </div>
                    </div>
                    <div className="h-stat-item">
                        <div className="h-stat-icon orange"><FaBuilding /></div>
                        <div className="h-stat-info">
                            <h3>2K +</h3>
                            <p>Companies</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Hiring Companies Section - Immersive Infinite Loop */}
            <section className="hiring-marquee-standalone">
                <div className="marquee-header">
                    <h2 className="marquee-title-gradient">Top Companies Hiring Now</h2>
                </div>
                <div className="marquee-container">
                    <div className="marquee-content-logos">
                        {/* Ultra-stable Wikimedia Commons URLs */}
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="company-logo-img" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className="company-logo-img" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="company-logo-img" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft" className="company-logo-img" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="Nike" className="company-logo-img" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" alt="Airbnb" className="company-logo-img" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="Uber" className="company-logo-img" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" alt="Slack" className="company-logo-img" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" alt="Spotify" className="company-logo-img" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg" alt="Zoom" className="company-logo-img" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" alt="Tesla" className="company-logo-img" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" alt="Shopify" className="company-logo-img" />

                        {/* Duplicate for seamless infinite loop */}
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="company-logo-img" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className="company-logo-img" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="company-logo-img" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft" className="company-logo-img" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="Nike" className="company-logo-img" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" alt="Airbnb" className="company-logo-img" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="Uber" className="company-logo-img" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" alt="Slack" className="company-logo-img" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" alt="Spotify" className="company-logo-img" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg" alt="Zoom" className="company-logo-img" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" alt="Tesla" className="company-logo-img" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" alt="Shopify" className="company-logo-img" />
                    </div>
                </div>
            </section>
            {/* 2. How It Works Section */}
            <section className="how-it-works">
                <div className="how-header">
                    <span>How It Works</span>
                    <h2>Quick Steps To<br />Getting A Job</h2>
                    <p style={{ color: '#666', lineHeight: '1.6' }}>
                        Our streamlined process helps you find the right role faster by matching your skills with relevant opportunities, saving time and helping you focus on your ideal career.
                    </p>
                </div>
                <div className="how-steps">
                    <div className="steps-track"></div>
                    <div className="step-card">
                        <div className="step-num">01</div>
                        <div className="step-icon"><i className="ri-user-add-line"></i></div>
                        <div className="step-info">
                            <h4>Create Account</h4>
                            <p>Sign up and verify your identity to start your journey.</p>
                        </div>
                    </div>
                    <div className="step-card">
                        <div className="step-num">02</div>
                        <div className="step-icon"><i className="ri-profile-line"></i></div>
                        <div className="step-info">
                            <h4>Complete Your Profile</h4>
                            <p>Highlight your skills and experience to attract top employers.</p>
                        </div>
                    </div>
                    <div className="step-card">
                        <div className="step-num">03</div>
                        <div className="step-icon"><i className="ri-search-line"></i></div>
                        <div className="step-info">
                            <h4>Hunting Jobs</h4>
                            <p>Browse through tailored listings and apply with one click.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* 3. Job Categories Section */}
            <section className="job-categories">
                <div className="section-header">
                    <span className="subtitle">Browse by Field</span>
                    <h2 className="glow-title">Explore <span>Professional Roles</span></h2>
                    <p className="header-desc">Find your next career move across diverse, high-growth industries.</p>
                </div>
                <div className="category-grid">
                    <div className="category-card-h" onClick={handleSmartDownload} style={{ cursor: 'pointer' }}>
                        <div className="cat-icon-h education"><i className="ri-graduation-cap-line"></i></div>
                        <div className="cat-details-h">
                            <h4>Education</h4>
                            <p>Teacher, Professor, Admin</p>
                        </div>
                        <div className="cat-meta-h">
                            <span className="cat-count-h">1.2k Jobs</span>
                            <div className="cat-arrow">→</div>
                        </div>
                    </div>
                    <div className="category-card-h" onClick={handleSmartDownload} style={{ cursor: 'pointer' }}>
                        <div className="cat-icon-h logistics"><i className="ri-truck-line"></i></div>
                        <div className="cat-details-h">
                            <h4>Logistics</h4>
                            <p>Professional Driver, Fleet</p>
                        </div>
                        <div className="cat-meta-h">
                            <span className="cat-count-h">850 Jobs</span>
                            <div className="cat-arrow">→</div>
                        </div>
                    </div>
                    <div className="category-card-h" onClick={handleSmartDownload} style={{ cursor: 'pointer' }}>
                        <div className="cat-icon-h chef"><i className="ri-restaurant-line"></i></div>
                        <div className="cat-details-h">
                            <h4>Culinary Arts</h4>
                            <p>Executive Chef, Sous Chef</p>
                        </div>
                        <div className="cat-meta-h">
                            <span className="cat-count-h">430 Jobs</span>
                            <div className="cat-arrow">→</div>
                        </div>
                    </div>
                    <div className="category-card-h" onClick={handleSmartDownload} style={{ cursor: 'pointer' }}>
                        <div className="cat-icon-h healthcare"><i className="ri-pulse-line"></i></div>
                        <div className="cat-details-h">
                            <h4>Healthcare</h4>
                            <p>Nurse, Specialist, Care</p>
                        </div>
                        <div className="cat-meta-h">
                            <span className="cat-count-h">2.1k Jobs</span>
                            <div className="cat-arrow">→</div>
                        </div>
                    </div>
                    <div className="category-card-h" onClick={handleSmartDownload} style={{ cursor: 'pointer' }}>
                        <div className="cat-icon-h tech"><i className="ri-computer-line"></i></div>
                        <div className="cat-details-h">
                            <h4>IT & Software</h4>
                            <p>Developer, DevOps, Data</p>
                        </div>
                        <div className="cat-meta-h">
                            <span className="cat-count-h">3.4k Jobs</span>
                            <div className="cat-arrow">→</div>
                        </div>
                    </div>
                    <div className="category-card-h" onClick={handleSmartDownload} style={{ cursor: 'pointer' }}>
                        <div className="cat-icon-h engineering"><i className="ri-settings-4-line"></i></div>
                        <div className="cat-details-h">
                            <h4>Engineering</h4>
                            <p>Civil, Architect, Project</p>
                        </div>
                        <div className="cat-meta-h">
                            <span className="cat-count-h">980 Jobs</span>
                            <div className="cat-arrow">→</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* 5. Why Choose Us Section (Refined Reference Design) */}
            <section className="why-choose-us-ref">
                <div className="wcur-container-ref">
                    <div className="wcur-content-ref">
                        <span className="wcur-top-label">You will love it</span>
                        <h2 className="wcur-main-title glow-blue">Why Choose Us?</h2>
                        <div className="wcur-features-grid">
                            <div className="wcur-feature-item">
                                <span className="wcur-number">01</span>
                                <div className="wcur-f-text">
                                    <h4>Smart Role Discovery</h4>
                                    <p>Our algorithms find the perfect roles based on your experience.</p>
                                </div>
                            </div>
                            <div className="wcur-feature-item">
                                <span className="wcur-number">02</span>
                                <div className="wcur-f-text">
                                    <h4>Direct Employer Access</h4>
                                    <p>Connect directly with decision-makers at top firms.</p>
                                </div>
                            </div>
                            <div className="wcur-feature-item">
                                <span className="wcur-number">03</span>
                                <div className="wcur-f-text">
                                    <h4>Verified Job Postings</h4>
                                    <p>Every role is vetted for genuine opportunities.</p>
                                </div>
                            </div>
                            <div className="wcur-feature-item">
                                <span className="wcur-number">04</span>
                                <div className="wcur-f-text">
                                    <h4>Career Growth Suite</h4>
                                    <p>Access tools to accelerate your development.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wcur-image-side">
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200&h=800"
                            alt="Team Success"
                            className="wcur-main-img"
                        />
                    </div>
                </div>
            </section>
            {/* 6. Quick Apply (Premium App Showcase) - High Fidelity */}
            <section className="quick-apply-premium-new">
                <div className="qap-container-new">
                    <div className="qap-content-new">
                        <div className="qap-badge">Coming Soon to mobile</div>
                        <h2>Your Gateway to <br /><span>Global Opportunities</span></h2>
                        <p>
                            Connect with industry giants like Apple, Google, and Meta.
                            The <strong>Garuda App</strong> is your new professional home.
                        </p>
                        <div className="qap-store-badges">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                                alt="App Store"
                                className="store-badge"
                                onClick={() => window.open("https://www.apple.com/app-store/", "_blank")}
                                style={{ cursor: 'pointer' }}
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                alt="Play Store"
                                className="store-badge"
                                onClick={() => window.open("https://play.google.com/store/apps", "_blank")}
                                style={{ cursor: 'pointer' }}
                            />
                        </div>
                    </div>
                    <div className="qap-visual-new">
                        <div className="iphone-frame-new">
                            <img
                                src={garudaAppImg}
                                alt="Garuda App"
                                className="app-mockup-img"
                            />
                        </div>
                        <div className="qap-glow-new"></div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};
export default Explore;
