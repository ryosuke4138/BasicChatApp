const mysql = require("mysql2/promise");
require("dotenv").config();

let state = {
  pool: null,
};

exports.connect = async function () {
  state.pool = await mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });
  await state.pool.getConnection(); //checks the connection
  console.log("successfully connected to the database");
};

exports.getPool = function () {
  return state.pool;
};
