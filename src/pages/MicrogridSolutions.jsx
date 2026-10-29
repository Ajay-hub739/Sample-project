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
          <h5 className="be-sub-title" style={{ color: '#097355', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '13px', fontWeight: 'bold' }}>Delivering Energy Resilience for Modern Businesses</h5>
          <h2 className="be-title-green" style={{ color: '#1a1a1a', fontSize: '36px', fontWeight: '800', marginBottom: '20px', lineHeight: '1.3' }}>Smarter, More Resilient Energy with Microgrids</h2>
          <p style={{ fontSize: '16px', color: '#555', marginBottom: '15px' }}>
            Businesses today face increasing pressure from rising energy costs, grid instability, and sustainability requirements. Take control of your energy future with intelligent microgrid solutions designed to improve resilience, reduce energy costs, and support sustainability objectives.
          </p>
          <p style={{ fontSize: '16px', color: '#555', marginBottom: '15px' }}>
            Microgrids provide a practical solution by integrating multiple energy technologies into a single system that can operate alongside the grid or independently when required.
          </p>
          <p style={{ fontSize: '16px', marginBottom: '30px', fontWeight: '600', color: '#097355' }}>
            By combining technologies such as solar PV, battery storage, CHP systems, heat pumps, EV charging infrastructure, and advanced energy controls, businesses can improve reliability, reduce operational costs, and strengthen energy security.
          </p>
          <Link to="/contact-us" className="ggs-btn" style={{ backgroundColor: '#ee7b1c', color: '#fff', border: 'none', padding: '15px 30px', fontSize: '16px', fontWeight: 'bold', borderRadius: '8px', display: 'inline-block' }}>
            Request a Free Consultation &rarr;
          </Link>
        </div>
        <div className="be-transform-image animate-fade-up" style={{ flex: 1, minWidth: '320px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="/microgrid_intro.png" alt="Microgrid Energy Solutions" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
        </div>
      </div>
    </section>
  );
}

