const conversation = require("../models/conversation.server.models");

exports.list = async function (req, res) {
  console.log("\nRequest to list conversations...");

  try {
    const result = await conversation.getAll();
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(`GET CONVERSATION ERROR ${err}`);
  }
};

exports.create = async function (req, res) {
  console.log("\nRequest to create a conversation...");

  const convo = req.body.conversation;

  try {
    const result = await conversation.insert(convo);
    res.status(200).send(`Conversation created!`);
  } catch (err) {
    res.status(500).send(`CREATE CONVERSATION ERROR ${convo}: ${err}`);
  }
};

exports.read = async function (req, res) {
  console.log(`\nRequest to read a conversation...`);

  const convoId = req.params.convoId;

  try {
    const result = await conversation.getOne(convoId);
    if (result.length === 0) {
      res.status(400).send("Invalid conversation id");
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    res.status(500).send("READ CONVERSATION ERROR ${id}:$(err)");
  }
};

exports.update = async function (req, res) {
  console.log("\nRequest to update a conversation");

  try {
    const convoId = req.params.id;
    const newConversationDetails = req.body.conversation;
    const result = await conversation.alter(newConversationDetails, convoId);
    res.status(200).send(`Conversation updated!`);
  } catch (err) {
    res.status(501).send(`UPDATE CONVERSATION ERROR ${err}`);
  }
};

exports.delete = async function (req, res) {
  console.log("\nRequest to delete a conversation...");

  try {
    const convoId = req.params.id;
    const result = await conversation.remove(convoId);
    res.status(200).send(`Conversation deleted`);
  } catch (err) {
    res.status(502).send(`DELETE CONVERSATION ERROR ${err}`);
  }
};
