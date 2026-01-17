const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Add validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ 
      success: false, 
      message: "All fields are required" 
    });
  }

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
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`, // FIXED: Must use your authenticated email
      to: process.env.EMAIL_USER,
      replyTo: email, // User's email for easy reply
      subject: `Portfolio: ${subject} - from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      text: `From: ${name} (${email})\nSubject: ${subject}\n\n${message}`,
    });

    res.json({ success: true, message: "Email sent successfully 🚀" });
  } catch (error) {
    console.error("Email error:", error.message); // Better error logging
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

module.exports = router;