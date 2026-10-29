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
          <h5 className="be-sub-title" style={{ color: '#097355', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '13px', fontWeight: 'bold' }}>Delivering Sustainable Energy for Business</h5>
          <h2 className="be-title-green" style={{ color: '#1a1a1a', fontSize: '36px', fontWeight: '800', marginBottom: '20px', lineHeight: '1.3' }}>Commercial Solar Panel Solutions</h2>
          <p style={{ fontSize: '16px', color: '#555', marginBottom: '15px' }}>
            Energy costs remain one of the largest operational expenses for many organizations. At the same time, businesses are facing increasing pressure to reduce carbon emissions and improve environmental performance.
          </p>
          <p style={{ fontSize: '16px', color: '#555', marginBottom: '15px' }}>
            Commercial solar installations provide a practical and proven solution that allows organizations to generate their own renewable electricity while reducing dependence on the grid.
          </p>
          <p style={{ fontSize: '16px', marginBottom: '30px', fontWeight: '600', color: '#097355' }}>
            At GGS Utilities, we work closely with commercial and industrial clients to develop solar strategies that support operational efficiency, long-term cost savings, and sustainability objectives.
          </p>
          <Link to="/contact-us" className="ggs-btn" style={{ backgroundColor: '#ee7b1c', color: '#fff', border: 'none', padding: '15px 30px', fontSize: '16px', fontWeight: 'bold', borderRadius: '8px', display: 'inline-block' }}>
            Request a Free Solar Assessment &rarr;
          </Link>
        </div>
        <div className="be-transform-image animate-fade-up" style={{ flex: 1, minWidth: '320px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="/sun-setting-electricity-pylons.jpg" alt="Commercial Solar Panel Solutions" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
        </div>
      </div>
    </section>
  );
}

