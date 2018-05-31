
function TEMPERATURE_CONTROLLER(routerTemperature){
	var self = this;
	self.handleRoutes(routerTemperature);
}

TEMPERATURE_CONTROLLER.prototype.handleRoutes = function(routerTemperature){
	routerTemperature.get('/gettemp', function(req,res){
		try{
			console.log("Called api temperate_gettemp!");
			res.send('Hello Kha');
		}
		catch(err) {
			console.log("Called api temperate_gettemp! err " + err);
		}
	});
	routerTemperature.get('/settemp', function(req,res){
		try{
			console.log("Called api temperate_settemp!");
			res.send('Hello KhaTran');
		}
		catch(err) {
			console.log("Called api temperate_settemp! err " + err);
		}
	});
}


module.exports = TEMPERATURE_CONTROLLER;