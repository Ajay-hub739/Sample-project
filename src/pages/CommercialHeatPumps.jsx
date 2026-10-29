import useSEO from '../hooks/useSEO';
import React, { useEffect, useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

function IntroSection() {
  return (
    <section className="be-transforming-section" style={{ backgroundColor: '#fafbfc', padding: '120px 0 80px 0' }}>
      <div className="section-container two-col" style={{ display: 'flex', gap: '50px', alignItems: 'center' }}>
        <div className="be-transform-text animate-fade-up" style={{ flex: 1, minWidth: '320px' }}>
          <h5 className="be-sub-title" style={{ color: '#097355', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '13px', fontWeight: 'bold' }}>Delivering Smarter Heating Solutions</h5>
          <h2 className="be-title-green" style={{ color: '#1a1a1a', fontSize: '36px', fontWeight: '800', marginBottom: '20px', lineHeight: '1.3' }}>Commercial Heat Pump Solutions</h2>
          <p style={{ fontSize: '16px', color: '#555', marginBottom: '15px' }}>
            Businesses across the UK are under increasing pressure to reduce energy costs, improve sustainability performance, and prepare for future carbon regulations.
          </p>
          <p style={{ fontSize: '16px', color: '#555', marginBottom: '15px' }}>
            Commercial heat pumps provide an efficient and reliable solution by delivering low-carbon heating while helping organizations reduce dependence on traditional fossil fuel systems.
          </p>
          <p style={{ fontSize: '16px', color: '#555', marginBottom: '30px', fontWeight: '600', color: '#097355' }}>
            At GGS Utilities, we work closely with commercial and industrial clients to design heat pump systems that align with operational requirements, sustainability objectives, and financial goals.
          </p>
          <Link to="/contact" className="ggs-btn" style={{ backgroundColor: '#ee7b1c', color: '#fff', border: 'none', padding: '15px 30px', fontSize: '16px', fontWeight: 'bold', borderRadius: '8px', display: 'inline-block' }}>
            Request a Free Consultation &rarr;
          </Link>
        </div>
        <div className="be-transform-image animate-fade-up" style={{ flex: 1, minWidth: '320px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="/heat_pump_engineer.png" alt="Commercial Heat Pump Solutions" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    { title: 'Lower Operating Costs', text: 'Modern heat pump systems can significantly improve heating efficiency, helping businesses reduce energy expenditure over the long term.', icon: 'fa-piggy-bank' },
    { title: 'Carbon Reduction', text: 'Support environmental targets and reduce carbon emissions through cleaner heating technology.', icon: 'fa-leaf' },
    { title: 'Future Energy Compliance', text: 'Prepare your business for changing regulations and increasing demand for low-carbon energy solutions.', icon: 'fa-shield-halved' },
    { title: 'Reliable Performance', text: 'Commercial heat pumps provide dependable heating solutions for a wide range of industries and applications.', icon: 'fa-gears' },
    { title: 'Long-Term Asset Value', text: 'Invest in future-ready infrastructure designed to support business growth and sustainability objectives.', icon: 'fa-chart-line' },
    { title: 'Flexible Integration', text: 'Heat pumps can work alongside existing energy technologies including solar PV, CHP systems, and battery storage.', icon: 'fa-network-wired' }
  ];

  return (
    <section className="be-benefits-section" style={{ padding: '100px 0', backgroundColor: '#097355', position: 'relative' }}>
      <div className="be-benefits-overlay" style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'url(/particle-waves.jpg)', backgroundSize: 'cover' }}></div>
      <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-header center animate-fade-up" style={{ marginBottom: '50px', textAlign: 'center' }}>
          <h5 className="sub-title" style={{ color: '#ee7b1c', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px' }}>WHY CHOOSE HEAT PUMPS</h5>
          <h2 style={{ color: '#fff', fontSize: '38px', fontWeight: '800' }}>Benefits for Your Business</h2>
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

function ProcessSection() {
  const steps = [
    { title: 'Step 1 – Consultation', text: 'We assess your business requirements and identify opportunities for improvement.' },
    { title: 'Step 2 – Site Assessment', text: 'Detailed technical surveys and feasibility analysis.' },
    { title: 'Step 3 – Solution Design', text: 'Development of a tailored heat pump strategy.' },
    { title: 'Step 4 – Installation & Commissioning', text: 'Professional project delivery from start to finish.' },
    { title: 'Step 5 – Ongoing Support', text: 'Maintenance, monitoring, and performance optimization.' }
  ];

  return (
    <section style={{ padding: '100px 0', backgroundColor: '#f8f9fa' }}>
      <div className="section-container" style={{ display: 'flex', gap: '50px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div className="animate-fade-right" style={{ flex: 1, minWidth: '320px' }}>
          <img src="/consultant_client_plans.png" alt="Our Delivery Process" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }} />
        </div>
        <div className="animate-fade-left" style={{ flex: 1, minWidth: '320px' }}>
          <h5 className="be-sub-title" style={{ color: '#097355', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px' }}>HOW IT WORKS</h5>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#1a1a1a', marginBottom: '30px', lineHeight: '1.2' }}>Our Delivery Process</h2>
          <div className="be-process-steps" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {steps.map((s, i) => (
              <div key={i} className="be-process-step" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div className="step-number" style={{ width: '40px', height: '40px', backgroundColor: '#ee7b1c', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0, marginTop: '2px' }}>
                  {i + 1}
                </div>
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '8px' }}>{s.title}</h4>
                  <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.6' }}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    { title: 'Feasibility Assessments', text: 'We evaluate building energy demand, heating requirements, existing infrastructure, carbon reduction opportunities, project viability, and ROI to recommend the best solution.', icon: 'fa-magnifying-glass-chart' },
    { title: 'System Design', text: 'Our engineering team develops tailored solutions based on facility size, occupancy patterns, heating loads, existing plant equipment, and future expansion plans.', icon: 'fa-pen-ruler' },
    { title: 'Installation', text: 'Complete project delivery including site surveys, system design, equipment procurement, installation, testing, and commissioning with minimal disruption.', icon: 'fa-hammer' },
    { title: 'Maintenance & Servicing', text: 'Planned preventative maintenance, performance monitoring, inspections, emergency response, efficiency optimization, and equipment upgrades.', icon: 'fa-wrench' }
  ];

  return (
    <section style={{ padding: '120px 0', backgroundColor: '#fff' }}>
      <div className="section-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        <div className="animate-fade-right" style={{ flex: '1', minWidth: '300px', position: 'sticky', top: '120px', alignSelf: 'flex-start' }}>
          <h5 style={{ color: '#ee7b1c', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px' }}>OUR SERVICES</h5>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#1a1a1a', marginBottom: '25px', lineHeight: '1.2' }}>Comprehensive<br/>End-to-End Support</h2>
          <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.7', marginBottom: '30px', maxWidth: '400px' }}>
            From initial assessment to long-term maintenance, our commercial heat pump services are designed to ensure maximum efficiency and continuous performance for your business infrastructure.
          </p>
          <div style={{ height: '4px', width: '60px', backgroundColor: '#097355', borderRadius: '2px' }}></div>
        </div>
        
        <div className="animate-fade-left" style={{ flex: '1.5', minWidth: '350px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
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

function IntegrationSection() {
  const approaches = [
    { title: 'Heat Pumps + Solar Energy', text: 'Generate renewable electricity onsite and use it to power heat pump systems, reducing both operational costs and carbon emissions.' },
    { title: 'Heat Pumps + CHP Systems', text: 'Combining heat pumps with Combined Heat and Power (CHP) systems can deliver greater operational flexibility and enhanced energy efficiency.' }
  ];

  return (
    <section className="be-approach-section-exact" style={{ padding: '100px 0', backgroundColor: '#fafbfc' }}>
      <div className="section-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
        <div className="animate-fade-right" style={{ flex: 1, minWidth: '320px' }}>
          <h5 className="be-sub-title" style={{ color: '#ee7b1c', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px' }}>INTEGRATED SOLUTIONS</h5>
          <h2 className="be-approach-exact-title" style={{ fontSize: '40px', fontWeight: '800', lineHeight: '1.2', color: '#097355', marginBottom: '20px' }}>Integrated Energy Solutions</h2>
          <p style={{ color: '#555', fontSize: '16px', marginBottom: '25px', lineHeight: '1.7' }}>
            Heat pumps perform even better when integrated into a wider energy strategy. Discover how combining technologies maximizes your benefits.
          </p>
        </div>
        <div className="animate-fade-left" style={{ flex: 1, minWidth: '320px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {approaches.map((item, i) => (
            <div key={i} className="be-approach-card" style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ backgroundColor: '#097355', color: '#fff', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>
                <i className="fa-solid fa-network-wired"></i>
              </div>
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '8px' }}>{item.title}</h4>
                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const industries = [
    { title: 'Manufacturing', text: 'Reduce heating costs and improve operational efficiency across production facilities.', icon: 'fa-industry' },
    { title: 'Healthcare', text: 'Deliver reliable heating and hot water solutions for hospitals, clinics, and care facilities.', icon: 'fa-hospital' },
    { title: 'Hospitality', text: 'Support hotels, leisure centres, and accommodation providers with efficient heating systems.', icon: 'fa-hotel' },
    { title: 'Education', text: 'Improve sustainability performance across schools, colleges, and university campuses.', icon: 'fa-graduation-cap' },
    { title: 'Commercial Property', text: 'Provide efficient heating solutions for offices, retail spaces, and mixed-use developments.', icon: 'fa-building' },
    { title: 'Industrial Facilities', text: 'Support process heating requirements while reducing energy consumption and emissions.', icon: 'fa-warehouse' }
  ];

  return (
    <section style={{ padding: '100px 0', backgroundColor: '#fff' }}>
      <div className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h5 className="sub-title animate-fade-up" style={{ color: '#ee7b1c', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px' }}>SECTORS</h5>
          <h2 className="animate-fade-up" style={{ fontSize: '38px', fontWeight: '800', color: '#1a1a1a' }}>Industries We Support</h2>
          <p style={{ color: '#666', fontSize: '17px', maxWidth: '600px', margin: '15px auto 0' }}>Heat pumps provide dependable heating solutions for a wide range of industries and applications.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {industries.map((ind, i) => (
            <div key={i} className="animate-stagger" style={{ '--index': i, backgroundColor: '#fff', padding: '30px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #eaeaea', textAlign: 'center' }}>
              <i className={`fa-solid ${ind.icon}`} style={{ fontSize: '36px', color: '#097355', marginBottom: '20px' }}></i>
              <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '12px' }}>{ind.title}</h4>
              <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6' }}>{ind.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinancingSection() {
  const options = [
    'Asset finance',
    'Equipment leasing',
    'Energy performance contracts',
    'Energy-as-a-Service models',
    'Flexible commercial agreements'
  ];

  return (
    <section style={{ padding: '100px 0', backgroundColor: '#f4f9f7' }}>
      <div className="section-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
        <div className="animate-fade-right" style={{ flex: 1, minWidth: '300px' }}>
          <h5 style={{ color: '#097355', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px', fontSize: '13px' }}>FUNDING OPTIONS</h5>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#1a1a1a', marginBottom: '25px', lineHeight: '1.2' }}>Flexible Funding & Commercial Options</h2>
          <p style={{ color: '#555', fontSize: '16px', marginBottom: '20px', lineHeight: '1.7' }}>
            We understand that capital expenditure can be a challenge for many businesses. GGS Utilities can help explore flexible funding options, including:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0' }}>
            {options.map((opt, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: '#333', marginBottom: '12px', fontWeight: '600' }}>
                <i className="fa-solid fa-circle-check" style={{ color: '#097355' }}></i> {opt}
              </li>
            ))}
          </ul>
          <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.7', fontStyle: 'italic', borderLeft: '4px solid #ee7b1c', paddingLeft: '15px' }}>
            "Our objective is to help organizations access modern heating technology while effectively managing investment costs."
          </p>
        </div>
        <div className="animate-fade-left" style={{ flex: 1, minWidth: '300px' }}>
          <img src="/consultant_meeting.png" alt="Financing Options" style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
        </div>
      </div>
    </section>
  );
}

function HeatPumpFAQ() {
  const faqs = [
    { q: 'Is a commercial heat pump suitable for my site?', a: 'Suitability depends on your building type, heating demand, and operational requirements. Our team conducts detailed feasibility assessments to determine the best solution.' },
    { q: 'Can heat pumps work alongside existing heating systems?', a: 'Yes. Many businesses adopt hybrid solutions that integrate heat pumps with existing systems.' },
    { q: 'What industries benefit most from heat pumps?', a: 'Manufacturing, healthcare, hospitality, education, commercial property, and industrial sectors can all benefit from heat pump technology.' },
    { q: 'Do heat pumps require maintenance?', a: 'Yes. Regular maintenance ensures optimal efficiency, reliability, and system longevity.' },
    { q: 'Can heat pumps help reduce carbon emissions?', a: 'Yes. Heat pumps are one of the most effective technologies available for reducing heating-related carbon emissions.' }
  ];

  const [openIdx, setOpenIdx] = useState(0);

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
        <h2 style={{ fontSize: '40px', fontWeight: '800', marginBottom: '20px' }}>Ready to Explore Heat Pumps for Your Business?</h2>
        <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.6' }}>
          Speak with our energy specialists today and discover how Heat Pumps can help reduce costs, improve efficiency, and support your sustainability goals.
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

export default function CommercialHeatPumps() {
  useSEO("Commercial Heat Pump Solutions | GGS Utilities", "Reduce energy costs and lower carbon emissions with tailored commercial heat pump solutions. Discover reliable, low-carbon heating for your business.");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="heat-pumps-page">
      <PageBanner 
        title="Commercial Heat Pump Solutions" 
        description="Reduce energy costs, lower carbon emissions, and future-proof your heating infrastructure with tailored commercial heat pump solutions from GGS Utilities." 
        image="/commercial_heat_pumps_banner.png" 
      />
      <IntroSection />
      <IntegrationSection />
      <BenefitsSection />
      <ProcessSection />
      <IndustriesSection />
      <ServicesSection />
      <FinancingSection />
      <HeatPumpFAQ />
      <CustomCTA />
    </div>
  );
}
