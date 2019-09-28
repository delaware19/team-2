const express = require('express')
var bodyParser = require('body-parser')
require('dotenv').config()

var sql = require("mssql");

var config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    server: '0.0.0.0', 
    database: process.env.DATABASE,
    port: 1434
};

console.log(config);


const app = express();

app.use( bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


app.get("/", (req,res) =>{

    sql.connect(config, (err)=>{


        if(err) console.log(err);
        
        var request = new sql.Request();
           
       //query to the database and get the records
        request.query('Select * from Delaware$;', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
       // res.send("Error?");
    });
});

const server = app.listen(3000, () => {
  console.log('listening on *:3000');
});

