const db = require("../../config/db");

exports.getAll = async function () {
  console.log("Request to get all users from the database...");

  const conn = await db.getPool().getConnection();
  const query = "select * from lab2_users";
  const [rows] = await conn.query(query);
  conn.release();
  return rows;
};

exports.getOne = async function (userId) {
  console.log("Request to get user ${id} from the database...");

  const conn = await db.getPool().getConnection();
  const query = "SELECT * from lab2_users WHERE user_id = ?";
  const [rows] = await conn.query(query, [userId]);
  conn.release();
  return rows;
};

exports.insert = async function (username) {
  console.log("Request to insert ${username} into the database...");

  const conn = await db.getPool().getConnection();
  const query = "insert into lab2_users (username) values (?)";
  const [result] = await conn.query(query, [username]);
  conn.release();
  return result;
};

exports.alter = async function (username, userId) {
  console.log(`\nRequest to update ${username} in the database...`);

  const conn = await db.getPool().getConnection();
  const query = "update users set username = ? WHERE user_id = ?";
  const [result] = await conn.query(query, [username, userId]);
  conn.release();
  return result;
};

exports.remove = async function (userId) {
  console.log(`\nRequest to delete user in the database...`);

  const conn = await db.getPool().getConnection();
  const query = "delete from users where user_id = ?";
  const [result] = await conn.query(query, [userId]);
  conn.release();
  return result;
};
