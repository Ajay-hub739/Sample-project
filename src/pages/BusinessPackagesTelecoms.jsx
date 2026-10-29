import React from 'react';
import useSEO from '../hooks/useSEO';
import PageBanner from '../components/PageBanner';
import '../index.css';

export default function BusinessPackagesTelecoms() {
  useSEO("Business Packages | Telecommunications", "Modern Broadband & VOIP Services for Smarter Business Communication");

  return (
    <>
      <PageBanner title="Business Packages" image="/consultant_client_plans.png" />

      {/* Intro Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#fafbfc' }}>
        <div className="section-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
          <div className="be-transform-text animate-fade-up" style={{ flex: '1 1 500px' }}>
            <h5 className="be-sub-title">Telecommunications</h5>
            <h2 className="be-title-green" style={{ color: '#097355', fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.3' }}>
              Modern Broadband & VOIP Services for Smarter Business Communication
            </h2>
            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>
              Empower your business with high-speed broadband and crystal-clear VOIP calling all in one reliable, secure, and scalable communication solution. 
            </p>
            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>
              Choose the perfect package for your home or business with our reliable broadband and fully-featured VoIP services. Every plan is designed to deliver exceptional speed, secure connectivity, and high-quality communication — all at a price that fits your needs. 
            </p>
            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>
              Whether you’re a small team or a growing business, our packages combine fast internet performance with advanced VoIP features to keep your organisation connected, productive, and future-ready.
            </p>
            <a href="/contact-us" className="ggs-btn" style={{ display: 'inline-block', marginTop: '10px' }}>Get Started</a>
          </div>
          <div className="be-transform-image animate-fade-left" style={{ flex: '1 1 400px' }}>
            <img src="/business_professionals_shaking_hands.png" alt="Business Packages" style={{ borderRadius: '12px', width: '100%', maxWidth: '500px', objectFit: 'cover', margin: '0 auto', display: 'block', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </section>

      {/* Why Bundle Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
        <div className="section-container">
          <h2 style={{ textAlign: 'center', color: '#097355', fontSize: '36px', fontWeight: 'bold', marginBottom: '40px' }} className="animate-fade-up">Why Bundle Your Services?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div className="animate-fade-up" style={{ textAlign: 'center', backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '8px' }}>
              <i className="fas fa-file-invoice-dollar" style={{ fontSize: '40px', color: '#097355', marginBottom: '20px' }}></i>
              <h3 style={{ fontSize: '22px', color: '#333', marginBottom: '15px' }}>Single Monthly Bill</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>Tired of juggling different suppliers for your phone and internet? Consolidate your expenses into one easy-to-manage monthly invoice.</p>
            </div>
            <div className="animate-fade-up" style={{ textAlign: 'center', animationDelay: '100ms', backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '8px' }}>
              <i className="fas fa-user-friends" style={{ fontSize: '40px', color: '#097355', marginBottom: '20px' }}></i>
              <h3 style={{ fontSize: '22px', color: '#333', marginBottom: '15px' }}>Dedicated Account Manager</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>When you bundle your services with us, you are assigned a direct account manager who intimately knows your business setup.</p>
            </div>
            <div className="animate-fade-up" style={{ textAlign: 'center', animationDelay: '200ms', backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '8px' }}>
              <i className="fas fa-piggy-bank" style={{ fontSize: '40px', color: '#097355', marginBottom: '20px' }}></i>
              <h3 style={{ fontSize: '22px', color: '#333', marginBottom: '15px' }}>Bigger Savings</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>Combining your broadband and VoIP services unlocks exclusive bulk discounts, drastically reducing your operational communication costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#fafbfc' }}>
        <div className="section-container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', color: '#097355', fontWeight: 'bold', marginBottom: '20px' }} className="animate-fade-up">Customized to Your Exact Needs</h2>
          <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.8', marginBottom: '30px' }} className="animate-fade-up" style={{ animationDelay: '100ms' }}>
            We don't believe in one-size-fits-all. Some businesses need colossal Gigabit bandwidth but only 2 VoIP extensions. Others need huge call center capabilities running on reliable, moderate broadband. Let us audit your current setup and build a package that aligns precisely with your operational demands.
          </p>
          <a href="/contact-us" className="ggs-btn" style={{ display: 'inline-block', marginTop: '20px' }}>Build Your Package</a>
        </div>
      </section>

    </>
  );
}
