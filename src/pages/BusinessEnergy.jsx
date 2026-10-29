import useSEO from '../hooks/useSEO';
import React, { useEffect } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import UnifiedCTA from '../components/UnifiedCTA';
import PageBanner from '../components/PageBanner';

function TransformingSection() {
  return (
    <section className="be-transforming-section" style={{ backgroundColor: '#fafbfc', padding: '120px 0 80px 0' }}>
      <div className="section-container two-col">
        <div className="be-transform-text animate-fade-up">
          <h5 className="be-sub-title">Expert Energy Solutions For Businesses</h5>
          <h2 className="be-title-green" style={{ color: '#097355', fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.3' }}>Transforming Energy Procurement With GGS Utilities</h2>
          <p>
            At GGS Utilities, we're redefining how businesses manage their energy needs. Our advanced energy procurement services don't just focus on finding the best deals — we empower businesses with more innovative, efficient energy solutions tailored to their unique requirements.
          </p>
          <p>
            By leveraging our expertise and innovative strategies, we help you optimize costs, reduce complexity, and stay ahead in today's competitive energy landscape. Whether sourcing renewable energy or ensuring seamless integration with your existing systems, we deliver energy solutions designed for today and ready for the future.
          </p>
          <Link to="/contact-us" className="ggs-btn" style={{ marginTop: '20px' }}>
            GET A QUOTE &rarr;
          </Link>
        </div>
        <div className="be-transform-image animate-fade-left">
          <img src="/hand-holding-light-bulb-nature-background-with-energy-power-icons-energy-power-electric-environment-from-nature-concept-768x512.jpg" alt="Transforming Energy Procurement" style={{ borderRadius: '12px' }} />
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  const approaches = [
    { title: 'Cost Optimization', desc: 'We identify the best energy contracts and pricing structures to maximize your savings.' },
    { title: 'Customized Solutions', desc: 'Our team crafts tailored energy plans that align with your operational goals.' },
    { title: 'Seamless Management', desc: 'Simplify your energy procurement process with end-to-end service and expert support.' },
    { title: 'Net-Zero Integration', desc: 'We help businesses adopt renewable energy options to achieve their net-zero goals.' }
  ];

  return (
    <section className="be-approach-section-exact">
      <div className="section-container be-approach-exact-grid">
        <div className="be-approach-exact-left animate-fade-right">
          <h2 className="be-approach-exact-title">What Makes Our Approach<br />Different?</h2>
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
    </section>
  );
}

function WhyChooseGGSSection() {
  return (
    <section className="be-why-choose-section">
      <div className="section-container">
        <div className="be-why-choose-header">
          <h2 className="animate-fade-right">Why Choose GGS Utilities For Your Energy Needs?</h2>
          <p className="animate-fade-left">
            With a commitment to innovation and customer satisfaction, GGS Utilities is more than a provider; we're a partner in your success. We make energy procurement more innovative, simpler, and impactful for your business.
          </p>
        </div>
        <div className="be-cards-3-col">
          <div className="be-info-card animate-stagger" style={{'--index': 0}}>
            <h4>How We Transform Energy Procurement</h4>
            <p>At GGS Utilities, we are redefining how businesses procure energy. Our innovative approach combines market insights, advanced technology, and expert consultancy to help you secure the best energy deals tailored to your needs.</p>
          </div>
          <div className="be-info-card animate-stagger" style={{'--index': 1}}>
            <h4>Beyond Procurement – Our Complete Suite of Services</h4>
            <p>We go beyond procurement by offering a full range of services to optimize energy usage and reduce costs. Green energy solutions to provide real-time usage analytics, GGS Utilities is your trusted partner in energy management.</p>
          </div>
          <div className="be-info-card animate-stagger" style={{'--index': 2}}>
            <h4>Net-Zero Focus</h4>
            <p>Join us in building a net-zero future with sustainable energy solutions that align with your business goals. At GGS Utilities, we make going green seamless and cost-effective.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceBenefitsSection() {
  const benefits = [
    { icon: 'fa-piggy-bank', title: 'Cost Savings', text: 'Reduce your energy bills with customized, efficient plans tailored to your business needs.' },
    { icon: 'fa-leaf', title: 'Sustainable Energy Options', text: 'Embrace renewable energy solutions like solar power for long-term savings and environmental benefits.' },
    { icon: 'fa-chart-line', title: 'Improved Efficiency', text: 'Maximize energy efficiency with advanced systems and technologies that optimize energy consumption.' },
    { icon: 'fa-bolt', title: 'Reliable Power Supply', text: 'Ensure your business has uninterrupted power with dependable and consistent energy solutions.' },
    { icon: 'fa-user-tie', title: 'Expert Consultation', text: 'Benefit from professional advice on energy management and sustainable practices.' },
    { icon: 'fa-arrows-alt', title: 'Scalable Solutions', text: 'Our energy solutions grow with your business, providing flexible plans for businesses of any size.' },
    { icon: 'fa-headset', title: '24/7 Monitoring & Support', text: 'Monitor energy usage in real-time and receive ongoing customer support whenever you need.' },
    { icon: 'fa-clipboard-check', title: 'Regulatory Compliance', text: 'Stay compliant with industry regulations and standards for energy usage and environmental impact.' },
  ];

  return (
    <section className="be-benefits-section">
      <div className="be-benefits-overlay"></div>
      <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-header center animate-fade-up">
          <h5 className="sub-title" style={{ color: '#fca311' }}>SERVICE BENEFITS</h5>
          <h2 style={{ color: '#fff' }}>Why Choose GGS Energy Solutions?</h2>
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
    { title: 'Consultation & Energy Assessment', text: 'We evaluate your business\'s energy needs and recommend the most cost-effective and sustainable energy solutions.' },
    { title: 'Site Survey & Energy Audit', text: 'Our team conducts a thorough site survey to assess your current energy usage, identify inefficiencies, and find opportunities for improvement.' },
    { title: 'Solution Design & Implementation', text: 'Based on the audit, we design and implement energy solutions tailored to your specific needs, ensuring optimized performance.' },
    { title: 'Ongoing Monitoring & Maintenance', text: 'We provide continuous monitoring and support, ensuring your energy systems run efficiently and deliver optimal results.' }
  ];

  return (
    <section className="be-process-section">
      <div className="section-container two-col">
        <div className="be-process-image animate-fade-right">
          <img src="/city_lightbulb.png" alt="City inside lightbulb representing energy" />
        </div>
        <div className="be-process-content animate-fade-left">
          <h5 className="be-sub-title">IMPLEMENTATION PROCESS</h5>
          <p className="be-process-desc">
            Our simple and efficient process ensures your business gets the best energy solutions with minimal disruption.
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


export default function BusinessEnergy() {
  useSEO("Business Energy Solutions | Electricity & Gas | GGS Utilities", "Explore comprehensive business energy solutions. GGS Utilities offers tailored electricity and gas plans to reduce costs and boost your efficiency.");
  // Re-trigger scroll animations when route mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="business-energy-page">
      <PageBanner 
        title="Business Energy Solutions" 
        description="Expert Energy Solutions For Businesses. We optimize your energy procurement to maximize savings and efficiency." 
        image="/hand-holding-light-bulb-nature-background-with-energy-power-icons-energy-power-electric-environment-from-nature-concept-768x512.jpg" 
      />
      <TransformingSection />
      <ApproachSection />
      <WhyChooseGGSSection />
      <ServiceBenefitsSection />
      <ImplementationProcessSection />
      <UnifiedCTA />
    </div>
  );
}
