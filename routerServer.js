var express = require('express');
/*define controller list*/
var temperature = require('./controller/temperatureController');
/*define router list*/
var routerTemperature = express.Router();
/*Create object router*/
function routerServer(router) {
	var self = this;
	self.handleRouters(router);
}

routerServer.prototype.handleRouters = function(router){
	var self = this;
	router.use('/temperature', routerTemperature); self.temperatureController(routerTemperature);
}

routerServer.prototype.temperatureController = function(router){
	var temperatureController = new temperature(router);
}

module.exports = routerServer;