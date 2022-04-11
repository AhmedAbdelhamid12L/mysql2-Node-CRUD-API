const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port:'3306',
  database:'MARKET',
  user:'root',
  password:'Abcd#1234'
});

module.exports = connection;