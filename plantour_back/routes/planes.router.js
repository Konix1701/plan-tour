const express = require("express");
const router = express.Router();
const planesController = require("../controllers/planes.controller");

router.post("/", planesController.create)
router.get("/", planesController.find)
router.get("/:id", planesController.findOne)
router.put("/:id", planesController.update)
router.delete("/:id", planesController.remove)


module.exports = router