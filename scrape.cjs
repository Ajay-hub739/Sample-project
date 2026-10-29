const https = require('https');
https.get('https://ggsutilities.com', (res) => {
  let data = '';
  res.on('data', chunk => { data += chunk; });
  res.on('end', () => {
    const matches = data.match(/src="([^"]+\.(png|jpe?g))"/gi);
    if (matches) {
      matches.forEach(m => {
        if (m.toLowerCase().includes('woman') || m.toLowerCase().includes('hero') || m.toLowerCase().includes('cta')) {
          console.log(m);
        }
      });
    }
  });
}).on('error', err => {
  console.log('Error: ', err.message);
});
