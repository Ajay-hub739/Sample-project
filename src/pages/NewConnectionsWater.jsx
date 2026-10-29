import useSEO from '../hooks/useSEO';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import UnifiedCTA from '../components/UnifiedCTA';

import PageBanner from '../components/PageBanner';

/* 1. Intro Section */
function NCWIntro() {
  return (
    <section className="be-transforming-section" style={{ backgroundColor: '#fafbfc', padding: '120px 0 80px 0' }}>
      <div className="section-container two-col" style={{ display: 'flex', gap: '50px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div className="be-transform-text animate-fade-up" style={{ flex: 1, minWidth: '320px' }}>
          <h5 className="be-sub-title" style={{ color: '#097355', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '13px', fontWeight: 'bold' }}>Commercial Water Solutions</h5>
          <h2 className="be-title-green" style={{ color: '#1a1a1a', fontSize: '36px', fontWeight: '800', marginBottom: '20px', lineHeight: '1.3' }}>Expert Guidance for Your New Water Connection</h2>
          <p style={{ fontSize: '16px', color: '#555', marginBottom: '15px' }}>
            Securing a new water connection for a commercial premises or development site can be a complex and time-consuming process. Navigating local water authorities, arranging site surveys, and managing groundworks require dedicated attention.
          </p>
          <p style={{ fontSize: '16px', color: '#555', marginBottom: '15px' }}>
            At GGS Utilities, our experienced team manages the entire process on your behalf. We act as the single point of contact between you, the water wholesalers, and the contractors.
          </p>
          <p style={{ fontSize: '16px', marginBottom: '30px', fontWeight: '600', color: '#097355' }}>
            Whether you are a property developer, managing agent, or a business relocating, we ensure your new water supply is delivered on time, on budget, and fully compliant.
          </p>
        </div>
        <div className="be-transform-image animate-fade-up" style={{ flex: 1, minWidth: '320px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="/business_professionals_shaking_hands.png" alt="New Water Connection Setup" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
        </div>
      </div>
    </section>
  );
}

/* 2. Service Benefits Section */
function NCWServices() {
  const benefits = [
    { icon: 'fas fa-tachometer-alt', title: 'Quick and Reliable Connections', desc: 'Get your water connection up and running without delays. Our streamlined processes ensure timely installations and minimal disruptions.' },
    { icon: 'fas fa-cogs', title: 'Customized Solutions', desc: 'We offer personalized water services to meet the unique demands of your home or business, ensuring optimal usage and efficiency.' },
    { icon: 'fas fa-user-tie', title: 'Expert Support', desc: 'Our team of skilled professionals is here to guide you through every step of the process, from application to activation, providing expert advice and assistance.' },
    { icon: 'fas fa-leaf', title: 'Sustainability Focus', desc: 'We prioritize eco-friendly practices by encouraging water conservation and efficient use, helping you contribute to a greener future.' },
    { icon: 'fas fa-pound-sign', title: 'Transparent Pricing', desc: 'Enjoy transparent and upfront pricing with no hidden charges, ensuring complete peace of mind throughout the connection process.' },
    { icon: 'fas fa-headset', title: '24/7 Customer Support', desc: 'Our dedicated support team is available around the clock to address your queries and provide timely assistance whenever needed.' },
    { icon: 'fas fa-file-contract', title: 'Compliance with Regulations', desc: 'We adhere to all local and national water service regulations, ensuring a smooth process and legal compliance at every stage.' },
    { icon: 'fas fa-laptop-water', title: 'Advanced Technology Integration', desc: 'Benefit from modern tools and technologies for accurate water metering, efficient resource management, and real-time monitoring.' },
  ];

  return (
    <section className="be-services-section">
      <div className="section-container">
        <h4 className="be-services-subtitle center animate-fade-up">SERVICE BENEFITS</h4>
        <h2 className="be-services-title center animate-fade-up">Why Choose GGS Utilities for Water Services?</h2>
        <div className="be-services-grid">
          {benefits.map((b, i) => (
            <div key={i} className="be-service-card animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
              <i className={b.icon}></i>
              <h4>{b.title}</h4>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 3. Implementation Process Section */
function NCWProcess() {
  const processes = [
    { title: 'New Water Connections', desc: 'Fast and hassle-free connection services for residential, commercial, and industrial properties.' },
    { title: 'Meter Installation and Management', desc: 'Accurate and efficient water meter installations to monitor consumption effectively.' },
    { title: 'Business Water Supplier Switching', desc: 'Switch your commercial water supplier with confidence. We manage the entire process, helping your business benefit from competitive pricing, improved service, and seamless account transition.' },
    { title: 'Water Usage Consultation', desc: 'Expert guidance on water usage optimization to help you save water and reduce costs.' },
  ];

  return (
    <section className="be-impl-section">
      <div className="section-container">
        <div className="be-impl-layout">
          <div className="be-impl-image animate-fade-up">
            <img src="/plastic_bottle_recycling.png" alt="Water Management" />
          </div>
          <div className="be-impl-content animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h3 style={{ fontSize: '28px', color: '#0a2e24', marginBottom: '20px', fontWeight: 'bold' }}>Our Water Services Include</h3>
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

/* 4. Sectors Section */
function NCWSectors() {
  const sectors = [
    { title: 'Property Developers', desc: 'Seamlessly integrate water supplies for new build residential or commercial estates.', icon: 'fa-building' },
    { title: 'Manufacturing & Industrial', desc: 'High-volume water connection planning for demanding industrial requirements.', icon: 'fa-industry' },
    { title: 'Retail & Hospitality', desc: 'Reliable utility connections ensuring hotels and stores open on schedule.', icon: 'fa-store' },
    { title: 'Agriculture', desc: 'Specialized supply setups to support farming and large-scale agricultural operations.', icon: 'fa-tractor' }
  ];

  return (
    <section style={{ backgroundColor: '#fff', padding: '100px 0' }}>
      <div className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h5 className="sub-title animate-fade-up" style={{ color: '#ee7b1c', fontWeight: 'bold', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '15px' }}>WHO WE HELP</h5>
          <h2 className="animate-fade-up" style={{ fontSize: '38px', fontWeight: '900', color: '#1a1a1a', letterSpacing: '-1px' }}>Sectors We Support</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {sectors.map((item, i) => (
            <div 
              key={i} 
              className="animate-fade-up" 
              style={{ backgroundColor: '#f9fafb', padding: '40px 30px', borderRadius: '16px', border: '1px solid #eaeaea', textAlign: 'center', transition: 'all 0.3s ease', animationDelay: `${i * 100}ms`, cursor: 'pointer' }} 
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(0.95)'; e.currentTarget.style.borderColor = '#097355'; e.currentTarget.style.boxShadow = '0 0 20px rgba(9, 115, 85, 0.2)'; }} 
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderColor = '#eaeaea'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ width: '60px', height: '60px', margin: '0 auto 20px', backgroundColor: 'rgba(9, 115, 85, 0.1)', color: '#097355', fontSize: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '15px' }}>{item.title}</h4>
              <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* New Section: Switch Your Business Water Supplier */
function NCWSupplierSwitching() {
  const benefits = [
    'Competitive water tariffs',
    'Improved customer support',
    'Simplified billing and account management',
    'Water efficiency advice',
    'Leak detection and consumption monitoring',
    'Dedicated account management',
    'No interruption to your water supply',
    'Quick and straightforward switching process'
  ];

  return (
    <section className="be-transforming-section" style={{ backgroundColor: '#fff', padding: '100px 0' }}>
      <div className="section-container two-col" style={{ display: 'flex', gap: '50px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div className="be-transform-image animate-fade-right" style={{ flex: 1, minWidth: '320px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="/business_water_switching.png" alt="Switch Your Business Water Supplier" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
        </div>
        <div className="be-transform-text animate-fade-left" style={{ flex: 1, minWidth: '320px' }}>
          <h5 className="be-sub-title" style={{ color: '#097355', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '13px', fontWeight: 'bold' }}>Switch & Save</h5>
          <h2 className="be-title-green" style={{ color: '#1a1a1a', fontSize: '36px', fontWeight: '800', marginBottom: '20px', lineHeight: '1.3' }}>Switch Your Business Water Supplier</h2>
          <p style={{ fontSize: '16px', color: '#555', marginBottom: '15px' }}>
            Businesses have the freedom to choose their commercial water supplier, helping reduce costs, improve service quality, and gain better control over water management.
          </p>
          <p style={{ fontSize: '16px', color: '#555', marginBottom: '15px' }}>
            At GGS Utilities, we make switching your business water supplier simple and hassle-free. Our specialists handle the entire process, ensuring a smooth transition with minimal disruption to your operations.
          </p>
          <p style={{ fontSize: '16px', color: '#555', marginBottom: '25px' }}>
            Whether you're looking for more competitive pricing, improved customer support, or tailored water management services, we'll help you find the right solution for your business.
          </p>
          <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0a2e24', marginBottom: '15px' }}>Benefits of Switching</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 20px' }}>
            {benefits.map((benefit, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <i className="fas fa-check-circle" style={{ color: '#097355', marginTop: '4px', fontSize: '16px' }}></i>
                <span style={{ fontSize: '15px', color: '#444', lineHeight: '1.4' }}>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 5. FAQ Section */
function NCWFAQ() {
  const [openIdx, ReactSetOpenIdx] = React.useState(0);
  const faqs = [
    { q: 'How long does a new commercial water connection take?', a: 'The timeline varies depending on the complexity of the site, necessary groundworks, and local water authority processing times. It typically ranges from a few weeks to several months. We manage the timeline closely to avoid unnecessary delays.' },
    { q: 'Can I switch my business water supplier?', a: 'Yes. Eligible businesses can choose their commercial water supplier. Our team manages the switching process from start to finish, ensuring there is no interruption to your water supply.' },
    { q: 'Do I need to manage the local water authority myself?', a: 'No. GGS Utilities acts as your representative. We submit the applications, provide the required site plans, and liaise directly with the water company on your behalf.' },
    { q: 'Can you assist with temporary building site supplies?', a: 'Yes. If you require a temporary water supply for construction purposes before the permanent connection is installed, we can arrange this as part of the project.' },
    { q: 'What information do I need to start the process?', a: 'To begin, we generally require site location plans, details of your expected water demand (flow rates), and the full site address. Our team will guide you on exactly what documents are needed.' }
  ];

  return (
    <section className="faq-section" style={{ padding: '100px 0', backgroundColor: '#fdfdfd', borderTop: '1px solid #eaeaea' }}>
      <div className="section-container" style={{ maxWidth: '800px' }}>
        <div className="faq-header animate-fade-up" style={{ textAlign: 'center', marginBottom: '50px' }}>
          <p className="faq-label" style={{ color: '#ee7b1c', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '13px', marginBottom: '10px' }}>FAQ</p>
          <h3 className="faq-title" style={{ fontSize: '38px', fontWeight: '800', color: '#1a1a1a' }}>Frequently Asked Questions</h3>
        </div>
        <div className="faq-accordion animate-fade-up">
          {faqs.map((item, i) => (
            <div key={i} className={`faq-item ${openIdx === i ? 'faq-active' : ''}`}>
              <button 
                className="faq-question" 
                onClick={() => ReactSetOpenIdx(openIdx === i ? -1 : i)}
              >
                <span>{item.q}</span>
                <span className="faq-icon">
                  <i className={`fas fa-chevron-${openIdx === i ? 'up' : 'down'}`}></i>
                </span>
              </button>
              {openIdx === i && (
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function NewConnectionsWater() {
  useSEO("Commercial Water Services | GGS Utilities", "Establish reliable commercial water connections and switch water suppliers with GGS Utilities. We handle the process efficiently, ensuring uninterrupted water supply.");
  // Trigger scroll animations specifically on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      const event = new Event('scroll');
      window.dispatchEvent(event);
    }, 100);
  }, []);

  return (
    <div className="new-connections-water-page">
      <PageBanner 
        title="Commercial Water Services" 
        description="From new water connections to supplier switching, GGS Utilities delivers reliable commercial water solutions tailored to your business." 
        image="/water_waste_implementation.png" 
      />
      <NCWIntro />
      <NCWServices />
      <NCWSupplierSwitching />
      <NCWProcess />
      <NCWSectors />
      <NCWFAQ />
      <UnifiedCTA />
    </div>
  );
}
