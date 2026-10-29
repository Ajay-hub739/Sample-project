import React, { useEffect } from 'react';
import useSEO from '../hooks/useSEO';
import '../index.css';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

function TransformingSection() {
  return (
    <section className="be-transforming-section" style={{ backgroundColor: '#fafbfc', padding: '80px 0' }}>
      <div className="section-container two-col">
        <div className="be-transform-text animate-fade-up">
          <h5 className="be-sub-title">Mobile Solutions</h5>
          <h2 className="be-title-green" style={{ color: '#097355', fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.3' }}>Empowering Your Business With Flexible And Cost-Effective Mobile Solutions</h2>
          <ul style={{ listStyleType: 'none', paddingLeft: 0, marginTop: '20px' }}>
            <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <i className="fas fa-check-square" style={{ color: '#097355', marginTop: '5px' }}></i>
              <span>GGS Utilities offers tailored mobile plans to suit your business communications needs.</span>
            </li>
            <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <i className="fas fa-check-square" style={{ color: '#097355', marginTop: '5px' }}></i>
              <span>Scalable mobile solutions that support business growth and improve connectivity.</span>
            </li>
            <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <i className="fas fa-check-square" style={{ color: '#097355', marginTop: '5px' }}></i>
              <span>Flexible plans designed to reduce costs while optimizing mobile usage.</span>
            </li>
          </ul>
          <Link to="/contact-us" className="ggs-btn" style={{ marginTop: '20px' }}>
            GET A QUOTE &rarr;
          </Link>
        </div>
        <div className="be-transform-image animate-fade-left">
          <img src="/hand-touching-mobile-with-applications-768x512.jpg" alt="Mobile Solutions" style={{ borderRadius: '12px' }} />
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  const approaches = [
    { title: 'Improved Connectivity', desc: 'Partnering with a reliable mobile business provider ensures secure and fast connections, boosting productivity.' },
    { title: 'Cost-Effective Plans', desc: 'Access competitive mobile plans tailored to your business usage, minimizing expenses.' },
    { title: 'Scalable And Flexible', desc: 'Easily scale mobile services to accommodate your growing business needs, allowing flexibility and convenience.' }
  ];

  return (
    <section className="be-approach-section-exact" style={{ paddingBottom: '80px' }}>
      <div className="section-container be-approach-exact-grid">
        <div className="be-approach-exact-left animate-fade-right">
          <h2 className="be-approach-exact-title">Why Switching Mobile<br />Solutions Providers Matters</h2>
        </div>
        <div className="be-approach-exact-right">
          <div className="be-approach-exact-list">
            {approaches.map((item, i) => (
              <div key={i} className="be-approach-exact-item animate-fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceBenefitsSection() {
  const benefits = [
    { icon: 'fa-mobile-alt', title: 'Custom Mobile Apps', text: 'We offer personalized mobile app solutions to meet your business needs, improving customer engagement.' },
    { icon: 'fa-sync-alt', title: 'Cross-Platform Compatibility', text: 'Ensure a broader audience with mobile solutions that work seamlessly across all devices.' },
    { icon: 'fa-cogs', title: 'Enhanced Productivity', text: 'Empower your team with mobile tools that enhance communication, collaboration, and productivity.' },
    { icon: 'fa-shield-alt', title: 'Data Security', text: 'Protect sensitive business and customer data with advanced security features in our mobile solutions.' },
    { icon: 'fa-clock', title: 'Real-Time Access', text: 'Stay connected and access your business data, tools, and systems anytime, anywhere.' },
    { icon: 'fa-chart-line', title: 'Scalable Solutions', text: "Whether you're a startup or an established enterprise, our mobile solutions scale to meet your growing business needs." },
    { icon: 'fa-headset', title: '24/7 Support', text: 'Enjoy continuous customer support to address mobile-related issues and ensure smooth operation.' },
    { icon: 'fa-piggy-bank', title: 'Cost-Effective Solutions', text: 'Benefit from affordable, high-quality mobile solutions that deliver excellent return on your investment.' },
  ];

  return (
    <section className="be-benefits-section">
      <div className="be-benefits-overlay"></div>
      <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-header center animate-fade-up">
          <h5 className="sub-title" style={{ color: '#fca311', fontSize: '20px', fontWeight: 'bold' }}>SERVICE BENEFITS</h5>
          <h2 style={{ color: '#fff', fontSize: '48px', fontWeight: '800', lineHeight: '1.2' }}>Why Choose GGS Mobile<br/>Solutions?</h2>
        </div>
        <div className="be-benefits-grid">
          {benefits.map((b, i) => (
            <div key={i} className="be-benefit-card animate-stagger" style={{'--index': i}}>
              <i className={`fa-solid ${b.icon} benefit-icon`}></i>
              <h4>{b.title}</h4>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImplementationProcessSection() {
  const steps = [
    { title: 'Consultation & Requirement Analysis', text: 'We start by understanding your business requirements and goals to recommend the best mobile solutions that align with your needs.' },
    { title: 'Design & Development', text: 'Our team designs and develops a mobile solution that meets your specifications, ensuring usability and performance.' },
    { title: 'Testing & Optimization', text: 'Before launch, we conduct thorough testing to ensure functionality, performance, and security across all mobile platforms.' },
    { title: 'Deployment & Support', text: 'After successful deployment, we provide ongoing support and optimization to ensure continued success and smooth operations.' }
  ];

  return (
    <section className="be-process-section">
      <div className="section-container two-col">
        <div className="be-process-image animate-fade-right">
          <img src="/man-holding-credit-card-tablet-workplace-background-1-scaled-qzo743kb7sr1eqjg5x8160ovz4b0payh9wdlo2ql4g.jpg" alt="Mobile Implementation process" />
        </div>
        <div className="be-process-content animate-fade-left">
          <h5 className="be-sub-title">IMPLEMENTATION PROCESS</h5>
          <p className="be-process-desc">
            Our straightforward process ensures you get the mobile solutions your business needs in a cost-effective and efficient way.
          </p>
          <div className="be-process-grid">
            {steps.map((s, i) => (
              <div key={i} className="be-process-card">
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BusinessCTA() {
  return (
    <section className="powerup-section">
      <div className="powerup-inner">
        <div className="powerup-content animate-fade-up">
          <p style={{ color: '#ee7b1c', fontWeight: 700, letterSpacing: '2px', fontSize: '13px', marginBottom: '12px', textTransform: 'uppercase' }}>
            GET IN TOUCH TODAY FOR A FREE QUOTE
          </p>
          <h2 className="powerup-title">Let's Find The Ideal Plan That Suits Your Needs And Keeps You Connected.</h2>
          <p className="powerup-text">
            Ready to enhance your business with innovative mobile solutions? Contact us for a no-obligation quote and explore how our mobile services can streamline your operations and boost productivity.
          </p>
          <Link to="/contact-us" className="powerup-btn">
            GET A QUOTE <span>&#8594;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function MobileSolutions() {
  useSEO("Mobile Solutions | Flexible & Cost-Effective | GGS Utilities", "Empowering your business with flexible and cost-effective mobile solutions.");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mobile-solutions-page">
      <PageBanner 
        title="Mobile Solutions" 
        description="Empowering Your Business With Flexible And Cost-Effective Mobile Solutions" 
        image="/hand-touching-mobile-with-applications-768x512.jpg" 
      />
      <TransformingSection />
      <ApproachSection />
      <ServiceBenefitsSection />
      <ImplementationProcessSection />
      <BusinessCTA />
    </div>
  );
}
