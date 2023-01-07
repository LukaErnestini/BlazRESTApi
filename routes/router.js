const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.post("/add-pacient", controller.postAddPacient);
router.post("/add-napotnica", controller.postAddNapotnica);
router.post("/preveri-napotnico", controller.postPreveriNapotnico);

module.exports = router;
