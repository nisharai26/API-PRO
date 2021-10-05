const express = require ("express");
const vehicleController = require("../db/controllers/vehicle.js");

const router = express.Router();
router.post("/",vehicleController.save);
router.get("/",vehicleController.index);
router.get("/:id",vehicleController.show);
module.exports = router;