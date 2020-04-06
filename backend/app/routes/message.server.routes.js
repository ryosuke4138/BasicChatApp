const messages = require("../controllers/message.server.controller");

module.exports = function (app) {
  app
    .route("/api/conversations/:convoId/messages")
    .get(messages.list)
    .post(messages.create);

  app
    .route("/api/conversations/:convoId/messages/:messageId")
    .get(messages.read);
};
