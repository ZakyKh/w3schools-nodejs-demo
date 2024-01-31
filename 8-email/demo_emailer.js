import nodemailer from 'nodemailer';

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    // user: 'mzakykhairuddin@gmail.com',
    // pass: 'gadmdpkcugydjwjl'
    user: 'mzakyk26@gmail.com',
    pass: 'gbyajvzrtgpcbqgm'
  }
});

var mailOptions = {
  // from: 'mzakykhairuddin@gmail.com',
  // to: 'mzakyk26@gmail.com',
  from: 'mzakyk26@gmail.com',
  to: 'mzakykhairuddin@gmail.com',
  subject: 'Sending Email Reply using Node.js',
  text: 'Sent ya one back'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 