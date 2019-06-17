const mysql = require ('mysql')

const conn = mysql.createConnection({
    user: 'root',
    // password: 'dinda123',
    password: 'P@5$w0rd',
    host: 'localhost',
    database: 'remedialbackend',
    port: '3306'
})

module.exports= conn