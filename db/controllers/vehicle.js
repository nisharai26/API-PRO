var models = require('../models');

module.exports = {
	fetchAll(req, res){
		models.Vehicles.findAll({})
		.then(function(result){
			res.status(200).json(result);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	},
	create(req, res){
		var newVehicles = models.Vehicles.build();
		newVehicles.make = req.body.make;
		newVehicles.model = req.body.model;
		
		console.log(newVehicles);
		newVehicles.save()
		.then(function(result){
			res.status(200).json(result);
		})
		.catch(function(error){
			res.status(500).json(error);
		})
	},

	update(req, res){
		models.Vehicles.findById(req.params.id)
		.then(function(vehiclesToUpdate){
			vehiclesToUpdate.firstName = req.sanitize('make').escape();
			vehiclesToUpdate.lastName = req.sanitize('model').escape();
			
			vehiclesToUpdate.save()
			.then(function(result){
				res.status(200).json(result);
			})
			.catch(function(error){
				res.status(500).json(error);
			})
		})
	},

	delete(req, res){
		models.Vehicles.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(function(result){
			res.status(200).json(result);
		})
		.catch(function(error){
			res.status(500).json(error);
		});
	}
}