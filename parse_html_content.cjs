const fs = require('fs');

const files = [
  { name: 'broadband', path: 'C:\\Users\\ADMIN\\.gemini\\antigravity-ide\\brain\\7aa4aad8-9df2-4056-b4a0-3d1e2bd17937\\.system_generated\\steps\\216\\content.md' },
  { name: 'voip', path: 'C:\\Users\\ADMIN\\.gemini\\antigravity-ide\\brain\\7aa4aad8-9df2-4056-b4a0-3d1e2bd17937\\.system_generated\\steps\\217\\content.md' },
  { name: 'leased_lines', path: 'C:\\Users\\ADMIN\\.gemini\\antigravity-ide\\brain\\7aa4aad8-9df2-4056-b4a0-3d1e2bd17937\\.system_generated\\steps\\218\\content.md' },
  { name: 'mobile', path: 'C:\\Users\\ADMIN\\.gemini\\antigravity-ide\\brain\\7aa4aad8-9df2-4056-b4a0-3d1e2bd17937\\.system_generated\\steps\\219\\content.md' },
  { name: 'packages', path: 'C:\\Users\\ADMIN\\.gemini\\antigravity-ide\\brain\\7aa4aad8-9df2-4056-b4a0-3d1e2bd17937\\.system_generated\\steps\\220\\content.md' }
];

let output = '';

files.forEach(file => {
  try {
    const html = fs.readFileSync(file.path, 'utf-8');
    output += `\n\n==== ${file.name.toUpperCase()} ====\n\n`;
    
    // Extract text from h2, h3, h4, and p tags
    const regex = /<(h[234]|p)[^>]*>(.*?)<\/\1>/gi;
    let match;
    while ((match = regex.exec(html)) !== null) {
      // Remove inner tags and decode basic HTML entities
      let text = match[2].replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
      if (text.length > 5 && !text.includes('placeholder') && !text.includes('elementor')) {
         output += `${match[1].toUpperCase()}: ${text}\n`;
      }
    }
  } catch (e) {
    output += `Error reading ${file.name}: ${e.message}\n`;
  }
});

fs.writeFileSync('extracted_telecoms_content.txt', output);
console.log('Extracted to extracted_telecoms_content.txt');
