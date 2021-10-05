const Validator = require('fastest-validator')
const models = require('../models')

function save(req,res){
	const vehicle = {
		make:req.body.make,
		model:req.body.model
	}

	const schema = {
		make:{type:"string",optional:false,max:"100"},
		model:{type:"string",optional:false,max:"100"},
	}

	const v = new Validator();
	const validationResponse = v.validate(vehicle,schema);
	if(validationResponse !== true){
		return res.status(404).json({
		   message: "Validation failed",
		   error: validationResponse
		})
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
function show(req,res){
	const id = req.params.id;
	models.Vehicle.findByID(id).then(result=>{
		if(result){
			res.status(200).json(result);
		} else {
			res.status(404).json({
				message:"Record Not Found"
			})
		}
		
	}).catch(error=>{
		res.status(500).json({
			message:"Something Went Wrong"
		})
	})
}


function index(req,res){
	models.Vehicle.findAll().then(result =>{
		res.status(200).json(result);
	}).catch(error=>{
		res.status(500).json({
			message:"Something Went Wrong"
		})
	})
}

function update(req,res){
	const id = req.params.id;

	const updatedVehicle = {
		make:req.body.make,
		model:req.body.model
	}
	const schema = {
		make:{type:"string",optional:false,max:"100"},
		model:{type:"string",optional:false,max:"100"},
	}
	
	const v = new Validator();
	const validationResponse = v.validate(updatedVehicle,schema);
	if(validationResponse !== true){
		return res.status(404).json({
		   message: "Validation failed",
		   error: validationResponse
		})
	}

	models.Vehicle.update(updatedVehicle,{where:{id:id}}).then(result=>{
			res.status(200).json({
				message:"Record Updated",
				post:updatedVehicle
			});
	
		
	}).catch(error=>{
		res.status(500).json({
			message:"Something Went Wrong"
		})
	})
}


module.exports = {
save:save,
show:show,
index:index,
update:update
}