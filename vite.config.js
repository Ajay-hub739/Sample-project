import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { env } from 'node:process'

const captchaPlugin = () => ({
  name: 'contact-captcha-plugin',
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      if (req.url === '/send_mail.php' && req.method === 'POST') {
        const respond = (statusCode, payload) => {
          res.statusCode = statusCode;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(payload));
        };
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', async () => {
          try {
            const data = JSON.parse(body);
            const requiredFields = [
              'businessName',
              'contactName',
              'phoneNumber',
              'emailAddress',
              'businessAddress',
              'products',
            ];
            if (!data || typeof data !== 'object' || Array.isArray(data)) {
              respond(400, { status: 'error', message: 'Invalid form request.' });
              return;
            }
            if (requiredFields.some(field => typeof data[field] !== 'string' || !data[field].trim())) {
              respond(400, { status: 'error', message: 'Please complete all required fields.' });
              return;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.emailAddress)) {
              respond(400, { status: 'error', message: 'Please provide a valid email address.' });
              return;
            }
            if (typeof data.captchaToken !== 'string' || !data.captchaToken.trim()) {
              respond(400, {
                status: 'error',
                code: 'captcha_failed',
                message: 'Please complete the CAPTCHA before submitting your request.',
              });
              return;
            }

            if (!env.RECAPTCHA_SECRET_KEY) {
              console.error('RECAPTCHA_SECRET_KEY is not configured for the Vite contact endpoint.');
              respond(503, { status: 'error', message: 'The contact form is temporarily unavailable.' });
              return;
            }

            let verification;
            try {
              const verifyResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                  secret: env.RECAPTCHA_SECRET_KEY,
                  response: data.captchaToken.trim(),
                }),
                signal: AbortSignal.timeout(10000),
              });
              if (!verifyResponse.ok) {
                throw new Error(`Google returned HTTP ${verifyResponse.status}`);
              }
              verification = await verifyResponse.json();
            } catch (error) {
              console.error('Google reCAPTCHA verification request failed:', error);
              respond(503, {
                status: 'error',
                message: 'CAPTCHA verification is temporarily unavailable. Please try again.',
              });
              return;
            }

            if (!verification.success) {
              respond(400, {
                status: 'error',
                code: 'captcha_failed',
                message: 'CAPTCHA verification failed. Please try again.',
              });
              return;
            }

            respond(200, { status: 'success', message: 'CAPTCHA verified.' });
          } catch (err) {
            console.error('Contact form CAPTCHA request failed:', err);
            respond(400, { status: 'error', message: 'Invalid form request.' });
          }
        });
      } else {
        next();
      }
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), captchaPlugin()],
})
