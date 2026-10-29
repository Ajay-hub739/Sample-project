import useSEO from '../hooks/useSEO';
import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { blogPosts } from '../data/blogData';

/* 2. Blog Grid Section */
function BlogGrid() {
  const posts = blogPosts;

  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <section className="be-services-section" style={{ backgroundColor: '#f9f9f9', padding: '80px 0' }}>
      <div className="section-container">
        
        <h2 className="be-services-title center animate-fade-up" style={{ marginBottom: '50px', color: '#0a2e24' }}>Featured Article</h2>

        {/* Featured Post */}
        <div className="featured-blog-card animate-fade-up" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          backgroundColor: '#fff', 
          borderRadius: '16px', 
          overflow: 'hidden', 
          boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
          marginBottom: '80px',
          border: '1px solid #eaeaea'
        }}>
          <div style={{ position: 'relative', overflow: 'hidden', minHeight: '350px' }}>
            <Link to={`/blog/${featuredPost.slug}`} style={{ display: 'block', height: '100%' }}>
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </Link>
          </div>
          <div style={{ padding: '60px 50px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ color: '#019267', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>
              {featuredPost.date}
            </p>
            <Link to={`/blog/${featuredPost.slug}`} style={{ textDecoration: 'none' }}>
              <h3 style={{ fontSize: '32px', color: '#111', marginBottom: '20px', lineHeight: '1.3', fontWeight: 'bold' }}>
                {featuredPost.title}
              </h3>
            </Link>
            <p style={{ color: '#444', fontSize: '16px', lineHeight: '1.7', marginBottom: '35px' }}>
              {featuredPost.excerpt}
            </p>
            <Link 
              to={`/blog/${featuredPost.slug}`}
              className="ggs-btn" 
              style={{ alignSelf: 'flex-start', padding: '12px 30px', fontSize: '15px' }}
            >
              Read Article
            </Link>
          </div>
        </div>

        {/* Regular Posts Grid */}
        <h2 className="be-services-title center animate-fade-up" style={{ marginBottom: '50px', color: '#0a2e24' }}>More News & Insights</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {regularPosts.map((post, i) => (
            <div key={i} className="blog-card animate-fade-up" style={{ 
              backgroundColor: '#fff', 
              borderRadius: '16px', 
              overflow: 'hidden', 
              boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
              border: '1px solid #eaeaea',
              display: 'flex',
              flexDirection: 'column',
              animationDelay: `${(i + 1) * 100}ms`
            }}>
              <Link to={`/blog/${post.slug}`} style={{ display: 'block', overflow: 'hidden', height: '240px' }}>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </Link>
              <div style={{ padding: '35px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ color: '#019267', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>{post.date}</p>
                <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <h3 style={{ fontSize: '22px', color: '#111', marginBottom: '15px', lineHeight: '1.4', fontWeight: 'bold' }}>
                    {post.title}
                  </h3>
                </Link>
                <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.6', marginBottom: '25px', flex: 1 }}>
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="ggs-btn" 
                  style={{ alignSelf: 'flex-start', padding: '10px 20px', fontSize: '14px' }}
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Blog() {
  useSEO("Energy & Utilities Blog | Insights & News | GGS Utilities", "Read the latest news, insights, and expert tips on business energy, sustainability, and utility management on the GGS Utilities blog.");
  // Trigger scroll animations specifically on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      const event = new Event('scroll');
      window.dispatchEvent(event);
    }, 100);
  }, []);

  return (
    <div className="blog-page">
      <PageBanner 
        title="The GGS Utilities Blog" 
        description="Stay updated with the latest industry trends, sustainability news, and expert insights to help your business manage energy and telecom solutions effectively." 
        image="/blog_hero.png" 
      />
      <BlogGrid />
    </div>
  );
}
