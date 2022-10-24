const express = require("express");
const router = express.Router();
const turistasController = require("../controllers/turistas.controller");

router.post("/", turistasController.create)
router.get("/", turistasController.find)
router.get("/:id", turistasController.findOne)
router.put("/:id", turistasController.update)
router.delete("/:id", turistasController.remove)


module.exports = router