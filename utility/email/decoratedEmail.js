const emailStringify = require("./emailStringify");

const decoratedMailOption = (receiver, subject, content) => {
  return {
    from: process.env.EMAIL,
    to: emailStringify(receiver),
    subject: subject,
    html: content,
  };
};

module.exports = decoratedMailOption;
