import useSEO from '../hooks/useSEO';
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { blogPosts } from '../data/blogData';

export default function BlogPost() {
  useSEO("Blog Article | GGS Utilities", "Read our latest insights and expert articles on business energy, water solutions, and utility management from GGS Utilities.");
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  // Trigger scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div style={{ padding: '150px 20px', textAlign: 'center', minHeight: '60vh' }}>
        <h2 style={{ fontSize: '32px', color: '#0a2e24', marginBottom: '20px' }}>Article Not Found</h2>
        <p style={{ color: '#666', marginBottom: '30px' }}>The blog post you are looking for does not exist.</p>
        <Link to="/blog" className="ggs-btn">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="blog-post-page" style={{ backgroundColor: '#fdfdfd' }}>
      <PageBanner 
        title={post.title} 
        description={post.date} 
        image={post.image} 
      />

      {/* Article Content */}
      <section style={{ padding: '80px 20px 100px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Link to="/blog" style={{ display: 'inline-block', marginBottom: '40px', color: '#019267', textDecoration: 'none', fontWeight: '600' }}>
            <i className="fas fa-arrow-left" style={{ marginRight: '10px' }}></i> Back to All Articles
          </Link>
          
          <div 
            className="blog-content" 
            style={{ fontSize: '18px', lineHeight: '1.8', color: '#333' }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share / Footer of Post */}
          <div style={{ marginTop: '60px', paddingTop: '30px', borderTop: '1px solid #eaeaea', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 'bold', color: '#111' }}>Share this article:</span>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="#" style={{ color: '#019267', fontSize: '20px' }}><i className="fab fa-linkedin"></i></a>
              <a href="#" style={{ color: '#019267', fontSize: '20px' }}><i className="fab fa-twitter"></i></a>
              <a href="#" style={{ color: '#019267', fontSize: '20px' }}><i className="fab fa-facebook"></i></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
