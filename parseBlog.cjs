const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join('..', 'Blog - GGS utilities.html'), 'utf8');
const regex = /<h2 class="entry-title">\s*<a href="([^"]+)">([^<]+)<\/a>\s*<\/h2>[\s\S]*?<div class="jeg_post_excerpt">\s*<p>([\s\S]*?)<\/p>/g;
let match;
while ((match = regex.exec(html)) !== null) {
  console.log('Title:', match[2].trim());
  console.log('Link:', match[1]);
  console.log('Excerpt:', match[3].trim());
  console.log('---');
}
