import express from "express";
import nodemailer from "nodemailer";

const contactRouter = express.Router();

contactRouter.post("/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !email || !message) {
    return res.status(400).json({ success: false, error: "Required fields missing" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,  // .env se aayega
        pass: process.env.EMAIL_PASS,   // Gmail App Password
      },
    });

    await transporter.sendMail({
      from: `"Alok Enterprises Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,      // apne hi email pe aayega
      replyTo: email,                   // user ke email pe reply kar sako
      subject: `New Contact Form Submission — ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          
          <!-- Header -->
          <div style="background-color: #1D2C60; padding: 24px 32px;">
            <h2 style="color: white; margin: 0; font-size: 22px;">New Contact Form Submission</h2>
            <p style="color: #aab4d4; margin: 6px 0 0; font-size: 14px;">Alok Enterprises Website</p>
          </div>

          <!-- Body -->
          <div style="padding: 32px; background: #ffffff;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #888; font-size: 13px; width: 130px;">Full Name</td>
                <td style="padding: 10px 0; color: #1D2C60; font-weight: 600; font-size: 15px;">${firstName} ${lastName}</td>
              </tr>
              <tr style="border-top: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; color: #888; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; color: #1D2C60; font-size: 15px;">
                  <a href="mailto:${email}" style="color: #1D2C60;">${email}</a>
                </td>
              </tr>
              <tr style="border-top: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; color: #888; font-size: 13px;">Phone</td>
                <td style="padding: 10px 0; color: #1D2C60; font-size: 15px;">${phone || "—"}</td>
              </tr>
              <tr style="border-top: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; color: #888; font-size: 13px; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #333; font-size: 15px; line-height: 1.6;">${message.replace(/\n/g, "<br/>")}</td>
              </tr>
            </table>
          </div>

          <!-- Footer -->
          <div style="background: #f5f6fa; padding: 16px 32px; text-align: center;">
            <p style="color: #aaa; font-size: 12px; margin: 0;">© 2025 Alok Enterprises — This email was sent from your website contact form.</p>
          </div>
        </div>
      `,
    });

    return res.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ success: false, error: "Failed to send email" });
  }
});

export default contactRouter;