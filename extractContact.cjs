const fs = require('fs');
const html = fs.readFileSync('../contact page ggs.html', 'utf8');
const text = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                 .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                 .replace(/<[^>]+>/g, ' ')
                 .replace(/\s+/g, ' ')
                 .trim()
                 .substring(0, 3000);
console.log(text);
