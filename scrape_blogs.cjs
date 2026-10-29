const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');

const urls = [
  'https://ggsutilities.com/how-large-businesses-can-achieve-energy-independence-with-ggs-utilities-centrica/',
  'https://ggsutilities.com/choosing-the-right-business-telecom-provider-key-factors-to-consider/',
  'https://ggsutilities.com/how-smart-energy-procurement-can-save-your-business-thousands-annually/'
];

async function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function scrape() {
  for (let i = 0; i < urls.length; i++) {
    const html = await fetchUrl(urls[i]);
    const $ = cheerio.load(html);
    
    // Most Elementor blogs have content in .elementor-widget-theme-post-content or a main <article> tag
    let content = $('.elementor-widget-theme-post-content').html();
    if (!content) content = $('article').html();
    if (!content) content = $('.post-content').html();
    
    // Strip unnecessary scripts/styles
    if (content) {
      const $content = cheerio.load(content);
      $content('script, style, iframe, form, .elementor-author-box, .elementor-post-navigation').remove();
      console.log(`\n\n--- BLOG ${i + 2} ---`);
      
      // Just extract text grouped by paragraphs and headings
      $content('h2, h3, p, ul').each((i, el) => {
        if (el.name === 'h2') console.log('\n## ' + $content(el).text().trim());
        else if (el.name === 'h3') console.log('\n### ' + $content(el).text().trim());
        else if (el.name === 'p') console.log($content(el).text().trim());
        else if (el.name === 'ul') {
          $content(el).find('li').each((j, li) => {
            console.log('- ' + $content(li).text().trim().replace(/\s+/g, ' '));
          });
        }
      });
    }
  }
}

scrape().catch(console.error);
