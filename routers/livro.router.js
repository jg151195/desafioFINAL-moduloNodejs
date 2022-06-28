import express from "express";

import livroController from "../controller/livro.controller.js";

const router = express.Router();

router.post("/createLivro", livroController.createLivro)
router.put("/updateLivro", livroController.updateLivro)
router.delete("/deleteLivro/:id", livroController.deleteLivro)
router.get("/getAllLivros", livroController.getAllLivros)
router.get("/getLivro/:id", livroController.getLivro)

export default router