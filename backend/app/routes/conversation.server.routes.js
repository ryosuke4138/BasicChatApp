const conversations = require("../controllers/conversation.server.controller");

module.exports = function (app) {
  app
    .route("/api/conversations")
    .get(conversations.list)
    .post(conversations.create);

  app
    .route("/api/conversations/:convoId")
    .get(conversations.read)
    .put(conversations.update)
    .delete(conversations.delete);
};
