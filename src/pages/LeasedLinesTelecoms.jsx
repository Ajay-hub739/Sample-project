import React, { useState } from 'react';
import useSEO from '../hooks/useSEO';
import PageBanner from '../components/PageBanner';
import '../index.css';
import TelecomModal from '../components/TelecomModal';

export default function LeasedLinesTelecoms() {
  useSEO("Leased Lines | Telecommunications", "Dedicated Connectivity for Businesses That Can’t Afford Downtime");

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <PageBanner title="Leased Lines" image="/city_lightbulb.png" />

      {/* Intro Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#fafbfc' }}>
        <div className="section-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
          <div className="be-transform-text animate-fade-up" style={{ flex: '1 1 500px' }}>
            <h5 className="be-sub-title">Telecommunications</h5>
            <h2 className="be-title-green" style={{ color: '#097355', fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.3' }}>
              Dedicated Connectivity for Businesses That Can’t Afford Downtime
            </h2>
            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>
              Our dedicated leased line solutions provide private, uncontended internet connections for businesses that rely on constant uptime and speed. Unlike shared broadband, leased lines ensure symmetrical upload and download speeds, zero congestion, and complete control over your network performance.
            </p>
            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>
              From financial institutions to data centers and creative agencies — enterprises trust our telecoms solutions for stable, secure, and high-capacity connectivity.
            </p>
            <button onClick={() => setIsModalOpen(true)} className="ggs-btn" style={{ display: 'inline-block', marginTop: '10px', border: 'none', cursor: 'pointer' }}>Get Started</button>
          </div>
          <div className="be-transform-image animate-fade-left" style={{ flex: '1 1 400px' }}>
            <img src="/manager-scanning-box-while-his-colleague-typing-laptop-1-scaled-qzo742mh0ypr34ktbetelixfdqfnhluqxrq46srzao.jpg" alt="Leased Lines" style={{ borderRadius: '12px', width: '100%', maxWidth: '500px', objectFit: 'cover', margin: '0 auto', display: 'block', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
        <div className="section-container" style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '50px', alignItems: 'center' }}>
          <div className="animate-fade-right" style={{ flex: '1 1 400px' }}>
            <img src="/engineer_site_survey.png" alt="UK Based Expertise" style={{ borderRadius: '12px', width: '100%', maxWidth: '500px', objectFit: 'cover', margin: '0 auto', display: 'block', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }} />
          </div>
          <div className="animate-fade-left" style={{ flex: '1 1 500px' }}>
            <h2 style={{ color: '#097355', fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.3' }}>
              UK-Based Expertise
            </h2>
            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>
              With deep industry experience and partnerships with leading network carriers, our telecoms team delivers unparalleled value, speed, and support. Our telecom engineers design bespoke connectivity plans that fit your business model — optimizing cost, speed, and reliability to help you stay competitive.
            </p>
            <h3 style={{ fontSize: '24px', color: '#333', marginBottom: '10px' }}>Fully Managed Support</h3>
            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>
              We handle everything — from initial setup to real-time monitoring — ensuring you focus on running your business while we manage the backbone of your connectivity. No hidden fees. No downtime surprises. Just transparent pricing, elite support, and dedicated internet performance your business can count on.
            </p>
            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>
              Partner with one of the UK’s most trusted telecom providers for dedicated connectivity. Our team of experts will design, deploy, and maintain your leased line for consistent performance and peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* The Leased Line Advantage */}
      <section style={{ padding: '80px 0', backgroundColor: '#fafbfc' }}>
        <div className="section-container">
          <h2 style={{ textAlign: 'center', color: '#097355', fontSize: '36px', fontWeight: 'bold', marginBottom: '40px' }} className="animate-fade-up">The Leased Line Advantage</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div className="animate-fade-up" style={{ textAlign: 'center' }}>
              <i className="fas fa-arrows-alt-v" style={{ fontSize: '40px', color: '#097355', marginBottom: '20px' }}></i>
              <h3 style={{ fontSize: '22px', color: '#333', marginBottom: '15px' }}>Symmetrical Speeds</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>Upload data as fast as you download it. Crucial for video conferencing, large file transfers, and accessing cloud-based CRMs seamlessly.</p>
            </div>
            <div className="animate-fade-up" style={{ textAlign: 'center', animationDelay: '100ms' }}>
              <i className="fas fa-shield-alt" style={{ fontSize: '40px', color: '#097355', marginBottom: '20px' }}></i>
              <h3 style={{ fontSize: '22px', color: '#333', marginBottom: '15px' }}>100% Uptime SLA</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>Backed by robust Service Level Agreements, a leased line guarantees an uncontended, highly secure connection that never drops.</p>
            </div>
            <div className="animate-fade-up" style={{ textAlign: 'center', animationDelay: '200ms' }}>
              <i className="fas fa-road" style={{ fontSize: '40px', color: '#097355', marginBottom: '20px' }}></i>
              <h3 style={{ fontSize: '22px', color: '#333', marginBottom: '15px' }}>Zero Congestion</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>Because the line is private to your business, your internet speeds won't slow down during peak usage hours in your local area.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Is it right for you? */}
      <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
        <div className="section-container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', color: '#097355', fontWeight: 'bold', marginBottom: '20px' }} className="animate-fade-up">Is a Leased Line Right For You?</h2>
          <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.8', marginBottom: '30px' }} className="animate-fade-up" style={{ animationDelay: '100ms' }}>
            If your business operations grind to a halt when the internet drops, a leased line is essential. Ideal for call centers, large corporate offices, data-heavy creative agencies, and financial institutions, leased lines are the ultimate safeguard against connectivity disruption.
          </p>
          <a href="/contact-us" className="ggs-btn" style={{ display: 'inline-block', marginTop: '20px' }}>Request a Quote</a>
        </div>
      </section>

      <TelecomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
