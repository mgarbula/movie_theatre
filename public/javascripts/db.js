var mysql = require('mysql2');

DB_HOST = '';
DB_USER = '';
DB_PASSWORD = '';
DB_DATABASE = '';

const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    multipleStatements: true
});

module.exports = db;