import React, { useEffect } from 'react';
import useSEO from '../hooks/useSEO';
import { Link } from 'react-router-dom';
import '../index.css';

function HeroSection() {
  return (
    <section style={{ 
      paddingTop: '150px', 
      paddingBottom: '80px', 
      backgroundColor: '#f5f7f5', 
      backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)',
      backgroundSize: '40px 40px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="section-container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'inline-block', padding: '6px 16px', backgroundColor: 'var(--green-light)', color: 'var(--green-dark)', borderRadius: '50px', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '20px' }}>
          ★ SECURE GLOBAL PAY
        </div>
        
        <h1 style={{ fontSize: '56px', fontWeight: '800', color: '#1c1c1c', lineHeight: '1.1', maxWidth: '800px', margin: '0 auto 20px', letterSpacing: '-1px' }}>
          Reliable Payment Solutions for International Education
        </h1>
        
        <p style={{ fontSize: '16px', color: '#6b7280', maxWidth: '500px', margin: '0 auto 40px', lineHeight: '1.6' }}>
          The easiest and fastest way to pay tuition and fees to educational institutions, businesses, and government agencies worldwide.
        </p>

        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginBottom: '60px' }}>
          <a href="#" className="ggs-btn" style={{ padding: '16px 36px' }}>Download app <i className="fa-solid fa-play"></i> <i className="fa-brands fa-apple"></i></a>
          <a href="#" className="ggs-btn" style={{ backgroundColor: '#ffffff', color: '#1c1c1c', border: '1px solid #e5e7eb' }}>Watch Demo <i className="fa-regular fa-circle-play"></i></a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '60px' }}>
           <div style={{ display: 'flex', marginLeft: '10px' }}>
             <img src="https://i.pravatar.cc/40?img=1" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid #fff', marginLeft: '-10px' }} />
             <img src="https://i.pravatar.cc/40?img=2" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid #fff', marginLeft: '-10px' }} />
             <img src="https://i.pravatar.cc/40?img=3" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid #fff', marginLeft: '-10px' }} />
           </div>
           <span style={{ fontSize: '13px', color: '#1c1c1c', fontWeight: '500' }}>Trusted by 10k+ Students Globally</span>
        </div>

        {/* Central Image Container */}
        <div style={{ position: 'relative', width: '400px', height: '400px', margin: '0 auto' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'var(--green-light)', borderRadius: '50%', zIndex: 1 }}></div>
          <img src="/ggs-hero-image.png" alt="Student using app" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '350px', height: 'auto', zIndex: 2 }} />
          
          {/* Floating Cards (Mocked) */}
          <div style={{ position: 'absolute', top: '40%', left: '-80px', backgroundColor: '#fff', padding: '10px 15px', borderRadius: '12px', boxShadow: '0 8px 20px rgba(0,0,0,0.05)', zIndex: 3, display: 'flex', alignItems: 'center', gap: '10px' }}>
             <div style={{ width: '30px', height: '30px', backgroundColor: 'var(--green-light)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="fa-solid fa-building-columns" style={{ color: 'var(--green)' }}></i></div>
             <div style={{ textAlign: 'left' }}>
               <div style={{ fontSize: '12px', fontWeight: 'bold' }}>Partnering</div>
               <div style={{ fontSize: '10px', color: '#888' }}>Institutions</div>
             </div>
          </div>
          
          <div style={{ position: 'absolute', bottom: '20%', left: '-120px', backgroundColor: '#fff', padding: '15px', borderRadius: '12px', boxShadow: '0 8px 20px rgba(0,0,0,0.05)', zIndex: 3, textAlign: 'left' }}>
             <div style={{ display: 'flex', gap: '5px', color: '#facc15', fontSize: '10px', marginBottom: '5px' }}><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
             <div style={{ fontSize: '12px', fontWeight: 'bold' }}>Great Experience</div>
          </div>

          <div style={{ position: 'absolute', top: '30%', right: '-150px', backgroundColor: '#fff', padding: '15px', borderRadius: '12px', boxShadow: '0 8px 20px rgba(0,0,0,0.05)', zIndex: 3, width: '180px', textAlign: 'left' }}>
             <div style={{ fontSize: '10px', color: '#888', marginBottom: '5px' }}>SEND FUNDS TO</div>
             <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>$ 22,850.00</div>
             <div style={{ display: 'flex', gap: '10px', fontSize: '10px', color: '#888' }}>
               <span><i className="fa-solid fa-arrow-up" style={{ color: 'var(--green)' }}></i> Tuition</span>
               <span><i className="fa-solid fa-arrow-down" style={{ color: '#fca5a5' }}></i> Housing</span>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function PartnersSection() {
  return (
    <section style={{ padding: '60px 0', backgroundColor: '#fff', textAlign: 'center' }}>
      <div className="section-container">
        <p style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '30px' }}>Leading Brands Partner With Us</p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', flexWrap: 'wrap', opacity: 0.7 }}>
          <img src="/Untitled-design-10.png" alt="Across" style={{ height: '30px' }} />
          <img src="/Untitled-design-11.png" alt="MPower" style={{ height: '30px' }} />
          <img src="/Untitled-design-12.png" alt="Prodigy" style={{ height: '30px' }} />
          <img src="/Untitled-design-13.png" alt="Techstars" style={{ height: '30px' }} />
          <img src="/Untitled-design-14.png" alt="Stripe" style={{ height: '30px' }} />
          <img src="/Untitled-design-16.png" alt="Paystack" style={{ height: '30px' }} />
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    { icon: 'fa-earth-americas', title: 'Global Accessibility', desc: 'Effortlessly send tuition and other payments to educational institutions worldwide, no matter where you are.' },
    { icon: 'fa-bolt', title: 'Fast & Reliable Transactions', desc: 'Ensure your payments are processed quickly, helping you meet important deadlines without stress.' },
    { icon: 'fa-shield-halved', title: 'Secure & Transparent', desc: 'Enjoy peace of mind with secure payment processing and complete transparency on fees and exchange rates.' }
  ];

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
      <div className="section-container">
        <div style={{ backgroundColor: 'var(--green)', borderRadius: '32px', padding: '60px 40px', position: 'relative', overflow: 'hidden' }}>
          
          <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px', backgroundColor: 'rgba(255,255,255,0.4)', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', marginBottom: '20px' }}>
              <i className="fa-solid fa-star" style={{ color: '#fff' }}></i> FEATURES
            </div>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#ffffff', maxWidth: '400px', lineHeight: '1.2' }}>What Truly sets us apart</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {features.map((feat, i) => (
              <div key={i} style={{ backgroundColor: '#fff', borderRadius: '24px', padding: '30px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#f5f7f5', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <i className={`fa-solid ${feat.icon}`} style={{ color: '#688c42', fontSize: '18px' }}></i>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1c1c1c', marginBottom: '10px' }}>{feat.title}</h3>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6', marginBottom: '30px', flexGrow: 1 }}>{feat.desc}</p>
                <div style={{ marginTop: 'auto' }}>
                  <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', backgroundColor: 'var(--green-light)', color: 'var(--green)', padding: '8px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textDecoration: 'none' }}>Download app <i className="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
            ))}
          </div>

          {/* Abstract Background Shapes */}
          <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', transform: 'translate(30%, -30%)' }}></div>
          <div style={{ position: 'absolute', bottom: 0, left: '50%', width: '300px', height: '300px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', transform: 'translate(-50%, 50%)' }}></div>
        </div>
      </div>
    </section>
  );
}

export default function PaymentSolutions() {
  useSEO("Secure Payment Solutions | International Education", "The easiest and fastest way to pay tuition and fees to educational institutions worldwide.");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper">
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
    </div>
  );
}
