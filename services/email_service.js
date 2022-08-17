const nodemailer = require("nodemailer");

const sendEmail = async (from, to, subject, text, html) => {
  try {
    const emailTransporter = nodemailer.createTransport({
      host: process.env.SMTP_SERVER,
      port: process.env.SMTP_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USERNAME, // generated ethereal user
        pass: process.env.SMTP_PASSWORD, // generated ethereal password
      },
    });
    await emailTransporter.sendMail({ from, to, subject, html, text });
    return {
      status: 200,
      message: "Email has been sent, if not please resent",
    };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to send Email");
  }
};

module.exports = sendEmail;
