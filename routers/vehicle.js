const express = require ("express");
const vehicleController = require("../db/controllers/vehicle.js");

const router = express.Router();
router.post("/",vehicleController.save);
module.exports = router;