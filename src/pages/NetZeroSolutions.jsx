import useSEO from '../hooks/useSEO';
import { useEffect, useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

function IntroSection() {
  return (
    <section className="be-transforming-section" style={{ backgroundColor: '#fafbfc', padding: '120px 0 80px 0' }}>
      <div className="section-container two-col" style={{ display: 'flex', gap: '50px', alignItems: 'center' }}>
        <div className="be-transform-text animate-fade-up" style={{ flex: 1, minWidth: '320px' }}>
          <h5 className="be-sub-title" style={{ color: '#097355', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '13px', fontWeight: 'bold' }}>Building a Sustainable Future for Business</h5>
          <h2 className="be-title-green" style={{ color: '#1a1a1a', fontSize: '36px', fontWeight: '800', marginBottom: '20px', lineHeight: '1.3' }}>Accelerate Your Journey to Net Zero</h2>
          <p style={{ fontSize: '16px', color: '#555', marginBottom: '15px' }}>
            As energy costs continue to rise and environmental regulations become increasingly important, businesses are seeking smarter ways to reduce emissions while maintaining operational efficiency.
          </p>
          <p style={{ fontSize: '16px', color: '#555', marginBottom: '15px' }}>
            At GGS Utilities, we help organizations identify opportunities to improve energy performance, reduce carbon emissions, and implement technologies that support long-term sustainability goals.
          </p>
          <p style={{ fontSize: '16px', marginBottom: '30px', fontWeight: '600', color: '#097355' }}>
            Our Net Zero solutions combine industry expertise, innovative technologies, and tailored strategies to help businesses transition towards a lower-carbon future.
          </p>
          <Link to="/contact-us" className="ggs-btn" style={{ backgroundColor: '#ee7b1c', color: '#fff', border: 'none', padding: '15px 30px', fontSize: '16px', fontWeight: 'bold', borderRadius: '8px', display: 'inline-block' }}>
            Request a Free Consultation &rarr;
          </Link>
        </div>
        <div className="be-transform-image animate-fade-up" style={{ flex: 1, minWidth: '320px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="/netzero_intro.png" alt="Net Zero Solutions" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
        </div>
      </div>
    </section>
  );
}

function WhyNetZeroSection() {
  const reasons = [
    { title: 'Reduce Carbon Emissions', text: 'Lower your environmental impact and contribute to global sustainability efforts.', icon: 'fa-earth-europe' },
    { title: 'Improve Energy Efficiency', text: 'Optimize energy usage and reduce operational waste.', icon: 'fa-bolt' },
    { title: 'Reduce Energy Costs', text: 'Implement technologies that help lower energy consumption and long-term operating expenses.', icon: 'fa-money-bill-trend-up' },
    { title: 'Meet Sustainability Targets', text: 'Support ESG commitments, environmental objectives, and corporate sustainability strategies.', icon: 'fa-bullseye' },
    { title: 'Future-Proof Your Business', text: 'Prepare for evolving regulations, stakeholder expectations, and industry standards.', icon: 'fa-forward-step' },
    { title: 'Enhance Brand Reputation', text: 'Demonstrate environmental responsibility and strengthen relationships with customers, investors, and partners.', icon: 'fa-handshake' }
  ];

  return (
    <section className="be-benefits-section" style={{ padding: '100px 0', backgroundColor: '#097355', position: 'relative' }}>
      <div className="be-benefits-overlay" style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'url(/particle-waves.jpg)', backgroundSize: 'cover' }}></div>
      <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-header center animate-fade-up" style={{ marginBottom: '50px', textAlign: 'center' }}>
          <h5 className="sub-title" style={{ color: '#ee7b1c', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px' }}>WHY IT MATTERS</h5>
          <h2 style={{ color: '#fff', fontSize: '38px', fontWeight: '800' }}>Why Net Zero Matters</h2>
        </div>
        <div className="be-benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {reasons.map((r, i) => (
            <div key={i} className="be-benefit-card animate-stagger" style={{ '--index': i, backgroundColor: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <i className={`fa-solid ${r.icon} benefit-icon`} style={{ color: '#ee7b1c', fontSize: '30px', marginBottom: '20px' }}></i>
              <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>{r.title}</h4>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: '1.6' }}>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    { title: 'Carbon Reporting & Compliance', text: 'Comprehensive Carbon Reporting services, including PPN 006 compliance, Scope 1, 2, & 3 emissions tracking, and actionable reduction plans.', icon: 'fa-chart-pie' },
    { title: 'Renewable Energy Solutions', text: 'Implement Commercial Solar Panels, Battery Storage Systems, and Sustainable Energy Infrastructure.', icon: 'fa-solar-panel' },
    { title: 'Commercial Heat Pumps', text: 'Transition to efficient, low-carbon heat pump technologies supporting sustainability.', icon: 'fa-fan' },
    { title: 'Combined Heat & Power (CHP)', text: 'Generate electricity and useful heat from a single source, optimizing energy use.', icon: 'fa-fire-flame-simple' },
    { title: 'Microgrid', text: 'Create smarter energy systems by integrating renewable generation and intelligent controls.', icon: 'fa-network-wired' },
    { title: 'Energy Efficiency Improvements', text: 'Identify opportunities for energy optimization, equipment upgrades, and smart management.', icon: 'fa-leaf' }
  ];

  return (
    <section style={{ backgroundColor: '#fdfdfd', padding: '120px 0', overflow: 'hidden' }}>
      <div className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h5 className="sub-title animate-fade-up" style={{ color: '#ee7b1c', fontWeight: 'bold', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '15px' }}>SOLUTIONS</h5>
          <h2 className="animate-fade-up" style={{ fontSize: '42px', fontWeight: '900', color: '#1a1a1a', letterSpacing: '-1px' }}>Our Net Zero Services</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'start' }}>
          {services.map((item, i) => (
            <div 
              key={i} 
              className="animate-stagger" 
              style={{ 
                '--index': i, 
                position: 'relative',
                backgroundColor: '#fff', 
                padding: '40px', 
                borderRadius: '24px', 
                boxShadow: '0 15px 35px rgba(0,0,0,0.04)', 
                border: '1px solid rgba(9, 115, 85, 0.08)',
                borderBottom: '4px solid #097355',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'default',
                marginTop: window.innerWidth > 768 && i % 2 !== 0 ? '40px' : '0px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 30px 60px rgba(9, 115, 85, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(9, 115, 85, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.04)';
                e.currentTarget.style.borderColor = 'rgba(9, 115, 85, 0.08)';
              }}
            >
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h4 style={{ fontSize: '22px', fontWeight: '800', color: '#1a1a1a', marginBottom: '15px', lineHeight: '1.3' }}>{item.title}</h4>
                <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.7', margin: 0 }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  const steps = [
    { num: '1', title: 'Consultation', desc: 'Understand your business objectives, sustainability goals, and energy challenges.' },
    { num: '2', title: 'Assessment', desc: 'Evaluate current energy usage, infrastructure, and carbon reduction opportunities.' },
    { num: '3', title: 'Strategy Development', desc: 'Create a tailored Net Zero roadmap aligned with your operational requirements.' },
    { num: '4', title: 'Solution Implementation', desc: 'Deploy the technologies and improvements required to achieve measurable results.' },
    { num: '5', title: 'Ongoing Optimization', desc: 'Monitor performance and continuously improve energy efficiency and sustainability outcomes.' }
  ];

  return (
    <section style={{ padding: '100px 0', backgroundColor: '#fff' }}>
      <div className="section-container" style={{ display: 'flex', gap: '50px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div className="animate-fade-right" style={{ flex: 1, minWidth: '320px' }}>
          <img src="/business_professionals_shaking_hands.png" alt="Our Approach" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }} />
        </div>
        <div className="animate-fade-left" style={{ flex: 1, minWidth: '320px' }}>
          <h5 className="be-sub-title" style={{ color: '#097355', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px' }}>OUR PROCESS</h5>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#1a1a1a', marginBottom: '30px' }}>Our Approach to Net Zero</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {steps.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '20px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#ee7b1c', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '18px', flexShrink: 0 }}>
                  {s.num}
                </div>
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '5px' }}>{s.title}</h4>
                  <p style={{ color: '#666', fontSize: '15px' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CarbonReportingSection() {
  return (
    <section style={{ backgroundColor: '#f9fafb', padding: '100px 0' }}>
      <div className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h5 className="sub-title animate-fade-up" style={{ color: '#ee7b1c', fontWeight: 'bold', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '15px' }}>COMPLIANCE</h5>
          <h2 className="animate-fade-up" style={{ fontSize: '42px', fontWeight: '900', color: '#1a1a1a', letterSpacing: '-1px' }}>Carbon Reporting & Reduction Plan</h2>
          <p className="animate-fade-up" style={{ fontSize: '18px', color: '#555', maxWidth: '900px', margin: '20px auto 0', lineHeight: '1.6' }}>
            We’re pleased to share that all our clients will now have their <strong>PPN 006 compliance delivered in partnership with Sustain 360</strong>, part of the Enistic Group. Sustain 360 has been supporting companies with sustainability compliance since 2002. With over 4,000 reports produced and a track record of never failing compliance, they bring unrivalled expertise and assurance to the process. They also guarantee 100% compliance, giving you complete confidence that your obligations are fully met.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          <div className="animate-fade-up" style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 15px 35px rgba(0,0,0,0.04)', borderTop: '4px solid #097355' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#1a1a1a', marginBottom: '20px' }}>What is PPN 006?</h3>
            <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.7', marginBottom: '15px' }}>
              PPN 006 (formerly known as PPN 06/21) is a UK Government Procurement Policy Note that requires suppliers bidding for central government contracts worth over £5 million per year to publish and maintain a Carbon Reduction Plan (CRP). 
            </p>
            <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.7', marginBottom: '15px' }}>
              The CRP must include a commitment to reach Net Zero by 2050, report the organisation’s Scope 1, 2 and selected Scope 3 emissions, and outline current measures to reduce carbon. It must also be updated annually and made publicly available. 
            </p>
            <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.7', margin: 0 }}>
              From 2026, the policy is expected to strengthen, with suppliers needing to demonstrate tangible progress towards emission reductions rather than simply having a plan in place.
            </p>
          </div>

          <div className="animate-fade-up" style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 15px 35px rgba(0,0,0,0.04)', borderTop: '4px solid #ee7b1c' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#1a1a1a', marginBottom: '20px' }}>Who needs to comply with PPN 006?</h3>
            <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
              All companies bidding for a UK Government contract over £5 million or an NHS contract of any value, must have a Carbon Reduction Plan compliant with PPN 006.
            </p>
            <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#1a1a1a', marginBottom: '20px' }}>What’s changing in 2026?</h3>
            <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.7', marginBottom: '15px' }}>
              From 2026 onwards, the Government is strengthening PPN 006, meaning:
            </p>
            <ul style={{ color: '#555', fontSize: '16px', lineHeight: '1.7', paddingLeft: '20px', margin: 0 }}>
              <li style={{ marginBottom: '10px' }}>Suppliers will need to demonstrate progress, not just publish a CRP.</li>
              <li style={{ marginBottom: '10px' }}>Evidence of year-on-year carbon reductions will likely be required.</li>
              <li style={{ marginBottom: '10px' }}>Public sector buyers may start to score suppliers on emission reductions, not just policy compliance.</li>
              <li>If you are bidding for an NHS contract, you will need to include all 15 categories of Scope 3.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const industries = [
    { title: 'Manufacturing', desc: 'Reduce emissions while improving operational efficiency.', icon: 'fa-industry' },
    { title: 'Commercial Property', desc: 'Enhance sustainability performance across office, retail, and mixed-use developments.', icon: 'fa-building' },
    { title: 'Healthcare', desc: 'Support reliable, efficient, and low-carbon energy infrastructure.', icon: 'fa-hospital' },
    { title: 'Education', desc: 'Help schools, colleges, and universities achieve sustainability objectives.', icon: 'fa-graduation-cap' },
    { title: 'Hospitality', desc: 'Reduce operating costs and environmental impact across hotels and leisure facilities.', icon: 'fa-hotel' },
    { title: 'Public Sector', desc: 'Support carbon reduction initiatives and environmental commitments.', icon: 'fa-landmark' }
  ];

  return (
    <section style={{ backgroundColor: '#fff', padding: '120px 0', borderTop: '1px solid #eaeaea' }}>
      <div className="section-container">
        <div style={{ display: 'flex', gap: '80px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          {/* Sticky Left Sidebar */}
          <div className="sticky-sidebar" style={{ flex: '1', minWidth: '320px', position: 'sticky', top: '120px' }}>
            <h5 className="animate-fade-up" style={{ color: '#097355', fontWeight: 'bold', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '15px' }}>SECTORS</h5>
            <h2 className="animate-fade-up" style={{ fontSize: '48px', fontWeight: '900', color: '#1a1a1a', letterSpacing: '-1px', lineHeight: '1.2', marginBottom: '30px' }}>Industries We Support</h2>
            <p className="animate-fade-up" style={{ fontSize: '18px', color: '#555', lineHeight: '1.6', marginBottom: '40px', maxWidth: '400px' }}>
              We partner with organizations across multiple sectors to implement tailored sustainability strategies that deliver measurable environmental and financial results.
            </p>
            <div className="animate-fade-up" style={{ width: '100%', height: '220px', borderRadius: '24px', background: 'linear-gradient(135deg, #097355 0%, #065a42 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 40px rgba(9, 115, 85, 0.2)' }}>
              <i className="fa-solid fa-leaf" style={{ fontSize: '150px', color: '#fff', opacity: '0.05', position: 'absolute', right: '-20px', bottom: '-20px', transform: 'rotate(-15deg)' }}></i>
              <div style={{ color: '#fff', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontSize: '48px', fontWeight: '900', marginBottom: '5px' }}>100%</h3>
                <p style={{ fontSize: '16px', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>Committed to Net Zero</p>
              </div>
            </div>
          </div>

          {/* Scrolling Right Content */}
          <div style={{ flex: '1.5', minWidth: '320px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {industries.map((item, i) => (
              <div 
                key={i} 
                className="industry-row-card animate-stagger"
                style={{ 
                  '--index': i,
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '30px', 
                  backgroundColor: '#f9fafb', 
                  padding: '30px 40px', 
                  borderRadius: '24px', 
                  border: '1px solid #eaeaea',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#097355';
                  e.currentTarget.style.borderColor = '#097355';
                  e.currentTarget.style.transform = 'translateX(15px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(9, 115, 85, 0.2)';
                  e.currentTarget.querySelector('.icon-box').style.backgroundColor = 'rgba(255,255,255,0.2)';
                  e.currentTarget.querySelector('.icon-box').style.color = '#fff';
                  e.currentTarget.querySelector('.text-content h4').style.color = '#fff';
                  e.currentTarget.querySelector('.text-content p').style.color = 'rgba(255,255,255,0.9)';
                  e.currentTarget.querySelector('.arrow-icon').style.opacity = '1';
                  e.currentTarget.querySelector('.arrow-icon').style.transform = 'translateX(0)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f9fafb';
                  e.currentTarget.style.borderColor = '#eaeaea';
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.querySelector('.icon-box').style.backgroundColor = '#fff';
                  e.currentTarget.querySelector('.icon-box').style.color = '#097355';
                  e.currentTarget.querySelector('.text-content h4').style.color = '#1a1a1a';
                  e.currentTarget.querySelector('.text-content p').style.color = '#555';
                  e.currentTarget.querySelector('.arrow-icon').style.opacity = '0';
                  e.currentTarget.querySelector('.arrow-icon').style.transform = 'translateX(-20px)';
                }}
              >
                <div className="icon-box" style={{ 
                  width: '70px', height: '70px', borderRadius: '18px', backgroundColor: '#fff', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  fontSize: '28px', color: '#097355', flexShrink: 0,
                  boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease'
                }}>
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                
                <div className="text-content" style={{ flex: 1, transition: 'all 0.3s ease' }}>
                  <h4 style={{ fontSize: '22px', fontWeight: '800', color: '#1a1a1a', marginBottom: '8px', transition: 'color 0.3s ease' }}>{item.title}</h4>
                  <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.6', margin: 0, transition: 'color 0.3s ease' }}>{item.desc}</p>
                </div>
                
                <div className="arrow-icon" style={{ opacity: 0, transform: 'translateX(-20px)', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', color: '#fff', fontSize: '24px', marginLeft: '10px' }}>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 992px) {
          .sticky-sidebar {
            position: static !important;
            margin-bottom: 20px;
          }
          .industry-row-card {
            flex-direction: column;
            text-align: center;
            padding: 30px 20px !important;
            gap: 20px !important;
          }
          .industry-row-card:hover {
            transform: translateY(-5px) !important;
          }
        }
      `}</style>
    </section>
  );
}

function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);
  const faqs = [
    { q: 'What does Net Zero mean?', a: 'Net Zero means reducing carbon emissions as much as possible and balancing any remaining emissions to achieve an overall net impact of zero.' },
    { q: 'How can my business start its Net Zero journey?', a: 'The first step is understanding your energy usage and identifying opportunities to reduce emissions through efficiency improvements and low-carbon technologies.' },
    { q: 'Which technologies help achieve Net Zero?', a: 'Common solutions include solar panels, battery storage, heat pumps, CHP systems, microgrids, and energy management technologies.' },
    { q: 'Is Net Zero only for large businesses?', a: 'No. Organizations of all sizes can benefit from sustainability initiatives and carbon reduction strategies.' },
    { q: 'Can Net Zero help reduce costs?', a: 'Yes. Many Net Zero initiatives improve energy efficiency, which can lead to lower operating costs and long-term savings.' }
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
        <h2 style={{ fontSize: '40px', fontWeight: '800', marginBottom: '20px' }}>Start Your Net Zero Journey Today</h2>
        <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.6' }}>
          Partner with GGS Utilities to reduce carbon emissions, improve energy performance, and create a more sustainable future for your business.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <a href="tel:+4403331380001" className="ggs-btn" style={{ backgroundColor: 'transparent', color: '#fff', border: '2px solid #fff', padding: '14px 36px', fontSize: '16px' }}>
            <i className="fa-solid fa-phone" style={{ marginRight: '8px' }}></i> Speak to a Sustainability Specialist
          </a>
        </div>
      </div>
    </section>
  );
}

export default function NetZeroSolutions() {
  useSEO("Net Zero Solutions | GGS Utilities", "Reduce carbon emissions, improve energy efficiency, and build a more sustainable future with tailored Net Zero solutions from GGS Utilities.");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="net-zero-page">
      <PageBanner
        title="Accelerate Your Journey to Net Zero"
        description="Reduce carbon emissions, improve energy efficiency, and build a more sustainable future with tailored Net Zero solutions from GGS Utilities."
        image="/netzero_banner.png"
      />
      <IntroSection />
      <WhyNetZeroSection />
      <ServicesSection />
      <CarbonReportingSection />
      <IndustriesSection />
      <ApproachSection />
      <FAQSection />
      <CustomCTA />
    </div>
  );
}
