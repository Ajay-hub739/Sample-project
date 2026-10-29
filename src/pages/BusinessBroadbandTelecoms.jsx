import React, { useState } from 'react';
import useSEO from '../hooks/useSEO';
import PageBanner from '../components/PageBanner';
import '../index.css';
import TelecomModal from '../components/TelecomModal';

export default function BusinessBroadbandTelecoms() {
  useSEO("Business Broadband | Telecommunications", "Business Broadband That Keeps You Ahead");

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <PageBanner title="Business Broadband" image="/full-shot-smiley-engineers-with-laptop-768x512.jpg" />

      {/* Intro Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#fafbfc' }}>
        <div className="section-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
          <div className="be-transform-text animate-fade-up" style={{ flex: '1 1 500px' }}>
            <h5 className="be-sub-title">Telecommunications</h5>
            <h2 className="be-title-green" style={{ color: '#097355', fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.3' }}>
              Business Broadband That Keeps You Ahead
            </h2>
            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>
              Stay connected, productive, and future-ready with our next-generation business broadband. Whether you’re a growing startup or a large enterprise, our network solutions deliver unmatched performance, reliability, and 24/7 support to keep your business moving forward.
            </p>
            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>
              Enhance your connectivity and streamline communication by combining our high-speed broadband with intelligent Cloud Voice solutions. Empower your teams with unified communication, seamless collaboration, and cost efficiency — all in one powerful package.
            </p>
            <button onClick={() => setIsModalOpen(true)} className="ggs-btn" style={{ display: 'inline-block', marginTop: '10px', border: 'none', cursor: 'pointer' }}>Get Started</button>
          </div>
          <div className="be-transform-image animate-fade-left" style={{ flex: '1 1 400px' }}>
            <img src="/business_professionals_shaking_hands.png" alt="Business Broadband" style={{ borderRadius: '12px', width: '100%', maxWidth: '500px', objectFit: 'cover', margin: '0 auto', display: 'block', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </section>

      {/* Testimonials / Why Choose Us */}
      <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
        <div className="section-container">
          <h2 style={{ textAlign: 'center', color: '#097355', fontSize: '36px', fontWeight: 'bold', marginBottom: '40px' }} className="animate-fade-up">Trusted by Businesses Nationwide</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            
            <div className="animate-fade-up" style={{ backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ color: '#097355', fontSize: '24px', marginBottom: '15px' }}><i className="fas fa-quote-left"></i></div>
              <p style={{ color: '#666', fontStyle: 'italic', lineHeight: '1.6' }}>"Their broadband has completely transformed our office network. The speed, dedicated support are second to none."</p>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: '100ms', backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ color: '#097355', fontSize: '24px', marginBottom: '15px' }}><i className="fas fa-quote-left"></i></div>
              <p style={{ color: '#666', fontStyle: 'italic', lineHeight: '1.6' }}>"Their business broadband is fast, scalable, and secure exactly what we needed to power our remote teams."</p>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: '200ms', backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ color: '#097355', fontSize: '24px', marginBottom: '15px' }}><i className="fas fa-quote-left"></i></div>
              <p style={{ color: '#666', fontStyle: 'italic', lineHeight: '1.6' }}>"We switched to their broadband six months ago and haven’t faced a single downtime since. Excellent service!"</p>
            </div>

          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#fafbfc' }}>
        <div className="section-container">
          <h2 style={{ textAlign: 'center', color: '#097355', fontSize: '36px', fontWeight: 'bold', marginBottom: '40px' }} className="animate-fade-up">Key Features of Our Broadband</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div className="animate-fade-up" style={{ textAlign: 'center' }}>
              <i className="fas fa-tachometer-alt" style={{ fontSize: '40px', color: '#097355', marginBottom: '20px' }}></i>
              <h3 style={{ fontSize: '22px', color: '#333', marginBottom: '15px' }}>Ultra-High Speeds</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>Enjoy rapid download and upload speeds that keep your entire team connected without buffering or lag, even during peak hours.</p>
            </div>
            <div className="animate-fade-up" style={{ textAlign: 'center', animationDelay: '100ms' }}>
              <i className="fas fa-network-wired" style={{ fontSize: '40px', color: '#097355', marginBottom: '20px' }}></i>
              <h3 style={{ fontSize: '22px', color: '#333', marginBottom: '15px' }}>Static IP Addresses</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>Run your own servers, host websites, and provide secure remote access for your employees with dedicated static IP addresses.</p>
            </div>
            <div className="animate-fade-up" style={{ textAlign: 'center', animationDelay: '200ms' }}>
              <i className="fas fa-headset" style={{ fontSize: '40px', color: '#097355', marginBottom: '20px' }}></i>
              <h3 style={{ fontSize: '22px', color: '#333', marginBottom: '15px' }}>UK-Based Support</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>Our priority business support team is based entirely in the UK, ensuring fast response times and expert technical assistance when you need it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Switch Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
        <div className="section-container" style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '50px', alignItems: 'center' }}>
          <div className="animate-fade-right" style={{ flex: '1 1 400px' }}>
            <img src="/city_lightbulb.png" alt="Switching Broadband" style={{ borderRadius: '12px', width: '100%', maxWidth: '500px', objectFit: 'cover', margin: '0 auto', display: 'block', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }} />
          </div>
          <div className="animate-fade-left" style={{ flex: '1 1 500px' }}>
            <h2 style={{ color: '#097355', fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.3' }}>
              Switching is Simple and Seamless
            </h2>
            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>
              We know that downtime means lost revenue. That’s why our dedicated provisioning team manages your entire switch from start to finish, ensuring absolute zero downtime.
            </p>
            <ol style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', paddingLeft: '20px', marginBottom: '20px' }}>
              <li style={{ marginBottom: '10px' }}><strong>Consultation:</strong> We assess your current speeds and recommend the perfect FTTP or SoGEA solution.</li>
              <li style={{ marginBottom: '10px' }}><strong>Provisioning:</strong> We handle the entire switch with your previous supplier, organizing installation dates that suit you.</li>
              <li style={{ marginBottom: '10px' }}><strong>Go Live:</strong> Simply plug in your pre-configured business router, and you’re instantly connected to high-speed broadband.</li>
            </ol>
          </div>
        </div>
      </section>

      <TelecomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
