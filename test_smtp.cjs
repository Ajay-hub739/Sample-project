const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'raiseupdigi@gmail.com',
    pass: 'fbhf ryka hhmt rrsp'
  }
});

transporter.verify(function(error, success) {
  if (error) {
    console.log('SMTP connection error:', error);
  } else {
    console.log('SMTP server is ready to take our messages');
  }
});
