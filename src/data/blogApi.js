const BLOG_API_URL = 'https://blogs.ggsutilities.com/wp-json/wp/v2/posts';

function getTextFromHtml(html = '') {
  const container = document.createElement('div');
  container.innerHTML = html;
  return container.textContent?.trim() ?? '';
}

function formatPostDate(date) {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return '';
  }

  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(parsedDate);
}

function mapPost(post) {
  const media = post._embedded?.['wp:featuredmedia']?.[0];
  const image = media?.media_details?.sizes?.large?.source_url
    ?? media?.media_details?.sizes?.medium_large?.source_url
    ?? media?.source_url
    ?? '/blog_hero.png';
  const title = getTextFromHtml(post.title?.rendered) || 'Untitled article';
  const excerpt = getTextFromHtml(post.excerpt?.rendered);
  const seo = post.yoast_head_json;

  return {
    slug: post.slug,
    title,
    image,
    date: formatPostDate(post.date),
    excerpt,
    content: post.content?.rendered ?? '',
    seoTitle: getTextFromHtml(seo?.title) || `${title} | GGS Utilities`,
    seoDescription: getTextFromHtml(seo?.description) || excerpt,
  };
}

export async function fetchBlogPosts({ slug, signal } = {}) {
  const url = new URL(BLOG_API_URL);
  url.searchParams.set('_embed', '');
  url.searchParams.set('per_page', '100');

  if (slug) {
    url.searchParams.set('slug', slug);
  }

  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error(`WordPress returned HTTP ${response.status}`);
  }

  const posts = await response.json();

  if (!Array.isArray(posts)) {
    throw new Error('WordPress returned an unexpected posts response');
  }

  return posts.map(mapPost);
}