function WhyInvestSection() {
  const reasons = [
    { title: 'Reduce Electricity Costs', text: 'Generate your own electricity and reduce reliance on rising grid energy prices.', icon: 'fa-money-bill-trend-up' },
    { title: 'Improve Energy Independence', text: 'Protect your business from market volatility by producing power onsite.', icon: 'fa-shield-halved' },
    { title: 'Lower Carbon Emissions', text: 'Demonstrate your commitment to sustainability while supporting environmental targets.', icon: 'fa-leaf' },
    { title: 'Long-Term Financial Benefits', text: 'Solar systems can provide decades of clean electricity generation with minimal operating costs.', icon: 'fa-chart-line' },
    { title: 'Increase Property Value', text: 'Renewable energy infrastructure can enhance the long-term value of commercial assets.', icon: 'fa-building' },
    { title: 'Future-Proof Your Business', text: 'Prepare for changing environmental regulations and increasing sustainability requirements.', icon: 'fa-forward-step' }
  ];

  return (
    <section className="be-benefits-section" style={{ padding: '100px 0', backgroundColor: '#097355', position: 'relative' }}>
      <div className="be-benefits-overlay" style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'url(/particle-waves.jpg)', backgroundSize: 'cover' }}></div>
      <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-header center animate-fade-up" style={{ marginBottom: '50px', textAlign: 'center' }}>
          <h5 className="sub-title" style={{ color: '#ee7b1c', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px' }}>THE BUSINESS CASE</h5>
          <h2 style={{ color: '#fff', fontSize: '38px', fontWeight: '800' }}>Why Invest in Commercial Solar?</h2>
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

function BenefitsOfSolarSection() {
  const benefits = [
    { title: 'Lower Operating Expenses', text: 'Reduce ongoing electricity costs and improve budget certainty.', icon: 'fa-wallet' },
    { title: 'Renewable Energy Generation', text: 'Generate clean electricity directly from sunlight.', icon: 'fa-sun' },
    { title: 'Improved ESG Performance', text: 'Support environmental, social, and governance objectives.', icon: 'fa-globe' },
    { title: 'Reduced Carbon Footprint', text: 'Significantly lower your organization\'s carbon emissions.', icon: 'fa-shoe-prints' },
    { title: 'Energy Security', text: 'Reduce dependence on external electricity suppliers.', icon: 'fa-lock' },
    { title: 'Scalable Solutions', text: 'Suitable for small commercial properties through to large industrial facilities.', icon: 'fa-maximize' }
  ];

  return (
    <section style={{ padding: '100px 0', backgroundColor: '#f9fafb' }}>
      <div className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h5 className="sub-title animate-fade-up" style={{ color: '#097355', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px' }}>ADVANTAGES</h5>
          <h2 className="animate-fade-up" style={{ fontSize: '38px', fontWeight: '800', color: '#1a1a1a' }}>Benefits of Commercial Solar Energy</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {benefits.map((b, i) => (
            <div key={i} className="animate-stagger" style={{ '--index': i, backgroundColor: '#fff', padding: '30px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #eaeaea', textAlign: 'center' }}>
              <div style={{ backgroundColor: '#f4f9f7', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#097355', fontSize: '24px', margin: '0 auto 20px' }}>
                <i className={`fa-solid ${b.icon}`}></i>
              </div>
              <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '12px' }}>{b.title}</h4>
              <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6' }}>{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    { title: 'Solar Feasibility Assessments', text: 'Every successful project begins with understanding your energy profile. Our assessment process includes energy consumption analysis, site suitability evaluation, roof condition assessments, and ROI forecasting to recommend the most effective solution.', icon: 'fa-magnifying-glass-chart' },
    { title: 'Solar System Design', text: 'Our engineering team develops customized solar solutions based on your facility\'s requirements. We consider building characteristics, energy demand patterns, and future expansion plans to maximize system performance and long-term value.', icon: 'fa-pen-ruler' },
    { title: 'Commercial Solar Installation', text: 'Our experienced project teams manage every aspect of installation including site preparation, equipment procurement, system installation, and commissioning. We ensure safe, efficient delivery with minimal disruption.', icon: 'fa-hammer' },
    { title: 'Monitoring & Performance Management', text: 'Monitoring is essential for maximizing long-term performance. Our support services include real-time system monitoring, performance reporting, energy production analysis, and fault detection.', icon: 'fa-laptop-code' },
    { title: 'Solar Maintenance Services', text: 'Protect your solar investment with proactive maintenance. Services include preventative maintenance, system inspections, performance checks, cleaning recommendations, and component replacement support.', icon: 'fa-wrench' }
  ];

  return (
    <section style={{ padding: '120px 0', backgroundColor: '#fff' }}>
      <div className="section-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        <div className="animate-fade-right" style={{ flex: '1', minWidth: '300px', position: 'sticky', top: '120px', alignSelf: 'flex-start' }}>
          <h5 style={{ color: '#ee7b1c', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px' }}>OUR SERVICES</h5>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#1a1a1a', marginBottom: '25px', lineHeight: '1.2' }}>Comprehensive<br/>End-to-End Support</h2>
          <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.7', marginBottom: '30px', maxWidth: '400px' }}>
            From initial assessment to long-term maintenance, our commercial solar services are designed to ensure maximum efficiency and continuous performance for your business infrastructure.
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

function SolutionsWeDeliverSection() {
  const solutions = [
    { title: 'Rooftop Solar Installations', desc: 'Transform unused roof space into a productive energy asset. Suitable for Offices, Warehouses, Manufacturing facilities, Retail buildings, and Educational facilities.', icon: 'fa-house-chimney' },
    { title: 'Ground-Mounted Solar Systems', desc: 'Ideal for businesses with available land seeking larger-scale renewable energy generation. Suitable for Industrial facilities, Agricultural operations, and Logistics centres.', icon: 'fa-solar-panel' },
    { title: 'Solar Carports', desc: 'Generate renewable energy while providing vehicle protection and enhancing site sustainability. Benefits include additional generation capacity and EV charging integration.', icon: 'fa-car' }
  ];

  return (
    <section style={{ padding: '100px 0', backgroundColor: '#097355', color: '#fff' }}>
      <div className="section-container" style={{ textAlign: 'center' }}>
        <h5 className="sub-title animate-fade-up" style={{ color: '#ee7b1c', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px' }}>SOLUTIONS</h5>
        <h2 className="animate-fade-up" style={{ fontSize: '38px', fontWeight: '800', marginBottom: '60px' }}>Solar Solutions We Deliver</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', textAlign: 'left' }}>
          {solutions.map((s, i) => (
            <div 
              key={i} 
              className="animate-stagger" 
              style={{ 
                '--index': i, 
                backgroundColor: 'rgba(255,255,255,0.05)', 
                padding: '35px', 
                borderRadius: '15px', 
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <div style={{ color: '#ee7b1c', fontSize: '36px', marginBottom: '20px' }}><i className={`fa-solid ${s.icon}`}></i></div>
              <h4 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '15px' }}>{s.title}</h4>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: '1.6' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IntegrationSection() {
  const approaches = [
    { title: 'Solar + Battery Storage', text: 'Store excess daytime generation for use during evenings or peak demand periods. Benefits include greater energy flexibility, reduced purchasing costs, and improved resilience.', icon: 'fa-battery-full' },
    { title: 'Solar + Electric Vehicle Charging', text: 'Support fleet electrification and workplace charging infrastructure using renewable energy generated onsite. Lowers charging costs and prepares you for the future.', icon: 'fa-charging-station' },
    { title: 'Solar + CHP Systems', text: 'Combine renewable generation with onsite power production to create a balanced energy strategy. Increases energy security and operational flexibility.', icon: 'fa-industry' }
  ];

  return (
    <section className="be-approach-section-exact" style={{ padding: '100px 0', backgroundColor: '#fafbfc' }}>
      <div className="section-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
        <div className="animate-fade-right" style={{ flex: 1, minWidth: '320px' }}>
          <h5 className="be-sub-title" style={{ color: '#ee7b1c', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px' }}>INTEGRATED TECHNOLOGIES</h5>
          <h2 className="be-approach-exact-title" style={{ fontSize: '40px', fontWeight: '800', lineHeight: '1.2', color: '#097355', marginBottom: '20px' }}>Solar + Smart Energy Technologies</h2>
          <p style={{ color: '#555', fontSize: '16px', marginBottom: '25px', lineHeight: '1.7' }}>
            Solar energy becomes even more powerful when integrated into a wider energy strategy. Maximize efficiency, independence, and savings.
          </p>
        </div>
        <div className="animate-fade-left" style={{ flex: 1, minWidth: '320px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {approaches.map((item, i) => (
            <div key={i} className="be-approach-card" style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ backgroundColor: '#097355', color: '#fff', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>
                <i className={`fa-solid ${item.icon}`}></i>
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
    { title: 'Manufacturing', text: 'Reduce energy costs and improve operational efficiency.', icon: 'fa-industry' },
    { title: 'Warehousing & Logistics', text: 'Maximize large roof spaces for onsite electricity generation.', icon: 'fa-warehouse' },
    { title: 'Retail & Commercial Property', text: 'Improve sustainability while lowering operational costs.', icon: 'fa-shop' },
    { title: 'Education', text: 'Support carbon reduction goals across schools, colleges, and universities.', icon: 'fa-graduation-cap' },
    { title: 'Agriculture', text: 'Utilize available land and buildings for renewable energy generation.', icon: 'fa-tractor' },
    { title: 'Healthcare', text: 'Support hospitals and healthcare facilities with reliable, sustainable energy solutions.', icon: 'fa-hospital' }
  ];

  return (
    <section style={{ padding: '100px 0', backgroundColor: '#fff' }}>
      <div className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h5 className="sub-title animate-fade-up" style={{ color: '#ee7b1c', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px' }}>SECTORS</h5>
          <h2 className="animate-fade-up" style={{ fontSize: '38px', fontWeight: '800', color: '#1a1a1a' }}>Industries We Support</h2>
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

function ProcessSection() {
  const steps = [
    { title: 'Step 1 – Consultation', text: 'Understand your energy requirements and business objectives.' },
    { title: 'Step 2 – Site Assessment', text: 'Evaluate technical suitability and project opportunities.' },
    { title: 'Step 3 – System Design', text: 'Develop a customized solar solution.' },
    { title: 'Step 4 – Installation', text: 'Professional project delivery and commissioning.' },
    { title: 'Step 5 – Ongoing Support', text: 'Monitoring, maintenance, and performance optimization.' }
  ];

  return (
    <section style={{ padding: '100px 0', backgroundColor: '#f8f9fa' }}>
      <div className="section-container" style={{ display: 'flex', gap: '50px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div className="animate-fade-right" style={{ flex: 1, minWidth: '320px' }}>
          <img src="/engineer_site_survey.png" alt="Our Delivery Process" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }} />
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

function FinancingSection() {
  const options = [
    'Asset finance',
    'Solar leasing',
    'Power Purchase Agreements (PPAs)',
    'Energy-as-a-Service models',
    'Commercial finance solutions'
  ];

  return (
    <section style={{ padding: '100px 0', backgroundColor: '#f4f9f7' }}>
      <div className="section-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
        <div className="animate-fade-right" style={{ flex: 1, minWidth: '300px' }}>
          <h5 style={{ color: '#097355', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px', fontSize: '13px' }}>FUNDING OPTIONS</h5>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#1a1a1a', marginBottom: '25px', lineHeight: '1.2' }}>Flexible Solar Funding Options</h2>
          <p style={{ color: '#555', fontSize: '16px', marginBottom: '20px', lineHeight: '1.7' }}>
            We understand that capital investment can be a significant consideration. GGS Utilities can help businesses explore flexible funding solutions, including:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0' }}>
            {options.map((opt, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: '#333', marginBottom: '12px', fontWeight: '600' }}>
                <i className="fa-solid fa-circle-check" style={{ color: '#097355' }}></i> {opt}
              </li>
            ))}
          </ul>
          <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.7', fontStyle: 'italic', borderLeft: '4px solid #ee7b1c', paddingLeft: '15px' }}>
            "These options can help organizations access solar technology while managing capital expenditure effectively."
          </p>
        </div>
        <div className="animate-fade-left" style={{ flex: 1, minWidth: '300px' }}>
          <img src="/business_professionals_shaking_hands.png" alt="Financing Options" style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  const reasons = [
    { title: 'Commercial Energy Expertise', text: 'Specialists in delivering business-focused energy solutions.', icon: 'fa-user-tie' },
    { title: 'Tailored Solar Strategies', text: 'Every solution is designed around your specific operational needs.', icon: 'fa-compass-drafting' },
    { title: 'End-to-End Management', text: 'From feasibility studies through installation and ongoing support.', icon: 'fa-clipboard-check' },
    { title: 'Sustainability Driven', text: 'Helping organizations achieve carbon reduction and net-zero objectives.', icon: 'fa-leaf' },
    { title: 'Long-Term Partnership', text: 'Providing continued support throughout the life of your solar system.', icon: 'fa-handshake' }
  ];

  return (
    <section style={{ padding: '100px 0', backgroundColor: '#fff' }}>
      <div className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h5 className="sub-title animate-fade-up" style={{ color: '#097355', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px' }}>WHY US</h5>
          <h2 className="animate-fade-up" style={{ fontSize: '38px', fontWeight: '800', color: '#1a1a1a' }}>Why Choose GGS Utilities?</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
          {reasons.map((r, i) => (
            <div key={i} className="animate-stagger" style={{ '--index': i, textAlign: 'center', padding: '30px', backgroundColor: '#fafbfc', borderRadius: '12px', border: '1px solid #eee' }}>
              <i className={`fa-solid ${r.icon}`} style={{ fontSize: '36px', color: '#ee7b1c', marginBottom: '20px' }}></i>
              <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '10px' }}>{r.title}</h4>
              <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolarFAQ() {
  const faqs = [
    { q: 'Is my business suitable for solar panels?', a: 'Most commercial properties can benefit from solar installations, subject to site suitability and energy usage patterns.' },
    { q: 'How much can my business save with solar?', a: 'Savings vary depending on energy consumption, system size, and electricity costs. Our assessment process provides detailed forecasts.' },
    { q: 'How long do commercial solar panels last?', a: 'Most commercial solar systems are designed to operate effectively for 25 years or more with proper maintenance.' },
    { q: 'Can solar panels work alongside battery storage?', a: 'Yes. Battery storage can increase energy independence and improve the value of solar generation.' },
    { q: 'Do solar systems require maintenance?', a: 'Yes. Regular monitoring and maintenance help maximize system performance and reliability.' },
    { q: 'Can solar help achieve sustainability targets?', a: 'Absolutely. Solar energy is one of the most effective technologies available for reducing operational carbon emissions.' }
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="faq-section" style={{ padding: '100px 0', backgroundColor: '#fafbfc' }}>
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
        <h2 style={{ fontSize: '40px', fontWeight: '800', marginBottom: '20px' }}>Start Your Solar Journey Today</h2>
        <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.6' }}>
          Discover how commercial solar solutions from GGS Utilities can reduce energy costs, strengthen sustainability performance, and deliver long-term value for your business.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <Link to="/contact-us" className="ggs-btn" style={{ backgroundColor: 'transparent', color: '#fff', border: '2px solid #fff', padding: '14px 36px', fontSize: '16px' }}>
            <i className="fa-solid fa-phone" style={{ marginRight: '8px' }}></i> Speak to a Solar Specialist
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function CommercialSolarPanels() {
  useSEO("Commercial Solar Panel Solutions | GGS Utilities", "Reduce electricity costs and improve energy independence with commercial solar panel solutions. Discover tailored solar strategies for your business.");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="solar-panels-page">
      <PageBanner 
        title="Power Your Business with Commercial Solar Energy" 
        description="Reduce electricity costs, improve energy independence, and accelerate your sustainability goals with commercial solar panel solutions from GGS Utilities." 
        image="/commercial_solar_banner.png" 
      />
      <IntroSection />
      <WhyInvestSection />
      <BenefitsOfSolarSection />
      <ServicesSection />
      <SolutionsWeDeliverSection />
      <IntegrationSection />
      <IndustriesSection />
      <ProcessSection />
      <FinancingSection />
      <WhyChooseUsSection />
      <SolarFAQ />
      <CustomCTA />
    </div>
  );
}
