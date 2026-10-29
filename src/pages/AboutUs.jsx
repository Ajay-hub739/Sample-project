import useSEO from '../hooks/useSEO';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

function AboutIntro() {
  return (
    <section className="about-intro-section">
      <div className="section-container about-intro-layout">
        <div className="about-intro-image animate-fade-right">
          <img src="/about-solar-family.jpg" alt="Family with Solar Panels" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '30px' }} />
        </div>
        <div className="about-intro-content animate-fade-left">
          <h2 className="elementor-heading-title" style={{ fontSize: '42px', color: 'var(--teal-dark)', marginBottom: '20px', lineHeight: '1.2' }}>Empowering Businesses & Homes<br />With Smart Utility Solutions</h2>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '30px', lineHeight: '1.6' }}>
            At <strong>GGS Utilities</strong>, managing utilities should be simple, cost-effective, and sustainable. With years of expertise in the utility sector, we offer a comprehensive range of services tailored to meet the unique needs of businesses and households.
          </p>
          <div className="about-features">
            <div className="about-feature-block bg-green animate-fade-up" style={{ animationDelay: '100ms' }}>
              <h4>Customized Utility Plans</h4>
              <p>We understand that every customer has unique requirements. Our flexible and personalized utility plans are designed to fit your specific needs and budget.</p>
            </div>
            <div className="about-feature-block bg-grey animate-fade-up" style={{ animationDelay: '200ms' }}>
              <h4>Cutting-Edge Technology</h4>
              <p>Stay ahead with innovative tools and systems that optimize utility usage, enhance efficiency, and minimize waste, all while contributing to a greener future.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutValues() {
  return (
    <section className="about-values-section">
      <div className="section-container about-values-layout">
        
        {/* Left Text Column */}
        <div className="values-text-col animate-fade-right">
          <span className="be-sub-title" style={{ color: 'var(--teal-main)', display: 'block', marginBottom: '15px', letterSpacing: '2px', fontWeight: '700', textTransform: 'uppercase', fontSize: '13px' }}>OUR CORE VALUES</span>
          <h2 className="section-header" style={{ color: 'var(--teal-dark)', fontSize: '46px', lineHeight: '1.2', marginBottom: '30px' }}>What We Stand For</h2>
          <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.7', maxWidth: '480px' }}>
            Our values define who we are—committed to sustainability, innovation, and delivering reliable, customer-focused utility solutions with integrity and excellence.
          </p>
        </div>

        {/* Right Image/Cards Column */}
        <div className="values-image-col animate-fade-left">
          <div className="values-image-wrapper">
            <img src="/full-shot-smiley-engineers-with-laptop-768x512.jpg" alt="Engineers working" className="values-main-img" />
            
            {/* Overlapping Cards */}
            <div className="vision-card">
              <h4>Our Vision</h4>
              <p>T be a leading provider of reliable, efficient, and sustainable utility solutions, empowering businesses and households to thrive while contributing to a greener future.</p>
            </div>
            
            <div className="mission-card">
              <h4>Our Mission</h4>
              <p>To revolutionize utility management by delivering tailored energy, water, and gas services that prioritize innovation, customer satisfaction, ensuring seamless and cost-effective solutions for every client.</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

function AboutStory() {
  const cards = [
    { title: 'Understanding Your Needs', desc: 'We recognized the challenges customers face in managing utilities and aimed to simplify the process with seamless, tailored services that prioritize convenience and value.', styleClass: 'story-card-white' },
    { title: 'Innovation And Sustainability', desc: 'With a focus on advanced technology and eco-conscious practices, we deliver solutions that not only meet your needs but also contribute to a greener, more sustainable future.', styleClass: 'story-card-white' },
    { title: 'Your Trusted Partner', desc: 'Over the years, GGS Utilities has earned the trust of customers by consistently providing exceptional service, ensuring your comfort and satisfaction remain our top priorities.', styleClass: 'story-card-green' }
  ];

  return (
    <section className="about-story-section">
      <div className="section-container">
        <div className="about-story-header-row animate-fade-up">
          <div className="story-title-col">
            <span className="be-sub-title" style={{ color: 'var(--teal-main)', display: 'block', marginBottom: '15px', letterSpacing: '2px', fontWeight: '700', textTransform: 'uppercase', fontSize: '13px' }}>OUR STORY</span>
            <h2 className="section-header" style={{ color: 'var(--teal-dark)', fontSize: '46px', lineHeight: '1.2' }}>Explore Our Journey And Vision</h2>
          </div>
          <div className="story-desc-col">
            <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.7' }}>
              GGS Utilities was founded with a clear goal: to revolutionize utility management by offering reliable, efficient, and sustainable energy, water, and gas solutions for businesses and households.
            </p>
          </div>
        </div>
        
        <div className="about-story-grid-3 animate-fade-up" style={{ animationDelay: '200ms' }}>
          {cards.map((card, index) => (
            <div key={index} className={`about-story-card-new ${card.styleClass}`}>
              <h4 className="story-card-title">{card.title}</h4>
              <p className="story-card-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className="contact-cta-section" style={{
      backgroundImage: 'linear-gradient(rgba(10, 30, 25, 0.7), rgba(10, 30, 25, 0.85)), url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '120px 20px',
      textAlign: 'center',
      color: '#fff'
    }}>
      <div className="section-container" style={{ maxWidth: '850px', margin: '0 auto' }}>
        <h2 className="contact-cta-title" style={{ color: '#fff', fontWeight: 'bold' }}>
          Have Questions Or Interested In Collaborating With GGS Utilities?
        </h2>
        <Link to="/contact-us" className="contact-cta-btn">
          CONTACT US <i className="fa-solid fa-arrow-right" style={{ marginLeft: '10px' }}></i>
        </Link>
      </div>
    </section>
  );
}

export default function AboutUs() {
  useSEO("About Us | GGS Utilities - Your Trusted Energy Partner", "Learn about GGS Utilities, our mission, and our commitment to providing UK businesses with reliable, eco-friendly energy and water solutions.");
  useEffect(() => {
    window.scrollTo(0, 0);
    // Slight delay to ensure elements are in the DOM before animation trigger applies
    setTimeout(() => {
      const event = new Event('scroll');
      window.dispatchEvent(event);
    }, 100);
  }, []);

  return (
    <div className="about-us-page">
      <PageBanner 
        title="Our Journey Towards Sustainable Energy" 
        description="Learn more about GGS Utilities and our commitment to sustainable utility solutions." 
        image="/about-hero-bg.jpg" 
      />
      <AboutIntro />
      <AboutValues />
      <AboutStory />
      <AboutCTA />
    </div>
  );
}
