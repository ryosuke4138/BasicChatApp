const db = require("../../config/db");

exports.getAll = async function () {
  console.log("Request to get all conversations from the database...");

  const conn = await db.getPool().getConnection();
  const query = "select * from lonversations";
  const [rows] = await conn.query(query);
  conn.release();
  return rows;
};

exports.getOne = async function (convoId) {
  console.log("Request to get one conversation from the database...");

  const conn = await db.getPool().getConnection();
  const query = "select * from conversations where convo_id = ?";
  const [rows] = await conn.query(query, [convoId]);
  conn.release();
  return rows;
};

exports.insert = async function (conversation) {
  console.log("Request to add new conversation");

  const conn = await db.getPool().getConnection();
  const query = "insert into conversations (convo_name) values (?)";
  const [result] = await conn.query(query, [conversation]);
  conn.release();
  return result;
};

exports.alter = async function (conversation, convoId) {
  console.log("Request to update an existing conversation");

  const conn = await db.getPool().getConnection();
  const query = "update conversations set convo_name = ? where convo_id = ?";
  const [result] = await conn.query(query, [conversation, convoId]);
  conn.release();
  return result;
};

exports.remove = async function (convoId) {
  console.log(`\nRequest to delete a conversation in the database...`);

  const conn = await db.getPool().getConnection();
  const query = "delete from conversations where convo_id = ?";
  const [result] = await conn.query(query, [convoId]);
  conn.release();
  return result;
};
