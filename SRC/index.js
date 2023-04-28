const express=require('express')
const app=express()
const restService = require ("./rest-service");
// require("./handlers/handler")


// const migrationrun=require('./migration-postgre-database')

app.set("view engine", "ejs")

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use ("/", restService)


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listning to the port ${port}`))