var createError = require('http-errors');
var express = require('express');
var mysql = require('mysql');
var mongo = require('mongodb');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser  = require("body-parser");
var env       = process.env.NODE_ENV || 'database';
var config    = require(__dirname + '/configs/config.json')[env];
var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://khatran-startcodingfb.firebaseio.com"
});


var app = express();
var server = require('http').Server(app);
var port = normalizePort(process.env.PORT || '3001');
var routerServer = require('./routerServer.js');

function NODESERVER(){
    var self = this;
    self.createServer();
	self.startServer();
};
NODESERVER.prototype.createServer = function() {
  var self = this;
	self.connectMysql();
	self.configExpress();
}
NODESERVER.prototype.connectMysql = function() {
    var self = this;
	var con = mysql.createConnection({
		host: config.host,
		user: config.username,
		password: config.password
	});
	con.connect(function(err){
		if(err) throw err;
		console.log("Connected to MySQL Database!");
	});
}
/*NODESERVER.prototype.connectMongoDB = function() {
  var self = this;
  var MongoClient = require('mongodb').MongoClient;
  var url = config.mongoaddr;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
  });
}*/
NODESERVER.prototype.configExpress = function() {
    var self = this;
	app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    var router = express.Router();
    //app.use(allowCrossDomain);
    app.use('/api', router);
	var router_Server = new routerServer(router);
}
NODESERVER.prototype.startServer = function() {
    var self = this;
	app.set('port', port);
	app.set('ip', process.env.IP || '127.0.0.1');
	server.listen(port);
	server.on('error', onError);
	server.on('listening', onListening);
}


/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  console.log('Listening on address: ' + app.get('ip') + ' and port: ' + app.get('port'));
}


new NODESERVER();
