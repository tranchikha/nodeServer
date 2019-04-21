var firebase = require("firebase-admin");

function STATION_CONTROLLER(routerStation){
	var self = this;
	self.handleRoutes(routerStation);
}

STATION_CONTROLLER.prototype.handleRoutes = function(routerStation){
	routerStation.get('/getalldata', function(req,res){
		try{
			console.log("Called api station data!");
			var db = firebase.database();
			var ref = db.ref("station_controller/stations");
			ref.once("value", function(snapshot) {
				res.send(snapshot.val());
			});
		}
		catch(err) {
			console.log("Called api station data! err " + err);
		}
	});
	routerStation.get('/updatestationdata', function(req,res){
		try{
			console.log("Called api station update!");
			var db = firebase.database();
			var ref = db.ref("station_controller/stations");
			ref.update({
				station_6: {
					humidity: '12',
					id: 'home7',
					led_left: '0',
					led_right: '0',
					need_fan: '1 ',
					temperature: '34'
				},
				station_7: {
					humidity: '14',
					id: 'home8',
					led_left: '0',
					led_right: '0',
					need_fan: '0 ',
					temperature: '31'
				},
				station_8: {
					humidity: '14',
					id: 'home8',
					led_left: '0',
					led_right: '0',
					need_fan: '0 ',
					temperature: '31'
				},
				station_9: {
					humidity: '14',
					id: 'home8',
					led_left: '0',
					led_right: '0',
					need_fan: '0 ',
					temperature: '31'
				},
				station_10: {
					humidity: '14',
					id: 'home8',
					led_left: '0',
					led_right: '0',
					need_fan: '0 ',
					temperature: '31'
				},
				station_11: {
					humidity: '12',
					id: 'home7',
					led_left: '0',
					led_right: '0',
					need_fan: '1 ',
					temperature: '34'
				},
				station_12: {
					humidity: '14',
					id: 'home8',
					led_left: '0',
					led_right: '0',
					need_fan: '0 ',
					temperature: '31'
				},
				station_13: {
					humidity: '14',
					id: 'home8',
					led_left: '0',
					led_right: '0',
					need_fan: '0 ',
					temperature: '31'
				},
				station_14: {
					humidity: '14',
					id: 'home8',
					led_left: '0',
					led_right: '0',
					need_fan: '0 ',
					temperature: '31'
				},
				station_15: {
					humidity: '14',
					id: 'home8',
					led_left: '0',
					led_right: '0',
					need_fan: '0 ',
					temperature: '31'
				}
			});
			res.send('Successfully update!');
		}
		catch(err) {
			console.log("Called api station update! err " + err);
		}
	});
}


module.exports = STATION_CONTROLLER;