const models = require('../models')

function save(req,res){
	const vehicle = {
		make:req.body.make,
		model:req.body.model
	}

	models.Vehicle.create(vehicle).then(result =>{
             res.status(201).json({
				 message:"Data Inserted Successfully",
				 post:result
			
				 
			 })
	}).catch(error =>{
		res.status(500).json({
			message:"error",
			error:error
		})

	})
}


module.exports = {
save:save
}