import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import nodemailer from 'nodemailer'

const smtpPlugin = () => ({
  name: 'smtp-plugin',
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      if (req.url === '/send_mail.php' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', async () => {
          try {
            const data = JSON.parse(body);
            
            // SMTP Credentials provided
            const transporter = nodemailer.createTransport({
              host: 'smtp.gmail.com',
              port: 465,
              secure: true,
              auth: {
                user: 'raiseupdigi@gmail.com',
                pass: 'fbhf ryka hhmt rrsp'
              }
            });

            const htmlBody = `
              <h2>New Contact Form Submission</h2>
              <table border='1' cellpadding='10' cellspacing='0'>
                  <tr><th>Business Name</th><td>${data.businessName || ''}</td></tr>
                  <tr><th>Contact Name</th><td>${data.contactName || ''}</td></tr>
                  <tr><th>Phone Number</th><td>${data.phoneNumber || ''}</td></tr>
                  <tr><th>Email Address</th><td>${data.emailAddress || ''}</td></tr>
                  <tr><th>Business Address</th><td>${data.businessAddress || ''}</td></tr>
                  <tr><th>Products of Interest</th><td>${data.products || ''}</td></tr>
                  <tr><th>Message</th><td>${data.message || ''}</td></tr>
              </table>
            `;

            const mailOptions = {
              from: 'raiseupdigi@gmail.com',
              to: ['chandubilla050@gmail.com', 'pavanprabha800@gmail.com'],
              replyTo: data.emailAddress,
              subject: `New Contact Form Submission from ${data.contactName || 'User'}`,
              html: htmlBody
            };

            await transporter.sendMail(mailOptions);
            
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ status: 'success', message: 'Thank you for sending the mail' }));
          } catch (err) {
            console.error('SMTP Error:', err);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ status: 'error', message: err.message }));
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
