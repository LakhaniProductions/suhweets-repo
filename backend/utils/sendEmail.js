const nodemailer = require("nodemailer");

// const sendEmail = async (subject, message, send_to, sent_from, reply_to) => { // original line
const sendEmail = async (
  subject,
  message,
  send_to,
  sent_from,
  reply_to,
  imageFiles = []
) => {
  //testing image add
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: "587",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  const attachments = imageFiles.map((file) => ({
    filename: file.originalname,
    path: file.path
  }));
  const emailContent = {
    from: sent_from,
    to: send_to,
    replyTo: reply_to,
    subject: subject,
    html: message,
    attachments
  };

  //Send Email
  transporter.sendMail(emailContent, (err, info) => {
    if (err) {
      console.log(err, "test");
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;
