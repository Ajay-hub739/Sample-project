const cheerio = require('cheerio');

const urls = [
  'https://ggsutilities.com/choosing-the-right-business-telecom-provider-key-factors-to-consider/',
  'https://ggsutilities.com/how-smart-energy-procurement-can-save-your-business-thousands-annually/'
];

async function run() {
  for (let i = 0; i < urls.length; i++) {
    const res = await fetch(urls[i]);
    const html = await res.text();
    const $ = cheerio.load(html);
    
    $('script, style, iframe, form, header, footer').remove();
    
    console.log(`\n\n=== BLOG ${i + 3} ===`);
    
    let $content = $('.elementor-widget-theme-post-content');
    if ($content.length === 0) $content = $('article');
    if ($content.length === 0) $content = $('.post-content');
    if ($content.length === 0) $content = $('body');

    $content.find('h2, h3, p, ul, ol').each((idx, el) => {
      const text = $(el).text().replace(/\s+/g, ' ').trim();
      if (!text) return;
      
      if (el.name === 'h2') console.log('\n## ' + text);
      else if (el.name === 'h3') console.log('\n### ' + text);
      else if (el.name === 'p') console.log('\n' + text);
      else if (el.name === 'ul' || el.name === 'ol') {
        $(el).find('li').each((j, li) => {
          console.log('- ' + $(li).text().replace(/\s+/g, ' ').trim());
        });
      }
    });
  }
}

run().catch(console.error);
