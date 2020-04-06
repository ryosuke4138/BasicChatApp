const db = require("./config/db");
const express = require("./config/express");

const app = express();

async function main() {
  try {
    await db.connect();
    app.listen(process.env.PORT, function () {
      console.log("Listening on port: " + process.env.PORT);
    });
  } catch (err) {
    console.log("Unable to connect to MySQL");
    process.exit(1);
  }
}

main().catch((err) => console.log(err));
