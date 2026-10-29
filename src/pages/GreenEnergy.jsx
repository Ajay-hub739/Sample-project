import useSEO from '../hooks/useSEO';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import UnifiedCTA from '../components/UnifiedCTA';
import PageBanner from '../components/PageBanner';

function IntroSection() {
  return (
    <section className="be-transforming-section" style={{ backgroundColor: '#fafbfc', padding: '120px 0 80px 0', overflow: 'hidden' }}>
      <div className="section-container" style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div className="animate-fade-right" style={{ flex: '1 1 400px' }}>
          <h5 style={{ color: '#ee7b1c', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '14px', fontWeight: 'bold', marginBottom: '15px' }}>EMBRACE THE FUTURE</h5>
          <h2 style={{ color: '#1a1a1a', fontSize: '46px', fontWeight: '900', marginBottom: '25px', lineHeight: '1.2', letterSpacing: '-1px' }}>
            Power Your Business with <span style={{ color: '#097355' }}>100% Renewable Energy</span>
          </h2>
          <p style={{ fontSize: '18px', color: '#555', marginBottom: '20px', lineHeight: '1.7' }}>
            Transitioning to green energy is no longer just an environmental choice—it’s a strategic business decision. Protect your business from volatile fossil fuel markets while demonstrating your commitment to a sustainable future.
          </p>
          <p style={{ fontSize: '18px', color: '#555', marginBottom: '35px', lineHeight: '1.7' }}>
            At GGS Utilities, we provide bespoke green energy contracts sourced directly from wind, solar, and hydro power, backed by REGO (Renewable Energy Guarantees of Origin) certificates.
          </p>
          <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(9, 115, 85, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#097355', fontSize: '20px' }}>
                <i className="fa-solid fa-leaf"></i>
              </div>
              <div>
                <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '2px', color: '#1a1a1a' }}>Zero Carbon</h4>
                <p style={{ fontSize: '14px', color: '#777', margin: 0 }}>Emissions footprint</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(238, 123, 28, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ee7b1c', fontSize: '20px' }}>
                <i className="fa-solid fa-certificate"></i>
              </div>
              <div>
                <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '2px', color: '#1a1a1a' }}>REGO Certified</h4>
                <p style={{ fontSize: '14px', color: '#777', margin: 0 }}>Fully trackable power</p>
              </div>
            </div>
          </div>
        </div>
        <div className="animate-fade-left" style={{ flex: '1 1 400px', position: 'relative' }}>
          <img src="/green_energy_1.png" alt="Renewable Energy" style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
          <div style={{ position: 'absolute', bottom: '-30px', left: '50%', transform: 'translateX(-50%)', width: '85%', backgroundColor: '#fff', padding: '20px', borderRadius: '20px', boxShadow: '0 15px 35px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: '15px', justifyContent: 'center' }} className="animate-fade-up green-intro-badge">
            <h2 style={{ fontSize: '36px', color: '#097355', fontWeight: '900', margin: 0 }}>100%</h2>
            <p style={{ margin: 0, fontWeight: 'bold', color: '#333', lineHeight: '1.3', fontSize: '15px' }}>Renewable<br/>Energy Sourcing</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GreenTechnologies() {
  const techs = [
    { title: 'Commercial Solar Panels', desc: 'Harness the power of the sun with our large-scale solar panel systems. Achieve a 100% renewable energy source that reduces your carbon footprint while securing long-term energy savings.', img: '/commercial_solar_banner.png' },
    { title: 'Commercial Heat Pumps', desc: 'Transition to a greener energy future with our advanced heat pump solutions. These systems significantly lower carbon emissions and provide an efficient, cost-effective way to decarbonize your heating.', img: '/commercial_heat_pumps_banner.png' },
    { title: 'Combined Heat and Power (CHP)', desc: 'Generate your own energy with turnkey CHP units. Designed for maximum efficiency, these systems can be powered by biomethane or natural gas to perfectly align with your operational sustainability goals.', img: '/chp_banner.png' },
    { title: 'Microgrids', desc: 'Gain true energy independence with a self-contained system of integrated generation and storage technologies. Our microgrids are designed to provide reliable, uninterrupted, and tailored power.', img: '/microgrid_banner.png' }
  ];

  return (
    <section style={{ backgroundColor: '#f9fafb', padding: '120px 0' }}>
      <div className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h5 className="animate-fade-up" style={{ color: '#ee7b1c', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 'bold', marginBottom: '15px' }}>ON-SITE GENERATION</h5>
          <h2 className="animate-fade-up" style={{ fontSize: '46px', fontWeight: '900', color: '#1a1a1a', letterSpacing: '-1px' }}>Our Green Energy Technologies</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          {techs.map((tech, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className={`animate-fade-up green-tech-row ${isEven ? 'row-even' : 'row-odd'}`} style={{ display: 'flex', flexDirection: isEven ? 'row' : 'row-reverse', flexWrap: 'wrap', gap: '40px', alignItems: 'center', backgroundColor: '#fff', borderRadius: '24px', padding: '30px', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', animationDelay: `${i * 100}ms` }}>
                <div className="green-tech-img" style={{ flex: '1 1 400px', borderRadius: '16px', overflow: 'hidden', height: '350px' }}>
                  <img src={tech.img} alt={tech.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                </div>
                <div className="green-tech-text" style={{ flex: '1 1 400px', padding: '20px' }}>
                  <div style={{ width: '50px', height: '5px', backgroundColor: '#097355', marginBottom: '20px', borderRadius: '5px' }}></div>
                  <h4 style={{ fontSize: '32px', fontWeight: '800', color: '#1a1a1a', marginBottom: '20px', lineHeight: '1.2' }}>{tech.title}</h4>
                  <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.8', margin: 0 }}>{tech.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function GreenInitiatives() {
  const [activeTab, setActiveTab] = React.useState(0);
  const initiatives = [
    { title: 'Carbon Offsetting', desc: 'Neutralize your unavoidable emissions by investing in verified environmental projects around the globe. We help you select high-quality carbon credits to confidently claim net-zero operations and meet your corporate sustainability targets.', icon: 'fa-globe' },
    { title: 'EV Charging Infrastructure', desc: 'Future-proof your premises and support your employees with commercial electric vehicle charging stations. We manage everything from the initial site survey and grid capacity check to installation and ongoing maintenance.', icon: 'fa-charging-station' },
    { title: 'Smart Metering', desc: 'Gain precise half-hourly data to identify wastage, optimize your energy usage, and eliminate estimated billing completely. Take full control of your consumption analytics with our advanced smart metering rollout.', icon: 'fa-gauge-high' },
    { title: 'Corporate PPAs', desc: 'Secure long-term renewable energy directly from generators at fixed prices. Protect your business from volatile wholesale market pricing while guaranteeing 100% renewable power traceability directly to the source.', icon: 'fa-file-signature' }
  ];

  return (
    <section style={{ padding: '120px 0', backgroundColor: '#fff' }}>
      <div className="section-container" style={{ maxWidth: '1200px' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h5 className="sub-title animate-fade-up" style={{ color: '#097355', fontWeight: 'bold', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '15px' }}>BEYOND PROCUREMENT</h5>
          <h2 className="animate-fade-up" style={{ fontSize: '46px', fontWeight: '900', color: '#1a1a1a', letterSpacing: '-1px' }}>Comprehensive Green Initiatives</h2>
        </div>
        
        <div className="animate-fade-up green-init-wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', backgroundColor: '#f9fafb', borderRadius: '30px', padding: '50px', boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}>
          <div className="green-init-tabs" style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {initiatives.map((item, i) => (
              <button 
                key={i}
                onClick={() => setActiveTab(i)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '20px', padding: '25px 30px',
                  backgroundColor: activeTab === i ? '#097355' : 'transparent',
                  color: activeTab === i ? '#fff' : '#1a1a1a',
                  border: 'none', borderRadius: '20px', cursor: 'pointer',
                  textAlign: 'left', transition: 'all 0.3s ease',
                  boxShadow: activeTab === i ? '0 10px 30px rgba(9, 115, 85, 0.3)' : 'none'
                }}
              >
                <i className={`fa-solid ${item.icon}`} style={{ fontSize: '24px', color: activeTab === i ? '#ee7b1c' : '#097355' }}></i>
                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{item.title}</span>
              </button>
            ))}
          </div>
          
          <div className="green-init-content" style={{ flex: '2 1 400px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 40px', backgroundColor: '#fff', borderRadius: '24px', border: '1px solid #eaeaea', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
            <div className="green-init-text-box" style={{ maxWidth: '550px', animation: 'fadeIn 0.5s ease' }} key={activeTab}>
              <div style={{ width: '80px', height: '80px', borderRadius: '20px', backgroundColor: 'rgba(238, 123, 28, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                <i className={`fa-solid ${initiatives[activeTab].icon}`} style={{ fontSize: '40px', color: '#ee7b1c' }}></i>
              </div>
              <h3 style={{ fontSize: '36px', fontWeight: '900', color: '#1a1a1a', marginBottom: '25px', lineHeight: '1.2' }}>
                {initiatives[activeTab].title}
              </h3>
              <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.8' }}>
                {initiatives[activeTab].desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GreenServiceBenefits() {
  const benefits = [
    { title: 'Powering Efficiency', desc: 'Leverage insights to enhance energy efficiency, control costs, and maximize resource use.', icon: 'fa-bolt' },
    { title: 'Powering Resilience', desc: 'Avoid disruptions with 24/7 monitoring, flexible financing, and on-site maintenance.', icon: 'fa-cube' },
    { title: 'Powering Sustainability', desc: 'Adopt low-carbon technologies and strategies to achieve net-zero goals.', icon: 'fa-leaf' },
    { title: 'Cost Savings', desc: 'Lower expenses with efficient on-site energy generation and renewable technologies.', icon: 'fa-piggy-bank' },
    { title: 'Energy Independence', desc: 'Take control of your energy with self-sustained systems like CHP and solar.', icon: 'fa-sun' },
    { title: 'Future-Ready Infrastructure', desc: 'Adapt to evolving energy needs with scalable, advanced systems.', icon: 'fa-server' }
  ];

  return (
    <section style={{ backgroundColor: '#062b20', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'url(/particle-waves.jpg)', backgroundSize: 'cover' }}></div>
      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h5 className="animate-fade-up" style={{ color: '#ee7b1c', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 'bold', marginBottom: '15px' }}>THE GGS ADVANTAGE</h5>
          <h2 className="animate-fade-up" style={{ color: '#fff', fontSize: '46px', fontWeight: '900', letterSpacing: '-1px' }}>Why Choose Green Business Energy?</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
          {benefits.map((b, i) => (
            <div 
              key={i} 
              className="animate-fade-up" 
              style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '30px', borderRadius: '24px', backdropFilter: 'blur(10px)', animationDelay: `${i * 100}ms`, transition: 'all 0.3s ease', cursor: 'pointer' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(0.95)'; e.currentTarget.style.borderColor = '#ee7b1c'; e.currentTarget.style.boxShadow = '0 0 20px rgba(238, 123, 28, 0.4)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: 'rgba(238, 123, 28, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <i className={`fa-solid ${b.icon}`} style={{ fontSize: '24px', color: '#ee7b1c' }}></i>
              </div>
              <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>{b.title}</h4>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GreenFAQ() {
  const [openIdx, ReactSetOpenIdx] = React.useState(0);
  const faqs = [
    { q: 'Is green business energy more expensive than standard energy?', a: 'Historically, renewable energy carried a premium. However, as the infrastructure has scaled, green energy is now highly competitive and often cheaper than fossil-fuel derived energy, especially when considering long-term contracts and corporate power purchase agreements (CPPAs).' },
    { q: 'How is it proven that my energy is 100% renewable?', a: 'All green energy supplied through our partners is backed by REGO (Renewable Energy Guarantees of Origin) certificates in the UK. This provides a transparent, auditable trail proving that every unit of electricity you consume has been matched by a unit generated from renewable sources.' },
    { q: 'Will switching to green energy disrupt my power supply?', a: 'Absolutely not. The physical electricity delivered to your premises remains exactly the same and comes through the national grid. Switching to a green tariff simply dictates how your supplier sources the energy they put into the grid on your behalf.' },
    { q: 'Can you help us with carbon reporting (SECR)?', a: 'Yes. Adopting a green energy tariff immediately reduces your Scope 2 emissions to zero. We also provide full compliance reporting to assist with your Streamlined Energy and Carbon Reporting (SECR) obligations.' }
  ];

  return (
    <section className="faq-section" style={{ padding: '100px 0', backgroundColor: '#fff' }}>
      <div className="section-container" style={{ maxWidth: '800px' }}>
        <div className="faq-header animate-fade-up" style={{ textAlign: 'center', marginBottom: '50px' }}>
          <p className="faq-label" style={{ color: '#ee7b1c', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '13px', marginBottom: '10px' }}>KNOWLEDGE BASE</p>
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

export default function GreenEnergy() {
  useSEO("Green Energy Solutions | Sustainable Power | GGS Utilities", "Switch to sustainable power with our green energy solutions. Reduce your carbon footprint and access affordable, renewable energy for your business.");
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      const event = new Event('scroll');
      window.dispatchEvent(event);
    }, 100);
  }, []);

  return (
    <div className="green-energy-page">
      <PageBanner 
        title="Green Business Energy Solutions" 
        description="Powering a Sustainable Future with innovative, sustainable, and cost-efficient green energy solutions." 
        image="/about-hero-bg.jpg" 
      />
      <IntroSection />
      <GreenTechnologies />
      <GreenInitiatives />
      <GreenServiceBenefits />
      <GreenFAQ />
      <UnifiedCTA />
    </div>
  );
}
