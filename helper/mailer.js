import nodemailer from  "nodemailer"




export const sendEmail = async (name, email, subject, body) => {
try {
      var transport = nodemailer.createTransport({
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


} catch (error) {
    
}
};