import React from 'react';
import { Link } from 'react-router-dom';

export default function UnifiedCTA() {
  return (
    <section className="unified-cta-section">
      <div className="section-container unified-cta-inner">
        <div className="unified-cta-content animate-fade-up">
          <h2 className="unified-cta-title">Power Up Your Utilities Today!</h2>
          <p className="unified-cta-text">
            Make the Switch to GGS Utilities for Reliable, Efficient, and Eco-Friendly Services that Fit your Lifestyle.
          </p>
          <Link to="/contact-us" className="unified-cta-btn">
            CONTACT US! <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
