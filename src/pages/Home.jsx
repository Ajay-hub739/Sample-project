import useSEO from '../hooks/useSEO';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import '../index.css';
import UnifiedCTA from '../components/UnifiedCTA';

/* ─── SCROLL ANIMATION HOOK ─── */
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ══════════════════════════════════════
   1. HEADER / NAVIGATION
══════════════════════════════════════ */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleSubMenu = (e, menuName) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      e.stopPropagation();
      setActiveSubMenu(activeSubMenu === menuName ? null : menuName);
    }
  };

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-wrap">
        {/* Logo */}
        <div className="site-logo">
          <Link to="/" className="logo-box">
            <img
              src="/Untitled design (3).png"
              alt="GGS Utilities"
              className="header-logo-img"
            />
          </Link>
        </div>

        {/* Nav */}
        <nav className={`site-nav${menuOpen ? ' open' : ''}`}>
          <ul className="nav-menu">
            <li className={`menu-item has-sub ${activeSubMenu === 'business' ? 'mobile-active' : ''}`}>
              <Link to="/business-energy" onClick={() => setMenuOpen(false)}>
                Business Energy
                <span className="mobile-toggle-arrow" onClick={(e) => toggleSubMenu(e, 'business')}>
                  <i className="fas fa-chevron-down arrow"></i>
                </span>
              </Link>
              <ul className="sub-menu">
                <li><Link to="/electricity-energy" onClick={() => setMenuOpen(false)}>Electricity</Link></li>
                <li><Link to="/business-gas" onClick={() => setMenuOpen(false)}>Gas</Link></li>
                <li><Link to="/new-connections-water" onClick={() => setMenuOpen(false)}>Water</Link></li>
              </ul>
            </li>
            <li className={`menu-item has-sub ${activeSubMenu === 'green' ? 'mobile-active' : ''}`}>
              <Link to="/green-energy-solutions" onClick={() => setMenuOpen(false)}>
                Green Energy
                <span className="mobile-toggle-arrow" onClick={(e) => toggleSubMenu(e, 'green')}>
                  <i className="fas fa-chevron-down arrow"></i>
                </span>
              </Link>
              <ul className="sub-menu">
                <li><Link to="/chp-solutions" onClick={() => setMenuOpen(false)}>CHP Solutions</Link></li>
                <li><Link to="/commercial-heat-pumps" onClick={() => setMenuOpen(false)}>Commercial Heat Pumps</Link></li>
                <li><Link to="/commercial-solar-panels" onClick={() => setMenuOpen(false)}>Commercial Solar Panels</Link></li>
                <li><Link to="/microgrid-solutions" onClick={() => setMenuOpen(false)}>Microgrid</Link></li>
                <li><Link to="/net-zero-solutions" onClick={() => setMenuOpen(false)}>Net Zero</Link></li>
              </ul>
            </li>
            <li className={`menu-item has-sub ${activeSubMenu === 'telecoms' ? 'mobile-active' : ''}`}>
              <Link to="/telecoms" onClick={() => setMenuOpen(false)}>
                Telecommunications
                <span className="mobile-toggle-arrow" onClick={(e) => toggleSubMenu(e, 'telecoms')}>
                  <i className="fas fa-chevron-down arrow"></i>
                </span>
              </Link>
              <ul className="sub-menu">
                <li><Link to="/telecommunications/business-broadband" onClick={() => setMenuOpen(false)}>Business Broadband</Link></li>
                <li><Link to="/telecommunications/business-voip" onClick={() => setMenuOpen(false)}>Business VOIP Services</Link></li>
                <li><Link to="/telecommunications/leased-lines" onClick={() => setMenuOpen(false)}>Leased Lines</Link></li>
                <li><Link to="/telecommunications/business-mobile" onClick={() => setMenuOpen(false)}>Business Mobile</Link></li>

              </ul>
            </li>
            <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
            <li><Link to="/contact-us" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
          </ul>
        </nav>

        <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Link to="/contact-us" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/logo to add.png" alt="Get Started" style={{ height: '50px', objectFit: 'contain' }} />
          </Link>
          <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}

