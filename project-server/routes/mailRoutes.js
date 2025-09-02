const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `<${email}>`,
      to: process.env.EMAIL_USER, // you will receive the mail
      replyTo: `"${name}" <${email}>`,
      subject: `${subject}`,
      text: message,
    });

    res.json({ success: true, message: "Email sent successfully 🚀" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Email failed ❌" });
  }
});

module.exports = router;