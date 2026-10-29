import React from 'react';

export default function PageBanner({ title, description, image, customHeight = '400px' }) {
  return (
    <section className="page-banner" style={{
      position: 'relative',
      height: customHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: '#fff',
      padding: '0 20px',
      overflow: 'hidden',
      marginTop: '80px' // Offset the fixed header height
    }}>
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `url('${image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 1
      }}></div>
      
      {/* Dark Overlay for Readability */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(10, 46, 36, 0.75)', // GGS dark teal overlay
        zIndex: 2
      }}></div>

      {/* Content Container */}
      <div style={{ position: 'relative', zIndex: 3, maxWidth: '850px' }}>
        <h1 className="animate-fade-down" style={{ 
          fontSize: '48px', 
          fontWeight: '800', 
          marginBottom: '20px',
          lineHeight: '1.2'
        }}>
          {title}
        </h1>
        {description && (
          <p className="animate-fade-up" style={{ 
            fontSize: '18px', 
            opacity: 0.95,
            lineHeight: '1.6'
          }}>
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
