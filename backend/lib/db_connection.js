const mysql = require('mysql');
require('dotenv').config();

var connection = mysql.createConnection({
    host: process.env.dbHost,
    user: process.env.dbUser,
    password: process.env.dbPwd,
    database: process.env.dbName,
    multipleStatements: true
});

module.exports = connection;  