const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");
const transporter = nodemailer.createTransport(mailGun(auth));
const auth = {
  auth: {
    api_key: "b8aa4d8490c588e4e0048a0ccc33124e-77751bfc-10b02f6a",
    domain:
      "https://api.mailgun.net/v3/sandbox6d26ca9e03e84b26ae54ac0bf7a4bf05.mailgun.org",
  },
};

const sendMail = (email, subject, text, cb) => {
  const mailOptions = {
    from: email,
    to: "drakecoleman@rocketmail.com",
    subject: subject,
    text: text,
  };
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};
module.exports = sendMail;
