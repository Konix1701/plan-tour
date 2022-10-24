const express = require("express");
const router = express.Router();
const reservasController = require("../controllers/reservas.controller");

router.post("/", reservasController.create)
router.get("/", reservasController.find)
router.get("/:id", reservasController.findOne)
router.put("/:id", reservasController.update)
router.delete("/:id", reservasController.remove)


module.exports = router