import useSEO from '../hooks/useSEO';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import UnifiedCTA from '../components/UnifiedCTA';

import PageBanner from '../components/PageBanner';

/* 2. Why Switching Matters Section */
function BESwitching() {
  return (
    <section className="bgas-switching-section">
      <div className="section-container">
        <div className="bgas-switching-top-grid">
          <div className="bgas-switching-title-col animate-fade-right">
            <h2>Why Switching Business Gas Suppliers Matters</h2>
          </div>
          <div className="bgas-switching-text-col animate-fade-left">
            <div className="bgas-switching-item">
              <h4>Lower Gas Bills</h4>
              <p>Switching to a competitive gas supplier can help your business save significantly on energy expenses.</p>
            </div>
            <div className="bgas-switching-item">
              <h4>Tailored Gas Plans</h4>
              <p>Access customized plans from GGS Utilities designed to meet your business's unique needs and consumption patterns.</p>
            </div>
            <div className="bgas-switching-item">
              <h4>Sustainability Options</h4>
              <p>Choose suppliers with eco-friendly gas solutions to reduce your carbon footprint and support greener operations.</p>
            </div>
          </div>
        </div>
        
        <div className="bgas-switching-images animate-fade-up">
          <img src="/gas_valve_rusty.png" alt="Rusty industrial gas valve" />
          <img src="/gas_valve_blue.png" alt="Blue gas valve on pipe" />
          <img src="/gas_tanks_uk.png" alt="Gas tanks with UK flag" />
        </div>
      </div>
    </section>
  );
}

/* 3. Service Benefits Section */
function BEServices() {
  const benefits = [
    { icon: 'fas fa-database', title: 'Reliable Supply', desc: 'Enjoy uninterrupted gas services to power your operations efficiently.' },
    { icon: 'fas fa-cloud-arrow-up', title: 'Competitive Pricing', desc: 'Access affordable and transparent rates designed for your business.' },
    { icon: 'fas fa-globe', title: 'Custom Solutions', desc: "Benefit from tailored plans that match your business's energy requirements." },
    { icon: 'far fa-sun', title: 'Energy Efficiency', desc: 'Maximize productivity with clean and efficient gas solutions.' },
    { icon: 'far fa-flag', title: 'Sustainability Options', desc: 'Opt for eco-friendly gas alternatives that support your sustainability goals.' },
    { icon: 'fas fa-file-contract', title: 'Advanced Monitoring', desc: 'Track and manage gas usage with state-of-the-art tools.' },
    { icon: 'fas fa-file-signature', title: 'Expert Support', desc: 'Rely on our team for technical advice and round-the-clock assistance.' },
    { icon: 'fas fa-hand-holding-dollar', title: 'Hassle-Free Transition', desc: 'Seamlessly switch to GGS Gas without disruptions to your business.' },
  ];

  return (
    <section className="be-benefits-section">
      <div className="be-benefits-overlay"></div>
      <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-header center animate-fade-up">
          <h5 className="sub-title" style={{ color: '#fca311' }}>SERVICE BENEFITS</h5>
          <h2 style={{ color: '#fff' }}>Why Choose GGS Gas?</h2>
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
    { title: 'Needs Assessment', desc: 'Evaluate your current gas usage and identify areas for improvement.' },
    { title: 'Customized Plan Development', desc: 'Select a plan that fits your operational and budgetary needs.' },
    { title: 'Smooth Transition', desc: 'Transition to GGS Gas with minimal impact on your business activities.' },
    { title: 'Ongoing Optimization', desc: 'Monitor and optimize your gas consumption for peak performance.' },
  ];

  return (
    <section className="bgas-impl-section">
      <div className="section-container">
        <div className="bgas-impl-layout">
          <div className="bgas-impl-image animate-fade-up">
            <img src="/business_gas_storage_tank.png" alt="Industrial gas storage tank" />
          </div>
          <div className="bgas-impl-content animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h4 className="bgas-impl-subtitle">IMPLEMENTATION PROCESS</h4>
            <p className="bgas-impl-desc">Changing to efficient gas services is simple with GGS Utilities.</p>
            <div className="bgas-impl-grid">
              {processes.map((p, i) => (
                <div key={i} className="bgas-impl-card">
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



export default function BusinessGas() {
  useSEO("Business Gas Solutions | Reliable Supply | GGS Utilities", "Discover cost-effective business gas solutions. We provide seamless installations, expert guidance, and scalable plans for your commercial needs.");
  // Trigger scroll animations specifically on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      const event = new Event('scroll');
      window.dispatchEvent(event);
    }, 100);
  }, []);

  return (
    <div className="business-gas-page">
      <PageBanner 
        title="Business Gas" 
        description="Efficient And Cost-Effective Gas Solutions For Your Business" 
        image="/business_gas_cooling_towers.png" 
      />
      <BESwitching />
      <BEServices />
      <BEProcess />
      <UnifiedCTA />
    </div>
  );
}
