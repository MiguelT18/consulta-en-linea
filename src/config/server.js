const mysql = require("mysql");

const db = {
  host: "localhost",
  user: "root",
  password: "",
  database: "bdd",
};

const pool = mysql.createPool(db);
module.exports = pool;
