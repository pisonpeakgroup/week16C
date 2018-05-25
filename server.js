// app dependencies
var express = require("express");
var config =  require("./config/Config");
var newRoute = require("./routes/newRoute");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var app = express();
var port = process.env.PoRT || 1000;
var router = express.Router();



// mongoose DB config code
mongoose.connect(config.mongoUrl);

// bodyparser code
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//router config
app.use('/', router);
newRoute(router);


// port and log message in app
app.listen(port);
console.log('Server started on port ' + port);
