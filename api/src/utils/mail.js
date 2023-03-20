const sgMail = require("@sendgrid/mail");
const SEND_GRID_API_KEY =
  "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";

const SendEmail = async (body,htmL) => {
  return new Promise(async (resolve) => {
    console.log("email sending start");
    sgMail.setApiKey(SEND_GRID_API_KEY);

    const msg = {
      to: "tigerwarish123@gmail.com",
      from: "mdshahbazwarish1996@gmail.com", //hr@imperialmanagement.in
      subject: "send grid test",
      html: htmL,
    };

    sgMail
      .send(msg)
      .then((response) => {
        console.log("Email sent");
        resolve(response);
      })
      .catch((error) => {
        console.log(error.response.body);
        resolve(error);
      });
  });
};

module.exports = { SendEmail };
