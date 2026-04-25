import React, { useState } from 'react';
import {
  FiMessageCircle, FiMessageSquare,
  FiMapPin, FiPhone, FiMail
} from 'react-icons/fi';
import './ContactPage.css';
import mapImg from '../../assets/Map.png';

const faqs = [
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, you can try us for free for 30 days. If you want, we can provide a free 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We understand that things change. You can cancel your plan at any time and we\'ll refund you the difference already paid.',
  },
  {
    question: 'How does billing work?',
    answer: 'Plans are per workspace, not per account. You can upgrade or downgrade at any time.',
  },
  {
    question: 'How does support work?',
    answer: 'If you\'re having trouble with Untitled UI, we\'re here to help. Contact us and we\'ll get back to you as soon as possible.',
  }
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="contact-page">
      {/* Navbar */}
      {/* <nav className="navbar">
        <div className="nav-left">
          <div className="logo">
            <div className="logo-icon"></div>
            <span className="logo-text">Untitled UI</span>
          </div>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Products <span className="dropdown-arrow"></span></a>
            <a href="#">Pricing</a>
            <a href="#">Blog <span className="dropdown-arrow"></span></a>
            <a href="#">About us</a>
          </div>
        </div>
        <div className="nav-right">
          <a href="#" className="nav-login">Log in</a>
          <button className="btn-demo">
            <PlayCircle size={20} /> View demo
          </button>
          <button className="btn-primary">Create account</button>
        </div>
        <div className="nav-mobile">
          <Menu size={24} />
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-badge">Contact us</div>
        <h1 className="hero-title">Get in touch with our team</h1>
        <p className="hero-subtitle">
          We have the team and know-how to help you scale 10x faster.
        </p>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <img src={mapImg} alt="World Map Location" className="map-image" />
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="contact-cards-section">
        <div className="contact-cards-grid">
          <div className="contact-card">
            <div className="card-icon"><FiMessageCircle size={24} /></div>
            <h3>Chat to sales</h3>
            <p>Speak to our friendly team.</p>
            <a href="mailto:sales@untitledui.com" className="card-action">sales@untitledui.com</a>
          </div>

          <div className="contact-card">
            <div className="card-icon"><FiMessageSquare size={24} /></div>
            <h3>Chat to support</h3>
            <p>We're here to help.</p>
            <a href="mailto:support@untitledui.com" className="card-action">support@untitledui.com</a>
          </div>

          <div className="contact-card">
            <div className="card-icon"><FiMapPin size={24} /></div>
            <h3>Visit us</h3>
            <p>Visit our office HQ.</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="card-link">View on Google Maps</a>
          </div>

          <div className="contact-card">
            <div className="card-icon"><FiPhone size={24} /></div>
            <h3>Call us</h3>
            <p>Mon-Fri from 8am to 5pm.</p>
            <a href="tel:+15550000000" className="card-link">+1 (555) 000-0000</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="faq-section">
        <div className="faq-header">
          <h2>Frequently asked questions</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openFaq === index ? 'open' : ''}`}
            >
              <div 
                className="faq-question" 
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="faq-question-text">
                  <span className="faq-icon-wrapper">
                    {openFaq === index ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                  <h3>{faq.question}</h3>
                </div>
              </div>
              {openFaq === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div> */}

      {/* Still have questions Card */}
      {/* <div className="still-questions-card">
          <div className="avatar-group">
            <img src="https://i.pravatar.cc/100?img=1" alt="Avatar" className="avatar" />
            <img src="https://i.pravatar.cc/100?img=2" alt="Avatar" className="avatar" />
            <img src="https://i.pravatar.cc/100?img=3" alt="Avatar" className="avatar" />
          </div>
          <h3>Still have questions?</h3>
          <p>Can't find the answer you're looking for? Please chat to our friendly team.</p>
          <button className="btn-primary mt-4">Get in touch</button>
        </div> */}
      {/* </section> */}

      {/* Footer CTA */}
      {/* <footer className="footer-cta">
        <div className="footer-content">
          <h2>We're here to help</h2>
          <p>Join over 4,000+ startups who are already growing with Untitled UI.</p>
          <div className="footer-actions">
            <button className="btn-white">Learn more</button>
            <button className="btn-primary">Get started</button>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2077 Untitled UI. All rights reserved.</span>
        </div>
      </footer> */}
    </div>
  );
}
