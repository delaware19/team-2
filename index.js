const express = require('express')
var bodyParser = require('body-parser')

const app = express();

app.use( bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 




const server = app.listen(3000, () => {
  console.log('listening on *:3000');
});

