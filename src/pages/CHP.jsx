import useSEO from '../hooks/useSEO';
import React, { useEffect, useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

function IntroSection() {
  return (
    <section className="be-transforming-section" style={{ backgroundColor: '#fafbfc', padding: '120px 0 80px 0' }}>
      <div className="section-container two-col">
        <div className="be-transform-text animate-fade-up">
          <h5 className="be-sub-title" style={{ color: '#097355', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '13px', fontWeight: 'bold' }}>Combined Heat & Power (CHP)</h5>
          <h2 className="be-title-green" style={{ color: '#1a1a1a', fontSize: '36px', fontWeight: '800', marginBottom: '20px', lineHeight: '1.3' }}>Generate your own electricity while making use of the heat</h2>
          <p style={{ fontSize: '16px', color: '#555', marginBottom: '15px' }}>
            Combined Heat & Power (CHP), also known as cogeneration, is an energy-efficient technology that generates electricity and useful heat from a single fuel source.
          </p>
          <p style={{ fontSize: '16px', color: '#555', marginBottom: '15px' }}>
            Unlike conventional energy systems where heat generated during electricity production is wasted, CHP captures this heat and reuses it for:
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', color: '#555', fontSize: '16px' }}>
            <li>Space heating</li>
            <li>Hot water production</li>
            <li>Industrial processes</li>
            <li>Steam generation</li>
            <li>Cooling applications (Trigeneration)</li>
          </ul>
          <p style={{ fontSize: '16px', color: '#555', marginBottom: '25px' }}>
            This enables businesses to achieve significantly higher energy efficiency while reducing overall energy expenditure. CHP systems can achieve efficiency levels above 80%, compared with much lower efficiencies from conventional power generation methods.
          </p>
          <p style={{ fontSize: '16px', color: '#555', marginBottom: '25px' }}>
            Whether you're operating a manufacturing facility, hospital, hotel, leisure centre, food processing plant, or commercial property, CHP technology can help you gain greater control over your energy consumption and operating costs.
          </p>
          <Link to="/contact-us" className="ggs-btn" style={{ marginTop: '10px' }}>
            Request a Free CHP Assessment &rarr;
          </Link>
        </div>
        <div className="be-transform-image animate-fade-left">
          <img src="/industrial_energy_centre.png" alt="CHP Solutions" style={{ borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
        </div>
      </div>
    </section>
  );
}

function WhyChooseCHPSection() {
  const reasons = [
    { title: 'Lower Energy Costs', desc: 'Produce electricity onsite and reduce reliance on expensive grid electricity. Businesses can often achieve substantial energy savings through efficient onsite generation.' },
    { title: 'Increased Energy Efficiency', desc: 'Traditional power stations waste large amounts of heat. CHP captures and reuses this energy, maximising fuel efficiency.' },
    { title: 'Improved Energy Security', desc: 'Generate power at your facility and reduce exposure to grid interruptions and energy market volatility.' },
    { title: 'Reduced Carbon Emissions', desc: 'By making better use of fuel resources, CHP helps lower carbon emissions and supports sustainability objectives.' },
    { title: 'Future-Ready Technology', desc: 'Modern CHP systems can support low-carbon fuels including hydrogen blends and renewable gas options, helping organisations prepare for future energy transitions.' }
  ];

  return (
    <section className="be-approach-section-exact" style={{ backgroundColor: '#fff', padding: '100px 0' }}>
      <div className="section-container be-approach-exact-grid">
        <div className="be-approach-exact-left animate-fade-right">
          <h2 className="be-approach-exact-title" style={{ fontSize: '40px', fontWeight: '800', lineHeight: '1.2', color: '#097355' }}>Why Choose<br />CHP?</h2>
          <p style={{ marginTop: '20px', fontSize: '16px', color: '#555', maxWidth: '80%' }}>Discover how Combined Heat & Power technology provides an efficient, reliable, and cost-effective way for businesses to take control of their energy.</p>
        </div>
        <div className="be-approach-exact-right">
          <div className="be-approach-exact-list">
            {reasons.map((item, i) => (
              <div key={i} className="be-approach-exact-item animate-fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function KeyBenefitsSection() {
  const benefits = [
    { icon: 'fa-piggy-bank', title: 'Save on Energy Costs', text: 'Reduce electricity purchasing costs and improve operational efficiency.' },
    { icon: 'fa-fire-flame-simple', title: 'Generate Heat and Power Simultaneously', text: 'One integrated system provides both electricity and thermal energy.' },
    { icon: 'fa-money-bill-trend-up', title: 'Fast Return on Investment', text: 'Many CHP installations deliver attractive payback periods depending on site energy demand and operational profile.' },
    { icon: 'fa-shield-halved', title: 'Reliable Onsite Generation', text: 'Increase resilience and reduce dependency on external energy supply.' },
    { icon: 'fa-leaf', title: 'Supports Net Zero Strategies', text: 'Reduce emissions while improving energy performance.' },
    { icon: 'fa-chart-line', title: 'Scalable Solutions', text: 'Available for small commercial facilities through to large industrial operations.' }
  ];

  return (
    <section className="be-benefits-section" style={{ padding: '100px 0', backgroundColor: '#097355', position: 'relative' }}>
      <div className="be-benefits-overlay" style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'url(/particle-waves.jpg)', backgroundSize: 'cover' }}></div>
      <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-header center animate-fade-up" style={{ marginBottom: '50px' }}>
          <h5 className="sub-title" style={{ color: '#ee7b1c', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px' }}>KEY BENEFITS</h5>
          <h2 style={{ color: '#fff', fontSize: '38px', fontWeight: '800' }}>Key Benefits of CHP</h2>
        </div>
        <div className="be-benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {benefits.map((b, i) => (
            <div key={i} className="be-benefit-card animate-stagger" style={{ '--index': i, backgroundColor: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <i className={`fa-solid ${b.icon} benefit-icon`} style={{ color: '#ee7b1c', fontSize: '30px', marginBottom: '20px' }}></i>
              <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>{b.title}</h4>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: '1.6' }}>{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    { title: 'Step 1 – Fuel Input', text: 'Natural gas, biomethane, hydrogen blends, or other approved fuels power the CHP engine.' },
    { title: 'Step 2 – Electricity Generation', text: 'The engine drives a generator that produces electricity for onsite use.' },
    { title: 'Step 3 – Heat Recovery', text: 'Heat that would normally be wasted is captured through heat recovery systems.' },
    { title: 'Step 4 – Useful Energy Application', text: 'Recovered heat is used for hot water, space heating, process heating, or steam production.' }
  ];

  return (
    <section className="be-process-section" style={{ padding: '100px 0', backgroundColor: '#f8f9fa' }}>
      <div className="section-container two-col" style={{ alignItems: 'center' }}>
        <div className="be-process-content animate-fade-right" style={{ flex: 1 }}>
          <h5 className="be-sub-title" style={{ color: '#097355', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>HOW CHP WORKS</h5>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#1a1a1a', marginBottom: '20px' }}>The Cogeneration Process</h2>
          <p className="be-process-desc" style={{ color: '#555', fontSize: '16px', marginBottom: '30px' }}>
            Result: Higher efficiency, lower costs, and improved sustainability.
          </p>
          <div className="be-process-grid" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {steps.map((s, i) => (
              <div key={i} className="be-process-card" style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', borderLeft: '4px solid #ee7b1c' }}>
                <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '8px' }}>{s.title}</h4>
                <p style={{ color: '#666', fontSize: '15px', margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="be-process-image animate-fade-left" style={{ flex: 1 }}>
          <img src="/chp_generator_unit.png" alt="How CHP Works" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }} />
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const industries = [
    { icon: 'fa-industry', title: 'Manufacturing', text: 'Reduce production energy costs while improving process efficiency.' },
    { icon: 'fa-utensils', title: 'Food & Beverage', text: 'Generate heat and electricity required for production processes.' },
    { icon: 'fa-hospital', title: 'Healthcare', text: 'Provide reliable energy for hospitals, care homes, and medical facilities.' },
    { icon: 'fa-hotel', title: 'Hotels & Hospitality', text: 'Support continuous hot water and heating demand.' },
    { icon: 'fa-graduation-cap', title: 'Education', text: 'Improve energy efficiency across campuses and educational buildings.' },
    { icon: 'fa-person-swimming', title: 'Leisure & Recreation', text: 'Power swimming pools, sports centres, and leisure facilities efficiently.' }
  ];

  return (
    <section style={{ padding: '100px 0', backgroundColor: '#fff' }}>
      <div className="section-container">
        <div className="section-header center animate-fade-up" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '38px', fontWeight: '800', color: '#1a1a1a' }}>Industries That Benefit From CHP</h2>
          <p style={{ color: '#666', fontSize: '17px', maxWidth: '600px', margin: '15px auto 0' }}>Whether you're operating a manufacturing facility or a leisure centre, CHP technology offers immense benefits.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {industries.map((ind, i) => (
            <div key={i} className="animate-stagger" style={{ '--index': i, backgroundColor: '#f8f9fa', padding: '40px 30px', borderRadius: '16px', textAlign: 'center', transition: 'transform 0.3s, boxShadow 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ width: '70px', height: '70px', backgroundColor: '#e6f3ef', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#097355', fontSize: '28px' }}>
                <i className={`fa-solid ${ind.icon}`}></i>
              </div>
              <h4 style={{ fontSize: '20px', fontWeight: '800', color: '#1a1a1a', marginBottom: '12px' }}>{ind.title}</h4>
              <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.6' }}>{ind.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    { title: 'CHP Feasibility Studies', text: 'We evaluate your energy usage, heat demand, and operational requirements to determine whether CHP is suitable for your site.', icon: 'fa-magnifying-glass-chart' },
    { title: 'System Design & Engineering', text: 'Our specialists design tailored CHP systems based on your facility\'s unique requirements.', icon: 'fa-pen-ruler' },
    { title: 'Installation & Commissioning', text: 'End-to-end project management from planning through installation and commissioning.', icon: 'fa-hammer' },
    { title: 'CHP Maintenance & Servicing', text: 'Comprehensive maintenance packages ensure optimal performance, reliability, and efficiency throughout the system lifecycle.', icon: 'fa-wrench' },
    { title: 'Performance Monitoring', text: 'Continuous monitoring and optimisation to maximise savings and operational efficiency.', icon: 'fa-chart-line' },
    { title: 'CHP Upgrades & Optimisation', text: 'Improve the performance of existing CHP systems through upgrades and operational improvements.', icon: 'fa-arrow-up-right-dots' }
  ];

  return (
    <section style={{ padding: '120px 0', backgroundColor: '#fff' }}>
      <div className="section-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        <div className="animate-fade-right" style={{ flex: '1', minWidth: '300px', position: 'sticky', top: '120px', alignSelf: 'flex-start' }}>
          <h5 style={{ color: '#ee7b1c', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px' }}>OUR CHP SERVICES</h5>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#1a1a1a', marginBottom: '25px', lineHeight: '1.2' }}>Comprehensive<br/>End-to-End Support</h2>
          <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.7', marginBottom: '30px', maxWidth: '400px' }}>
            From initial assessment to long-term maintenance, our Combined Heat & Power services are designed to ensure maximum efficiency and continuous performance for your business infrastructure.
          </p>
          <div style={{ height: '4px', width: '60px', backgroundColor: '#097355', borderRadius: '2px' }}></div>
        </div>
        
        <div className="animate-fade-left" style={{ flex: '1.5', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
          {services.map((s, i) => (
            <div 
              key={i} 
              className="service-horizontal-card"
              style={{ 
                display: 'flex', 
                gap: '25px', 
                padding: '35px', 
                backgroundColor: '#fafbfc', 
                borderRadius: '16px', 
                borderLeft: '5px solid #ee7b1c', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(10px)';
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderLeftColor = '#097355';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.backgroundColor = '#fafbfc';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.04)';
                e.currentTarget.style.borderLeftColor = '#ee7b1c';
              }}
            >
              <div style={{ width: '65px', height: '65px', backgroundColor: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#097355', fontSize: '26px', flexShrink: 0, boxShadow: '0 5px 15px rgba(0,0,0,0.06)' }}>
                <i className={`fa-solid ${s.icon}`}></i>
              </div>
              <div>
                <h4 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '12px' }}>{s.title}</h4>
                <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinancingSection() {
  const options = [
    'Equipment leasing',
    'Energy performance contracts',
    'Asset finance solutions',
    'Operational expenditure models',
    'Flexible commercial agreements'
  ];

  return (
    <section style={{ padding: '100px 0', backgroundColor: '#f4f9f7' }}>
      <div className="section-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
        <div className="animate-fade-right" style={{ flex: 1, minWidth: '280px' }}>
          <h5 style={{ color: '#097355', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px', fontSize: '13px' }}>FINANCING OPTIONS</h5>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#1a1a1a', marginBottom: '25px', lineHeight: '1.2' }}>CHP Financing Options</h2>
          <p style={{ color: '#555', fontSize: '16px', marginBottom: '20px', lineHeight: '1.7' }}>
            We understand that capital investment can be a concern for many organisations. GGS Utilities can help explore flexible funding options, including:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0' }}>
            {options.map((opt, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: '#333', marginBottom: '12px', fontWeight: '600' }}>
                <i className="fa-solid fa-circle-check" style={{ color: '#097355' }}></i> {opt}
              </li>
            ))}
          </ul>
          <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.7', fontStyle: 'italic', borderLeft: '4px solid #ee7b1c', paddingLeft: '15px' }}>
            "Our goal is to help businesses access CHP technology while managing cash flow effectively."
          </p>
        </div>
        <div className="animate-fade-left" style={{ flex: 1, minWidth: '280px' }}>
          <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 15px 40px rgba(0,0,0,0.08)' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#1a1a1a', marginBottom: '20px' }}>Why Choose GGS Utilities?</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#097355', marginBottom: '5px' }}>Industry Expertise</h4>
                <p style={{ fontSize: '14px', color: '#666' }}>Experienced energy specialists supporting businesses across multiple sectors.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#097355', marginBottom: '5px' }}>Independent Advice</h4>
                <p style={{ fontSize: '14px', color: '#666' }}>Technology-focused recommendations tailored to your operational requirements.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#097355', marginBottom: '5px' }}>End-to-End Support</h4>
                <p style={{ fontSize: '14px', color: '#666' }}>From feasibility assessment through installation and ongoing maintenance.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#097355', marginBottom: '5px' }}>Cost Reduction Focus</h4>
                <p style={{ fontSize: '14px', color: '#666' }}>Helping businesses lower energy expenditure and improve efficiency.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#097355', marginBottom: '5px' }}>Sustainability Driven</h4>
                <p style={{ fontSize: '14px', color: '#666' }}>Supporting carbon reduction and long-term energy transition strategies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CHPFAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  const faqs = [
    { q: 'What is CHP?', a: 'Combined Heat & Power (CHP) is a system that generates electricity and useful heat from a single fuel source.' },
    { q: 'Is CHP suitable for my business?', a: 'CHP is most effective where there is a consistent demand for both electricity and heat.' },
    { q: 'What fuels can CHP use?', a: 'Modern CHP systems can operate using natural gas, biomethane, and certain hydrogen blends, with hydrogen-ready options increasingly available.' },
    { q: 'How much can I save?', a: 'Savings depend on energy consumption, heat demand, and operating hours. A feasibility assessment can identify potential cost reductions.' },
    { q: 'How long does installation take?', a: 'Project timescales vary depending on system size and site requirements.' },
    { q: 'Do CHP systems require maintenance?', a: 'Yes. Regular servicing ensures efficiency, reliability, and long-term performance.' }
  ];

  return (
    <section className="faq-section" style={{ padding: '100px 0', backgroundColor: '#fff' }}>
      <div className="section-container" style={{ maxWidth: '800px' }}>
        <div className="faq-header animate-fade-up" style={{ textAlign: 'center', marginBottom: '50px' }}>
          <p className="faq-label" style={{ color: '#ee7b1c', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '13px', marginBottom: '10px' }}>QUESTIONS & ANSWERS</p>
          <h3 className="faq-title" style={{ fontSize: '38px', fontWeight: '800', color: '#1a1a1a' }}>Frequently Asked Questions</h3>
        </div>
        <div className="faq-accordion animate-fade-up">
          {faqs.map((item, i) => (
            <div key={i} className={`faq-item ${openIdx === i ? 'faq-active' : ''}`}>
              <button 
                className="faq-question" 
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
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

function CustomCTA() {
  return (
    <section style={{ backgroundColor: '#097355', padding: '80px 0', textAlign: 'center', color: '#fff' }}>
      <div className="section-container animate-fade-up">
        <h2 style={{ fontSize: '40px', fontWeight: '800', marginBottom: '20px' }}>Ready to Explore CHP for Your Business?</h2>
        <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.6' }}>
          Speak with our energy specialists today and discover how Combined Heat & Power can help reduce costs, improve efficiency, and support your sustainability goals.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <a href="tel:+4403331380001" className="ggs-btn" style={{ backgroundColor: 'transparent', color: '#fff', border: '2px solid #fff', padding: '14px 36px', fontSize: '16px' }}>
            <i className="fa-solid fa-phone" style={{ marginRight: '8px' }}></i> Speak to an Expert
          </a>
        </div>
      </div>
    </section>
  );
}

export default function CHP() {
  useSEO("Combined Heat & Power (CHP) Solutions | GGS Utilities", "Generate your own electricity and useful heat. Discover how CHP systems can reduce your business energy costs and support sustainability goals.");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="chp-solutions-page">
      <PageBanner
        title="Combined Heat & Power (CHP) Solutions"
        description="Generate your own electricity while making use of the heat produced in the process. CHP systems provide an efficient, reliable, and cost-effective way for businesses to reduce energy costs."
        image="/chp_banner.png"
      />
      <IntroSection />
      <WhyChooseCHPSection />
      <KeyBenefitsSection />
      <HowItWorksSection />
      <IndustriesSection />
      <ServicesSection />
      <FinancingSection />
      <CHPFAQ />
      <CustomCTA />
    </div>
  );
}
