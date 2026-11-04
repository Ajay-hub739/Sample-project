import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CANONICAL_URLS = {
  '/': 'https://ggsutilities.com/',
  '/about-us': 'https://ggsutilities.com/about-us/',
  '/contact-us': 'https://ggsutilities.com/contact-us/',
  '/business-energy': 'https://ggsutilities.com/business-energy/',
  '/electricity-energy': 'https://ggsutilities.com/electricity-energy/',
  '/business-gas': 'https://ggsutilities.com/business-gas/',
  '/green-energy-solutions': 'https://ggsutilities.com/green-energy-solutions/',
  '/chp-solutions': 'https://ggsutilities.com/chp-solutions/',
  '/commercial-heat-pumps': 'https://ggsutilities.com/commercial-heat-pumps/',
  '/commercial-solar-panels': 'https://ggsutilities.com/commercial-solar-panels/',
  '/microgrid-solutions': 'https://ggsutilities.com/microgrid-solutions/',
  '/net-zero-solutions': 'https://ggsutilities.com/net-zero-solutions/',
  '/telecoms': 'https://ggsutilities.com/telecoms/',
  '/telecommunications/business-broadband': 'https://ggsutilities.com/telecommunications/business-broadband/',
  '/telecommunications/business-voip': 'https://ggsutilities.com/telecommunications/business-voip/',
  '/telecommunications/leased-lines': 'https://ggsutilities.com/telecommunications/leased-lines/',
  '/telecommunications/business-mobile': 'https://ggsutilities.com/telecommunications/business-mobile/',
  '/telecommunications/business-packages': 'https://ggsutilities.com/telecommunications/business-packages/',
  '/broadband-services': 'https://ggsutilities.com/broadband-services/',
  '/mobile-solutions': 'https://ggsutilities.com/mobile-solutions/',
  '/new-connections-water': 'https://ggsutilities.com/new-connections-water/',
  '/blog': 'https://ggsutilities.com/blog/',
  '/partners': 'https://ggsutilities.com/partners/',
  '/terms-and-conditions': 'https://ggsutilities.com/terms-and-conditions/',
  '/privacy-policy': 'https://ggsutilities.com/privacy-policy/',
  '/complaints-handling-procedure': 'https://ggsutilities.com/complaints-handling-procedure/',
};

function useSEO(title, description, keywords) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (title) {
      const titleTags = document.head.querySelectorAll('title');
      let titleTag = titleTags[0];

      titleTags.forEach((tag, index) => {
        if (index > 0) tag.remove();
      });

      if (!titleTag) {
        titleTag = document.createElement('title');
        document.head.appendChild(titleTag);
      }

      titleTag.textContent = title;
    }

    const updateMetaTag = (name, content) => {
      const metaTags = document.head.querySelectorAll(`meta[name="${name}"]`);
      let metaTag = metaTags[0];

      metaTags.forEach((tag, index) => {
        if (index > 0) tag.remove();
      });

      if (!content) {
        metaTag?.remove();
        return;
      }

      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.name = name;
        document.head.appendChild(metaTag);
      }

      metaTag.content = content;
    };

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    const normalizedPath = pathname === '/' ? '/' : `/${pathname.replace(/^\/+|\/+$/g, '')}`;
    const canonicalUrl = CANONICAL_URLS[normalizedPath]
      || `https://ggsutilities.com${normalizedPath === '/' ? '/' : `${normalizedPath}/`}`;
    const canonicalLinks = document.head.querySelectorAll('link[rel="canonical"]');
    let canonicalLink = canonicalLinks[0];

    canonicalLinks.forEach((link, index) => {
      if (index > 0) link.remove();
    });

    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }

    canonicalLink.href = canonicalUrl;
  }, [title, description, keywords, pathname]);
}

export default useSEO;
