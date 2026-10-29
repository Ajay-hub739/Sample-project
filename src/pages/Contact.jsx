import useSEO from '../hooks/useSEO';
import React, { useEffect, useState } from 'react';
import PhoneInputModule from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import PageBanner from '../components/PageBanner';

const PhoneInput = PhoneInputModule.default ? PhoneInputModule.default : PhoneInputModule;

// ContactBoxes removed as it's now integrated into ContactForm

function ContactForm() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    phoneNumber: '',
    emailAddress: '',
    businessAddress: '',
    products: '',
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
          products: '',
          message: ''
        });
      } else {
        alert('Error: ' + result.message);
      }
    } catch (error) {
      console.error('Error sending form:', error);
      if (window.location.hostname === 'localhost') {
        alert('LOCAL TESTING ERROR:\nThe email could not be sent because you are running this on localhost via Vite, which does not support PHP.\n\nTo make the contact form work, please upload the "dist" folder to your live cPanel / web hosting server. The PHP code is correct and will work once deployed!');
      } else {
        alert('An error occurred while sending the message. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '15px 15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '15px',
    color: '#1a1a1a',
    backgroundColor: '#f9fafb',
    transition: 'border-color 0.3s',
    outline: 'none'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    color: '#1a1a1a',
    marginBottom: '10px',
    fontWeight: 'bold'
  };

  const asteriskStyle = { color: '#ff3b30' };

  return (
    <section style={{ backgroundColor: '#ffffff', padding: '100px 0', position: 'relative' }}>
      <div className="section-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'flex-start' }}>
        
        {/* Left Side: Contact Information */}
        <div style={{ flex: '1 1 400px' }}>
          <h5 className="animate-fade-up" style={{ color: '#ee7b1c', fontWeight: 'bold', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '15px' }}>GET IN TOUCH</h5>
          <h2 className="animate-fade-up" style={{ fontSize: '46px', fontWeight: '900', color: '#1a1a1a', letterSpacing: '-1px', marginBottom: '30px', lineHeight: '1.1' }}>Let's talk about your business energy needs.</h2>
          <p className="animate-fade-up" style={{ fontSize: '18px', color: '#555', lineHeight: '1.7', marginBottom: '50px' }}>
            Whether you have a question about our utility solutions, need a custom quote, or want to discuss a large-scale project, our expert team is ready to provide the answers you need.
          </p>
          
          <div className="animate-fade-up" style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '25px', padding: '20px', backgroundColor: '#f9fafb', borderRadius: '16px', border: '1px solid #eaeaea' }}>
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(9, 115, 85, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className="fa-solid fa-location-dot" style={{ fontSize: '28px', color: '#097355' }}></i>
              </div>
              <div>
                <h4 style={{ fontSize: '20px', fontWeight: '800', color: '#1a1a1a', marginBottom: '8px' }}>Office Address</h4>
                <p style={{ fontSize: '18px', color: '#1a1a1a', margin: 0, fontWeight: '600', lineHeight: '1.4' }}>26 Haslucks Green Road, 2nd Floor, Solihull, West Midlands, B90 2EL, United Kingdom.</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '25px', padding: '20px', backgroundColor: '#f9fafb', borderRadius: '16px', border: '1px solid #eaeaea' }}>
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(9, 115, 85, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className="fa-solid fa-phone-volume" style={{ fontSize: '28px', color: '#097355' }}></i>
              </div>
              <div>
                <h4 style={{ fontSize: '20px', fontWeight: '800', color: '#1a1a1a', marginBottom: '8px' }}>Call Us Directly</h4>
                <a href="tel:+4403331380001" style={{ fontSize: '18px', color: '#1a1a1a', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#097355'} onMouseLeave={(e) => e.target.style.color = '#1a1a1a'}>(+44) 03331380001</a>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '25px', padding: '20px', backgroundColor: '#f9fafb', borderRadius: '16px', border: '1px solid #eaeaea' }}>
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(9, 115, 85, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className="fa-regular fa-envelope" style={{ fontSize: '28px', color: '#097355' }}></i>
              </div>
              <div>
                <h4 style={{ fontSize: '20px', fontWeight: '800', color: '#1a1a1a', marginBottom: '8px' }}>Email Address</h4>
                <a href="mailto:info@ggsutilities.com" style={{ fontSize: '18px', color: '#1a1a1a', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#097355'} onMouseLeave={(e) => e.target.style.color = '#1a1a1a'}>info@ggsutilities.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="animate-fade-up" style={{ 
          flex: '1 1 500px', 
          backgroundColor: '#fff', 
          padding: '50px', 
          borderRadius: '24px', 
          position: 'relative',
          border: '1px solid #eaeaea',
          boxShadow: '0 20px 50px rgba(0,0,0,0.08)' 
        }}>
          <h2 style={{ fontSize: '32px', color: '#1a1a1a', marginBottom: '40px', fontWeight: 'bold' }}>Fill out the form</h2>
        
        {isSuccess ? (
          <div style={{ textAlign: 'center', padding: '40px 20px', color: '#1a1a1a' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#097355', marginBottom: '25px', boxShadow: '0 10px 30px rgba(9, 115, 85, 0.3)' }}>
              <i className="fa-solid fa-check" style={{ fontSize: '40px', color: '#fff' }}></i>
            </div>
            <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '15px' }}>Thank you for filling the form</h3>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.6', maxWidth: '400px', margin: '0 auto 30px' }}>
              We have received your request successfully. Our team will get back to you shortly.
            </p>
            <button onClick={() => setIsSuccess(false)} style={{ backgroundColor: 'transparent', border: '2px solid #019267', color: '#019267', padding: '12px 30px', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold', fontSize: '15px', transition: 'all 0.3s' }}>
              Submit Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '25px' }}>
            <label style={labelStyle}>Business Name <span style={asteriskStyle}>*</span></label>
            <input 
              type="text" 
              name="businessName" 
              required 
              style={inputStyle} 
              value={formData.businessName}
              onChange={handleChange}
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={labelStyle}>Contact Name <span style={asteriskStyle}>*</span></label>
            <input 
              type="text" 
              name="contactName" 
              required 
              style={inputStyle} 
              value={formData.contactName}
              onChange={handleChange}
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={labelStyle}>Direct Number <span style={asteriskStyle}>*</span></label>
            <PhoneInput
              country={'in'}
              value={formData.phoneNumber}
              onChange={(phone) => setFormData({ ...formData, phoneNumber: phone })}
              inputStyle={{
                ...inputStyle,
                paddingLeft: '50px',
                width: '100%',
                backgroundColor: '#f9fafb',
              }}
              buttonStyle={{
                border: '1px solid #ddd',
                backgroundColor: '#f9fafb',
                borderRadius: '8px 0 0 8px',
              }}
              containerStyle={{
                width: '100%',
              }}
              dropdownStyle={{
                color: '#000',
              }}
              inputProps={{
                name: 'phoneNumber',
                required: true,
              }}
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={labelStyle}>Email Address <span style={asteriskStyle}>*</span></label>
            <input 
              type="email" 
              name="emailAddress" 
              required 
              style={inputStyle} 
              value={formData.emailAddress}
              onChange={handleChange}
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={labelStyle}>Business Address <span style={asteriskStyle}>*</span></label>
            <input 
              type="text" 
              name="businessAddress" 
              required 
              style={inputStyle} 
              value={formData.businessAddress}
              onChange={handleChange}
            />
          </div>

          <div style={{ marginBottom: '40px' }}>
            <label style={labelStyle}>Products <span style={asteriskStyle}>*</span></label>
            <select 
              name="products" 
              required 
              style={{ ...inputStyle, color: formData.products ? '#1a1a1a' : '#666' }}
              value={formData.products}
              onChange={handleChange}
            >
              <option value="" disabled hidden>Select a product...</option>
              <option value="water" style={{ color: '#000' }}>Water</option>
              <option value="gas" style={{ color: '#000' }}>Gas</option>
              <option value="electricity" style={{ color: '#000' }}>Electricity</option>
              <option value="chp-solutions" style={{ color: '#000' }}>CHP Solutions</option>
              <option value="commercial-heat-pumps" style={{ color: '#000' }}>Commercial Heat Pumps</option>
              <option value="commercial-solar-panels" style={{ color: '#000' }}>Commercial Solar Panels</option>
              <option value="microgrid-solutions" style={{ color: '#000' }}>Microgrid</option>
              <option value="business-broadband" style={{ color: '#000' }}>Business Broadband</option>
              <option value="business-voip-services" style={{ color: '#000' }}>Business VOIP Services</option>
              <option value="leased-lines" style={{ color: '#000' }}>Leased Lines</option>
              <option value="business-mobile" style={{ color: '#000' }}>Business Mobile</option>
            </select>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <label style={labelStyle}>Message</label>
            <textarea 
              name="message" 
              rows="4"
              style={{ ...inputStyle, resize: 'vertical' }} 
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you?"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="ggs-btn" 
            disabled={isSubmitting}
            style={{ width: '100%', padding: '16px', fontSize: '16px', display: 'flex', justifyContent: 'center', backgroundColor: isSubmitting ? '#016b4a' : '#019267', border: 'none', color: '#fff', borderRadius: '4px', cursor: isSubmitting ? 'not-allowed' : 'pointer', fontWeight: 'bold' }}
          >
            {isSubmitting ? 'Sending...' : 'Submit Request'}
          </button>
        </form>
        )}
        </div>
      </div>
    </section>
  );
}


export default function Contact() {
  useSEO("Contact GGS Utilities | Get Your Free Energy Quote", "Get in touch with GGS Utilities today for business energy, water, and telecom solutions. Contact our expert team for a free, no-obligation quote.");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <PageBanner 
        title="Contact Us" 
        description="Our team is here to help you with any issues or inquiries." 
        image="/consultant_meeting.png" 
      />
      <ContactForm />
    </div>
  );
}
