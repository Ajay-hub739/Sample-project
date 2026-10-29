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
          <h5 className="be-sub-title">Business Broadband Provider In UK</h5>
          <h2 className="be-title-green" style={{ color: '#097355', fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.3' }}>Connecting Your Business With Fast, Reliable, And Affordable Broadband Solutions</h2>
          <ul style={{ listStyleType: 'none', paddingLeft: 0, marginTop: '20px' }}>
            <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <i className="fas fa-check-square" style={{ color: '#097355', marginTop: '5px' }}></i>
              <span>GGS Utilities offers fast and reliable broadband for seamless business operations.</span>
            </li>
            <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <i className="fas fa-check-square" style={{ color: '#097355', marginTop: '5px' }}></i>
              <span>Choose from scalable broadband packages tailored to your business needs.</span>
            </li>
            <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <i className="fas fa-check-square" style={{ color: '#097355', marginTop: '5px' }}></i>
              <span>Enjoy excellent customer service with quick issue resolution for minimal downtime.</span>
            </li>
          </ul>
          <Link to="/contact-us" className="ggs-btn" style={{ marginTop: '20px' }}>
            GET A QUOTE &rarr;
          </Link>
        </div>
        <div className="be-transform-image animate-fade-left">
          <img src="/large-buildings-with-dome-lights-768x555.jpg" alt="Connecting Your Business" style={{ borderRadius: '12px' }} />
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  const approaches = [
    { title: 'Faster Speeds And Reliable Connections', desc: 'Performance issues? Switch providers to access high-speed options, ensuring seamless operations.' },
    { title: 'Cost-Effective Plans', desc: 'Find competitive broadband packages that meet your business needs while reducing overhead costs.' },
    { title: 'Enhanced Customer Support', desc: 'Choose a provider that offers responsive customer service and quick issue resolution, ensuring minimal downtime.' }
  ];

  return (
    <section className="be-approach-section-exact" style={{ paddingBottom: '40px' }}>
      <div className="section-container be-approach-exact-grid">
        <div className="be-approach-exact-left animate-fade-right">
          <h2 className="be-approach-exact-title">Why Switching Business<br />Broadband Providers Matters</h2>
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
      <div className="section-container" style={{ marginTop: '40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <img src="/rm373batch2-30-scaled-qzo745fzlgtm1ygpuy1ab07t5w1r4p5xy5okmmnss0.jpg" alt="WiFi Logo" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', height: '220px' }} />
          <img src="/rm373batch2-14-scaled-qzo7489i5yxh0scmeh960hi6y1nursh4yjn12gjm9c.jpg" alt="Network Icon" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', height: '220px' }} />
          <img src="/full-shot-smiley-engineers-with-laptop-768x512.jpg" alt="People with laptop" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', height: '220px' }} />
        </div>
      </div>
    </section>
  );
}

function ServiceBenefitsSection() {
  const benefits = [
    { icon: 'fa-tachometer-alt', title: 'Super-Fast Speeds', text: 'Enjoy ultra-fast internet for uninterrupted browsing, streaming, and downloads.' },
    { icon: 'fa-sliders-h', title: 'Flexible Plans', text: 'Choose from various plans tailored to your needs and budget.' },
    { icon: 'fa-wifi', title: 'Reliable Connectivity', text: 'Benefit from a stable and consistent connection anytime, anywhere.' },
    { icon: 'fa-shield-alt', title: 'Secure Network', text: 'Rest assured with advanced security features to protect your data.' },
    { icon: 'fa-headset', title: '24/7 Support', text: 'Get help with our round-the-clock customer service whenever you need it.' },
    { icon: 'fa-tools', title: 'Easy Installation', text: 'Hassle-free setup to get you online quickly.' },
    { icon: 'fa-chart-bar', title: 'Affordable Pricing', text: 'High-speed broadband at competitive rates for every user.' },
    { icon: 'fa-arrows-alt', title: 'Scalable Solutions', text: 'Ideal for homes and businesses with varying bandwidth requirements.' },
  ];

  return (
    <section className="be-benefits-section">
      <div className="be-benefits-overlay"></div>
      <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-header center animate-fade-up">
          <h5 className="sub-title" style={{ color: '#fca311' }}>SERVICE BENEFITS</h5>
          <h2 style={{ color: '#fff' }}>Why Choose GGS Broadband<br/>Services?</h2>
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
    { title: 'Consultation & Plan Selection', text: 'We assess your broadband needs and recommend the best plan tailored to your requirements.' },
    { title: 'Site Survey & Assessment', text: 'Our team conducts a site survey to determine the best installation setup for optimal connectivity.' },
    { title: 'Installation & Activation', text: 'We install and activate the connection with minimal disruption to your home or business.' },
    { title: 'Ongoing Support & Maintenance', text: 'Enjoy continuous customer support, quick resolution of any issues, and regular maintenance for reliable connectivity.' }
  ];

  return (
    <section className="be-process-section">
      <div className="section-container two-col">
        <div className="be-process-image animate-fade-right">
          <img src="/manager-scanning-box-while-his-colleague-typing-laptop-1-scaled-qzo742mh0ypr34ktbetelixfdqfnhluqxrq46srzao.jpg" alt="Broadband implementation process" />
        </div>
        <div className="be-process-content animate-fade-left">
          <h5 className="be-sub-title">IMPLEMENTATION PROCESS</h5>
          <p className="be-process-desc">
            At GGS Utilities, we ensure a smooth and efficient broadband installation experience. Our streamlined process ensures you're connected quickly and hassle-free.
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
            Ready to experience high-speed, reliable broadband? Contact us now for a no-obligation quote and find the perfect broadband solution for your home or business.
          </p>
          <Link to="/contact-us" className="powerup-btn">
            GET A QUOTE <span>&#8594;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function BroadbandServices() {
  useSEO("Broadband Services | Fast & Reliable | GGS Utilities", "Connecting Your Business With Fast, Reliable, And Affordable Broadband Solutions in the UK.");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="broadband-services-page">
      <PageBanner 
        title="Business Broadband Services" 
        description="Connecting Your Business With Fast, Reliable, And Affordable Broadband Solutions" 
        image="/large-buildings-with-dome-lights-768x555.jpg" 
      />
      <TransformingSection />
      <ApproachSection />
      <ServiceBenefitsSection />
      <ImplementationProcessSection />
      <BusinessCTA />
    </div>
  );
}
