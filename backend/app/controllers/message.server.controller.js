const message = require("../models/message.server.models");

exports.list = async function (req, res) {
  console.log("\nRequest to list messages from a conversation...");

  try {
    const convoId = req.params.convoId;
    const result = await message.getAll(convoId);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(`GET MESSAGE ERROR ${err}`);
  }
};

exports.read = async function (req, res) {
  console.log(`\nRequest to read a message...`);

  const messageId = req.params.messageId;
  const convoId = req.params.convoId;

  try {
    const result = await message.getOne(messageId, convoId);
    if (result.length === 0) {
      res.status(400).send("Invalid Id");
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    res.status(500).send("READ MESSAGE ERROR ${id}:$(err)");
  }
};

exports.create = async function (req, res) {
  console.log("\nRequest to create a new message...");

  const convoId = req.params.convoId;
  const messageText = req.body.messageText;
  const userId = req.body.userId;

  try {
    await message.insert(messageText, convoId, userId);
    res.status(200).send("Message created!");
  } catch (err) {
    res.status(500).send(`CREATE MESSAGE ERROR ${messageText}: ${err}`);
  }
};
