const express = require('express')
var bodyParser = require('body-parser')
require('dotenv').config()

var sql = require("mssql");

var config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    server: 'localhost', 
    database: process.env.DATABASE
};

const app = express();

app.use( bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


app.get("/", (req,res) =>{
    sql.connect(config, (err)=>{
       
    });
});

const server = app.listen(3000, () => {
  console.log('listening on *:3000');
});

