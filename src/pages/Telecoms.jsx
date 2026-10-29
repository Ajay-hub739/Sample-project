import useSEO from '../hooks/useSEO';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PhoneInputModule from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import PageBanner from '../components/PageBanner';
import '../index.css';

const PhoneInput = PhoneInputModule.default ? PhoneInputModule.default : PhoneInputModule;

export default function Telecoms() {
  useSEO("Telecommunications | GGS Utilities", "Transforming Businesses with Latest Technology Telecom Services");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    phoneNumber: '',
    emailAddress: '',
    businessAddress: '',
    serviceRequired: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/send_mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.status === 'success') {
        setIsSuccess(true);
        setFormData({
          businessName: '',
          contactName: '',
          phoneNumber: '',
          emailAddress: '',
          businessAddress: '',
          serviceRequired: '',
          message: ''
        });
      } else {
        alert('Error: ' + result.message);
      }
    } catch (error) {
      console.error('Error sending form:', error);
      if (window.location.hostname === 'localhost') {
        alert('LOCAL TESTING ERROR:\nThe email could not be sent because you are running this on localhost via Vite, which does not support PHP.');
      } else {
        alert('An error occurred while sending the message. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '8px 12px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '14px',
    color: '#1a1a1a',
    backgroundColor: '#f9fafb',
    transition: 'border-color 0.3s',
    outline: 'none'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '13px',
    color: '#1a1a1a',
    marginBottom: '5px',
    fontWeight: 'bold'
  };

  const asteriskStyle = { color: '#ff3b30' };

  return (
    <>
      <PageBanner title="Telecommunications" image="/hand-touching-mobile-with-applications-768x512.jpg" />

      {/* PSTN Switch Off Alert */}
      <section style={{ backgroundColor: '#ff3b30', color: '#fff', padding: '15px 0', borderBottom: '4px solid #cc2e26' }}>
        <div className="section-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', textAlign: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
          <div style={{ animation: 'pulse 2s infinite' }}>
            <i className="fa-solid fa-triangle-exclamation" style={{ fontSize: '36px' }}></i>
          </div>
          <div style={{ textAlign: 'left' }}>
            <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1px' }}>Urgent Warning: UK PSTN Switch Off (Jan 2027)</h4>
            <p style={{ margin: '5px 0 0 0', fontSize: '15px', lineHeight: '1.5' }}>
              Traditional landline telephone lines are being permanently switched off. Everything is moving to <strong>Digital/VoIP networks</strong>. <br />
              Don't wait until the last minute <strong>businesses must upgrade now</strong> to avoid losing phone and internet access!
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#fafbfc' }}>
        <div className="section-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
          <div className="be-transform-text animate-fade-up" style={{ flex: '1 1 500px' }}>
            <h5 className="be-sub-title">Telecommunications</h5>
            <h2 className="be-title-green" style={{ color: '#097355', fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.3' }}>
              Transforming Businesses with Latest Technology Telecom Services
            </h2>
            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>
              In today's fast-paced digital world, reliable communication is the backbone of any successful enterprise. We provide state-of-the-art voice, data, and mobile solutions tailored to fit the unique needs of your business. Whether you are scaling up a startup or managing a multi-site corporation, our robust infrastructure ensures you remain connected, secure, and ahead of the competition.
            </p>
            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', marginBottom: '20px' }}>
              As an <strong>Authorized Supplier of BT</strong>, we deliver industry-leading BT-based telecom services. This means your business benefits directly from BT's highly resilient national network infrastructure ensuring unparalleled reliability, exceptional call quality, and high-speed data transmission while receiving our dedicated, personalized customer support and tailored billing solutions.
            </p>
            <ul style={{ listStyleType: 'none', paddingLeft: 0, marginTop: '20px' }}>
              <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <i className="fas fa-check-square" style={{ color: '#097355', marginTop: '5px' }}></i>
                <span>Affordable Cost</span>
              </li>
              <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <i className="fas fa-check-square" style={{ color: '#097355', marginTop: '5px' }}></i>
                <span>Everytime Tech Upgradation</span>
              </li>
              <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <i className="fas fa-check-square" style={{ color: '#097355', marginTop: '5px' }}></i>
                <span>Fast Installation</span>
              </li>
              <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <i className="fas fa-check-square" style={{ color: '#097355', marginTop: '5px' }}></i>
                <span>100% Customer Satisfaction</span>
              </li>
            </ul>
            <button onClick={() => setIsModalOpen(true)} className="ggs-btn" style={{ display: 'inline-block', marginTop: '20px', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
              Contact Us
            </button>
          </div>
          <div className="be-transform-image animate-fade-left" style={{ flex: '1 1 400px' }}>
            <img src="/large-buildings-with-dome-lights-768x555.jpg" alt="Telecommunications Services" style={{ borderRadius: '12px', width: '100%', maxWidth: '500px', objectFit: 'cover', margin: '0 auto', display: 'block', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </section>

      {/* Services Breakdown Sections */}

      {/* Service 1: Business Broadband */}
      <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
        <div className="section-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
          <div className="animate-fade-right" style={{ flex: '1 1 400px' }}>
            <img src="/full-shot-smiley-engineers-with-laptop-768x512.jpg" alt="Business Broadband" style={{ borderRadius: '12px', width: '100%', maxWidth: '500px', objectFit: 'cover', margin: '0 auto', display: 'block', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }} />
          </div>
          <div className="animate-fade-left" style={{ flex: '1 1 500px' }}>
            <div style={{ fontSize: '40px', color: '#097355', marginBottom: '20px' }}>
              <i className="fas fa-wifi"></i>
            </div>
            <h3 style={{ fontSize: '28px', color: '#097355', marginBottom: '15px', fontWeight: 'bold' }}>Business Broadband</h3>
            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', marginBottom: '25px' }}>
              Stay connected with lightning-fast, uninterrupted internet tailored for modern business demands. We offer a range of connectivity solutions from FTTP (Fibre to the Premises) to dedicated broadband circuits, ensuring that your main office, satellite branches, and remote workers experience seamless data transfer, low latency, and optimal productivity.
            </p>
            <Link to="/telecommunications/business-broadband" className="ggs-btn" style={{ display: 'inline-block', marginTop: '20px' }}>
              Read More &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Service 2: Business VOIP Services */}
      <section style={{ padding: '80px 0', backgroundColor: '#fafbfc' }}>
        <div className="section-container" style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '50px', alignItems: 'center' }}>
          <div className="animate-fade-right" style={{ flex: '1 1 500px' }}>
            <div style={{ fontSize: '40px', color: '#097355', marginBottom: '20px' }}>
              <i className="fas fa-phone-volume"></i>
            </div>
            <h3 style={{ fontSize: '28px', color: '#097355', marginBottom: '15px', fontWeight: 'bold' }}>Business VOIP Services</h3>
            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', marginBottom: '25px' }}>
              Upgrade your communication with a feature-rich, flexible, and cost-effective business telephone system. Our Cloud VOIP solutions allow your team to make and receive calls from anywhere, utilizing advanced call routing, voicemail-to-email, and seamless CRM integrations. Let us manage your phone systems so you can focus on growing your business.
            </p>
            <Link to="/telecommunications/business-voip" className="ggs-btn" style={{ display: 'inline-block', marginTop: '20px' }}>
              Read More &rarr;
            </Link>
          </div>
          <div className="animate-fade-left" style={{ flex: '1 1 400px' }}>
            <img src="/consultant_client_plans.png" alt="Business VOIP" style={{ borderRadius: '12px', width: '100%', maxWidth: '500px', objectFit: 'cover', margin: '0 auto', display: 'block', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </section>

      {/* Service 3: Leased Lines */}
      <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
        <div className="section-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
          <div className="animate-fade-right" style={{ flex: '1 1 400px' }}>
            <img src="/city_lightbulb.png" alt="Leased Lines" style={{ borderRadius: '12px', width: '100%', maxWidth: '500px', objectFit: 'cover', margin: '0 auto', display: 'block', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }} />
          </div>
          <div className="animate-fade-left" style={{ flex: '1 1 500px' }}>
            <div style={{ fontSize: '40px', color: '#097355', marginBottom: '20px' }}>
              <i className="fas fa-network-wired"></i>
            </div>
            <h3 style={{ fontSize: '28px', color: '#097355', marginBottom: '15px', fontWeight: 'bold' }}>Leased Lines</h3>
            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', marginBottom: '25px' }}>
              For businesses that cannot afford downtime, our wholesale leased lines provide dedicated, uncontended, and highly secure internet access. Benefit from guaranteed symmetrical speeds and a robust Service Level Agreement (SLA). Whether you're transferring large data files or hosting crucial web applications, our leased lines deliver uncompromising performance.
            </p>
            <Link to="/telecommunications/leased-lines" className="ggs-btn" style={{ display: 'inline-block', marginTop: '20px' }}>
              Read More &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Service 4: Business Mobile */}
      <section style={{ padding: '80px 0', backgroundColor: '#fafbfc' }}>
        <div className="section-container" style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '50px', alignItems: 'center' }}>
          <div className="animate-fade-right" style={{ flex: '1 1 500px' }}>
            <div style={{ fontSize: '40px', color: '#097355', marginBottom: '20px' }}>
              <i className="fas fa-mobile-screen"></i>
            </div>
            <h3 style={{ fontSize: '28px', color: '#097355', marginBottom: '15px', fontWeight: 'bold' }}>Business Mobile</h3>
            <p style={{ color: '#666', lineHeight: '1.8', fontSize: '16px', marginBottom: '25px' }}>
              Supercharge your workforce with our flexible and competitive business mobile plans. Partnering with top networks like O2 and Vodafone, we provide unlimited SIM-only deals, pooled data options, and the latest hardware. Keep your team connected on the go with secure, reliable, and cost-efficient mobile solutions.
            </p>
            <Link to="/telecommunications/business-mobile" className="ggs-btn" style={{ display: 'inline-block', marginTop: '20px' }}>
              Read More &rarr;
            </Link>
          </div>
          <div className="animate-fade-left" style={{ flex: '1 1 400px' }}>
            <img src="/hand-touching-mobile-with-applications-768x512.jpg" alt="Business Mobile" style={{ borderRadius: '12px', width: '100%', maxWidth: '500px', objectFit: 'cover', margin: '0 auto', display: 'block', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </section>



      {/* Modal Popup for Contact Us */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '16px',
            padding: '30px',
            width: '100%',
            maxWidth: '650px',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
            boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
          }}>
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '20px',
                background: 'none',
                border: 'none',
                fontSize: '28px',
                color: '#999',
                cursor: 'pointer',
                lineHeight: 1
              }}
            >
              &times;
            </button>
            <h2 style={{ fontSize: '24px', color: '#1a1a1a', marginBottom: '20px', fontWeight: 'bold' }}>Request a Telecom Quote</h2>

            {isSuccess ? (
              <div style={{ textAlign: 'center', padding: '30px 20px', color: '#1a1a1a' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '70px', height: '70px', borderRadius: '50%', backgroundColor: '#097355', marginBottom: '20px', boxShadow: '0 10px 30px rgba(9, 115, 85, 0.3)' }}>
                  <i className="fa-solid fa-check" style={{ fontSize: '30px', color: '#fff' }}></i>
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '10px' }}>Thank you!</h3>
                <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.6', marginBottom: '25px' }}>
                  We have received your request successfully. Our telecom team will get back to you shortly.
                </p>
                <button onClick={() => { setIsSuccess(false); setIsModalOpen(false); }} style={{ backgroundColor: 'transparent', border: '2px solid #097355', color: '#097355', padding: '10px 25px', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px', transition: 'all 0.3s' }}>
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div>
                    <label style={labelStyle}>Business Name <span style={asteriskStyle}>*</span></label>
                    <input type="text" name="businessName" required style={inputStyle} value={formData.businessName} onChange={handleChange} />
                  </div>
                  <div>
                    <label style={labelStyle}>Contact Name <span style={asteriskStyle}>*</span></label>
                    <input type="text" name="contactName" required style={inputStyle} value={formData.contactName} onChange={handleChange} />
                  </div>
                  <div>
                    <label style={labelStyle}>Contact Number <span style={asteriskStyle}>*</span></label>
                    <PhoneInput
                      country={'in'}
                      value={formData.phoneNumber}
                      onChange={(phone) => setFormData({ ...formData, phoneNumber: phone })}
                      inputStyle={{ ...inputStyle, paddingLeft: '50px', width: '100%', backgroundColor: '#f9fafb' }}
                      buttonStyle={{ border: '1px solid #ddd', backgroundColor: '#f9fafb', borderRadius: '8px 0 0 8px' }}
                      containerStyle={{ width: '100%' }}
                      dropdownStyle={{ color: '#000' }}
                      inputProps={{ name: 'phoneNumber', required: true }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address <span style={asteriskStyle}>*</span></label>
                    <input type="email" name="emailAddress" required style={inputStyle} value={formData.emailAddress} onChange={handleChange} />
                  </div>
                  <div>
                    <label style={labelStyle}>Business Address <span style={asteriskStyle}>*</span></label>
                    <input type="text" name="businessAddress" required style={inputStyle} value={formData.businessAddress} onChange={handleChange} />
                  </div>
                  <div>
                    <label style={labelStyle}>Service Required <span style={asteriskStyle}>*</span></label>
                    <select name="serviceRequired" required style={{ ...inputStyle, color: formData.serviceRequired ? '#1a1a1a' : '#666' }} value={formData.serviceRequired} onChange={handleChange}>
                      <option value="" disabled hidden>Select a service...</option>
                      <option value="business-broadband" style={{ color: '#000' }}>Business Broadband</option>
                      <option value="business-voip" style={{ color: '#000' }}>Business VOIP Services</option>
                      <option value="leased-lines" style={{ color: '#000' }}>Leased Lines</option>
                      <option value="business-mobile" style={{ color: '#000' }}>Business Mobile</option>
                    </select>
                  </div>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={labelStyle}>Message</label>
                  <textarea name="message" rows="3" style={{ ...inputStyle, resize: 'vertical' }} value={formData.message} onChange={handleChange}></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} style={{ backgroundColor: '#097355', color: '#fff', border: 'none', padding: '12px 30px', borderRadius: '8px', cursor: isSubmitting ? 'not-allowed' : 'pointer', fontWeight: 'bold', fontSize: '15px', width: '100%', transition: 'background-color 0.3s' }}>
                  {isSubmitting ? 'Sending Request...' : 'Send Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
