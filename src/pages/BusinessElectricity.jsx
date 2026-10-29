import useSEO from '../hooks/useSEO';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import UnifiedCTA from '../components/UnifiedCTA';

import PageBanner from '../components/PageBanner';

/* 2. Why Switching Matters Section */
function BESwitching() {
  return (
    <section className="be-switching-section">
      <div className="section-container">
        <div className="be-switching-top-grid">
          <div className="be-switching-title-col animate-fade-right">
            <h2>Why Switching Business Electricity Suppliers Matters</h2>
          </div>
          <div className="be-switching-text-col animate-fade-left">
            <div className="be-switching-item">
              <h4>Reduce Electricity Costs</h4>
              <p>Switching to a new supplier can help secure lower rates, ensuring your business minimizes its electricity expenses.</p>
            </div>
            <div className="be-switching-item">
              <h4>Improve Service Reliability</h4>
              <p>Choose a supplier with better customer service and reliable electricity solutions to keep your operations running smoothly.</p>
            </div>
            <div className="be-switching-item">
              <h4>Support Green Energy</h4>
              <p>Opt for suppliers offering renewable electricity options to align with sustainability goals and enhance your business reputation.</p>
            </div>
          </div>
        </div>
        
        <div className="be-switching-images animate-fade-up">
          <img src="/business_electricity_1.png" alt="Commercial building at dusk" />
          <img src="/business_electricity_2.png" alt="Smart electricity meter" />
          <img src="/sun-setting-electricity-pylons.jpg" alt="Sun setting behind electricity pylons" />
        </div>
      </div>
    </section>
  );
}

/* 3. Service Benefits Section */
function BEServices() {
  const benefits = [
    { icon: 'fas fa-forward', title: 'Expert Energy Management', desc: 'Partner with experienced professionals who optimize your electricity usage for maximum efficiency.' },
    { icon: 'fas fa-globe', title: 'Competitive Pricing', desc: 'Benefit from transparent, competitive rates tailored to your business needs.' },
    { icon: 'fas fa-wifi', title: 'Custom Solutions', desc: 'Choose plans that align with your specific energy consumption patterns and goals.' },
    { icon: 'far fa-sun', title: 'Sustainability Focused', desc: 'Contribute to a greener planet with our eco-friendly electricity options.' },
    { icon: 'fas fa-headset', title: 'Advanced Analytics', desc: 'Monitor and manage energy consumption with cutting-edge tools and insights.' },
    { icon: 'fas fa-certificate', title: '24/7 Support', desc: 'Access round-the-clock customer support for a seamless service experience.' },
    { icon: 'fas fa-chart-line', title: 'Seamless Switching', desc: 'Transition to GGS Electricity effortlessly with our dedicated onboarding assistance.' },
    { icon: 'fas fa-chart-pie', title: 'Reliable Supply', desc: 'Count on uninterrupted electricity service to keep your business running smoothly.' },
  ];

  return (
    <section className="be-benefits-section">
      <div className="be-benefits-overlay"></div>
      <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-header center animate-fade-up">
          <h5 className="sub-title" style={{ color: '#fca311' }}>SERVICE BENEFITS</h5>
          <h2 style={{ color: '#fff' }}>Why Choose GGS Electricity?</h2>
        </div>
        <div className="be-benefits-grid">
          {benefits.map((b, i) => (
            <div key={i} className="be-benefit-card animate-stagger" style={{'--index': i}}>
              <i className={`${b.icon} benefit-icon`}></i>
              <h4>{b.title}</h4>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 4. Implementation Process Section */
function BEProcess() {
  const processes = [
    { title: 'Energy Assessment', desc: 'Analyze your current electricity usage to identify needs and optimize costs.' },
    { title: 'Customized Plan Selection', desc: 'Tailor a plan that suits your business requirements and budget.' },
    { title: 'Seamless Transition', desc: 'Manage the switch effortlessly with minimal disruption to your operations.' },
    { title: 'Ongoing Support', desc: 'Provide continuous monitoring, support, and optimization for peak efficiency.' },
  ];

  return (
    <section className="be-impl-section">
      <div className="section-container">
        <div className="be-impl-layout">
          <div className="be-impl-image animate-fade-up">
            <img src="/bulb-lamp-tungsten-768x734.jpg" alt="Tungsten light bulb" />
          </div>
          <div className="be-impl-content animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h4 className="be-impl-subtitle">IMPLEMENTATION PROCESS</h4>
            <p className="be-impl-desc">Seamlessly transitioning your business to efficient and reliable electricity solutions.</p>
            <div className="be-impl-grid">
              {processes.map((p, i) => (
                <div key={i} className="be-impl-card">
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BusinessElectricity() {
  useSEO("Business Electricity Connections | GGS Utilities", "Secure reliable business electricity with GGS Utilities. We offer tailored plans, fast installations, and competitive rates for all your power needs.");
  // Trigger scroll animations specifically on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      const event = new Event('scroll');
      window.dispatchEvent(event);
    }, 100);
  }, []);

  return (
    <div className="business-electricity-page">
      <PageBanner 
        title="Business Electricity" 
        description="Powering Your Business with Smart and Sustainable Electricity Solutions" 
        image="/bulb-lamp-tungsten-768x734.jpg" 
      />
      <BESwitching />
      <BEServices />
      <BEProcess />
      <UnifiedCTA />
    </div>
  );
}
