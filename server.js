var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');

var vehicleController = require('./db/controllers/vehicle');


var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));



const vehicleRouter = require("./routers/vehicle")
app.use("/vehicles",vehicleRouter);
app.use("/fullName",vehicleRouter);
app.get('/', function(req, res, next){
	res.send('Home Route - nothing to see here yet ');
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  var errorResponse = {};
  errorResponse.status = err.status;
  errorResponse.message = err.message;
  res.json(errorResponse);
});


app.listen(process.env.PORT || 3000, function () {
  console.log('Express app listening on port 3000');
})

