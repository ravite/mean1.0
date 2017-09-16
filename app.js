var express = require('express'),
    bodyParser = require('body-parser'),
    apiRoutes = require('./server/routes/api'), //api routes
    connection = require("./server/config/db"); //bd connection

var app = express();

app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// setting static files location './node_modules' for libs like angular, bootstrap
app.use(express.static('node_modules'));

// configure our routes
app.use('/api', apiRoutes);

// setting port number for running server
var port = process.env.port || 3000;
 
// starting express server
app.listen(port, function() {
 console.log("Server is running at : http://localhost:" + port);
});