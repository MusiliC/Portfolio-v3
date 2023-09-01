import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

export const mailOptions = {
  from: process.env.USER,
  to: process.env.MY_EMAIL,
};