/* ══════════════════════════════════════
   2. HERO BANNER — Split layout,
      left image, right text + stats
══════════════════════════════════════ */
function Hero() {
  return (
    <section className="hero-split">
      {/* Left — Image */}
      <div className="hero-split-image">
        <img src="/ggs-hero-image.png" alt="GGS Utilities Energy Consultancy" />
      </div>

      {/* Right — Content */}
      <div className="hero-split-content">
        <h1 className="hero-split-heading">
          A New Standard of <span className="hero-accent">Energy Excellence</span>
        </h1>
        <p className="hero-split-desc">
          The UK's leading business energy and water consultancy powering sustainable growth for enterprises nationwide.
        </p>
        <div className="hero-split-actions">
          <Link to="/business-energy" className="hero-split-btn-primary">
            View All Services <span>&darr;</span>
          </Link>
        </div>

        {/* Bullet points */}
        <ul className="hero-split-bullets">
          <li><i className="fas fa-check-circle"></i> Business Electricity &amp; Gas Solutions</li>
          <li><i className="fas fa-check-circle"></i> Green Energy &amp; Sustainability</li>
          <li><i className="fas fa-check-circle"></i> Water &amp; Waste Management</li>
          <li><i className="fas fa-check-circle"></i> New Connections &amp; Payment Solutions</li>
        </ul>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   3. PARTNERS CAROUSEL — 19 logos, 4 per view
      bordered cards, dots below, arrows inside
══════════════════════════════════════ */
function Partners() {
  const logos = [
    'Untitled-design-10.png', 'Untitled-design-17.png', 'Untitled-design-16.png',
    'Untitled-design-14.png', 'Untitled-design-13.png', 'Untitled-design-12.png',
    'Untitled-design-11.png', 'Untitled-design-9.png', 'Untitled-design-8.png',
    'Untitled-design-45.png', 'Untitled-design-44.png', 'Untitled-design-43.png',
    'Untitled-design-42.png', 'Untitled-design-41.png', 'Untitled-design-40.png',
    'Untitled-design-39.png', 'Untitled-design-38.png', 'Untitled-design-46.png',
    'Untitled-design-58.png',
  ];
  return (
    <section className="partners-section">
      <div className="section-container">
        <h2 className="partners-title fade-up">Our Partners</h2>
        <div className="partners-wrap">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={4}
            spaceBetween={11}
            loop={true}
            autoplay={{ delay: 1500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            speed={800}
            navigation={{ prevEl: '.p-prev', nextEl: '.p-next' }}
            pagination={{ clickable: true, el: '.p-dots' }}
            breakpoints={{ 0: { slidesPerView: 1 }, 480: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }}
            className="partners-swiper"
          >
            {logos.map((logo, i) => (
              <SwiperSlide key={i}>
                <figure className="partner-card">
                  <img src={`/${logo}`} alt={`Partner ${i + 1}`} className="partner-img" />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="p-prev p-nav-btn">
            <svg viewBox="0 0 1000 1000"><path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z" /></svg>
          </div>
          <div className="p-next p-nav-btn">
            <svg viewBox="0 0 1000 1000"><path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z" /></svg>
          </div>
        </div>
        <div className="p-dots" />
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   4. INTRODUCTION SECTION
   White bg + particle wave watermark
   Text content LEFT side only (~55% width), right is empty
══════════════════════════════════════ */
function Introduction() {
  return (
    <section className="intro-section">
      <div className="intro-inner">
        <div className="intro-text-col">
          <span className="intro-label fade-up">Introduction</span>
          <p className="intro-body fade-up">
            At <strong>GGS Utilities</strong>, we are dedicated to simplifying how you manage utilities.
            From energy to broadband payments to mobile, we offer tailored solutions that help businesses
            and households save time, reduce costs, and achieve operational efficiency. With a focus on
            sustainability and innovation, we're here to support you at every step
          </p>
          <Link to="/about-us" className="intro-btn fade-up">
            ABOUT US <span className="intro-btn-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}


/* ══════════════════════════════════════
   5. WHY CHOOSE GGS — dark bg with particle wave bg
      Title + 4 icon-boxes (green + white alternating)
══════════════════════════════════════ */
function WhyChoose() {
  const cards = [
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="#ee7b1c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="why-svg-icon"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>,
      title: 'Comprehensive\nSolutions',
      text: 'All your utility needs\nin one place.'
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="#ee7b1c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="why-svg-icon"><circle cx="12" cy="12" r="8"></circle><path d="M12 8v8"></path><path d="M10 10h4"></path><path d="M10 14h4"></path></svg>,
      title: 'Transparent Pricing',
      text: 'No\nhidden fees or\nsurprises.'
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="#ee7b1c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="why-svg-icon"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
      title: 'Sustainability First',
      text: 'Green energy options\nto reduce your carbon\nfootprint'
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="#ee7b1c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="why-svg-icon"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path><circle cx="15" cy="14" r="2"></circle><path d="M15 16v2a2 2 0 0 1-2 2h-2"></path></svg>,
      title: '24/7 Support',
      text: 'Reliable customer\nservice whenever you\nneed it'
    },
  ];
  return (
    <section className="why-section">
      <div className="section-container">
        <div className="why-header">
          <span className="why-label">WHY CHOOSE GGS UTILITIES?</span>
          <h1 className="why-title">We Start By Understanding Your Unique<br />Needs And Goals.</h1>
        </div>
        <div className="why-cards">
          {cards.map((c, i) => (
            <div
              key={i}
              className={`why-card fade-up ${i % 2 === 0 ? 'why-card--green' : 'why-card--white'}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="why-icon">{c.icon}</div>
              <h3 className="why-card-title">{c.title}</h3>
              <p className="why-card-text">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   6. SERVICES GRID — 2×2 grid with service icon-boxes
      Green + white alternating cards
══════════════════════════════════════ */
function Services() {
  const services = [
    { img: '/green-energy_12701686.png', title: 'Business Energy', text: 'GGS Utilities provides tailored energy plans to optimize usage and cut costs.', link: '/business-energy', green: true },
    { img: '/green-energy_13323754.png', title: 'Green Energy', text: 'Explore sustainable green energy solutions including CHP, solar panels, and heat pumps.', link: '/green-energy-solutions', green: false },
    { img: '/green-energy_13323754.png', title: 'Business Electricity', text: 'GGS Utilities offers competitive electricity plans to cut costs and maximize savings.', link: '/electricity-energy', green: false },
    { img: '/battery_505560.png', title: 'Business Gas', text: 'GGS Utilities offers competitive gas plans to lower your business energy costs.', link: '/business-gas', green: true },
  ];

  return (
    <section className="services-section">
      <div className="services-grid">
        {services.map((s, i) => (
          <Link key={i} to={s.link} className={`service-card ${s.green ? 'service-card--green' : 'service-card--white'} fade-up`}>
            <div className="service-icon-wrap">
              <img src={s.img} alt={s.title} className="service-icon-img" />
            </div>
            <div className="service-text">
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}



/* ══════════════════════════════════════
   8. WHY WE STAND OUT
   Layout: Left image column, Right column with header + (2x2 grid + far right image)
══════════════════════════════════════ */
function WhyStandOut() {
  const features = [
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.5" className="standout-svg"><circle cx="12" cy="12" r="5"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path></svg>,
      title: 'Comprehensive\nSolutions',
      desc: 'We provide energy,\nwater, and gas\nservices under one\nroof, offering\nconvenience and\nseamless integration.',
      green: true
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="#097355" strokeWidth="1.5" className="standout-svg"><path d="M16 16v-4h4M8 8v4H4"></path><path d="M21 16c-1.3 3-5 5-8.5 4a9 9 0 0 1-6.5-6"></path><path d="M3 8c1.3-3 5-5 8.5-4a9 9 0 0 1 6.5 6"></path></svg>,
      title: 'Expertise You Can\nTrust',
      desc: 'With years of\nexperience, our team\nensures top-quality\nservice and\nunparalleled\nindustry knowledge.',
      green: false
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="#097355" strokeWidth="1.5" className="standout-svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>,
      title: 'Cost-Effective\nPlans',
      desc: 'Enjoy customized\npackages designed\nto suit your budget\nwithout\ncompromising on\nquality.',
      green: false
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="#097355" strokeWidth="1.5" className="standout-svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>,
      title: 'Sustainability\nFocus',
      desc: 'We prioritize eco-\nfriendly practices to\nhelp reduce\nenvironmental\nimpact and promote\ngreener living.',
      green: false
    },
  ];
  return (
    <section className="standout-section">
      <div className="standout-container">
        <div className="standout-left-col">
          {/* We use a background image for the digital globe photo */}
          <div className="standout-image-left"></div>
        </div>

        <div className="standout-right-col">
          <div className="standout-header">
            <h2 className="standout-title">Here's Why We Stand Out</h2>
            <p className="standout-sub">At GGS Utilities, we are committed to delivering reliable and efficient utility services tailored to your needs.</p>
          </div>

          <div className="standout-right-bottom">
            <div className="standout-grid">
              {features.map((f, i) => (
                <div
                  key={i}
                  className={`standout-card fade-up ${f.green ? 'standout-card--green' : 'standout-card--white'}`}
                  style={{ transitionDelay: `${i * 0.15}s` }}
                >
                  <div className="standout-icon">{f.icon}</div>
                  <h4 className="standout-card-title">{f.title}</h4>
                  <p className="standout-card-desc">{f.desc}</p>
                </div>
              ))}
            </div>
            <div className="standout-far-right">
              {/* We use a background image for the real bulb photo */}
              <div className="standout-image-right"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ══════════════════════════════════════
   10. TESTIMONIALS — dark teal bg
       Left: auto-scroll swiper (2 visible cards)
       Right: "Client Testimonials" heading + subtitle
══════════════════════════════════════ */
function Testimonials() {
  const reviews = [
    { text: "Switching to GGS Utilities was the best decision for my business. Their seamless integration of energy, water, and gas services saved me both time and money. The team is always professional and responsive to our needs!", name: 'John D', role: 'Business Owner', img: '/man_4140061.png' },
    { text: "I've been with GGS Utilities for over a year, and I'm impressed with their reliable service and cost-effective plans. Their commitment to sustainability is a huge plus for our family!", name: 'Sarah L', role: 'Home Owner', img: '/profile_11505641.png' },
    { text: "Managing multiple properties can be challenging, but GGS Utilities makes it effortless with their comprehensive solutions and excellent customer support. Highly recommend their services!", name: 'Michael R', role: 'Property Manager', img: '/man_4140061.png' },
  ];
  const Stars = () => (
    <ul className="testi-stars">
      {[...Array(5)].map((_, i) => (
        <li key={i}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" fill="#ffc107">
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
        </li>
      ))}
    </ul>
  );
  return (
    <section className="testi-section">
      <div className="testi-wrap">
        <div className="testi-slider-col">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={15}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={1000}
            breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 } }}
            className="testi-swiper"
          >
            {reviews.map((r, i) => (
              <SwiperSlide key={i}>
                <div className="testi-card">
                  <Stars />
                  <p className="testi-text">"{r.text}"</p>
                  <div className="testi-author">
                    <img src={r.img} alt={r.name} className="testi-avatar"
                      onError={(e) => { e.target.src = 'https://placehold.co/60x60/ccc/fff?text=' + r.name[0]; }} />
                    <div>
                      <strong className="testi-name">{r.name}</strong>
                      <span className="testi-role">{r.role}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="testi-header-col">
          <p className="testi-label fade-up">Client Testimonials</p>
          <h1 className="testi-title fade-up">Hear from Our Satisfied Clients</h1>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   11. FAQ — white bg, two-column accordion layout
══════════════════════════════════════ */
function FAQ() {
  const [openLeft, setOpenLeft] = useState(0);
  const [openRight, setOpenRight] = useState(0);
  const leftFAQs = [
    { q: 'What services do GGS Utilities provide?', a: 'We offer comprehensive utility services, including energy, water, and gas, tailored to meet residential and commercial needs.' },
    { q: 'Are your services eco-friendly?', a: 'Yes, we prioritize sustainability by adopting eco-conscious practices and promoting energy efficiency to reduce environmental impact.' },
    { q: 'How can I switch to GGS Utilities?', a: 'Switching is simple! Contact our team, and we\'ll guide you through the seamless onboarding process.' },
  ];
  const rightFAQs = [
    { q: 'Do you offer customized plans?', a: 'Absolutely! We provide flexible and cost-effective packages designed to suit your specific requirements and budget.' },
    { q: 'What if I face a service issue?', a: 'Our 24/7 customer support team is always available to address your concerns and ensure prompt resolution.' },
    { q: 'Do you provide services for both residential and commercial properties?', a: 'Yes, we cater to a wide range of clients, including homeowners, businesses, and property managers, with tailored solutions for each.' },
  ];
  const AccordionGroup = ({ items, openIdx, setOpen }) => (
    <div className="faq-accordion">
      {items.map((item, i) => (
        <div key={i} className={`faq-item ${openIdx === i ? 'faq-active' : ''}`}>
          <button className="faq-question" onClick={() => setOpen(openIdx === i ? -1 : i)}>
            <span>{item.q}</span>
            <span className="faq-icon">
              <i className={`fas fa-chevron-${openIdx === i ? 'up' : 'down'}`}></i>
            </span>
          </button>
          {openIdx === i && <div className="faq-answer"><p>{item.a}</p></div>}
        </div>
      ))}
    </div>
  );
  return (
    <section className="faq-section">
      <div className="section-container">
        <div className="faq-header fade-up">
          <p className="faq-label">Question Answer</p>
          <h3 className="faq-title">Frequently Asked Questions</h3>
        </div>
        <div className="faq-grid">
          <AccordionGroup items={leftFAQs} openIdx={openLeft} setOpen={setOpenLeft} />
          <AccordionGroup items={rightFAQs} openIdx={openRight} setOpen={setOpenRight} />
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   12. FOOTER
══════════════════════════════════════ */
export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="section-container footer-grid">
          {/* Column 1: Logos */}
          <div className="footer-col footer-logos">
            <Link to="/" className="logo-box">
              <img src="/Untitled design (3).png" alt="GGS Utilities" />
            </Link>
            <a href="https://www.disputeresolutionombudsman.org/" target="_blank" rel="noopener noreferrer" className="logo-box">
              <img src="/dro-logo.png" alt="DRO Dispute Resolution Ombudsman" />
            </a>
            <div className="logo-box">
              <img src="/ECA-Final-Logos-Colour-03-e1757958919526.png" alt="ECA The Energy Consultants Association" />
            </div>
            <div className="logo-box">
              <img src="/logo to add.png" alt="Partner Logo" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">&#9656; Home Page</Link></li>
              <li><Link to="/about-us">&#9656; About Us</Link></li>
              <li><Link to="/contact-us">&#9656; Contact Us</Link></li>
              <li><Link to="/partners">&#9656; Partners</Link></li>
              <li><Link to="/terms-and-conditions">&#9656; Terms and Conditions</Link></li>
              <li><Link to="/privacy-policy">&#9656; Privacy policy</Link></li>
              <li><Link to="/complaints-handling-procedure">&#9656; Complaints handling procedure</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul className="footer-links">
              <li><Link to="/business-energy">&#9656; Energy Solutions</Link></li>
              <li><Link to="/new-connections-water">&#9656; Water</Link></li>
              <li><Link to="/broadband-services">&#9656; Broadband Services</Link></li>
              <li><Link to="/mobile-solutions">&#9656; Mobile Solutions</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="footer-contact-info">
              <p><i className="fa-solid fa-location-dot"></i> 26 Haslucks Green Road, 2nd Floor, Solihull, West Midlands, B90 2EL, United Kingdom.</p>
              <p><i className="fa-solid fa-phone"></i> (+44) 03331380001</p>
              <p><i className="fa-solid fa-envelope"></i> info@ggsutilities.com</p>
            </div>
            <div className="footer-socials">
              <a href="https://www.facebook.com/ggsutilities/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/ggs.utilities/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.linkedin.com/company/ggs-utilities/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>ALL RIGHTS RESERVED GET GREEN SOLUTIONS LTD T/A GGS UTILITIES</p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/447351570176?text=Hello%20GGS%20Utilities%2C%20I%20recently%20visited%20your%20website%20and%20would%20like%20to%20inquire%20about%20your%20services.%20Could%20you%20please%20provide%20more%20information%3F%20Thank%20you." className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </>
  );
}

/* ══════════════════════════════════════
   HOME COMPONENT
══════════════════════════════════════ */
export default function Home() {
  useSEO("GGS Utilities | Reliable Energy & Water Solutions", "Discover affordable business energy, gas, water, and telecom solutions with GGS Utilities. We provide seamless connections and transparent pricing.");
  useScrollAnimation();
  return (
    <>
      <Hero />
      <Partners />
      <Introduction />
      <WhyChoose />
      <Services />

      <WhyStandOut />
      <UnifiedCTA />
      <Testimonials />
      <FAQ />
    </>
  );
}
