// const mysql = require('mysql2');
const { Pool, Client } = require('pg')
const fs = require('fs')

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   // database: 'email_client',
//   password: 'admin'
// })

const certPath = "/home/ad.rapidops.com/aadarsh.raghuwanshi/Desktop/cockroach/cockroach-v22.2.6.linux-amd64/certs"
const pool = new Pool({
  user: 'root',
  host: 'localhost',
  // database: 'mydb',
  password: 'admin',
  port: 26257,
  ssl: {
    ca: fs.readFileSync(certPath + "/ca.crt")
      .toString(),
    key: fs.readFileSync(certPath + '/client.root.key')
      .toString(),
    cert: fs.readFileSync(certPath + '/client.root.crt')
      .toString()
  }
})

// connection.connect(function (err) {
//   if (err) throw(err);
//   else console.log("connected");
// });

pool.connect(function (err) {
  if (err) throw (err);
  else console.log("connected");
});

// const db=connection.promise()
const db = pool

const databaseUser = require('./find-user')
const getUsers = databaseUser({ db })

const databaseFolder = require('./folder')
const getAllFolder = databaseFolder({ db })

const allDatabases = Object.freeze({
  getUsers,
  getAllFolder,
})

module.exports = allDatabases