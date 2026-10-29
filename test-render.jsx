import React from 'react';
import { renderToString } from 'react-dom/server';
import Contact from './src/pages/Contact.jsx';

try {
  const html = renderToString(React.createElement(Contact));
  console.log('SUCCESS');
} catch (e) {
  console.error('ERROR:', e.message);
}
