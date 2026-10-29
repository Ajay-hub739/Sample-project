import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home, { Header, Footer } from './pages/Home';
import BusinessEnergy from './pages/BusinessEnergy';
import GreenEnergy from './pages/GreenEnergy';
import BusinessElectricity from './pages/BusinessElectricity';
import BusinessGas from './pages/BusinessGas';
import NewConnectionsWater from './pages/NewConnectionsWater';
import BroadbandServices from './pages/BroadbandServices';
import MobileSolutions from './pages/MobileSolutions';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Partners from './pages/Partners';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ComplaintsHandlingProcedure from './pages/ComplaintsHandlingProcedure';
import CHP from './pages/CHP';
import CommercialHeatPumps from './pages/CommercialHeatPumps';
import CommercialSolarPanels from './pages/CommercialSolarPanels';
import MicrogridSolutions from './pages/MicrogridSolutions';
import NetZeroSolutions from './pages/NetZeroSolutions';
import Telecoms from './pages/Telecoms';
import BusinessBroadbandTelecoms from './pages/BusinessBroadbandTelecoms';
import BusinessVOIPTelecoms from './pages/BusinessVOIPTelecoms';
import LeasedLinesTelecoms from './pages/LeasedLinesTelecoms';
import BusinessMobileTelecoms from './pages/BusinessMobileTelecoms';
import BusinessPackagesTelecoms from './pages/BusinessPackagesTelecoms';

import BiggBossHistory from './pages/BiggBossHistory';
import './index.css';

/* ─── SCROLL ANIMATION HOOK ─── */
function useScrollAnimation() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const timeoutId = setTimeout(() => {
      // 1. Give h1s a slide-down animation by default (if no other animate class is set)
      document.querySelectorAll('h1').forEach(el => {
        if (!el.className.includes('animate-fade-')) el.classList.add('animate-fade-down');
      });

      // 2. Give h2s and h3s a slide-right or slide-left animation alternately
      document.querySelectorAll('h2, h3').forEach((el, index) => {
        if (!el.className.includes('animate-fade-') && !el.classList.contains('animate-stagger')) {
          el.classList.add(index % 2 === 0 ? 'animate-fade-right' : 'animate-fade-left');
        }
      });

      // 3. Give all cards a slide-up animation
      document.querySelectorAll('[class*="card"]').forEach(el => {
        if (!el.className.includes('animate-fade-') && !el.classList.contains('animate-stagger')) {
          el.classList.add('animate-fade-up');
        }
      });

      // Observe ALL animated elements
      const elements = document.querySelectorAll('.animate-fade-up, .animate-fade-down, .animate-fade-left, .animate-fade-right, .animate-stagger');
      elements.forEach((el) => observer.observe(el));
    }, 200);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [pathname]);
}

/* ══════════════════════════════════════
   ROOT APP
══════════════════════════════════════ */
export default function App() {
  useScrollAnimation();
  return (
    <div className="app-wrapper">

      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business-energy" element={<BusinessEnergy />} />
          <Route path="/green-energy-solutions" element={<GreenEnergy />} />
          <Route path="/electricity-energy" element={<BusinessElectricity />} />
          <Route path="/business-gas" element={<BusinessGas />} />
          <Route path="/chp-solutions" element={<CHP />} />
          <Route path="/commercial-heat-pumps" element={<CommercialHeatPumps />} />
          <Route path="/commercial-solar-panels" element={<CommercialSolarPanels />} />
          <Route path="/microgrid-solutions" element={<MicrogridSolutions />} />
          <Route path="/net-zero-solutions" element={<NetZeroSolutions />} />
          <Route path="/telecoms" element={<Telecoms />} />
          <Route path="/telecommunications/business-broadband" element={<BusinessBroadbandTelecoms />} />
          <Route path="/telecommunications/business-voip" element={<BusinessVOIPTelecoms />} />
          <Route path="/telecommunications/leased-lines" element={<LeasedLinesTelecoms />} />
          <Route path="/telecommunications/business-mobile" element={<BusinessMobileTelecoms />} />
          <Route path="/telecommunications/business-packages" element={<BusinessPackagesTelecoms />} />

          <Route path="/new-connections-water" element={<NewConnectionsWater />} />
          <Route path="/broadband-services" element={<BroadbandServices />} />
          <Route path="/mobile-solutions" element={<MobileSolutions />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/complaints-handling-procedure" element={<ComplaintsHandlingProcedure />} />

          <Route path="/bigg-boss" element={<BiggBossHistory />} />
          {/* Catch-all for sub-pages pointing to the placeholder for now */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