function WhyInvestSection() {
  const reasons = [
    { title: 'Enhanced Energy Resilience', text: 'Maintain critical operations during grid outages and power disruptions through intelligent energy management and backup capabilities.', icon: 'fa-shield-halved' },
    { title: 'Lower Energy Costs', text: 'Optimize energy generation, storage, and consumption to reduce electricity expenditure and improve operational efficiency.', icon: 'fa-money-bill-trend-up' },
    { title: 'Reduced Carbon Emissions', text: 'Integrate renewable energy technologies to support sustainability targets and reduce environmental impact.', icon: 'fa-leaf' },
    { title: 'Greater Energy Independence', text: 'Generate, store, and manage energy onsite to reduce reliance on external energy suppliers.', icon: 'fa-house-chimney' },
    { title: 'Improved Operational Continuity', text: 'Protect essential business operations from power interruptions and grid instability.', icon: 'fa-industry' },
    { title: 'Future-Ready Infrastructure', text: 'Create a scalable energy platform capable of supporting future technologies and business growth.', icon: 'fa-forward-step' }
  ];

  return (
    <section className="be-benefits-section" style={{ padding: '100px 0', backgroundColor: '#097355', position: 'relative' }}>
      <div className="be-benefits-overlay" style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'url(/particle-waves.jpg)', backgroundSize: 'cover' }}></div>
      <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-header center animate-fade-up" style={{ marginBottom: '50px', textAlign: 'center' }}>
          <h5 className="sub-title" style={{ color: '#ee7b1c', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px' }}>THE BUSINESS CASE</h5>
          <h2 style={{ color: '#fff', fontSize: '38px', fontWeight: '800' }}>Why Businesses Invest in Microgrids</h2>
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
    { title: 'Energy Assessment & Feasibility Studies', text: 'Our specialists evaluate current consumption, site infrastructure, critical power needs, and financial targets to develop a tailored microgrid strategy.', icon: 'fa-magnifying-glass-chart' },
    { title: 'Microgrid Design & Engineering', text: 'We design integrated systems combining Solar PV, Battery Storage, CHP, Heat Pumps, and Smart Controls engineered to maximize performance.', icon: 'fa-pen-ruler' },
    { title: 'Installation & Project Delivery', text: 'Our experienced teams manage complete implementation from site preparation to commissioning, ensuring minimal disruption.', icon: 'fa-hammer' },
    { title: 'Energy Management & Optimization', text: 'Advanced monitoring continuously optimizes demand management, peak load reduction, and renewable generation balancing.', icon: 'fa-chart-line' },
    { title: 'Maintenance & Support', text: 'Ongoing preventative maintenance, remote monitoring, system diagnostics, and technology upgrades.', icon: 'fa-wrench' }
  ];

  return (
    <section style={{ padding: '120px 0', backgroundColor: '#fff' }}>
      <div className="section-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        <div className="animate-fade-right" style={{ flex: '1', minWidth: '300px', position: 'sticky', top: '120px', alignSelf: 'flex-start' }}>
          <h5 style={{ color: '#ee7b1c', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px' }}>OUR MICROGRID SERVICES</h5>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#1a1a1a', marginBottom: '25px', lineHeight: '1.2' }}>Comprehensive<br/>End-to-End Support</h2>
          <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.7', marginBottom: '30px', maxWidth: '400px' }}>
            From initial assessment to long-term maintenance, our microgrid services are designed to ensure maximum efficiency, resilience, and continuous performance for your infrastructure.
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
                transition: 'all 0.3s ease'
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

function TechnologiesSection() {
  const techs = [
    { title: 'Solar PV', desc: 'Generate renewable electricity onsite and reduce reliance on grid power.', icon: 'fa-sun' },
    { title: 'Battery Energy Storage', desc: 'Store excess energy for use during peak demand periods or grid interruptions.', icon: 'fa-car-battery' },
    { title: 'Combined Heat & Power (CHP)', desc: 'Produce electricity and useful heat from a single fuel source to maximize efficiency.', icon: 'fa-fire-flame-simple' },
    { title: 'Heat Pumps', desc: 'Deliver efficient low-carbon heating solutions as part of an integrated energy strategy.', icon: 'fa-fan' },
    { title: 'EV Charging Infrastructure', desc: 'Support fleet electrification and workplace charging requirements.', icon: 'fa-charging-station' },
    { title: 'Intelligent Energy Controls', desc: 'Coordinate all connected technologies through a central management platform.', icon: 'fa-microchip' }
  ];

  return (
    <section style={{ backgroundColor: '#f9fafb', padding: '100px 0' }}>
      <div className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h5 className="sub-title animate-fade-up" style={{ color: '#097355', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px' }}>INTEGRATED SOLUTIONS</h5>
          <h2 className="animate-fade-up" style={{ fontSize: '38px', fontWeight: '800', color: '#1a1a1a' }}>Microgrid Technologies We Integrate</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {techs.map((item, i) => (
            <div key={i} className="animate-stagger" style={{ '--index': i, backgroundColor: '#fff', padding: '30px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #eaeaea', textAlign: 'center' }}>
              <div style={{ backgroundColor: '#f4f9f7', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#097355', fontSize: '24px', margin: '0 auto 20px' }}>
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '12px' }}>{item.title}</h4>
              <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliveryProcessSection() {
  const steps = [
    { num: '1', title: 'Consultation', desc: 'Understand your energy requirements, resilience goals, and operational priorities.' },
    { num: '2', title: 'Site Assessment', desc: 'Evaluate existing infrastructure and identify opportunities for improvement.' },
    { num: '3', title: 'Solution Design', desc: 'Develop a tailored microgrid strategy and technology mix.' },
    { num: '4', title: 'Installation & Integration', desc: 'Implement and connect all system components.' },
    { num: '5', title: 'Ongoing Optimization', desc: 'Monitor, maintain, and continually improve system performance.' }
  ];

  return (
    <section style={{ padding: '100px 0', backgroundColor: '#fff' }}>
      <div className="section-container" style={{ display: 'flex', gap: '50px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div className="animate-fade-right" style={{ flex: 1, minWidth: '320px' }}>
          <img src="/microgrid_process.png" alt="Our Delivery Process" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }} />
        </div>
        <div className="animate-fade-left" style={{ flex: 1, minWidth: '320px' }}>
          <h5 className="be-sub-title" style={{ color: '#097355', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px' }}>HOW IT WORKS</h5>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#1a1a1a', marginBottom: '30px' }}>Our Delivery Process</h2>
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

function FinancingSection() {
  const options = [
    'Asset finance',
    'Equipment leasing',
    'Energy-as-a-Service models',
    'Energy performance contracts',
    'Flexible commercial agreements'
  ];

  return (
    <section style={{ padding: '100px 0', backgroundColor: '#f4f9f7' }}>
      <div className="section-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
        <div className="animate-fade-right" style={{ flex: 1, minWidth: '300px' }}>
          <h5 style={{ color: '#097355', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px', fontSize: '13px' }}>FUNDING OPTIONS</h5>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#1a1a1a', marginBottom: '25px', lineHeight: '1.2' }}>Flexible Commercial & Funding Options</h2>
          <p style={{ color: '#555', fontSize: '16px', marginBottom: '20px', lineHeight: '1.7' }}>
            We understand that investment decisions require careful planning. GGS Utilities can help explore a range of commercial options to help organizations access advanced energy infrastructure while effectively managing capital expenditure.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0' }}>
            {options.map((opt, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: '#333', marginBottom: '12px', fontWeight: '600' }}>
                <i className="fa-solid fa-circle-check" style={{ color: '#097355' }}></i> {opt}
              </li>
            ))}
          </ul>
        </div>
        <div className="animate-fade-left" style={{ flex: 1, minWidth: '300px' }}>
          <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 15px 40px rgba(0,0,0,0.08)' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#1a1a1a', marginBottom: '20px' }}>Why Choose GGS Utilities?</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#097355', marginBottom: '5px' }}>Energy Infrastructure Specialists</h4>
                <p style={{ fontSize: '14px', color: '#666' }}>Expertise across renewable energy, storage, CHP, and integrated energy systems.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#097355', marginBottom: '5px' }}>Tailored Solutions</h4>
                <p style={{ fontSize: '14px', color: '#666' }}>Every microgrid is designed around your unique operational requirements.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#097355', marginBottom: '5px' }}>End-to-End Project Delivery</h4>
                <p style={{ fontSize: '14px', color: '#666' }}>From feasibility assessments through installation and long-term support.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#097355', marginBottom: '5px' }}>Sustainability Focused</h4>
                <p style={{ fontSize: '14px', color: '#666' }}>Helping organizations reduce emissions and meet net-zero objectives.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);
  const faqs = [
    { q: 'What is a Microgrid?', a: 'A microgrid is an integrated energy system that combines generation, storage, and energy management technologies to provide reliable and efficient power for a specific site or facility.' },
    { q: 'Can a Microgrid operate during a power outage?', a: 'Yes. Depending on system design, a microgrid can continue supplying critical loads during grid interruptions. This is one of the key advantages of microgrid technology.' },
    { q: 'What technologies can be included in a Microgrid?', a: 'Microgrids can incorporate solar PV, battery storage, CHP systems, heat pumps, EV charging infrastructure, and intelligent control systems.' },
    { q: 'Are Microgrids suitable for all businesses?', a: 'Microgrids are particularly valuable for organizations with high energy usage, resilience requirements, sustainability goals, or critical operations.' },
    { q: 'How much can a Microgrid reduce energy costs?', a: 'Savings vary depending on energy demand, technology mix, and operational requirements. A feasibility assessment can identify potential opportunities.' },
    { q: 'Do Microgrids support net-zero strategies?', a: 'Yes. Microgrids enable businesses to integrate renewable energy and optimize energy consumption to support carbon reduction objectives.' }
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
        <h2 style={{ fontSize: '40px', fontWeight: '800', marginBottom: '20px' }}>Build a More Resilient Energy Future</h2>
        <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.6' }}>
          Discover how a tailored microgrid solution from GGS Utilities can improve energy resilience, reduce costs, and support your sustainability goals.
        </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a href="tel:+4403331380001" className="ggs-btn" style={{ backgroundColor: 'transparent', color: '#fff', border: '2px solid #fff', padding: '14px 36px', fontSize: '16px' }}>
              <i className="fa-solid fa-phone" style={{ marginRight: '8px' }}></i> Speak to a Microgrid Specialist
            </a>
          </div>
      </div>
    </section>
  );
}

export default function MicrogridSolutions() {
  useSEO("Microgrid Solutions | GGS Utilities", "Take control of your energy future with intelligent microgrid solutions designed to improve resilience, reduce energy costs, and support sustainability.");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="microgrid-solutions-page">
      <PageBanner
        title="Microgrid"
        description="GGS Utilities helps businesses design, deliver, and manage integrated energy systems that combine onsite generation, battery storage, renewable energy technologies, and intelligent controls into one reliable energy network."
        image="/microgrid_banner.png"
      />
      <IntroSection />
      <WhyInvestSection />
      <TechnologiesSection />
      <ServicesSection />
      <DeliveryProcessSection />
      <FinancingSection />
      <FAQSection />
      <CustomCTA />
    </div>
  );
}
