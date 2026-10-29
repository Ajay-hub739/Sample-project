import React, { useState } from 'react';
import useSEO from '../hooks/useSEO';
import PageBanner from '../components/PageBanner';
import '../index.css';
import TelecomModal from '../components/TelecomModal';

export default function BusinessMobileTelecoms() {
  useSEO("Business Mobile | Telecommunications", "Better Business Mobile Connectivity");

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <PageBanner title="Business Mobile" image="/hand-touching-mobile-with-applications-768x512.jpg" />

      {/* Intro Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#fafbfc' }}>
        <div className="section-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
          <div className="be-transform-text animate-fade-up" style={{ flex: '1 1 500px' }}>
            <h5 className="be-sub-title">Telecommunications</h5>
            <h2 className="be-title-green" style={{ color: '#097355', fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.3' }}>
              Better Business Mobile
            </h2>
            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>
              Stay ahead in a mobile-first world with enterprise-grade connectivity and the latest business devices. Our plans combine flexibility, performance, and security so your teams can collaborate seamlessly, whether they’re in the office, on-site, or remote. 
            </p>
            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>
              Business mobiles not only improve internal communication but also enhance customer experience and retention. With our mobile plans, you get exclusive deals on the latest Apple, Samsung, and Google devices—powered by the most reliable networks.
            </p>
            <button onClick={() => setIsModalOpen(true)} className="ggs-btn" style={{ display: 'inline-block', marginTop: '10px', border: 'none', cursor: 'pointer' }}>Get Started</button>
          </div>
          <div className="be-transform-image animate-fade-left" style={{ flex: '1 1 400px' }}>
            <img src="/hand-touching-mobile-with-applications-768x512.jpg" alt="Business Mobile" style={{ borderRadius: '12px', width: '100%', maxWidth: '500px', objectFit: 'cover', margin: '0 auto', display: 'block', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
        <div className="section-container" style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '50px', alignItems: 'center' }}>
          <div className="animate-fade-right" style={{ flex: '1 1 400px' }}>
            <img src="/payment_approved_phone.png" alt="UK Based Experts" style={{ borderRadius: '12px', width: '100%', maxWidth: '500px', objectFit: 'cover', margin: '0 auto', display: 'block', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }} />
          </div>
          <div className="animate-fade-left" style={{ flex: '1 1 500px' }}>
            <h2 style={{ color: '#097355', fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.3' }}>
              UK-Based Experts
            </h2>
            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>
              With decades of telecom expertise and partnerships with all major network providers, our team delivers mobile solutions that others simply can’t match. We negotiate directly with carriers to secure exclusive business-only tariffs, optimized data packages, and cost-controlled solutions tailored for your organization.
            </p>
            <h3 style={{ fontSize: '24px', color: '#333', marginBottom: '10px' }}>Simple and Affordable</h3>
            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>
              Choosing the right business mobile plan shouldn’t be complicated. Our experts analyze your usage, devices, and data needs to recommend the most cost-effective plans across top networks. No hidden fees, no overpaying—just transparent pricing and complete account management that saves you time and money.
            </p>
            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>
              We partner with top UK and global mobile networks to deliver cutting-edge connectivity with exceptional service. Our dedicated account managers ensure you always get the latest devices, best rates, and priority business support.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile Benefits Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#fafbfc' }}>
        <div className="section-container">
          <h2 style={{ textAlign: 'center', color: '#097355', fontSize: '36px', fontWeight: 'bold', marginBottom: '40px' }} className="animate-fade-up">Business Mobile Benefits</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div className="animate-fade-up" style={{ textAlign: 'center' }}>
              <i className="fas fa-signal" style={{ fontSize: '40px', color: '#097355', marginBottom: '20px' }}></i>
              <h3 style={{ fontSize: '22px', color: '#333', marginBottom: '15px' }}>5G Ready Connectivity</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>Future-proof your workforce with lightning-fast 5G networks, enabling near-instant file sharing and flawless video calls from the field.</p>
            </div>
            <div className="animate-fade-up" style={{ textAlign: 'center', animationDelay: '100ms' }}>
              <i className="fas fa-layer-group" style={{ fontSize: '40px', color: '#097355', marginBottom: '20px' }}></i>
              <h3 style={{ fontSize: '22px', color: '#333', marginBottom: '15px' }}>Pooled Data Plans</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>Share data across your entire team. High users borrow from low users, preventing you from ever paying exorbitant data overage charges.</p>
            </div>
            <div className="animate-fade-up" style={{ textAlign: 'center', animationDelay: '200ms' }}>
              <i className="fas fa-globe-europe" style={{ fontSize: '40px', color: '#097355', marginBottom: '20px' }}></i>
              <h3 style={{ fontSize: '22px', color: '#333', marginBottom: '15px' }}>International Roaming</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>Keep your executives connected globally. Our bespoke roaming add-ons provide affordable data usage across Europe and beyond.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BYOD Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
        <div className="section-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
          <div className="animate-fade-right" style={{ flex: '1 1 500px' }}>
            <h2 style={{ color: '#097355', fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.3' }}>
              Bring Your Own Device (BYOD) or Hardware Upgrades
            </h2>
            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>
              Whether you want to equip your team with the latest flagship devices from Apple and Samsung, or supply cost-effective SIM-only contracts for your employees' existing phones, we've got you covered.
            </p>
            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>
              Our dedicated account managers will walk you through the financial benefits of both models to determine which is most tax-efficient and secure for your enterprise structure.
            </p>
          </div>
          <div className="animate-fade-left" style={{ flex: '1 1 400px' }}>
            <img src="/hand-touching-mobile-with-applications-768x512.jpg" alt="BYOD Options" style={{ borderRadius: '12px', width: '100%', maxWidth: '500px', objectFit: 'cover', margin: '0 auto', display: 'block', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </section>

      <TelecomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
