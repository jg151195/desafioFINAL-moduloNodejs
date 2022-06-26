import express from "express";
import livrariaController from "../controller/livraria.controller";

const router = express.Router();

router.post("/createCliente", livrariaController.createCliente)
router.put("/updateCliente", livrariaController.updateCliente)
router.delete("/deleteCliente", livrariaController.deleteCliente)
router.get("/getAllClientes", livrariaController.getAllClientes)
router.get("/getCliente", livrariaController.getCliente)

router.post("/createAutor", livrariaController.getAutor)
router.put("/updateAutor", livrariaController.updateAutor)
router.delete("/deleteAutor", livrariaController.deleteAutor)
router.get("/getAllAutor", livrariaController.getAllAutor)
router.get("/getAutor", livrariaController.getAutor)

router.post("/createLivro", livrariaController.createLivro)
router.put("/updateLivro", livrariaController.updateLivro)
router.delete("/deleteLivro", livrariaController.deleteLivro)
router.get("/getLivro", livrariaController.getLivro)
router.get("/getAllLivro", livrariaController.getAllLivro)
router.get("/getLivroFromAutor", livrariaController.getLivroFromAutor)
router.post("/createLivroInfo", livrariaController.createLivroInfo)
router.delete("/deleteLivroInfo", livrariaController.deleteLivroInfo)
router.post("/createAvaliacao", livrariaController.createAvaliacao)
router.delete("/deleteAvaliacao", livrariaController.deleteAvaliacao)

router.post("/createVenda", livrariaController.createVenda)
router.get("/getVenda", livrariaController.getVenda)
router.get("/getAllVenda", livrariaController.getAllVenda)
router.get("/getVendaFromCliente", livrariaController.getVendaFromCliente)
router.get("/getVendaFromLivro", livrariaController.getVendaFromLivro)
router.get("/getVendaFromAutor", livrariaController.getVendaFromAutor)

