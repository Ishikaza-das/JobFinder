const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ADMIN,
        pass: process.env.EMAIL_PASS
    }
});

const sendVerificationEmail = async (email) => {
    const pin = Math.floor(100000 + Math.random()*900000);

    const sendMail = await transport.sendMail({
        from: '"Team Job Finder 👥" <jf@gmail.com>',
        to: email,
        subject: "Verification",
        html:`html: 
      <h1>Welcome to Job Finder!</h1>
      <p>Your verification PIN is: <strong>${pin}</strong></p>
      <p>This PIN will expire in 10 minutes.</p>
    `
    });

    await transport.sendMail(sendMail);
    return pin;
}

module.exports = { sendVerificationEmail};