const user = require("../models/user.server.models");

exports.list = async function (req, res) {
  console.log("\nRequest to list users...");

  try {
    const result = await user.getAll();
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(`GET USER ERROR ${err}`);
  }
};

exports.create = async function (req, res) {
  console.log("\nRequest to create a new user...");

  const username = req.body.username;

  try {
    await user.insert(username);
    res.status(200).send("User created");
  } catch {
    res.status(500).send(`CREATE USER ERROR ${username}: ${err}`);
  }
};

exports.read = async function (req, res) {
  console.log(`\nRequest to read a user...`);

  const userId = req.params.userId;

  try {
    const result = await user.getOne(userId);
    if (result.length === 0) {
      res.status(400).send("Invalid Id");
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    res.status(500).send("READ USER ERROR ${id}:$(err)");
  }
};

exports.update = async function (req, res) {
  console.log("\nRequest to update a user...");

  try {
    const userId = req.params.userId;
    const newUserDetails = req.body.user;
    await user.alter(newUserDetails, userId);
    res.status(200).send("User updated");
  } catch (err) {
    res.status(501).send(`UPDATE USER ERROR ${err}`);
  }
};

exports.delete = async function (req, res) {
  console.log("\nRequest to delete a user...");

  try {
    const userId = req.params.userId;
    await user.remove(userId);
    res.status(200).send("Deleted user");
  } catch (err) {
    res.status(502).send(`DELETE USER ERROR ${err}`);
  }
};
