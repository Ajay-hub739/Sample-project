import React from 'react';
import SeasonCard from '../components/SeasonCard';
import { biggBossSeasons } from '../data/biggBossData';
import './BiggBoss.css';

export default function BiggBossHistory() {
  return (
    <div className="bb-page-container">
      <section className="bb-hero-section animate-fade-down">
        <div className="bb-hero-content">
          <h1 className="bb-title">
            <span className="highlight-gold-text">Bigg Boss</span> Telugu
          </h1>
          <p className="bb-subtitle">The Complete History of the Biggest Reality Show in Telugu Television (Seasons 1-9)</p>
        </div>
      </section>

      <section className="bb-seasons-section">
        <div className="bb-grid">
          {biggBossSeasons.map((seasonData) => (
            <SeasonCard key={seasonData.season} {...seasonData} />
          ))}
        </div>
      </section>
    </div>
  );
}
