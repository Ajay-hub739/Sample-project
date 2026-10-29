import React from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import './Partners.css';
import PageBanner from '../components/PageBanner';

export default function Partners() {
  useSEO("Partners | GGS Utilities", "Collaborating for Seamless Energy Solutions. At GGS Utilities, we collaborate with a diverse network of trusted partners, including energy suppliers, brokers, and technology providers.");

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="partners-page">
      <PageBanner 
        title="Collaborating For Seamless Energy Solutions" 
        description="At GGS Utilities, we collaborate with a diverse network of trusted partners, including energy suppliers, brokers, and technology providers. Together, we deliver seamless, efficient, and tailored energy solutions that empower businesses to thrive." 
        image="/full-shot-smiley-engineers-with-laptop-768x512.jpg" 
      />
      <div style={{ textAlign: 'center', marginTop: '40px', marginBottom: '20px' }}>
        <Link to="/contact-us" className="ggs-btn">
          JOIN OUR NETWORK <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>

      {/* Brokers Section */}
      <section className="partners-section bg-light">
        <div className="section-container partners-content-grid">
          <div className="partners-text animate-fade-up">
            <h2 className="section-title">Brokers</h2>
            <p>
              GGS Utilities offers brokers and consultants a straightforward route to the energy and utilities market. Through our innovative platform, brokers gain access to competitive supplier rates across energy, gas, and water services.
            </p>
            <p>
              Whether you're a self-employed consultant, a call-center operation, or a nationwide energy consultancy, our partnership equips you with the tools to offer the best products in the market and grow your business.
            </p>
            
            <h3 className="sub-title">Benefits For Brokers</h3>
            <ul className="partners-check-list">
              <li>
                <i className="fa-solid fa-check-square"></i>
                <span>Access to competitive pricing from top suppliers.</span>
              </li>
              <li>
                <i className="fa-solid fa-check-square"></i>
                <span>Tools and insights to expand your customer base.</span>
              </li>
              <li>
                <i className="fa-solid fa-check-square"></i>
                <span>Dedicated support to optimize your operations.</span>
              </li>
            </ul>
          </div>
          <div className="partners-image animate-fade-up">
            <img 
              src="/manager-scanning-box-while-his-colleague-typing-laptop-1-scaled-qzo742mh0ypr34ktbetelixfdqfnhluqxrq46srzao.jpg" 
              alt="Brokers working in office" 
              className="rounded-image"
            />
          </div>
        </div>
      </section>

      {/* Affiliate Partnerships Section */}
      <section className="partners-section">
        <div className="section-container partners-content-grid reverse">
          <div className="partners-image animate-fade-up">
            <img 
              src="/person-taking-part-sustainable-travel-movement-scaled-qzo73t834mcvv0yguar4wlatfvpzcmtfkh79e15x0w.jpg" 
              alt="Volunteers smiling" 
              className="rounded-image"
            />
          </div>
          <div className="partners-text animate-fade-up">
            <h2 className="section-title">Affiliate Partnerships</h2>
            <p>
              Looking to expand your revenue streams or enhance your service offerings? GGS Utilities provides the perfect solution. Whether you're an energy broker seeking flexibility or a business aiming to diversify with energy sales, our partnership model is tailored to your success.
            </p>
            
            <h3 className="sub-title">Why Partner With Us</h3>
            <ul className="partners-check-list">
              <li>
                <i className="fa-solid fa-check-square"></i>
                <span>Seamlessly integrate energy services into your existing offerings.</span>
              </li>
              <li>
                <i className="fa-solid fa-check-square"></i>
                <span>Maximize profitability with our tailored solutions.</span>
              </li>
              <li>
                <i className="fa-solid fa-check-square"></i>
                <span>Enjoy flexibility and control while driving revenue growth.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Suppliers Section */}
      <section className="partners-section bg-light">
        <div className="section-container partners-content-grid">
          <div className="partners-text animate-fade-up">
            <h2 className="section-title">Suppliers</h2>
            <p>
              GGS Utilities collaborates with leading suppliers across the energy, water, and green technology sectors. By working with top-tier suppliers, we ensure our partners and brokers access the most competitive rates and the broadest range of products available.
            </p>
            
            <h3 className="sub-title">Advantages For Suppliers</h3>
            <ul className="partners-check-list">
              <li>
                <i className="fa-solid fa-check-square"></i>
                <span>Expand your market reach through our robust network.</span>
              </li>
              <li>
                <i className="fa-solid fa-check-square"></i>
                <span>Deliver customized solutions to a wide range of businesses.</span>
              </li>
              <li>
                <i className="fa-solid fa-check-square"></i>
                <span>Leverage data-driven insights for better market penetration.</span>
              </li>
            </ul>
          </div>
          <div className="partners-image animate-fade-up">
            <img 
              src="/man-holding-credit-card-tablet-workplace-background-1-scaled-qzo743kb7sr1eqjg5x8160ovz4b0payh9wdlo2ql4g.jpg" 
              alt="Suppliers in warehouse" 
              className="rounded-image"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="partners-cta-section">
        <div className="section-container partners-cta-content animate-fade-up">
          <h2>Have Questions Or Interested In Collaborating With GGS Utilities?</h2>
          <Link to="/contact-us" className="ggs-btn">
            CONTACT US <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}
