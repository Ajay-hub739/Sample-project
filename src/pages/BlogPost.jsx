import useSEO from '../hooks/useSEO';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { fetchBlogPosts } from '../data/blogApi';

export default function BlogPost() {
  useSEO("Blog Article | GGS Utilities", "Read our latest insights and expert articles on business energy, water solutions, and utility management from GGS Utilities.");
  const { slug } = useParams();
  const [result, setResult] = useState(null);

  // Trigger scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const controller = new AbortController();

    fetchBlogPosts({ slug, signal: controller.signal })
      .then((posts) => {
        setResult({ slug, post: posts[0] ?? null, error: false });
      })
      .catch((fetchError) => {
        if (!controller.signal.aborted) {
          console.error('Failed to load WordPress blog post:', fetchError);
          setResult({ slug, post: null, error: true });
        }
      });

    return () => controller.abort();
  }, [slug]);

  const loading = result?.slug !== slug;
  const error = !loading && result.error;
  const post = !loading && !error ? result.post : null;

  if (loading) {
    return <p role="status" style={{ padding: '150px 20px', textAlign: 'center' }}>Loading article...</p>;
  }

  if (error) {
    return <p role="alert" style={{ padding: '150px 20px', textAlign: 'center' }}>Unable to load this article right now. Please try again later.</p>;
  }

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
