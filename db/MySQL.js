// require("dotenv").config();

const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
});

// let sql = "SELECT * FROM Customer;";

// pool.execute(sql, (err, result) => {
//   console.log(sql);
//   if (err) throw err;
//   console.log(result);
// });

module.exports = pool.promise();
// module.exports = pool;
