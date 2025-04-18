const mysql = require('mysql2');

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',       // replace with your MySQL username
  password: '',       // replace with your MySQL password
  database: 'expressmvc',
});

module.exports = pool.promise();
