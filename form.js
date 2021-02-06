const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: "b8aa4d8490c588e4e0048a0ccc33124e-77751bfc-10b02f6a",
    domain:
      "https://api.mailgun.net/v3/sandbox6d26ca9e03e84b26ae54ac0bf7a4bf05.mailgun.org",
  },
};
const transporter = nodemailer.createTransport(mailGun(auth));

const mailOptions = {
  from: "shbvhsfbksf@aol.com",
  to: "drakecoleman@rocketmail.com",
  subject: "hotdog",
  text: "text",
};
transporter.sendMail(mailOptions, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("success");
  }
});

// module.exports = sendMail;
