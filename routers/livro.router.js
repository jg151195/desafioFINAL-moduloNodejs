import express from "express";

import livroController from "../controller/livro.controller.js";

const router = express.Router();

router.post("/createLivro", livroController.createLivro)
router.put("/updateLivro", livroController.updateLivro)
router.delete("/deleteLivro/:id", livroController.deleteLivro)
router.get("/getAllLivros", livroController.getAllLivros)
router.get("/getLivro/:id", livroController.getLivro)
router.post("/createLivroInfo",livroController.createLivroInfo)
router.put("/updateLivroInfo",livroController.updateLivroInfo)
router.delete("/deleteLivroInfo/:id",livroController.deleteLivroInfo)
router.post("/createAvaliacao/:id/avaliacao",livroController.createAvaliacao)

export default router