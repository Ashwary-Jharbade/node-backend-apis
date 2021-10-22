const Email = require("email-templates");
const transporter = require("../email/emailConfig");
var ejs = require("ejs");

const sendCustomEmail = async(dir) => {
  const email = new Email({
    views: {
      options: {
        extention: "ejs",
      },
    },
    message: {
      from: "email here",
      attachments: [
        {
          filename: "letter.txt",
          path: dir + "/public/attachments/letter.txt",
          contentType: "text/plain",
        },
      ],
    },
    preview: false,
    send: true,
    transport: transporter,
  });

  const data = await ejs.renderFile(dir + "/public/templates/basic/temp.ejs", { name: 'Stranger' });

  email
    .send({
      message: {
        to: "email here",
        subject: "Node App",
        html : data
      },
    })
    .then(console.log)
    .catch((error) => {
      console.log(error);
    });
};

module.exports = sendCustomEmail;
