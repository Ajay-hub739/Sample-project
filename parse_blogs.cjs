const cheerio = require('cheerio');
const fs = require('fs');

const files = [
  'C:\\Users\\ADMIN\\.gemini\\antigravity-ide\\brain\\0309ddeb-b2eb-4b45-af83-3b8c27a970eb\\.system_generated\\steps\\975\\content.md',
  'C:\\Users\\ADMIN\\.gemini\\antigravity-ide\\brain\\0309ddeb-b2eb-4b45-af83-3b8c27a970eb\\.system_generated\\steps\\976\\content.md',
  'C:\\Users\\ADMIN\\.gemini\\antigravity-ide\\brain\\0309ddeb-b2eb-4b45-af83-3b8c27a970eb\\.system_generated\\steps\\977\\content.md'
];

for (let i = 0; i < files.length; i++) {
  const html = fs.readFileSync(files[i], 'utf8');
  const $ = cheerio.load(html);
  
  $('script, style, iframe, form, header, footer').remove();
  
  console.log(`\n\n=== BLOG ${i + 2} ===`);
  
  // Try to find the main content block
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
