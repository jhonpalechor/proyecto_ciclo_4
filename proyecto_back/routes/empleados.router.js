const express =require("express");
const router= express.Router();
const empleadosController= require("../controllers/empleados.controller");

router.post("/",empleadosController.create)//crear datos
router.get("/", empleadosController.find)//encontrar datos
router.get("/:id",empleadosController.findOne)// metodo de obtener un solo dato por id
router.put("/:id",empleadosController.update)//metodo de agregar dato
router.delete("/:id",empleadosController.remove)//metodo de eliminar dato

module.exports=router