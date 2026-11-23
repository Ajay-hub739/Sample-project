const nodemailer = require('nodemailer');

const { SMTP_USERNAME, SMTP_PASSWORD } = process.env;
if (!SMTP_USERNAME || !SMTP_PASSWORD) {
  throw new Error('Set SMTP_USERNAME and SMTP_PASSWORD before running this check.');
}

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: SMTP_USERNAME,
    pass: SMTP_PASSWORD
  }
});

transporter.verify(function(error, success) {
  if (error) {
    console.log('SMTP connection error:', error);
  } else {
    console.log('SMTP server is ready to take our messages');
  }
});
