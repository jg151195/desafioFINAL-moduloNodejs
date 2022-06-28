import express from "express";
import clienteController from "../controller/cliente.controller.js";


const router = express.Router();

router.post("/createCliente", clienteController.createCliente)
router.put("/updateCliente", clienteController.updateCliente)
router.delete("/deleteCliente/:id", clienteController.deleteCliente)
router.get("/getAllClientes", clienteController.getAllClientes)
router.get("/getCliente/:id", clienteController.getCliente)

// router.post("/createLivro", clienteController.createLivro)
// router.put("/updateLivro", clienteController.updateLivro)
// router.delete("/deleteLivro", clienteController.deleteLivro)
// router.get("/getLivro", clienteController.getLivro)
// router.get("/getAllLivro", clienteController.getAllLivro)
// router.get("/getLivroFromAutor", clienteController.getLivroFromAutor)
// router.post("/createLivroInfo", clienteController.createLivroInfo)
// router.delete("/deleteLivroInfo", clienteController.deleteLivroInfo)
// router.post("/createAvaliacao", clienteController.createAvaliacao)
// router.delete("/deleteAvaliacao", clienteController.deleteAvaliacao)

// router.post("/createVenda", clienteController.createVenda)
// router.get("/getVenda", clienteController.getVenda)
// router.get("/getAllVenda", clienteController.getAllVenda)
// router.get("/getVendaFromCliente", clienteController.getVendaFromCliente)
// router.get("/getVendaFromLivro", clienteController.getVendaFromLivro)
// router.get("/getVendaFromAutor", clienteController.getVendaFromAutor)

export default router