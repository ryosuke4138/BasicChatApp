const db = require("../../config/db");

exports.getAll = async function (convoId) {
  console.log("Request to get all messages from the database...");

  const conn = await db.getPool().getConnection();
  const query = "select * from messages WHERE convo_id = ?";
  const [rows, _] = await conn.query(query, [convoId]);
  conn.release();
  return rows;
};

exports.getOne = async function (messageId, convoId) {
  console.log("Request to get message ${id} from the database...");

  const conn = await db.getPool().getConnection();
  const query = "select * from messages WHERE message_id = ? and convo_id = ?";
  const [rows] = await conn.query(query, [messageId, convoId]);
  conn.release();
  return rows;
};

exports.insert = async function (messageText, convoId, userId) {
  console.log("Request to insert message ${messagetext} into the database...");

  const conn = await db.getPool().getConnection();
  const query =
    "insert into messages (message, convo_id, user_id) values (?, ?, ?)";
  const [result] = await conn.query(query, [messageText, convoId, userId]);
  conn.release();
  return result;
};
