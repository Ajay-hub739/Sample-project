const cheerio = require('cheerio');
const fs = require('fs');

const file = 'C:\\Users\\ADMIN\\.gemini\\antigravity-ide\\brain\\0309ddeb-b2eb-4b45-af83-3b8c27a970eb\\.system_generated\\steps\\975\\content.md';
const html = fs.readFileSync(file, 'utf8');

const $ = cheerio.load(html);
$('script, style, iframe, form, header, footer').remove();

console.log($('body').text().replace(/\s+/g, ' ').trim());
