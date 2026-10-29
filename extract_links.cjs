const fs = require('fs');
const html = fs.readFileSync('../Blog - GGS utilities.html', 'utf8');

const regex = /<h3[^>]*>[\s\S]*?<a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>[\s\S]*?<\/h3>/g;
let match;
while ((match = regex.exec(html)) !== null) {
    console.log("H3 LINK:", match[1], match[2].trim());
}

const h2regex = /<h2[^>]*>[\s\S]*?<a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>[\s\S]*?<\/h2>/g;
while ((match = h2regex.exec(html)) !== null) {
    console.log("H2 LINK:", match[1], match[2].trim());
}
