const mysql = require("mysql");

const db = {
  host: "localhost",
  user: "root",
  password: "Univalle",
  database: "bdfacturacion",
};

const pool = mysql.createPool(db);
module.exports = pool;
