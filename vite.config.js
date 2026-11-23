import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import nodemailer from 'nodemailer'
import { env } from 'node:process'

const smtpPlugin = () => ({
  name: 'smtp-plugin',
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
          let data;
          try {
            data = JSON.parse(body);
            if (!data || typeof data !== 'object' || Array.isArray(data)) {
              respond(400, { status: 'error', message: 'Invalid form request.' });
              return;
            }

            const requiredFields = [
              'businessName',
              'contactName',
              'phoneNumber',
              'emailAddress',
              'businessAddress',
              'products',
            ];
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

            const captchaSecret = env.RECAPTCHA_SECRET_KEY;
            if (!captchaSecret) {
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
                  secret: captchaSecret,
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

            const smtpUsername = env.SMTP_USERNAME;
            const smtpPassword = env.SMTP_PASSWORD;
            if (!smtpUsername || !smtpPassword) {
              console.error('SMTP_USERNAME and SMTP_PASSWORD must be configured for the Vite contact endpoint.');
              respond(503, { status: 'error', message: 'The contact form is temporarily unavailable.' });
              return;
            }

            const transporter = nodemailer.createTransport({
              host: 'smtp.gmail.com',
              port: 465,
              secure: true,
              auth: {
                user: smtpUsername,
                pass: smtpPassword
              }
            });

            const escapeHtml = value => String(value || '').replace(/[&<>"']/g, character => ({
              '&': '&amp;',
              '<': '&lt;',
              '>': '&gt;',
              '"': '&quot;',
              "'": '&#39;',
            })[character]);
            const htmlBody = `
              <h2>New Contact Form Submission</h2>
              <table border='1' cellpadding='10' cellspacing='0'>
                  <tr><th>Business Name</th><td>${escapeHtml(data.businessName)}</td></tr>
                  <tr><th>Contact Name</th><td>${escapeHtml(data.contactName)}</td></tr>
                  <tr><th>Phone Number</th><td>${escapeHtml(data.phoneNumber)}</td></tr>
                  <tr><th>Email Address</th><td>${escapeHtml(data.emailAddress)}</td></tr>
                  <tr><th>Business Address</th><td>${escapeHtml(data.businessAddress)}</td></tr>
                  <tr><th>Products of Interest</th><td>${escapeHtml(data.products)}</td></tr>
                  <tr><th>Message</th><td>${escapeHtml(data.message).replace(/\n/g, '<br>')}</td></tr>
              </table>
            `;

            const mailOptions = {
              from: smtpUsername,
              to: ['chandubilla050@gmail.com', 'info@ggsutilities.com'],
              replyTo: data.emailAddress,
              subject: `New Contact Form Submission from ${data.contactName.replace(/[\r\n]/g, ' ')}`,
              html: htmlBody
            };

            await transporter.sendMail(mailOptions);
            respond(200, { status: 'success', message: 'Thank you for sending the mail' });
          } catch (err) {
            console.error('Contact email delivery failed:', err);
            respond(500, { status: 'error', message: 'Message could not be sent. Please try again later.' });
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
  plugins: [react(), smtpPlugin()],
})
