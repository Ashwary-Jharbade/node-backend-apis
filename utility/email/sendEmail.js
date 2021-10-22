const transporter = require("./emailConfig");

const email = (options) => {
    transporter.sendMail(options, (err,info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    })
}

module.exports = email; 