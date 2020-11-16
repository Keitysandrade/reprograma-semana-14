const express = require("express")
const router = express.Router()
const controller = require("../controllers/cursosController")

router.get("/", controller.getAll)
router.get("/turno", controller.getPorTurno)
router.get("/bootcamps", controller.getBootcamps)
router.get("/:id", controller.getById)
router.get("/:estado/gratis", controller.getCursosGratis)
router.get("/:estado/pagos", controller.getCursosPagos)
router.post("/", controller.postCurso)
router.delete("/turno", controller.deleteCursosPorTurno)
router.delete("/:id", controller.deleteCurso)
router.put("/:id", controller.putCurso)


module.exports = router