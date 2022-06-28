import express from "express";
import vendaController from "../controller/venda.controller.js";


const router = express.Router();

router.post("/createVenda", vendaController.createVenda)
router.put("/updateVenda", vendaController.updateVenda)
router.delete("/deleteVenda/:id", vendaController.deleteVenda)
router.get("/getAllVendas", vendaController.getAllVendas)
router.get("/getVenda/:id", vendaController.getVenda)

export default router