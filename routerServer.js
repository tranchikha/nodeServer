var express = require('express');
/*define controller list*/
var station = require('./controller/stationController');
/*define router list*/
var routerStation = express.Router();
/*Create object router*/
function routerServer(router) {
	var self = this;
	self.handleRouters(router);
}

routerServer.prototype.handleRouters = function(router){
	var self = this;
	router.use('/station', routerStation); self.stationController(routerStation);
}

routerServer.prototype.stationController = function(router){
	var stationController = new station(router);
}

module.exports = routerServer;