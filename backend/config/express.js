const express = require("express");
const bodyParser = require("body-parser");

module.exports = function () {
  const app = express();

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
  });

  app.use(bodyParser.json());

  require("../app/routes/user.server.routes.js")(app);
  require("../app/routes/conversation.server.routes.js")(app);
  require("../app/routes/message.server.routes.js")(app);

  return app;
};
