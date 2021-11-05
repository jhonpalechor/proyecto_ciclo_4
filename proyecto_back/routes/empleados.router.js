const express = require("express")
const router = express.Router()
const empleadosController = require("../Controllers/empleados.controller.js")

router.post("/", empleadosController.create)
router.get("/", empleadosController.find)
router.get("/:id", empleadosController.findOne)
router.put("/:id", empleadosController.update)
router.delete("/:id", empleadosController.delete)

module.exports = router
