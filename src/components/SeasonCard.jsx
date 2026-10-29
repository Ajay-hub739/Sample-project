import React from 'react';

export default function SeasonCard({ season, host, winner, runnerUp, launchDate, finaleDate, days, housemates }) {
  return (
    <div className="bb-card animate-fade-up">
      <div className="bb-card-header">
        <h3 className="bb-season-title">Season {season}</h3>
        <span className="bb-badge">{days} Days</span>
      </div>
      
      <div className="bb-card-body">
        <div className="bb-info-group">
          <span className="bb-label">Host</span>
          <span className="bb-value">{host}</span>
        </div>
        
        <div className="bb-info-group highlight-gold">
          <span className="bb-label">Winner</span>
          <span className="bb-value bold">{winner}</span>
        </div>
        
        <div className="bb-info-group">
          <span className="bb-label">Runner-Up</span>
          <span className="bb-value">{runnerUp}</span>
        </div>

        <div className="bb-stats">
          <div className="bb-stat">
            <span className="bb-label">Housemates</span>
            <span className="bb-value">{housemates}</span>
          </div>
          <div className="bb-stat">
            <span className="bb-label">Timeline</span>
            <span className="bb-value small-text">{launchDate} - {finaleDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
