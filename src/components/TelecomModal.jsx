import React, { useState } from 'react';
import PhoneInputModule from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneInput = PhoneInputModule.default ? PhoneInputModule.default : PhoneInputModule;

export default function TelecomModal({ isOpen, onClose }) {
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

  if (!isOpen) return null;

  return (
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
          onClick={onClose}
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
            <button onClick={() => { setIsSuccess(false); onClose(); }} style={{ backgroundColor: 'transparent', border: '2px solid #097355', color: '#097355', padding: '10px 25px', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px', transition: 'all 0.3s' }}>
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
  );
}
